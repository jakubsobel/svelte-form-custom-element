<script lang="ts">
  import Form from "./components/form/Form.svelte";
</script>

<main
  class="min-h-screen	flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
>
  <div class="w-1/2 m-4">
    <Form />
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
