import axios from "axios";

export const uploadImage = async (image: FormDataEntryValue) => {
  const body = new FormData();
  body.append("image", image);

  const data = await axios.post(
    "https://api.imgbb.com/1/upload?key=47376dd515cc98b3bf4b564c2e6ba6b2",
    body
  );

  return data.data;
};
