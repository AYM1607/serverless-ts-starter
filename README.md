# Serverless TypeScritp starter

A serverless starter that adds TypeScript syntax, serverless-offline, environment variables and unit test support. Based on the aws-nodejs-typescript template provided by the serverless framework.

[Serverless TypeScript starter](https://github.com/AYM1607/serverless-ts-starter) uses the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin, [serverless-offline](https://github.com/dherault/serverless-offline), [ts-loader](https://github.com/TypeStrong/ts-loader), [jest](https://github.com/facebook/jest) and [ts-jest](https://github.com/kulshekhar/ts-jest).

- **ES7 syntax in your handler functions**
    - Use `import`, `export`, `async` and `await`
- **Package your function using webpack**
- **Run API Gateway locally**
  - Use `serverless offline start`
- **Support for unit tests**
  - Run `npm test` to run your tests
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Automatic support for multiple handler files**
  - No need to add a new entry to your `webpack.config.js`
- **Add environment variables for your stages**

---

### Starter function

Here's the code for the sample function:

``` typescript
import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless TypeScript v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
      input: event,
    }, null, 2),
  };
}

const message = ({ time, ...rest }) => new Promise((resolve, _reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);
```

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To create a new Serverless project.

``` bash
$ serverless install --url https://github.com/AYM1607/serverless-ts-starter --name my-project
```

Enter the new directory

``` bash
$ cd my-project
```

Install the Node.js packages

``` bash
$ npm install
```

### Usage

To run unit tests on your local environment

``` bash
$ npm test
```

To run a function on your local environment

``` bash
$ serverless invoke local --function hello
```

To simulate API Gateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function hello
```

### Maintainers

Serverless TypeScript starter is maintained by Mariano Uvalle ([@AYM1607](https://github.com/AYM1607)).
