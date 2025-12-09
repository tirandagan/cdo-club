import './Navbar.css';

const Navbar = ({ selectedItem, onItemSelect, menuItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">🎯</span>
          <span className="brand-text">CDO Club</span>
        </div>
        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`navbar-item ${selectedItem === item.id ? 'active' : ''}`}
              onClick={() => onItemSelect(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

