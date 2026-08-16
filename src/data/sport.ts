export type SportPhotoEntry = {
  alt: string;
  label: string;
  rotationClass: "sport-polaroid--left" | "sport-polaroid--right";
  src: string;
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
