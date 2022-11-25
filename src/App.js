import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const arr = [
    {
      init: "V",
      name: "Vivek Raut",
      date: "November 24,2022",
      url: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      caption: "Always Has Been Dream",
    },
    {
      init: "K",
      name: "Kartik Mendu",
      date: "October 30,2022",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Here We Are",
    },
    {
      init: "V",
      name: "Vaibhav Goshavi",
      date: "November 02,2022",
      url: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      caption: "Rate My Setup",
    },
    {
      init: "T",
      name: "Tejas Jagdale",
      date: "November 15,2022",
      url: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      caption: "Books Brings knowledge and loneliness Together",
    },
  ];
  const [feedArr, setfeedArr] = useState(arr);
  const [mode, setmode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const getData = (obj) => {
    console.log(obj);
    const newArr=[obj,...feedArr];
    setfeedArr(newArr);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
          <Sidebar setmode={setmode} mode={mode} />
          <Feed arr={feedArr} />
          <Rightbar />
        </Stack>
        <Add getData={getData} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
