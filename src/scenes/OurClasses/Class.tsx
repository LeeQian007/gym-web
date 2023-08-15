type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="inline-block mx-5 relative h-[380px] w-[450px]">
      <div className="flex flex-col absolute z-30 justify-center items-center h-[380px] w-[450px] text-white whitespace-normal p-5 bg-primary-500 opacity-0 hover:opacity-90 transition duration-500 z-[1]">
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt="image" />
    </li>
  );
};

export default Class;
