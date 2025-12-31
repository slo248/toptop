import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import HeaderOnlyLayout from "../layouts/HeaderOnly";
import FollowingPage from "../pages/FollowingPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import UploadPage from "../pages/UploadPage";

type RouteType = {
  path: string;
  component: React.ComponentType;
  layout?: React.ComponentType | null;
};

export const publicRoutes: RouteType[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/following",
    component: FollowingPage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/login",
    component: LoginPage,
    layout: HeaderOnlyLayout,
  },
];

export const privateRoutes: RouteType[] = [
  {
    path: "/upload",
    component: UploadPage,
    layout: HeaderOnlyLayout,
  },
];

export function considerLayout(layout?: React.ComponentType | null) {
  if (layout === undefined) {
    return DefaultLayout;
  } else if (layout === null) {
    return React.Fragment;
  } else {
    return layout;
  }
}
