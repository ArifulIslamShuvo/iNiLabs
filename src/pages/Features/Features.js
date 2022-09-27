import React from 'react';

const Features = () => {
    const bannerCard = <>
        <h2 className="card-title">banquee</h2>
        <p className="text-left text-3xl">2320 3000 0000 1</p>
        <div className="card-actions justify-start">
            <div>
                <small>Card Holder</small>
                <p>John Doe</p>
            </div>
            <div>
                <small>Expiry Date</small>
                <p>09/28</p>
            </div>
        </div>

    </>
    return (
        <div className='bg-secondary'>
            <div className='py-10'>
                <p>Features</p>
                <h2 className='text-4xl font-semibold py-2'>All in one card.</h2>
                <p className='py-2'>Senectus et netus et malesuada fames ac turpis.
                    <br />
                    Sagittis vitae et leo duis ut diam.</p>
                <div className='flex justify-center items-center gap-3'>
                    <button className='px-4 py-2 bg-primary text-white rounded'>Open Account</button>
                    <p className='text-primary flex items-center gap-1'>Compare Cards <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-5 mt-12 overflow-hidden pt-16'>
                {/* card-1 */}
                <div className='rotate-90 mr-12'>
                    <div className="card-body -mr-44 ml-36 text-white rounded-xl " style={{backgroundColor: '#D6AE7B'}}>
                        {bannerCard}
                    </div>
                </div>
                {/* card-2 */}
                <div className='rotate-90 mr-6'>
                    <div className="card-body -mr-44 ml-24  text-white  bg-slate-800 rounded-xl ">
                        {bannerCard}
                    </div>
                </div>
                {/* card-3 */}
                <div className='rotate-90'>
                    <div className="card-body -mr-44  text-white  bg-primary rounded-xl ">
                        {bannerCard}
                    </div>
                </div>
                {/* card-4 */}
                <div className='rotate-90 ml-6'>
                    <div className="card-body -mr-44 ml-24  text-white bg-slate-800 rounded-xl ">
                        {bannerCard}
                    </div>
                </div>
                {/* card-5 */}
                <div className=' rotate-90 ml-12'>
                    <div className="card-body -mr-44 ml-36   text-white rounded-xl" style={{backgroundColor: '#D6AE7B'}}>
                        {bannerCard}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;