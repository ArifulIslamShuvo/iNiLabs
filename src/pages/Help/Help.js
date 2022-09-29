import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';
import { FiArrowRight } from 'react-icons/fi';

const Help = () => {
    return (
        <div className='flex gap-32 justify-around py-32'>
            <div>
                <h2 className='text-5xl font-semibold pb-10 text-left'>Need help?</h2>
                <div>
                    <div className='flex justify-start items-center gap-3 text-left py-2 '>
                        <div className='rounded-full bg-secondary text-primary p-2'>
                            <AiFillPhone className='w-6 h-6 rotate-90' />
                        </div>
                        <div>
                            <p className='text-md font-semibold'>+49 176 123 456</p>
                            <small>Support Hotline</small>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3 text-left py-2 '>
                        <div className='rounded-full bg-secondary text-primary p-2'>
                            <AiOutlineMail className='w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-md font-semibold'>help@banquee.com</p>
                            <small>Support Email</small>
                        </div>
                    </div>
                    <div className=' p-2 flex justify-start items-center gap-2 text-left text-primary'>
                        <p>Support</p>
                        <FiArrowRight />
                    </div>
                </div>
            </div>
            {/* --------- */}
            <div>
                <h2 className='text-5xl font-semibold pb-10'>Need help?</h2>
                <div>
                    <div className='flex justify-start items-center gap-3 text-left p-2 '>
                        <div className='rounded-full bg-secondary text-primary py-2'>
                            <AiFillPhone className='w-6 h-6 rotate-90' />
                        </div>
                        <div>
                            <p className='text-md font-semibold'>+49 176 123 456</p>
                            <small>Support Hotline</small>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3 text-left p-2 '>
                        <div className='rounded-full bg-secondary text-primary py-2'>
                            <AiOutlineMail className='w-6 h-6' />
                        </div>
                        <div>
                            <p className='text-md font-semibold'>help@banquee.com</p>
                            <small>Support Email</small>
                        </div>
                    </div>
                    <div className=' p-2 flex justify-start items-center gap-2 text-left text-primary'>
                        <p>Support</p>
                        <FiArrowRight />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Help;