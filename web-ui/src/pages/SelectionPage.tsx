import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { TicketCheck, UsersRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SelectionPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center h-screen space-x-5">
        <div className="w-[20vw]">
          <Card className="bg-red-400">
            <CardContent>
              <div className="min-w-full">
                <div
                  className="w-full h-[30vh] flex justify-center items-center flex-col hover:cursor-pointer"
                  onClick={() => navigate("/auction")}
                >
                  <UsersRound className="w-full h-full" />
                  <Label>Auction</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-[20vw]">
          <Card className="bg-red-400">
            <CardContent>
              <div className="min-w-full">
                <div
                  className="w-full h-[30vh] flex justify-center items-center flex-col hover:cursor-pointer"
                  onClick={() => navigate("/mint")}
                >
                  <TicketCheck className="w-full h-full" />
                  <Label>Mint NFT</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
