import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await expect(page.getByText('Forgot your password?')).toBeVisible();
  await expect(page.locator('form')).toContainText('Forgot your password?');
  await page.getByText('Forgot your password?').click();
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Reset Password');
  await expect(page.locator('label')).toContainText('Username');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin123');
  await expect(page.getByRole('button', { name: 'Reset Password' })).toBeVisible();
  await expect(page.locator('form')).toContainText('Reset Password');
  await page.getByRole('button', { name: 'Reset Password' }).click();
  await expect(page.getByRole('heading')).toContainText('Reset Password link sent successfully');
  await expect(page.locator('#app')).toContainText('Note:');
  await expect(page.locator('#app')).toContainText('If the email does not arrive, please contact your OrangeHRM Administrator.');
});