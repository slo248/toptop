import "./index.scss";

export function GlobalStyles(props: { children: React.ReactNode }) {
  return <div className="global-styles">{props.children}</div>;
}
