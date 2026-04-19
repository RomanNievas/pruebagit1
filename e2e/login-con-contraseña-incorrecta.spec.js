import { test, expect } from '@playwright/test';
import { irAlLogin, validarLoginUI, login } from '../helpers/login';

test('login con contraseña incorrecta', async function ({ page }) {
    await irAlLogin(page);
    await validarLoginUI(page);
    await login(page, 'Admin', 'admin1234567');

    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });