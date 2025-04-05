import Image from "next/image";
import { convertToWebP } from "@/utils/webpImages";

interface Achiever {
  imageUrl?: string;
  image?: File;
  email: string;
  name: string;
  batch: number;
  portfolio: string;
  internship: string;
  companyPosition: string;
  achievements: string[];
}

export default function AchievementCard({ achiever }: { achiever: Achiever }) {
  return (
    <div className="bg-[hsla(0,0%,100%,.079)] rounded-xl shadow-lg overflow-hidden w-[330px]">
      <div className="overflow-hidden">
        <Image
          width={500}
          height={500}
          src={convertToWebP(achiever.imageUrl || "")}
          alt={`${achiever.name}'s profile`}
          className="w-full h-[300px] object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-semibold text-center capitalize-first-letter">
          {achiever.name}
        </h3>
        <ul className="pl-5 list-disc list-outside">
          {achiever?.companyPosition && (
            <li className="mb-2 text-lg text-gray-600">
              {achiever.companyPosition}
            </li>
          )}
          {achiever.achievements.map((achievement, index) => (
            <li key={index} className="mb-2 text-lg text-gray-600">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
