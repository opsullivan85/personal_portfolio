
export default function Layout({ children }) {
    return (
        <div class="contents">
            <nav>
                <a href="/">home</a> |     <a href="/todolist">to do list</a>
            </nav>
            <h1> </h1>
            {children}
        </div>
    )
}