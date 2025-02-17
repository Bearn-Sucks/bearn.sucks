import HomeClient from "./components/HomeClient"; // Import the client component

// Server-side function to compute the initial slide
async function getInitialSlide() {
  return Math.floor(Math.random() * 3) + 1;
}

export default async function Home() {
  const initialSlide = await getInitialSlide();
  
  // Render the client component with the fetched data
  return <HomeClient initialSlide={initialSlide} />;
}
