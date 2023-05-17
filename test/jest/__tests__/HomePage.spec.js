import { render, screen } from "@testing-library/vue";
import Router from "@/router";
import Store from "@/stores";
import { QLayout, QPageContainer } from "quasar";

const router = Router();
const store = Store();

import HomePage from "@/pages/IndexPage.vue";
import userEvent from "@testing-library/user-event";

describe("HomePage", () => {
  const setup = async () => {
    const App = {
      components: {
        HomePage,
        QPageContainer,
        QLayout,
      },
      template: `<QLayout><QPageContainer><HomePage/></QPageContainer></QLayout>`,
    };
    render(App, {
      global: {
        plugins: [router, store],
      },
    });
    await router.isReady();
  };

  describe("Interactions", () => {
    it("displays counter with initial value when page rendered", async () => {
      await setup();
      expect(screen.queryByTestId("counter").textContent).toBe("0");
    });
    it("increment counter when click on button", async () => {
      await setup();

      const button = screen.queryByTestId("button");

      await userEvent.click(button);

      expect(screen.queryByTestId("counter").textContent).toBe("1");
    });
  });
});
