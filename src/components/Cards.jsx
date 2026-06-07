import React, { useState } from 'react'
import { CreditCard, Plus, Lock, Eye, EyeOff, Settings } from 'lucide-react'

function Cards() {
  const [cards, setCards] = useState([
    { 
      id: 1, 
      number: '4532 1234 5678 9012', 
      name: 'Charles E.', 
      expiry: '12/28',
      type: 'debit',
      color: 'from-primary-500 to-primary-700',
      status: 'active'
    },
    { 
      id: 2, 
      number: '5425 2334 6789 0123', 
      name: 'Charles E.', 
      expiry: '08/27',
      type: 'credit',
      color: 'from-purple-500 to-purple-700',
      status: 'active'
    },
  ])

  const [showNumber, setShowNumber] = useState({})

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Mes Cartes</h1>
          <p className="text-dark-500 mt-1">Gérez vos cartes bancaires</p>
        </div>
        <button className="btn-primary w-fit">
          <Plus size={20} className="mr-2" />
          Nouvelle carte
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id}
            className={`bg-gradient-to-br ${card.color} rounded-3xl p-6 text-white relative overflow-hidden`}
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              {/* Card type */}
              <div className="flex items-center justify-between mb-8">
                <CreditCard size={32} />
                <span className="text-sm font-semibold uppercase">{card.type}</span>
              </div>

              {/* Card number */}
              <div className="mb-6">
                <p className="text-2xl font-bold tracking-wider">
                  {showNumber[card.id] ? card.number : card.number.replace(/\d{4}(?=\d)/g, '****')}
                </p>
              </div>

              {/* Card details */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80 mb-1">Titulaire</p>
                  <p className="font-semibold">{card.name}</p>
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">Expire</p>
                  <p className="font-semibold">{card.expiry}</p>
                </div>
                <button 
                  onClick={() => setShowNumber({...showNumber, [card.id]: !showNumber[card.id]})}
                  className="p-2 bg-white/20 rounded-xl hover:bg-white/30"
                >
                  {showNumber[card.id] ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Card Settings */}
      <div className="card">
        <h2 className="text-xl font-bold mb-6">Paramètres des cartes</h2>
        <div className="space-y-4">
          {[
            { label: 'Bloquer la carte temporairement', desc: 'Activer/désactiver rapidement' },
            { label: 'Limites de dépenses', desc: 'Journières, mensuelles' },
            { label: 'Paiements sans contact', desc: 'Activer/désactiver' },
            { label: 'Notifications', desc: 'Alertes pour chaque transaction' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-dark-50 rounded-xl transition-colors cursor-pointer">
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm text-dark-500">{item.desc}</p>
              </div>
              <Settings size={20} className="text-dark-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards