import { useFindPetsSuspense } from "../../openapi/queries/suspense";

export const SuspenseChild = () => {
  const { data, error } = useFindPetsSuspense({
    query: { tags: [], limit: 10 },
  });
  console.log({ error });

  // After Issue #181 fix: data is guaranteed to be defined
  // No need for undefined checks or optional chaining
  return (
    <ul>
      {data.map((pet) => (
        <li key={pet.id}>{pet.name}</li>
      ))}
    </ul>
  );
};
