import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="inner">
          <NavLink to="/" className="logo" style={{ borderBottom: "none" }}>
            <span className="mark" aria-hidden="true" />
            Fieldnote
          </NavLink>
          <nav className="nav" aria-label="Primary">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) => (isActive ? "active" : "")}>
              Pricing
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="inner">
          <span className="fine">© {new Date().getFullYear()} Fieldnote. A scheduling tool for field crews.</span>
          <div className="foot-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}
