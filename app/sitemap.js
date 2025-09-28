// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://bahirlearn.vercel.app";

  return [
      {
        url: `${baseUrl}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
      },
      {
        url: `${baseUrl}/waitlist`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
      },
];
}
