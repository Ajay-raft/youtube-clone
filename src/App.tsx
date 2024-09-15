import "./App.css";
import Categories from "./components/Categories";
import PageHeader from "./layouts/PageHeader";
import { categories, videos } from "./data/staticData";
import { useState } from "react";
import VideoSection from "./components/VideoSection";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="max-h-screen flex flex-col">
      {/* Header */}
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        {/* Side Navbar */}
        <Sidebar />
        {/* Videos Section */}
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video) => (
              <VideoSection key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
