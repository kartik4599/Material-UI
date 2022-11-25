import { Box } from "@mui/material";
import Post from "./Post";

const Feed = ({arr}) => {
  // const arr = [
  //   {
  //     init: "V",
  //     name: "Vivek Raut",
  //     date: "November 24,2022",
  //     url: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
  //     caption: "Always Has Been Dream",
  //   },
  //   {
  //     init: "K",
  //     name: "Kartik Mendu",
  //     date: "October 30,2022",
  //     url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     caption: "Here We Are",
  //   },
  //   {
  //     init: "V",
  //     name: "Vaibhav Goshavi",
  //     date: "November 02,2022",
  //     url: "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     caption: "Rate My Setup",
  //   },
  //   {
  //     init: "T",
  //     name: "Tejas Jagdale",
  //     date: "November 15,2022",
  //     url: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //     caption: "Books Brings knowledge and loneliness Together",
  //   },
  // ];

  return (
    <Box flex={4} p={2}>
      {arr.map((ele) => (
        <Post
          init={ele.init}
          name={ele.name}
          date={ele.date}
          url={ele.url}
          caption={ele.caption}
        />
      ))}
    </Box>
  );
};

export default Feed;
