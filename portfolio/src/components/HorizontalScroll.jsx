import React from "react";



const HorizontalScroll = () => {
    return (
        <section className="relative h-[300vh] bg-MainDark">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-purple-500">
                <div className="flex gap-4">
                    {cards.map((card) => {
                        return <ProjectCard key={card.id} title={card.title} description={card.description} />
                    })}
                </div>
            </div>
        </section>
    )
};

const ProjectCard = ({
    card
}) => {
    return (
        <div className='w-96 h-96 bg-MainDark'>

        </div>
    )
}

const cards = [
    {
        title: 'Task Manager',
        description: 'A simple task manager app',
        id: '1',
    }, 
    {
        title: 'Weather Tracker',
        description: 'A simple weather tracking app',
        id: '2',
    },
    {
        title: 'Restaurant Webpage',
        description: 'Webapp for a renown restaurant with integrated booking system',
        id: '3',
    },
]

export default HorizontalScroll;