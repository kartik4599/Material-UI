import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Rightbar = () => {
  const avatarArr = [
    "http://material-ui.com/static/images/avatar/1.jpg",
    "http://material-ui.com/static/images/avatar/2.jpg",
    "http://material-ui.com/static/images/avatar/3.jpg",
    "http://material-ui.com/static/images/avatar/4.jpg",
    "http://material-ui.com/static/images/avatar/5.jpg",
    "http://material-ui.com/static/images/avatar/6.jpg",
    "http://material-ui.com/static/images/avatar/7.jpg",
    "http://material-ui.com/static/images/avatar/8.jpg",
  ];

  const ImageListArr = [
    "http://material-ui.com/static/images/image-list/breakfast.jpg",
    "http://material-ui.com/static/images/image-list/burgers.jpg",
    "http://material-ui.com/static/images/image-list/camera.jpg",
    "https://images.unsplash.com/photo-1669236712949-b58f9758898d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1665686310974-2ed1eb7f57ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];

  const ListItemArr = [
    {
      url: "http://material-ui.com//static/images/avatar/1.jpg",
      primary: "Brunch this weekend?",
      secondary: "Ali Connors",
      msg: "— I'll be in your neighborhood doing errands this…",
    },
    {
      url: "http://material-ui.com//static/images/avatar/2.jpg",
      primary: "Summer BBQ",
      secondary: " to Scott, Alex, Jennifer",
      msg: " — Wish I could come, but I'm out of town this…",
    },
    {
      url: "http://material-ui.com//static/images/avatar/3.jpg",
      primary: "Oui Oui ",
      secondary: "Sandra Adams  ",
      msg: "— Do you have Paris recommendations? Have you ever…",
    },
  ];

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup max={5}>
          {avatarArr.map((url) => (
            <Avatar alt="Eemy Sharp" src={url} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" sx={{ margin: "10px 0px" }}>
          Latest Photo
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {ImageListArr.map((url) => (
            <ImageListItem>
              <img alt="" src={url} />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" sx={{ margin: "10px 0px" }}>
          Latest Converations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {ListItemArr.map((obj) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={obj.url} />
                </ListItemAvatar>
                <ListItemText
                  primary={obj.primary}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {obj.secondary}
                      </Typography>
                      {obj.msg}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
