import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: '/placeholder.svg',
    bio: 'Photography enthusiast',
    photos: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
    ]
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="flex items-center space-x-8 p-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.profilePicture} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.bio}</p>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {user.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-full h-64 object-cover rounded-md" />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;