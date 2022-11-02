// playwright.config.js
// @ts-check

import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    globalTimeout: 60000, // Maximum time the whole test suite can run,
    timeout: 60000, // Timeout for each test
    // For browser actions
    use: {
        actionTimeout: 60000,
        navigationTimeout: 60000
    },

    // For expect calls
    expect: {
        timeout: 60000,
    }
};

export default config;

