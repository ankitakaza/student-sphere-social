
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StoryCircle from "./StoryCircle";
import { cn } from "@/lib/utils";

interface Story {
  id: string;
  name: string;
  image?: string;
  viewed: boolean;
}

const StoriesContainer = () => {
  const [stories] = useState<Story[]>([
    { id: "1", name: "CS Club", image: "https://picsum.photos/id/237/200", viewed: false },
    { id: "2", name: "Dance Society", image: "https://picsum.photos/id/238/200", viewed: false },
    { id: "3", name: "Debate Team", image: "https://picsum.photos/id/239/200", viewed: true },
    { id: "4", name: "Music Band", image: "https://picsum.photos/id/240/200", viewed: false },
    { id: "5", name: "Robotics", image: "https://picsum.photos/id/241/200", viewed: false },
    { id: "6", name: "Art Circle", image: "https://picsum.photos/id/242/200", viewed: true },
    { id: "7", name: "Photography", image: "https://picsum.photos/id/243/200", viewed: false },
    { id: "8", name: "Eco Club", image: "https://picsum.photos/id/244/200", viewed: false },
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewedStories, setViewedStories] = useState<string[]>([]);
  
  const handleScroll = (direction: 'left' | 'right') => {
    const scrollAmount = 200;
    const container = document.getElementById('stories-container');
    
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
        setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
      } else {
        container.scrollLeft += scrollAmount;
        setScrollPosition(scrollPosition + scrollAmount);
      }
    }
  };
  
  const handleView = (id: string) => {
    setViewedStories(prev => [...prev, id]);
    // Here you would normally open a story modal
    console.log(`Viewing story: ${id}`);
  };

  return (
    <div className="relative mb-6">
      <div
        id="stories-container"
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-none scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {stories.map(story => (
          <StoryCircle
            key={story.id}
            id={story.id}
            name={story.name}
            image={story.image}
            viewed={story.viewed || viewedStories.includes(story.id)}
            onView={handleView}
          />
        ))}
      </div>
      
      <Button
        size="icon"
        variant="secondary"
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 rounded-full opacity-80 shadow-md",
          scrollPosition <= 0 ? "hidden" : "block"
        )}
        onClick={() => handleScroll('left')}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        size="icon"
        variant="secondary"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full opacity-80 shadow-md"
        onClick={() => handleScroll('right')}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default StoriesContainer;
