
import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { Product } from '../types';
import { 
  Plus, 
  Pencil, 
  Trash2, 
  X, 
  Package, 
  AlertCircle,
  LogIn,
  LogOut,
  Mail,
  Lock,
  Loader2,
  ShieldAlert,
  Check,
  Cpu,
  Monitor,
  HardDrive,
  Database,
  Image as ImageIcon,
  Info,
  Tag
} from 'lucide-react';

const Admin: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, loading: productsLoading, error: dbError } = useProducts();
  const { user, loading: authLoading, logout } = useAuth();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    brand: '',
    category: 'laptop',
    price: 0,
    offerPrice: 0,
    stock: 0,
    image: '',
    condition: 'Refurbished',
    specs: {
      processor: '',
      ram: '',
      storage: '',
      screenSize: '',
    }
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setLoginError('Incorrect login credentials or server error.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleOpenModal = (product?: Product) => {
    setSubmissionError(null);
    if (product) {
      setEditingProduct(product);
      setFormData({ 
        name: product.name,
        brand: product.brand,
        category: product.category,
        price: product.price,
        offerPrice: product.offerPrice || 0,
        stock: product.stock,
        image: product.image,
        condition: product.condition,
        specs: { 
          processor: product.specs?.processor || '',
          ram: product.specs?.ram || '',
          storage: product.specs?.storage || '',
          screenSize: product.specs?.screenSize || ''
        }
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        brand: '',
        category: 'laptop',
        price: 0,
        offerPrice: 0,
        stock: 0,
        image: '',
        condition: 'Refurbished',
        specs: {
          processor: '',
          ram: '',
          storage: '',
          screenSize: '',
        }
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);
    try {
      // Clean up offerPrice if it's 0 or empty
      const submissionData = { ...formData };
      if (!submissionData.offerPrice || submissionData.offerPrice === 0) {
        delete (submissionData as any).offerPrice;
      }

      if (editingProduct) {
        await updateProduct({ ...submissionData, id: editingProduct.id } as Product);
      } else {
        await addProduct(submissionData);
      }
      setIsModalOpen(false);
    } catch (error: any) {
      console.error(error);
      if (error.code === 'permission-denied') {
        setSubmissionError("Permission Denied: Ensure your Firestore rules allow writes for authenticated users.");
      } else {
        setSubmissionError("An error occurred while saving. Check console for details.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    setConfirmDeleteId(null);
    try {
      await deleteProduct(id);
    } catch (error: any) {
      console.error("Delete Error:", error);
      alert(error.code === 'permission-denied' ? "Permission Denied: Check Firestore rules." : "Error deleting item.");
    } finally {
      setDeletingId(null);
    }
  };

  if (authLoading || (user && productsLoading)) {
    return (
      <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
        <Loader2 className="text-indigo-500 animate-spin" size={48} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0B1120] py-20 px-5 flex items-center justify-center">
        <div className="max-w-md w-full bg-slate-900/40 rounded-[40px] border border-white/5 p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <div className="bg-indigo-600/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-indigo-500/20">
              <LogIn className="text-indigo-400" size={32} />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Admin Portal</h1>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">SallyTech Security</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-white font-bold" 
                  placeholder="admin@sallytech.co.ke"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  required
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-white font-bold" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            {loginError && (
              <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 p-4 rounded-xl">
                <AlertCircle size={18} />
                <p className="text-xs font-black uppercase tracking-wider">{loginError}</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoggingIn}
              className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all transform active:scale-95 shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {isLoggingIn ? <Loader2 className="animate-spin" size={24} /> : 'Unlock Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] py-16 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <Package className="text-indigo-400" />
              Live Inventory
            </h1>
            {dbError && (
              <div className="flex items-center gap-2 text-amber-400 mt-2 bg-amber-400/10 p-2 rounded-lg border border-amber-400/20 w-fit">
                <ShieldAlert size={14} />
                <p className="text-[9px] font-black uppercase tracking-widest">{dbError}</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleOpenModal()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 text-sm uppercase tracking-widest"
            >
              <Plus size={20} />
              Add Laptop
            </button>
            <button 
              onClick={logout}
              className="bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white p-4 rounded-2xl font-black flex items-center justify-center transition-all border border-white/5"
              title="Logout"
            >
              <LogOut size={24} />
            </button>
          </div>
        </div>

        <div className="bg-slate-900/40 rounded-[40px] border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50 border-b border-white/5">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Model</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Price</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {products.map((product) => (
                  <tr key={product.id} className={`hover:bg-slate-800/30 transition-colors group ${deletingId === product.id ? 'opacity-50 pointer-events-none' : ''}`}>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <img src={product.image} className="w-12 h-10 rounded-lg object-cover bg-slate-800 image-sharp" />
                        <div>
                          <p className="text-white font-bold text-sm">{product.name}</p>
                          <div className="flex items-center gap-2">
                             <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest">{product.brand} • {product.stock} Stock</p>
                             <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${product.condition === 'Brand New' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                {product.condition}
                             </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <p className={`text-white font-black ${product.offerPrice ? 'line-through text-slate-500 text-xs' : ''}`}>
                          Ksh {product.price.toLocaleString()}
                        </p>
                        {product.offerPrice && (
                          <p className="text-[#2DD4BF] font-black">Ksh {product.offerPrice.toLocaleString()}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-3 min-w-[120px]">
                        {confirmDeleteId === product.id ? (
                          <div className="flex items-center gap-2 animate-in slide-in-from-right-2">
                             <button 
                              onClick={() => handleDelete(product.id)}
                              className="p-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all flex items-center gap-1.5"
                            >
                              <Check size={18} />
                              <span className="text-[10px] font-black uppercase tracking-widest">Confirm</span>
                            </button>
                            <button 
                              onClick={() => setConfirmDeleteId(null)}
                              className="p-3 bg-slate-800 text-slate-400 rounded-xl hover:bg-slate-700 transition-all"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        ) : deletingId === product.id ? (
                          <div className="p-3 bg-slate-800 text-indigo-400 rounded-xl">
                            <Loader2 className="animate-spin" size={18} />
                          </div>
                        ) : (
                          <>
                            <button 
                              onClick={() => handleOpenModal(product)}
                              className="p-3 bg-slate-800 text-indigo-400 rounded-xl hover:bg-indigo-600 hover:text-white transition-all border border-white/5"
                            >
                              <Pencil size={18} />
                            </button>
                            <button 
                              onClick={() => setConfirmDeleteId(product.id)}
                              className="p-3 bg-slate-800 text-red-400 rounded-xl hover:bg-red-600 hover:text-white transition-all border border-white/5"
                            >
                              <Trash2 size={18} />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#0B1120]/95 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
            <div className="relative bg-[#1A2234] w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-[40px] shadow-2xl border border-white/10 p-6 md:p-10 scrollbar-hide">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-all border border-white/10 z-50"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Form Column */}
                <div className="lg:col-span-7">
                  <h2 className="text-3xl font-black text-white mb-8 tracking-tight">
                    {editingProduct ? 'Update Details' : 'Add New Inventory'}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="space-y-4">
                      <p className="text-xs font-black text-indigo-400 uppercase tracking-widest border-b border-indigo-500/20 pb-2">General Information</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Laptop Model</label>
                          <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold" placeholder="e.g. Dell XPS 13" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Brand</label>
                          <input required type="text" value={formData.brand} onChange={(e) => setFormData({...formData, brand: e.target.value})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold" placeholder="e.g. Dell" />
                        </div>
                        
                        {/* New Condition Choice */}
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Condition</label>
                          <select 
                            value={formData.condition} 
                            onChange={(e) => setFormData({...formData, condition: e.target.value as any})} 
                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold appearance-none cursor-pointer"
                          >
                            <option value="Refurbished">Refurbished</option>
                            <option value="Brand New">Brand New</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Stock Level</label>
                          <input required type="number" value={formData.stock} onChange={(e) => setFormData({...formData, stock: parseInt(e.target.value)})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold" />
                        </div>
                      </div>
                    </div>

                    {/* Pricing Info */}
                    <div className="space-y-4">
                      <p className="text-xs font-black text-indigo-400 uppercase tracking-widest border-b border-indigo-500/20 pb-2">Pricing</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">Actual Price (Ksh)</label>
                          <input required type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 flex items-center gap-2">
                             <Tag size={12}/> Offer Price (Optional)
                          </label>
                          <input 
                            type="number" 
                            value={formData.offerPrice || ''} 
                            onChange={(e) => setFormData({...formData, offerPrice: e.target.value ? parseInt(e.target.value) : 0})} 
                            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/20 text-[#2DD4BF] font-black focus:border-[#2DD4BF]" 
                            placeholder="Leave empty for no offer"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Specs Info */}
                    <div className="space-y-4">
                      <p className="text-xs font-black text-indigo-400 uppercase tracking-widest border-b border-indigo-500/20 pb-2">Technical Specifications</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 flex items-center gap-2"><Cpu size={12}/> Processor</label>
                          <input required type="text" value={formData.specs.processor} onChange={(e) => setFormData({...formData, specs: {...formData.specs, processor: e.target.value}})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold" placeholder="e.g. Core i7 12th Gen" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 flex items-center gap-2"><Database size={12}/> RAM (Memory)</label>
                          <input required type="text" value={formData.specs.ram} onChange={(e) => setFormData({...formData, specs: {...formData.specs, ram: e.target.value}})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold" placeholder="e.g. 16GB DDR4" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 flex items-center gap-2"><HardDrive size={12}/> Storage (SSD)</label>
                          <input required type="text" value={formData.specs.storage} onChange={(e) => setFormData({...formData, specs: {...formData.specs, storage: e.target.value}})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold" placeholder="e.g. 512GB NVMe SSD" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2 flex items-center gap-2"><Monitor size={12}/> Screen Size</label>
                          <input required type="text" value={formData.specs.screenSize} onChange={(e) => setFormData({...formData, specs: {...formData.specs, screenSize: e.target.value}})} className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold" placeholder="e.g. 14 inch 4K OLED" />
                        </div>
                      </div>
                    </div>

                    {/* Image URL with TIP */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-2">High Quality Image URL</label>
                        <div className="group relative">
                          <Info size={14} className="text-indigo-400 cursor-help" />
                          <div className="absolute bottom-full right-0 mb-2 w-64 p-4 bg-slate-900 border border-indigo-500/30 rounded-2xl hidden group-hover:block text-[10px] text-slate-300 font-bold z-[100] shadow-2xl">
                             Tip: For best quality, use direct links from sites like Unsplash, or right-click any image on Google and select "Copy image address". Avoid small thumbnail links.
                          </div>
                        </div>
                      </div>
                      <input 
                        required 
                        type="url" 
                        value={formData.image} 
                        onChange={(e) => setFormData({...formData, image: e.target.value})} 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold" 
                        placeholder="Paste direct high-res image link here" 
                      />
                    </div>

                    {submissionError && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold flex items-center gap-2">
                        <AlertCircle size={16} />
                        {submissionError}
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-indigo-600/20"
                    >
                      {isSubmitting ? <Loader2 className="animate-spin" size={24} /> : (editingProduct ? 'Save Updates' : 'Publish to Website')}
                    </button>
                  </form>
                </div>

                {/* Live Preview Column */}
                <div className="lg:col-span-5 flex flex-col">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 pl-2">Live Preview (Quality Check)</p>
                   <div className="flex-grow bg-slate-950/50 rounded-[32px] border border-white/5 p-4 flex flex-col items-center justify-center min-h-[300px] overflow-hidden group">
                      {formData.image ? (
                        <div className="relative w-full h-full flex flex-col">
                           <div className="bg-black/20 rounded-2xl overflow-hidden aspect-square flex items-center justify-center mb-6">
                              <img 
                                src={formData.image} 
                                alt="Preview" 
                                className="w-full h-full object-contain image-sharp transition-transform duration-500 group-hover:scale-105" 
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/1A2234/white?text=Invalid+Image+URL';
                                }}
                              />
                           </div>
                           <div className="space-y-4 px-4">
                              <p className="text-indigo-400 font-black text-[10px] uppercase tracking-widest">{formData.brand || 'BRAND'} PROFESSIONAL</p>
                              <h3 className="text-xl font-black text-white">{formData.name || 'Laptop Model Name'}</h3>
                              <div className="flex items-center gap-3">
                                 <span className="text-2xl font-black text-[#2DD4BF]">
                                    Ksh {(formData.offerPrice && formData.offerPrice > 0 ? formData.offerPrice : formData.price).toLocaleString()}
                                 </span>
                                 {formData.offerPrice && formData.offerPrice > 0 && (
                                    <span className="text-slate-600 font-bold text-xs line-through italic">Ksh {formData.price.toLocaleString()}</span>
                                 )}
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                 <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                                    <p className="text-[8px] font-black text-slate-500 uppercase">CPU</p>
                                    <p className="text-[10px] font-bold text-slate-300 truncate">{formData.specs.processor || 'Core iX...'}</p>
                                 </div>
                                 <div className="bg-white/5 p-2 rounded-lg border border-white/5 flex items-center justify-between">
                                    <div>
                                       <p className="text-[8px] font-black text-slate-500 uppercase">Status</p>
                                       <p className="text-[10px] font-bold text-slate-300 truncate">{formData.condition}</p>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full ${formData.condition === 'Brand New' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                                 </div>
                              </div>
                           </div>
                           <div className="absolute top-4 right-4 bg-green-500 text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter shadow-lg">Live View</div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-4 text-slate-600">
                           <div className="bg-white/5 w-20 h-20 rounded-3xl flex items-center justify-center">
                              <ImageIcon size={40} />
                           </div>
                           <p className="text-sm font-bold uppercase tracking-widest">Image Preview Area</p>
                           <p className="text-[10px] text-center max-w-[150px]">Paste an image URL to see how it looks on the site</p>
                        </div>
                      )}
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
