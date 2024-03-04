import "@styles/globals.css";


// To change metadata of the application
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};
// RootLayout will render around everything
const RootLayout = ({children}) => {

  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                {children}
            </main>
        </body>

    </html>
  )
};

export default RootLayout;
