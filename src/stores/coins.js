import { writable } from "svelte/store";
export const coins = writable([]);
export const loading = writable(false);
export const currency = writable("INR");
export const limit = writable(20);
