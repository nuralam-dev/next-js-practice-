import Image from "next/image";
import React from "react";


type Props = {
  icon: string;
  title: string;
};

const SoftwareCard = ({ icon, title }: Props) => {
  return (
    <div className="bg-green-100 dark:bg-gray-800 p-8 rounded-2xl">
      <Image src={icon} alt="icon" width={50} height={50} />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
    </div>
  );
};

export default SoftwareCard;