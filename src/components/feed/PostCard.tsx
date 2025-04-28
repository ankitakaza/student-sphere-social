
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle, Share, Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PostCardProps {
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
}

const PostCard = ({
  id,
  author,
  content,
  image,
  timestamp,
  likes,
  comments,
  category,
}: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-card rounded-xl shadow-sm overflow-hidden border animate-fade-in">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{author.name}</div>
              <div className="text-xs text-muted-foreground">@{author.handle}</div>
            </div>
          </div>
          {category && (
            <Badge variant="secondary" className="mr-1">
              {category}
            </Badge>
          )}
        </div>
        <Link to={`/post/${id}`}>
          <p className="text-sm mb-3">{content}</p>
          {image && (
            <div className="rounded-md overflow-hidden mb-3">
              <img src={image} alt="Post content" className="w-full h-auto object-cover" />
            </div>
          )}
        </Link>
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" onClick={handleLike} className={`gap-1 ${isLiked ? 'text-primary' : ''}`}>
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-primary' : ''}`} />
              <span className="text-xs">{likesCount}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-1">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">{comments}</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Button variant="ghost" size="sm" onClick={() => setIsSaved(!isSaved)}>
              <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-primary text-primary' : ''}`} />
            </Button>
            <span className="text-xs ml-2">{timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
