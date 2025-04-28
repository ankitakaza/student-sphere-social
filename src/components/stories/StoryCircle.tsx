
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StoryCircleProps {
  id: string;
  name: string;
  image?: string;
  viewed: boolean;
  onView: (id: string) => void;
}

const StoryCircle = ({ id, name, image, viewed, onView }: StoryCircleProps) => {
  return (
    <div className="flex flex-col items-center gap-1" onClick={() => onView(id)}>
      <div className={`p-[2px] rounded-full ${viewed ? 'bg-muted' : 'bg-gradient-to-tr from-primary to-secondary'}`}>
        <div className="p-[2px] bg-background rounded-full">
          <Avatar className="h-16 w-16 border-2 border-background">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <span className="text-xs font-medium truncate w-16 text-center">{name}</span>
    </div>
  );
};

export default StoryCircle;
