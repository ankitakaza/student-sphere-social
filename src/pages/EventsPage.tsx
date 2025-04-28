
import { useState } from "react";
import Header from "@/components/layout/Header";
import EventCard from "@/components/events/EventCard";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  organizer: string;
  image?: string;
  attendeeCount: number;
}

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  const events: Event[] = [
    {
      id: "1",
      title: "Annual Hackathon",
      description: "24-hour coding competition. Build innovative solutions to real-world problems. Great prizes to be won!",
      date: "Jan 15, 2025",
      time: "9:00 AM - Jan 16, 9:00 AM",
      location: "Tech Building, Room 301",
      category: "Tech",
      organizer: "Computer Science Society",
      image: "https://picsum.photos/id/1/600/400",
      attendeeCount: 120,
    },
    {
      id: "2",
      title: "Winter Carnival",
      description: "Annual winter celebration with performances, food stalls, games, and more. Don't miss the fireworks at 8 PM!",
      date: "Dec 15, 2024",
      time: "12:00 PM - 10:00 PM",
      location: "Campus Plaza",
      category: "Cultural",
      organizer: "Student Union",
      image: "https://picsum.photos/id/2/600/400",
      attendeeCount: 500,
    },
    {
      id: "3",
      title: "Leadership Workshop",
      description: "Learn essential leadership skills from industry professionals. Certificate provided upon completion.",
      date: "Nov 25, 2024",
      time: "3:00 PM - 6:00 PM",
      location: "Business School, Hall B",
      category: "Workshop",
      organizer: "Career Development Center",
      image: "https://picsum.photos/id/3/600/400",
      attendeeCount: 75,
    },
    {
      id: "4",
      title: "Inter-University Basketball Tournament",
      description: "Cheer for our university basketball team as they compete against other universities in the region.",
      date: "Dec 3-5, 2024",
      time: "Various timings",
      location: "University Sports Complex",
      category: "Sports",
      organizer: "Sports Department",
      image: "https://picsum.photos/id/4/600/400",
      attendeeCount: 300,
    },
    {
      id: "5",
      title: "Cultural Night",
      description: "A celebration of diversity featuring performances from various cultural clubs and international students.",
      date: "Feb 5, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "University Auditorium",
      category: "Cultural",
      organizer: "International Students Association",
      image: "https://picsum.photos/id/5/600/400",
      attendeeCount: 250,
    },
    {
      id: "6",
      title: "Career Fair",
      description: "Connect with recruiters from top companies. Bring your resume and dress professionally.",
      date: "Mar 12, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Student Center, Grand Hall",
      category: "Career",
      organizer: "Career Services",
      image: "https://picsum.photos/id/6/600/400",
      attendeeCount: 400,
    },
  ];
  
  const filteredEvents = events
    .filter(event => categoryFilter === "all" || event.category === categoryFilter)
    .filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Events & Fests</h1>
          <p className="text-muted-foreground">Discover upcoming events and register to participate</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search events..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Tech">Tech</SelectItem>
              <SelectItem value="Cultural">Cultural</SelectItem>
              <SelectItem value="Workshop">Workshop</SelectItem>
              <SelectItem value="Sports">Sports</SelectItem>
              <SelectItem value="Career">Career</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
                category={event.category}
                organizer={event.organizer}
                image={event.image}
                attendeeCount={event.attendeeCount}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <h3 className="text-lg font-medium">No events found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
