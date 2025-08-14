
export default function ClassContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary-foreground mb-6">Class Content & Resources</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Here you will find a variety of resources related to the classes I teach, including worksheets, coloring sheets, and supplementary materials.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Class Resource Card */}
        <div className="bg-card p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-purple-500">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Math Worksheets - Grade 3</h2>
          <p className="text-muted-foreground mb-4">A collection of worksheets covering addition, subtraction, multiplication, and division for third graders.</p>
          <a href="#" className="text-purple-400 hover:underline">Download Worksheets</a>
        </div>

        {/* Example Coloring Sheet Card */}
        <div className="bg-card p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-purple-500">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Animal Coloring Book</h2>
          <p className="text-muted-foreground mb-4">Fun and educational coloring sheets featuring various animals and their habitats.</p>
          <a href="#" className="text-purple-400 hover:underline">Download Coloring Sheets</a>
        </div>

        {/* Example Class Resource Card */}
        <div className="bg-card p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-purple-500">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Science Project Guide - Elementary</h2>
          <p className="text-muted-foreground mb-4">A step-by-step guide for elementary science projects, including experiment ideas and templates.</p>
          <a href="#" className="text-purple-400 hover:underline">View Guide</a>
        </div>

        {/* Add more content cards as needed */}
      </div>
    </div>
  );
}
