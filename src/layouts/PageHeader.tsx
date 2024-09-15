import logo from "../asserts/youtube.svg";
import {
  ArrowLeftIcon,
  Bell,
  Menu,
  Mic,
  MonitorUp,
  Search,
  User,
} from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 item-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button theme="ghostTheme">
          <Menu />
        </Button>
        <a href="/" className="flex items-center gap-1">
          <img src={logo} className="h-6" />
          <p className="text-sm font-semibold">YouTube</p>
        </a>
      </div>
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "md:flex hidden"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            type="button"
            size="icon"
            theme="ghostTheme"
            className="flex-shrink-0"
            onClick={() => setShowFullWidthSearch(false)}
          >
            <ArrowLeftIcon />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-innner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button
          type="button"
          size="icon"
          theme="default"
          className="flex-shrink-0"
        >
          <Mic />
        </Button>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          theme="ghostTheme"
          size="icon"
          className="md:hidden"
          onClick={() => setShowFullWidthSearch(true)}
        >
          <Search />
        </Button>
        <Button theme="ghostTheme" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button theme="ghostTheme" size="icon">
          <MonitorUp />
        </Button>
        <Button theme="ghostTheme" size="icon">
          <Bell />
        </Button>
        <Button theme="ghostTheme" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
