import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Music Playlist",
    description: "A responsive music player website with an elegant interface for browsing and playing tracks.",
    image: "/projects/music-player.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://playlist-alpha.vercel.app/",
    gitgubURL: "https://github.com/mavic01/playlist",
  },
  {
    id: 2,
    title: "Space Tourism Website",
    description: "An interactive space exploration website designed with a modern and futuristic UI.",
    image: "/projects/space-tourism.png",
    tags: ["React.JS", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"],
    demoURL: "https://space-tourism-sooty-theta.vercel.app/",
    gitgubURL: "https://github.com/mavic01/space-tourism",
  },
  {
    id: 3,
    title: "E-Commerce Product Page",
    description: "A dynamic e-commerce product page with interactive product previews and cart functionality.",
    image: "projects/e-commerce.png",
    tags: ["React.JS", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"],
    demoURL: "https://e-commerce-product-yiw9.vercel.app/",
    gitgubURL: "https://github.com/mavic01/E-Commerce-Product",
  },
  {
    id: 4,
    title: "Todo App",
    description: "A feature-rich todo app that fetches data from JSONPlaceholder, with CRUD simulation and filtering.",
    image: "/projects/todo.png",
    tags: ["React.JS", "TypeScript", "JavaScript", "Tailwind CSS", "ShadCN", "Tanstack Query", "React Router", "Vite"],
    demoURL: "https://second-semester-exam-phi.vercel.app/",
    gitgubURL: "https://github.com/mavic01/second-semester-exam",
  },
  {
    id: 5,
    title: "Calculator",
    description: "A clean and simple web calculator for performing basic arithmetic operations.",
    image: "/projects/simple-calculator.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://calculator-eight-eosin-27.vercel.app/",
    gitgubURL: "https://github.com/mavic01/calc",
  },
  {
    id: 6,
    title: "Interactive Credit Card Page",
    description: "A credit card form that updates card details in real-time and validates inputs dynamically.",
    image: "/projects/interactive-card.png",
    tags: ["React.JS", "TypeScript", "JavaScript", "Tailwind CSS", "React-Hook-Form", "Next.JS"],
    demoURL: "https://cardz-mauve.vercel.app/",
    gitgubURL: "https://github.com/mavic01/cardz",
  },
  {
    id: 7,
    title: "Insta Spot Social Media Page",
    description: "A simple social media prototype page with a clean feed-style layout.",
    image: "/projects/insta.png",
    tags: ["React.JS", "JavaScript", "Tailwind CSS", "Vite"],
    demoURL: "https://react-spots.vercel.app/",
    gitgubURL: "https://github.com/mavic01/react-spots",
  },
  {
    id: 8,
    title: "Sneaker Shop",
    description: "A responsive sneaker e-commerce landing page with a stylish product showcase.",
    image: "/projects/sneaker.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://mavic01.github.io/shop/",
    gitgubURL: "https://github.com/mavic01/shop",
  },
  {
    id: 9,
    title: "Stop Watch",
    description: "A functional stopwatch app with start, pause, and reset controls.",
    image: "/projects/stopwatch.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://stopwatch-six-flame.vercel.app/",
    gitgubURL: "https://github.com/mavic01/stopwatch",
  },
  {
    id: 10,
    title: "Digital Clock",
    description: "A digital clock web app that displays real-time hours, minutes, and seconds.",
    image: "/projects/clock.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://clock-tau-peach.vercel.app/",
    gitgubURL: "https://github.com/mavic01/clock",
  },
  {
    id: 11,
    title: "QR Code Generator",
    description: "A tool that generates QR codes instantly from user-provided URLs.",
    image: "/projects/qr-code-generator.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://qrcode-mavic01.vercel.app/",
    gitgubURL: "https://github.com/mavic01/qrcode",
  },
  {
    id: 12,
    title: "BookList",
    description: "A book list app where users can add, update, and delete books easily.",
    image: "/projects/booklist.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://mavic01.github.io/Book-List/",
    gitgubURL: "https://github.com/mavic01/Book-List",
  },
  {
    id: 13,
    title: "Art Website",
    description: "A visually appealing website showcasing artworks and creative designs.",
    image: "/projects/art-website.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://mavicart.vercel.app/",
    gitgubURL: "https://github.com/mavic01/mavicart",
  },
  {
    id: 14,
    title: "Rock - Paper - Scissors",
    description: "An interactive Rock-Paper-Scissors game with a fun and simple UI.",
    image: "/projects/rock-paper-scissors.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://rock-paper-scissors-two-sandy.vercel.app/",
    gitgubURL: "https://github.com/mavic01/Rock-Paper-Scissors",
  },
  {
    id: 15,
    title: "Drum Kit",
    description: "A drum kit web app that plays different drum sounds on key press or click.",
    image: "/projects/drum-kit.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoURL: "https://mavic01.github.io/drumKit/",
    gitgubURL: "https://github.com/mavic01/drumKit",
  },
];


const Project = () => {
  return <section id="projects" className="py-20 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here’s a look at some of the projects I’ve built. Each one reflects my growth, creativity, and problem-solving as a frontend developer.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover">
                    <div className="h-48 overflow-hidden">
                        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={project.image} alt={project.title} />
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                            ))}
                        </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="tet-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-center items-center">
                        <div className="flex space-x-3">
                            <a className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" href={project.demoURL}><ExternalLink size={20} /></a>
                            <a className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" href={project.gitgubURL}><Github size={20}/></a>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/mavic01" target="_blank">View My Github <ArrowRight size={16} /></a>
        </div>
    </div>
  </section>;
};

export default Project;


//https://www.youtube.com/watch?v=ifOJ0R5UQOc&t=41s   -  2:07:23