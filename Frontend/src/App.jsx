import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './componentes/Header/Header'
import ProductCard from './componentes/ProductCard/ProductCard'
import tecladoImg from './assets/teclado.png'
import mouseImg from './assets/mouse.png'
import notebookImg from './assets/notebook.png'

function App() {

  return (
    <>
      <Header />

      <main>
        <h2>Produtos</h2>
        <div className="listaProdutos">
            <ProductCard
      nome="Teclado Mecânico"
      imagem={mouseImg}
      categoria="Periféricos"
      preco={249.90}
      quantidade={15}
      
    />
    <ProductCard
      nome="Teclado Mecânico"
      imagem={tecladoImg}
      categoria="Periféricos"
      preco={249.90}
      quantidade={15}
      
    />
     <ProductCard
      nome="Teclado Mecânico"
      imagem={notebookImg}
      categoria="Periféricos"
      preco={249.90}
      quantidade={15}
      
    />
    <ProductCard
      nome="Teclado Mecânico"
      imagem={notebookImg}
      categoria="Periféricos"
      preco={249.90}
      quantidade={15}
      
    />
    <ProductCard
      nome="Teclado Mecânico"
      imagem={notebookImg}
      categoria="Periféricos"
      preco={249.90}
      quantidade={15}
      
    />
    <ProductCard
      nome="Teclado Mecânico"
      imagem={notebookImg}
      categoria="Periféricos"
      preco={249.90}
      quantidade={15}
      
    />
    <ProductCard
      nome="Teclado Mecânico"
      imagem={notebookImg}
      categoria="Periféricos"
      preco={249.90}
      quantidade={15}
      
    />
</div>
      </main>
    </>
  )
}

export default App
