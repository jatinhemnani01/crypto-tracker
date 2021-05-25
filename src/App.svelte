<script>
  import { onMount } from "svelte";
  import Card from "./components/Card.svelte";
  import Heading from "./components/Heading.svelte";
  import Loading from "./components/Loading.svelte";
  import Navbar from "./components/Navbar.svelte";
  import { coins, currency, limit } from "./stores/coins";
  import { loading } from "./stores/loading.js";
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
  }
  onMount(() => {
    getCoins($currency, $limit);
  });
</script>

<svelte:head>
  <link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
  />
</svelte:head>

<div style="padding:.5em; max-width: 700px; min-width: 700px;">
  <Navbar />
  <main>
    <Heading />

    {#if $loading}
      <Loading />
    {/if}
    {#each $coins as item}
      <Card
        img_url={item.logo_url}
        rank={item.rank}
        name={item.name}
        price={item.price}
        market_cap={item.market_cap}
      />
    {/each}
  </main>
</div>
