/*  -------------
  IMAGES FOR HEADER
    -------------  */

/*  -------------
  IMAGES FOR Country
    -------------  */

import USA from "./images/usa.jpg";
import Kuwait from "./images/kuwait.jpeg";
import Dubai from "./images/dubai.jpg";

const countries = [
  {
    name: "USA",
    image: USA,
  },
  {
    name: "Kuwait",
    image: Kuwait,
  },
  {
    name: "Dubai",
    image: Dubai,
  },
];

export default countries;

/*  -------------
  Social Links
    -------------  */

export const socialLinks = [
  { name: "Facebook", url: "https://facebook.com/example" },
  { name: "Twitter", url: "https://twitter.com/example" },
  { name: "LinkedIn", url: "https://linkedin.com/example" },
];

/*  -------------
  Messages
    -------------  */

export const Messages = [
  {
    image: "https://example.com/message1.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    position: "Managing Director",
  },
  {
    image: "https://example.com/message2.jpg",
    message:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
    position: "CEO",
  },
];
