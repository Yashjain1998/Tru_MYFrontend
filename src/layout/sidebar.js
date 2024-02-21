import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


const SideBar = () => {
  return (
    <div>
      <Toolbar sx={{ background: "black" }}>
        <Typography
          variant="h6" // Adjust the variant for different sizes
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#c3dcf5",
          }}
        >
          WELCOME
        </Typography>
      </Toolbar>
      <Divider sx={{ borderTop: "1px solid rgb(39 39 40)" }} />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#d3d6dad9" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
