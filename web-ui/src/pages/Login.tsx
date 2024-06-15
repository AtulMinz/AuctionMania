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

const Login = () => {
  return (
    <div className="w-full h-screen">
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
                  <Input id="name" defaultValue="Your Name" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="walletad">Wallet Address</Label>
                  <Input id="walletid" defaultValue="Wallet Address" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white">Proceed &rarr;</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
