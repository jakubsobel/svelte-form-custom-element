<script type="text/typescript">
  import { User, user } from "./store.js";

  const text: string = "Hello World";
  let error: string = "";

  function isFormValid(userData: User): boolean {
    if (!isRequiredFieldValid(userData.email)) {
      return false;
    }

    if (!isRequiredFieldValid(userData.phone)) {
      return false;
    }
    return true;
  }

  function isRequiredFieldValid(value: string) {
    return !!value;
  }

  function onSubmit(e: SubmitEvent) {
    const formData = new FormData(e.target as HTMLFormElement);

    const userData: User = {
      name: formData.get("name").toString(),
      email: formData.get("email").toString(),
      phone: formData.get("phone").toString(),
    };

    if (isFormValid(userData)) {
      error = "";
      user.set(userData);
    } else {
      error = "Form is not valid";
    }
  }
</script>

<div class="form-section">
  <h1>This is a form title</h1>
  <p class="description">This is a form description</p>
  <p>{error || text}</p>

  <form on:submit|preventDefault={onSubmit} class="content">
    <label for="name">Name</label>
    <input type="text" name="name" />
    <label for="email">E-mail</label>
    <input type="text" name="email" />
    <label for="phone">Phone</label>
    <input type="text" name="phone" />
    <button type="submit">Submit</button>
  </form>

  <p>
    {JSON.stringify($user, null, 2)}
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
  }
</style>
