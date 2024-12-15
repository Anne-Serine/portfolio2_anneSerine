import { Globe } from "lucide-react";
import Button from "../common/Buttons";

function PortfolioCard({
  image,
  title,
  description,
  icons,
  qr,
  githubUrl,
  livesiteUrl,
}) {
  return (
    <div className="max-w-[24rem]">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-t-xl h-[14rem] w-full object-cover "
        />
        <div className="h-12 w-full bg-gradient-to-t from-port-gray to-transparent absolute bottom-0 left-0"></div>
      </div>
      <div className="relative bg-port-gray p-6">
        <div className="flex -mt-10 mb-5">
          <div className="flex flex-1 gap-3 items-end">
            {icons.map((icon, index) => (
              <img
                src={icon}
                key={index}
                alt={`icon-${index}`}
                className="size-8 p-1 bg-port-yellow rounded-full"
              />
            ))}
          </div>

          <img src={qr} alt={`qr-${title}`} className="size-16" />
        </div>

        <div className="text-2xl mb-1 font-['Cormorant_Garamond'] uppercase">{title}</div>
        <p className="py-3">{description}</p>
      </div>
      <div className="flex w-full">
        <Button
          text="View repo"
          type="githubBtn"
          icon={
            <img
              src="/assets/Logos/github-original-dark.svg"
              className="size-7"
            />
          }
          url={githubUrl}
        />
        <Button
          text="Visit site"
          type="liveBtn"
          icon={<Globe size={30} color="#323330" />}
          url={livesiteUrl}
        />
      </div>
    </div>
  );
}

export default PortfolioCard;
