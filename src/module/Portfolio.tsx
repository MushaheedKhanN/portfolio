import Header from "../components/Header";
import LeftPanel from "../components/LeftPanel";
import MiddlePanel from "../components/MiddlePanel";
import { cn } from "../helpers/className";

function Portfolio() {
  return (
    <div>
      <Header />
      <div className={cn("bg-gray-50 font-sans  md:flex lg:flex justify-between gap-2 grid grid-cols-1 mt relative top-16",)}>
        <div className="lg:w-[30%]" >
          <LeftPanel />
        </div>
        <div className="lg:w-[70%]">
          <MiddlePanel />
        </div>
        {/* <div className=""> */}
        {/* dsf */}
        {/* <MiddlePanel /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Portfolio;
