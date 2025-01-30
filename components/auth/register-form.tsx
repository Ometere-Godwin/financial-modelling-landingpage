"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Email,
  Lock,
  Person,
  Visibility,
  VisibilityOff,
  Business,
} from "@mui/icons-material";
import Link from "next/link";

export function RegisterForm() {
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
  });

  const handleChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your signup logic here
    console.log("Sign up data:", formData);
    <Link href={"https://finarchitect.netlify.app/login"} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Typography variant="h3" className="text-white font-bold">
            FinArchitect
          </Typography>
          <Typography variant="subtitle1" className="mt-4 text-emerald-100">
            Create your account
          </Typography>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <TextField
                label="First Name"
                required
                fullWidth
                value={formData.firstName}
                onChange={handleChange("firstName")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person className="text-emerald-600" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#059669",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#059669",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#059669",
                  },
                }}
              />
              <TextField
                label="Last Name"
                required
                fullWidth
                value={formData.lastName}
                onChange={handleChange("lastName")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person className="text-emerald-600" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#059669",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#059669",
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#059669",
                  },
                }}
              />
            </div>

            <TextField
              label="Email"
              required
              fullWidth
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email className="text-emerald-600" />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#059669",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#059669",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#059669",
                },
              }}
            />

            <TextField
              label="Company"
              required
              fullWidth
              value={formData.company}
              onChange={handleChange("company")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Business className="text-emerald-600" />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#059669",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#059669",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#059669",
                },
              }}
            />

            <TextField
              label="Password"
              required
              fullWidth
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange("password")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock className="text-emerald-600" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#059669",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#059669",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#059669",
                },
              }}
            />

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
              >
                Create Account
              </button>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Already have an account?
                    </span>
                  </div>
                </div>

                <Link
                  href="/login"
                  className="mt-6 w-full flex justify-center py-3 px-4 border border-emerald-600 rounded-lg shadow-sm text-sm font-medium text-emerald-600 bg-white hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
