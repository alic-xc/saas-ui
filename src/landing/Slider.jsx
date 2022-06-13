
const Slider = () => {
    return (
        <section className='flex place-items-center mt-8 lg:flex-row md:flex-row flex-col'>
            <div className='lg:basis-1/2 md:basis-1/2  basis-[100%]'>
                <h1 className="text-[50px] font-bold text-white">The best <span className='font-light'>SaaSpik</span><br/> design 2019</h1>
                <p className='text-[18px] text-white my-5 leading-8'>
                    Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
                </p>
                <div className='bg-white overflow-hidden flex py-1 px-1 rounded-full'>
                    <input type="text" className='p-3 outline-none flex-1' placeholder="Enter your email" />
                    <button className='border px-8 bg-[#7052fb] text-white py-3 rounded-full text-[15px] font-semibold'>Get Started</button>
                </div>
                <div>
                    <span></span>
                    <span>watch video</span>
                </div>
            </div>
            <div className='lg:basis-1/2 md:basis-1/2 basis-[100%] flex justify-end sm:justify-start mt-20'>
                <img alt="saas" src={require('../assets/images/mobile.png')} className="w-[350px]" />
            </div>
        </section>
    )
}


export default Slider;