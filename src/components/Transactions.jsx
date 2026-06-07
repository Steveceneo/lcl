import React, { useState } from 'react'
import { 
  ArrowUpRight, ArrowDownLeft, Search, Filter, 
  Download, Calendar, DollarSign
} from 'lucide-react'

function Transactions() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const transactions = [
    { id: 1, name: 'Salaire Novembre', amount: 45000, type: 'revenu', date: '2024-12-01', category: 'Salaire' },
    { id: 2, name: 'Amazon FR', amount: -125.99, type: 'dépense', date: '2024-12-02', category: 'Shopping' },
    { id: 3, name: 'Netflix', amount: -12.99, type: 'dépense', date: '2024-12-02', category: 'Abonnement' },
    { id: 4, name: 'Resto Le Gourmet', amount: -85.50, type: 'dépense', date: '2024-12-01', category: 'Restauration' },
    { id: 5, name: 'Bonus Performance', amount: 5000, type: 'revenu', date: '2024-12-01', category: 'Bonus' },
    { id: 6, name: 'Uber', amount: -24.50, type: 'dépense', date: '2024-11-30', category: 'Transport' },
    { id: 7, name: 'Carrefour', amount: -156.30, type: 'dépense', date: '2024-11-30', category: 'Alimentation' },
    { id: 8, name: 'YouTube Premium', amount: -13.99, type: 'dépense', date: '2024-11-29', category: 'Abonnement' },
    { id: 9, name: 'Virement reçu', amount: 2000, type: 'revenu', date: '2024-11-28', category: 'Virement' },
    { id: 10, name: 'Spotify', amount: -11.99, type: 'dépense', date: '2024-11-28', category: 'Abonnement' },
  ]

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const filteredTransactions = transactions.filter(t => {
    if (filter === 'all') return true
    if (filter === 'income') return t.type === 'revenu'
    if (filter === 'expense') return t.type === 'dépense'
    return true
  }).filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase())
  )

  const totalIncome = filteredTransactions
    .filter(t => t.type === 'revenu')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = filteredTransactions
    .filter(t => t.type === 'dépense')
    .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Transactions</h1>
          <p className="text-dark-500 mt-1">Historique complet de vos mouvements</p>
        </div>
        <button className="btn-secondary w-fit">
          <Download size={20} className="mr-2" />
          Exporter
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-green-500 to-green-700 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <ArrowDownLeft size={24} />
            </div>
            <span className="font-semibold">Total Revenus</span>
          </div>
          <p className="text-3xl font-bold">{formatCurrency(totalIncome)}</p>
        </div>

        <div className="card bg-gradient-to-br from-red-500 to-red-700 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <ArrowUpRight size={24} />
            </div>
            <span className="font-semibold">Total Dépenses</span>
          </div>
          <p className="text-3xl font-bold">{formatCurrency(totalExpense)}</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary-100 text-primary-600 rounded-xl">
              <DollarSign size={24} />
            </div>
            <span className="font-semibold">Balance</span>
          </div>
          <p className="text-3xl font-bold text-dark-900">{formatCurrency(totalIncome + totalExpense)}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une transaction..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-10"
              />
            </div>
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                filter === 'all' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
              }`}
            >
              Tout
            </button>
            <button
              onClick={() => setFilter('income')}
              className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                filter === 'income' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
              }`}
            >
              Revenus
            </button>
            <button
              onClick={() => setFilter('expense')}
              className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                filter === 'expense' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
              }`}
            >
              Dépenses
            </button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <div 
              key={transaction.id}
              className="flex items-center justify-between p-4 hover:bg-dark-50 rounded-xl transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  transaction.type === 'revenu' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {transaction.type === 'revenu' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                </div>
                <div>
                  <p className="font-semibold">{transaction.name}</p>
                  <p className="text-sm text-dark-500">{transaction.category} • {formatDate(transaction.date)}</p>
                </div>
              </div>
              <span className={`font-bold text-lg ${
                transaction.amount > 0 ? 'text-green-600' : 'text-dark-900'
              }`}>
                {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
              </span>
            </div>
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-500">Aucune transaction trouvée</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Transactions