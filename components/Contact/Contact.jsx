import React from 'react'

const Contact = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            {/* <div class="container grid gap-6 px-4 md:px-6">
                <div class="flex flex-col space-y-2">
                    <div class="space-y-1">
                        <h2 class="text-3xl font-bold">Contact Us</h2>
                        <p class="text-gray-500 dark:text-gray-400">
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>
                    <div class="grid gap-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="name"
                                >
                                    Name
                                </label>
                                <input
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div class="space-y-2">
                                <label
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    for="email"
                                >
                                    Email
                                </label>
                                <input
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="message"
                            >
                                Message
                            </label>
                            <textarea
                                class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px]"
                                id="message"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            Submit
                        </button>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Connect with us on social media</p>
                    <div class="flex items-center space-x-4">
                        <a class="rounded-full p-2 bg-gray-100 dark:bg-gray-800" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="w-6 h-6"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                            <span class="sr-only">Facebook</span>
                        </a>
                        <a class="rounded-full p-2 bg-gray-100 dark:bg-gray-800" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="w-6 h-6"
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                            <span class="sr-only">Twitter</span>
                        </a>
                        <a class="rounded-full p-2 bg-gray-100 dark:bg-gray-800" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="w-6 h-6"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                            <span class="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </div> */}
            <div className="w-full py-12 bg-gray-50 md:py-24">
                <div className="container px-4 flex flex-col gap-4 md:px-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h3>
                            <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                Have questions? Reach out to us and we'll get back to you as soon as possible.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.373409347215!2d19.81338217688177!3d41.32249290001665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13503120b457b009%3A0x879f9497953821ac!2sLiving%20Room%20Antik!5e0!3m2!1sen!2s!4v1708011007009!5m2!1sen!2s"
                                width="500"
                                height="350"
                                className='border-solid rounded-md  w-full  '
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                            <div className="flex flex-col justify-center space-y-4">
                                <p className="text-gray-500 dark:text-gray-400">
                                    For reservations or inquiries, call us at
                                    <span className="font-semibold"> +1 123 456 7890</span>
                                    or email us at
                                    <span className="font-semibold">info@pub.com</span>
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Pub Name</span>
                                    <br />
                                    123 Pub Lane, Pubville, PV1 2UB
                                </p>
                                <div className="flex gap-4">
                                    <div className="w-4 h-4 rounded-full overflow-hidden">
                                        <img
                                            alt="Map marker"
                                            className="border"
                                            height="16"
                                            src="/placeholder.svg"
                                            style={{
                                                aspectRatio: "16/16",
                                                objectFit: "cover",
                                            }}
                                            width="16"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium">Visit us</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">123 Pub Lane, Pubville, PV1 2UB</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-4 h-4 rounded-full overflow-hidden">
                                        <img
                                            alt="Map marker"
                                            className="border"
                                            height="16"
                                            src="/placeholder.svg"
                                            style={{
                                                aspectRatio: "16/16",
                                                objectFit: "cover",
                                            }}
                                            width="16"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium">Follow us</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            <a href="#">@living_room_antik</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
