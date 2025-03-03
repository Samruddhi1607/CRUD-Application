import { useState } from 'react';
import './App.css';
import Table from './Component/Table';
import { Modal } from './Component/Modal';



function App() {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {AssignTo:"User 1" ,Status:"Complete",DueDate:"12/04/2024",Priority:"Low",Comments:"This Task Is Good"},
    {AssignTo:"User 2" ,Status:"In Progress",DueDate:"3/08/2024",Priority:"High",Comments:"This Task Is Good"},
    {AssignTo:"User 3" ,Status:"Not Started",DueDate:"2/09/2024",Priority:"Low",Comments:"This Task Is Good"},
    {AssignTo:"User 4" ,Status:"In Progress",DueDate:"24/10/2024",Priority:"Low",Comments:"This Task Is Good"},
    
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;