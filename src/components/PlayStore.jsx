import React from "react";

const PlayStore = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center  bg-gray-100 rounded-md shadow-md">
      {/* Left Side - Download Section */}
      <div className="flex flex-col items-center md:items-start p-6 md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
          Download Our App
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Experience the best of shopping with our app. Available on Google Play
          and the App Store.
        </p>
        <div className="flex space-x-4">
          <a href="#google-play" className="inline-block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12 md:h-14"
            />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center p-6">
        <img
          src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/64e5dc60307d99f279e0b9d0_examples-of-great-designs.jpg"
          alt="Download App"
          className="object-contain h-64 md:h-80 w-auto"
        />
      </div>
    </div>
  );
};

export default PlayStore;
