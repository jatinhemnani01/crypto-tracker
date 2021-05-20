<script>
  import { numToWords } from "../utils/numToWord";
  export let name;
  export let symmbol;
  export let price;
  export let market_cap;
</script>

<div class="flex p-1 w-full bg-gray-700 justify-around text-white item-center">
  <div class="m-4 flex-grow w-2 text-center">{name}</div>
  <div class="m-4 flex-grow w-2 text-center">{symmbol}</div>
  <div class="m-4 flex-grow w-2 text-center">{price}</div>
  <div class="m-4 flex-grow w-2 text-center">{numToWords(market_cap)}</div>
</div>

<!-- <tr class="flex justify-around bg-gray-700 text-white text-center ">
  <td colspan="1" class="text-center">{name}</td>
  <td colspan="1" class="text-center">{symmbol}</td>
  <td colspan="1" class="text-center">{price}</td>
  <td colspan="1" class="text-center">{numToWords(market_cap)}</td>
</tr> -->
