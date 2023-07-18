import { Header } from "../../components/Header";
import { TashInput } from "../../components/TaskInput";
import { Task } from "../../components/Task";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TashInput/>
        {/* task */}
        <Task title = "Read a book"/>
        {/* task */}
        <Task title = "Take a shower"/>
        {/* task */}
        <Task title = "Sleep"/>
      {/* //footer section */}
      <Footer year = "2023" fullname = "Tanabodee Srikhampa" studentID = "650610766"/>
        </div>
      </div>
  );
}
