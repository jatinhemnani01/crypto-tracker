<script>
  import { currency, loading, coins } from "../stores/coins.js";
  let selected;

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
</script>

<div class="select">
  <!-- svelte-ignore a11y-no-onchange -->
  <select
    name="slct"
    id="slct"
    bind:value={selected}
    on:change={() => {
      $currency = selected;
      getCoins($currency, 20);
    }}
  >
    <option value="INR">(₹) INR</option>
    <option value="USD" selected>($) USD</option>
    <option value="EUR">(€) EUR</option>
  </select>
</div>

<style>
  /* Reset Select */
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: #2c3e50;
    background-image: none;
  }
  /* Remove IE arrow */
  select::-ms-expand {
    display: none;
  }
  /* Custom Select */
  .select {
    position: relative;
    display: flex;
    width: 15em;
    height: 3em;
    line-height: 3;
    background: #2c3e50;
    overflow: hidden;
    border-radius: 0.25em;
  }
  select {
    flex: 1;
    padding: 0 0.5em;
    color: #fff;
    cursor: pointer;
  }
  /* Arrow */
  .select::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #34495e;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
  }
  /* Transition */
  .select:hover::after {
    color: #f39c12;
  }
</style>
