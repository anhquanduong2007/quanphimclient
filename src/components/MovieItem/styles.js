const styles = () => {
  return {
    movie__item_container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    img__movie: {
      borderRadius: "10px",
      width: "200px",
      height: "350px",
      objectFit: "cover",
      cursor: "pointer",
      "@media only screen and (max-width: 960px)": {
        width: "160px",
        height: "260px",
      },
      "@media only screen and (max-width: 600px)": {
        width: "120px",
        height: "180px",
      },
    },
    title__movie: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      textAlign: "center",
      marginBottom: "22px",
      width: "80%",
      "& > a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
  };
};
export default styles;
