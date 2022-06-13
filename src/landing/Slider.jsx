
const Slider = () => {
    return (
        <section className='grid grid-cols-12'>
            <div className='col-span-6 sm:col-span-12 xs:col-span-12'>
                <h1 className="text-[50px] sm:text-[25px] xs:text-[25px] font-bold text-white">The best <span className='font-light'>SaaSpik</span><br/> design 2019</h1>
                <p className='text-[18px] text-white my-5 leading-8'>
                    Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
                </p>
                <div className='bg-white overflow-hidden xs:flex-col flex py-1 px-1 rounded-full xs:rounded-[5px]'>
                    <input type="text" className='p-3 outline-none flex-1' placeholder="Enter your email" />
                    <button className='border px-8 bg-[#7052fb] text-white py-3 rounded-full  xs:rounded-[5px] text-[15px] font-semibold'>Get Started</button>
                </div>
                <div>
                    <span></span>
                    <span>watch video</span>
                </div>
            </div>
            <div className='col-span-6 sm:col-span-12 xs:col-span-12 flex justify-end sm:justify-start mt-20'>
                <img alt="saas" src={require('../assets/images/mobile.png')} className="w-[350px]" />
            </div>
        </section>
    )
}


export default Slider;