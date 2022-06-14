import React from 'react'

const Footer = () => {
  return (
    <footer className='grid grid-cols-12 bg-[#2c234d] lg:px-[13%] md:px-[5%] pt-20 px-4'>
        <div className='col-span-3 sm:col-span-6 xs:col-span-6 mb-10'>
            <h2 className='text-[20px] text-white mb-10'>Company</h2>
            <nav className='flex flex-col place-items-start'>
                <button className='text-[#a39eb9] mb-3'>Features</button>
                <button className='text-[#a39eb9] mb-3'>Dashboard &amp; Tools</button>
                <button className='text-[#a39eb9] mb-3'>Our Portfolio</button>
                <button className='text-[#a39eb9] mb-3'>About Us</button>
                <button className='text-[#a39eb9] mb-3'>Get In Touch</button>
            </nav>
        </div>
        <div className='col-span-3 sm:col-span-6 xs:col-span-6 mb-10'>
            <h2 className='text-[20px] text-white mb-10'>Company</h2>
            <nav className='flex flex-col place-items-start'>
                <button className='text-[#a39eb9] mb-3'>Web Design</button>
                <button className='text-[#a39eb9] mb-3'>Development</button>
                <button className='text-[#a39eb9] mb-3'>Wordpress</button>
                <button className='text-[#a39eb9] mb-3'>Online Marketing</button>
                <button className='text-[#a39eb9] mb-3'>Content</button>
            </nav>
        </div>
        <div className='col-span-3 sm:col-span-6 xs:col-span-6 mb-10'>
            <h2 className='text-[20px] text-white mb-10'>Company</h2>
            <nav className='flex flex-col place-items-start'>
                <button className='text-[#a39eb9] mb-3'>Web Design</button>
                <button className='text-[#a39eb9] mb-3'>Mobile App Design</button>
                <button className='text-[#a39eb9] mb-3'>UI / UX Design</button>
                <button className='text-[#a39eb9] mb-3'>Logo &amp; Identity</button>
                <button className='text-[#a39eb9] mb-3'>Dashboard</button>
            </nav>
        </div>
        <div className='col-span-3 sm:col-span-6 xs:col-span-6 mb-10'>
            <h2 className='text-[20px] text-white mb-10'>Company</h2>
            <nav className='flex flex-col place-items-start'>
                <button className='text-[#a39eb9] mb-3'>20 Hortico way, ipaja</button>
                <div>
                    <button></button>
                </div>
            </nav>
        </div>
        <div className='col-span-12 py-10 flex  xs:flex-col justify-between mt-20 border-t text-[#a39eb9] border-[#3d355b]'>
            <p>© 2019 All Rights Reserved Design by  <button className='hover:text-[#7052fb]'>PixelSigns</button> </p>
            <nav>
                <button className='hover:text-[#7052fb] mr-3'>Privacy &amp; Policy</button>
                <button className='hover:text-[#7052fb] mr-3'>Faq</button>
                <button className='hover:text-[#7052fb]'>Terms</button>

            </nav>
        </div>

    </footer>
  )
}

export default Footer
