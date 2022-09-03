describe("Rubric App", function () {
  it("Checks title", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const title = $("h1");

    await expect(title).toHaveText("Rubric App");
  });

  it("adds scores correctly when different grids are being clicked", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const grid1 = $("//tr[1]/td[3]");
    const grid2 = $("//tr[2]/td[2]");
    const grid3 = $("//tr[3]/td[1]");

    grid1.click();
    grid2.click();
    grid3.click();

    const score = $("#score");
    await expect(score).toHaveText("24");

    const percent = $("#percent");
    await expect(percent).toHaveText("80");
  });
});
