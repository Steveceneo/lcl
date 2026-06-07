import React from 'react'
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer 
} from 'recharts'

const data = [
  { name: 'Lun', dépenses: 4000, revenus: 2400 },
  { name: 'Mar', dépenses: 3000, revenus: 1398 },
  { name: 'Mer', dépenses: 2000, revenus: 9800 },
  { name: 'Jeu', dépenses: 2780, revenus: 3908 },
  { name: 'Ven', dépenses: 1890, revenus: 4800 },
  { name: 'Sam', dépenses: 2390, revenus: 3800 },
  { name: 'Dim', dépenses: 3490, revenus: 4300 },
]

function SpendingChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorDepenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorRevenus" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="dépenses" 
            stroke="#0ea5e9" 
            fillOpacity={1} 
            fill="url(#colorDepenses)"
          />
          <Area 
            type="monotone" 
            dataKey="revenus" 
            stroke="#10b981" 
            fillOpacity={1} 
            fill="url(#colorRevenus)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SpendingChart