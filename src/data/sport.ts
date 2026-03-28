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
    src: "https://github-production-user-asset-6210df.s3.amazonaws.com/2772503/570903845-2cd9e7ca-2caa-484c-8df3-e92be01180ee.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260328T213358Z&X-Amz-Expires=300&X-Amz-Signature=46905e4527f06097fcace081e327b5fac1fa0dce8ef54e956de232d68057ff92&X-Amz-SignedHeaders=host",
  },
  {
    alt: "Two martial artists training by the sea, with Farid performing a jumping kick",
    label: "Kish Island, Iran 2012",
    rotationClass: "sport-polaroid--right",
    src: "https://github-production-user-asset-6210df.s3.amazonaws.com/2772503/570903844-d99441ed-839f-415b-88d8-a2255e3ce678.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260328T213411Z&X-Amz-Expires=300&X-Amz-Signature=1496114e30bdede5b3d939727bccccd48c88309e9af99902a6d4cf41cc9500e6&X-Amz-SignedHeaders=host",
  },
];
