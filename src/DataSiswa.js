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
import Swal from "sweetalert2"; // Import SweetAlert2
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit"; // Import Edit icon
import DeleteIcon from "@mui/icons-material/Delete"; // Import Delete icon
import SideBar from "./componet/SideBar";
import TextField from "@mui/material/TextField"; // Import TextField for search

// Sidebar width (match with the Navbar's sidebar width)
const drawerWidth = 240;

// Styling for table cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Styling for table rows
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DataSiswa() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get("http://localhost:3030/students") // Ubah endpoint untuk data siswa
      .then((response) => {
        console.log("Data fetched:", response.data); // Debugging log
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Item ini akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3030/students/${id}`)
          .then(() => {
            setStudents(students.filter((student) => student.id !== id));
            Swal.fire("Dihapus!", "Item telah dihapus.", "success");
          })
          .catch((error) => {
            console.error("Error deleting data", error);
            Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus.", "error");
          });
      }
    });
  };

  const handleAddStudent = () => {
    navigate("/TambahDataSiswa");
  };

  const handleEdit = (id) => {
    navigate(`/UbahDataSiswa/${id}`);
  };

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.kelas.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.kejuruan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { sm: `${drawerWidth}px` }, // Sesuaikan jarak untuk sidebar
          p: 10,
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddStudent}
          sx={{ marginBottom: 2 }}
        >
          Tambah Data Siswa
        </Button>

        {/* Search Bar */}
        <TextField
          label="Cari Siswa"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          sx={{ marginBottom: 3 }}
        />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>NO</StyledTableCell>
                <StyledTableCell align="left">NAMA</StyledTableCell>
                <StyledTableCell align="left">KELAS</StyledTableCell>
                <StyledTableCell align="left">KEJURUAN</StyledTableCell>
                <StyledTableCell align="center">AKSI</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudents.map((student, index) => (
                <StyledTableRow key={student.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="left">{student.nama}</StyledTableCell>
                  <StyledTableCell align="left">
                    {student.kelas}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {student.kejuruan}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ marginRight: 1 }}
                      onClick={() => handleEdit(student.id)}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(student.id)}
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
