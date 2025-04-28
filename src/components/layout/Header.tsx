
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, MessageSquare, Search, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-6">
                <Link to="/" className="text-lg font-medium hover:text-primary">Home</Link>
                <Link to="/clubs" className="text-lg font-medium hover:text-primary">Clubs</Link>
                <Link to="/events" className="text-lg font-medium hover:text-primary">Events</Link>
                <Link to="/discover" className="text-lg font-medium hover:text-primary">Discover</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-semibold">
              U
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              UniConnect
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/clubs" className="font-medium hover:text-primary transition-colors">Clubs</Link>
          <Link to="/events" className="font-medium hover:text-primary transition-colors">Events</Link>
          <Link to="/discover" className="font-medium hover:text-primary transition-colors">Discover</Link>
        </nav>

        <div className="flex items-center gap-3">
          {isSearchVisible ? (
            <div className="relative animate-fade-in">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="w-[200px] rounded-full bg-secondary/50 px-9 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                autoFocus
                onBlur={() => setIsSearchVisible(false)}
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full rounded-l-none"
                onClick={() => setIsSearchVisible(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchVisible(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Messages</span>
          </Button>
          
          <Link to="/profile">
            <Avatar className="h-8 w-8 ring-2 ring-primary/20">
              <AvatarImage src="https://picsum.photos/id/100/200" alt="User" />
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
