import Header from "../components/Header";

function HeaderOnlyLayout(props: { children?: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
    </div>
  );
}

export default HeaderOnlyLayout;
