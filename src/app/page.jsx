import Brand from "@/components/Brand";
import FutureProject from "@/components/FeaturedProject";
import HeroList from "@/components/HeroList";
import StatList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";

const Page = () => {
  return (
    <>
      <HeroList />
      <Brand />
      <WorkList />
      <StatList />
      <FutureProject />
      <Subscribe />
    </>
  );
};

export default Page;
