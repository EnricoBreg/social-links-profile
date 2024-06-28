import { Link } from "@chakra-ui/react";

const SignFooter = () => {
  return (
    <div>
      Challenge by{" "}
      <Link
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        color="green.700"
      >
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link
        href="https://www.linkedin.com/in/enrico-bregoli"
        target="_blank"
        color="green.700"
      >
        Enrico Bregoli
      </Link>
      .
    </div>
  );
};

export default SignFooter;
