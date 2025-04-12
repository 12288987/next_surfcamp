import { BlockRenderer } from "@/components/BlockRenderer";
import { HeroSection } from "@/components/blocks/HeroSection";
import { InfoBlock } from "@/components/blocks/InfoBlock";
import { ContentList } from "@/components/ContentList";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/BlogCard";

async function loader() {
  // // testing
  // const path = "/api/home-page";
  // const BASE_URL = "http://127.0.0.1:1337";
  // const url = new URL(path, BASE_URL);

  // const response = await fetch(url);
  // const data = await response.json();
  
  const data = await getHomePage();
  if(!data) notFound();
  console.log(data);
  return {...data.data};
}


export default async function HomeRoute() {
  const data = await loader();
  const blocks = await data?.blocks || [];
  console.log(data);
  return (
    <>
      <div>
        {/* test */}
        {/* <h1>{data.title}</h1>
        <p>{data.description}</p> */}
        <BlockRenderer blocks={blocks}/>
        <div className="container">
        <ContentList
  headline="Check out our latest articles"
  path="/api/articles"
  component={BlogCard}
/>
        </div>
      </div>
    </>
  );
}
