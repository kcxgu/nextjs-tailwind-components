import Link from "next/link"
import LightDarkToggle from "./toggle/LightDarkToggle"

const Header = () => {
    return (
        <header className="px-6 py-4 border-b dark:border-gray-600 dark:bg-slate-900 dark:text-white">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
                <Link href={"/"}>Mind Boggling</Link>
                <form className="hidden md:w-1/2 lg:w-1/3 mx-auto border rounded-lg border-purple-700 md:flex flex-row items-center justify-between">
                    <input
                        className="w-full px-4 py-2 rounded-tl-lg rounded-bl-lg focus:outline-purple-500 dark:bg-gray-100"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <button className="py-2 px-4 bg-purple-700 text-white rounded-tr-lg rounded-br-lg">
                        Subscribe
                    </button>
                </form>
                <nav className="flex flex-row items-center gap-4">
                    <LightDarkToggle />
                    <button>Sign in</button>
                </nav>
            </div>
        </header>
    )
}

export default Header