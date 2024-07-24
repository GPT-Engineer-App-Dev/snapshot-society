import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = ({ user }) => {
  const suggestedUsers = [
    { name: 'Alice Green', profilePicture: '/placeholder.svg' },
    { name: 'Bob Brown', profilePicture: '/placeholder.svg' },
    { name: 'Carol White', profilePicture: '/placeholder.svg' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={user.profilePicture} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Suggested Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {suggestedUsers.map((suggestedUser, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={suggestedUser.profilePicture} alt={suggestedUser.name} />
                  <AvatarFallback>{suggestedUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="font-semibold">{suggestedUser.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;