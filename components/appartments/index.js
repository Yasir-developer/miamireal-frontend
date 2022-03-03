import React from 'react'
import Image from 'next/image'
import styles from './appartmentsStyle.module.scss'
import Slider from "react-slick";
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core'

const Appartments = ({ items, title }) => {
    const sliderRefAppartments = React.createRef(null);
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


    const onNextClick = () => {
        sliderRefAppartments.current.slickNext();
    }
    const onPreviousClick = () => {
        sliderRefAppartments.current.slickPrev();
    }

    const status = (event) => {
        console.log(event.target.innerText);
    }

    const degen = (event) => {
        console.log(event.target.innerText);
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className='container py-5'>
                <div className='avatars'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-heading'>{title}</div>
                        <div className='d-flex align-items-center'>
                            <IconButton onClick={onPreviousClick} size="small">
                                <span className={`${styles.carousel_icon} material-icons-round icon`}>
                                    chevron_left
                                </span>
                            </IconButton>
                            <IconButton onClick={onNextClick} size="small">
                                <span className={`${styles.carousel_icon} material-icons-round icon`}>
                                    chevron_right
                                </span>
                            </IconButton>
                        </div>
                    </div>
                    <Slider ref={sliderRefAppartments} {...settings}>
                        {items && items.length && items.map((appartment, index) => {
                            return (
                                <>

                                    <div key={index} className={styles.appartment_wrapper}>
                                        <Image src={appartment.imgUrl} alt="" className={styles.appartment_img} />
                                        <div className={styles.appartment_details}>
                                            <div className={styles.appartment_name}>{appartment.name}</div>
                                            <Button variant="text" className='my-1' onClick={status}>{appartment.status}</Button>
                                            <Button variant="outlined" onClick={degen}>{appartment.title}</Button>
                                        </div>
                                        <div>
                                            <IconButton
                                                className={styles.menu_btn}
                                                id="demo-positioned-button"
                                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick} size="small">
                                                <span className={`${styles.menu_icon} material-icons-round`}>
                                                    more_vert
                                                </span>
                                            </IconButton>
                                            <Menu
                                                id="demo-positioned-menu"
                                                aria-labelledby="demo-positioned-button"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }}
                                            >
                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                                            </Menu>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        }
                    </Slider>
                </div>
            </div>
        </>

    )
}

export default Appartments