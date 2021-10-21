const styles = () => {
  return {
    footer: {
      padding: "65px 0",
      marginTop: "30px",
      width: "100%"
    },
    footer__content: {
      "@media only screen and (max-width: 960px)": {
        flexDirection: "column",
      },
    },
    "footer__title-group": {
      alignItems: "flex-end",
      flexDirection: "column",
      display: "flex",
      "@media only screen and (max-width: 960px)": {
        alignItems: "center",
        paddingBottom: 40
      },
    },
    "footer__link-group": {
      display: "flex",
      justifyContent: "space-around",
      "@media only screen and (max-width: 960px)": {
        justifyContent: "center",
        paddingBottom: 20
      },
    },
    footer__title: {
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "bolder",
      fontSize: "3rem",
      "@media only screen and (max-width: 960px)": {
        fontSize: "2.5rem",
      },
      "@media only screen and (max-width: 600px)": {
        fontSize: "1.5rem",
      },
    },
    footer__subtitle: {
      color: " #fff",
      
    },
    footer__link: {
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1.1rem",
      "@media only screen and (max-width: 960px)": {
        padding: "0 10px",
        fontSize: "1rem",
      },
      "@media only screen and (max-width: 600px)": {
        padding: "0 8px",
        fontSize: "0.8rem",
      },
    },
    footer__icon: {
      display: "flex",
      justifyContent: "flex-start",
      color: "#fff",
      "@media only screen and (max-width: 960px)": {
        justifyContent: "center",
      },
      "& > i": {
        padding: "0 10px",
        fontSize: " 1.5rem",
        cursor: "pointer",
      },
    },
    copyright: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      paddingTop: "50px",
    },
  };
};
export default styles;
