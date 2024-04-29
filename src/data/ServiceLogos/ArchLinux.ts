import { Author, getCredit } from "../credits";
import { IBrand } from "../type";
import { BrandCategory } from "../categories";

export const ArchLinux: IBrand = {
  name: "Arch Linux",
  categories: [BrandCategory.OS],
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/ArchLinux/ArchLinux.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
