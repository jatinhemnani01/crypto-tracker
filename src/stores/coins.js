import { writable, derived } from "svelte/store";
export const coins = writable([]);
export const loading = writable(false);
export const currency = writable("USD");
export const limit = writable(50);
export const search = writable("");

export const filtered = derived([search, coins], ([$term, $items]) =>
  $items.filter(
    (x) =>
      x.name.toLowerCase().includes($term.toLowerCase()) ||
      x.symbol.toLowerCase().includes($term.toLowerCase())
  )
);
