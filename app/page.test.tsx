import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageBuilder } from './page';

describe('PageBuilder Dynamic Rendering', () => {
  it('renders known components and handles unknown component types without crashing', () => {
    // 1. Preparamos datos falsos con un componente válido y uno que no existe
    const mockData = [
      {
        type: 'hero',
        props: { title: 'Test Hero', subtitle: 'This is working' }
      },
      {
        type: 'made-up-component',
        props: { foo: 'bar' }
      }
    ];

    // 2. Renderizamos el constructor de página
    render(<PageBuilder blocks={mockData} />);

    // 3. Verificamos que el componente válido sí se renderizó
    expect(screen.getByText('Test Hero')).toBeInTheDocument();

    // 4. Verificamos que NO hubo crash y que el fallback de error se muestra para el desconocido
    expect(screen.getByText(/is not recognized/i)).toBeInTheDocument();
  });
});