"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { isOpen, onClose, onOpen } = useNewAccount();

  return (
    <div>
      <Button onClick={onOpen}>Add an account</Button>
    </div>
  );
}
