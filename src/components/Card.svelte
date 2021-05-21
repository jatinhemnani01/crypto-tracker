<script>
  import { numToWords } from "../utils/numToWord";
  import commaNumber from "comma-number";
  export let name;
  export let price;
  export let market_cap;
  export let rank;
</script>

<tr class="bg-gray-700 text-white p-2 text-base hover:bg-gray-800">
  <td style="flex:.5">{rank}</td>
  <td>{name}</td>
  <td>{commaNumber(price)}</td>
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
