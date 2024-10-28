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

        <section className="h-screen border flex flex-col space-y-[2rem] justify-center items-center px-[5rem] py-[10rem]">
            <h1 className="text-[3rem] text-accent font-[900]">Our Featured Courses</h1>
            <div className="flex flex-col items-start justify-center gap-[2rem] w-full">
                <div className="flex gap-[2rem] self-center">
                    <button className="bg-primary rounded-lg text-background font-[600] hover:scale-105 transition-all duration-300 px-[1rem] py-[0.5rem]">Business & Management</button>
                    <button className="bg-primary rounded-lg text-background font-[600] hover:scale-105 transition-all duration-300 px-[1rem] py-[0.5rem]">Graphic Design</button>
                    <button className="bg-primary rounded-lg text-background font-[600] hover:scale-105 transition-all duration-300 px-[1rem] py-[0.5rem]">Healthcare & Medicine</button>
                    <button className="bg-primary rounded-lg text-background font-[600] hover:scale-105 transition-all duration-300 px-[1rem] py-[0.5rem]">Tech & IT</button>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-around items-center">
                    <div className="self-start space-y-[2rem]">
                        <h1 className="trackind-wide text-[2rem] font-[900]">Course Title</h1>
                        <p className="font-[600]">Course Goals, Desc etc.</p>
                        <button className="bg-primary rounded-lg text-background font-[600] hover:scale-105 transition-all duration-300 px-[1rem] py-[0.5rem]">Explore courses</button>
                    </div>
                    <div className="flex gap-[2rem]">
                        <div className="flex flex-col border-2 max-w-[20rem] justify-center items-center gap-[0rem] rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg">
                            <img src="/assets/sunset.jpg" alt="" className="object-cover w-full h-[10rem] rounded-tl-xl rounded-tr-xl"/>
                            <div className="flex flex-col items-center justify-center px-[1rem] py-[2rem] space-y-[2rem]">
                                <h1 className="font-[600] text-[1.2rem]">Course Card Title</h1>
                                <p>Course Description. Something to do with the course. Lorem ipsem etc. I have nothing to add more. Like literally, nothing more. It's just that bad.</p>
                                <h1 className="self-start text-background bg-accent px-[1rem] rounded py-[0.3rem]">Status Course</h1>
                            </div>
                        </div>

                        <div className="flex flex-col border-2 max-w-[20rem] justify-center items-center gap-[0rem] rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg">
                            <img src="/assets/sunset.jpg" alt="" className="object-cover w-full h-[10rem] rounded-tl-xl rounded-tr-xl"/>
                            <div className="flex flex-col items-center justify-center px-[1rem] py-[2rem] space-y-[2rem]">
                                <h1 className="font-[600] text-[1.2rem]">Course Card Title</h1>
                                <p>Course Description. Something to do with the course. Lorem ipsem etc. I have nothing to add more. Like literally, nothing more. It's just that bad.</p>
                                <h1 className="self-start text-background bg-accent px-[1rem] rounded py-[0.3rem]">Status Course</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

  )
}
