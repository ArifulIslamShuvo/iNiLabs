import React from 'react';

const Accounts = () => {
    return (
        <div>
            <div>
                <p className='font-semibold'>Accounts</p>
                <h2 className='text-5xl font-semibold p-2'>Choose your card.</h2>
                <p>Senectus et netus et malesuada fames ac turpis. <br /> Sagittis vitae et leo duis ut diam.</p>
            </div>
            <div className='flex justify-center items-center py-16'>
                {/* Basic */}
                <div>
                    <div className='flex justify-center items-center gap-3'>
                        <p className='font-semibold'>Basic</p>
                        <small className='text-primary bg-secondary rounded px-2'>Primary</small>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>Free</h2>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                        {/*  */}
                        <div className=' w-72 text-white sticky bg-gradient-to-r from-[#5BB5A2] to-[#53A191] mx-7 rounded-lg p-3 my-4'>
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
                                <div data-aos="fade-right"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" className='flex items-center'>
                                    <p className='w6 h-6 rounded-full -mr-3 bg-[#cecccc] p-3'></p>
                                    <p className='w6 h-6 rounded-full bg-[#FAFAFA] p-3'></p>
                                </div>
                            </div>
                        </div>
                        <button className='w-72 text-white sticky bg-gradient-to-r from-[#5BB5A2] to-[#53A191] mx-7 rounded-lg p-3'>Get started</button>
                    </div>
                </div>
                {/* Premium */}
                <div>
                    <div className='flex justify-center items-center gap-3'>
                        <p className='font-semibold'>Premium</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>$5</h2>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                        {/*  */}
                        <div className=' w-72 text-white bg-gradient-to-r from-[#485563] to-[#29323C] mx-7 rounded-lg p-3 my-4'>
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
                                <div data-aos="fade-right"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" className='flex items-center'>
                                    <i className='text-2xl font-semibold'>VISA</i>
                                </div>
                            </div>
                        </div>
                        <button className='w-72 text-white sticky bg-gradient-to-r from-[#5BB5A2] to-[#53A191] mx-7 rounded-lg p-3'>Get started</button>
                    </div>
                </div>
                {/* Gold */}
                <div>
                    <div className='flex justify-center items-center gap-3'>
                        <p className='font-semibold'>Gold</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>$10</h2>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                        {/*  */}
                        <div className=' w-72 text-white bg-gradient-to-r from-[#E3C79E] to-[#D6AE7B] mx-7 rounded-lg p-3 my-4'>
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
                                <div data-aos="fade-right"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" className='flex items-center'>
                                    <p className='w6 h-6 rounded-full -mr-3 bg-[#cecccc] p-3'></p>
                                    <p className='w6 h-6 rounded-full bg-[#FAFAFA] p-3'></p>
                                </div>
                            </div>
                        </div>
                        <button className='w-72 text-white sticky bg-gradient-to-r from-[#5BB5A2] to-[#53A191] mx-7 rounded-lg p-3'>Get started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accounts;