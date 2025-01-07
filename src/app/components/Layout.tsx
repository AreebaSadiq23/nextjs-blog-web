import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-zinc-800">
      <Navbar />
      <main className="flex-grow py-12">{children}</main>
      <Footer />
    </div>
  );
}
