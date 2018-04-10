export default {
  backgroundColor: "white",
  display: "flex",
  borderRadius: "10px",
  // justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  maxWidth: "500px",
  // minHeight: "50vh",
  header: {
    backgroundColor: "#A475BD",
    color: "white",
    textAlign: "center",
    width: "100vw",
    minHeight: "15vh",
    fontSize: "2rem",
    paddingTop: "1rem",
    borderRadius: "8px 8px 0 0",
  },
  form: {
    backgroundColor: "#c2c2c2",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    color: "#8A8A8A",
    minHeight: "15vh",
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  todoinput: {
    minWidth: "50%",
    backgroundColor: "#c2c2c2",
    borderStyle: "solid",
    borderColor: "#c2c2c2",
    borderBottom: "1px #8A8A8A solid",
    fontSize: "1.5rem"
  },
  ul: {
    display: "flex",
    flexWrap: "Wrap",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    width: "100%",
    paddingLeft: "0",
    margin: "0"
  },
  li: {
    borderTop: "solid grey 1px",
    borderBottom: "solid grey 1px",
    paddingTop: "1rem",
    paddingLeft: "1rem",
    paddingBottom: "1rem",
    width: "100%",
    minHeight: "15vh",
    display: "flex",
    alignItems: "center"
  },
  todoitem: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 20px",
    minHeight: "15vh",
  }
};