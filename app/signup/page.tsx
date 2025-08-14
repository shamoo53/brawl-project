"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Refs for GSAP animations
  const cardRef = useRef<HTMLDivElement>(null);
  const fieldRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign Up Data:", { email, password });
    alert("Sign up successful! (Check console for data)");
  };

  useEffect(() => {
    // Fade in card
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Stagger form fields
    gsap.fromTo(
      fieldRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    // Floating effect for card
    gsap.to(cardRef.current, {
      y: "+=5",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "easeInOut",
    });
  }, []);

  useEffect(() => {
    // Button hover bounce
    if (buttonRef.current) {
      buttonRef.current.addEventListener("mouseenter", () => {
        gsap.to(buttonRef.current, { scale: 1.05, duration: 0.2 });
      });
      buttonRef.current.addEventListener("mouseleave", () => {
        gsap.to(buttonRef.current, { scale: 1, duration: 0.2 });
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4">
      <Card
        ref={cardRef}
        className="w-full max-w-md bg-gray-900 text-white shadow-lg"
      >
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
          <CardDescription className="text-gray-400">
            Create your account to join the brawl!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              ref={(el) => {
                if (el) fieldRefs.current[0] = el;
              }}
              className="space-y-2"
            >
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
              />
            </div>
            <div
              ref={(el) => {
                if (el) fieldRefs.current[1] = el;
              }}
              className="space-y-2"
            >
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
              />
            </div>
            <div
              ref={(el) => {
                if (el) fieldRefs.current[2] = el;
              }}
              className="space-y-2"
            >
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
              />
            </div>
            <Button
              ref={buttonRef}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Sign Up
            </Button>
          </form>
          <div
            ref={(el) => {
              if (el) fieldRefs.current[3] = el;
            }}
            className="mt-6 text-center text-sm text-gray-400"
          >
            Already have an account?{" "}
            <Link
              href="/signin"
              className="underline text-purple-400 hover:text-purple-500"
            >
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
