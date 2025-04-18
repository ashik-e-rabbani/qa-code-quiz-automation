# Given

## QA Testing Quiz

### Scenario

The frontend team has developed a prototype login portal for an up and coming platform.
However, they have not implemented any testing yet and it is up to you to do so.

As the QA developer, what is tested and how it is tested is up to you.
Management simply asks that these tests provide as much evidence as possible of the platform's reliability.

### Notes

- Submission must include a link to a public fork/clone of this repository
- We typically use Jest for testing node.js/API related logic and Cypress for testing UI functionality, however, you are more than welcome to use any testing framework you desire so long as you are able to provide reasonable justification

---

## Here comes the proposed automation with Playwright

**Areas Covered**

1. Login page
2. Homepage (after a successful login)
3. End to End tests of Login and Homepage in a single flow.
4. Backend API tests of USERs mocked api.

*Note: *Before run make sure all servers are running and accessible.**

**How to run:**

Run all tests `npx playwright test`

Run all tests with UI `npx playwright test --headed`
