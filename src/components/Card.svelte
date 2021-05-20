<script>
  import { numToWords } from "../utils/numToWord";
  export let name;
  export let symmbol;
  export let price;
  export let market_cap;
</script>

<div class="flex p-1 w-full bg-gray-700 justify-around text-white item-center">
  <div class="m-4 text-left">{name}</div>
  <div class="m-4 ">{symmbol}</div>
  <div class="m-4">{price}</div>
  <div class="m-4">{numToWords(market_cap)}</div>
</div>
