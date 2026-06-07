import React from 'react'
import { 
  TrendingUp, TrendingDown, Wallet, CreditCard, 
  ArrowUpRight, ArrowDownLeft, DollarSign 
} from 'lucide-react'
import SpendingChart from './SpendingChart'

function Dashboard() {
  const accounts = [
    { 
      id: 1, 
      name: 'Compte Courant', 
      balance: 125430.50, 
      color: 'from-primary-500 to-primary-700',
      icon: Wallet
    },
    { 
      id: 2, 
      name: 'Épargne', 
      balance: 85000.00, 
      color: 'from-green-500 to-green-700',
      icon: TrendingUp
    },
    { 
      id: 3, 
      name: 'Carte Premium', 
      balance: 15230.75, 
      color: 'from-purple-500 to-purple-700',
      icon: CreditCard
    },
  ]

  const stats = [
    { 
      label: 'Revenus du mois', 
      value: 45000, 
      change: '+12.5%', 
      isPositive: true,
      icon: ArrowDownLeft,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    { 
      label: 'Dépenses du mois', 
      value: 28500, 
      change: '-5.3%', 
      isPositive: true,
      icon: ArrowUpRight,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-100'
    },
    { 
      label: 'Épargne', 
      value: 16500, 
      change: '+18.2%', 
      isPositive: true,
      icon: TrendingUp,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
  ]

  const recentTransactions = [
    { id: 1, name: 'Amazon', amount: -125.99, type: 'dépense', date: "Aujourd'hui", icon: '🛒' },
    { id: 2, name: 'Salaire', amount: 45000, type: 'revenu', date: "Hier", icon: '💰' },
    { id: 3, name: 'Netflix', amount: -12.99, type: 'dépense', date: "2 déc", icon: '🎬' },
    { id: 4, name: 'Resto', amount: -85.50, type: 'dépense', date: "1 déc", icon: '🍽️' },
    { id: 5, name: 'Bonus', amount: 5000, type: 'revenu', date: "1 déc", icon: '🎁' },
  ]

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-dark-900">Tableau de bord</h1>
          <p className="text-dark-500 mt-1">Bienvenue, Charles! Voici votre vue d'ensemble.</p>
        </div>
        <button className="btn-primary w-fit">
          + Nouveau virement
        </button>
      </div>

      {/* Accounts Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account) => {
          const Icon = account.icon
          return (
            <div 
              key={account.id}
              className={`card bg-gradient-to-br ${account.color} text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Icon size={24} />
                  </div>
                  <span className="font-semibold">{account.name}</span>
                </div>
                <p className="text-3xl font-bold mb-2">{formatCurrency(account.balance)}</p>
                <p className="text-sm text-white/80">*** **** **** {account.id}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 ${stat.bgColor} ${stat.iconColor} rounded-xl`}>
                  <Icon size={24} />
                </div>
                <span className={`text-sm font-semibold ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-dark-500 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-dark-900">{formatCurrency(stat.value)}</p>
            </div>
          )
        })}
      </div>

      {/* Chart & Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Aperçu des dépenses</h2>
            <select className="input-field w-fit px-3 py-2 text-sm">
              <option>Cette semaine</option>
              <option>Ce mois</option>
              <option>Cette année</option>
            </select>
          </div>
          <SpendingChart />
        </div>

        {/* Recent Transactions */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Transactions récentes</h2>
            <a href="/transactions" className="text-primary-600 text-sm font-semibold hover:underline">
              Voir tout
            </a>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-dark-50 rounded-xl transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-dark-100 rounded-xl flex items-center justify-center text-2xl">
                    {transaction.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{transaction.name}</p>
                    <p className="text-sm text-dark-500">{transaction.date}</p>
                  </div>
                </div>
                <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-dark-900'}`}>
                  {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard