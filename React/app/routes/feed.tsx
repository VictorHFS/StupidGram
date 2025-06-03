
import Feed from "~/feed/feed";
import Sidebar from "~/side-bar/side-bar";

export function meta() {
  return [{ title: "StupidGram - Feed" }];
}

export default function ForgotPasswordRoute() {
  return (
    <section className="feed-section">
      <Sidebar/>
      <Feed />
    </section>
  );
}