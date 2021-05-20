<script>
  import { onMount } from "svelte";
  import { coins } from "./stores/coins";

  async function getCoins(currency, limit) {
    let res = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=e21f86baf43f3392e3d2ebca1f918818&interval=1d,30d&convert=${currency}&per-page=${limit}`
    );
    let data = await res.json();
    $coins = data;
    console.log(data);
  }

  onMount(() => {
    getCoins("INR", 20);
  });
</script>

{#each $coins as item}
  <div>{item.name}</div>
  <span>{item.price}</span>
{/each}
