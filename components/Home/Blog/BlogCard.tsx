import Image from "next/image";
type props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: props) => {
  return (
    <div>
      <div>
        <Image
          src={image}
          alt="image"
          width={400}
          height={400}
          className="rounded=lg w-full h-full"
        />
      </div>
    </div>
  );
};

export default BlogCard;
