import React from 'react';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiArrowBack, BiCog, BiHelpCircle, BiInfoCircle, BiLock } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { RiHomeLine } from 'react-icons/ri';

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
                        <div className='bg-white -mb-28 border-8 mt-16 border-black w-80' style={{ borderRadius: "45px" }}>
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
        </div>
    );
};

export default AllInOneBank;