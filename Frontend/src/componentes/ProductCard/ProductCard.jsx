import styles from "./ProductCard.module.css"
import GetProduct from "../GetProduct"


function ProductCard({nome, imagem, descricao, categoria, preco, quantidade}){
    

    return(
        <div className={styles.card}>
            <p className={styles.nome}>{nome}</p>
           <img className={styles.imagem} src={imagem} alt={nome} /><br />
           <div className={styles.conteudo}>
            <span className={styles.descricao}>{descricao}</span>
            <p className={styles.categoria}>Categoria: {categoria}</p>
            <p className={styles.preco}>Valor unitário: R$ {Number(preco).toFixed(2)}</p>
           <p className={styles.quantidade}>Estoque: {quantidade}</p>

            </div>
            <button className={styles.botao}>Compre Agora</button>
        </div>
    )
}
export default ProductCard