import { Home, User, Upload } from "lucide-react";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx";
import UploadPage from "./pages/Upload.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Profile />,
  },
  {
    title: "Upload",
    to: "/upload",
    icon: <Upload className="h-4 w-4" />,
    page: <UploadPage />,
  },
];