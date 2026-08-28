import { useEffect, useState } from "react"
import ProductCard from "./ProductCard/ProductCard"


export function GetProduct() {

    const [produto, setProduto] = useState([])

    async function getProduto() {
        try {
            const response = await fetch("http://127.0.0.1:8080/produtos")

            const data = await response.json()

            console.log(data)

            setProduto(data)

        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getProduto()
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