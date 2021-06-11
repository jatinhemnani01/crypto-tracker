<script>
  import { onMount } from "svelte";
  import Card from "./components/Card.svelte";
  import Heading from "./components/Heading.svelte";
  import Loading from "./components/Loading.svelte";
  import Navbar from "./components/Navbar.svelte";
  import { coins, currency, limit } from "./stores/coins";
  import { loading } from "./stores/loading.js";

  let search = null;
  $: filteredList = $coins;
  async function getCoins(currency, limit) {
    $loading = true;
    let res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${limit}}&page=1&sparkline=false`
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

  function handleSearch() {
    filteredList = $coins.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.symbol.toLowerCase().includes(search)
    );
    console.log(filteredList);
    if (search.length <= 2 && filteredList.length >= 5) {
      getCoins($currency, $limit);
    }
  }
</script>

<svelte:head>
  <link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
  />
</svelte:head>

<div style="padding:.5em;">
  <Navbar />
  <main>
    <div class="flex p-2 m-2 justify-center bg-gray-700">
      <!-- svelte-ignore a11y-autofocus -->
      <input
        autofocus
        class="bg-red-300 text-black p-3 rounded font-lg w-60 placeholder-gray-800 font-medium"
        type="text"
        on:input={handleSearch}
        bind:value={search}
        placeholder="Search Coins"
      />
    </div>
    <Heading />

    {#if $loading}
      <Loading />
    {/if}
    {#each filteredList as item}
      <Card
        img_url={item.image}
        rank={item.market_cap_rank}
        name={item.name}
        price={item.current_price}
        market_cap={item.market_cap}
        h24={item.price_change_percentage_24h}
      />
    {/each}
  </main>
</div>
