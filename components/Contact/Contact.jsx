import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="w-full bg-gray-50 ">
                <div className="container px-4 flex flex-col gap-4 md:px-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h3>
                            <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                Have questions? Reach out to us and we'll get back to you as soon as possible.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                                    <span className="font-semibold"> +1 123 456 7890 </span>
                                    or email us at
                                    <span className="font-semibold">info@pub.com</span>
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Pub Name</span>
                                    <br />
                                    Living Room Antik
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
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Rruga Vaso Pasha, Tiranë</p>
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
