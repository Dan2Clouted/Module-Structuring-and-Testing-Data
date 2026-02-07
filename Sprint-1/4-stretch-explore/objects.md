## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

- I am getting a function log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

- console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

- Object

Answer the following questions:

What does `console` store?

- It stores different data such as debug ,error ,info , log, warn, etc.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

- 'console.log' :Accesses the log function on the console object so you can print output.
- 'console.assert' : Accesses the assert function on the console objects so you can report an error when the condition is false.
- '.': Dot notation is used to access a property or method on an object (e.g console.log gets log from console).
