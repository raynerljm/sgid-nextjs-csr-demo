import type { NextPage } from "next";

const flavours = ["Vanilla", "Chocolate", "Strawberry"] as const;
type IceCream = (typeof flavours)[number];

const Home: NextPage = () => {
  return <div>Home page</div>;
};

export default Home;
