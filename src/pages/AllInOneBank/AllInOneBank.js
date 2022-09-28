import React from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiArrowBack, BiCog, BiHelpCircle, BiInfoCircle, BiLock } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { RiHomeLine } from 'react-icons/ri';
import img1 from '../../images/webflow.png';
import img2 from '../../images/shopify.png';
import img3 from '../../images/zapier.png';
import img4 from '../../images/paypla.png';
import img5 from '../../images/visa.png';
import img6 from '../../images/Gpay.png';
import img7 from '../../images/applepay.png';
import img8 from '../../images/amazonpay.png';
import img9 from '../../images/bitcoin.png';
import Mastercard from '../../images/Mastercard.png';
import laptop from '../../images/laptop.png';
import bike from '../../images/bike.png';
import { FaAmazon, FaApple, FaGoogle, FaTwitter } from 'react-icons/fa';


const AllInOneBank = () => {
    const catd = <>
        <div>
            <div className='flex justify-between gap-10 mx-2'>
                <p>banquee.</p>
                <p className='text-xl font-semibold rotate-90'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
                </p>
            </div>
            <p className='font-mono text-xl flex justify-around gap-1 pt-3 pb-3'>
                <small>1234</small>
                <small>5678</small>
                <small>9000</small>
                <small>0000</small>
            </p>
            <div className="flex justify-around gap-5 pb-2">
                <div>
                    <small>Card Holder</small>
                    <p>John Doe</p>
                </div>
                <div>
                    <small>Expiry Date</small>
                    <p>09/28</p>
                </div>
                <div>
                    <p>VISA</p>
                </div>
            </div>
        </div>
    </>
    return (
        <div className='py-16'>
            <h2 className='text-5xl font-semibold py-3'>All in one bank. Really.</h2>
            <p>Senectus et netus et malesuada fames ac turpis.<br />
                Sagittis vitae et leo duis ut diam.</p>
            <div className='flex justify-center gap-8 mt-16'>
                <div className='bg-[#F8F8F8] rounded-2xl pt-12 px-auto w-[450px] overflow-hidden'>
                    <h2 className='text-2xl font-semibold'>Statistics</h2>
                    <p className='text-[#c0bebe] py-3'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</p>
                    {/* phone */}
                    <div className='grid place-items-center'>
                        <div className='bg-white -mb-16 border-8 mt-16 border-black w-80' style={{ borderRadius: "45px" }}>
                            <div className='flex items-center justify-around gap-5 py-2'>
                                <BiArrowBack />
                                <p className='text-xl font-semibold'>Statistics</p>
                                <BiHelpCircle />
                            </div>
                            {/*  */}
                            <div className='flex justify-center items-center gap-5 py-2'>
                                <div className='bg-[#F8F8F8] rounded-md py-1 px-2'>
                                    <small>Earnings</small>
                                    <p className='text-md font-semibold'>$ 85.222,00</p>
                                </div>
                                <div className='bg-[#F8F8F8] rounded-md py-1 px-2'>
                                    <small>Earnings</small>
                                    <p className='text-md font-semibold'>$ 85.222,00</p>
                                </div>
                            </div>

                            <div className='flex justify-around gap-2 mb-16'>
                                <div className='flex justify-center gap-2 items-center'>
                                    <p className='rounded-full bg-primary p-2'></p>
                                    <p>Earnings</p>
                                </div>
                                <div className='flex justify-center gap-2 items-center'>
                                    <p className='rounded-full bg-[#F1DFDF] p-2'> </p>
                                    <p>Lock Card</p>
                                </div>
                                <div>
                                    <select className="select select-ghost">
                                        <option disabled selected>Years</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                    </select>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
                <div className=' bg-[#F8F8F8]  rounded-2xl w-[450px] pt-12 overflow-hidden'>
                    <h2 className='text-2xl font-semibold'>Cards</h2>
                    <p className='text-[#c0bebe] py-3'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</p>
                    {/* card */}
                    <div className='flex justify-around gap-10 mt-16 overflow-hidden -mb-28'>
                        <div className='-mb-24 w-48 sticky text-white bg-gradient-to-r from-[#485563] to-[#29323C] mr-5  rotate-90 rounded-lg py-1 px-3'>
                            {catd}
                        </div>
                        <div className=' text-white sticky bg-gradient-to-r from-[#5BB5A2] to-[#53A191]  rotate-90 rounded-md px-3'>
                            {catd}
                        </div>
                        <div className='-mb-24 w-48 sticky text-white bg-gradient-to-r from-[#E3C79E] to-[#D6AE7B] ml-5 rotate-90 rounded-md py-1 px-3'>
                            {catd}
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='mt-5 mx-44'>
                <div className='grid grid-cols-3 gap-3 mx-2'>
                    <div className='bg-[#F8F8F8]  rounded-2xl'>
                        <div className='text-left p-7 '>
                            <h2 className='text-xl font-semibold'>Easy<br />
                                integration</h2>
                            <small className='text-[#c0bebe] py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur</small>
                        </div>
                        <div className='overflow-hidden py-8'>
                            <div data-aos="fade-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className='flex justify-evenly gap-3 py-2 '>
                                <img className='w-28 h-10 bg-white rounded-lg' src={img1} alt="" />
                                <img className='w-28 h-10 bg-white rounded-lg' src={img2} alt="" />
                                <img className='w-28 h-10 bg-white rounded-lg' src={img3} alt="" />
                            </div>
                            <div data-aos="fade-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className='flex justify-evenly gap-3 py-2 over'>
                                <img className='w-28 h-10 bg-white rounded-lg' src={img4} alt="" />
                                <img className='w-28 h-10 bg-white rounded-lg' src={Mastercard} alt="" />
                                <img className='w-28 h-10 bg-white rounded-lg' src={img5} alt="" />
                                <img className='w-28 h-10 bg-white rounded-lg' src={img6} alt="" />
                            </div>
                            <div data-aos="fade-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className='flex justify-between gap-3 py-2 over'>
                                <img className=' w-28 h-10 bg-white rounded-lg' src={img7} alt="" />
                                <img className=' w-28 h-10 bg-white rounded-lg' src={img8} alt="" />
                                <img className=' w-28 h-10 bg-white rounded-lg' src={img9} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Saving-accounts */}
                    <div className='bg-[#F8F8F8]  rounded-2xl'>
                        <div className='text-left p-7'>
                            <h2 className='text-xl font-semibold'>Saving<br />
                                accounts</h2>
                            <small className='text-[#c0bebe] py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur</small>
                        </div>
                        <div className='flex justify-start items-center gap-5 overflow-hidden pt-8'>
                            <img className='w-32 h-23 bg-[#E8F2EE] rounded-lg p-7 mx-6' src={laptop} alt="" />
                            <img className='w-32 h-32 bg-[#F1DFDF] rounded-lg p-7 -mr-16' src={bike} alt="" />
                        </div>
                        {/* laptop  */}
                        <div className='flex justify-between'>
                            <div className='text-left pl-6'>
                                <h2 className='font-semibold'>New Laptop</h2>
                                <small className='text-[#c0bebe] py-3'>400$</small>
                            </div>
                            <div className='text-left pr-6'>
                                <h2 className='font-semibold'>Dream bike</h2>
                                <small className='text-[#c0bebe] py-3'>200$</small>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F8F8F8]  rounded-2xl'>
                        <div className='text-left p-7'>
                            <h2 className='text-xl font-semibold'>Instant
                                <br />
                                transactions</h2>
                            <small className='text-[#c0bebe] py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur</small>
                        </div>
                        {/*  */}
                        <div className='pt-3'>
                            {/* Apple Electronic*/}
                            <div data-aos="fade-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-secondary rounded-md'>
                                <div className='flex justify-start items-center gap-5'>
                                    <div className='bg-primary text-white rounded-md p-3'>
                                        <FaApple />
                                    </div>
                                    <div className='text-left'>
                                        <p className='font-semibold'>Apple</p>
                                        <small>Electronic</small>
                                    </div>
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>-799$</p>
                                </div>
                            </div>
                            {/* Amazon*/}
                            <div data-aos="fade-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-secondary rounded-md'>
                                <div className='flex justify-start items-center gap-5'>
                                    <div className='bg-primary text-white rounded-md p-3'>
                                        <FaAmazon />
                                    </div>
                                    <div className='text-left'>
                                        <p className='font-semibold'>Amazon</p>
                                        <small>Shopping</small>
                                    </div>
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>-99$</p>
                                </div>
                            </div>
                            {/* Google Play Store*/}
                            <div data-aos="fade-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className='flex justify-between items-center mx-5 p-3 my-2 bg-secondary rounded-md'>
                                <div className='flex justify-start items-center gap-5'>
                                    <div className='bg-primary text-white rounded-md p-3'>
                                        <FaGoogle />
                                    </div>
                                    <div className='text-left'>
                                        <p className='font-semibold'>Google Play Store</p>
                                        <small>Apps</small>
                                    </div>
                                </div>
                                <div className='text-left'>
                                    <p className='font-semibold'>-99$</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AllInOneBank;