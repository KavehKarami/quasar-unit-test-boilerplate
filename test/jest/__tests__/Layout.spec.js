import { render, screen } from "@testing-library/vue";
import MainLayout from "@/layouts/MainLayout.vue";

describe("MainLayout", () => {
  describe("Layout", () => {
    it("displays header title in the page", async () => {
      render(MainLayout, {
        global: {
          plugins: [global.router, global.store],
        },
      });

      expect(screen.queryByText("Quasar App")).toBeInTheDocument();
    });
  });
});
