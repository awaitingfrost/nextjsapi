export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = await data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await (await res).json();
  return {
    props: { userDetail: data },
  };
};

const Detail = ({ userDetail }) => {
  return (
    <div className="card eachList">
      <h2>{userDetail.name}</h2>
      <br />
      <p> {userDetail.username}</p>
      <p> {userDetail.email}</p>
      <p>{userDetail.address.city}</p>
      <p> {userDetail.phone}</p>
    </div>
  );
};
export default Detail;
