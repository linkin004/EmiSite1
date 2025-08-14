
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary-foreground mb-6">Contact Me</h1>
      <div className="bg-card p-8 rounded-lg shadow-lg border border-purple-500 max-w-2xl mx-auto">
        <p className="text-lg text-muted-foreground mb-6">
          Have suggestions, questions, or just want to say hello? Fill out the form below, and I'll get back to you as soon as possible.
        </p>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-green-400">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" className="bg-input border-purple-500 text-primary-foreground" />
          </div>
          <div>
            <Label htmlFor="email" className="text-green-400">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" className="bg-input border-purple-500 text-primary-foreground" />
          </div>
          <div>
            <Label htmlFor="subject" className="text-green-400">Subject</Label>
            <Input id="subject" type="text" placeholder="Subject" className="bg-input border-purple-500 text-primary-foreground" />
          </div>
          <div>
            <Label htmlFor="message" className="text-green-400">Message</Label>
            <Textarea id="message" placeholder="Your Message" rows={5} className="bg-input border-purple-500 text-primary-foreground" />
          </div>
          <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
