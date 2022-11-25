import { Button, Fab, Modal, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";
import { styled } from "@mui/system";
import InputBox from "./InputBox";

const Add = ({ getData }) => {
  const [open, setopen] = useState(false);

  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const sentData = (obj) => {
    getData(obj);
    setopen(false);
  };

  return (
    <div>
      <Button
        onClick={() => {
          setopen(true);
        }}>
        <Tooltip
          title="Post"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", sm: 20 },
          }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Button>
      <StyleModal
        open={open}
        onClose={() => {
          setopen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <InputBox getData={sentData} />
      </StyleModal>
    </div>
  );
};

export default Add;
