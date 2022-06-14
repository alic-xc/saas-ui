import {FaPlay} from 'react-icons/fa'


const Slider = () => {
    return (
        <section className='grid grid-cols-12'>
            <div className='col-span-6 sm:col-span-8 xs:col-span-12 flex place-items-center'>
                <div>
                    <h1 className="text-[50px] sm:text-[25px] xs:text-[25px] font-bold text-white">The best <span className='font-light'>SaaSpik</span><br/> design 2019</h1>
                    <p className='text-[18px] text-white my-5 leading-8'>
                        Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
                    </p>
                    <div className='bg-white overflow-hidden xs:flex-col flex py-1 px-1 rounded-full xs:rounded-[5px] lg:mr-20'>
                        <input type="text" className='p-3 outline-none flex-1' placeholder="Enter your email" />
                        <button className='border px-8 bg-[#7052fb] text-white py-3 rounded-full  xs:rounded-[5px] text-[15px] font-semibold'>Get Started</button>
                    </div>
                    <div className='flex place-items-center mt-10'>
                        <div className='border-[5px] rounded-full flex justify-center place-items-center text-center border-white bg-[#ddd] w-[60px] h-[60px]'>
                            <FaPlay className="text-[#7052fb] " />
                        </div>
                        <span className='text-white ml-5'>watch video</span>
                    </div>
                </div>
            </div>
            <div className='col-span-6 sm:col-span-4 xs:col-span-12 flex justify-end sm:justify-center xs:justify-center mt-20 mb-5'>
                <img alt="saas" src={require('../assets/images/mobile.png')} className="w-[350px]" />
            </div>
        </section>
    )
}


export default Slider;