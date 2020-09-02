import React, { useState } from "react";
import {
  OutlinedInput,
  Button,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Message from "./Message";
function MainComponent() {
  const [input, setInput] = useState("");
  const [msgList, setMsgList] = useState([]);

  const sendMsg = (event) => {
    event.preventDefault();
    setMsgList([...msgList, input]);
    setInput("");
  };

  return (
    <div>
      <form>
        <FormControl variant="outlined">
          <InputLabel htmlFor="msg-outlined">Enter Message..</InputLabel>
          <OutlinedInput
            margin="normal"
            id="msg-outlined"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            label="Enter Message.."
          />
        </FormControl>
        <Button
          type="submit"
          onClick={sendMsg}
          variant="outlined"
          disabled={!input}
          color="primary"
        >
          send
        </Button>
        <div>
          {msgList.map((msg) => (
            <Message msg={msg} />
          ))}
        </div>
      </form>
    </div>
  );
}

export default MainComponent;
