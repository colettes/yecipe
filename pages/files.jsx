import Image from "next/image";

export default function Files() {
  return (
    <div>
      <Image src="/DB.svg" width={50} height={50} layout="responsive" />
    </div>
  );
}
