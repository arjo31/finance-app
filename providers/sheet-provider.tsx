"use client";

import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";

import { EditAccountSheet } from "@/features/accounts/components/edit-account-sheet";

export const SheetProvider = () => {
  const isMounted = useMountedState(); //To render only in client side

  if (!isMounted) return null;

  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  );
};

//const isMounted = useMountedState() is equivalent to:
//const [isMounted, setIsMounted] = useState(false);
// useEffect(() => {
//     setIsMounted(true);
// }, [])
