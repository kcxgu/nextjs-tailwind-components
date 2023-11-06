import Link from "next/link"

const Footer = () => {
    return (
        <footer className="px-6 py-2 bg-purple-700 text-white">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
                <Link href={"/"}>© 2023 Mind Boggling</Link>
                <div className="flex flex-row items-center gap-4">
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer