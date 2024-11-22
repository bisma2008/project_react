import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Mengimpor SweetAlert2

export default function AddDataSiswa() {
  const [nama, setNama] = useState(""); // Menyimpan nama siswa
  const [kelas, setKelas] = useState(""); // Menyimpan kelas siswa
  const [kejuruan, setKejuruan] = useState(""); // Menyimpan kejuruan siswa
  const [loading, setLoading] = useState(false); // Menyimpan status loading untuk tombol
  const navigate = useNavigate(); // Untuk navigasi antar halaman

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Mulai loading ketika form disubmit

    const newStudent = {
      nama,
      kelas,
      kejuruan,
    };

    // Mengirim data siswa baru ke server
    axios
      .post("http://localhost:3030/students", newStudent)
      .then((response) => {
        setLoading(false); // Menghentikan loading
        console.log("Data berhasil ditambahkan:", response.data);

        // Menampilkan notifikasi sukses dengan SweetAlert
        Swal.fire({
          icon: "success",
          title: "Data Berhasil Ditambahkan",
          text: "Data siswa baru berhasil ditambahkan!",
        });

        navigate("/DataSiswa"); // Arahkan ke halaman daftar siswa setelah berhasil
      })
      .catch((error) => {
        setLoading(false); // Menghentikan loading
        console.error("Error adding student:", error);

        // Menampilkan notifikasi gagal dengan SweetAlert
        Swal.fire({
          icon: "error",
          title: "Gagal Menambahkan Data",
          text: "Terjadi kesalahan saat menambahkan data siswa. Coba lagi.",
        });
      });
  };

  // Fungsi untuk membatalkan form dan kembali ke halaman daftar siswa
  const handleCancel = () => {
    setNama(""); // Mengosongkan field nama
    setKelas(""); // Mengosongkan field kelas
    setKejuruan(""); // Mengosongkan field kejuruan
    navigate("/DataSiswa"); // Arahkan kembali ke halaman daftar siswa
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#C0C0C0", // Latar belakang warna silver
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 600,
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
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            color: "#3F5EFB", // Warna heading biru
            fontWeight: "bold",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
          }}
        >
          Tambah Data Siswa
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Nama"
                fullWidth
                required
                margin="normal"
                variant="outlined"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px", // Membulatkan input
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Bayangan input
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#3F5EFB", // Warna border saat hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FC466B", // Warna border saat fokus
                      borderWidth: "2px",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Kelas"
                fullWidth
                required
                margin="normal"
                variant="outlined"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#3F5EFB", // Warna border saat hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FC466B", // Warna border saat fokus
                      borderWidth: "2px",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Kejuruan"
                fullWidth
                required
                margin="normal"
                variant="outlined"
                value={kejuruan}
                onChange={(e) => setKejuruan(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#3F5EFB", // Warna border saat hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FC466B", // Warna border saat fokus
                      borderWidth: "2px",
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading} // Menonaktifkan tombol saat loading
              sx={{
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "10px", // Membulatkan tombol
                background: "linear-gradient(45deg, #3F5EFB, #FC466B)", // Gradasi warna
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  background: "linear-gradient(45deg, #FC466B, #3F5EFB)", // Gradasi terbalik saat hover
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} /> // Menampilkan progress saat loading
              ) : (
                "Tambah"
              )}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCancel}
              sx={{
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "10px", // Membulatkan tombol batal
                marginLeft: 2, // Jarak antar tombol
                border: "2px solid #FC466B", // Border warna merah muda
                "&:hover": {
                  borderColor: "#3F5EFB", // Border biru saat hover
                  backgroundColor: "#F1F1F1", // Latar belakang lebih terang saat hover
                },
              }}
            >
              Batal
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
