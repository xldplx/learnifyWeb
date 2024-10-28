import { ArrowLineDown } from "@phosphor-icons/react";

export default function Navbar() {
    return (
        <header className="sticky top-0 bg-background z-10">
            <div className="flex justify-between items-center px-[5rem] py-[1rem] absolute top-0 w-full">
                <h1 className="text-[2rem] font-[900] tracking-widest text-accent drop-shadow-xl">Learnify</h1>
                <nav className="bg-background rounded-lg px-[2rem] py-[1rem] shadow-md border-2 border-backgroundGray">
                    <ul className="flex gap-[2rem]">
                        <li className="">
                            <a href="#" className="flex items-center gap-[0.5rem]">
                                <h1>Browse</h1>
                                <ArrowLineDown size={16} />
                            </a>
                        </li>
                        <li><a href="#">Roadmaps</a></li>
                        <li><a href="#">Private Lessons</a></li>
                    </ul>
                </nav>
                <div className="flex gap-[0.5rem]">
                    <button className="border-primary border text-primary font-[600] px-[1rem] py-[0.5rem] rounded-lg hover:bg-primary hover:text-background transition-all duration-300">Log in</button>
                    <button className="bg-accent text-background font-[600] px-[1rem] py-[0.5rem] rounded-lg">Sign In</button>
                </div>
            </div>
        </header>

    )
}
