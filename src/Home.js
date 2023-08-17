import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  TablePagination,
  Stack,
  Alert,
  Button,
} from "@mui/material";
import Popup from "./Popup";
import Actions from "./Actions";

const Home = ({ budgetList, setBudgetList }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState("");
  const [dialogType, setDialogType] = useState("add");
  const [id, setId] = useState(budgetList.length);

  console.log("budgetList.length: ",budgetList.length);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpen = (type) => {
    console.log("handleOpen(type): ",type)
    if(type==='add'){
      clearFormFields();
    }
    setDialogType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddOrUpdateBudget = (dialogType) => {
    console.log("handleAddOrUpdateBudget->dialogType: ", dialogType.value)
    if (dialogType === "add") {
      console.log("handleAddOrUpdateBudget -> add -> (handleAddBudget)");
      handleAddBudget();
    } else if (dialogType === "update") {
      console.log("handleAddOrUpdateBudget -> update -> (handleUpdateBudget)");
      handleUpdateBudget();
    }
  };

  

  const handleAddBudget = () => {
    const newBudgetEntry = {
      name: name,
      price: price,
      date: date,
      id: id
    };

    setBudgetList((prevBudgetList) => [...prevBudgetList, newBudgetEntry]);
    clearFormFields();
    handleClose();
    setShowSuccessAlert(true);

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 5000);
  };

  
  const handleUpdateBudget = () => {
    const updatedBudgetEntry = {
      name: name,
      price: price,
      date: date,
    };

    const updatedList = budgetList.map((entry) => {
      console.log("entry: ",entry);
      if (entry.date.startsWith(date) ) {
        console.log('entry date: ',entry.date);
        console.log('selected Date: ',date);
        console.log('updated');
        return updatedBudgetEntry;
      }
      return entry;
    });

    setBudgetList(updatedList);
    clearFormFields();
    handleClose();
    setShowSuccessAlert(true);

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 5000);
};

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setPage(0);
    setRowsPerPage(5);
  };

  const handleFilterRecords = () => {
    const filteredList = budgetList.filter((entry) =>
      entry.date.startsWith(selectedDate)
    );
    setBudgetList(filteredList);
  };

  const clearFormFields = () => {
    setName("");
    setPrice("");
    setDate("");
    setId("");
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home-view">
          <div className="dateFilter">
            <input type="date" id="datePicker" onChange={handleDateChange} />
            <button className="filterBtn" onClick={handleFilterRecords}>
              Filter Records
            </button>
            <button
              className="addBudgetBtn"
              onClick={() => {
                handleOpen("add");
              }}
            >
              Add Budget
            </button>
          </div>
          <div className="budgetData">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {budgetList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.name}</td>
                      <td>{entry.price}</td>
                      <td>{entry.date}</td>
                      <td>
                        <Actions
                          onEdit={() => {
                            setName(entry.name);
                            setDate(entry.date);
                            console.log("entry.date: ",entry.date)
                            setPrice(entry.price);
                            setId(entry.id);
                            handleOpen('update');
                          }}
                          onDelete={() => {
                            // Implement logic to delete the entry
                          }}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={budgetList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>
      </div>
      <Popup
        open={open}
        handleClose={handleClose}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        date={date}
        setDate={setDate}
        dialogTitle={dialogType === "add" ? "Add Budget" : "Update Budget"}
        handleAction={()=>{handleAddOrUpdateBudget(dialogType)}}
        
      />
      <div className="alert-container">
        {showSuccessAlert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              sx={{ backgroundColor: "rgba(179, 252, 148, 0.549)" }}
              severity="success"
            >
              Budget added successfully!
            </Alert>
          </Stack>
        )}
      </div>
      <div className="button-container">
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#000", color: "#fff", padding: "0.5rem 1rem" }}
          onClick={() => history.push("/Budget-analytics")}
        >
          View Budget Trends
        </Button>
      </div>
    </div>
  );
};

export default Home;
