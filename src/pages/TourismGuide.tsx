import { Card } from "../components/Card";

import { CardProps } from "../components/Card";

export function TourismGuide() {
    const data: CardProps[] = [
        {
            name: "carlos",
            description: "roberto",
            profession: "aloo",
            githubUrl: "https://github.com/carlosrobert0",
            twitterUrl: "https://twitter.com/dieegosf",
            instagramUrl: "#",
        },
        {
            name: "carlos2",
            description: "roberto",
            profession: "aloo",
            githubUrl: "https://github.com/carlosrobert0",
            twitterUrl: "https://twitter.com/dieegosf",
            instagramUrl: "#",
        },
        {
            name: "carlos2s",
            description: "roberto",
            profession: "aloo",
            githubUrl: "https://github.com/carlosrobert0",
            twitterUrl: "https://twitter.com/dieegosf",
            instagramUrl: "#",
        }
    ]

    return (
        <div className="mb-16">
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-gray-500 text-lg text-center font-normal pb-4">GUIAS TURÍSTICOS</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                </div>
            </div>
            <div className="w-full bg-gray-100 px-10 pt-10">
                <div className="container mx-auto">
                    <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        { data.map((item) => (
                            <Card 
                                key={item.name}
                                name={item.name}
                                description={item.description}
                                profession={item.profession}
                                githubUrl={item.githubUrl}
                                instagramUrl={item.instagramUrl}
                                twitterUrl={item.twitterUrl}
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}