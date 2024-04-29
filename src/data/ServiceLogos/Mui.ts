import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Mui: IBrand = {
  name: "Mui",
  categories: [BrandCategory.DESIGN],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/Mui/Mui.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
