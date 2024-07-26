"use client";

import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";

export const SheetProvider = () => {
  const isMounted = useMountedState(); //To render only in client side

  if (!isMounted) return null;

  return (
    <>
      <NewAccountSheet />
    </>
  );
};

//const isMounted = useMountedState() is equivalent to:
//const [isMounted, setIsMounted] = useState(false);
// useEffect(() => {
//     setIsMounted(true);
// }, [])
