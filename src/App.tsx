
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { AppProvider } from "./contexts/AppContext.tsx";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar"; // Import Navbar

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar /> {/* Add Navbar here */}
            <main className="flex-grow">
              <AppRouter />
            </main>
            <footer className="bg-card p-4 text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} My Teaching Business. All rights reserved.</p>
              <p className="text-sm mt-1">Vibed with MKStack</p>
            </footer>
          </div>
          <Toaster />
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  );
}
