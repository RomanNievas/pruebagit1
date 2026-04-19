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

// Click en login (sin credenciales)
export async function clickLogin(page) {
  await page.getByRole('button', { name: 'Login' }).click();
}

// Validar errores "Required"
export async function validarErroresRequired(page) {
  await expect(page.locator('text=Required')).toHaveCount(2);
}

// Validar login exitoso
export async function validarLoginExitoso(page) {
  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
  await expect(page.getByLabel('Sidepanel').getByRole('list')).toContainText('Admin');
}

// Logout
export async function logout(page) {
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'manda user' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
}

// Ir a recuperar contraseña
export async function irARecuperarPassword(page) {
  await page.getByText('Forgot your password?').click();
}

// Validar pantalla de reset
export async function validarPantallaReset(page) {
  await expect(page.getByRole('heading')).toContainText('Reset Password');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
}

// Enviar reset
export async function enviarResetPassword(page, username) {
  await page.fill('input[name="username"]', username);
  await page.getByRole('button', { name: 'Reset Password' }).click();
}

// Validar mensaje final
export async function validarMensajeReset(page) {
  await expect(page.getByRole('heading'))
    .toContainText('Reset Password link sent successfully');

  await expect(page.locator('#app')).toContainText('Note:');
  await expect(page.locator('#app')).toContainText(
    'If the email does not arrive, please contact your OrangeHRM Administrator.'
  );
}

