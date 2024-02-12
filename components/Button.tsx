import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && (
        <img src={icon} alt="icon" width={24} height={24} className="ml-2" />
      )}
      <label className="bold-16 whitespace-nowrap font-sans"> {title} </label>
    </button>
  );
};

export default Button;
