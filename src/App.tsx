import "./App.css";
import Categories from "./components/Categories";
import PageHeader from "./layouts/PageHeader";
import { categories, videos } from "./data/staticData";
import { useEffect, useState } from "react";
import VideoSection from "./components/VideoSection";
import Sidebar from "./components/Sidebar";
import EmptyData from "./components/EmptyData";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredArray = videos.filter((filteredVideo) => {
    if (selectedCategory == "All") return filteredVideo;
    return filteredVideo.category.includes(selectedCategory);
  });

  return (
    <div className="max-h-screen flex flex-col bg-zinc-50">
      {/* Header */}
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        {/* Side Navbar */}
        <Sidebar />
        {/* Videos Section */}
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-zinc-50 z-10 pb-4">
            <Categories
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          {filteredArray.length > 0 ? (
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {filteredArray.map((video) => (
                <VideoSection key={video.id} {...video} />
              ))}
            </div>
          ) : (
            <EmptyData />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
