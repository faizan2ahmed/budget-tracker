import React, { useState, useRef, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Button from '@mui/material/Button';

const ActionBtn = ({ onClose, onUpdate, onDelete }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={dropdownRef} className="action-dropdown">
      <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<UpdateIcon />}
      >
        Update
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
    </div>
  );
};

const Actions = ({ onEdit, onDelete }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdownClick = (event) => {
    setIsDropdownVisible(!isDropdownVisible);
    event.stopPropagation();
  };

  

  return (
    <div className="dots">
      <div
        className={`dots-icon ${isDropdownVisible ? 'active' : ''}`}
        onClickCapture={handleDropdownClick}
      >
        &#8942;
      </div>
      {isDropdownVisible && (
        <ActionBtn
          onClose={() => setIsDropdownVisible(false)}
          onUpdate={onEdit}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default Actions;
