

export default {
  root: {
    background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  title: {
    fontSize: "45px",
    color: "white",
    alignText: "center"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 35%)",
    gridGap: "5%"
  }

};
