import { Link } from "@remix-run/react";
export default function Index() {
  return (
    <div>
      <h1>Notes</h1>
      <span style={{ marginRight: "5px" }}>
        <Link to="/notes/view">View</Link>
      </span>
      <span>
        <Link to="/notes/new">New</Link>
      </span>
    </div>
  );
}
