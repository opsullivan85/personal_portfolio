import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
    return (
        <div class="grid place-items-center">
            <nav className={styles.description}>
                <a href="/">home</a> | <a href="/todolist">todo</a>
            </nav>
            {children}
        </div>
    )
}