import React from 'react'

const Menu = () => {
    return (
        <section id='menu' className="w-full py-12 md:py-24 lg:py-32">
            <div
                className="container grid items-center md:items-start gap-4 px-4 text-center md:text-start lg:grid-cols-1 lg:gap-10">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Menu for Drinks</h2>
                    <p
                        className="mx-auto max-w-[700px] text-gray-500  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                        Check out our selection of drinks to complement your visit.
                    </p>
                </div>
                <div className="container py-6 space-y-12 md:space-y-16 lg:space-y-20">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cocktails</h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                            Carefully crafted cocktails made with the finest ingredients.
                        </p>
                    </div>
                    <div className="space-y-12">
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Long Drinks</h2>
                            <p className="text-sm text-gray-500 ">Rum - Cola, Gin - tonic, Whiskey - Cola, Vodka - Orange etc...</p>
                            <p className="text-2xl font-bold">500-600 LEK</p>
                        </div>
                        <hr className="h-px border-0 border-t border-slate-300" />
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Cocktails</h2>
                            <p className="text-sm text-gray-500 ">Negroni, Aperol Spritz/Sour, Old Fashioned etc...</p>
                            <p className="text-2xl font-bold">700-800 LEK</p>
                        </div>
                        <hr className="h-px border-0 border-t border-slate-300" />
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Shots</h2>
                            <p className="text-sm text-gray-500 ">Tequila, Vodka, Jagger Boom...</p>
                            <p className="text-2xl font-bold">250-400 LEK</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beers</h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                            A selection of beers from local breweries and around the world.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Draft</h2>
                            <p className="text-sm text-gray-500 ">Flensburger</p>
                            <p className="text-2xl font-bold">400-450-500 LEK</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Korca</h2>
                            <p className="text-sm text-gray-500 ">Traditional Albanian Beer</p>
                            <p className="text-2xl font-bold">350 LEK</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Heineken</h2>
                            <p className="text-sm text-gray-500 ">Crisp and refreshing</p>
                            <p className="text-2xl font-bold">450 LEK</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Corona</h2>
                            <p className="text-sm text-gray-500 ">Crisp and refreshing</p>
                            <p className="text-2xl font-bold">500 LEK</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Wines</h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                            Elegant wines to enjoy by the glass or bottle.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">Red/White</h2>
                            <p className="text-sm text-gray-500 ">Buttery and smooth</p>
                            <p className="text-2xl font-bold">400 LEK</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-semibold">San Grio</h2>
                            <p className="text-sm text-gray-500 ">Light-bodied white wine</p>
                            <p className="text-2xl font-bold">450 LEK</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu
