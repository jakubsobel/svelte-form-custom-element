<svelte:options tag="test-app" />

<script lang="ts">
  import "./components/form/Form.svelte";
</script>

<main
  class="min-h-screen	flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
>
  <div class="w-1/2 m-4">
    <test-form />
  </div>
</main>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
