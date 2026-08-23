import styles from "./RegistrarProduto.module.css"

function RegisterProduct() {
    return (
        <div className={styles.container}>

            <h1>Cadastrar Produto</h1>

            <label>Nome</label>
            <input type="text" />

            <label>Descrição</label>
            <input type="text" />

            <label>Preço</label>
            <input type="number" />

            <label>Categoria</label>
            <input type="text" />

            <label>Quantidade</label>
            <input type="number" />

            <label>Imagem</label>
            <input type="file" accept="image/*" />

            <button>Cadastrar</button>

        </div>
    )
}

export default RegisterProduct