import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

const Banner = () => {
  return (
    <>
        <div className='banner'>
            <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect={'coverflow'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 70,
                modifier: 1,
                slideShadows: true,
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img className='banner-img' src='https://middlebury.coop/wp-content/uploads/2023/04/Indian-Food-Spread.SS_.-Low-Res.jpg' alt=''/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='banner-img' src='https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg' alt=''/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='banner-img' src='https://theidlixpress.com/wp-content/uploads/2018/09/dosa-indian-dish.jpg' alt=''/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='banner-img' src='https://png.pngtree.com/thumb_back/fw800/background/20240204/pngtree-instagram-post-banner-poster-for-ramadan-special-biryani-with-a-picture-image_15596450.png' alt=''/>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default Banner