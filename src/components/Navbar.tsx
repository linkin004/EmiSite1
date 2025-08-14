
import { Link } from "react-router-dom";
import { Home, BookOpen, User, Mail } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-card p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
          My Teaching Business
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="flex items-center text-primary-foreground hover:text-purple-400 transition-colors">
              <Home className="mr-1" size={20} /> Home
            </Link>
          </li>
          <li>
            <Link to="/class-content" className="flex items-center text-primary-foreground hover:text-purple-400 transition-colors">
              <BookOpen className="mr-1" size={20} /> Class Content
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center text-primary-foreground hover:text-purple-400 transition-colors">
              <User className="mr-1" size={20} /> About Me
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center text-primary-foreground hover:text-purple-400 transition-colors">
              <Mail className="mr-1" size={20} /> Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
