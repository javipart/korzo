import type { ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "@workos-inc/authkit-react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div />;
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}
