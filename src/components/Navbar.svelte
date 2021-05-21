<script>
  import CoinLimit from "./CoinLimit.svelte";
  import Select from "./Select.svelte";
</script>

<div class="topnav bg-gray-800 text-white flex justify-between item-center">
  <a target="_blank" class="" href="https://www.buymeacoffee.com/jatinhemnani01"
    >Donate/Buy Me A Coffee</a
  >
  <Select />
  <CoinLimit />
</div>

<style>
  * {
    box-sizing: border-box;
  }

  .topnav {
    overflow: hidden;
    /* background-color: #e9e9e9; */
  }

  .topnav a {
    float: left;
    display: block;
    /* color: black; */
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    background-color: #313131;
    /* color: black; */
  }
</style>
