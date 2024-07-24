import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";

const PhotoFeed = () => {
  const posts = [
    {
      id: 1,
      user: { name: 'Jane Smith', profilePicture: '/placeholder.svg' },
      photo: '/placeholder.svg',
      caption: 'Beautiful sunset at the beach',
      likes: 42,
      comments: 5,
    },
    {
      id: 2,
      user: { name: 'Mike Johnson', profilePicture: '/placeholder.svg' },
      photo: '/placeholder.svg',
      caption: 'Exploring the city',
      likes: 28,
      comments: 3,
    },
  ];

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={post.user.profilePicture} alt={post.user.name} />
                <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="font-semibold">{post.user.name}</div>
            </div>
          </CardHeader>
          <CardContent>
            <img src={post.photo} alt="Post" className="w-full h-64 object-cover rounded-md" />
            <p className="mt-2">{post.caption}</p>
          </CardContent>
          <CardFooter>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Heart className="w-5 h-5 mr-1" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-5 h-5 mr-1" />
                {post.comments}
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PhotoFeed;