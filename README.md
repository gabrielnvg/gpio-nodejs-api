# Installation
On project's directory, run:
```sh
$ npm install
```

# Usage
## Running the server
On project's directory, run:
```sh
$ npm start
```
It will be running at [http://localhost:3001/](http://localhost:3001/)

## Reading all GPIO ports
Go to [http://localhost:3001/readall](http://localhost:3001/readall)

## Reading a specific pin state
On the URL, write a GPIO pin number (pin's name number, not physical number).
* Ex: [http://localhost:3001/read/5](http://localhost:3001/write/5) = pin 5 value

## Writing a value to a pin
On the URL, write a GPIO pin's number (pin's name number, not physical number), its direction (1 for INPUT or 0 for OUTPUT) and its value (1 for HIGH or 0 for LOW).
* Ex: [http://localhost:3001/write/5/0/1](http://localhost:3001/write/5/0/1) = pin 5 as OUTPUT on HIGH

# Observations
* The port 3001 was chosen so it would not conflict with other Node.js apps such as Amazon's Alexa on Raspberry pi.
* This project uses Node.js' child_process to execute shell commands, so be sure to check if your user has GPIO permission.
