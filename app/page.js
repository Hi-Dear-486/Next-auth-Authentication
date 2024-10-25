import { Header } from "@/components/Headers";

const Home = () => {
  return (
    <div>
      <Header />
      <div class="container px-5 py-32 mx-auto">
        <div class="text-center ">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            "Streamlining User Authentication in Next.js with NextAuth.js or Google Cloud"
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Implementing authentication in a Next.js application can be
            effectively achieved using NextAuth.js, which provides a simple way
            to manage user authentication. You can also integrate Google Cloud
            services for managing your application, but here, I’ll focus on
            setting up authentication using NextAuth.js with a Google provider.
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
