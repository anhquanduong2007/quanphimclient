const styles = () => {
  return {
    banner: {
      padding: "150px 0 50px 0",
      "@media only screen and (max-width: 960px)": {
        flexDirection: "column",
        alignItems: "center",
        
      },
    },
    banner__icon: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      paddingRight: "50px",
      "@media only screen and (max-width: 960px)": {
        flexDirection: "row",
        padding: "0",
      },
      "& > i": {
        color: "hsl(250, 69%, 61%)",
        fontSize: "1.5rem",
        margin: "10px 0",
        "@media only screen and (max-width: 960px)": {
          padding: "0 20px"
        },
      },
    },
    banner__title: {
      textTransform: "uppercase",
      fontWeight: "bolder",
    },
    banner__content: {
      display: "flex",
      flexDirection: "column",
      "@media only screen and (max-width: 960px)": {
        alignItems: "center",
      },
    },
    banner__subtitle: {
      color: "#6D6A7C",
  
    },
    banner__sub: {
      color: "#6d6a7c",
      "@media only screen and (max-width: 960px)": {
       textAlign: "center",
      },
    },
    watch__now: {
      width: "150px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#6957c7",
      outline: "none",
      border: "1px solid #6E57E0",
      color: "#fff",
      marginTop: "20px",
      borderRadius: "10px",
      cursor: "pointer",
      height: "50px",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#5A43CB",
      },
    },
    "home__scroll-button": {
      paddingTop: "50px",
      display: "flex",
      alignItems: "center",
      transition: ".3s",
      cursor: "pointer",
      "&:hover": {
        transform: "translateY(.25rem)",
      },
      "& > i": {
        fontSize: "2rem",
        color: " #5A43CB",
      },
    },
    scroll__title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
      "& > i": {
        fontSize: "1.4rem",
        color: "#5A43CB",
      },
    },
  };
};
export default styles;
