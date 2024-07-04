import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="container grid grid-cols-2 gap-4 py-10 md:grid-cols-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/badroom.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/image/gallery2.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/image/gallery.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/swiper1.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/image/gallery11.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/image/living.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/gallery14.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/image/gallery15.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/image/gallery12.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            src="/image/gallery7.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/image/gallery11.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/image/gallery3.jpg"
            alt=""
            className="h-auto max-w-full rounded-lg transition-all hover:scale-90"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
