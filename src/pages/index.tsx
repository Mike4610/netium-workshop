import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/intro/1");
  // }, [router, isLoggedIn]);

  return <h1>Isto é uma página protegida!</h1>;
}
