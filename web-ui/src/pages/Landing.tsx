import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <main className="relative w-full h-screen">
      <img
        src="svghome.svg"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
        alt="AuctionMania"
      />
      <div className="relative flex justify-center items-center h-full flex-col">
        <span>
          <h1 className="font-lobster text-[5rem] font-black">Auction Mania</h1>
        </span>
        <p className="w-1/2 space-y-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit omnis
          quidem quam, delectus minima obcaecati accusantium quis vero possimus
          illum magnam! Magnam doloremque debitis ipsa et perspiciatis sapiente
          voluptatem tenetur.
        </p>
        <div className="space-x-4">
          <Button className="z-10">About</Button>
          <Button
            className="z-10 bg-red-500"
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
