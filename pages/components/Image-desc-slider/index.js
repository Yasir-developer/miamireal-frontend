import React from 'react'
import Image from 'next/image'
import styles from './slider.module.scss'
import avatar_1 from '../../../public/images/avatar_images/avatar_1.png'
import avatar_2 from '../../../public/images/avatar_images/avatar_2.png'
import avatar_4 from '../../../public/images/avatar_images/avatar_4.png'
import avatar_5 from '../../../public/images/avatar_images/avatar_5.png'
import avatar_6 from '../../../public/images/avatar_images/avatar_6.png'
import appartment_1 from '../../../public/images/appartment_images/appartment_1.jpg'
import Slider from "react-slick";

const ImageDescSlider = (props) => {
    const avatars = props.avatars;
    const appartments = props.appartments;


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            }
        ]
    };

    const sliderRefAvatars = React.createRef(null);
    const onNextClick = () => {
        sliderRefAvatars.current.slickNext();
    }
    const onPreviousClick = () => {
        sliderRefAvatars.current.slickPrev();
    }


    const sliderRefAppartments = React.createRef(null);
    const onNextClickAppartment = () => {
        sliderRefAppartments.current.slickNext();
    }
    const onPreviousClickAppartment = () => {
        sliderRefAppartments.current.slickPrev();
    }
    return (
        <>
            <div className='container py-4'>
                <div className='avatars my-5'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-heading'>PFP AVATARS</div>
                        <div className='d-flex align-items-center'>
                            <button className="btn me-2 p-0" onClick={onPreviousClick}>
                                <span className={`${styles.carousel_icon} material-icons-round icon`}>
                                    chevron_left
                                </span>
                            </button>
                            <button className="btn p-0" onClick={onNextClick}>
                                <span className={`${styles.carousel_icon} material-icons-round icon`}>
                                    chevron_right
                                </span>
                            </button>
                        </div>
                    </div>
                    <Slider ref={sliderRefAvatars} {...settings}>
                        {avatars.map((avatar, index) => {
                            return (

                                <div key={index} className={styles.avatar_wrapper}>
                                    <Image src={avatar.imgUrl} alt="" className={styles.avatar_img} />
                                    <div className={styles.avatar_details}>
                                        <div className={styles.avatar_name}>{avatar.name}</div>
                                        <div>{avatar.status}</div>
                                        <div>{avatar.title}</div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </Slider>
                </div>

                <div className='appartments my-5 pt-5'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-heading'>APPARTMENTS</div>
                        <div className='d-flex align-items-center'>
                            <button className="btn me-2 p-0" onClick={onPreviousClickAppartment}>
                                <span className={`${styles.carousel_icon} material-icons-round icon`}>
                                    chevron_left
                                </span>
                            </button>
                            <button className="btn p-0" onClick={onNextClickAppartment}>
                                <span className={`${styles.carousel_icon} material-icons-round icon`}>
                                    chevron_right
                                </span>
                            </button>
                        </div>
                    </div>
                    <Slider ref={sliderRefAppartments} {...settings}>
                        {appartments.map((appartment, index) => {
                            return (

                                <div key={index} className={styles.avatar_wrapper}>
                                    <Image src={appartment.imgUrl} alt="" className={styles.avatar_img} />
                                    <div className={styles.avatar_details}>
                                        <div className={styles.avatar_name}>{appartment.name}</div>
                                        <div>{appartment.status}</div>
                                        <div>{appartment.title}</div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </Slider>
                </div>
            </div>
        </>

    )
}

export default ImageDescSlider