<script>
  let code = "";
</script>

<article class="clean-container">
  <header class="clean-header">
    <h1 class="clean-h1">Layout Designer</h1>
    <form>
      <label class="clean-label"
        >&#x25A3;
        <input
          id="horizontal-center"
          type="radio"
          name="layout"
          bind:group={code}
          value="
          display: flex;
          flex-direction: row;
          justify-content:center ;
          align-items: center;
        "
        />
      </label>
      <label class="clean-label"
        >&#x2195;
        <input
          id="vertical-stretch"
          type="radio"
          name="layout"
          bind:group={code}
          value="
        display: flex;
        flex-direction: column;
        justify-content:space-between ;
        align-items: center;
      "
        />
      </label>
      <label class="clean-label"
        >&#x2194;
        <input
          id="horizontal-stretch"
          type="radio"
          name="layout"
          bind:group={code}
          value="
        display: flex;
        flex-direction: row;
        justify-content:space-between ;
        align-items: center;
      "
        />
      </label>
    </form>
  </header>
  <main class="clean-main">
    <div class="block1" />
    <div class="block2" />
    <div class="block3" />
  </main>
  <footer class="clean-footer">
    {code}
  </footer>
</article>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root {
    --display: flex;
    --flex-direction: row;
    --justify-content: center;
    --align-items: center;
  }
  header {
    align-items: center;
    flex-direction: column;
    margin: 1vmax;
  }
  :is(label) {
    margin-inline: 1vmax;
  }
  :is(input) {
    accent-color: #363534;
    margin-block: 1vmax;
  }

  main {
    height: 60vh;
    display: var(--display);
    flex-direction: var(--flex-direction);
    justify-content: var(--justify-content);
    align-items: var(--align-items);
  }
  :is(footer, form, main) {
    padding: 1vmax;
    margin: 1vmax;
    border: 1px solid #363534;
  }
  :is(form, main, footer) {
    border-radius: 1vh;
  }
  :is(main, footer) {
    width: 60%;
    padding: 5vmax;
  }
  :is(.block1, .block2, .block3) {
    width: 100px;
    height: 50px;
    border: 1px solid #363534;
    padding: 1vmax;
    margin: 1vmax;
  }
  .block1 {
    background-color: crimson;
  }
  .block2 {
    background-color: cornsilk;
  }
  .block3 {
    background-color: aquamarine;
  }
  footer {
    position: relative;
    color: #363534;
    font-size: 1.5vw;
  }
  :root:has(#horizontal-center:checked) {
    --flex-direction: row;
    --justify-content: center;
    --align-items: center;
  }
  :root:has(#vertical-stretch:checked) {
    --flex-direction: column;
    --justify-content: space-between;
    --align-items: center;
  }
  :root:has(#horizontal-stretch:checked) {
    --flex-direction: row;
    --justify-content: space-between;
    --align-items: center;
  }
</style>
