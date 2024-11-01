import Link from "next/link"
const Footer = () => {
    return(
        <div>
        <footer>
            <nav className="flex bg-blue-500 w-full h-20  align-text-bottom text-white py-6 px-64 text-1xl">
            <Link href = "https://www.linkedin.com/in/maira-naseer-0791402b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Made by Maira Naseeruddin its my LinkedIn account link</Link>
            </nav>
        </footer>
        </div>
    )
}
export default Footer