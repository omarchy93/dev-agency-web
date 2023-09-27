import Link from "next/link";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/TeamList");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const TeamList = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-12 text-center">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Check our awesome team members
              </h2>
            </div>
            <div className="flex flex-wrap">
              {data.map((items, id) => {
                return (
                  <div key={id} className="mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                    <div className="pb-8 bg-white rounded shadow text-center overflow-hidden">
                      <img
                        className="mb-8 w-full h-64 object-cover"
                        src={items.image}
                        alt=""
                      />
                      <div className="p-2">
                        <Link
                          className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                          href={items.facebook}
                        >
                          <img
                            className="mx-auto"
                            src="atis-assets/social/facebook.svg"
                          />
                        </Link>
                        <Link
                          className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                          href={items.twitter}
                        >
                          <img
                            className="mx-auto"
                            src="atis-assets/social/twitter.svg"
                          />
                        </Link>
                        <Link
                          className="inline-block w-10 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                          href={items.instagram}
                        >
                          <img
                            className="mx-auto"
                            src="atis-assets/social/instagram.svg"
                          />
                        </Link>
                      </div>
                      <h4 className="mb-2 text-2xl font-bold font-heading">
                        {items.name}
                      </h4>
                      <p className="text-gray-500">{items.bio}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamList;
