import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <div className="absolute mt-4 p-4">
        <ChevronLeft
          className="hover:bg-gray-300 hover:rounded-lg hover:cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="h-screen flex justify-center items-center">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 bg-red-500">
            <TabsTrigger value="walletid" className="bg-red-400 w-[25.5vw]">
              User Details
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="bg-red-400">
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when youre done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter Your Name" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="walletad">Chain Id*</Label>
                  <Input id="walletid" placeholder="Enter Chain Id" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="walletad">Wallet Address*</Label>
                  <Input
                    id="walletid"
                    placeholder="Enter your wallet address"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-white"
                  onClick={() => navigate("/services")}
                >
                  Proceed &rarr;
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
