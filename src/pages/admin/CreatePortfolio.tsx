
import React, { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Image, Plus } from "lucide-react";

const CreatePortfolio = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    projectLink: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      
      // Create a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.category || !formData.title || !formData.projectLink) {
      toast({
        title: "Error",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Process image if available
    let imageData = null;
    if (imagePreview) {
      imageData = imagePreview;
    }

    // Create portfolio item
    const portfolioItem = {
      id: Date.now(),
      ...formData,
      image: imageData,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    const portfolioItems = JSON.parse(localStorage.getItem("portfolioItems") || "[]");
    portfolioItems.push(portfolioItem);
    localStorage.setItem("portfolioItems", JSON.stringify(portfolioItems));

    // Reset form
    setFormData({
      category: "",
      title: "",
      description: "",
      projectLink: "",
    });
    setImageFile(null);
    setImagePreview(null);

    toast({
      title: "Portfolio Created",
      description: "The portfolio item has been created successfully.",
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
          <Plus className="h-8 w-8 text-jis-purple" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-jis-blue via-jis-purple to-jis-teal bg-clip-text text-transparent">Create Portfolio Item</h1>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 shadow-lg">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="text-xl text-white">Portfolio Details</CardTitle>
            <CardDescription className="text-gray-400">
              Add a new project to your portfolio showcase.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                    Category*
                  </label>
                  <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="e.g., Web Development, UI/UX"
                    required
                    className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:ring-jis-teal focus:border-jis-teal"
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                    Title*
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Project Title"
                    required
                    className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:ring-jis-teal focus:border-jis-teal"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                  Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Project Description"
                  className="min-h-32 border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:ring-jis-teal focus:border-jis-teal"
                />
              </div>

              <div>
                <label htmlFor="projectLink" className="block text-sm font-medium text-gray-300 mb-1">
                  Project Link*
                </label>
                <Input
                  id="projectLink"
                  name="projectLink"
                  value={formData.projectLink}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  required
                  className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus:ring-jis-teal focus:border-jis-teal"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-1">
                  Project Image
                </label>
                <div className="flex flex-col space-y-4">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border-gray-700 bg-gray-800 text-white file:bg-gray-700 file:text-white file:border-0"
                  />
                  {imagePreview ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="border rounded-md overflow-hidden w-40 h-40 border-gray-600"
                    >
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-center w-40 h-40 border border-dashed border-gray-600 rounded-md">
                      <Image className="h-10 w-10 text-gray-500" />
                    </div>
                  )}
                </div>
              </div>

              <CardFooter className="px-0 pt-4">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-jis-blue to-jis-purple hover:opacity-90 transition-all w-full md:w-auto"
                >
                  Create Portfolio
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CreatePortfolio;
