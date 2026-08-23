import { useState } from "react"

import Header from "./componentes/Header/Header"
import ProductCard from "./componentes/ProductCard/ProductCard"
import RegistrarProduto from "./pages/RegistrarProduto/RegistrarProduto"

import tecladoImg from "./assets/teclado.png"
import mouseImg from "./assets/mouse.png"
import notebookImg from "./assets/notebook.png"

function App() {

  const [tela, setTela] = useState("produtos")

  return (
    <>
      <Header setTela={setTela} />

      {tela === "produtos" && (
        <main>
          <h2>Produtos</h2>

          <div className="listaProdutos">

            <ProductCard
              nome="Mouse"
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
              nome="Notebook"
              imagem={notebookImg}
              categoria="Notebook"
              preco={2499.90}
              quantidade={5}
            />

          </div>
        </main>
      )}

      {tela === "cadastro" && (
        <RegistrarProduto />
      )}

    </>
  )
}

export default App