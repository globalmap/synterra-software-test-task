"use client"

import React from "react";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";

export default function OfflineBanner() {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className='bg-red-500 text-white p-2 text-center absolute top-1'>
      You are offline. Changes will be saved locally.
    </div>
  );
}
