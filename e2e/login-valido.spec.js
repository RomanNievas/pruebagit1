import { test } from '@playwright/test';
import { irAlLogin, validarLoginUI, login, validarLoginExitoso, logout } from '../helpers/login';

test('debería loguear correctamente y permitir logout', async ({ page }) => {
  await irAlLogin(page);
  await validarLoginUI(page);

  await login(page, 'Admin', 'admin123');

  await validarLoginExitoso(page);

  await logout(page);
});
