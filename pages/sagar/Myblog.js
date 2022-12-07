export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: { blogs: data },
  };
};

const Myblog = ({ blogs }) => {
  return (
    <div className="card blog">
      <h2 className="">My Blogs</h2>
      <br />
      {blogs.map((blog) => (
        <div className="semicard" key={blog.id}>
          <a>
            <h3>{blog.title}</h3>
            <br />
            <p>{blog.body}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Myblog;
