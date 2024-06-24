import SocialLink from "./SocialLink";

export default interface User {
  id: number;
  name: string;
  location: string;
  biography: string;
  avatar_image: string;
  links: SocialLink[];
}
