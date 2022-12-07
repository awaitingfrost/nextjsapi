import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>My Next App</h1>
      </div>
      <div className="left ">
        <Link className="h" href="/">
          Home
        </Link>
        <Link className="h" href="/sagar/About">
          About
        </Link>
        <Link className="h" href="/sagar/Myblog">
          Myblogs
        </Link>
        <Link className="h" href="/sagar/User">
          UserList
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
