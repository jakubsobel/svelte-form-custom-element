<script type="text/typescript">
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

<div class="form-section">
  <h1>This is a form title</h1>
  <p class="description">This is a form description</p>

  <section class="content">
    <label for="name">Name</label>
    <input type="text" name="name" bind:value={$name.value} />
    {#if $myForm.hasError("name.required")}
      <div class="error">Name is required</div>
    {/if}
    <label for="email">E-mail</label>
    <input type="text" name="email" bind:value={$email.value} />
    {#if $myForm.hasError("email.required")}
      <div class="error">E-mail is required</div>
    {/if}
    {#if $myForm.hasError("email.not_an_email")}
      <div class="error">Provide correct email</div>
    {/if}
    <label for="phone">Phone</label>
    <input type="text" name="phone" bind:value={$phone.value} />
    {#if $myForm.hasError("phone.required")}
      <div class="error">Phone is required</div>
    {/if}
    {#if $myForm.hasError("phone.pattern")}
      <div class="error">Provide correct phone</div>
    {/if}
    <button on:click={myForm.validate}>Submit</button>
  </section>

  <p>
    {JSON.stringify($myForm, null, 2)}
  </p>
</div>

<style type="text/scss">
  $red: red;
  $green: green;
  $blue: blue;

  .form-section {
    h1 {
      color: $green;
    }

    .description {
      color: $blue;
    }

    .error {
      color: $red;
    }
  }
</style>
