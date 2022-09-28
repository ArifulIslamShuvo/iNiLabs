import React from 'react';
import { RiHomeLine } from 'react-icons/ri';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { BiArrowBack, BiHelpCircle, BiInfoCircle, BiLock, BiCog } from 'react-icons/bi';

const AllCards = () => {
    return (
        <div className='flex justify-center items-center gap-12 py-24 px-48'>
            <div className='text-left'>
                <p className=''>Transactions</p>
                <h2 className='text-3xl font-semibold'>Manage
                    <br /> your cards</h2>
                <p className='py-1 '>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <p className='flex items-center gap-2 my-2'><small className='rounded-full bg-secondary text-primary p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </small>
                        <span>Malesuada Ipsum</span>
                    </p>
                    <p className='flex items-center gap-2 my-2'><small className='rounded-full bg-secondary text-primary p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </small>
                        <span>Vestibulum</span>
                    </p>
                    <p className='flex items-center gap-2 my-2'><small className='rounded-full bg-secondary text-primary p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </small>
                        <span>Parturient Lorem</span>
                    </p>
                </div>
            </div>
            <dev>
                {/* pgohe */}
                <div className='border-8 border-black w-96' style={{ borderRadius: "45px" }}>
                    <div className='flex items-center justify-around gap-5 py-2'>
                        <BiArrowBack />
                        <p className='text-xl font-semibold'>Card</p>
                        <BiHelpCircle />
                    </div>
                    {/* vsa card design */}
                    <div className=' text-white bg-gradient-to-r from-[#485563] to-[#29323C] mx-7 rounded-lg p-3 my-4'>
                        <div className='flex justify-between mx-2'>
                            <p>banquee.</p>
                            <p className='text-xl font-semibold rotate-90'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                            </svg>
                            </p>
                        </div>
                        <p className='font-mono text-xl flex justify-around gap-5 pt-10 pb-3'>
                            <span>1234</span>
                            <span>5678</span>
                            <span>9000</span>
                            <span>0000</span>
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
                                <i>VISA</i>
                            </div>
                        </div>
                    </div>
                    {/* vsa card design end */}

                    <div className='flex justify-around mb-16'>
                        <div data-aos="zoom-in-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex flex-col items-center'><small className='rounded-full bg-secondary text-primary p-2'>
                                <BiInfoCircle className='w-5 h-5' />
                            </small>
                            <span>Details</span>
                        </div>
                        {/* ----------- */}
                        <div data-aos="zoom-in-down"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex flex-col items-center'><small className='rounded-full bg-secondary text-primary p-2'>
                                <BiLock className='w-5 h-5' />
                            </small>
                            <span>Lock Card</span>
                        </div>
                        {/* ---------------- */}
                        <div data-aos="zoom-in-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='flex flex-col items-center'><small className='rounded-full bg-secondary text-primary p-2'>
                                <BiCog className='w-5 h-5' />
                            </small>
                            <span>Lock Card</span>
                        </div>
                    </div>
                    {/*  */}


                    <p className='text-lg text-left font-semibold px-6 py-1'>All Card</p>
                    {/* multiple card */}
                    <div className='py-3 '>
                        {/* cards */}
                        <div className='overflow-hidden'>
                            <div className='relative text-white bg-gradient-to-r from-[#E3C79E] to-[#D6AE7B] mx-7 rounded-lg p-3 my-4'>
                                <div className='flex justify-between mx-2'>
                                    <p>banquee.</p>
                                    <p className='text-xl font-semibold rotate-90'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                    </svg>
                                    </p>
                                </div>
                                <p className='font-mono text-xl flex justify-around gap-5 pt-10 pb-3'>
                                    <span>1234</span>
                                    <span>5678</span>
                                    <span>9000</span>
                                    <span>0000</span>
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
                                        <i>VISA</i>
                                    </div>
                                </div>
                            </div>
                            {/* card 2 */}
                            <div className='absolute -mt-36 w-[313px]  text-white bg-primary mx-7 rounded-t-lg p-3 my-4'>
                                <div className='flex justify-between mx-2'>
                                    <p>banquee.</p>
                                    <p className='text-xl font-semibold rotate-90'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                    </svg>
                                    </p>
                                </div>
                                <p className='font-mono text-xl flex justify-around gap-5 pt-10 pb-3'>
                                    <span>1234</span>
                                    <span>5678</span>
                                    <span>9000</span>
                                    <span>0000</span>
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
                                    <div className='flex items-center'>
                                        <p className='w6 h-6 rounded-full -mr-3 bg-[#cecccc] p-3'></p>
                                        <p className='w6 h-6 rounded-full bg-[#FAFAFA] p-3'></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*  */}
                        <div className='relative flex justify-around py-1 mt-16'>
                            <div className='flex flex-col justify-center items-center'>
                                <RiHomeLine />
                                <p>Home</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>Savings</p>
                            </div>
                            <div data-aos="zoom-in-up"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000" className='text-primary flex flex-col justify-center items-center'>
                                <AiOutlineCreditCard />
                                <p>Cards</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <FiUser />
                                <p>Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </dev>
        </div>
    );
};

export default AllCards;