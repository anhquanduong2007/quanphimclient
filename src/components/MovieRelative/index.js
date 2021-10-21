import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import "./styles.css";
import { useEffect,useState } from "react";
import SwiperCore, {Navigation,Autoplay} from 'swiper'; 
SwiperCore.use([Navigation,Autoplay,]);

const MovieRelative = (props) => {
  const { classes } = props;
  const {category} = useParams();
  const ui = useSelector((state) => state.ui);
  const data = useSelector((state) => state.movie.moviesRelative);
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);  
  return (
    <Grid item md={8} sm = {12} xs = {12} className = {classes.swiper__content}>
        <h1 style = {{color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark}}>Phim liên quan</h1>
      <Swiper slidesPerView={windowDimensions.width < 520 ? 1 : windowDimensions.width < 750 ? 2 : windowDimensions.width < 1280 ? 3 : 4 } loop={true} navigation={true} autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
          {
              data.map((item,index) => {
                return (
                    <SwiperSlide key = {`swiper_${index}`}>
                    <div className = {classes.movie__swiper}>
                      <Link to = {`/${category}/${item.title}/episode=1`}>
                        <img
                          src = {item.imageUrl}
                          alt="đamg load ảnh"
                        />
                      </Link>
                      <div className = {classes.movie__swiper_title} style = {{color: ui.darkMode ? ui.colorTextLight : ui.colorTextDark}}>{item.title}</div>
                    </div>
                  </SwiperSlide>
                )
              })
          }
      </Swiper>
    </Grid>
  );
};
MovieRelative.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(MovieRelative);
