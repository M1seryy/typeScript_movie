import React, { SetStateAction, useState } from "react";
import Layout from "../../Layout";
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list/MovieList";

const Home = () => {
  const [search, setSearch] = useState("");

  const searchHnadler = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };
  return (
    <Layout>
      <Box>
        <Paper
          component={"form"}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            onChange={searchHnadler}
            startAdornment={
              <InputAdornment position="start">
                <img src={SearchIcon} alt="" width={20} height={20} />
              </InputAdornment>
            }
            placeholder="Search for movies or TV series"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === "" ? (
          <Box width={"100%"}>
            <Box width={"100%"}>
              <Typography variant={"h5"} component="h1" my={6} fontWeight={400}>
                Trending
              </Typography>
              <MovieTrendList trendList={trendList}/>
            </Box>

            <Box width={"100%"}>
              <Typography variant={"h5"} component="h1" my={6} fontWeight={400}>
                Recomending
              </Typography>
              <MovieList recomendedList={recomendedList }/>
            </Box>
          </Box>
        ) : (
          <Box width={"100%"}>
            <Typography>Found</Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
