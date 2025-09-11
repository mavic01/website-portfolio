import ThemeToggle from "@/components/ThemeToggle"
import StarBackground from "@/components/StarBackground"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Project from "../components/Project"


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Nav */}
        <Navbar />

        {/* Main Section */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Project />
        </main>

        {/* Footer */}
    </div>
  )
}

export default Home