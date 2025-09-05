const { test, expect } = require('@playwright/test');

const BASE_URL = 'http://localhost:3000';

// 1. Проверка доступа
test('сервис доступен', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/ping`);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.status).toBe('ok');
});

// 2. Баланс > 0
test('баланс всегда больше 0', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/balance`);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.accounts[0].balance.amount).toBeGreaterThan(0);
});

// 3. Создание платежа на 1 рубль
test('создание платежа', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/payments`, {
    data: { amount: 1 }
  });
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.amount).toBe(1);
  expect(body.status).toBe('created');
});

// 4. Исполнение платежа
test('исполнение платежа', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/payments/execute`, {
    data: { transaction: 'tx123' }
  });
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.transaction).toBe('tx123');
  expect(body.status).toBe('success');
});