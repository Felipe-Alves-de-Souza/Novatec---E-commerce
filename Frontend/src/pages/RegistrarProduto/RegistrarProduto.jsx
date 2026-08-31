import styles from "./RegistrarProduto.module.css"
import { useRef } from "react"
import axios from 'axios'



function RegisterProduct() {

  const inputNome = useRef()
  const inputDescricao = useRef()
  const inputPreco = useRef()
  const inputCategoria = useRef()
  const inputQuantidade = useRef()
  const inputImagem = useRef()


  async function criarProduto() {
    const nome = inputNome.current.value
    const preco = Number(inputPreco.current.value)
    const quantidade = Number(inputQuantidade.current.value)
    const categoria = inputCategoria.current.value
    const descricao = inputDescricao.current.value
    const imagem = inputImagem.current.value

    if (!nome.trim()) {
      alert("Campo nome está vazio, esse campo é obrigatório")
      return
    }
    else if (!preco || preco <= 0) {
      alert("Campo preço está vazio ou inválido")
      return
    }
    else if (!quantidade || quantidade <= 0) {
      alert("Campo quantidade está vazio ou inválido")
      return
    }
    try {
      await axios.post("http://localhost:8080/produtos",{
        nome,
          descricao,
          preco,
          categoria,
          quantidade,
          imagem
        });

        

      alert("Produto cadastrado com sucesso!")
      inputNome.current.value = ""
      inputPreco.current.value = ""
      inputQuantidade.current.value = ""
      inputCategoria.current.value = ""
      inputDescricao.current.value = ""
      inputImagem.current.value = ""


    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className={styles.container}>

      <h1>Cadastrar Produto</h1>

      <label>Nome</label>
      <input type="text" ref={inputNome} />

      <label>Descrição</label>
      <input type="text" ref={inputDescricao} />

      <label>Preço</label>
      <input type="number" ref={inputPreco} />

      <label>Categoria</label>
      <input type="text" ref={inputCategoria} />

      <label>Quantidade</label>
      <input type="number" ref={inputQuantidade} />

      <label>Imagem</label>
      <input type="text" ref={inputImagem} placeholder="Cole a URL da imagem aqui" />

      <button onClick={criarProduto}>Cadastrar</button>

    </div>
  )
}

export default RegisterProduct