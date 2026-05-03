import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

function About() {
  // url方法
  const { data } = useParams();

  // state方法
  const location = useLocation();
  const data2 = location.state?.data;
  console.log("data2" + data2);

  // query方法
  const [searchParams] = useSearchParams();
  const data3 = searchParams.get('data');
  console.log("data3" + data3)

  console.log("data:" + data);
  return (
    <section id="center">
      <h1>About</h1>
      <p>This is the about page.</p>
      <Link to="/">Back to Home</Link>
    </section>
  );
}

export default About;
