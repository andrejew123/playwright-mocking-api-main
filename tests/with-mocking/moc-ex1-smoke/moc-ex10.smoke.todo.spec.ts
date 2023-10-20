import { expect, test } from "@playwright/test";

test("playwright docs example @mock-ex11", async ({ page }) => {
  const expectedTitle = "💪 Mocked title value 😎";

  // 1. Example form official Playwright docs: https://playwright.dev/docs/mock
  // 2. API path to const apiPath
  // 3. Full response body object const articleJSON
  // 4. Changed value of title '💪 Mocked title value 😎'
  // 5. Use expectedTitle as reference

  const apiPath = "**/api/articles/57";
  const articleJSON = {
    id: 59,
    title: expectedTitle,
    body: "This is a common myth that assumes that testing is only a final activity that occurs after the development is completed. However, testing is an ongoing activity that occurs throughout the software development life cycle. Testing can be done at different levels, such as unit testing, integration testing, system testing, acceptance testing, etc. Testing can also be done at different stages, such as planning, design, implementation, deployment, etc. Testing can also be done in different ways, such as static testing, dynamic testing, manual testing, automated testing, etc.",
    user_id: 10,
    date: "2022-12-24T11:13:57Z",
    image: ".\\data\\images\\256\\sid-balachandran-bG4IyV4eH0Q-unsplash.jpg",
  };

  await page.route(apiPath, async (route) => {
    const json = articleJSON;
    await route.fulfill({ json });
  });
  // Go to the page
  // await page.goto('https://demo.playwright.dev/api-mocking');

  // Assert that the Strawberry fruit is visible
  // await expect(page.getByText('Strawberry')).toBeVisible();

  await page.goto("/article.html?id=57");
  const observedTitle = page.getByTestId("article-title");

  await expect(observedTitle).toHaveText(expectedTitle);
});
