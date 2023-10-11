"use client";

import { SessionProvider } from "next-auth/react";

export const Context = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
