import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetAccounts = () => {
  const query = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const response = await client.api.accounts.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch accounts");
      }

      const { data } = await response.json();
      return data;
    },
  });
  return query;
};

//Flow :
// Gets client from lib/hono.ts
// sets query key as the collection accounts from the NeonDB
//Hits the API endpoint at /api/accounts/ and gets the response from the endpoint (the response being the whole records of type {id, name})
//Deconstructs and reads the data from response.json() and returns the data. Ultimately returns the query.
