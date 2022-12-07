import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { userList: data },
  };
};

const User = ({ userList }) => {
  return (
    <div className="card list">
      <h2 className="listh">UserList</h2>
      <br />
      {userList.map((list) => (
        <div className="userList" key={list.id}>
          <Link href={"/sagar/" + list.id}>
            <h3 className="listp">{list.name}</h3>
          </Link>

          <br />
        </div>
      ))}
    </div>
  );
};
export default User;
