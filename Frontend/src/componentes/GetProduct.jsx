import { useEffect, useState } from "react"
import ProductCard from "./ProductCard/ProductCard"
import axios from "axios"


export function GetProduct() {

    const [produto, setProduto] = useState([])

    async function buscarProdutos() {
        axios.get("http://localhost:8080/produtos")
        .then(resposta => {
            setProduto(resposta.data)
        })
        .catch((error)=>{
            console.log("Houve um erro na requisição", error)
        })
    }

    useEffect(() => {
        buscarProdutos()
    }, [])

    return (
            <>
        {produto.map((item) => (
            <ProductCard
                key={item.id}
                nome={item.nome}
                imagem={item.imagem}
                descricao={item.descricao}
                categoria={item.categoria}
                preco={item.preco}
                quantidade={item.quantidade}
            />
        ))}
    </>
    )
}

export default GetProduct