import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'

const Contact = () => {
    const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon."
            })
            setIsSubmitting(false)
        }, 1500)
    }
  return (
    <section className='py-20 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'>Touch</span></h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Let’s connect! Whether it’s about collaboration, opportunities, or questions, I’m just a message away.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                    <div className='space-y-6 justify-center'>
                        <div className="flex items-start space-x-4">
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors' href="mailto:iberivictor7@gmail.com">iberivictor7@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Phone</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors' href="tel:+2348108646033">+234 810 864 6033</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Location</h4>
                                <a className='text-muted-foreground hover:text-primary transition-colors'>Lagos, Nigeria.</a>
                            </div>
                        </div>
                    </div>

                    <div className='pt-8'>
                        <h4 className='font-medium mb-4'>Connect With Me</h4>
                        <div className='flex space-x-4 justify-center'>
                            <a href="https://www.linkedin.com/in/victor-iberi/" target='_blank'><Linkedin /></a>
                            <a href="https://x.com/iberiv" target='_blank'><img className='w-7 h-7' src='/twitter.jpg' /></a>
                            <a href="https://www.instagram.com/mavic_art/" target='_blank'><Instagram /></a>
                        </div>
                    </div>
                </div>

                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                    <form action="" className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label className='block text-sm font-medium mb-2 text-left' htmlFor="name">Name</label>
                            <input type="text" id='name' name="name" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Your name...'/>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-2 text-left' htmlFor="email">Email</label>
                            <input type="email" id='email' name="email" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Your email...'/>
                        </div>
                        <div>
                            <label className='block text-sm font-medium mb-2 text-left' htmlFor="message">Your Message</label>
                            <textarea id='message' name="message" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder='Compose message'/>
                        </div>
                        <button disabled={isSubmitting} type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",
                            ""
                        )}>
                            {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact