import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-white text-base-content mt-5">
                <div> <p className='text-2xl text-primary font-semibold'>banquee.</p>
                </div>
                <div>
                    <span className="footer-title">About</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Blog</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Webflow</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Social Media</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-white text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <p>©  Made by <span className='text-primary'>Pawel Gola</span> - Powered by <span className='text-primary'>Webflow</span></p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <p>Impressum</p>
                        <p>Datenschutz</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;