import React from "react";
import { Product } from "../../../../db/schema";
import Image from "next/image";
import getBase64 from "../../../../utils/get64-base";

export default async function TableImage({
  photo,
}: {
  photo: Product["photo"];
}) {
  const blurData = await getBase64(photo);
  return (
    <Image
      src={photo}
      alt={"product phoot"}
      className='h-20 rounded-lg'
      placeholder='blur'
      blurDataURL={blurData}
      height={20}
      width={80}
    />
  );
}
