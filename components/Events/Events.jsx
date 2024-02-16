import React from 'react'

const Events = () => {
  return (
    <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 rounded-md dark:bg-gray-800">
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
  )
}

export default Events
