import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const MintPage = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState<Number>();
  const { toast } = useToast();
  const navigate = useNavigate();

  return (
    <main className="w-full h-screen">
      <div className="flex left-[90vw] absolute m-3">
        <Button onClick={() => navigate("/auction")}>Go to Auction</Button>
      </div>
      <div className="flex justify-center items-center h-screen space-x-3">
        <div>
          <Input type="file" required className="h-[40vh]" />
        </div>
        <div className="bg-red-400 w-[30vw] h-[40vh] p-3 border-2 rounded-md border-black">
          <div className="flex justify-center items-center flex-col space-y-6">
            <Label>Enter NFT Name</Label>
            <Input
              className="w-[20vw]"
              id="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Label>Set Price</Label>
            <Input
              className="w-[20vw]"
              id="Price"
              type="number"
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
            <div>
              <Button
                className="bg-red-400"
                onClick={() => {
                  toast({
                    title: "Hurray!!",
                    description: "NFT Minted succefully",
                  });
                }}
              >
                Mint
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MintPage;
