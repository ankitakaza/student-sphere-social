
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

interface FilterBarProps {
  onFilterChange: (filter: string) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const filters = [
    { id: "all", name: "All" },
    { id: "academics", name: "Academics" },
    { id: "clubs", name: "Clubs" },
    { id: "events", name: "Events" },
    { id: "sports", name: "Sports" },
    { id: "announcements", name: "Announcements" }
  ];

  return (
    <div className="w-full overflow-x-auto py-2 mb-4">
      <div className="flex items-center gap-2 min-w-max">
        <div className="hidden md:block">
          {filters.map(filter => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "ghost"}
              size="sm"
              onClick={() => handleFilterChange(filter.id)}
              className="rounded-full"
            >
              {filter.name}
            </Button>
          ))}
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Filter By</DropdownMenuLabel>
            <DropdownMenuRadioGroup value={activeFilter} onValueChange={handleFilterChange}>
              {filters.map(filter => (
                <DropdownMenuRadioItem key={filter.id} value={filter.id}>
                  {filter.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default FilterBar;
