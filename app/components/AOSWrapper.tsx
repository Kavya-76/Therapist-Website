"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// For animation on scroll
export default function AOSWrapper() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return null;
}
