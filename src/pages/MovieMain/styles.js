const styles = () => {
  return {
    main__movie: {
      display: "flex",
      justifyContent: "center",
      "@media only screen and (max-width: 960px)": {
        padding: "0 50px"
      },
      "@media only screen and (max-width: 600px)": {
        padding: "0 20px"
      },
    },
  };
};
export default styles;
