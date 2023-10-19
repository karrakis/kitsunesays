import React from "react";

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

interface AppRootProps {
  routes: string;
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

export const AppRoot = ({ routes }: AppRootProps) => {
  const csrf = document
    .querySelector("meta[name='csrf-token']")
    .getAttribute("content");
  return (
    <>
      <div className="text-white h-8 w-full flex items-center sticky top-0 z-50 -mb-8 bg-night text-cream">
        <div id="header-left" className="justify-start flex w-full">
          <span>Kitsunesays</span>
        </div>
        <div id="header-right" className="justify-end flex w-full">
          <span className="mr-4">Profile</span>
          <form class="button_to" method="get" action="/auth/logout">
            <button data-turbo="false" type="submit">
              Log Out
            </button>
            <input
              type="hidden"
              name="authenticity_token"
              value={csrf}
              autocomplete="off"
            ></input>
          </form>
          <form class="button_to" method="post" action="/auth/auth0">
            <button data-turbo="false" type="submit">
              Login
            </button>
            <input
              type="hidden"
              name="authenticity_token"
              value={csrf}
              autocomplete="off"
            ></input>
          </form>
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
