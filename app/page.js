// This is the home page of the application

const Home = () => {
  return (
    //  using sematic element for better performance
    <section className=" w-full flex-center  flex-col">
      {/* if we want to define normal css class name like head_text with tailwind css class we can use like below */}
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-Source AI prompting tool for modern world to
        discover , create and share creative prompts
      </p>
    </section>
  );
};

export default Home;
