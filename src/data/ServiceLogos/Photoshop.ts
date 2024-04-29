import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Photoshop: IBrand = {
  name: "Photoshop",
  categories: [BrandCategory.DESIGN],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Photoshop/Photoshop.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
