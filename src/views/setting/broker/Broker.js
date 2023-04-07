// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  InputBase,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState, useRef } from "react";
import axios from "axios";
import { getToken } from "../../../Common";
const Search = (props) => {
  const [search, setSearch] = useState([]);
  const [searchName, setSearchName] = useState("");
  const searchRef = useRef();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  searchRef.current = search;

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };
  const configToken = {
    headers: {
      Authorization: "Bearer " + getToken(),
    },
  };
  const getRequestParams = (searchName) => {
    let params = {};
    try {
      params["searchName"] = searchName;
    } catch (error) {
      console.error(error);
    }

    return params;
  };
  const retriveSearchName = () => {
    const params = getRequestParams(searchName);

    axios
  .get(
    `${process.env.REACT_APP_API_ENDPOINT}/Customer/ProductController/findByNameLike`,
    {
      params: { brokerName: searchName },
      headers: { Authorization: "Bearer " + getToken() },
    }
  )
  .then((response) => {
    console.log(response.data);
    setSearch(response.data);
  })
  .catch((error) => {
    console.log("đéo lấy được");
  });
  };
  const findByCode = () => {
    retriveSearchName()
  }

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
  // export default function BasicGrid() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SearchIcon sx={{ mr: 1 }} />
                  <InputBase
                    placeholder="Tìm kiếm hàng hóa..."
                    value={searchName}
                    onChange={onChangeSearchName}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={findByCode}
                  />
                </Box>
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <AddCircleIcon sx={{ mr: 2 }} />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Grid>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SearchIcon sx={{ mr: 1 }} />
              <InputBase placeholder="Tìm kiếm hàng hóa..." />
            </Box>
          </Grid>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            Tổng Tiền Hàng
            <TextField variant="standard" />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            Giảm giá
            <TextField variant="standard" />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            Thu khác
            <TextField variant="standard" />
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            Khách cần trả
            <TextField variant="standard" />
          </Box>
          <Box sx={{ justifyContent: "flex-end", mt: 2 }}>
            <Button variant="contained" color="primary">
              Lưu
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Search;
