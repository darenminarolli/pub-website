
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";

export function HomePage() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 py-4 lg:py-8 flex items-center">
        <Link className="flex items-center gap-2" href="#">
          <span className="font-semibold">Living Room Antik</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#events">
            Events
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#menu">
            Menu
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact">
            Contact
          </Link>
        </nav>
        <Button className="lg:hidden">
          <MenuIcon className="w-4 h-4 mr-1.5" />
          Menu
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full">
          <div
            className="container grid items-center gap-4 px-4 text-center lg:grid-cols-2 lg:gap-10 xl:px-6">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
              height="400"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GHGtJAVYSmiAeJURqgLn0gUcgB81Qh53rB6_yrl9vpnyJb3lOYrcc_Q7I4xyFhXw3n8&usqp=CAU"
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
                  src="/placeholder.svg"
                  width="310" />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="550 "
                  src="/placeholder.svg"
                  width="310" />
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                  alt="Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="550"
                  src="/placeholder.svg"
                  width="310" />
              </div>
            </div>
          </div>
        </section>
        <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Events</h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join us for our upcoming events. From live music nights to quiz evenings, there's always something
                happening at Living Room Antik.
              </p>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Happy Hour</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Join us for a night of great music, cold drinks, and good company. Enjoy our discounts
                  from Monday to Saturday, from 7:00-9:00 PM
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Sushi Night</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Embark on a sushi night and savor the exquisite fusion of flavors, where every bite is a journey into culinary perfection.
                  Elevate your dining experience, and let the artistry of sushi captivate your senses. Every Thursday from 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
        <Menu/>
        <Contact/>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 <a href="https://daren.vercel.app/" className="underline">Daren</a>. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}


function IceCreamIcon(props) {
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
      <path d="m7 11 4.08 10.35a1 1 0 1.84 0L17" />
      <path d="M17 7A5 5 0 7" />
      <path d="M17 7a2 2 0 1 4H7a2 0-4" />
    </svg>)
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
