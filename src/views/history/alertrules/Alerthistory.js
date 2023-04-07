import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { getToken} from '../../../Common'
import { format } from 'date-fns'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const input={
  width:'50%', 
  height:'20',
  float: 'right'
}


const Alerthistory = () => {
  const [historyAlert, setHistoryAlert] = useState([]);

  //Xử lý sự kiện đóng  mở
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Phân trang
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Dữ liệu ở các cột
  const columns = [
    {
      id: 'id', label: 'Id'
    },
    {
      id: 'remark', label: 'Remark'
    },
    {
      id: 'balance',
      label: 'Balance',
      align: 'left',
    },
    {
      id: 'createat',
      label: 'Create at',
      align: 'left',
    }
  ];
  //Yêu cầu login
  const configToken = {
    headers: {
      Authorization: 'Bearer ' + getToken()
    }
  }

  ///Use Effect
  useEffect(() => {
    getData()
  }, []
  )
  //Đổ dữ liệu lên bảng
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/api/history/alert/all`, configToken)
      .then((response) => {
       
        setHistoryAlert(response.data)
      })
  }

  //gán dữ liệu từ api vào row
  const rows = historyAlert;

  return (
    <div>
      <button onClick={handleOpen} className="btn btn-success">Alert History</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 500 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows                    .map((listValue, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{listValue.id}</TableCell>
                          <TableCell>{listValue.remark}</TableCell>
                          <TableCell>{listValue.balance}</TableCell>
                          <TableCell>{format(new Date(listValue.createdate), 'dd MMMM yyyy, hh:mm:ss a')}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 20, 50, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default Alerthistory