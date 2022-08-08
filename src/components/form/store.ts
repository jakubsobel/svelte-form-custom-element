import { Writable, writable } from "svelte/store";

export interface User {
  name: string;
  phone: string;
  email: string;
}

export const user: Writable<User> = writable({
  name: "",
  phone: "",
  email: "",
});
