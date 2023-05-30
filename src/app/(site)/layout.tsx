"use client";

import "./globals.css";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";

import RootStyleRegistry from "./emotion";

export const metadata = {
  title: "Web gatau",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useMantineTheme();
  // const [opened, setOpened] = useState(false);
  return (
    <html lang="en-US">
      <head>
        <title>Next.js + Mantine</title>
      </head>
      <body>
        <RootStyleRegistry>
          <AppShell
            layout="alt"
            styles={{
              main: {
                background:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
          >
            {children}
          </AppShell>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
