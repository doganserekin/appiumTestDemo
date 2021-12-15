import { remote } from "webdriverio";
import jasmine from "jasmine";

// eslint-disable-next-line no-undef
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
let driver;

beforeAll(async () => {
  driver = await remote({
    path: "/wd/hub",
    host: "0.0.0.0",
    port: 4723,
    capabilities: {
      platformName: "Android",
      platformVersion: "9.0", // must correct the stimuator
      deviceName: "emulator-5554", // must correct the stimuator
      // appium: { connectHardwareKeyboard: true }
      // automationName: "XCUITest",
      // app: "org.reactjs.native.example.LearnRnE2eTest", // this is for open specify app
      // udid: process.env.IOS_DEVICE_UUID,
      // xcodeOrgId: "xxx",
      // xcodeSigningId: "Apple Development"
    },
    logLevel: "debug",
  });
});

afterAll(async () => {
  if (driver) {
    await driver.deleteSession();
  }
});

it('Login test: valid case', async () => {
  await driver.$('~username').setValue("ekin");
  await driver.$('~password').setValue("123");

  await driver.$("~login").click();
  // await driver.pause(1000);

  await driver.$("id:android:id/button1").click(); // I detected it through Appium Inspector

  // const status = await driver.$("~loginstatus").getText().then(v => console.log("/////",v))

  const status = await driver.$("~loginstatus").getText()
  expect(status).toBe('success');
  
});


it('Login test: invalid case', async () => {
  // await driver.pause(1000);
  await driver.$('~username').setValue("alex");
  await driver.$('~password').setValue("321");

  await driver.$("~login").click();
  await driver.pause(100);

  // driver.$("~loginstatus").waitForDisplayed(1000);
  // const status = await driver.$("~loginstatus").getText().then(v => console.log("-----",v))

  const status = await driver.$("~loginstatus").getText()
  expect(status).toBe('fail');
});