import { readFileSync } from 'fs';
import { join as pathJoin } from 'path';

export class EmailTemplates {
  public static SAMPLE = readFileSync(
    pathJoin(__dirname, 'sample.ejs'),
  ).toString();

  public static RESET_PASSWORD = readFileSync(
    pathJoin(__dirname, 'reset-password.ejs'),
  ).toString();

  public static EMAIL_RECOVERY = readFileSync(
    pathJoin(__dirname, 'email-recovery.ejs'),
  ).toString();

  public static CONFIRM_REGISTRATION = readFileSync(
    pathJoin(__dirname, 'confirm-registration.ejs'),
  ).toString();

  public static ROLE_ACCEPT = readFileSync(
    pathJoin(__dirname, 'user-role-accept.ejs'),
  ).toString();
}
