import React from 'react';
import data from '../data.json';
import { Hero, Pricing, Fallback } from './components';

// Mapa de componentes (El cerebro del PageBuilder)
const componentMap: Record<string, React.FC<any>> = {
  hero: Hero,
  pricing: Pricing,
};

// Iterador dinámico
export const PageBuilder = ({ blocks }: { blocks: any[] }) => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {blocks.map((block, index) => {
        const Component = componentMap[block.type];
        
        // Si el componente existe, lo renderiza. Si no, renderiza el Fallback sin crashear.
        if (Component) {
          return <Component key={index} {...block.props} />;
        }
        return <Fallback key={index} type={block.type} />;
      })}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Dynamic Renderer</h1>
      <PageBuilder blocks={data} />
    </main>
  );
}