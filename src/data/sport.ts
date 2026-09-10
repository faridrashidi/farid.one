export type SportPhotoEntry = {
  alt: string;
  label: string;
  rotationClass: "sport-polaroid--left" | "sport-polaroid--right";
  src: string;
};

export const sportContent = {
  paragraphs: [
    "Karate has been one of the most defining parts of my life outside work. I hold a 2nd Dan black belt and have competed internationally, with multiple podium finishes including gold medals at the 8th and 9th AMA International Karate Open in England (2006 and 2007) and a bronze medal at the Budo-Nord Karate Open World Cup in Sweden (2005).",
    "Beyond karate, I enjoy staying active and sharp in different ways. I am a certified lifeguard, an avid tennis player, a competitive chess enthusiast, and I am passionate about social deduction and strategy games.",
  ],
};

export const sportPhotos: SportPhotoEntry[] = [
  {
    alt: "Farid performing a high kick in a white karate uniform by the sea",
    label: "Kish Island, Iran 2012",
    rotationClass: "sport-polaroid--left",
    src: "https://cdn.farid.one/farid/karate_high-kick.webp",
  },
  {
    alt: "Two martial artists training by the sea, with Farid performing a jumping kick",
    label: "Kish Island, Iran 2012",
    rotationClass: "sport-polaroid--right",
    src: "https://cdn.farid.one/farid/karate_flying-side-kick.webp",
  },
];
