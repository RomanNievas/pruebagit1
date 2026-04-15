import { expect } from '@playwright/test';

// Ir al login
export async function irAlLogin(page) {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}

// Validar UI
export async function validarLoginUI(page) {
  await expect(page.getByText('Username', { exact: true })).toBeVisible();
  await expect(page.getByText('Password', { exact: true })).toBeVisible();
  await expect(page.locator('form')).toContainText('Username');
  await expect(page.locator('form')).toContainText('Password');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
}

// Login
export async function login(page, username, password) {
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
}
