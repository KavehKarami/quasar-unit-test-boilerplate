import "@testing-library/jest-dom";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import { getActivePinia } from "pinia";
import Router from "@/router";
import Store from "@/stores";

installQuasarPlugin();
window.scrollTo = jest.fn();

global.router = Router();
global.store = Store();

// NOTE: reset all stores after each test
afterEach(() => {
  getActivePinia()._s.forEach((store) => store.$reset());
});
