const styles = () => {
  return {
    navbar: {
      height: "80px",
      position: "fixed",
      top: 0,
      zIndex: "9999",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 150px",
      "@media only screen and (max-width: 1100px)": {
        padding: "0 20px",
      },
    },
    nav__menu: {
      "& > ul": {
        display: "flex",
        "& > li": {
          listStyle: "none",
          padding: "0 10px",
          display: "flex",
          alignItems: "center",
          "& > a": {
            textDecoration: "none",
            fontWeight: "bold",
          },
          "& > i": {
            cursor: "pointer",
          },
        },
      },
      "@media only screen and (max-width: 1100px)": {
        display: "none",
      },
    },
    menu__active: {
      color: "#6557de !important",
    },
    nav__menu_collapse: {
      display: "none",
      "& > ul": {
        display: "flex",
        "& > li": {
          listStyle: "none",
          padding: "0 10px",
          display: "flex",
          alignItems: "center",
          "& > i": {
            cursor: "pointer",
            fontSize: "1.1rem"
          },
        },
      },
      "@media only screen and (max-width: 1100px)": {
        display: "block",
      },
    },
    navgigation__collapse: {
      backgroundColor: "rgba(0,0,0,0.8)",
      position: "absolute",
      top: 80,
      left: 0,
      right: 0,
      overflow: "hidden",
      animation: `$navgiShow 0.6s ease-in-out`,
      height: "350px",
      "& > ul": {
        display: "flex",
        padding: 0,
        flex: 1,
        flexDirection: "column",
        "& > li": {
          listStyle: "none",
          padding: "20px 0",
          display: "flex",
          justifyContent: "center",
          "& > a": {
            textDecoration: "none",
            fontWeight: "bold",
            color: "#fff",
            "&:hover": {
              color: "#6557de",
            },
          },
        },
      },
    },
    "@keyframes navgiShow": {
      "0%": {
        height: 0,
        opacity: 0,
      },
      "100%": {
        
        opacity: 1,
      },
    },
  };
};
export default styles;
