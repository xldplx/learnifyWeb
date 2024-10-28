export default function Home() {
  return (
    <>
        <section className="h-screen border flex flex-col justify-center items-center px-[5rem] py-[10rem]">
        <div>
            <h1 className="text-[4rem] font-[900] tracking-widest text-primary drop-shadow-xl">Learn Anytime, Anywhere.</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-[1.5rem] font-[600] text-accent mt-[2rem]">Get access to thousands of courses and lessons from the best instructors in the world.</p>
            <div className="flex gap-[1rem]">
                <button className="bg-primary text-background font-[600] px-[1rem] py-[0.5rem] rounded-lg hover:bg-primary hover:text-background transition-all duration-300 mt-[2rem] hover:scale-105">Get Started</button>
                <button className="bg-accent text-background font-[600] px-[1rem] py-[0.5rem] rounded-lg hover:bg-accent hover:text-background transition-all duration-300 mt-[2rem] hover:scale-105">Browse Courses</button>
            </div>
        </div>
        </section>

        <section className="h-screen border flex justify-center items-center px-[5rem] py-[10rem]">
            WUMPUS, WUMPUS, WUMPUS
        </section>
    </>

  )
}
