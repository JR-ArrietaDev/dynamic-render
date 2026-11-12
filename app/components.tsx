import React from 'react';

export const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="p-10 bg-blue-600 text-white text-center rounded-lg mb-4">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="mt-2 text-lg">{subtitle}</p>
  </div>
);

export const Pricing = ({ plan, price }: { plan: string; price: string }) => (
  <div className="p-6 border-2 border-gray-200 rounded-lg text-center mb-4">
    <h2 className="text-2xl font-semibold">{plan}</h2>
    <p className="text-xl mt-2 text-blue-500 font-bold">{price}</p>
  </div>
);

// Este es el secreto para que no explote la app (El requisito de la prueba)
export const Fallback = ({ type }: { type: string }) => (
  <div className="p-4 bg-red-100 text-red-700 border border-red-400 rounded text-sm mb-4">
    ⚠️ Development Note: The component type <strong>"{type}"</strong> is not recognized.
  </div>
);