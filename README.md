# startup_example
An example startup project
that has been changed
and now it has been changed in through the github website
but I am trying to change the same line in vscode

From this assignment, I learned how to use the vscode extension effectively to clone, pull, push, commit and solve commit issues in vscode

I am making a website for people to connect on. Something that will stimulate their senses and keep them playing for hours on end. I am making a chess site. Simple as that. People who love to play chess, always want to play chess against others and test their skills. My website will produce a way for them to do so, through finding people similar in skill to the user for the user to play against. They would be incentivized to keep playing through their rank, and the public prestige associated. I know this will work and I am excited to bring this about.
![image](https://user-images.githubusercontent.com/98868942/215247622-8605dd0f-0402-4f3f-8de5-170a21627576.png)
Key Features: online play, direct peer to peer play, rankings.


http://3.131.150.188/
^url of webservice


Ssh -i ~/Documents/AWSkeypair/Journey.pem ubuntu@3.131.150.188 - command to ssh in


I learned that the bootstrap framework is awesome for standard webpages.
I also learned that the margin commond on a square goes in a circular order starting with the line towards the top from the middle. So if i want to change a box into a quarter circle around a point with the center in the bottom left i would use the command margin: 100% 100% 0 0;


I am learning more about how to actually apply the things that I am learning. Though I wish that the way we were taught focused more on each function instead of just hoping we will understand it.



JavaScript
Interpreted language
Hello World Example
-	‘Hello’ + ‘ ‘  + ‘world’;
To output the above string to the debugger console we would use
-	Console.log(‘hello’ + ‘ ‘ + ‘world’;
You can also write your own functions
-	Function join(a, b) {
o	Return a + ‘ ‘ + b;
-	}
You can comment your JavaScript with either line or block comments as per the norm.
While not technically required in most cases, it is considered good form to end JavaScript statements with a semicolon. Code block and their resulting scope are defined with curly braces
Use Codepen or your browser’s debugger to run javascript code. If you open the inspect option and select the console menu option, this will display a JavaScript interpreter where you can write and execute your code.
JavaScript Console
-	Provides interaction with the JavaScript runtime debugger consol. The console object provides functionality for outputting the value of text and objects, running timers, and counting iteration.
-	The basic usage of the console object is to output a log message
o	Console.log(‘hello’);
-	You can create formatted messages in the log parameter
o	Console.log(‘hello %s’, ‘world’);
-	You can even specify CSS declarations in order to style the log output
o	Console.log(‘%c JavaScript Demo’, ‘font-size:1.5em; color:green;’);
-	If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls
o	Console.time(‘demo time’);
o	Console.timeEnd(‘demo time’);
	Output = demo time: 438724329s;
-	To see how many times a block of code is called you can use the count function
o	Console.count(‘a’);
	This updates the variable a whenever the count function is come across

Adding JavaScript to HTML
-	You can insert JavaScript into HTML either by directly including it in the HTML within the content of a <script> element, or using by the src attribute of the script element to reference an external javascript file
o	<head>
	<script src=”javascript.js”></script>
o	</head>
-	Special attribute likc onclick automatically create event listeners for different DOM events that call tha code onctained in the attributes values. The code specified by the attribute value can be a simple call to a function or any javascript code.

JavaScript type and construct
-	Variables are declared using either the let or const keyword. Let allows you to change the value of the variable while const will cause an error if you attempt to change it.
o	Let x = 1;
o	Const y = 2;
-	JavaScript defines several primitive types
o	Null, Undefined, Boolean, number, BigInt, String, Symbol
	 
o	Of these types, Boolean, Number and Strin are the types commonly thought of when creating variables. However, variables may commonly refer to the Null or Undefined primitive.
-	JavaScript identifies several object types
o	Object, Function, Date, Array, Map, and JSON
	 
-	Common Operators
o	+, -, *, /, ===(equality)
-	Type Conversions
o	JavaScript is a weakly types language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in.
	 
o	Getting unexpected results is especially common when dealing with the equality operator(==). To remove the confusion, JavaScript introduced the strict equality(===) and inequality(!==) operators
Conditionals
-	JavaScript supports many common programming language conditional constructs. This includes if, else, and if else.
-	You can also use the ternary operator(?)
-	You can use Boolean operations in the expression to create complex predicates
-	Loops
o	Supports for, for in, for of, while, do while, and switch
	For in statement iterates over an object’s property names
•	 
	For arrays the object’s name is the array index
•	 
	For of statement iterates over an interable’s property values
•	 
-	Break and continue statements exist

JavaScript String
-	Strings are a primitive type in JavaScript. A string variable is specified by surrounding a sequence of characters with single quote, double quotes, or backticks.
o	The meaning of single and double quotes are equivalent, but the backtick defines a string literal that may contain JavaScript that is evaluated in place and concatenated into the string.
o	A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using \n
	 
-	Has Unicode support
-	String functions
o	Length, indexof, split, startsWith, endsWith, toLowerCase

Functions
-	In JavaScript, functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable
-	The basic syntax of a function begins with the function keyword followed by zero or more parameters and a body that may contain zero or more return statements
o	 
-	When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is undefined when the function executes. In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration
o	 
-	Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable
o	 
-	Creating, passing and returning functions
o	 
-	Inner Functions
o	Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details
o	 

JavaScript arrow function
-	Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up.
-	To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration.
-	The following two invocations of sort are equivalent
o	 
-	Besides being compact, arrow function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators
Return Values
-	Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function
o	 
This pointer
-	Arrow functions inherit the “this” pointer from the scope of where it is created. This makes what is known as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope.
-	 

JavaScript Array
-	JavaScript array objects represent a sequence of other objects and primitives
-	Functions: push, pop, slice, sort, values, find, forEach, reduce, map, filter, every some
o	 
JavaScript object and classes
-	A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type
-	Objects can be created with the new operator
-	Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function.
-	 
-	The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure
Object-literals
-	You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object
-	 
Object functions
-	Basic static functions all objects have
-	 
Constructor
-	Any function that returns an object is considered a constructor and can be invoked with the new operator
-	 
-	Because objects can have any type of property value you can create methods on the object as part of its encapsulation
-	 
This Pointer
-	Notice in the last example the use of the keyword this when we referred to the name property(this.name). The meaning of this depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object
Classes
-	You can use classes to define objects. Class declarations look similar to declaring an object but classes have an explicit constructor and assumed function declarations. The above person object would look like this as a class
o	 
-	You can make properties and functions of classes private by prefixing them with a #
o	 
Inheritance
-	Classes can be extended by using the extends keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the super function.
-	Any functions defined on the child that have the same name as the parent override the parent’s implementation. A parent’s function can be explicitly accessed using the super keyword
-	 

JSON
-	JavaScript Object Notation(JSON) provides a simple and effective way to share and store data. By design, JSON is easily convertible to and form JavaScript objects. This makes it a very convenient data format when working with web technologies
-	Format: A Json document contains one of the following data types:
o	 
-	Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types
-	Example
o	 
-	Converting to JavaScript
o	You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions
o	 
JavaScript Regular Expressions
-	Built right into JavaScript
-	You can create a regular expression using the class constructor or a regular expression literal
o	 
-	The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object’s test function
o	 
JavaScript rest and spread
-	Rest
o	Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number. You could write this using an array.
	 
o	However sometimes you don’t have an array to work with. In this case you could create one on the fly
	 
o	But JavaScript provides the rest syntax to make this easier. Think of it as a parameter that contains the rest of the parameters. To turn the last parameter of any function into a rest parameter you prefix it with three periods. You can then call it with any number of parameters and they are all automatically combined into an array
	 
o	You can only make the last parameter a rest parameter
-	Spread
o	Spread does the opposite of rest, it takes an object that is iterable and expands it into a function’s parameters. Consider the following
	 
JavaScript Destructuring
-	Destructuring is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects
-	Example
o	 
-	Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array
-	You can also combine multiple items from the original object using rest syntax
o	 
-	This works in a similar manner for objects. Except with arrays, the assignment of the associated value was assumed by the positions in the two arrays. When object Destructuring, you explicitly specify the properties you want to pull from the source object
o	 
-	You can also map the names to new variables instead of just using the original property names
o	 
-	Default values may also be provided for missing ones
o	 
-	Note that all of the above examples created new constant variables, but you can also use destructuring to reassign existing variables

JavaScript Exceptions
-	JavaScript supports exception handling using the try catch and throw syntax. An exception can be triggered whenever your code generates an exception using the throw keyword, or whenever an exception is generated by the JavaScript runtime
-	To catch a thrown exception, you wrap a code block with the try keyword, and follow the try block with a catch block. If within the try block, including any functions that block calls, an exception is thrown then all of the code after the throw is ignored, the call stack is unwound, and the catch block is called
-	In addition to a catch block you can specify a finally block that is always called whenever the try block is exited regardless if an exception was ever thrown
o	 
Fallbacks
-	The fallback pattern is commonly implemented using exception handling. To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block
Scope
-	Scope is define as the variables that are visible in the current context of execution. JavaScript has four different types of scope:
o	Global – Visible to all code
o	Module – Visible to all code running in a module
o	Function – Visible within a function
o	Block – Visible within a block of code delimited by curly braces
-	Var is bad
-	This
o	The keyword this represents a variable that points to an object that contains the context within the scope of the currently executing line of code
o	The this variable is automatically declared and you can reference this anywhere in a JavaScipt program. Because the value of this depends upon the context in which it is referenced, there are three different context that this can refer to:
	Global – When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser’s window object
	Function – When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running this JavaScript strict mode, a global function’s this variable is undefined instead of globalThis.
	Object – When this is referenced in a object it refers to the object
•	 
•	The above results in
•	 
Closure
-	A closure is defined as a function and its surrounding state. That means whatever variables are accessible when a function is created are available inside of that function
-	Here is an example of a function that is created as part of an object. That means that function has access to the object’s this pointer
o	 
-	Arrow functions are a bit different because they inherit the this pointer of their creation context. So if we change our previous example to return an arrow function, then this pointer at the time of creation will be globalThis
o	 
-	However, if we make function in our object that returns an arrow function then the this pointer will be the object’s this pointer since that was the active context at the time the arrow function was created
o	 
JavaScript Modules
-	JavaScript modules allow for the partitioning and sharing of code. Node.js, a server side JavaScript execution application, introduced the concept of modules in order to support the importing of packages of JavaScript from third party providers
-	Node.js modules are called CommonJS modules, and JavaScript modules are called ES modules
-	Because modules create a file based scope for the code they represent, you must explicity export the objects that you want to be visible outside the module. For example, here is a simple module that exports a function that displays an alert
o	 
-	You can import the module’s exported function into another module using the import keyword
o	 
-	When you use CommonJS modules the Node.js runtime treats all JavaScript as if it were modules and so it works seamlessly.
-	When you use ES modules in the browser, via HTML script references, things get a little more complicated. The key thing to understand is that modules can only be called from other modules. You cannot import a module object into a globally scoped JavaScript file.
-	From the HTML you can differentiate that you are using a ES module by including the type of module in the script element. You can then import and use other modules and even make a module’s object visible in the global scope.
-	In the example below, we expose the alerDisplay imported function by attaching it to the global JavaScript window object so that it can then be called from the button onclick handler
o	 
-	Fortunately, when you use a web framework bundler, discussed in later instruction, to generate your web application distribution code, you don’t have to worry about differentiating between global JavaScript Files and JavaScript ES modules. The bundler will inject all the necessary syntax to connect your HTML to your modules.

Document Object Model
-	The Document Object Model(DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML
-	The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser’s debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering
o	 
-	For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top
o	 
Accessing the DOM
-	Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface.
-	The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element’s attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree
o	 
-	You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element’s text. You can even access a textual representation of an element’s HTML content with the innerHTML property
o	 
Modifying the DOM
-	The DOM supports the ability insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree
o	 
-	To delete elements call the removeChild function on the parent element
o	 
Injecting HTML
-	The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains
o	 
-	However directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can the make requests for sensitive data, monitor activity and steal credentials
-	Make sure that if you are injecting HTML that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.
Event Listeners
-	All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.
o	 
-	There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN(https://developer.mozilla.org/en-US/docs/Web/Events) . Here are a few of the more commonly used events
o	 
-	You can also add event listener directly in the HTML. For example, here is a onclick handler that is attached to a button
o	 

Promises
-	JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript Promise.
-	Because the executing is asynchronous, the promise object can be in one of three states at any given point in time
o	Pending – currently running asynchronously
o	Fulfilled – Completed successfully
o	Rejected – Failed to complete
-	You can create a Promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation.
-	We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code.
-	We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running parallel
o	 
-	Resolving and Rejecting
o	We need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject.
o	Calling resolve sets the promise to the fulfilled state and calling reject sets the promise to the rejected state
o	Consider the following coin toss promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting
	 
o	If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state
	 
o	If you the wait ten seconds, the state will either show as fulfilled or rejected
	 
-	Then, catch, finally
o	With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves.
o	This is done with functionality similar to exception handling. The promise object has three functions: then, catch and finally
	The then function is called if the promise is fulfilled
	The catch is called if the promise is rejected
	Finally is always called after all the processing is completed
o	Example of use
	 
-	The observer pattern
o	Promises are the standard way to do asynchronous processing in JavaScript, but ther are not the only way.
o	The Observer pattern, popularized by web programming frameworks such as Angular, use a model called Observer.
o	The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you the pass an execution object into.
o	This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution

JavaScript Async/await
-	JavaScript Promise objects are great for asynchronous execution, but as developer began to build larger systems with promises they started wanting more concise representation
-	This was provided with the introduction of the async/await syntax.
o	The await keyword wraps the execution of a promise and remove the need to chain functions
o	The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected
o	For example, if we have a function that returns a coin toss promise
	 
o	We can create equivalent executions with either a promise then/catch chain, or an wait with a try/catch block
	 
-	Async
o	One important restriction for working with await is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword
o	Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function
o	This can be shown here
	 
o	We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates
	 
-	Await
o	The async keyword declared that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise
o	Using the cow example
	 
Putting it all Together
-	You can see the benefit for async/await clearly by considering a case where multiple promises are required



  
  
  
  
  
  
  
  
  CSS(Cascading Style Sheets)
Converts the structure and content of HTML into a vibrant, responsive experience.
Focuses on helping the developer create complex renderings of dynamic content that is responsive to the actions of the user and the device the application is rendered on.
Functionally, CSS is primarily concerned with defining rulesets, or simply a rules.
-	A rule is comprised of a selector that selects the elements to apply the rule to, and one or more declarations that represent the property to style with the given property value

Associating CSS with HTML
-	There are three ways that you can associate CSS with HTML.
o	The first way is to use the style attribute of an HTML element and explicitly assign one or more declarations
o	The next way is to use the HTML style element to define CSS rules within the HTML document. The style element should appear in the head element of the document so that the rules apply to all elements of the document.
o	The final way to associate CSS is to use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link element must appear in the head element of the document
	This is the preferred way to define CSS
The Box Model
-	CSS defines everything as boxes. When you apply styles, you are applying them to a region of the display that is a rectangular box.
o	Withing an element’s box there are several internal boxes
	The innermost box holds the element’s content. This is where things like the text or image of an element is displayed.
	Next comes the padding. The padding will inherit things like the background color.
	After padding is the border, which has properties like color, thickness and line style.
	The final box is the margin. The margin is considered external to the actual styling of the box and therefore only represents whitespace
•	 
•	By default, the width and height of an element is defined by the width and height of the content box.
•	You can change the box-sizing CSS property from the default value of content-box to border-box in order to redefine the width and height to also include the padding and the border. This often makes it easier to style elements when their visual size matches their actual size.
CSS Selectors
-	The first step in understanding CSS is mastering how to select the elements that a CSS rule applies to.
-	For this we will use some example HTML to make the CSS from
o	 
-	To start things off, we want to make all elements in the document use a sans-serif font. We can do this by using an element name selector. By selecting the body element we will cascade our declaration down to all the children of the body
o	 
	We could use the wildcard element name selector (*) to select all elements
o	We can then use element name selectors to give a bottom border to the top level heading(h1), as well as modify the section elements to pop out with a gray background and some white space in the padding and margins
	 
Combinators
-	Next we want to change the color of the second level headings(h2) but we only want to do that within the sections for each department. To make that happen we can provide a descendant combinator that is defined with a space delimited list of values where each item in the list is a descendant of the previous item
o	So our selector would be all h2 elements that are descendants of section elements
-	There are other types of combinators that you can use
o	 
-	We can use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading
o	 
Class Selector
-	Our example html applies the class introduction to the first paragraph, and a class of summary applied to the final paragraph of each section
-	If we want to bold the summary paragraphs we would supply the class name summary prefixed with a period(.summary)
o	 
-	You can also combine the element name and class selectors to select all paragraphs with a class of summary
o	 
ID Selector
-	To use the ID selector you prefix the ID with the hash symbol (#).
o	 
Attribute Selector
-	Allow you to select elements based upon their attributes. You use an attribute selector to select any element with a given attribute(a[href]). You can also specify a required value for an attribute (a[href=”./fish.pgn”]) in order for the selector to match
o	 
Pseudo Selector
-	CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states and attributes.
o	 
-	More about pseudo selectors
o	https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

CSS Declarations
-	Specify a property and value to assign when the rule selector matches one or more elements. There are legions of possible properties defined for modifying the style of an HTML document
o	 
o	 
Units
-	You can use a variety of units when defining the size of a CSS property.
o	 
Color
-	 

CSS Fonts
Font Families
-	Four major families of fonts: Serif, san-serif, fixed and symbol.
o	Serif
	Small stroke attached to the ends of a character’s major strokes
	Serif fonts have the extra strokes, san-serif fonts do not.
o	Fixed
	Fixed fonts character all are the same size
o	Symbol
	Symbol fonts represent non-language characters such as arrows or emojis
Importing Fonts
-	In order to have the browser load a font you use the @font-face rule and provide the font name and source location
o	 
-	If you do not want to hose font files on your server, then you can load them from a font provider. Use an import statement for these
o	 
CSS Animation
-	You create CSS animations using the animation properties and defining keyframes for what the element should look like at different times in the animation
-	Example:
o	We have a paragraph of centered text and we want it to zoom in until its size is 20% of the view height
	 
o	To make this happen we specify that we are animating the selected elements by adding the animation-name property with a value of demo. This name refers to the name of the keyframes that we will specify in a minute
o	We also add an animation-duration property in order to specify that the animation should last for three seconds
	 
o	Now we are ready to create the keyframes. We don’t have to define what happens at every millisecond of the animation. Instead we only need to define the key points and CSS will generate a smooth transition to move from one keyframe to another.
o	We can do this with two frames that are designated with the keywords from and to
	 
o	It would look better if towards the end, the paragraph bounces out a little bigger than its final size. We can accommodate that by adding another key frame that happens 95 percent through the animation
	 

Responsive Design
Modern web applications are expected to run well on a large variety of computing devices. This includes everything from desktops, to mobile phones, to shopping kiosks, to care dashboards. The ability to reconfigure the interface so the application accommodates and takes advantage of the screen’s size and orientation is called responsive design
Display
-	The CSS display property allows you to change how an HTML element is displayed by the browser
-	 
Viewport Meta Tag
-	To make a browser not scale your website for smaller devices, include the meta tag in the head element of all your HTML pages.
o	 
Float
-	The float css property moves an element to the left or right of its container element and allows inline elements to wrap around it.
-	When the browser resizes, the text will flow around the floating element.
Media Queries
-	One of the main CSS features for creating responsive applications is the @media selector.
o	This selector dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change
o	We can use the @media selector to tell us which side of the screen is the longest. A media query takes one or more predicates separated by Boolean operators.
-	You can also use media queries to make entire pieces of your application disappear, or move to a different location
Grid and Flexbox
-	The final two responsive technologies that we want to discuss are Grid and Flexbox
-	These are both CSS display modes that automatically respond to screen sizes to position and resize their child elements
CSS Grid
-	The grid display layout is useful when you want to display a group of child elements in a responsive grid.
-	We can turn an element into a responsive grid by including a CSS display property with the value of grid on the container element. This tells the browser that all of the children of this element are to be displayed in a grid flow
-	The next property, grid-template-columns, specifies the layout of the grid columns.
o	In the given example, they want to repeatedly define each column to auto-fill the parent element’s width with children that are resized to a minimum of 300 pixels and a maximum of one equal fractional unity(1fr) of the grid width
	 
CSS Flexbox
-	The flex display layout is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes
-	Look at the example of a flex box in C:\Users\tiber\Winter 2023\CS260\CssIntro\Flex.txt
o	We make the body element into a responsive flexbox by including the CSS display property with the value of flex.
o	This tells the browser that all of the children of this element are to be displayed in a flex flow. We want our top level flexbox children to be column oriented and so we add the flex direction property with a value of column.
o	To get the division of space for the flexbox children correct we add the following flex properties to each of the children
	Header – flex: 0 80px – Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box
	Footer – flex: 0 30px – Like the header it will not grow and has a height of 30 pixels
	Main – flex: 1 – One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side
o	Now we just need to add CSS to the control and content areas represented by the two child section elements. We want the controls to have 25% of the space and the content to have the remaining. So we set the flex property value to 1 and 3 respectively. That means that the controls get one unit of space and the content gets three units of space. No matter how we resize things this ratio will responsively remain
-	Media Query
o	That completes our original design, but we also want to handle small screen sizes. To do this, we add some media queries that drop the header and footer if the viewport gets too short, and orients the main sections as rows if it gets too narrow.
o	To support the narrow screen(portrait mode), we include a media query that detects when we are in portrait orientation and sets the flex-direction of the main element to be column instead of row.
o	To handle making our header and footer disappear when the screen is too short to display them, we use a media query that triggers when our viewport height has a maximum value of 700 pixels. When that is true we change the display property for both the header and the footer to none so that they will be hidden. When that happens the main element becomes the only child and since it has a flex value of 1, it takes over everything
Debugging CSS
-	Put up the website and use the inspect option to see how the css code is effecting the html
CSS Frameworks
-	CSS frameworks provide functions and components that commonly appear in web applications
-	Tailwind
o	A new rising contender in the CSS framework space is Tailwind CSS and its associated component library Tailwind UI.
o	Tailwind takes a different approach than traditional CSS frameworks. Instead of using large, rich, CSS rulesets to compartmentalize styling and functionality, it uses smaller definitions that are applied specifically to individual HTML elements
-	Bootstrap
o	The reigning champion for CSS framework
o	Because it is so popular, Bootstrap defines the de facto look and feel of websites. This is great for user experience continuity but it makes it difficult for a website to grab the attention of new users
o	Getting Bootstrap
	You can integrate Bootstrap into your web applications simply by referencing the Bootstrap CSS files from their content delivery network. You then add the HTML link elements to your head element like this
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"rel="stylesheet"integrity="sha384rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"crossorigin="anonymous"/>
	If you are going to use Bootstrap components that require JavaScript, you will also need to include Bootstrap’s JavaScript module. You add this by putting the following at the end of your HTML body element
	<script src=https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js integrity="sha384 kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
	To include Bootstrap in your application using NPM you would run the following from your console
•	Npm install boostrap@5.2.3
o	The end numbers are the version
o	 
	Example of what it makes easy

  
  
  
  
  
  
  
  
  
  
  
 HTML
Hypertext Markup Language. All text is valid HTML
In order to provide structure to our text we need to introduce the concept of elements and their associated tag representation.
HTML elements are represented with enclosing tags that may enclose other element or text.
-	The paragraph element(<p></p>) designates that the text is a structural paragraph of text.
-	Tags are delimited with the less than and greater than symbols. A closing tag will also have a backslash before its name.
-	The head elements contains metadata about the page and the page title
-	The body element represents the content structure
-	The main element represents the main content structure, as opposed to things like headers, footers,asides, and navigation content.
o	This code makes a simple web page that says “Hello world”
	 
o	This creates a very simple webpage, and to change that we use CSS
Every HTML element may have attributes.
Attributes describe the specific details of the element.
-	The id attribute gives a unique ID to the element so that you can distinguish it from other elements
-	The class attribute designates the element as being classified into a named group of elements.
o	Attributes are written inside the element tag with a  name followed by an optional value.
	 
Hyperlinks
A hyperlink in HTML is represented with an anchor (a) element that has an attribute containing the address of the hyperlink reference(href).
-	 
 
Common HTML elements of the over 100 possible
 

 

You can include comments in your HTML files by starting the comment with <!—and ending it with 
HTML uses several reserved characters for defining its file format. If you want to use those characters in your content then you need to escape them using the entity syntax.
-	 

Rendering HTML
-	You can save any HTML file to your computer’s disk and then open the file using your browser.
-	You can also open the HTML file in VS Code and use the Live Server extension to display the HTML
-	Another easy way to play with HTML is to use a sandbox like CodePen.
HTML structure elements
-	There is a distinction between structure elements that are block vs inline
o	A block element is meant to be a distinct block in the flow of the content structure
o	An inline element is meant to be inline with the content flow of a block element
	In other words, inline elements do not disrupt the flow of a block elements content.
Elements for accepting the input of user data
-	 
Form Element
-	The main purpose of the form element is to submit the values of the inputs it contains. Before Javascript, this was essential. Javascript has greatly reduced the necessity of the form element, but it is often still used simply as a container
-	Here is an example of a simple form that submits the value of a textarea element
o	 
o	Pressing the submit button sends the following data to the web server. The browser generate the data by combining the textarea’s name attribute with the current value of the textarea.
	 
Input Element
-	The input element represents many different input types. You set the type of input with the type attribute
-	There are several different types to choose from.
o	 
-	In order to create an input you specify the desired type attribute along with any other attribute associated with that specific input.
o	 
-	Most input elements share some common attributes
o	 
Validating Input
-	Several of the input elements have validation built into them.
-	You can specify the required attribute on an input element to mark it as requiring a value before it can be submitted.
-	The pattern attribute exists on text, search, url, tel, email, and password inputs.
-	You should also have validation built into your JavaScript that checks input data to ensure everything is valid before submitting it
HTML media elements
-	The HTML elements that represent media include img, audio, video, svg, and canvas. The first three are simple references to an external file. The last two contain the code for render a visual image that can even be animated
External media
-	The media tags that reference external media all take a URL as an attribute.
-	Full path – a url that includes the protocol, domain name, and path to the file
-	Relative path – references a file that is served from the same location as the HTML page rendering the element.
Image
-	To include an image in your content you use the img element and specify the src attribute with the URL to the source image. In order to support accessibility, you should also include an alt attribute that describes the image
Audio
-	To include an audio file in your content you use the audio element and specify the src attribute with the URL to the source image. You can influde the controls attribute if you want the use to be able to control the audio playback
o	 
Video
-	To include a video in your content you use the video element and specify the src attribute with the URL to the source video. You can include the controls or autoplay attributes
-	Note that you may need to include the crossorigin=”anonymous” attribute if you are requesting files from a different domain than the one serving your content
Internal media
-	The internal media elements svg and canvas allow you to actually create images directly within your HTML
-	Scalable Vector Graphics(SVG)
o	An extremely powerful and widely supported way to render graphics inline in your HTML
	 
	Displays:
	 
-	Canvas
o	The canvas element was introduced to HTML in order to facilitate 2D drawing and animation
o	Same Red Dot Example
	 
 
