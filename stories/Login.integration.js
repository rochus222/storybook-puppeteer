import { runIntegrationTestSuite } from "../snapshotUtils";

runIntegrationTestSuite("Login", [
  {
    id: "Login looks ok",
    componentId: "login--default",
    actions: [],
    windowSize: [350, 400],
  },
  {
    id: "Login shows errors when form is submitted without credentials",
    componentId: "login--default",
    actions: [
      async (page) =>
        page.$$eval(".submit-button", (buttons) => buttons[0].click()),
    ],
    windowSize: [350, 400],
  },
  {
    id: "Login error when form is submitted without user name",
    componentId: "login--default",
    actions: [
      async (page) => {
        await page.focus("#password");
        await page.keyboard.type("abc");
      },
      async (page) =>
        page.$$eval(".submit-button", (buttons) => buttons[0].click()),
    ],
    windowSize: [350, 400],
  },
  {
    id: "Login error when form is submitted without password",
    componentId: "login--default",
    actions: [
      async (page) => {
        await page.focus("#login");
        await page.keyboard.type("abc");
      },
      async (page) =>
        page.$$eval(".submit-button", (buttons) => buttons[0].click()),
    ],
    windowSize: [350, 400],
  },
]);
