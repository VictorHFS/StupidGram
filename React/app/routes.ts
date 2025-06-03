import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    //route("not-found", "routes/$.tsx"),
    route("/forgot-password", "routes/forgot-password.tsx")
] satisfies RouteConfig;
