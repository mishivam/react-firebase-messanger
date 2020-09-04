import React, { forwardRef } from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import "./message.css";

const Message = forwardRef((props, ref) => {
  const isUserMe = props.username === props.msg.username;

  return (
    <div ref={ref} className={`message ${isUserMe && "meesage_user"}`}>
      <Card className={isUserMe ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography component="h2" varient="h2">
            {!isUserMe && `${props.msg.username || 'unknown user' }: `}{props.msg.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
