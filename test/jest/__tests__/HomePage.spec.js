import { render, screen } from "@testing-library/vue";
import { QLayout, QPageContainer } from "quasar";
import userEvent from "@testing-library/user-event";
import HomePage from "@/pages/IndexPage.vue";

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
        plugins: [global.router, global.store],
      },
    });
    await global.router.isReady();
  };

  describe("Interactions", () => {
    it("increment counter when click on button", async () => {
      await setup();

      const button = screen.queryByTestId("button");

      await userEvent.click(button);

      expect(screen.queryByTestId("counter").textContent).toBe("1");
    });

    it("displays counter with initial value when page rendered", async () => {
      await setup();
      expect(screen.queryByTestId("counter").textContent).toBe("0");
    });
  });
});
