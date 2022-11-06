import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h3>Welcome to Activity Module!</h3>
    </div>
  );
});
export const head: DocumentHead = {
  title: "Activity Module",
};
