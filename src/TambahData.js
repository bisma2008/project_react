import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import { Box } from "@mui/material";

export default function TambahData() {
  const navigate = useNavigate(); // Hook untuk navigasi
  const [food, setFood] = useState({ guru: "", mapel: "", gender: "" }); // State untuk data baru

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  // Fungsi untuk submit data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!food.guru || !food.mapel || !food.gender) {
      Swal.fire("Error", "Semua field harus diisi!", "error");
      return;
    }

    axios
      .post("http://localhost:3030/foods", food) // Endpoint untuk tambah data
      .then(() => {
        Swal.fire("Berhasil", "Data berhasil ditambahkan!", "success");
        navigate("/DataGuru"); // Navigasi kembali ke halaman data guru
      })
      .catch((error) => {
        console.error("Error adding data:", error);
        Swal.fire("Error", "Gagal menambahkan data!", "error");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "silver", // Latar belakang silver
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: "600px",
          padding: "30px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Bayangan halus
          borderRadius: "20px", // Sudut membulat
          background: "rgba(255, 255, 255, 0.85)", // Semi-transparan
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          boxSizing: "border-box",
          "&:hover": {
            boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.3)", // Bayangan lebih kuat saat hover
          },
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#3F5EFB", // Warna heading sesuai tema
            fontWeight: "bold",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          Tambah Data
        </h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Guru"
            name="guru"
            value={food.guru}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px", // Membulatkan input
                background: "white", // Latar belakang putih
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Bayangan
                "&:hover fieldset": {
                  borderColor: "#3F5EFB", // Warna biru saat hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FC466B", // Warna pink saat fokus
                  borderWidth: "2px", // Border lebih tebal saat fokus
                },
              },
            }}
          />
          <TextField
            label="Mapel"
            name="mapel"
            value={food.mapel}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{
              marginBottom: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                background: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                "&:hover fieldset": {
                  borderColor: "#3F5EFB",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FC466B",
                  borderWidth: "2px",
                },
              },
            }}
          />
          <TextField
            label="Gender"
            name="gender"
            value={food.gender}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{
              marginBottom: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                background: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                "&:hover fieldset": {
                  borderColor: "#3F5EFB",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FC466B",
                  borderWidth: "2px",
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Button
              variant="outlined"
              color="error"
              onClick={() => navigate("/DataGuru")}
              sx={{
                width: "48%",
                padding: "10px",
                borderRadius: "10px", // Membulatkan tombol
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#fce4ec", // Warna merah muda saat hover
                },
              }}
            >
              Batal
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: "48%",
                padding: "10px",
                borderRadius: "10px",
                fontWeight: "bold",
                background: "linear-gradient(45deg, #3F5EFB, #FC466B)", // Gradasi tombol
                "&:hover": {
                  background: "linear-gradient(45deg, #FC466B, #3F5EFB)", // Gradasi terbalik saat hover
                },
              }}
            >
              Tambah Data
            </Button>
          </div>
        </form>
      </Paper>
    </Box>
  );
}
