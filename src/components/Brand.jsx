async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/BrandList");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Brand = async () => {
  const data = await getData();
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            {data.map((items, id) => {
              return (
                <div key={id} className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
                  <div className="py-16 bg-gray-50 rounded-full">
                    <a href="#">
                      <img className="mx-auto h-8" src={items.image} alt="" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
