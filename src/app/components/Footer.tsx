import Link from "next/link"

const Footer = () => {
    return (
        <footer className="px-6 py-4 bg-purple-700 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                <Link href={"/"}>© 2023 Mind Boggling</Link>
                <div className="pt-4 md:pt-0 flex flex-col md:flex-row items-center md:gap-4">
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer