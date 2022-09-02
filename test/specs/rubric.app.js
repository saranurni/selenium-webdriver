describe("Rubric App", function () {
  it("Checks title", async function () {
    await browser.url("https://inspiring-wisp-f3b8d3.netlify.app/");

    const title = $("h1");

    await expect(title).toHaveText("Rubric App");
  });
});
