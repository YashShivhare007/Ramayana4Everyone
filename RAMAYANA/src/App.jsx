import { useState } from 'react';
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot"

export default function App() {
  const [sharedVariable, setSharedVariable] = useState({});
  return (
    <div className="overflow-x-hidden">
      <Hero sharedVariable={sharedVariable} setSharedVariable={setSharedVariable}/>
      <Chatbot />
    </div>
  )
}