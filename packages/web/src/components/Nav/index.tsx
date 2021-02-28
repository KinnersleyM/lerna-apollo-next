import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type PageTitleProps = {
  color: string;
  width?: string | number;
  children: ReactNode;
};

export const PageTitle = ({ color, width, children }: PageTitleProps) => (
  <Heading color={color} width={width}>
    {children}
  </Heading>
);

type NavSectionProps = {
  children: ReactNode;
};

export const NavSection = ({ children }: NavSectionProps) => (
  <Flex h="full" alignItems="center">
    {children}
  </Flex>
);

type NavbarProps = {
  children: ReactNode;
};

const Navbar = ({ children }: NavbarProps) => (
  <Flex
    as="nav"
    h={[16, 20]}
    alignItems="center"
    borderBottom="1px solid"
    borderColor="gray.200"
    justifyContent="space-between"
  >
    {children}
  </Flex>
);

export default Navbar;
