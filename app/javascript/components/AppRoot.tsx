import React from "react";
import logo from "../assets/mountains-transparency5.png";

export const SectionHeader = ({ children }: any) => {
  return (
    <div className="w-full flex justify-center my-4">
      <h1 className="text-xl font-bold bg-white border border-green-500 px-4 py-2 h-auto bg-auburn">
        {children}
      </h1>
    </div>
  );
};

export const LinkTitle = ({ children }: any) => {
  return (
    <div className="w-full flex justify-center p-2">
      <h2 className="text-xl font-bold bg-white px-2 py-1 h-auto">
        {children}
      </h2>
    </div>
  );
};

interface LinkBoxProps {
  background: string;
  title: string;
  onClick: Function;
}

interface UserSessionObject {
  name: string;
  picture: string;
}

interface Route {
  path: string;
  name: string;
}

interface RouteList {
  dashboard: Route;
}

interface AppRootProps {
  routes: RouteList;
  user: UserSessionObject;
}

export const LinkBox = ({ background, title, onClick }: LinkBoxProps) => {
  return (
    <div
      onClick={onClick}
      className="p-2 mt-2 w-full text-cream bg-khaki border"
    >
      <LinkTitle>{title}</LinkTitle>
    </div>
  );
};

export const Climbers = () => {
  return (
    <div className="flex h-full justify-center m-8">
      <div className="w-full h-full flex flex-col justify-start bg-green-300 drop-shadow-2xl border border-green-500 bg-ashgray p-1">
        <SectionHeader>Climbers</SectionHeader>
        <LinkBox
          background="dreamcatcher.jpg"
          title="Find Opportunities"
          onClick={() => {}}
        />
        <LinkBox
          background="dreamcatcher.jpg"
          title="Advertise Skills"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export const Organizers = () => {
  return (
    <div className="flex h-full justify-center m-8">
      <div className="w-full h-full flex flex-col justify-start bg-orange-300 drop-shadow-2xl border border-orange-500 bg-ashgray p-1">
        <SectionHeader>Organizers</SectionHeader>
        <LinkBox
          background="dreamcatcher.jpg"
          title="Create Opportunities"
          onClick={() => {}}
        />
        <LinkBox
          background="dreamcatcher.jpg"
          title="Manage Opportunities"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export const AppRoot = ({ routes, user }: AppRootProps) => {
  const csrf = document
    .querySelector("meta[name='csrf-token']")
    .getAttribute("content");

  console.log("logo located at:", logo);

  return (
    <>
      <div className="text-white h-16 w-full flex items-center sticky top-0 z-50 -mb-8 bg-night text-cream">
        <div id="header-left" className="justify-start flex w-full">
          <img className="h-12" src={logo} />
          <span className="px-4 py-2 bg-auburn text-xl flex flex-row items-center">
            <span>Approach</span>
          </span>
        </div>
        <div id="header-right" className="justify-end flex w-full h-full">
          {!!user && (
            <form
              className="button_to m-2 flex items-center justify-end"
              method="get"
              action="/auth/logout"
            >
              <button
                className="m-2 p-2 bg-auburn"
                data-turbo="false"
                type="submit"
              >
                Log Out
              </button>
              <input
                type="hidden"
                name="authenticity_token"
                value={csrf}
                autoComplete="off"
              ></input>
              <a
                data-turbo="false"
                className="h-full w-auto m-2 cursor-pointer"
                href={routes.dashboard.path}
              >
                <img className="h-12 w-auto" src={user.picture}></img>
              </a>
            </form>
          )}
          {!user && (
            <form className="button_to m-2" method="post" action="/auth/auth0">
              <button
                className="bg-auburn p-2 m-2"
                data-turbo="false"
                type="submit"
              >
                Login
              </button>
              <input
                type="hidden"
                name="authenticity_token"
                value={csrf}
                autoComplete="off"
              ></input>
            </form>
          )}
        </div>
      </div>
      <div className="flex justify-around min-h-screen w-full bg-auburn text-cream">
        <Climbers />
        <Organizers />
      </div>
    </>
  );
};

export default AppRoot;
