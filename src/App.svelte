<script>
  import { onMount } from "svelte";
  import Card from "./components/Card.svelte";
  import Heading from "./components/Heading.svelte";
  import { coins, loading } from "./stores/coins";

  async function getCoins(currency, limit) {
    $loading = true;
    let res = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=e21f86baf43f3392e3d2ebca1f918818&interval=1d,30d&convert=${currency}&per-page=${limit}`
    );
    if (res.ok) {
      let data = await res.json();
      $coins = data;
      $loading = false;
    }
    $loading = true;
  }
  onMount(() => {
    getCoins("INR", 20);
  });
</script>

<svelte:head>
  <link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
  />
</svelte:head>

<Heading />

<main>
  <!-- {#each $coins as item}
    <div>{item.name}</div>
    <div>
      {numToWords(item.market_cap)}
    </div>
  {/each} -->
  {#each $coins as item}
    <Card
      name={item.name}
      price={item.price}
      symmbol={item.id}
      market_cap={item.market_cap}
    />
  {/each}
</main>
