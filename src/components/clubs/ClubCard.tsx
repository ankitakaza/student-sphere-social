
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Calendar, Bell, BellOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ClubCardProps {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  category: string;
  image?: string;
  upcomingEventsCount: number;
}

const ClubCard = ({
  id,
  name,
  description,
  memberCount,
  category,
  image,
  upcomingEventsCount,
}: ClubCardProps) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Card className="overflow-hidden h-full flex flex-col animate-fade-in">
      {image && (
        <div className="h-32 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform" 
          />
        </div>
      )}
      <CardHeader className={!image ? "pt-6" : ""}>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge variant="outline">{category}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{memberCount} members</span>
        </div>
        {upcomingEventsCount > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
            <Calendar className="h-4 w-4" />
            <span>{upcomingEventsCount} upcoming events</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link to={`/clubs/${id}`}>View Details</Link>
        </Button>
        <Button 
          variant={isFollowing ? "ghost" : "default"} 
          size="sm" 
          className={`flex-1 ${isFollowing ? 'text-muted-foreground' : ''}`}
          onClick={() => setIsFollowing(!isFollowing)}
        >
          {isFollowing ? (
            <>
              <BellOff className="h-4 w-4 mr-1" />
              Unfollow
            </>
          ) : (
            <>
              <Bell className="h-4 w-4 mr-1" />
              Follow
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClubCard;
