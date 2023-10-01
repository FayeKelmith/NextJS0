import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        {" "}
        Copy & Learn
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Copied Code</span>
      </h1>
      <p className="desc text-center">
        Keltopia is a copied website from JavaScript Mastery to learn how to
        build fullstack sites with nextJS.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
