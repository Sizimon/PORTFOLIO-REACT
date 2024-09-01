export const SmoothScroll = () => {
    return (
    <div className="bg-MainDark"> 
        <Nav />
        <Hero />
        <div className="h-screen" />
    </div>
    );
};

const Nav = () => {
    return (
        <nav className="fixed left-0 right-0 top-0 z-50
        flex items-center justify-between px-6 py-3 text-MainLight">
            <h1 className="font-Anton 3xl mix-blend-difference">Szymon Samus Dev.</h1>
            <button
            onClick={() => {
                document.getElementById("hero")?.
                 scrollIntoView({
                    behavior: 'smooth',
                 });
            }}
            className="flex items-center gap-1 text-xs text-MainLight"
            >
                Proceed. 
            </button>
        </nav>
    );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
    return (
        <div 
        className="relative w-full bg-MainLight"
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)`}}>

        </div>
    )
};

const CenterImage = () => {
    return (
        <div 
        className="sticky top-0 h-screen w-full"
        style={{
            backgroundImage: "url()"
        }}
        />
    )
}