import React, { useState, useEffect } from "react";
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  makeStyles,
  Container,
  IconButton,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

const useStyles = makeStyles((theme) => ({
  componentBackground: {
    backgroundColor: "white",
    padding: 20,
    width: "fit-content",
  },
  msgContainer: {
    margin: 20,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: 200,
    maxHeight: 450,
    position: "relative",
    backgroundColor: "white",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  formStyle: {
    padding: 10,
    position: "fixed",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bottom: 0,
    zIndex: 1,
    backgroundColor: "#e9e5eb",
    width: "30%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  main__formcontorl: {
    display: "flex",
    flexDirection: "row",
  },
  main__input: {
    flex: 1,
  },
}));

function MainComponent() {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [msgList, setMsgList] = useState([]);
  const [username, setUsername] = useState("");
  //when using dialog uncomment the following line..
  // const [open, setOpen] = useState(true);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMsgList(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter Your UserName😊"));
  }, []);

  const sendMsg = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div>
      {username ? <h2>Welcome {username} 🔥</h2> : null}
      <Container maxWidth="sm" className={classes.msgContainer}>
        <form className={classes.formStyle}>
          <FormControl className={classes.main__formcontorl} variant="outlined">
            <InputLabel htmlFor="msg-outlined">Enter Message..</InputLabel>
            <OutlinedInput
              id="msg-outlined"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              label="Enter a message.."
              className={classes.main__input}
            />
            <IconButton
              type="submit"
              onClick={sendMsg}
              variant="outlined"
              disabled={!input}
              color="primary"
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>

        <FlipMove>
          {msgList.map(({ id, message }) => (
            <Message key={id} msg={message} username={username} />
          ))}
        </FlipMove>
      </Container>
    </div>
  );
}

export default MainComponent;

//when using dialog uncommment this...
// const handleClose = () => {
//   setOpen(false);
// };
// eslint-disable-next-line
{
  /* <Dialog open={open} disableBackdropClick>
        <DialogTitle>Enter Your UserName😊</DialogTitle>
        <DialogContent>
          <Input
            autofocus
            margin="dense"
            fullwidth
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></Input>
        </DialogContent>
        <DialogActions>
          <Button disabled={!username} onClick={handleClose} color="primary">
            Let's Go🔥
          </Button>
        </DialogActions>
      </Dialog> */
}
