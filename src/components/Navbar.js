import styled from "@emotion/styled";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  background: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
});

const Icons = styled(Box)({
  display: "none",
  gap: "20px",
  alignItems: "center",
});

const MobileIcons = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ display: { xs: "none", sm: "block" } }}>
          Typograph
        </Typography>
        <BakeryDiningIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons sx={{ display: { sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://pm1.narvii.com/7767/c3cbfd602edd62c3e9a81e4851e392ab0d385453r1-848-1200v2_hq.jpg"
          />
        </Icons>
        <MobileIcons sx={{ display: { sm: "none" } }}>
          <Avatar
            onClick={() => setOpen(true)}
            sx={{ width: 30, height: 30 }}
            src="https://pm1.narvii.com/7767/c3cbfd602edd62c3e9a81e4851e392ab0d385453r1-848-1200v2_hq.jpg"
          />
        </MobileIcons>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <MenuItem>My account</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
