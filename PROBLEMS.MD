Dear Applicant,

as you already know is n8n a free and open, fair-code licensed Workflow Automation Tool. n8n utilizes nodes to enable users to create their workflows. A node is an entry point for retrieving data, a function to process data or an exit for sending data. The data process includes filtering, recomposing and changing data. There can be one or several nodes for an API, service or app. You can connect multiple nodes, which allows you to create simple and complex workflows with them intuitively.

We ask you to provide your thoughts on the following problems:

1. We are using Node.js to execute the workflows and its nodes. Sometimes, single executions of workflows may take hours if not days to complete. We want to offer the option to timeout workflow execution. Since Javascript, and Node.js accordingly, is single-threaded, how would you implement a timeout feature without letting the whole program crash?

2. We want to offer n8n as a SaaS product with thousands of concurrent users. Please create an overview of your system proposal and explain briefly to a non technical person how it works. What are the advantages and disadvantages of your system?

3. I'll use promises

- Use try catch to handle promise rejection avoiding 'uncaughtException' or 'unhandledRejection' errors and handle the errors that I expect to have on these functions
- Handle the errors first in my callback functions in callback style error handling
- Forward my errors to the middleware and have my error handling logic in the middleware

2. I didn't really understand this question, but gonna try:
   In my system proposal, there are public nodes or let's say global nodes, that are used as principal basic services in many other different nodes workflows, that are made with the idea in mind that they must be customisable, as we can create other nodes that are most complex from these public nodes, and there are private nodes that are used for more specific work; our nodes are like circles englobing other circles (nodes used by these bigger more complex nodes) the simpler the node the more reusabale it is, for creating
   more complex workflows.
