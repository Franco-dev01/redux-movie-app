import React from "react";
import { Box } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

const InfinityScrollComponent = (props) => {
  const { children, dataLength, fetchMoreData, hasMore } = props;
  const movie = useSelector(getAllMovies);
  return (
    <Box>
      <InfiniteScroll
        dataLength={movie.results.length}
        next={fetchMoreData}
        hasMore={hasMore}
      >
        {children}
      </InfiniteScroll>
    </Box>
  );
};

export default InfinityScrollComponent;
