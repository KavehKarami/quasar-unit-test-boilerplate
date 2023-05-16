import "@testing-library/jest-dom";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";

installQuasarPlugin();
window.scrollTo = jest.fn();
