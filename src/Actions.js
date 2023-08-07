import React, { useState } from 'react';

const ActionBtn = () => {
    return (
        <div className="action-dropdown">
            <select id="dropdown" name="dropdown">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    );
}

const Actions = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    return (
        <div
            className="dots"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
        >
            &#8942;
            {isDropdownVisible && <ActionBtn />}
        </div>
    );
}

export default Actions;
