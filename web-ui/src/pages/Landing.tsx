import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  // const navigate = useNavigate();
  return (
    <main className="relative w-full h-screen">
      <img
        src="svghome.svg"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        alt="AuctionMania"
      />
      <div className="relative flex justify-center items-center h-full flex-col">
        <span className="">
          <h1 className="font-lobster text-[5rem] font-black">Auction Mania</h1>
        </span>
        <div className="space-x-4">
          <Button className="z-10">About</Button>
          <Button
            className="z-10 bg-red-500"
            // onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
