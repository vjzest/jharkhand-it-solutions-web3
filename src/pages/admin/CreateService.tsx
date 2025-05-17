
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-8">Create New Service</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700 mb-1">
              Service Name
            </label>
            <Input
              id="serviceName"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              placeholder="Enter service name"
              required
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Subsections</label>
            {subsections.map((subsection, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={subsection}
                  onChange={(e) => handleSubsectionChange(index, e.target.value)}
                  placeholder={`Subsection ${index + 1}`}
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon" 
                  onClick={() => removeSubsection(index)}
                  disabled={subsections.length <= 1}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addSubsection}>
              Add Subsection
            </Button>
          </div>

          <Button type="submit">Create Service</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
