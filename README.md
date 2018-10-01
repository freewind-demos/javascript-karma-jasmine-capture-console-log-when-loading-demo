JavaScript Karma Jasmine Capture "console.log" When Loading Demo
================================================================

In `hello.js` which will be tested, there is a line:

```
console.log('------------ loading hello.js -----------------');
```

I expect when running the test, I can see the log from somewhere, but I can't,
it seems only `console.log` inside tests will show.

Run test:

```
npm install
npm run test
```

The output:

```
> @ test /Users/freewind/workspace/javascript-karma-capture-console-log-when-loading-demo
> karma start karma.conf.js

01 10 2018 23:06:59.291:WARN [karma]: No captured browser, open http://localhost:9877/
01 10 2018 23:06:59.299:INFO [karma]: Karma v3.0.0 server started at http://0.0.0.0:9877/
01 10 2018 23:06:59.300:INFO [launcher]: Launching browser ChromeHeadless with unlimited concurrency
01 10 2018 23:06:59.309:INFO [launcher]: Starting browser ChromeHeadless
01 10 2018 23:06:59.715:INFO [HeadlessChrome 0.0.0 (Mac OS X 10.13.3)]: Connected on socket O9-CJOOGs9L_DnMiAAAA with id 44722210
LOG: '--------- console.log inside test ---------------'
HeadlessChrome 0.0.0 (Mac OS X 10.13.3): Executed 1 of 1 SUCCESS (0.003 secs / 0.004 secs)
TOTAL: 1 SUCCESS
```

Is there any way to capture the `console.log` in `hello.js`?
