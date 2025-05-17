
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { X, FilePlus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CreateService = () => {
  const [serviceName, setServiceName] = useState("");
  const [subsections, setSubsections] = useState<string[]>([""]);
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  // Redirect if not admin
  React.useEffect(() => {
    if (!isAdmin) {
      navigate("/");
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      });
    }
  }, [isAdmin, navigate]);

  const handleSubsectionChange = (index: number, value: string) => {
    const updatedSubsections = [...subsections];
    updatedSubsections[index] = value;
    setSubsections(updatedSubsections);
  };

  const addSubsection = () => {
    setSubsections([...subsections, ""]);
  };

  const removeSubsection = (index: number) => {
    if (subsections.length > 1) {
      const updatedSubsections = subsections.filter((_, i) => i !== index);
      setSubsections(updatedSubsections);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Filter out empty subsections
    const filteredSubsections = subsections.filter((section) => section.trim() !== "");

    if (!serviceName.trim()) {
      toast({
        title: "Error",
        description: "Service name is required",
        variant: "destructive",
      });
      return;
    }

    // Save service to localStorage
    const services = JSON.parse(localStorage.getItem("services") || "[]");
    services.push({
      id: Date.now(),
      name: serviceName,
      subsections: filteredSubsections,
    });
    localStorage.setItem("services", JSON.stringify(services));

    // Reset form
    setServiceName("");
    setSubsections([""]);

    toast({
      title: "Service Created",
      description: "The service has been created successfully.",
    });
  };

  if (!isAdmin) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="container mx-auto py-12 px-4 min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center mb-8 space-x-3">
          <FilePlus className="h-8 w-8 text-jis-purple" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-jis-blue via-jis-purple to-jis-teal bg-clip-text text-transparent">Create New Service</h1>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-lg">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="text-xl text-white">Service Details</CardTitle>
            <CardDescription className="text-gray-400">
              Add the service name and subsections to create a new service offering.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="serviceName" className="block text-sm font-medium text-gray-300 mb-1">
                  Service Name
                </label>
                <Input
                  id="serviceName"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  placeholder="Enter service name"
                  required
                  className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:ring-jis-teal focus:border-jis-teal"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">Subsections</label>
                {subsections.map((subsection, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <Input
                      value={subsection}
                      onChange={(e) => handleSubsectionChange(index, e.target.value)}
                      placeholder={`Subsection ${index + 1}`}
                      className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:ring-jis-teal focus:border-jis-teal"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="icon" 
                      onClick={() => removeSubsection(index)}
                      disabled={subsections.length <= 1}
                      className="border-gray-700 hover:bg-gray-700 text-gray-300"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={addSubsection}
                  className="border-jis-teal text-jis-teal hover:bg-jis-teal/20"
                >
                  Add Subsection
                </Button>
              </div>

              <CardFooter className="px-0 pt-4">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-jis-blue to-jis-purple hover:opacity-90 transition-all w-full md:w-auto"
                >
                  Create Service
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreateService;
