import LeftPanel from "../components/LeftPanel";
import MiddlePanel from "../components/MiddlePanel";

function Portfolio() {

  return (
    <div className="bg-gray-50 font-sans flex justify-between gap-2">
      <div className="w-[25%]">
        <LeftPanel />
      </div>
      <div className="w-[70%]">
        <MiddlePanel />
      </div>
      <div className="">
        dsf
        {/* <MiddlePanel /> */}
      </div>
    </div>
  );
}

export default Portfolio;
