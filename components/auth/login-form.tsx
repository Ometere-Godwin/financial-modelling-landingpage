"use client";
import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
import {
  TextField,
  Typography,
  Card,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    // Add your login logic here
    console.log("Login data:", formData);

    <Link href={"/"} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <Typography variant="h3" className="text-white font-bold">
            FinArchitect
          </Typography>
          <Typography variant="subtitle1" className="mt-4 text-emerald-100">
            Sign in to your account
          </Typography>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
              >
                Sign In
              </button>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Don&apos;t have an account?
                    </span>
                  </div>
                </div>

                <Link
                  href="/register"
                  className="mt-6 w-full flex justify-center py-3 px-4 border border-emerald-600 rounded-lg shadow-sm text-sm font-medium text-emerald-600 bg-white hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
