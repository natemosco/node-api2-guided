# Routing Notes

> We write code for humans, optimize for readability
> &mdash; <cite> A developer I'd like to have on my team</cite>

## Terminology

Separation of Concerns answers \_"who should be doing this?"

## Routing

- use it to break up an application/api into sub applications
  -picking the code to executebased on URL and HTTP Method
- used for managing sub resources (the comments on a blog post)

to fix 'listen EADDRINUSE: address already in use:::4000' run the api on another port or stop any other server running on that port. Use 'ctrl + c' to stop a running server on a terminal.

Error 'server.listen is not a function', check that the server is exported correctly(mind the 's' in exports), also check that the import ('require') for the server is correct.

\_as sort of a sanity test, would it be safe to say because of server.use ("/api/hubs-router.js will have "/api/hubs/")
