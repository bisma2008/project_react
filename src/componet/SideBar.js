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
import CloseIcon from "@mui/icons-material/Close"; // Menambahkan ikon Close
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home"; // Ikon Home
import SchoolIcon from "@mui/icons-material/School"; // Ikon School
import PersonIcon from "@mui/icons-material/Person"; // Ikon Person (Guru)

// Pengaturan Drawer
const drawerWidth = 240;
const navItems = [
  { label: "HOME", path: "/Home", icon: <HomeIcon /> },
  { label: "DATA GURU", path: "/DataGuru", icon: <SchoolIcon /> },
  { label: "DATA SISWA", path: "/DataSiswa", icon: <PersonIcon /> },
];

function SidebarLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State untuk mengontrol visibilitas sidebar

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
        backgroundColor: "#607ABD", // Warna latar belakang Sidebar (diperbarui)
        color: "#fff",
        height: "100%",
        transition: "transform 0.3s ease-in-out", // Transisi halus untuk drawer
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: "#A3B1EE", // Warna teks header Sidebar (diperbarui)
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
                  backgroundColor: "#A3B1EE", // Efek hover latar belakang (diperbarui)
                  color: "#607ABD", // Efek hover warna teks (diperbarui)
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

      {/* Bagian Baru: Data Guru Dan Siswa */}
      <Divider sx={{ my: 2 }} />
      <Typography
        variant="subtitle1"
        sx={{
          color: "#A3B1EE", // Warna teks (diperbarui)
          fontWeight: "bold",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Data Guru Dan Siswa
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Typography
        variant="subtitle1"
        sx={{
          color: "#A3B1EE", // Warna teks (diperbarui)
          fontWeight: "bold",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        PROJECT REACT
      </Typography>
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
          backgroundColor: "#607ABD", // Warna latar belakang AppBar (diperbarui)
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Efek bayangan halus
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
              color: "#A3B1EE", // Warna teks AppBar (diperbarui)
              transition: "color 0.3s ease",
              "&:hover": { color: "#A3B1EE" }, // Efek hover pada judul
            }}
          >
            Bisma Putra Pratama
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: '"Roboto", sans-serif',
              fontWeight: "bold",
              color: "#A3B1EE", // Warna teks AppBar (diperbarui)
              transition: "color 0.3s ease",
              "&:hover": { color: "#A3B1EE" }, // Efek hover pada judul
            }}
          >
            SMK BINA NUSANTARA
          </Typography>
          {/* Tambahkan tombol untuk layar yang lebih besar */}
          <Button
            color="inherit"
            onClick={handleSidebarToggle}
            sx={{
              display: { xs: "none", sm: "inline-block" }, // Tampilkan tombol hanya di layar besar
              transition: "background-color 0.3s ease", // Transisi halus latar belakang warna
              "&:hover": {
                backgroundColor: "#A3B1EE", // Efek hover latar belakang warna (diperbarui)
                color: "#607ABD", // Efek hover warna teks (diperbarui)
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

      {/* Drawer untuk Mobile */}
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
            backgroundColor: "#F4DAEB", // Warna yang diperbarui untuk Drawer
            color: "F4DAEB",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Drawer permanen untuk layar yang lebih besar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: isSidebarOpen ? "block" : "none" }, // Sembunyikan ketika sidebar ditutup
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#607ABD", // Warna latar belakang diperbarui
            color: "#fff",
            transition: "transform 0.10s ease-in-out", // Transisi halus
            boxShadow: "4px 0 10px rgba(0,0,0,0.1)", // Efek bayangan
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Konten utama */}
      {/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { sm: `${drawerWidth}px` }, // Menambahkan ruang untuk sidebar
          transition: "margin 0.3s ease", // Transisi halus saat sidebar terbuka/tertutup
        }}
      >
        <Toolbar />
        MANEJEMEN DATA SEDERHANA
      </Box> */}
    </Box>
  );
}

SidebarLayout.propTypes = {
  window: PropTypes.func,
};

export default SidebarLayout;
