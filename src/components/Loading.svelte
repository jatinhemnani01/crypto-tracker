<div id="loading"><div class="loader" /></div>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  #loading {
    width: 600px;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    padding: 1em;
  }

  @keyframes load {
    0% {
      left: 0;
      width: 0px;
    }
    50% {
      left: 150px;
      width: 150px;
    }
    100% {
      left: 300px;
      width: 0px;
    }
  }

  .loader {
    position: relative;
    width: 300px;
    min-height: 8px;
  }

  .loader::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 300px;
    min-height: 8px;
    background-color: rgba(11, 11, 11, 0.5);
  }

  .loader::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 30px;
    min-height: 8px;
    background-color: orange;
    animation: load 1.5s linear infinite;
  }
</style>
