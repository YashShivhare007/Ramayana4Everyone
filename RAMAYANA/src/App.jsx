import { useState } from 'react';
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot"

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Chatbot />
    </div>
  )
}