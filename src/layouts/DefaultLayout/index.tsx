import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function DefaultLayout(props: { children?: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
