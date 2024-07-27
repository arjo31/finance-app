import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.accounts.$post>;
type RequestType = InferRequestType<typeof client.api.accounts.$post>["json"];

export const useCreateAccount = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts.$post({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Account created");
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
    onError: () => {
      toast.error("Failed to create account");
    },
  });
  return mutation;
};

// queryClient.invalidateQueries meaning :
// Let's imagine you're playing with a toy box.
// Imagine you have a toy box full of toy cars. This toy box is like the "accounts" in your app.
// Now, let's say you just got a new toy car for your birthday. You want to put it in the toy box with all your other cars. This is like creating a new account.
// After you put the new car in the box, you want to make sure you can see all your cars, including the new one, when you look in the box.
// But here's the thing: sometimes, when you put a new toy in the box, the box doesn't automatically show you the new toy along with all the old ones. It's like the box is being a bit forgetful.
// So, what do we do? We give the box a little shake! This shake tells the box, "Hey, please check again and show me all the toys, including any new ones I just put in!"
// In your app, invalidateQueries is like giving that little shake to the toy box. It's telling your app, "Hey, I just put a new account in. Can you please check again and show me all the accounts, including the new one?"
// This way, when you look at your list of accounts in the app, you'll see the new account you just created along with all the old ones. Just like how shaking the toy box helps you see all your cars, including the new one you just added!
