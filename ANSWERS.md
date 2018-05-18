<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware is a common idiom that allows the developer to create a pipeline of functions to be fired repeatedly in response to events. In a web server, middleware can be invoked for each request. In a persistence library, middleware can be fired in response to item creation or modification. 

Sessions are one way to manage state over an http connection, which is stateless. Since each unique request made to a webserver must return the same response regardless of when it was sent or who sent it, developers have taken to saving files on the client's PC, which the client includes as part of their request (cookie session), or generating a token which is presented in the header of a request and validated by the server during the response (JWT session).

Bcrypt is a cryptography library which we have used to hash user passwords. It uses math principals to perform a one-way transformation on the plaintext password. When a user attempts to log in, we can perform the same operation on the password guess and compare it to the stored password.

JWT, or json web token, is the current standard for token sessions. The jwt library creates these tokens by accepting a javascript object as the 'payload' and encrypting this object using a secret key as the salt. The user is given the token, and provides it in an HTTP header with subsequent requests. The server can decrypt the token, see the data inside, and make authorization decisions based on that data.

2.  What does bcrypt do in order to prevent attacks?

Bcrypt allows us to provide a "rounds" argument, which will perform the hashing function 2^rounds times. This makes the hash take significantly longer to create, and prevents attackers from quickly creating hundreds of thousands of hashes from potential passwords, and testing them against the database.

3.  What are the three parts of the JSON Web Token?

First is a header, which contains the type of token and the encryption algorithm. The second is the payload, which contains all the data the programmer decides to include. The last is a signature, which takes the base64-encoded header and payload, and signs them with the selected encryption algorithm. Each of these parts is base64-encoded and concatenated to form the token.