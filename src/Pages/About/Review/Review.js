import Morgan from "../../../image/images.jpg"
import Wolvaardt from "../../../image/images (1).jpg";
import Sciver from "../../../image/images (2).jpg";
import Smriti from "../../../image/images (3).jpg";
import Bradman from "../../../image/images (4).jpg";
import './Review.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { FiStar } from "react-icons/fi";



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Review = () => {
    const users = [
        {
            id: "12bdex09",
            name: "Natalie Sciver",
            url: Sciver,

            review:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt utpraesentium repudiandae non quod tempora. Rerum necessitatibus atque ab suscipit .",
        },
        {
            id: "g53bdex09",
            name: "Smriti Mandhana",
            url: Smriti,
            review:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt utpraesentium repudiandae non quod tempora. Rerum necessitatibus atque ab suscipit .",
        },
        {
            id: "1lkdfiubdex09",
            name: "Laura Wolvaardt",
            url: Wolvaardt,
            review:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt utpraesentium repudiandae non quod tempora. Rerum necessitatibus atque ab suscipit .",
        },
        {
            id: "12bd43x09",
            name: "Morgan",
            url: Morgan,
            review:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt utpraesentium repudiandae non quod tempora. Rerum necessitatibus atque ab suscipit .",
        },
        {
            id: "12b3jkx09",
            name: "Sir Don Bradman",
            url: Bradman,
            review:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt utpraesentium repudiandae non quod tempora. Rerum necessitatibus atque ab suscipit .",
        },
    ];
    return (
        <section className="w-[90%] mx-auto my-5">
            <h2 className="text-center font-semibold text-xl lg:text-3xl mb-4">
                Reviews
            </h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {users.map((user) => (
                    <SwiperSlide key={user.id}>
                        <article className="sliderPart rounded-lg  p-6 hover:shadow-lg border-2 border-transparent hover:border-blue-500 duration-200 transition-all">
                            <div className="flex items-center space-x-3 mb-2">
                                <img
                                    className="img "
                                    src={user.url}
                                    alt=""
                                />
                                <h3 className="text">
                                    {user.name}
                                </h3>

                            </div>
                            <p className="Contents">{user.review}</p>
                            <p className="texts">
                                <span><FiStar></FiStar></span>
                                <span><FiStar></FiStar></span>
                                <span><FiStar></FiStar></span>
                                <span><FiStar></FiStar></span>
                                <span><FiStar></FiStar></span>


                            </p>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Review;
