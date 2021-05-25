<script>
  import { numToWords } from "../utils/numToWord";
  import commaNumber from "comma-number";
  import { currency } from "../stores/coins";
  export let img_url;
  export let name;
  export let price;
  export let market_cap;
  export let rank;
  $: currencySymbol = "$";

  function getCurrencySymbol() {
    if ($currency === "USD") {
      currencySymbol = "$";
    } else if ($currency === "INR") {
      currencySymbol = "₹";
    } else if ($currency === "EUR") {
      currencySymbol = "€";
    }
    console.log("working");
  }
</script>

<tr class="bg-gray-700 text-white p-2 text-base hover:bg-gray-800">
  <td style="flex:.5">{rank}</td>
  <span><img class="w-7" src={img_url} alt={name} /></span>
  <td>{name}</td>
  {#if $currency === "USD"}
    <td>{(currencySymbol = "$")}{commaNumber(price)}</td>
  {:else if $currency === "INR"}
    <td>{(currencySymbol = "₹")}{commaNumber(price)}</td>
  {:else if $currency === "EUR"}
    <td>{(currencySymbol = "€")}{commaNumber(price)}</td>
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
