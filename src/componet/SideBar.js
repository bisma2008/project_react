import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Add Close Icon
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { label: "HOME", path: "/Home" },
  { label: "DATA GURU", path: "/DataGuru" },
  { label: "DATA SISWA", path: "/DataSiswa" },
];

function SidebarLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: drawerWidth,
        textAlign: "center",
        backgroundColor: "#2C3850", // Sidebar background color
        color: "#fff",
        height: "100%",
        transition: "transform 0.3s ease-in-out", // Smooth transition for drawer
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: "#F299AF", // Color for the sidebar header
          fontWeight: "bold",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Sidebar
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "#F299AF", // Hover effect background
                  color: "#2C3850", // Hover effect text color
                },
                padding: "12px",
              }}
            >
              {item.icon}
              <ListItemText primary={item.label} sx={{ ml: 2 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#2C3850", // AppBar background color
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Subtle shadow effect
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: '"Roboto", sans-serif',
              fontWeight: "bold",
              color: "#F299AF", // AppBar text color
              transition: "color 0.3s ease",
              "&:hover": { color: "#F299AF" }, // Hover effect on title
            }}
          >
            Bisma Putra Pratama👾
          </Typography>
          {/* Add the button for larger screens */}
          <Button
            color="inherit"
            onClick={handleSidebarToggle}
            sx={{
              display: { xs: "none", sm: "inline-block" }, // Show button only on larger screens
              transition: "background-color 0.3s ease", // Smooth background color transition
              "&:hover": {
                backgroundColor: "#F299AF", // Hover effect background color
                color: "#2C3850", // Hover text color
              },
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            {isSidebarOpen ? <CloseIcon /> : "Open Sidebar"}
          </Button>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#2C3850",
            color: "#fff",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Permanent Drawer for larger screens */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: isSidebarOpen ? "block" : "none" }, // Hide when sidebar is closed
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#2C3850",
            color: "#fff",
            transition: "transform 0.3s ease-in-out", // Smooth transition
            boxShadow: "4px 0 10px rgba(0,0,0,0.1)", // Shadow effect
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { sm: `${drawerWidth}px` }, // Add space for the sidebar
          transition: "margin 0.3s ease", // Smooth transition when sidebar opens/closes
        }}
      >
        <Toolbar />
        <Typography paragraph>INI DATA ANJAY ROR🦖</Typography>
      </Box>
    </Box>
  );
}

SidebarLayout.propTypes = {
  window: PropTypes.func,
};

export default SidebarLayout;
