import styles from "./Header.module.css"


function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Novatec</h1>

      <nav className={styles.nav}>
        <a href="#">Produtos</a>
        <a href="#">Cadastrar produto</a>
      </nav>
    </header>
  )
}

export default Header
