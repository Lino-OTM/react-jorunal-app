import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "lino-otm",
  api_key: "884444962491157",
  api_secret: "yqserClBjfBWDK9mPe9js7P64L8",
  secure: true,
});

describe("Pruebas en fileUpload", () => {

  test("Debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.png");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    // console.log(url)
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".png", "");

    const cloudResp = await cloudinary.api.delete_resources([ "journal/" + imageId], {
        resource_type: "image"
    });
    // console.log({cloudResp})
  });

  test("Debe de retornar null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
