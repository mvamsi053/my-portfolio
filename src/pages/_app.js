import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className} relative `}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
