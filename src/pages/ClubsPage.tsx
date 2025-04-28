
import { useState } from "react";
import Header from "@/components/layout/Header";
import ClubCard from "@/components/clubs/ClubCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Club {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  category: string;
  image?: string;
  upcomingEventsCount: number;
}

const ClubsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const clubs: Club[] = [
    {
      id: "1",
      name: "Computer Science Society",
      description: "The hub for tech enthusiasts and future software engineers. Regular workshops, hackathons, and industry speaker sessions.",
      memberCount: 156,
      category: "Academic",
      image: "https://picsum.photos/id/10/600/400",
      upcomingEventsCount: 3,
    },
    {
      id: "2",
      name: "Photography Club",
      description: "For those who see the world through a lens. Photo walks, editing workshops, and exhibitions throughout the year.",
      memberCount: 89,
      category: "Arts",
      image: "https://picsum.photos/id/20/600/400",
      upcomingEventsCount: 1,
    },
    {
      id: "3",
      name: "Debate Society",
      description: "Sharpening minds through argumentation. Participate in regional and national competitions.",
      memberCount: 62,
      category: "Academic",
      image: "https://picsum.photos/id/30/600/400",
      upcomingEventsCount: 2,
    },
    {
      id: "4",
      name: "Dance Troupe",
      description: "Express yourself through movement. All dance styles welcome, from classical to hip-hop.",
      memberCount: 93,
      category: "Arts",
      image: "https://picsum.photos/id/40/600/400",
      upcomingEventsCount: 1,
    },
    {
      id: "5",
      name: "Environmental Action",
      description: "Working toward a sustainable campus and community. Tree planting, waste reduction initiatives, and awareness campaigns.",
      memberCount: 74,
      category: "Service",
      image: "https://picsum.photos/id/50/600/400",
      upcomingEventsCount: 0,
    },
    {
      id: "6",
      name: "Basketball Team",
      description: "University's competitive basketball team. Regular practice sessions and inter-university tournaments.",
      memberCount: 32,
      category: "Sports",
      image: "https://picsum.photos/id/60/600/400",
      upcomingEventsCount: 4,
    },
  ];
  
  const filteredClubs = clubs.filter(club => 
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Clubs & Societies</h1>
          <p className="text-muted-foreground">Discover and join communities that match your interests</p>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Search clubs by name, description, or category..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.length > 0 ? (
            filteredClubs.map(club => (
              <ClubCard
                key={club.id}
                id={club.id}
                name={club.name}
                description={club.description}
                memberCount={club.memberCount}
                category={club.category}
                image={club.image}
                upcomingEventsCount={club.upcomingEventsCount}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <h3 className="text-lg font-medium">No clubs found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClubsPage;
