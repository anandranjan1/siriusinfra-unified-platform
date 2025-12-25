import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { EmployeeRoute } from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes - accessible by everyone */}
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Employee-only routes */}
            <Route path="/dashboard" element={
              <EmployeeRoute>
                <Dashboard />
              </EmployeeRoute>
            } />
            <Route path="/dashboard/cpq" element={
              <EmployeeRoute>
                <Dashboard />
              </EmployeeRoute>
            } />
            <Route path="/dashboard/clm" element={
              <EmployeeRoute>
                <Dashboard />
              </EmployeeRoute>
            } />
            <Route path="/dashboard/crm" element={
              <EmployeeRoute>
                <Dashboard />
              </EmployeeRoute>
            } />
            <Route path="/dashboard/analytics" element={
              <EmployeeRoute>
                <Dashboard />
              </EmployeeRoute>
            } />
            <Route path="/dashboard/admin" element={
              <EmployeeRoute>
                <Dashboard />
              </EmployeeRoute>
            } />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
