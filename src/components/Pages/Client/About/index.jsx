import React from 'react'
import "./index.scss"


const About = () => {
    return (
        <div className='about-container'>
            <div className='about-parent'>
                <div className='bg-image'>
                    <div className='edu-parent'>
                        <div className='edu'>

                            <span>EDUCATION & SCHOOL</span>
                            <h2>SHOWCASE COURSES, EVENTS AND MORE!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse varius enim in eros elementum tristique.</p>

                            <a href="">Get Started Now</a>
                        </div>
                    </div>
                </div>

                <div className='teach-parent'>
                    <div className='teach'>
                        <div className='teach-image'>
                            <img src="https://preview.colorlib.com/theme/universityedu/assets/img/gallery/about1.jpg.webp" alt="" />
                        </div>
                        <div className='teach-text'>
                            <h2>A comprehensive
                                teaching approach</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt malesuada massa.</p>
                            <p>Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et malesuada massa.</p>
                            <a href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About