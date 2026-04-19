import { test, expect } from '@playwright/test';
import { irAlLogin, validarLoginUI, login } from '../helpers/login';

test('prueba', async ({ page }) => {
  await irAlLogin(page);
  await validarLoginUI(page);
  await login(page, 'roman', 'roman123');

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});
