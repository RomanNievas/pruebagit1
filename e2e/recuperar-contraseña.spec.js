import { test } from '@playwright/test';
import {
  irAlLogin,
  irARecuperarPassword,
  validarPantallaReset,
  enviarResetPassword,
  validarMensajeReset
} from '../helpers/login';

test('recuperar contraseña', async ({ page }) => {
  await irAlLogin(page);

  await irARecuperarPassword(page);

  await validarPantallaReset(page);

  await enviarResetPassword(page, 'Admin123');

  await validarMensajeReset(page);
});
