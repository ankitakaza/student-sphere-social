
import { useState } from "react";
import Header from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/feed/PostCard";
import { Badge } from "@/components/ui/badge";

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
  category?: string;
  tags?: string[];
}

const DiscoverPage = () => {
  const [activeTab, setActiveTab] = useState("trending");
  
  const trendingPosts: Post[] = [
    {
      id: "1",
      author: {
        name: "Jane Smith",
        avatar: "https://picsum.photos/id/1011/200",
        handle: "jane_smith",
      },
      content: "Just aced my final exams! So happy that the semester is finally over. Who's up for a celebration?",
      image: "https://picsum.photos/id/119/600/400",
      timestamp: "3h ago",
      likes: 248,
      comments: 42,
      tags: ["finals", "celebration"],
    },
    {
      id: "2",
      author: {
        name: "Chess Club",
        avatar: "https://picsum.photos/id/1012/200",
        handle: "chess_club",
      },
      content: "Our team won the inter-university chess tournament! Proud of everyone who participated and supported us!",
      image: "https://picsum.photos/id/139/600/400",
      timestamp: "1d ago",
      likes: 186,
      comments: 24,
      category: "clubs",
      tags: ["chess", "tournament", "victory"],
    },
    {
      id: "3",
      author: {
        name: "Meme Lord",
        avatar: "https://picsum.photos/id/1013/200",
        handle: "meme_master",
      },
      content: "When the professor says the exam will be easy but you open it and see the first question...",
      image: "https://picsum.photos/id/146/600/400",
      timestamp: "2d ago",
      likes: 623,
      comments: 75,
      tags: ["memes", "exams", "studentlife"],
    },
  ];
  
  const memesQuizzes: Post[] = [
    {
      id: "4",
      author: {
        name: "Meme Lord",
        avatar: "https://picsum.photos/id/1013/200",
        handle: "meme_master",
      },
      content: "Campus food be like... expectation vs reality 😂",
      image: "https://picsum.photos/id/292/600/400",
      timestamp: "5h ago",
      likes: 492,
      comments: 87,
      tags: ["memes", "campusfood"],
    },
    {
      id: "5",
      author: {
        name: "Quiz Master",
        avatar: "https://picsum.photos/id/1014/200",
        handle: "quiz_time",
      },
      content: "QUIZ TIME: How well do you know our university's history? Take this quiz and find out your score!",
      timestamp: "1d ago",
      likes: 156,
      comments: 23,
      tags: ["quiz", "university", "history"],
    },
    {
      id: "6",
      author: {
        name: "Sara Johnson",
        avatar: "https://picsum.photos/id/1015/200",
        handle: "sara_j",
      },
      content: "Made this meme about our calculus professor. If you know, you know 😅",
      image: "https://picsum.photos/id/155/600/400",
      timestamp: "2d ago",
      likes: 345,
      comments: 42,
      tags: ["memes", "calculus", "professors"],
    },
  ];
  
  const discussions: Post[] = [
    {
      id: "7",
      author: {
        name: "Alex Chen",
        avatar: "https://picsum.photos/id/1016/200",
        handle: "alex_c",
      },
      content: "What do you think about the new library hours? I personally think they should extend the closing time during exam weeks.",
      timestamp: "4h ago",
      likes: 83,
      comments: 56,
      tags: ["discussion", "library", "examweek"],
    },
    {
      id: "8",
      author: {
        name: "Debate Club",
        avatar: "https://picsum.photos/id/1017/200",
        handle: "debate_club",
      },
      content: "Topic for next week's open debate: 'Should attendance be mandatory for lectures?' What's your take? Comment below!",
      timestamp: "1d ago",
      likes: 124,
      comments: 98,
      category: "clubs",
      tags: ["debate", "attendance", "academics"],
    },
    {
      id: "9",
      author: {
        name: "Maria Garcia",
        avatar: "https://picsum.photos/id/1018/200",
        handle: "maria_g",
      },
      content: "I'm thinking of starting a new student initiative focused on mental health awareness. Would anyone be interested in joining or helping out?",
      timestamp: "2d ago",
      likes: 217,
      comments: 65,
      tags: ["mentalhealth", "initiative", "support"],
    },
  ];
  
  const posts = {
    trending: trendingPosts,
    memes: memesQuizzes,
    discussions: discussions,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Discover</h1>
          <p className="text-muted-foreground">Explore trending content and join conversations</p>
        </div>
        
        <Tabs defaultValue="trending" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="memes">Memes & Quizzes</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="trending" className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <p className="text-sm text-muted-foreground mr-2">Popular tags:</p>
              <Badge variant="secondary">#finals</Badge>
              <Badge variant="secondary">#campuslife</Badge>
              <Badge variant="secondary">#events</Badge>
            </div>
            {posts.trending.map(post => (
              <PostCard
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                image={post.image}
                timestamp={post.timestamp}
                likes={post.likes}
                comments={post.comments}
                category={post.category}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="memes" className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <p className="text-sm text-muted-foreground mr-2">Popular tags:</p>
              <Badge variant="secondary">#memes</Badge>
              <Badge variant="secondary">#quiztime</Badge>
              <Badge variant="secondary">#funstuff</Badge>
            </div>
            {posts.memes.map(post => (
              <PostCard
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                image={post.image}
                timestamp={post.timestamp}
                likes={post.likes}
                comments={post.comments}
                category={post.category}
              />
            ))}
          </TabsContent>
          
          <TabsContent value="discussions" className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              <p className="text-sm text-muted-foreground mr-2">Popular tags:</p>
              <Badge variant="secondary">#debate</Badge>
              <Badge variant="secondary">#opinions</Badge>
              <Badge variant="secondary">#studentlife</Badge>
            </div>
            {posts.discussions.map(post => (
              <PostCard
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                image={post.image}
                timestamp={post.timestamp}
                likes={post.likes}
                comments={post.comments}
                category={post.category}
              />
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DiscoverPage;
