const puppeteer = require("puppeteer");

const STORYBOOK_URL = `${process.env.APP_HOST || "localhost"}:6006`;

export const runIntegrationTestSuite = async (suiteId, tests) => {
  jest.setTimeout(30000);

  describe(suiteId, () => {
    tests.forEach((test) => {
      it(test.id, async () =>
        runIntegrationTest(test.componentId, test.actions, test.windowSize)
      );
    });
  });
};

export const runIntegrationTest = async (componentId, actions, windowSize) => {
  await page.setViewport({
    width: windowSize[0] || 800,
    height: windowSize[1] || 600,
  });

  await page.goto(`http://${STORYBOOK_URL}/iframe.html?id=${componentId}`, {
    waitUntil: "networkidle0",
  });

  for (const action of actions) {
    await action(page);
  }

  await page.waitForTimeout(5000);

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
};
