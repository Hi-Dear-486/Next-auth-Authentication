import { Header } from "@/components/Headers";

const Home = () => {
  return (
    <div>
      <Header />
      <div class="container px-5 py-32 mx-auto">
        <div class="text-center ">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            "Streamlining User Authentication in Next.js with NextAuth.js"
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            NextAuth.js is a flexible authentication library for Next.js
            applications. It simplifies user authentication by supporting
            various providers (like Google, GitHub, and email) and offers
            built-in session management. With minimal configuration, developers
            can secure routes and handle user sessions seamlessly. Its
            adaptability makes it suitable for both small projects and
            large-scale applications.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
