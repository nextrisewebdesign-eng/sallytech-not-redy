
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { db } from '../firebase/config';
import { PRODUCTS as INITIAL_PRODUCTS } from '../constants';
import { 
  collection, 
  onSnapshot, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  query
} from 'firebase/firestore';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  isFallback: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFallback, setIsFallback] = useState(true);

  useEffect(() => {
    let unsubscribe: () => void;

    const syncProducts = () => {
      setError(null);
      try {
        const laptopsCollection = collection(db, 'laptops');
        const q = query(laptopsCollection);
        
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const items: Product[] = [];
          querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id } as Product);
          });
          
          if (items.length > 0) {
            // Success: Use live Firestore data
            const sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
            setProducts(sortedItems);
            setIsFallback(false);
            setError(null);
          } else {
            // Success but empty: Keep fallback data so the site isn't blank
            setProducts(INITIAL_PRODUCTS);
            setIsFallback(true);
          }
          setLoading(false);
        }, (err) => {
          console.error("Firestore Permission/Sync Error:", err);
          setLoading(false);
          setIsFallback(true);
          
          if (err.code === 'permission-denied') {
            setError("Database permissions restricted. Please update Firestore Rules in Firebase Console.");
          } else {
            setError(err.message);
          }
        });
      } catch (err: any) {
        console.error("Sync Initialization Error:", err);
        setError(err.message);
        setLoading(false);
        setIsFallback(true);
      }
    };

    syncProducts();
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const addProduct = async (productData: Omit<Product, 'id'>) => {
    try {
      await addDoc(collection(db, 'laptops'), productData);
    } catch (err: any) {
      console.error("Add Product Error:", err);
      throw err;
    }
  };

  const updateProduct = async (updatedProduct: Product) => {
    try {
      const { id, ...data } = updatedProduct;
      const productRef = doc(db, 'laptops', id);
      await updateDoc(productRef, data);
    } catch (err: any) {
      console.error("Update Product Error:", err);
      throw err;
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      // Check if it's a demo product ID (1-10) which won't exist in Firestore
      const isDemoId = parseInt(id) >= 1 && parseInt(id) <= 10 && id.length < 3;
      if (isDemoId) {
        // Just remove from local state if it's a demo item (optional, onSnapshot will override usually)
        setProducts(prev => prev.filter(p => p.id !== id));
        return;
      }
      
      const productRef = doc(db, 'laptops', id);
      await deleteDoc(productRef);
    } catch (err: any) {
      console.error("Delete Product Error:", err);
      throw err;
    }
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, loading, error, isFallback }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
