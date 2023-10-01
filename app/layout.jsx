import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

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

      <main className="app">
        <Nav />
        {children}
      </main>
    </html>
  );
};

export default RootLayout;
