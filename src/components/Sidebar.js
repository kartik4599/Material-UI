import { Group, Home, Pages, People, Settings } from "@mui/icons-material";
import StoreIcon from "@mui/icons-material/Store";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NightlightIcon from "@mui/icons-material/Nightlight";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = ({ setmode, mode }) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ "padding-right": "5em", display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Group" />
          </ListItemButton>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
          </ListItemButton>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <NightlightIcon />
            </ListItemIcon>
            <Switch
              onChange={(e) => setmode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
