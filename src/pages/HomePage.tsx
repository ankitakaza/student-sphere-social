import { useState } from "react";
import Header from "@/components/layout/Header";
import FilterBar from "@/components/feed/FilterBar";
import PostCard from "@/components/feed/PostCard";

interface Post {
  id: string;
  author: {
    name: string;
    avatar?: string;
    handle: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  category: string;
}

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const posts: Post[] = [
    {
      id: "1",
      author: {
        name: "Computer Science Dept",
        avatar: "https://picsum.photos/id/100/200",
        handle: "cs_dept",
      },
      content: "📢 Important update: CS201 class will be held online tomorrow due to auditorium renovations. Check your email for the Zoom link.",
      timestamp: "2h ago",
      likes: 24,
      comments: 5,
      category: "academics",
    },
    {
      id: "2",
      author: {
        name: "Photography Club",
        avatar: "https://picsum.photos/id/110/200",
        handle: "photo_club",
      },
      content: "Don't miss our annual photo exhibition next week! Submit your entries by Friday to participate. Theme: 'Urban Wilderness'",
      image: "https://picsum.photos/id/28/600/400",
      timestamp: "5h ago",
      likes: 56,
      comments: 12,
      category: "clubs",
    },
    {
      id: "3",
      author: {
        name: "Student Union",
        avatar: "https://picsum.photos/id/120/200",
        handle: "student_union",
      },
      content: "The Winter Carnival registration is now open! Performances, food stalls, games, and more. Register your stall or performance now!",
      image: "https://picsum.photos/id/49/600/400",
      timestamp: "1d ago",
      likes: 102,
      comments: 34,
      category: "events",
    },
    {
      id: "4",
      author: {
        name: "University Athletics",
        avatar: "https://picsum.photos/id/130/200",
        handle: "univ_athletics",
      },
      content: "Congratulations to our basketball team for winning the regional championship! Go Wolves! 🏆",
      image: "https://picsum.photos/id/63/600/400",
      timestamp: "2d ago",
      likes: 142,
      comments: 28,
      category: "sports",
    },
    {
      id: "5",
      author: {
        name: "President's Office",
        avatar: "https://picsum.photos/id/140/200",
        handle: "president",
      },
      content: "Important: Campus will remain closed on Monday due to scheduled maintenance of electrical systems. All classes will be held online.",
      timestamp: "3d ago",
      likes: 87,
      comments: 42,
      category: "announcements",
    },
  ];
  
  const filteredPosts = activeFilter === "all" 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
      <Header />
      <main className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-3 md:col-span-2 space-y-6">
            <div className="bg-card rounded-xl shadow-md p-4 border animate-fade-in">
              <FilterBar onFilterChange={setActiveFilter} />
            </div>
            <div className="space-y-6">
              {filteredPosts.map(post => (
                <div key={post.id} className="transform transition-all duration-200 hover:scale-[1.02]">
                  <PostCard
                    id={post.id}
                    author={post.author}
                    content={post.content}
                    image={post.image}
                    timestamp={post.timestamp}
                    likes={post.likes}
                    comments={post.comments}
                    category={post.category}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-card rounded-xl shadow-md p-6 border sticky top-24 animate-fade-in">
              <h2 className="font-semibold text-xl mb-6 text-gradient-primary">Upcoming Events</h2>
              <div className="space-y-6">
                <div className="group hover:bg-accent/5 -mx-4 p-4 rounded-lg transition-colors">
                  <h3 className="font-medium group-hover:text-primary transition-colors">Winter Carnival</h3>
                  <p className="text-sm text-muted-foreground mt-1">Dec 15 • Campus Plaza</p>
                </div>
                <div className="group hover:bg-accent/5 -mx-4 p-4 rounded-lg transition-colors">
                  <h3 className="font-medium group-hover:text-primary transition-colors">Hackathon 2025</h3>
                  <p className="text-sm text-muted-foreground mt-1">Jan 20-22 • Tech Building</p>
                </div>
                <div className="group hover:bg-accent/5 -mx-4 p-4 rounded-lg transition-colors">
                  <h3 className="font-medium group-hover:text-primary transition-colors">Cultural Night</h3>
                  <p className="text-sm text-muted-foreground mt-1">Feb 5 • Auditorium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
