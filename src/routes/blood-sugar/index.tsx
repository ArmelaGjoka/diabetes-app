import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h3>Welcome to Blood Sugar Module!</h3>
    </div>
  );
});
export const head: DocumentHead = {
  title: "Blood Sugar Module",
};