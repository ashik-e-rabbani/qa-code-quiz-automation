    const { test, expect } = require('@playwright/test');
    const conf = require('../../configs/testConfig');

    let apiServerIsAwake = false;

    test('Check API server is running.', async ({ request }) => {
        const response = await request.get(conf.usersAPI.serverURL);
    try {
        expect(response.ok()).toBeTruthy();
        const text = await response.text();
        expect(text).toMatch(conf.usersAPI.getMessage);
        apiServerIsAwake = true;
    } catch (error) {
        apiServerIsAwake = false;
    }

    });


    test('CREATE new user.', async ({ request }) => {
        test.skip(!apiServerIsAwake, 'Skipping because server is not running.');
    const response = await request.post(`${conf.usersAPI.serverURL}/user`, {
        data: conf.usersAPI.newUser,
    });

    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toMatch(conf.usersAPI.creationtMessage);
    });

    test('CHECK already existed user.', async ({ request }) => {
        test.skip(!apiServerIsAwake, 'Skipping because server is not running.');
    const response = await request.post(`${conf.usersAPI.serverURL}/user`, {
        data: conf.usersAPI.newUser,
    });

    const text = await response.text();
    expect(text).toMatch(conf.usersAPI.existingMessage);
    });

    test('UPDATE existing user.', async ({ request }) => {
        test.skip(!apiServerIsAwake, 'Skipping because server is not running.');
    const username =conf.usersAPI.newUser.username;

    const res = await request.put(`${conf.usersAPI.serverURL}/user?username=${username}`, {
        data: conf.usersAPI.updatedUser
    });

    expect(res.ok()).toBeTruthy();
    const text = await res.text();
    expect(text).toBe(conf.usersAPI.updateMessage);
    });


    test('DELETE existing user.', async ({ request }) => {
        test.skip(!apiServerIsAwake, 'Skipping because server is not running.');
        const username =conf.usersAPI.newUser.username;


    const res = await request.delete(`${conf.usersAPI.serverURL}/user?username=${username}`);
    expect(res.ok()).toBeTruthy();
    const text = await res.text();
    expect(text).toBe(conf.usersAPI.deleteMessage);
    });
