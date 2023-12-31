import Link from "next/link";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/AllService");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const AllService = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          {data.map((item, id) => {
            return (
              <div key={id} className="container px-4 mx-auto">
                <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                  <div className="text-center lg:text-left">
                    <span className="text-green-600 font-bold">
                      {item.title}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                      All Service
                    </h2>
                  </div>
                  <Link
                    className="hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                    href="/project"
                  >
                    View More Projects
                  </Link>
                </div>
                <div className="flex flex-wrap -mx-4 mb-4">
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                    <a href="#">
                      <img
                        className="h-80 w-full mx-auto object-cover rounded"
                        src={item.image1}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="relative h-80 mb-5 mx-auto rounded-lg">
                      <img
                        className=" w-full relative h-full rounded-lg object-cover"
                        src={item.image2}
                        alt=""
                      />
                      <div className="absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                      <div className="absolute inset-0 p-6 flex flex-col items-start">
                        <span className="text-gray-400">2021</span>
                        <p className="mb-auto text-xl lg:text-2xl text-white font-bold">
                          {item.des}
                        </p>
                        <a
                          className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                          href="#"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                    <a href="#">
                      <img
                        className="h-80 w-full mx-auto object-cover rounded"
                        src={item.image3}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                    <a href="#">
                      <img
                        className="h-80 w-full mx-auto object-cover rounded"
                        src={item.image4}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                    href="#"
                  >
                    View More Projects
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AllService;
