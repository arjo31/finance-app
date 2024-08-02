"use client";

import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { NewCategorySheet } from "@/features/categories/components/new-category-sheet";

import { EditAccountSheet } from "@/features/accounts/components/edit-account-sheet";
import { EditCategorySheet } from "@/features/categories/components/edit-category-sheet";

import { EditTransactionSheet } from "@/features/transactions/components/edit-transaction-sheet";
import { NewTransactionSheet } from "@/features/transactions/components/new-transaction-sheet";

export const SheetProvider = () => {
  const isMounted = useMountedState(); //To render only in client side

  if (!isMounted) return null;

  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />

      <NewCategorySheet />
      <EditCategorySheet />

      <NewTransactionSheet />
      <EditTransactionSheet />
    </>
  );
};
