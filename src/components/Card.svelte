<script>
  import { fly } from "svelte/transition";
  import { numToWords } from "../utils/numToWord";
  import commaNumber from "comma-number";
  import { currency } from "../stores/coins";
  export let img_url;
  export let name;
  export let price;
  export let market_cap;
  export let rank;
  export let h24;
  $: currencySymbol = "$";
</script>

<tr
  on:click
  transition:fly={{ y: 200, duration: 600, delay: 500 }}
  class="bg-gray-700 text-white p-2 text-base hover:bg-gray-800"
>
  <td style="flex:.5">{rank}</td>
  <span><img class="w-7" src={img_url} alt={name} /></span>
  <td>{name}</td>

  <!-- Checking Currency -->
  {#if $currency === "USD"}
    <td>{(currencySymbol = "$")}{commaNumber(price)}</td>
  {:else if $currency === "INR"}
    <td>{(currencySymbol = "₹")}{commaNumber(price)}</td>
  {:else if $currency === "EUR"}
    <td>{(currencySymbol = "€")}{commaNumber(price)}</td>
  {/if}
  <!-- Checking Currency -->

  {#if h24 < 0}
    <td class="text-red-500">{h24}%</td>
  {:else}
    <td class="text-green-500">{h24}%</td>
  {/if}

  <td>{numToWords(market_cap)}</td>
</tr>

<style>
  td {
    border: none;
    text-align: center;
    flex: 1;
  }

  tr {
    display: flex;
    flex-direction: row;
    word-break: break-all;
  }
</style>
