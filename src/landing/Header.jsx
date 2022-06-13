const Header = () => {
    return (
        <header className="sticky top-0 flex justify-between p-5">
            <h1 className="text-[32px] font-bold text-white">Sosamak</h1>
            <nav className="hidden md:flex lg:flex justify-end place-items-center ">
                <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">Home</a>
                <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">About Us</a>
                <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">Blog</a>
                <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">Pages</a>
                <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">Contact</a>
                <button className="border-2 bg-[#7d6ec4] p-3 px-7 text-[15px] font-bold rounded-full text-white">Try For Free</button>
            </nav>
        </header>
    )
}

export default Header;