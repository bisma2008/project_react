import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person"; // Ikon Person (Guru)
import SchoolIcon from "@mui/icons-material/School"; // Ikon School (Siswa)
import SideBar from "./componet/SideBar"; // Mengimpor komponen SideBar

// Komponen utama untuk halaman Home
const Home = () => {
  const navigate = useNavigate(); // Hook untuk navigasi antar halaman

  // Fungsi navigasi ke halaman Data Guru
  const handleGoToDataGuru = () => {
    navigate("/DataGuru");
  };

  // Fungsi navigasi ke halaman Data Siswa
  const handleGoToDataSiswa = () => {
    navigate("/DataSiswa");
  };

  return (
    <Box
      // Kontainer utama dengan gaya responsif
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Responsif: Kolom di layar kecil, baris di layar besar
        minHeight: "100vh", // Tinggi minimal layar penuh
        backgroundColor: "#EFEAD8", // Warna latar belakang
        padding: 2,
      }}
    >
      {/* Sidebar */}
      <SideBar
        sx={{
          width: { xs: "100%", sm: 250 }, // Sidebar penuh di layar kecil
          flexShrink: 0, // Sidebar tidak mengecil
        }}
      />

      {/* Konten Utama */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Elemen disusun secara vertikal
          alignItems: "center", // Elemen sejajar secara horizontal
          justifyContent: "center", // Elemen sejajar secara vertikal
          flex: 1, // Mengisi ruang yang tersedia
          padding: { xs: 2, sm: 5 }, // Padding responsif
        }}
      >
        {/* Teks Selamat Datang */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center", // Teks rata tengah
            fontWeight: "bold", // Teks tebal
            letterSpacing: 1.2, // Jarak antar huruf
            marginBottom: 3, // Jarak bawah
            animation: "fadeIn 1s forwards", // Animasi fade-in
            opacity: 0, // Awalnya tidak terlihat
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          Selamat Datang di Manajemen Data Sederhana Bisma
        </Typography>

        {/* Kontainer Tombol */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Tombol disusun secara vertikal
            gap: 2, // Jarak antar tombol
            padding: { xs: 2, sm: 3 }, // Padding responsif
            borderRadius: 3, // Sudut kontainer melengkung
            backgroundColor: "white", // Latar belakang putih
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)", // Bayangan kontainer
            width: "100%",
            maxWidth: 600, // Lebar maksimum kontainer
          }}
        >
          {/* Tombol Data Guru */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "100%", // Lebar penuh
              padding: "12px 20px", // Padding tombol
              borderRadius: "50px", // Sudut melengkung
              background: "linear-gradient(45deg, #6A5ACD, #4B8BF5)", // Gradien warna
              fontWeight: "bold", // Teks tebal
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease", // Animasi transisi
              "&:hover": {
                transform: "scale(1.05)", // Membesar saat hover
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Bayangan lebih besar saat hover
                background: "linear-gradient(45deg, #4B8BF5, #6A5ACD)", // Gradien berubah
              },
            }}
            onClick={handleGoToDataGuru} // Navigasi saat diklik
            startIcon={<SchoolIcon />} // Ikon di tombol
          >
            Data Guru
          </Button>

          {/* Tombol Data Siswa */}
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "100%", // Lebar penuh
              padding: "12px 20px", // Padding tombol
              borderRadius: "50px", // Sudut melengkung
              background: "linear-gradient(45deg, #FF6F61, #FF8C00)", // Gradien warna
              fontWeight: "bold", // Teks tebal
              transition:
                "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease", // Animasi transisi
              "&:hover": {
                transform: "scale(1.05)", // Membesar saat hover
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Bayangan lebih besar saat hover
                background: "linear-gradient(45deg, #FF8C00, #FF6F61)", // Gradien berubah
              },
            }}
            onClick={handleGoToDataSiswa} // Navigasi saat diklik
            startIcon={<PersonIcon />} // Ikon di tombol
          >
            Data Siswa
          </Button>
        </Box>

        {/* Teks Footer */}
        <Typography
          variant="h5"
          sx={{
            marginTop: 3, // Jarak atas
            fontWeight: "bold", // Teks tebal
            color: "#333", // Warna teks
            letterSpacing: 1.2, // Jarak antar huruf
            textAlign: "center", // Teks rata tengah
            opacity: 0, // Awalnya tidak terlihat
            animation: "slideIn 1s forwards", // Animasi slide-in
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
            marginTop: 1, // Jarak atas
            fontWeight: "bold", // Teks tebal
            color: "#333", // Warna teks
            letterSpacing: 1.2, // Jarak antar huruf
            textAlign: "center", // Teks rata tengah
            opacity: 0, // Awalnya tidak terlihat
            animation: "slideIn 1s forwards", // Animasi slide-in
            "@keyframes slideIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Silahkan Tekan Untuk Menu Selanjutnya
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
