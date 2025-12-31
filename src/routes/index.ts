import { HomePage } from "../pages/FollowingPage";
import { FollowingPage } from "../pages/HomePage";
import { ProfilePage } from "../pages/ProfilePage";

export const publicRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/following",
    Component: FollowingPage,
  },
  {
    path: "/profile",
    Component: ProfilePage,
  },
];

export const privateRoutes = [];
