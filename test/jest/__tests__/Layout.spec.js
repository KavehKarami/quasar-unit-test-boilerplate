import { render, screen } from "@testing-library/vue";
import Router from "@/router";
import Store from "@/stores";

const router = Router();
const store = Store();

import MainLayout from "@/layouts/MainLayout.vue";

describe("MainLayout", () => {
  describe("Layout", () => {
    it("displays header title in the page", async () => {
      render(MainLayout, {
        global: {
          plugins: [router, store],
        },
      });

      expect(screen.queryByText("Quasar App")).toBeInTheDocument();
    });
  });
});
