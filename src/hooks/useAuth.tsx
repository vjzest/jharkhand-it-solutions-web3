
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user data:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: { email: string; password: string }) => 
        u.email === email && u.password === password
    );

    // Special case for admin
    if (email === "admin@gmail.com" && password === "admin123") {
      const adminUser = { email, isAdmin: true };
      localStorage.setItem("user", JSON.stringify(adminUser));
      setUser(adminUser);
      return true;
    }

    if (foundUser) {
      const userData = { email: foundUser.email, isAdmin: false };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return true;
    }

    return false;
  };

  const signup = (email: string, password: string): boolean => {
    // Check if email already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u: { email: string }) => u.email === email)) {
      return false;
    }

    // Add new user
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    
    // Log in the new user
    const userData = { email, isAdmin: false };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.isAdmin || false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
