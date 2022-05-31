import React from 'react';

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <div>
            <p onClick={handleClick} className={activeTab === id ? "active" : ""}>
                {title}
            </p>
        </div>
    );
};

export default TabNavItem;