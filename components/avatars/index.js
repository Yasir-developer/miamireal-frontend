import * as React from 'react';
import Image from 'next/image'
import styles from './avatarsStyle.module.scss'
import Slider from "react-slick";
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import IconButton from '@mui/material/IconButton';

const Avatars = ({ items, title }) => {
    const sliderRefAvatars = React.createRef(null);
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
        sliderRefAvatars.current.slickNext();
    }
    const onPreviousClick = () => {
        sliderRefAvatars.current.slickPrev();
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
                    <Slider ref={sliderRefAvatars} {...settings}>
                        {items && items.length && items.map((avatar, index) => {
                            return (
                                <>

                                    <div key={index} className={styles.avatar_wrapper}>
                                        <Image src={avatar.imgUrl} alt="" className={styles.avatar_img} />
                                        <div className={styles.avatar_details}>
                                            <div className={styles.avatar_name}>{avatar.name}</div>
                                            <Button variant="text" className='my-1' onClick={status}>{avatar.status}</Button>
                                            <Button variant="outlined" onClick={degen}>{avatar.title}</Button>
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
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
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

export default Avatars