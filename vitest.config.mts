import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        exclude: [
            "**/*/node_modules/**/*.spec.ts",
        ],
        include: ["src/**/*.spec.ts"],
        environment: "node",
    },
});
