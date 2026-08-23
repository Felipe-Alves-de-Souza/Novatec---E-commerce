import styles from "./Header.module.css"

function Header({ setTela }) {

  return (
    <header className={styles.header}>

      <h1 className={styles.logo}>Novatec</h1>

      <nav className={styles.nav}>

        <button onClick={() => setTela("produtos")}>Produtos</button>

        <button onClick={() => setTela("cadastro")}>Cadastrar Produto</button>

      </nav>

    </header>
  )
}

export default Header