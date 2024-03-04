import "@styles/globals.css";
import Nav from "@components/Nav";

// To change metadata of the application
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
// RootLayout will render around everything
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          {/* this Nav Component is re-using in all of the component so that we are using in layout component. */}
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
