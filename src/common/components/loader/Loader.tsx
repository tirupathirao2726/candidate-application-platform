import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const Loader = () => {
  const loader  = useSelector((state: any) => state.loader);
  return (
    <div>
      {(loader.isLoading) && (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 1000,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,.2)",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Loader;
