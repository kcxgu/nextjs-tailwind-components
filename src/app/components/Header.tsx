import Link from "next/link"

const Header = () => {
    return (
        <header className="px-6 py-4 border-b">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
                <Link href={"/"}>Mind Boggling</Link>
                <form className="w-1/3 mx-auto border rounded-lg border-purple-700 flex flex-row items-center justify-between">
                    <input
                        className="w-full px-4 py-2 rounded-tl-lg rounded-bl-lg focus:outline-purple-500"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <button className="py-2 px-4 bg-purple-700 text-white rounded-tr-lg rounded-br-lg">
                        Subscribe
                    </button>
                </form>
                <nav>
                    {/* TO ADD MENU OR LIGHT/DARK TOGGLE */}
                    <button>Sign in</button>
                </nav>
            </div>
        </header>
    )
}

export default Header