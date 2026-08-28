import { useState } from "react"

import Header from "./componentes/Header/Header"
import ProductCard from "./componentes/ProductCard/ProductCard"
import RegistrarProduto from "./pages/RegistrarProduto/RegistrarProduto"

import tecladoImg from "./assets/teclado.png"
import mouseImg from "./assets/mouse.png"
import notebookImg from "./assets/notebook.png"
import GetProduct from "./componentes/GetProduct"

function App() {

  

  const [tela, setTela] = useState("produtos")




  return (
    <>
      <Header setTela={setTela} />

      {tela === "produtos" && (
 <main>
          <h2>Produtos</h2>

          <div className="listaProdutos">
            <GetProduct />
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