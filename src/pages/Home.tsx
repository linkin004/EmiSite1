
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary-foreground mb-4">Welcome to My Teaching Business!</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your one-stop shop for educational resources, worksheets, coloring sheets, and class content.
        </p>
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
          <Link to="/class-content">Explore Class Content</Link>
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-card border-purple-500 shadow-lg transition-transform transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-green-400">Worksheets</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Engaging and educational worksheets for various subjects and age groups.
          </CardContent>
        </Card>
        <Card className="bg-card border-purple-500 shadow-lg transition-transform transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-green-400">Coloring Sheets</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Fun and creative coloring sheets to spark imagination.
          </CardContent>
        </Card>
        <Card className="bg-card border-purple-500 shadow-lg transition-transform transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-green-400">Class Resources</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Supplementary materials and resources for my classes.
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-primary-foreground mb-4">Have Suggestions?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          We'd love to hear from you! Share your ideas and feedback to help us improve.
        </p>
        <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </section>
    </div>
  );
}
