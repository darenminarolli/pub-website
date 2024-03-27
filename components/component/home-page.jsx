
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 pt-10">
        <section className="w-full">
          <div
            className="container grid items-center gap-4 px-4 text-center lg:grid-cols-2 lg:gap-10 xl:px-6">
            <img
              alt="Image"
              className="mx-auto h-[450px] overflow-hidden  shadow-xl rounded-xl object-fit object-center lg:order-last"
              src="https://lh3.googleusercontent.com/p/AF1QipOXKDTbqoQgj0i-vdfpF9sIBfVjx3O6nwkH5YwQ=s680-w680-h510"
              width="400" />
            <div className="flex flex-col justify-center space-y-2">
              <img src={Capture} alt="" />
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4 md:mb-6 font-serif">
                  Welcome to <span className="text-red-800">Living Room Antik!</span>
                </h1>
                <p
                  className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  A traditional Albanian pub with a warm and welcoming atmosphere. Serving classic ales, fine wines, and
                  delicious pub grub.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div
            className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Antik Experience</h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience the authentic charm of a traditional Albanian pub. Whether you're looking for a pint of real
                ale, a hearty meal, or a friendly chat, We got you covered.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 place-items-center ">
              <img className="hover-trigger rounded-xl shadow-xl h-[350px]" src="https://lh3.googleusercontent.com/p/AF1QipOs2YPlrKD-mt0QMxtWjt3E6FLHENkxPmI4Kw4M=s680-w680-h510" alt="img1" />
              <img className="hover-trigger rounded-xl shadow-xl h-[350px]" src="https://lh3.googleusercontent.com/p/AF1QipOS0PDyvA9Q622Ywz2hqX2FqlAomdp0b4YWgkLO=s680-w680-h510" alt="" />
              <img className="hover-trigger rounded-xl shadow-xl h-[350px]" src="https://lh3.googleusercontent.com/p/AF1QipOUtsfB2u2zECLy2ZMIfPm6IOtdbJfRr-gc3aRH=s680-w680-h510" alt="" />
            </div>
          </div>
        </section>
        <Events />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}





function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}
