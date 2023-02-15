import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <div className="-mt-2.5 flex justify-center gap-2 ">
      <div className=" flex flex-col justify-center items-center gap-2 p-5 rounded-lg mt-5 w-4/6  bg-gradient-to-r from-green-200 to-green-500">
        <h2 className="text-2xl font-bold">
          Nextjs project with Typescript and Tailwind CSS
        </h2>
        <p>
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          Next.js TypeScript and Tailwind Boilerplate no BS just Boiler .{" "}
        </p>
      </div>
    </div>
  );
};

export default Index;
