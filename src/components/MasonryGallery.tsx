"use client";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { ImageZoom } from "@/components/ui/kibo-ui/image-zoom"; // adjust as needed
import Image from "next/image";

export const MasonryGallery = ({ images }: { images: string[] }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          className="w-full mb-4"
          style={{ display: "block" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.1, delay: idx * 0.01 }}
        >
          <ImageZoom>
            <Image
              alt={`gallery-img-${idx}`}
              src={src}
              width={1200} // You can tweak width/height for your use case
              height={800}
              unoptimized // Remove if you want Next.js image optimization
              className="w-full h-auto max-w-full"
              style={{ display: "block" }}
            />
          </ImageZoom>
        </motion.div>
      ))}
    </Masonry>
  );
};
