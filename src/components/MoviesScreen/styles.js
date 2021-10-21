const styles = () => {
  return {
    movie: {
      "& > iframe": {
        width: "100%",
        height: "600px",
        "@media only screen and (max-width: 960px)": {
          height: "400px",
        },
        "@media only screen and (max-width: 600px)": {
          height: "200px",
        },
      },
    },
    movie__title: {
      padding: "10px 0 20px 0",
    },
  };
};
export default styles;
