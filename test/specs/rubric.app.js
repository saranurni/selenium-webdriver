describe("Rubric App", function () {
  it("Checks title", async function () {
    // Open page
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    // Find title and do assertion
    const title = $("h1");
    await expect(title).toHaveText("Rubric App");
  });

  it("adds scores correctly when different grids are being clicked", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    // Select different grids from the table
    const grid1 = $("//tr[1]/td[4]");
    const grid2 = $("//tr[2]/td[3]");
    const grid3 = $("//tr[3]/td[2]");

    grid1.click();
    grid2.click();
    grid3.click();

    // Assertion
    const score = $("#score");
    await expect(score).toHaveText("24");

    const percent = $("#percent");
    await expect(percent).toHaveText("80");
  });
});
