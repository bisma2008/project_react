import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Swal from "sweetalert2"; // Import SweetAlert2 untuk menampilkan notifikasi
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi antar halaman
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit"; // Icon untuk tombol edit
import DeleteIcon from "@mui/icons-material/Delete"; // Icon untuk tombol hapus
import SideBar from "./componet/SideBar"; // Komponen sidebar
import TextField from "@mui/material/TextField"; // Komponen untuk input pencarian

// Lebar sidebar, digunakan untuk penyesuaian tata letak
const drawerWidth = 240;

// Styling untuk sel tabel di bagian header dan body
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black, // Latar belakang hitam untuk header
    color: theme.palette.common.white, // Teks putih untuk header
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14, // Ukuran font untuk isi tabel
  },
}));

// Styling untuk baris tabel (row), termasuk warna bergantian
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover, // Warna berbeda untuk baris ganjil
  },
  "&:last-child td, &:last-child th": {
    border: 0, // Tidak ada border untuk baris terakhir
  },
}));

// Komponen utama untuk menampilkan dan mengelola data
export default function DataGuru() {
  const [foods, setFoods] = useState([]); // State untuk menyimpan data dari API
  const [searchQuery, setSearchQuery] = useState(""); // State untuk kata kunci pencarian
  const navigate = useNavigate(); // Hook untuk navigasi antar halaman

  // Mengambil data dari server saat komponen pertama kali dimuat
  useEffect(() => {
    fetchFoods(); // Panggil fungsi untuk mengambil data
  }, []);

  // Fungsi untuk mengambil data dari server
  const fetchFoods = () => {
    axios
      .get("http://localhost:3030/foods") // Endpoint API untuk mengambil data
      .then((response) => {
        console.log("Data fetched:", response.data); // Log data untuk debugging
        setFoods(response.data); // Simpan data ke state
      })
      .catch((error) => {
        console.error("Error fetching data", error); // Log error jika terjadi kesalahan
      });
  };

  // Fungsi untuk menghapus data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?", // Judul dialog konfirmasi
      text: "Item ini akan dihapus permanen!", // Pesan peringatan
      icon: "warning", // Ikon peringatan
      showCancelButton: true, // Tombol batal
      confirmButtonColor: "#d33", // Warna tombol konfirmasi
      cancelButtonColor: "#3085d6", // Warna tombol batal
      confirmButtonText: "Ya, Hapus!", // Teks tombol konfirmasi
      cancelButtonText: "Batal", // Teks tombol batal
    }).then((result) => {
      if (result.isConfirmed) {
        // Jika pengguna mengkonfirmasi penghapusan
        axios
          .delete(`http://localhost:3030/foods/${id}`) // API untuk menghapus item berdasarkan ID
          .then(() => {
            setFoods(foods.filter((food) => food.id !== id)); // Perbarui state setelah data dihapus
            Swal.fire("Dihapus!", "Item telah dihapus.", "success"); // Notifikasi sukses
          })
          .catch((error) => {
            console.error("Error deleting data", error); // Log error jika gagal
            Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus.", "error"); // Notifikasi gagal
          });
      }
    });
  };

  // Fungsi untuk navigasi ke halaman tambah data
  const handleAddFood = () => {
    navigate("/TambahData"); // Pindah ke halaman tambah data
  };

  // Fungsi untuk navigasi ke halaman edit data
  const handleEdit = (id) => {
    navigate(`/UbahData/${id}`); // Pindah ke halaman edit data dengan ID tertentu
  };

  // Fungsi untuk menangani perubahan pada input pencarian
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update kata kunci pencarian
  };

  // Filter data berdasarkan pencarian
  const filteredFoods = foods.filter((food) => {
    return (
      food.guru.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter berdasarkan nama guru
      food.mapel.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter berdasarkan mata pelajaran
      food.gender.toLowerCase().includes(searchQuery.toLowerCase()) // Filter berdasarkan gender
    );
  });

  return (
    <Box sx={{ display: "flex" }}>
      {/* Komponen sidebar */}
      <SideBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { sm: `${drawerWidth}px` }, // Penyesuaian margin untuk sidebar
          p: 10, // Padding untuk konten utama
          backgroundColor: "#f9f9f9", // Warna latar belakang
          minHeight: "100vh", // Tinggi penuh
          position: "relative", // Untuk posisi elemen tambahan jika perlu
        }}
      >
        {/* Input Pencarian */}
        <TextField
          label="Cari Guru"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ marginBottom: 2 }}
        />

        {/* Tombol untuk menambah data */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddFood}
          sx={{ marginBottom: 2 }}
        >
          Tambah Data Guru
        </Button>

        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table
            sx={{
              minWidth: 650,
              "@media (max-width: 600px)": { width: "100%" },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>NO</StyledTableCell>
                <StyledTableCell align="left">GURU</StyledTableCell>
                <StyledTableCell align="right" className="hide-column">
                  MAPEL
                </StyledTableCell>
                <StyledTableCell align="center" className="hide-column">
                  GENDER
                </StyledTableCell>
                <StyledTableCell align="center">AKSI</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredFoods.map((food, index) => (
                <StyledTableRow key={food.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="left">{food.guru}</StyledTableCell>
                  <StyledTableCell align="right" className="hide-column">
                    {food.mapel}
                  </StyledTableCell>
                  <StyledTableCell align="center" className="hide-column">
                    {food.gender}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginRight: 1 }}
                      onClick={() => handleEdit(food.id)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(food.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
