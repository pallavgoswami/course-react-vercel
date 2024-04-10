import React from 'react';

function Header() {
  const headerStyle = {
    position: 'relative',
    top: '40px',
  };

  return (
    <div>
      <h1 className="text-light" style={headerStyle}>COURSEPEDIA</h1>
    </div>
  );
}

export default Header;

