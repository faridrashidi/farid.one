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
    src: "https://pub-f16ebe9f1cc14a1c9c6f245c80da7dfe.r2.dev/karate/high-kick.webp",
  },
  {
    alt: "Two martial artists training by the sea, with Farid performing a jumping kick",
    label: "Kish Island, Iran 2012",
    rotationClass: "sport-polaroid--right",
    src: "https://pub-f16ebe9f1cc14a1c9c6f245c80da7dfe.r2.dev/karate/flying-side-kick.webp",
  },
];
