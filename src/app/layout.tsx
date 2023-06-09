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

import RootStyleRegistry from "./(site)/emotion";

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
        <title>Web sekolahku ❤️❤️❤️❤️❤️❤️❤️❤️</title>
      </head>
      <body className="text-black">
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
