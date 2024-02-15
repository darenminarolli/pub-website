import React from 'react'

const Menu = () => {
    return (
        <section id='menu' className="w-full py-12 md:py-24 lg:py-32">
            <div
                className="container grid items-center md:items-start gap-4 px-4 text-center md:text-start lg:grid-cols-1 lg:gap-10">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Menu for Drinks</h2>
                    <p
                        className="mx-auto max-w-[700px] text-gray-500  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Check out our selection of drinks to complement your visit.
                    </p>
                </div>
                <div className="container py-6 space-y-12 md:space-y-16 lg:space-y-20">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cocktails</h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Carefully crafted cocktails made with the finest ingredients.
                        </p>
                    </div>
                    <div className="space-y-12">
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Old Fashioned</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Bourbon, sugar, bitters, orange twist</p>
                            <p className="text-2xl font-bold">$12</p>
                        </div>
                        <hr className="h-px border-0 border-t border-slate-300" />
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Negroni</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Gin, Campari, sweet vermouth, orange twist</p>
                            <p className="text-2xl font-bold">$14</p>
                        </div>
                        <hr className="h-px border-0 border-t border-slate-300" />
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Margarita</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Tequila, triple sec, lime juice, salted rim</p>
                            <p className="text-2xl font-bold">$10</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beers</h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            A selection of beers from local breweries and around the world.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">IPA</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">India Pale Ale</p>
                            <p className="text-2xl font-bold">$8</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Stout</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Rich and creamy</p>
                            <p className="text-2xl font-bold">$9</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Pilsner</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Crisp and refreshing</p>
                            <p className="text-2xl font-bold">$7</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Wines</h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Elegant wines to enjoy by the glass or bottle.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Chardonnay</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Buttery and smooth</p>
                            <p className="text-2xl font-bold">$12</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Merlot</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Fruity and mellow</p>
                            <p className="text-2xl font-bold">$10</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
