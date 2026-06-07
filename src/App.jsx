import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { 
  Home, CreditCard, RefreshCw, BarChart3, Settings, 
  LogOut, Menu, X, Bell, Search, ArrowUpRight, 
  ArrowDownLeft, User, ChevronDown 
} from 'lucide-react'
import Dashboard from './components/Dashboard'
import Cards from './components/Cards'
import Transactions from './components/Transactions'
import Stats from './components/Stats'

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation()
  
  const menuItems = [
    { icon: Home, label: 'Accueil', path: '/' },
    { icon: CreditCard, label: 'Cartes', path: '/cards' },
    { icon: RefreshCw, label: 'Transactions', path: '/transactions' },
    { icon: BarChart3, label: 'Statistiques', path: '/stats' },
    { icon: Settings, label: 'Paramètres', path: '/settings' },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white shadow-xl transform transition-transform duration-300
        lg:transform-none flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-dark-200">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            BMCE Bank
          </h1>
          <p className="text-sm text-dark-500 mt-1">Banque en ligne</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                  ${isActive 
                    ? 'bg-primary-50 text-primary-600 font-semibold' 
                    : 'text-dark-600 hover:bg-dark-100'}
                `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-dark-200">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-dark-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all">
            <LogOut size={20} />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>
    </>
  )
}

function Header({ onMenuClick }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Mobile menu button */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-dark-100 rounded-xl"
        >
          <Menu size={24} />
        </button>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher..."
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-dark-100 rounded-xl">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-semibold">
              CE
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold">Charles E.</p>
              <p className="text-xs text-dark-500">Compte premium</p>
            </div>
            <ChevronDown size={16} className="hidden md:block" />
          </div>
        </div>
      </div>
    </header>
  )
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [page, setPage] = useState('home');
  return (
    <Router>
      <div className="min-h-screen bg-dark-50 flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <div className="flex-1 flex flex-col lg:ml-0">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          
          <main className="flex-1 p-4 lg:p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/settings" element={
                <div className="card">
                  <h2 className="text-2xl font-bold mb-4">Paramètres</h2>
                  <p className="text-dark-500">Page en construction...</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}
import TransferPage from './pages/TransferPage';

function App() {
  return <TransferPage />;
}

export default App;