import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Upload = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    profilePicture: '/placeholder.svg',
  });

  const [formData, setFormData] = useState({
    photo: null,
    caption: '',
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ photo: null, caption: '' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Upload a Photo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="photo">Choose a photo</Label>
                <Input id="photo" name="photo" type="file" accept="image/*" onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="caption">Caption</Label>
                <Textarea
                  id="caption"
                  name="caption"
                  placeholder="Write a caption for your photo..."
                  value={formData.caption}
                  onChange={handleInputChange}
                />
              </div>
              <Button type="submit">Upload Photo</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;