// 13. src/components/Stats.jsx
import React from 'react'
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line 
} from 'recharts'
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react'

function Stats() {
  const monthlyData = [
    { month: 'Jan', dépenses: 3200, revenus: 4500 },
    { month: 'Feb', dépenses: 2800, revenus: 4500 },
    { month: 'Mar', dépenses: 3500, revenus: 5200 },
    { month: 'Apr', dépenses: 3100, revenus: 4500 },
    { month: 'May', dépenses: 2900, revenus: 4500 },
    { month: 'Jun', dépenses: 3300, revenus: 4500 },
    { month: 'Jul', dépenses: 3000, revenus: 4500 },
    { month: 'Aug', dépenses: 3400, revenus: 4500 },
    { month: 'Sep', dépenses: 2700, revenus: 4500 },
    { month: 'Oct', dépenses: 3100, revenus: 4500 },
    { month: 'Nov', dépenses: 2850, revenus: 4500 },
    { month: 'Dec', dépenses: 3600, revenus: 4500 },
  ]

  const categoryData = [
    { name: 'Alimentation', value: 450, color: '#0ea5e9' },
    { name: 'Transport', value: 280, color: '#3b82f6' },
    { name: 'Shopping', value: 320, color: '#6366f1' },
    { name: 'Restauration', value: 185, color: '#8b5cf6' },
    { name: 'Abonnements', value: 120, color: '#a855f7' },
    { name: 'Autres', value: 95, color: '#d946ef' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Statistiques</h1>
        <p className="text-dark-500 mt-1">Analysez vos finances en détail</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <TrendingUp size={24} />
            </div>
            <span className="font-semibold">Revenus Annuels</span>
          </div>
          <p className="text-3xl font-bold text-dark-900">54,000 USD</p>
          <p className="text-sm text-green-600 mt-2">+12% par rapport à 2023</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <TrendingDown size={24} />
            </div>
            <span className="font-semibold">Dépenses Annuelles</span>
          </div>
          <p className="text-3xl font-bold text-dark-900">36,550 USD</p>
          <p className="text-sm text-red-600 mt-2">-5% par rapport à 2023</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary-100 text-primary-600 rounded-xl">
              <Wallet size={24} />
            </div>
            <span className="font-semibold">Épargne Totale</span>
          </div>
          <p className="text-3xl font-bold text-dark-900">17,450 USD</p>
          <p className="text-sm text-blue-600 mt-2">32% du revenu total</p>
        </div>
      </div>

      {/* Monthly Chart */}
      <div className="card">
        <h2 className="text-xl font-bold mb-6">Revenus vs Dépenses - Année 2024</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="revenus" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="dépenses" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Categories Pie Chart */}
      <div className="card">
        <h2 className="text-xl font-bold mb-6">Dépenses par Catégorie</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Stats