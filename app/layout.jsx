import "@sytles/global.css";
import { Children } from "react";

export const metadata = {
  title: "Keltopia",
  description: "Copied & Learned from JavasScript Mastery",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <div className="main">
        <div className="gradient"></div>
      </div>
      <main className="app">{Children}</main>
    </html>
  );
};

export default RootLayout;
