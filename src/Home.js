import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person"; // Ikon Person (Guru)
import SchoolIcon from "@mui/icons-material/School"; // Ikon School (Siswa)
import SideBar from "./componet/SideBar"; // Mengimpor komponen SideBar

const Home = () => {
  const navigate = useNavigate();

  const handleGoToDataGuru = () => {
    navigate("/DataGuru");
  };

  const handleGoToDataSiswa = () => {
    navigate("/DataSiswa");
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#EFEAD8",
        padding: 2,
      }}
    >
      {/* Bagian Sidebar */}
      <SideBar sx={{ width: 250 }} />{" "}
      {/* Menentukan lebar tetap untuk sidebar */}
      {/* Bagian Konten Utama */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          padding: 2,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            opacity: 0,
            animation: "fadeIn 1s forwards",
            fontWeight: "bold",
            letterSpacing: 1.2,
            marginBottom: 3,
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          Selamat Datang di Manajemen Data Sederhana Bisma
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            padding: 1.5,
            borderRadius: 3,
            backgroundColor: "white",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: 600, // Memastikan tampilannya terpusat dan tidak melebar terlalu lebar
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              padding: "12px 20px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              borderRadius: "50px",
              background: "linear-gradient(45deg, #6A5ACD, #4B8BF5)",
              fontWeight: "bold",
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                background: "linear-gradient(45deg, #4B8BF5, #6A5ACD)",
              },
            }}
            onClick={handleGoToDataGuru}
            startIcon={<SchoolIcon />}
          >
            Data Guru
          </Button>

          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "100%",
              padding: "12px 20px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              borderRadius: "50px",
              background: "linear-gradient(45deg, #FF6F61, #FF8C00)",
              fontWeight: "bold",
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                background: "linear-gradient(45deg, #FF8C00, #FF6F61)",
              },
            }}
            onClick={handleGoToDataSiswa}
            startIcon={<PersonIcon />}
          >
            Data Siswa
          </Button>
        </Box>

        <Typography
          variant="h5"
          sx={{
            marginTop: 3,
            fontWeight: "bold",
            color: "#333",
            letterSpacing: 1.2,
            opacity: 0,
            animation: "slideIn 1s forwards",
            "@keyframes slideIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          SMK BINA NUSANTARA DEMAK
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginTop: 3,
            fontWeight: "bold",
            color: "#333",
            letterSpacing: 1.2,
            opacity: 0,
            animation: "slideIn 1s forwards",
            "@keyframes slideIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          SILAHKAN TEKAN UNTUK MENU SELANJUTNYA
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
