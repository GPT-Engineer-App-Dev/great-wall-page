import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Discover China</h1>
          <p className="mt-4 text-xl">Explore the rich history and vibrant culture of China</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome to China</h2>
        <p className="text-lg text-center">
          China, a country with a rich history and vibrant culture, offers a unique blend of ancient traditions and modern advancements. From the Great Wall to the bustling streets of Beijing, China is a land of contrasts and wonders.
        </p>
      </section>

      {/* Key Highlights Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>History</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Discover the rich history of China, from ancient dynasties to modern times.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experience the diverse and vibrant culture of China, including festivals, art, and traditions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cuisine</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Savor the unique flavors of Chinese cuisine, from street food to gourmet dishes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Landmarks</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore famous landmarks such as the Great Wall, the Forbidden City, and more.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Image Gallery</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img width="600" height="400" src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover" />
            </CarouselItem>
            <CarouselItem>
              <img width="600" height="400" src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover" />
            </CarouselItem>
            <CarouselItem>
              <img width="600" height="400" src="/placeholder.svg" alt="placeholder" className="mx-auto rounded-xl object-cover" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Discover China. All rights reserved.</p>
          <div className="mt-2">
            <Badge variant="outline">Privacy Policy</Badge>
            <Badge variant="outline" className="ml-2">Terms of Service</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;