import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PhotoFeed from './components/PhotoFeed';
import Sidebar from './components/Sidebar';

const Index = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: '/placeholder.svg',
    bio: 'Photography enthusiast'
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <PhotoFeed />
          </div>
          <div className="md:w-1/3">
            <Sidebar user={user} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;