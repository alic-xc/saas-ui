import { AiOutlineRocket, AiOutlineCheckCircle, AiFillApple } from 'react-icons/ai';
import {BsArrowRight} from 'react-icons/bs'
import {FaGooglePlay} from 'react-icons/fa'

const FirstSection = () => {
    return (
        <section className='grid grid-cols-12  bg-white lg:px-[15%] md:px-[5%]'>
            <div className='col-span-12 mb-20'>
                <p className="text-center text-[#2b2350] text-[48px] sm:text-[24px] xs:text-[24px] font-bold">Why small business owners<br className='hidden lg:block md:block' /> Love SaaS<span className="font-light">pik</span></p>
            </div>
            <section className="col-span-4 sm:col-span-12 xs:col-span-12 flex flex-col shadow-lg p-5 m-3">
                <AiOutlineRocket className='text-[#7052fb] text-[48px] border-2 border-[#7052fb] rounded-full w-16 h-16 p-2'  />
                <h2 className="text-[20px] mt-9 font-bold hover:text-[#7052fb] hover:cursor-pointer">The best place to Network in davos?</h2>
                <p className="text-justify mt-5 mb-8 text-[18px] leading-7 font-light">Harry wind up hanky panky it's all gone to pot bleeding nancy boy butty, brilliant.</p>
                <button href="#" className="font-semibold flex justify-start place-items-center hover:text-[#7052fb]"><span className='mr-3'>Find Out More</span> <BsArrowRight /></button>            
            </section>
            <section className="col-span-4 sm:col-span-12 xs:col-span-12 flex flex-col shadow-lg p-5 m-3">
                <AiOutlineRocket className='text-[#7052fb] text-[48px] border-2 border-[#7052fb] rounded-full w-16 h-16 p-2'  />
                <h2 className="text-[20px] mt-9 font-bold hover:text-[#7052fb] hover:cursor-pointer">Quick messaging with Clients.</h2>
                <p className="text-justify mt-5 mb-8 text-[18px] leading-7 font-light">Harry wind up hanky panky it's all gone to pot bleeding nancy boy butty, brilliant.</p>
                <button className="font-semibold flex justify-start place-items-center hover:text-[#7052fb]"><span className='mr-3'>Find Out More</span> <BsArrowRight /></button>            
            </section>
            <section className="col-span-4 sm:col-span-12 xs:col-span-12 flex flex-col shadow-lg p-5 m-3">
                <AiOutlineRocket className='text-[#7052fb] text-[48px] border-2 border-[#7052fb] rounded-full w-16 h-16 p-2'  />
                <h2 className="text-[20px] mt-9 font-bold hover:text-[#7052fb] hover:cursor-pointer">Super clean user Interface for easier use.</h2>
                <p className="text-justify mt-5 mb-8 text-[18px] leading-7 font-light">Harry wind up hanky panky it's all gone to pot bleeding nancy boy butty, brilliant.</p>
                <button className="font-semibold flex justify-start place-items-center hover:text-[#7052fb]"><span className='mr-3'>Find Out More</span> <BsArrowRight /></button>            
            </section>
        </section>
    )
}

const SecondSection = () => {
    return (
        <section className='grid grid-cols-12 bg-[#faf9ff] lg:px-[15%] md:px-[5%] pt-20'>
            <section className='col-span-12 mb-20'>
                <p className="text-center text-[#2b2350] text-[45px] sm:text-[24px] xs:text-[24px] leading-[50px] font-bold">Use your android or ios device <br className='hidden lg:block md:block'/>to manage everything.</p>
            </section>
            <section className='col-span-5 sm:col-span-12 xs:col-span-12 flex justify-center place-items-center'>
                <img alt="saas" src={require('../assets/images/tablet.png')}  className='w-[400px]' />
            </section>
            <section className='col-span-7 sm:col-span-12 xs:col-span-12 sm:p-10 xs:p-10 flex justify-start place-items-center'>
                <div className=''>
                    <div className='flex place-items-center mb-8 sm:mt-10 xs:mt-10'>
                        <div className='shadow-lg p-5 rounded-[10px] mr-8'>
                            <img alt="saas" src={require('../assets/images/22.png')} width={35} />
                        </div>
                        <button className='text-[20px]'>Show off show off pick your nose and<br className='hidden lg:block md:block'/> blow off grub so I said pardon.</button>
                    </div>
                    <div className='flex place-items-center mb-5'>
                        <div className='shadow-2xl p-5 rounded-[10px] mr-8'>
                            <img alt="saas" src={require('../assets/images/23.png')} width={35} />
                        </div>
                        <button className='text-[20px]'>Daft blimey squiffy lemon squeezy <br className='hidden lg:block md:block'/>Richard bite your arm.</button>
                    </div>
                    <div className='flex place-items-center mb-5'>
                        <div className='shadow-2xl p-5 rounded-[10px] mr-8'>
                            <img alt="saas" src={require('../assets/images/24.png')} width={35} />
                        </div>
                        <button className='text-[20px]'>Lost the plot don't get shirty with me <br className='hidden lg:block md:block'/>cheeky bugger.</button>
                    </div>
                    <div className='flex place-items-center mb-5'>
                        <div className='shadow-2xl p-5 rounded-[10px] mr-8'>
                            <img alt="saas" src={require('../assets/images/25.png')} width={35} />
                        </div>
                        <button className='text-[20px]'>Cup of char horse play excuse my <br className='hidden lg:block md:block'/>French sloshed butty.</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

const ThirdSection = () => {
    return (
        <section className='grid grid-cols-12 bg-[#fff] lg:px-[15%] md:px-[5%]'>
            <div className='lg:col-span-6 md:col-span-6 col-span-12 flex flex-col place-content-center '>
                <div className='lg:pr-20 md:pr-20'>
                    <h2 className='text-[28px] font-bold leading-[40px] text-[#2b2350] '>Super clean user <br/> interface for easier use.</h2>
                    <p className='text-[16px] py-5 leading-7 text-justify'>Lost the plot cracking goal give us a bell is bog horse play knackered lemon squeezy, cup of char cack bleeder matie boy he lost his bottle.!</p>
                    <ul>
                        <li className='flex place-items-center  text-[20px]'><AiOutlineCheckCircle className='mr-3 text-[green]' /> <span>Installation Guide</span></li>
                        <li className='flex place-items-center mt-3 text-[20px]'><AiOutlineCheckCircle className='mr-3 text-[green]' /><span>Easy setup process</span></li>
                        <li className='flex place-items-center mt-3 text-[20px]'><AiOutlineCheckCircle className='mr-3 text-[green]' /><span>Live call support</span></li>
                    </ul>
                    <button className='p-3 px-8 text-[14px] hover:bg-[#7052fb] hover:text-white text-[#7052fb] border-[#7052fb] mt-5 rounded-full border inline-block'>View More</button>
                </div>
            </div>
            <div className='lg:col-span-6 md:col-span-6 col-span-12 overflow-hidden'>
                <div className='flex'>
                    <img alt="saas" src={require("../assets/images/27.png")} className=""/>
                    <img alt="saas" src={require("../assets/images/26.png")} className=""/>
                </div>
                
            </div>
        </section>
    )
}

const FourthSection = () => {
    return (
        <section className='grid grid-cols-12 bg-[#fff] lg:px-[15%] md:px-[5%]'>
            <div className='lg:col-span-7 md:col-span-7 col-span-12  relative h-auto'>
                <img alt="saas" src={require("../assets/images/29.png")} className="mx-auto"/>
                <img alt="saas" src={require("../assets/images/28.png")} className="absolute top-1/2"/>
            </div>
            <div className='lg:col-span-5 md:col-span-5 col-span-12 sm:mt-20 xs:mt-20 flex flex-col place-content-center'>
                <div className='p-20'>
                    <h2 className='text-[28px] text-[#2b2350] font-bold leading-[40px]'>Super clean user <br/> interface for easier use.</h2>
                    <p className='text-[16px] py-5 leading-7 text-justify'>Lost the plot cracking goal give us a bell is bog horse play knackered lemon squeezy, cup of char cack bleeder matie boy he lost his bottle.!</p>
                    <ul>
                        <li className='flex place-items-center  text-[20px]'><AiOutlineCheckCircle className='mr-3 text-[green]' /> <span>Secured Cloud</span></li>
                        <li className='flex place-items-center mt-3 text-[20px]'><AiOutlineCheckCircle className='mr-3 text-[green]' /><span>Implement Yourself</span></li>
                        <li className='flex place-items-center mt-3 text-[20px]'><AiOutlineCheckCircle className='mr-3 text-[green]' /><span>Works in Web</span></li>
                    </ul>
                    <button className='p-3 px-8 text-[14px] hover:bg-[#7052fb] hover:text-white text-[#7052fb] border-[#7052fb] mt-5 rounded-full border inline-block'>Discover More</button>
                </div>
            </div>
            
        </section>
    )
}

const FifthSection = () => {
    return (
        <section className='grid grid-cols-12 bg-[#6610f2] lg:px-[15%] md:px-[5%]'>
            <div className='col-span-12 p-20 flex sm:flex-col xs:flex-col lg:justify-between md:justify-between lg:place-items-center md:place-items-center '>
                <div>
                    <h1 className="text-[54px] sm:text-[40px] xs:text-[40px] text-white leading-[72px] sm:leading-[52px] xs:leading-[52px] font-bold">Start managing your <br className="hidden lg:block md:block"/>SaaSpik. bettet</h1>
                    <p className='text-white my-10'>try any products free for 30 days</p>
                </div>
                <div>
                <button className='bg-white text-[#6610f2] p-4 px-10 rounded-full'>Signup for Now</button>

                </div>
            </div>
            
        </section>
    )
}

const SixthSection = () => {
    return (
        <section className='grid grid-cols-12 bg-[#fff] lg:px-[15%] md:px-[5%]'>
            
            <div className='lg:col-span-5 md:col-span-5 col-span-12 sm:mt-20 xs:mt-20 flex flex-col place-content-center'>
                <div className='pr-20'>
                    <h2 className='text-[28px] font-bold leading-[40px] text-[#2b2350]'>Available for your smart phone.</h2>
                    <p className='text-[16px] py-5 my-2 leading-7 text-justify text-[#797687]'>All the power of niche in your pocket. Schedule, publish and monitir your accounts with ease.</p>
                    <div className="flex ">
                        <button className='flex place-items-center text-[16px] bg-[#6610f2] text-white p-2 px-5 rounded-full mr-3'><FaGooglePlay className='mr-2' /> <span>Google Play</span></button>
                        <button className='flex place-items-center text-[16px] border-2 border-[#6610f2] text-[#6610f2] p-2 px-5 rounded-full'><AiFillApple className="text-[32px] mr-2" /> <span>App Store</span></button>
                    </div>
                    </div>
            </div>
            <div className='lg:col-span-7 md:col-span-7 col-span-12  relative h-auto'>
                <img alt="saas" src={require("../assets/images/1.png")} className="relative z-[10000000]"/>
                <img alt="saas" src={require("../assets/images/2.png")} className="absolute top-0 right-[21%]"/>
            </div>
            
        </section>
    ) 
}


const SeventhSection = () => {
    return (
        <section className='grid grid-cols-12 bg-[#fff] lg:px-[15%] md:px-[5%]'>
            <div className='col-span-12 mb-20'>
                <h1 className='text-center text-[#2b2350] text-[32px] sm:text-[30px] font-bold'>Saw likeness from years bring <br/>fifth from, and every life.</h1>
            </div>
            <div className="col-span-6 sm:col-span-12 xs:col-span-12">
                <img alt="saas" src={require('../assets/images/23.jpeg')} className="rounded-[5px] w-auto" />
                <div>
                    <div className='my-3 text-[#555]'>
                        <span className='pr-5 border-r-[2px] border-[#555]'>By Admin</span>
                        <span className="pl-5">Jul 24, 2019</span>
                    </div>
                    <div>
                        <h2 className='mb-3 font-bold text-[28px]'>Aron Klein’s captivating images of the.</h2>
                        <p className='mb-8 text-justify text-[#555]'>Bobby car boot bubble and squeak Charles tinkety tonk old fruit vagabond are you taking the piss elizabeth the wireless.</p>
                        <button className='border-[#6610f2] hover:bg-[#6610f2] hover:text-white border-2 text-[#6610f2] p-3 px-8  rounded-full'>Read More</button>
                    </div>

                </div>
            </div>
            <div className="col-span-6 sm:col-span-12 xs:col-span-12">
                <img alt="saas" src={require('../assets/images/24.jpeg')} className="rounded-[5px] w-auto" />
                <div>
                    <div className='my-3 text-[#555]'>
                        <span className='pr-5 border-r-[2px] border-[#555]'>By Admin</span>
                        <span className="pl-5">Jul 24, 2019</span>
                    </div>
                    <div>
                        <h2 className='mb-3 font-bold text-[28px]'>Aron Klein’s captivating images of the.</h2>
                        <p className='mb-8 text-justify text-[#555]'>Bobby car boot bubble and squeak Charles tinkety tonk old fruit vagabond are you taking the piss elizabeth the wireless.</p>
                        <button className='border-[#6610f2] border-2 hover:bg-[#6610f2] hover:text-white text-[#6610f2] p-3 px-8  rounded-full'>Read More</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

const Section = () =>{
    return (
        <>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
        </>
    )
}

export default Section;