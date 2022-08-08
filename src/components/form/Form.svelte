<script lang="ts">
  import { form, field } from "svelte-forms";
  import {
    required,
    email as emailValidator,
    pattern,
  } from "svelte-forms/validators";

  const name = field("name", "", [required()]);
  const email = field("email", "", [required(), emailValidator()]);
  const phone = field("phone", "", [required(), pattern(/\d+/)]);
  const myForm = form(name, email, phone);
</script>

<div
  class="p-8 shadow-md rounded-lg bg-slate-300 backdrop-blur-sm bg-opacity-75 flex flex-col justify-center"
>
  <h1 class="text-2xl text-center text-slate-800">This is a form title</h1>
  <p class="text-lg text-center text-slate-800">This is a form description</p>

  <section class="flex flex-col justify-center">
    <label class="mb-2" for="name">Name</label>
    <input
      class="p-2 rounded-lg"
      type="text"
      name="name"
      bind:value={$name.value}
    />
    <div class="mb-6">
      {#if $myForm.hasError("name.required")}
        <div class="text-xs text-red-500">Name is required</div>
      {/if}
    </div>
    <label class="mb-2" for="email">E-mail</label>
    <input
      class="p-2 rounded-lg"
      type="text"
      name="email"
      bind:value={$email.value}
    />
    <div class="mb-6">
      {#if $myForm.hasError("email.required")}
        <div class="text-xs text-red-500">E-mail is required</div>
      {/if}
      {#if $myForm.hasError("email.not_an_email")}
        <div class="text-xs text-red-500">Provide correct email</div>
      {/if}
    </div>
    <label class="mb-2" for="phone">Phone</label>
    <input
      class="p-2 rounded-lg"
      type="text"
      name="phone"
      bind:value={$phone.value}
    />
    <div class="mb-6">
      {#if $myForm.hasError("phone.required")}
        <div class="text-xs text-red-500">Phone is required</div>
      {/if}
      {#if $myForm.hasError("phone.pattern")}
        <div class="text-xs text-red-500">Provide correct phone</div>
      {/if}
    </div>
    <button
      on:click={myForm.validate}
      class="bg-violet-400 rounded-lg shadow-md p-2">Submit</button
    >
  </section>

  <pre class="bg-white p-4 mt-8 rounded-lg bg-opacity-75">{JSON.stringify(
      $myForm,
      null,
      2
    )}</pre>
</div>
