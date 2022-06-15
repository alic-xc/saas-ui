import React, {useContext} from 'react' 
import {FaHamburger, FaTimes} from 'react-icons/fa'
import {AppContext} from '../context/AppContext'


const Header = () => {
    const {setDrawer} = useContext(AppContext)

    return (
        
        <header className="grid grid-cols-12 p-5">
            <div className="col-span-4 sm:col-span-12 xs:col-span-12 sm:flex xs:flex  sm:justify-between xs:justify-between sm:place-items-center xs:place-items-center">
                <FaHamburger onClick={ () => setDrawer(prevState => !prevState)} className='hidden sm:block xs:block text-white text-[32px]' />
                <h1 className="text-[32px] font-bold text-white">Sosamak</h1>
            </div>
            <div className="col-span-8 sm:col-span-12 xs:col-span-12">
                <nav className="hidden md:flex lg:flex justify-end place-items-center ">
                    <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">Home</a>
                    <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">About Us</a>
                    <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">Blog</a>
                    <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">Pages</a>
                    <a className="text-[15px] font-bold text-white mr-7" href="https://google.com">Contact</a>
                    <button className="border-2 bg-[#7d6ec4] p-3 px-7 text-[15px] font-bold rounded-full text-white">Try For Free</button>
                </nav>
            </div>
            
        </header>
    )
}

export const Drawer = () => {
    const {drawer, setDrawer } = useContext(AppContext)
    if(drawer){
    return (
        <div className='fixed w-full h-[100%] z-[100000]'>
            <div className='w-[80%] bg-[#2b2350] h-full p-10'>
                <div className='flex justify-between place-items-center mb-10'>
                    <h2 className='text-[32px] font-bold text-white'>Sosamak</h2>
                    <FaTimes onClick={ () => setDrawer(prevState => !prevState)} className='text-white text-[32px]' />
                </div>
                <nav className='flex flex-col'>
                    <a className="text-[18px] mb-4 text-white mr-7" href="https://google.com">Home</a>
                    <a className="text-[18px] mb-4 text-white mr-7" href="https://google.com">About Us</a>
                    <a className="text-[18px] mb-4 text-white mr-7" href="https://google.com">Blog</a>
                    <a className="text-[18px] mb-4 text-white mr-7" href="https://google.com">Pages</a>
                    <a className="text-[18px] mb-4 text-white mr-7" href="https://google.com">Contact</a>
                </nav>
            </div>
        </div>
    )}else {
        return ""
    }
}

export default Header;