import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { BorderBeam } from "@/components/border-beam";

interface CustomCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

function CustomCard({ title, description, imageUrl }: CustomCardProps) {
  return (
    <div className="relative w-full min-w-0"> 
      <Card className="">
        <BorderBeam size={100} duration={10} delay={5} />
        <CardHeader className="pb-2 pt-4 px-4 sm:px-6 flex-col items-start">
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl uppercase font-bold">
            {title}
          </p>
          <small className="text-[10px] sm:text-xs md:text-sm lg:text-base text-default-500">
            {description}
          </small>
        </CardHeader>
        <CardBody className="overflow-visible p-2">
          <Image
            isZoomed
            alt="Card background"
            className="object-cover rounded-xl w-full h-auto"
            src={imageUrl}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default CustomCard;
