import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserIcon as UserSecond } from "@heroicons/react/solid";

import SidebarRow from "./SidebarRow";
import { auth } from "../firebase/firebase";
import DarkSwitch from "./DarkSwitch";

type SideBarProps = {
  isShow: boolean;
  isHome: boolean;
};

const SideBar: React.FC<SideBarProps> = ({ isShow, isHome }) => {
  const [user] = useAuthState(auth);
  return (
    <div className="col-span-2 flex flex-col item-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://cardinal-images.s3.us-west-1.amazonaws.com/cardinal-logo-2.jpg"
        alt="cardinal-logo"
      />
      <SidebarRow Icon={HomeIcon} title="Home" isShow={isHome} />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      {isShow ? (
        <SidebarRow
          Icon={user ? UserIcon : UserSecond}
          title="Profile"
          isShow={isShow}
        />
      ) : (
        <SidebarRow
          Icon={user ? UserIcon : UserSecond}
          title={user ? "Sign Out" : "Sign In"}
          isShow={false}
        />
      )}
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
      <DarkSwitch />
    </div>
  );
};
export default SideBar;
