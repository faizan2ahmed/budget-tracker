import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";

const Popup = ({ open, handleClose, name, setName, price, setPrice, date, setDate, handleAction, dialogTitle }) => {
  console.log('check popup');
  console.log('Dialog Title', dialogTitle);
  console.log("date:",date);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent className="popup">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth 
          margin="dense"
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Date"
          type="date"
          value={date ? date.slice(0, 10) : ""}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
          disabled={dialogTitle === "Update Budget"} // Disable the input for "Update" dialog
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAction} color="primary">
          {dialogTitle === "Add Budget" ? "Add" : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
