import styled from "@emotion/styled";
import {
  EmojiEmotions,
  EmojiEvents,
  EmojiFoodBeverage,
  EmojiPeople,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const InputBox = ({ getData }) => {
  const [url, seturl] = useState("");
  const [caption, setcaption] = useState("");

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "10px 0px",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const obj = {
      init: "K",
      name: "Kartik Mendu",
      date: `${
        months[date.getMonth()]
      } ${date.getDate()},${date.getFullYear()}`,
      url: url,
      caption: caption,
    };
    getData(obj);
  };

  return (
    <Box
      sx={{ width: "50%", height: "280px" }}
      bgcolor={"background.default"}
      color={"text.primary"}
      borderRadius={5}
      p={3}>
      <Typography variant="h5" color="grey">
        Create Post
      </Typography>
      <UserBox>
        <Avatar
          src="http://material-ui.com//static/images/avatar/1.jpg"
          sx={{ width: 40, height: 40 }}
        />
        <Typography fontWeight={500} variant="body1">
          Kartik
        </Typography>
      </UserBox>
      <form onSubmit={submitHandler}>
        <TextField
          sx={{ width: "100%", margin: "10px 0px" }}
          placeholder="Image Url"
          variant="standard"
          value={url}
          onChange={(e) => {
            seturl(e.target.value);
          }}
          required
        />
        <TextField
          sx={{ width: "100%" }}
          multiline
          rows={3}
          placeholder="What's on your mind!"
          variant="standard"
          value={caption}
          onChange={(e) => {
            setcaption(e.target.value);
          }}
          required
        />
        <Stack direction={"row"} mt={2} mb={3} gap={3}>
          <EmojiEmotions color="primary" />
          <EmojiEvents color="warning" />
          <EmojiFoodBeverage color="error" />
          <EmojiPeople color="success" />
        </Stack>
        <ButtonGroup fullWidth variant="contained">
          <Button type="submit">Post</Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default InputBox;
