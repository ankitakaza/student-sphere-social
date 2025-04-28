
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EventCardProps {
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

const EventCard = ({
  id,
  title,
  description,
  date,
  time,
  location,
  category,
  organizer,
  image,
  attendeeCount,
}: EventCardProps) => {
  const [isAttending, setIsAttending] = useState(false);

  return (
    <Card className="overflow-hidden h-full flex flex-col animate-fade-in">
      {image && (
        <div className="h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform" 
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-1">{title}</CardTitle>
          <Badge>{category}</Badge>
        </div>
        <div className="text-sm text-muted-foreground">By {organizer}</div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm mb-3 line-clamp-2">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span>{attendeeCount} attending</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link to={`/events/${id}`}>Details</Link>
        </Button>
        <Button
          variant={isAttending ? "secondary" : "default"}
          size="sm"
          className="flex-1"
          onClick={() => setIsAttending(!isAttending)}
        >
          {isAttending ? "Cancel RSVP" : "RSVP"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
