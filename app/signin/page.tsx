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

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Refs for GSAP
  const cardRef = useRef<HTMLDivElement>(null);
  const fieldRefs = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In Data:", { email, password });
    alert("Sign in successful! (Check console for data)");
  };

  useEffect(() => {
    // Card fade-in and move up
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Stagger in form fields
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

    // Floating effect
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
        className="w-full max-w-md bg-gray-900 text-white border-gray-700 shadow-lg"
      >
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
          <CardDescription className="text-gray-400">
            Welcome back, enter your credentials to continue.
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
            <button
              ref={buttonRef}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Sign In
            </button>
          </form>
          <div
            ref={(el) => {
              if (el) fieldRefs.current[2] = el;
            }}
            className="mt-6 text-center text-sm text-gray-400"
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="underline text-purple-400 hover:text-purple-500"
            >
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
