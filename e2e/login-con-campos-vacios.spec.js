import { test } from '@playwright/test';
import { irAlLogin, validarLoginUI, clickLogin, validarErroresRequired } from '../helpers/login';

test('debería mostrar errores al intentar login con campos vacíos', async ({ page }) => {
  await irAlLogin(page);
  await validarLoginUI(page);

  await clickLogin(page);

  await validarErroresRequired(page);
});