import Portfolio from "@/Portfolio";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      minHeight={"100vh"}
      width={"100%"}
      sx={{ backgroundColor: "#f2f2f2" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Portfolio />
    </Box>
  );
}
