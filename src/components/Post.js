import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Favorite, MoreVert } from "@mui/icons-material";

const Post = ({ init, name, date, url, caption }) => {
  return (
    <Card sx={{margin:"15px 5px"}}> 
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {init}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia component="img" height="15%" image={url} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteIcon />}
            checkedIcon={<Favorite color="error" />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <SendIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
