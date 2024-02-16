
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
     <Header/>
      <main className="flex-1">
        <section className="w-full">
          <div
            className="container grid items-center gap-4 px-4 text-center lg:grid-cols-2 lg:gap-10 xl:px-6">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
              height="400"
              src="https://media.timeout.com/images/105989026/image.jpg"
              width="600" />
            <div className="flex flex-col justify-center space-y-2">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Welcome to Antik
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
            <div
              className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="550"
                  src="https://hips.hearstapps.com/hmg-prod/images/assortment-of-alcoholic-cocktails-on-a-bar-counter-royalty-free-image-1685722611.jpg"
                  width="310" />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="550 "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbP4TYdvI898Sajb0rSS5ELZ43RJ9t7UbCw&usqp=CAU"
                  width="310" />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="550"
                  src="https://rapidbarapp.com/wp-content/uploads/2023/10/Comment-creer-un-cocktail-signature-pour-mon-bar-.png"
                  width="310" />
              </div>
            </div>
          </div>
        </section>
        <Events/>
        <Menu/>
        <Contact/>
      </main>
     <Footer/>
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
