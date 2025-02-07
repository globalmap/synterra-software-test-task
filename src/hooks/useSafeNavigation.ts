import { useRouter } from "next/navigation";
import { useOnlineStatus } from "./useOnlineStatus";

export function useSafeNavigation() {
  const router = useRouter();
  const isOnline = useOnlineStatus();

  const navigate = (path: string) => {
    if (isOnline) {
      router.push(path);
    } else {
      router.replace(path); // Запобігає помилкам при офлайн-режимі
    }
  };

  return { navigate };
}
