/* eslint-env detox/detox */

describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp({
      newInstance: true,
      permissions: { notifications: 'YES' },
      launchArgs: {
        disableLoopAnimations: true,
        skipWelcomeScreen: true,
        skipNotificationsScreen: true,
        skipBiometricScreen: true,
        disableDeviceLimit: true,
      }
    });
  });

  it('should show "Step One" at the begging', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });
});
