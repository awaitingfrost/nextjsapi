import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <div className="br"></div>
      {children}
    </div>
  );
};

export default Layout;
