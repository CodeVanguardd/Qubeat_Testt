const questionCatalog = {
    HTML: {
        easy: [
            { prompt: 'Which tag creates a paragraph in HTML?', options: ['<p>', '<div>', '<span>', '<section>'], answer: 0 },
            { prompt: 'Which attribute adds a link destination?', options: ['src', 'href', 'alt', 'class'], answer: 1 },
            { prompt: 'Which tag creates a heading?', options: ['<h1>', '<head>', '<header>', '<hr>'], answer: 0 },
            { prompt: 'Which tag creates a line break?', options: ['<br>', '<hr>', '<lb>', '<break>'], answer: 0 },
            { prompt: 'Which tag makes text bold?', options: ['<b>', '<i>', '<u>', '<em>'], answer: 0 },
            { prompt: 'Which tag is used for an image?', options: ['<img>', '<pic>', '<image>', '<src>'], answer: 0 },
            { prompt: 'Which tag creates a list item?', options: ['<li>', '<ol>', '<ul>', '<item>'], answer: 0 },
            { prompt: 'Which tag creates a hyperlink?', options: ['<a>', '<link>', '<href>', '<url>'], answer: 0 },
            { prompt: 'Which attribute gives an image alternative text?', options: ['title', 'alt', 'href', 'src'], answer: 1 },
            { prompt: 'Which tag starts an HTML document?', options: ['<html>', '<body>', '<head>', '<meta>'], answer: 0 }
        ],
        medium: [
            { prompt: 'Which tag defines a section in a document?', options: ['<section>', '<div>', '<p>', '<article>'], answer: 0 },
            { prompt: 'Which tag is used for navigation links?', options: ['<nav>', '<footer>', '<aside>', '<main>'], answer: 0 },
            { prompt: 'Which attribute is used to identify one unique element?', options: ['class', 'id', 'type', 'name'], answer: 1 },
            { prompt: 'Which element is used to create a form?', options: ['<form>', '<input>', '<button>', '<label>'], answer: 0 },
            { prompt: 'Which element is a semantic container for independent content?', options: ['<article>', '<span>', '<br>', '<div>'], answer: 0 },
            { prompt: 'Which tag is used to define a table row?', options: ['<tr>', '<td>', '<th>', '<table>'], answer: 0 },
            { prompt: 'What does the <meta charset="UTF-8"> tag do?', options: ['Sets styling', 'Defines page title', 'Sets character encoding', 'Adds a script'], answer: 2 },
            { prompt: 'Which tag is commonly used for the main content area?', options: ['<main>', '<head>', '<footer>', '<nav>'], answer: 0 },
            { prompt: 'Which HTML element is used for a button?', options: ['<button>', '<input>', '<link>', '<a>'], answer: 0 },
            { prompt: 'Which attribute specifies the source of an embedded media file?', options: ['src', 'href', 'alt', 'class'], answer: 0 }
        ],
        hard: [
            { prompt: 'What does ARIA improve in HTML?', options: ['Accessibility', 'Animation', 'Colors', 'Layout'], answer: 0 },
            { prompt: 'Which element is best suited for page navigation?', options: ['<nav>', '<article>', '<span>', '<footer>'], answer: 0 },
            { prompt: 'What is the purpose of semantic HTML?', options: ['Better structure and accessibility', 'Faster loading', 'More colors', 'Less CPU use'], answer: 0 },
            { prompt: 'Which tag should wrap a page title?', options: ['<title>', '<h1>', '<header>', '<meta>'], answer: 0 },
            { prompt: 'What is the best use of <canvas> in HTML?', options: ['Drawing graphics', 'Creating forms', 'Linking pages', 'Formatting text'], answer: 0 },
            { prompt: 'Which HTML feature is used to store small data in the browser?', options: ['localStorage', 'canvas', 'svg', 'video'], answer: 0 },
            { prompt: 'Which element helps define a self-contained piece of content?', options: ['<article>', '<p>', '<div>', '<body>'], answer: 0 },
            { prompt: 'What does the <figure> element represent?', options: ['Illustration or media', 'A header', 'A form input', 'A hyperlink'], answer: 0 },
            { prompt: 'Which attribute is used to connect an input to a label?', options: ['for', 'class', 'id', 'src'], answer: 0 },
            { prompt: 'Why are semantic tags important?', options: ['They improve structure and accessibility', 'They replace CSS', 'They remove JavaScript', 'They speed up images'], answer: 0 }
        ]
    },
    CSS: {
        easy: [
            { prompt: 'Which property changes text color?', options: ['color', 'background', 'margin', 'border'], answer: 0 },
            { prompt: 'Which property changes the background color?', options: ['background-color', 'font-size', 'padding', 'display'], answer: 0 },
            { prompt: 'Which property adds space inside an element?', options: ['padding', 'margin', 'border', 'color'], answer: 0 },
            { prompt: 'Which property adds space outside an element?', options: ['margin', 'padding', 'width', 'height'], answer: 0 },
            { prompt: 'Which property changes font size?', options: ['font-size', 'background', 'color', 'border'], answer: 0 },
            { prompt: 'Which property creates a border?', options: ['border', 'display', 'padding', 'margin'], answer: 0 },
            { prompt: 'Which property makes an element bold?', options: ['font-weight', 'color', 'margin', 'padding'], answer: 0 },
            { prompt: 'Which property sets the element width?', options: ['width', 'height', 'padding', 'margin'], answer: 0 },
            { prompt: 'Which property sets the element height?', options: ['height', 'width', 'border', 'margin'], answer: 0 },
            { prompt: 'Which property changes the text style to italic?', options: ['font-style', 'font-weight', 'padding', 'color'], answer: 0 }
        ],
        medium: [
            { prompt: 'Which CSS property controls flexible layout?', options: ['display: flex', 'display: grid', 'position: absolute', 'float: left'], answer: 0 },
            { prompt: 'Which property positions an element relative to its normal flow?', options: ['position: relative', 'float: left', 'display: flex', 'margin'], answer: 0 },
            { prompt: 'Which unit is relative to the root font size?', options: ['rem', 'px', 'em', 'vh'], answer: 0 },
            { prompt: 'Which property controls text alignment?', options: ['text-align', 'font-size', 'background', 'border'], answer: 0 },
            { prompt: 'Which property makes an element overlap others?', options: ['z-index', 'padding', 'margin', 'color'], answer: 0 },
            { prompt: 'Which property sets the element to a grid container?', options: ['display: grid', 'display: flex', 'position: fixed', 'overflow: hidden'], answer: 0 },
            { prompt: 'Which property allows a child to grow in flex layout?', options: ['flex-grow', 'width', 'color', 'border'], answer: 0 },
            { prompt: 'Which property creates rounded corners?', options: ['border-radius', 'shadow', 'padding', 'margin'], answer: 0 },
            { prompt: 'Which property controls element visibility?', options: ['display', 'color', 'font-size', 'width'], answer: 0 },
            { prompt: 'Which selector targets an element with a specific id?', options: ['#id', '.class', 'element', 'div'], answer: 0 }
        ],
        hard: [
            { prompt: 'What does CSS specificity determine?', options: ['Which rule wins', 'Font size', 'Layout direction', 'Animation speed'], answer: 0 },
            { prompt: 'Which property creates transitions?', options: ['transition', 'animation', 'transform', 'filter'], answer: 0 },
            { prompt: 'Which selector targets the first child element?', options: [':first-child', ':hover', ':active', ':focus'], answer: 0 },
            { prompt: 'Which property can create a shadow effect?', options: ['box-shadow', 'color', 'border', 'padding'], answer: 0 },
            { prompt: 'What does the !important flag do?', options: ['Increases rule priority', 'Adds animation', 'Creates a flexbox', 'Changes text color'], answer: 0 },
            { prompt: 'Which media query targets small screens?', options: ['@media (max-width: 768px)', '@font-face', '@import', '@keyframes'], answer: 0 },
            { prompt: 'Which property can rotate an element?', options: ['transform: rotate()', 'position', 'padding', 'font-size'], answer: 0 },
            { prompt: 'Which feature allows reusable custom properties?', options: ['CSS variables', 'HTML forms', 'JavaScript DOM', 'SVG'], answer: 0 },
            { prompt: 'Which property controls animation timing?', options: ['animation-timing-function', 'font-weight', 'width', 'margin'], answer: 0 },
            { prompt: 'Which pseudo-class targets mouse hover?', options: [':hover', ':focus', ':active', ':visited'], answer: 0 }
        ]
    },
    Java: {
        easy: [
            { prompt: 'Which keyword declares a class in Java?', options: ['class', 'function', 'def', 'let'], answer: 0 },
            { prompt: 'Which keyword creates a variable?', options: ['int', 'var', 'let', 'function'], answer: 0 },
            { prompt: 'What symbol ends a Java statement?', options: [';', ':', '.', ','], answer: 0 },
            { prompt: 'Which keyword starts a method?', options: ['public', 'function', 'class', 'if'], answer: 0 },
            { prompt: 'Which keyword creates a conditional branch?', options: ['if', 'for', 'while', 'switch'], answer: 0 },
            { prompt: 'Which keyword starts a loop?', options: ['for', 'def', 'class', 'return'], answer: 0 },
            { prompt: 'Which keyword returns a value from a method?', options: ['return', 'break', 'continue', 'class'], answer: 0 },
            { prompt: 'What is the entry point of a Java program?', options: ['main', 'start', 'run', 'init'], answer: 0 },
            { prompt: 'Which symbol is used for comments?', options: ['//', '#', '<!--', '/*'], answer: 0 },
            { prompt: 'Which access modifier allows broad access?', options: ['public', 'private', 'protected', 'static'], answer: 0 }
        ],
        medium: [
            { prompt: 'What is a constructor in Java?', options: ['A special method to initialize an object', 'A loop', 'A variable', 'An interface'], answer: 0 },
            { prompt: 'What does inheritance allow?', options: ['A class to reuse behavior from another class', 'A loop to repeat', 'A method to return', 'A value to be constant'], answer: 0 },
            { prompt: 'What is an interface?', options: ['A contract for classes', 'A variable', 'A loop', 'A package'], answer: 0 },
            { prompt: 'What is encapsulation?', options: ['Hiding implementation details', 'Creating loops', 'Using inheritance', 'Writing comments'], answer: 0 },
            { prompt: 'What is the purpose of an array?', options: ['Store multiple values', 'Create classes', 'Handle exceptions', 'Control loops'], answer: 0 },
            { prompt: 'Which keyword represents an exception block?', options: ['try', 'class', 'public', 'for'], answer: 0 },
            { prompt: 'What is polymorphism?', options: ['Objects behaving differently through shared interfaces', 'A variable type', 'A package', 'A loop'], answer: 0 },
            { prompt: 'What is the purpose of the final keyword?', options: ['Prevent overriding or change', 'Create loops', 'Define packages', 'End the program'], answer: 0 },
            { prompt: 'Which keyword creates a constant?', options: ['final', 'const', 'static', 'void'], answer: 0 },
            { prompt: 'What is a package in Java?', options: ['A namespace for classes', 'A loop', 'A variable', 'An exception'], answer: 0 }
        ],
        hard: [
            { prompt: 'What are generics used for?', options: ['Type-safe reusable components', 'Comments', 'Loops', 'Packages'], answer: 0 },
            { prompt: 'What is a lambda expression?', options: ['An anonymous function', 'A loop', 'A class', 'An interface'], answer: 0 },
            { prompt: 'What does the Stream API help with?', options: ['Functional data processing', 'Memory allocation', 'Loop syntax', 'Thread creation'], answer: 0 },
            { prompt: 'What is concurrency?', options: ['Executing multiple tasks at the same time', 'Writing comments', 'Defining variables', 'Compiling classes'], answer: 0 },
            { prompt: 'What is a thread?', options: ['A lightweight execution unit', 'A variable', 'A package', 'A loop'], answer: 0 },
            { prompt: 'What is a deadlock?', options: ['Threads waiting on each other forever', 'A syntax error', 'A package', 'An interface'], answer: 0 },
            { prompt: 'What does the synchronized keyword do?', options: ['Controls access to shared resources', 'Creates classes', 'Adds comments', 'Starts loops'], answer: 0 },
            { prompt: 'What is a functional interface?', options: ['An interface with one abstract method', 'A class with many methods', 'A package', 'A variable'], answer: 0 },
            { prompt: 'What is the purpose of Optional?', options: ['Avoid null pointer issues', 'Create packages', 'Handle loops', 'Define classes'], answer: 0 },
            { prompt: 'What is reflection in Java?', options: ['Inspecting classes at runtime', 'Adding CSS', 'Generating HTML', 'Formatting text'], answer: 0 }
        ]
    },
    JavaScript: {
        easy: [
            { prompt: 'Which keyword displays text in the browser console?', options: ['console.log', 'print', 'echo', 'alert'], answer: 0 },
            { prompt: 'Which symbol starts a single-line comment in JavaScript?', options: ['//', '#', '<!--', '/*'], answer: 0 },
            { prompt: 'How do you declare a variable with block scope?', options: ['let', 'var', 'const', 'function'], answer: 0 },
            { prompt: 'Which keyword declares a constant?', options: ['const', 'let', 'var', 'define'], answer: 0 },
            { prompt: 'What does DOM stand for?', options: ['Document Object Model', 'Data Object Model', 'Dynamic Output Mode', 'Document Output Map'], answer: 0 },
            { prompt: 'Which event fires when a user clicks a button?', options: ['click', 'hover', 'load', 'submit'], answer: 0 },
            { prompt: 'Which operator adds two values?', options: ['+', '-', '*', '/'], answer: 0 },
            { prompt: 'What does NaN mean?', options: ['Not a Number', 'New a Number', 'Null and Nothing', 'Name as Number'], answer: 0 },
            { prompt: 'Which method converts a value to a string?', options: ['toString()', 'parseInt()', 'valueOf()', 'join()'], answer: 0 },
            { prompt: 'Which keyword starts a function declaration?', options: ['function', 'def', 'class', 'var'], answer: 0 }
        ],
        medium: [
            { prompt: 'What does === mean in JavaScript?', options: ['Strict equality', 'Assignment', 'Less than', 'Not equal'], answer: 0 },
            { prompt: 'Which method adds an item to the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], answer: 0 },
            { prompt: 'What is a callback function?', options: ['A function passed into another function', 'A loop', 'A variable', 'A class'], answer: 0 },
            { prompt: 'Which object holds key/value pairs?', options: ['Object', 'Array', 'String', 'Number'], answer: 0 },
            { prompt: 'Which keyword creates a constant reference?', options: ['const', 'let', 'var', 'static'], answer: 0 },
            { prompt: 'Which event waits for the document structure to be ready?', options: ['DOMContentLoaded', 'click', 'keydown', 'submit'], answer: 0 },
            { prompt: 'What does JSON stand for?', options: ['JavaScript Object Notation', 'Java Simple Object Notation', 'JavaScript Output Name', 'Java Source Open Name'], answer: 0 },
            { prompt: 'Which loop repeats while a condition is true?', options: ['while', 'for', 'switch', 'function'], answer: 0 },
            { prompt: 'What is hoisting?', options: ['Moving declarations to the top', 'Running code backwards', 'Compiling functions', 'Parsing values'], answer: 0 },
            { prompt: 'Which method selects one element by CSS selector?', options: ['querySelector()', 'getElementById()', 'getElementsByClassName()', 'createElement()'], answer: 0 }
        ],
        hard: [
            { prompt: 'What is a promise used for?', options: ['Handling asynchronous results', 'Creating loops', 'Declaring classes', 'Styling HTML'], answer: 0 },
            { prompt: 'What is event bubbling?', options: ['An event moving up through nested elements', 'A function return', 'A variable scope', 'A browser error'], answer: 0 },
            { prompt: 'What does async/await simplify?', options: ['Asynchronous code', 'CSS animations', 'HTML structure', 'Database queries'], answer: 0 },
            { prompt: 'Which array method creates a new array from a callback?', options: ['map()', 'forEach()', 'filter()', 'reduce()'], answer: 0 },
            { prompt: 'What is the spread operator?', options: ['...', '++', '--', '&&'], answer: 0 },
            { prompt: 'What is the type of typeof []?', options: ['object', 'array', 'function', 'string'], answer: 0 },
            { prompt: 'What is a closure?', options: ['A function that remembers its scope', 'A loop that ends', 'A promise state', 'A variable type'], answer: 0 },
            { prompt: 'Which keyword creates a class in JavaScript?', options: ['class', 'function', 'var', 'let'], answer: 0 },
            { prompt: 'What does DOM manipulation allow?', options: ['Change page content dynamically', 'Compile JavaScript', 'Style HTML with CSS', 'Run server code'], answer: 0 },
            { prompt: 'Which method reduces array values to one value?', options: ['reduce()', 'filter()', 'map()', 'slice()'], answer: 0 }
        ]
    },
    'C#': {
        easy: [
            { prompt: 'Which keyword declares a class in C#?', options: ['class', 'function', 'def', 'let'], answer: 0 },
            { prompt: 'Which keyword declares a variable?', options: ['var', 'let', 'function', 'class'], answer: 0 },
            { prompt: 'What ends a statement in C#?', options: [';', ':', '.', ','], answer: 0 },
            { prompt: 'Which keyword creates a method?', options: ['void', 'class', 'function', 'if'], answer: 0 },
            { prompt: 'Which keyword starts a conditional?', options: ['if', 'for', 'while', 'switch'], answer: 0 },
            { prompt: 'Which keyword creates a loop?', options: ['for', 'def', 'class', 'return'], answer: 0 },
            { prompt: 'Which keyword returns from a method?', options: ['return', 'break', 'continue', 'class'], answer: 0 },
            { prompt: 'What is the entry point of a C# console program?', options: ['Main', 'Start', 'Run', 'Init'], answer: 0 },
            { prompt: 'Which symbol starts a single-line comment?', options: ['//', '#', '<!--', '/*'], answer: 0 },
            { prompt: 'Which access modifier restricts visibility to the class only?', options: ['private', 'public', 'protected', 'internal'], answer: 0 }
        ],
        medium: [
            { prompt: 'What is a namespace used for?', options: ['Organizing code', 'Creating loops', 'Storing variables', 'Handling errors'], answer: 0 },
            { prompt: 'What is an exception?', options: ['An error that occurs at runtime', 'A loop', 'A variable', 'A class'], answer: 0 },
            { prompt: 'What does a constructor do?', options: ['Initializes an object', 'Defines a class', 'Declares a variable', 'Creates a loop'], answer: 0 },
            { prompt: 'What is inheritance?', options: ['A class deriving from another', 'A variable', 'A method', 'An event'], answer: 0 },
            { prompt: 'What is an interface?', options: ['A contract for behavior', 'A loop', 'A namespace', 'A literal'], answer: 0 },
            { prompt: 'Which keyword handles exceptions?', options: ['try', 'switch', 'class', 'for'], answer: 0 },
            { prompt: 'What is a property in C#?', options: ['A member exposing accessors', 'A loop', 'A variable', 'A constant'], answer: 0 },
            { prompt: 'What is the purpose of a list?', options: ['Store a collection of values', 'Create a class', 'Handle exceptions', 'Define loops'], answer: 0 },
            { prompt: 'What is async used for?', options: ['Non-blocking work', 'Looping', 'Classes', 'Properties'], answer: 0 },
            { prompt: 'What does await do?', options: ['Pauses execution until a task completes', 'Starts a loop', 'Declares a method', 'Creates a class'], answer: 0 }
        ],
        hard: [
            { prompt: 'What are generic types used for?', options: ['Reusable type-safe code', 'Comments', 'Variables', 'Namespaces'], answer: 0 },
            { prompt: 'What is LINQ used for?', options: ['Querying collections', 'Creating classes', 'Designing UIs', 'Defining loops'], answer: 0 },
            { prompt: 'What is a delegate?', options: ['A reference to a method', 'A namespace', 'A property', 'A loop'], answer: 0 },
            { prompt: 'What is dependency injection?', options: ['Providing dependencies from outside', 'Creating comments', 'Having loops', 'Writing HTML'], answer: 0 },
            { prompt: 'What is async/await mainly used for?', options: ['Asynchronous operations', 'Variable declarations', 'HTML rendering', 'Memory management'], answer: 0 },
            { prompt: 'What is a record in C#?', options: ['A lightweight immutable data type', 'A class that cannot be instantiated', 'A keyword for loops', 'A method modifier'], answer: 0 },
            { prompt: 'What is a nullable type?', options: ['A type that can be null', 'A keyword', 'A loop', 'An interface'], answer: 0 },
            { prompt: 'What does serialization do?', options: ['Convert objects to a format for storage or transfer', 'Create classes', 'Disable errors', 'Run code'], answer: 0 },
            { prompt: 'What is an extension method?', options: ['A static method that adds functionality to another type', 'A namespace', 'A loop', 'A record'], answer: 0 },
            { prompt: 'What does the IDisposable interface represent?', options: ['Resource cleanup', 'A loop', 'A class', 'A namespace'], answer: 0 }
        ]
    },
    'C++': {
        easy: [
            { prompt: 'Which header is commonly used for input/output?', options: ['<iostream>', '<stdio.h>', '<string>', '<vector>'], answer: 0 },
            { prompt: 'Which keyword starts a function definition?', options: ['int', 'class', 'for', 'if'], answer: 0 },
            { prompt: 'Which symbol ends a statement?', options: [';', ':', ',', '.'], answer: 0 },
            { prompt: 'What does main() represent?', options: ['Program entry point', 'A class', 'A loop', 'A variable'], answer: 0 },
            { prompt: 'Which keyword introduces a class?', options: ['class', 'function', 'struct', 'int'], answer: 0 },
            { prompt: 'Which keyword creates a conditional branch?', options: ['if', 'for', 'while', 'switch'], answer: 0 },
            { prompt: 'Which keyword creates a loop?', options: ['for', 'return', 'class', 'int'], answer: 0 },
            { prompt: 'What is cout used for?', options: ['Printing output', 'Reading input', 'Declaring classes', 'Creating loops'], answer: 0 },
            { prompt: 'What does cin read?', options: ['Input from the user', 'Output to the console', 'Strings only', 'Classes'], answer: 0 },
            { prompt: 'Which keyword returns a value from a function?', options: ['return', 'break', 'continue', 'class'], answer: 0 }
        ],
        medium: [
            { prompt: 'What is a pointer?', options: ['A variable that stores a memory address', 'A class', 'A loop', 'A function'], answer: 0 },
            { prompt: 'What is a reference?', options: ['An alias to an existing variable', 'A loop', 'An array', 'A class'], answer: 0 },
            { prompt: 'What is encapsulation?', options: ['Grouping data and behavior', 'Looping code', 'Creating arrays', 'Reading input'], answer: 0 },
            { prompt: 'What is inheritance?', options: ['A class deriving from another', 'A function', 'A pointer', 'An array'], answer: 0 },
            { prompt: 'What is polymorphism?', options: ['Different behavior through a common interface', 'A loop', 'A pointer', 'A type alias'], answer: 0 },
            { prompt: 'What is a constructor?', options: ['A special method for initialization', 'A variable', 'A pointer', 'A header file'], answer: 0 },
            { prompt: 'What is a template?', options: ['A generic blueprint for types', 'A class', 'A loop', 'A statement'], answer: 0 },
            { prompt: 'What is std::vector?', options: ['A dynamic array container', 'A pointer', 'An output stream', 'A keyword'], answer: 0 },
            { prompt: 'What is the purpose of namespaces?', options: ['Avoid name collisions', 'Print data', 'Create loops', 'Read input'], answer: 0 },
            { prompt: 'What does const mean?', options: ['The value cannot be changed', 'The variable is public', 'The function loops', 'The class inherits'], answer: 0 }
        ],
        hard: [
            { prompt: 'What is RAII?', options: ['Resource management via object lifetime', 'A pointer type', 'A loop', 'A template'], answer: 0 },
            { prompt: 'What is a smart pointer?', options: ['A pointer that manages memory automatically', 'A class', 'A function', 'A template'], answer: 0 },
            { prompt: 'What is move semantics?', options: ['Transferring ownership without copying', 'Creating classes', 'Looping values', 'Reading input'], answer: 0 },
            { prompt: 'What is a lambda expression?', options: ['An anonymous function', 'A loop', 'A pointer', 'A namespace'], answer: 0 },
            { prompt: 'What is multithreading?', options: ['Executing multiple threads concurrently', 'A syntax error', 'A variable', 'A header file'], answer: 0 },
            { prompt: 'What is an exception?', options: ['A runtime error condition', 'A keyword', 'A pointer', 'A class'], answer: 0 },
            { prompt: 'What does noexcept indicate?', options: ['A function does not throw exceptions', 'A loop', 'A class', 'A variable'], answer: 0 },
            { prompt: 'What is std::unique_ptr?', options: ['A smart pointer with exclusive ownership', 'A dynamic array', 'A loop', 'A template'], answer: 0 },
            { prompt: 'What is the purpose of std::move?', options: ['Transfer ownership of resources', 'Read input', 'Define classes', 'Start loops'], answer: 0 },
            { prompt: 'What is a destructor?', options: ['A method called when an object is destroyed', 'A variable declaration', 'A header file', 'A loop'], answer: 0 }
        ]
    },
    Python: {
        easy: [
            { prompt: 'Which keyword defines a function in Python?', options: ['def', 'function', 'class', 'let'], answer: 0 },
            { prompt: 'How do you print text in Python?', options: ['print()', 'echo()', 'console.log()', 'printf()'], answer: 0 },
            { prompt: 'Which symbol starts a comment?', options: ['#', '//', '<!--', '/*'], answer: 0 },
            { prompt: 'Which keyword starts a loop?', options: ['for', 'def', 'class', 'return'], answer: 0 },
            { prompt: 'Which keyword creates a conditional?', options: ['if', 'for', 'class', 'def'], answer: 0 },
            { prompt: 'What is a list in Python?', options: ['A collection of values', 'A function', 'A loop', 'A class'], answer: 0 },
            { prompt: 'Which data type stores text?', options: ['str', 'int', 'float', 'bool'], answer: 0 },
            { prompt: 'Which operator checks equality?', options: ['==', '=', '!=', '=>'], answer: 0 },
            { prompt: 'Which keyword defines a class?', options: ['class', 'def', 'for', 'if'], answer: 0 },
            { prompt: 'What does input() do?', options: ['Reads user input', 'Prints output', 'Creates loops', 'Defines classes'], answer: 0 }
        ],
        medium: [
            { prompt: 'What is a dictionary in Python?', options: ['A key-value store', 'A loop', 'A number', 'A function'], answer: 0 },
            { prompt: 'What is a tuple?', options: ['An immutable ordered sequence', 'A type of loop', 'A string', 'A function'], answer: 0 },
            { prompt: 'What does a function return?', options: ['A result value', 'A loop', 'A class', 'A variable'], answer: 0 },
            { prompt: 'What is a module?', options: ['A file containing Python code', 'A loop', 'A keyword', 'A data type'], answer: 0 },
            { prompt: 'What does import do?', options: ['Loads external code', 'Creates a loop', 'Creates a class', 'Writes a file'], answer: 0 },
            { prompt: 'What is a set?', options: ['An unordered collection of unique values', 'A dict', 'A string', 'A loop'], answer: 0 },
            { prompt: 'What is a lambda?', options: ['An anonymous function', 'A class', 'A module', 'A loop'], answer: 0 },
            { prompt: 'What is list comprehension?', options: ['A compact way to create lists', 'A keyword', 'A class', 'A type'], answer: 0 },
            { prompt: 'What do try/except handle?', options: ['Errors', 'Loops', 'Conditions', 'Classes'], answer: 0 },
            { prompt: 'What does range() produce?', options: ['A sequence of numbers', 'A string', 'A class', 'A dictionary'], answer: 0 }
        ],
        hard: [
            { prompt: 'What are decorators used for?', options: ['Modifying functions or classes', 'Creating loops', 'Writing comments', 'Defining variables'], answer: 0 },
            { prompt: 'What does async/await enable?', options: ['Asynchronous programming', 'String formatting', 'Input reading', 'Class creation'], answer: 0 },
            { prompt: 'What is a generator?', options: ['A function that yields values lazily', 'A loop', 'A class', 'A list'], answer: 0 },
            { prompt: 'What is a context manager?', options: ['An object that manages setup and cleanup', 'A variable', 'A function', 'A module'], answer: 0 },
            { prompt: 'What is multiprocessing?', options: ['Running multiple processes', 'Looping through lists', 'Creating comments', 'Reading input'], answer: 0 },
            { prompt: 'What is a closure?', options: ['A function that captures variables from its environment', 'A tuple', 'A loop', 'A class'], answer: 0 },
            { prompt: 'What is type hinting?', options: ['Annotating expected data types', 'Defining loops', 'Creating comments', 'Building classes'], answer: 0 },
            { prompt: 'What is monkey patching?', options: ['Changing behavior at runtime', 'Creating functions', 'Looping over data', 'Writing comments'], answer: 0 },
            { prompt: 'What is a virtual environment?', options: ['An isolated Python dependency environment', 'A class', 'A module', 'A loop'], answer: 0 },
            { prompt: 'What is a dataclass?', options: ['A concise way to create classes for data', 'A loop', 'A tuple', 'A function'], answer: 0 }
        ]
    },
    PHP: {
        easy: [
            { prompt: 'Which symbol starts a PHP tag?', options: ['<?php', '<php>', '<?', '<script>'], answer: 0 },
            { prompt: 'How do you echo output in PHP?', options: ['echo', 'print', 'console.log', 'printf'], answer: 0 },
            { prompt: 'Which symbol is used for variable names?', options: ['$', '@', '#', '&'], answer: 0 },
            { prompt: 'Which keyword defines a function?', options: ['function', 'def', 'class', 'let'], answer: 0 },
            { prompt: 'Which keyword is used for a conditional?', options: ['if', 'for', 'while', 'switch'], answer: 0 },
            { prompt: 'What is an array in PHP?', options: ['A collection of values', 'A loop', 'A class', 'A function'], answer: 0 },
            { prompt: 'What does foreach do?', options: ['Iterates over arrays', 'Defines a class', 'Reads input', 'Declares variables'], answer: 0 },
            { prompt: 'Which character ends a statement?', options: [';', ':', '.', ','], answer: 0 },
            { prompt: 'What is the purpose of $_GET?', options: ['Access URL query parameters', 'Create loops', 'Set variables', 'Handle files'], answer: 0 },
            { prompt: 'Which keyword starts a class?', options: ['class', 'function', 'if', 'echo'], answer: 0 }
        ],
        medium: [
            { prompt: 'What is a superglobal?', options: ['A built-in global variable', 'A class', 'A loop', 'A function'], answer: 0 },
            { prompt: 'What does include do?', options: ['Loads an external file', 'Creates a loop', 'Defines a variable', 'Handles errors'], answer: 0 },
            { prompt: 'What is the purpose of $_POST?', options: ['Read form submissions', 'Print output', 'Define classes', 'Create loops'], answer: 0 },
            { prompt: 'What is a session used for?', options: ['Store user state across requests', 'Print output', 'Define classes', 'Read files'], answer: 0 },
            { prompt: 'What is the purpose of a function parameter?', options: ['Pass input into a function', 'Create a loop', 'Create a class', 'Store data'], answer: 0 },
            { prompt: 'What is an associative array?', options: ['An array with named keys', 'A class', 'A loop', 'A function'], answer: 0 },
            { prompt: 'What does require do?', options: ['Loads a file and stops on failure', 'Creates a loop', 'Stores variables', 'Prints output'], answer: 0 },
            { prompt: 'What is an object in PHP?', options: ['An instance of a class', 'A function', 'A loop', 'A string'], answer: 0 },
            { prompt: 'What does namespace do?', options: ['Organizes code and avoids name conflicts', 'Creates variables', 'Prints output', 'Defines arrays'], answer: 0 },
            { prompt: 'What is PDO used for?', options: ['Database access', 'Printing output', 'Creating loops', 'Reading files'], answer: 0 }
        ],
        hard: [
            { prompt: 'What is OOP in PHP?', options: ['Object-oriented programming', 'A loop', 'An array', 'A function'], answer: 0 },
            { prompt: 'What is dependency injection?', options: ['Providing collaborators from outside', 'A variable', 'A class', 'A loop'], answer: 0 },
            { prompt: 'What is autoloading?', options: ['Loading classes automatically', 'Creating output', 'Defining loops', 'Reading files'], answer: 0 },
            { prompt: 'What is middleware?', options: ['Code that handles request processing', 'A variable', 'A loop', 'A class'], answer: 0 },
            { prompt: 'What is a trait?', options: ['Reusable code in classes', 'A string', 'A loop', 'A function'], answer: 0 },
            { prompt: 'What does Composer do?', options: ['Manages PHP dependencies', 'Prints output', 'Creates loops', 'Reads files'], answer: 0 },
            { prompt: 'What is an interface?', options: ['A contract for classes', 'A loop', 'A function', 'A variable'], answer: 0 },
            { prompt: 'What is a closure?', options: ['An anonymous function with lexical scope', 'An array', 'A class', 'A loop'], answer: 0 },
            { prompt: 'What is prepared statement?', options: ['A secure way to execute SQL', 'A type of loop', 'A class', 'An array'], answer: 0 },
            { prompt: 'What is PSR?', options: ['A PHP coding standard', 'A loop', 'An array', 'A function'], answer: 0 }
        ]
    },
    Ruby: {
        easy: [
            { prompt: 'How do you print text in Ruby?', options: ['puts', 'print', 'echo', 'console.log'], answer: 0 },
            { prompt: 'Which keyword defines a method?', options: ['def', 'function', 'class', 'if'], answer: 0 },
            { prompt: 'Which keyword starts a conditional?', options: ['if', 'for', 'while', 'class'], answer: 0 },
            { prompt: 'Which keyword defines a class?', options: ['class', 'def', 'module', 'if'], answer: 0 },
            { prompt: 'What is an array in Ruby?', options: ['An ordered collection', 'A function', 'A string', 'A class'], answer: 0 },
            { prompt: 'What is a hash?', options: ['A key-value store', 'A class', 'A loop', 'A string'], answer: 0 },
            { prompt: 'What does each do?', options: ['Iterates over a collection', 'Defines a method', 'Starts a class', 'Prints output'], answer: 0 },
            { prompt: 'Which symbol comments a line?', options: ['#', '//', '<!--', '/*'], answer: 0 },
            { prompt: 'What does nil mean?', options: ['No value', 'True', 'False', 'An array'], answer: 0 },
            { prompt: 'How do you create a string literal?', options: ['Use quotes', 'Use brackets', 'Use braces', 'Use commas'], answer: 0 }
        ],
        medium: [
            { prompt: 'What is a block in Ruby?', options: ['A chunk of code passed to a method', 'A class', 'A string', 'A loop'], answer: 0 },
            { prompt: 'What are symbols used for?', options: ['Immutable identifiers', 'Strings', 'Loops', 'Variables'], answer: 0 },
            { prompt: 'What is a module?', options: ['A namespace and mixin container', 'A class', 'A loop', 'A function'], answer: 0 },
            { prompt: 'What does include do in a class?', options: ['Adds module methods', 'Creates a loop', 'Defines a string', 'Declares a variable'], answer: 0 },
            { prompt: 'What is a proc?', options: ['A reusable block object', 'A string', 'A variable', 'A class'], answer: 0 },
            { prompt: 'What does respond_to? check?', options: ['Whether an object supports a method', 'A variable type', 'A loop', 'A class'], answer: 0 },
            { prompt: 'What is an enumerable?', options: ['A collection that can be iterated', 'A control structure', 'A string', 'A module'], answer: 0 },
            { prompt: 'What is a lambda?', options: ['A proc-like anonymous function', 'A class', 'A loop', 'A variable'], answer: 0 },
            { prompt: 'What is the purpose of attr_accessor?', options: ['Create getter and setter methods', 'Create loops', 'Print data', 'Define modules'], answer: 0 },
            { prompt: 'What does require do?', options: ['Load external Ruby code', 'Create loops', 'Print output', 'Define classes'], answer: 0 }
        ],
        hard: [
            { prompt: 'What is metaprogramming?', options: ['Writing code that writes code', 'Creating comments', 'Writing loops', 'Defining hashes'], answer: 0 },
            { prompt: 'What is a singleton method?', options: ['A method defined for one object', 'A class method', 'A module', 'A loop'], answer: 0 },
            { prompt: 'What is concurrency in Ruby?', options: ['Running multiple tasks in parallel or interleaved', 'A variable', 'A class', 'A loop'], answer: 0 },
            { prompt: 'What is a fiber?', options: ['A lightweight concurrency primitive', 'A class', 'A string', 'A hash'], answer: 0 },
            { prompt: 'What is a DSL?', options: ['A specialized mini-language', 'A loop', 'A class', 'A module'], answer: 0 },
            { prompt: 'What does monkey patching mean?', options: ['Changing existing code behavior at runtime', 'Creating comments', 'Defining loops', 'Writing strings'], answer: 0 },
            { prompt: 'What is the purpose of ActiveSupport?', options: ['Provide Ruby utility extensions', 'Create loops', 'Store arrays', 'Print output'], answer: 0 },
            { prompt: 'What is Rack?', options: ['A web server interface for Ruby apps', 'A string', 'A class', 'A module'], answer: 0 },
            { prompt: 'What is a gem?', options: ['A reusable Ruby package', 'A loop', 'A hash', 'A variable'], answer: 0 },
            { prompt: 'What is a thread?', options: ['A concurrent execution path', 'A class', 'A loop', 'A string'], answer: 0 }
        ]
    },
    TypeScript: {
        easy: [
            { prompt: 'Which keyword declares a variable in TypeScript?', options: ['let', 'var', 'def', 'function'], answer: 0 },
            { prompt: 'How do you declare a type annotation?', options: [': string', '=>', '->', 'type'], answer: 0 },
            { prompt: 'What does interface define?', options: ['A contract for object shape', 'A loop', 'A function', 'A class'], answer: 0 },
            { prompt: 'Which keyword defines a function?', options: ['function', 'class', 'def', 'let'], answer: 0 },
            { prompt: 'What does const declare?', options: ['A constant variable', 'A loop', 'A class', 'An interface'], answer: 0 },
            { prompt: 'What is a union type?', options: ['A type that can be one of several values', 'A function', 'A loop', 'A class'], answer: 0 },
            { prompt: 'What does TypeScript add to JavaScript?', options: ['Static typing', 'Loops', 'Classes', 'HTML'], answer: 0 },
            { prompt: 'How do you create a tuple type?', options: ['[string, number]', 'string|number', 'class', 'function'], answer: 0 },
            { prompt: 'What does the any type mean?', options: ['No type safety', 'A string', 'A loop', 'A function'], answer: 0 },
            { prompt: 'Which keyword creates an enum?', options: ['enum', 'class', 'type', 'let'], answer: 0 }
        ],
        medium: [
            { prompt: 'What is a generic?', options: ['A reusable type parameter', 'A loop', 'A variable', 'A class'], answer: 0 },
            { prompt: 'What is the purpose of type aliases?', options: ['Name a type', 'Create loops', 'Generate HTML', 'Define classes'], answer: 0 },
            { prompt: 'What does keyof do?', options: ['Creates a union of property keys', 'Defines classes', 'Creates loops', 'Creates values'], answer: 0 },
            { prompt: 'What is a mapped type?', options: ['A type built from another type', 'A loop', 'A function', 'A string'], answer: 0 },
            { prompt: 'What is an index signature?', options: ['A way to define dynamic object properties', 'A loop', 'A class', 'A variable'], answer: 0 },
            { prompt: 'What is a namespace used for?', options: ['Organize code', 'Create arrays', 'Print output', 'Read input'], answer: 0 },
            { prompt: 'What is an assertion?', options: ['A way to tell the compiler the type', 'A loop', 'A class', 'A string'], answer: 0 },
            { prompt: 'What does extends do in a type?', options: ['Create inheritance-like relationships', 'Print output', 'Loop values', 'Define classes'], answer: 0 },
            { prompt: 'What does Partial<T> do?', options: ['Makes all properties optional', 'Creates a class', 'Defines a function', 'Creates a variable'], answer: 0 },
            { prompt: 'What is a utility type?', options: ['A built-in type transformation helper', 'A class', 'A string', 'A function'], answer: 0 }
        ],
        hard: [
            { prompt: 'What are decorators?', options: ['Metadata annotations for classes or methods', 'Loops', 'Variables', 'Strings'], answer: 0 },
            { prompt: 'What is a conditional type?', options: ['A type that depends on another type', 'A function', 'A loop', 'A class'], answer: 0 },
            { prompt: 'What is infer in conditional types?', options: ['Extract a type from a conditional branch', 'Create a variable', 'Loop values', 'Create a class'], answer: 0 },
            { prompt: 'What is async/await in TypeScript?', options: ['Asynchronous programming syntax', 'A loop', 'A class', 'A type alias'], answer: 0 },
            { prompt: 'What is a module system?', options: ['A way to organize and import code', 'A function', 'A variable', 'A string'], answer: 0 },
            { prompt: 'What does readonly do?', options: ['Prevents reassignment', 'Creates loops', 'Prints output', 'Defines classes'], answer: 0 },
            { prompt: 'What is declaration merging?', options: ['Combining multiple declarations', 'Creating loops', 'Printing output', 'Reading input'], answer: 0 },
            { prompt: 'What is a template literal type?', options: ['A string-based literal type', 'A class', 'A function', 'A variable'], answer: 0 },
            { prompt: 'What is an abstract class?', options: ['A class meant to be inherited from', 'A loop', 'A variable', 'An interface'], answer: 0 },
            { prompt: 'What is the purpose of tsconfig?', options: ['Configure the TypeScript compiler', 'Print output', 'Define loops', 'Create HTML'], answer: 0 }
        ]
    },
    Tailwind: {
        easy: [
            { prompt: 'Which utility class adds padding?', options: ['p-4', 'text-red-500', 'bg-blue-500', 'flex'], answer: 0 },
            { prompt: 'Which utility class changes text color?', options: ['text-blue-500', 'p-4', 'm-2', 'flex'], answer: 0 },
            { prompt: 'Which utility class sets a flex container?', options: ['flex', 'grid', 'block', 'hidden'], answer: 0 },
            { prompt: 'Which class makes text bold?', options: ['font-bold', 'text-sm', 'p-2', 'bg-black'], answer: 0 },
            { prompt: 'Which class adds a margin?', options: ['m-4', 'p-4', 'text-lg', 'w-full'], answer: 0 },
            { prompt: 'Which class sets full width?', options: ['w-full', 'h-full', 'p-4', 'm-4'], answer: 0 },
            { prompt: 'Which class sets full height?', options: ['h-full', 'w-full', 'm-2', 'p-2'], answer: 0 },
            { prompt: 'Which class centers content horizontally?', options: ['justify-center', 'items-center', 'text-center', 'flex'], answer: 0 },
            { prompt: 'Which class adds a background color?', options: ['bg-blue-500', 'text-blue-500', 'p-4', 'm-4'], answer: 0 },
            { prompt: 'Which class hides an element?', options: ['hidden', 'block', 'inline', 'flex'], answer: 0 }
        ],
        medium: [
            { prompt: 'Which prefix creates responsive styles for small screens?', options: ['sm:', 'md:', 'lg:', 'xl:'], answer: 0 },
            { prompt: 'Which prefix targets medium screens?', options: ['md:', 'sm:', 'lg:', 'xl:'], answer: 0 },
            { prompt: 'Which class creates a grid container?', options: ['grid', 'flex', 'block', 'hidden'], answer: 0 },
            { prompt: 'Which class sets a gap between grid items?', options: ['gap-4', 'm-4', 'p-4', 'w-full'], answer: 0 },
            { prompt: 'Which class applies a rounded border?', options: ['rounded', 'border', 'shadow', 'p-4'], answer: 0 },
            { prompt: 'Which class adds a shadow?', options: ['shadow-lg', 'text-sm', 'bg-red-500', 'p-4'], answer: 0 },
            { prompt: 'Which utility creates a column layout?', options: ['flex-col', 'flex-row', 'grid', 'hidden'], answer: 0 },
            { prompt: 'Which class aligns items vertically in a flex container?', options: ['items-center', 'justify-center', 'text-center', 'gap-4'], answer: 0 },
            { prompt: 'Which class sets a relative container?', options: ['relative', 'absolute', 'fixed', 'sticky'], answer: 0 },
            { prompt: 'Which class sets absolute positioning?', options: ['absolute', 'relative', 'fixed', 'sticky'], answer: 0 }
        ],
        hard: [
            { prompt: 'What does the Tailwind config file control?', options: ['Theme, plugins, and content paths', 'HTML structure', 'JavaScript logic', 'Database access'], answer: 0 },
            { prompt: 'What are variants in Tailwind?', options: ['Modifiers for states like hover and focus', 'HTML tags', 'Type annotations', 'JavaScript classes'], answer: 0 },
            { prompt: 'What is the purpose of dark mode utilities?', options: ['Style elements for dark themes', 'Create CSS classes', 'Define loops', 'Change HTML structure'], answer: 0 },
            { prompt: 'What is JIT mode in Tailwind?', options: ['Just-in-Time compilation of classes', 'A JavaScript loop', 'A CSS property', 'An HTML tag'], answer: 0 },
            { prompt: 'What is the purpose of content configuration?', options: ['Tell Tailwind which files to scan', 'Create classes', 'Set fonts', 'Define JS logic'], answer: 0 },
            { prompt: 'What is a plugin in Tailwind?', options: ['Custom logic that extends Tailwind', 'A JSON file', 'A CSS variable', 'A JavaScript class'], answer: 0 },
            { prompt: 'Which class applies hover styles?', options: ['hover:bg-red-500', 'bg-red-500', 'text-red-500', 'm-2'], answer: 0 },
            { prompt: 'Which class applies focus styles?', options: ['focus:ring-2', 'hover:bg-red-500', 'm-2', 'p-4'], answer: 0 },
            { prompt: 'What does @apply do?', options: ['Reuse Tailwind utilities inside CSS', 'Create a new class', 'Define a variable', 'Create HTML'], answer: 0 },
            { prompt: 'What does arbitrary value syntax allow?', options: ['Use custom values directly in class names', 'Create loops', 'Define JavaScript', 'Create forms'], answer: 0 }
        ]
    }
};

const languageMeta = {
    HTML: {
        title: 'HTML',
        summary: 'HTML is the structure of the web. It organizes content into headings, paragraphs, links, and forms.',
        learn: 'Learn about HTML: it uses tags to define structure, media, and content hierarchy for every webpage.'
    },
    CSS: {
        title: 'CSS',
        summary: 'CSS styles the web. It controls colors, layout, spacing, and responsive design.',
        learn: 'Learn about CSS: it shapes visuals and layout through selectors, properties, and responsive rules.'
    },
    Java: {
        title: 'Java',
        summary: 'Java is a powerful object-oriented language used in enterprise apps, Android, and backend systems.',
        learn: 'Learn about Java: it emphasizes classes, objects, and strong typing for scalable systems.'
    },
    JavaScript: {
        title: 'JavaScript',
        summary: 'JavaScript is the language of the web, powering interactive websites, apps, and browser features.',
        learn: 'Learn about JavaScript: it enables dynamic behavior, event handling, and browser scripting across modern web apps.'
    },
    'C#': {
        title: 'C#',
        summary: 'C# is a modern language from Microsoft for desktop, game, and web development.',
        learn: 'Learn about C#: it combines strong typing, object-oriented design, and modern tooling.'
    },
    'C++': {
        title: 'C++',
        summary: 'C++ is known for performance and control, often used in engines, systems, and games.',
        learn: 'Learn about C++: it gives low-level control with high-performance capabilities for demanding software.'
    },
    Python: {
        title: 'Python',
        summary: 'Python is beginner-friendly and widely used in AI, automation, scripting, and web apps.',
        learn: 'Learn about Python: it focuses on readability, rapid development, and powerful libraries.'
    },
    PHP: {
        title: 'PHP',
        summary: 'PHP powers many websites and server-side web applications.',
        learn: 'Learn about PHP: it is commonly used for dynamic web pages, forms, and CMS platforms.'
    },
    Ruby: {
        title: 'Ruby',
        summary: 'Ruby is elegant and developer-friendly, especially for web apps and scripting.',
        learn: 'Learn about Ruby: it favors simplicity and readability for fast, expressive development.'
    },
    TypeScript: {
        title: 'TypeScript',
        summary: 'TypeScript adds static typing to JavaScript for safer, more scalable apps.',
        learn: 'Learn about TypeScript: it improves JavaScript with types, interfaces, and better tooling.'
    },
    Tailwind: {
        title: 'Tailwind',
        summary: 'Tailwind is a utility-first CSS framework that speeds up modern interface design.',
        learn: 'Learn about Tailwind: it uses utility classes to build responsive layouts quickly.'
    }
};

const languageFiles = {
    HTML: 'HTML.html',
    CSS: 'CSS.html',
    Java: 'Java.html',
    JavaScript: 'JavaScript.html',
    'C#': 'CSharp.html',
    'C++': 'CPP.html',
    Python: 'Python.html',
    PHP: 'PHP.html',
    Ruby: 'Ruby.html',
    TypeScript: 'TypeScript.html',
    Tailwind: 'Tailwind.html'
};

const timeLimits = { easy: 10000, medium: 7000, hard: 5000 };
let state = {
    currentStep: 1,
    mode: 'Arcade',
    difficulty: 'easy',
    phase: 'easy',
    language: 'HTML',
    playerHp: 100,
    npcHp: 100,
    streak: 0,
    roundActive: false,
    currentQuestion: null,
    questionDeck: [],
    deckIndex: 0,
    windowStart: 0,
    windowTimer: null,
    beatTimer: null,
    timeLimit: timeLimits.easy
};

const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const modeButtons = document.querySelectorAll('.mode-button');
const restartButton = document.getElementById('restartButton');
const startGameBtn = document.getElementById('startGameBtn');
const modePreviewCard = document.getElementById('modePreviewCard');
const modeDescription = document.getElementById('modeDescription');
const coOpOptions = document.getElementById('coOpOptions');
const arcadeOptions = document.getElementById('arcadeOptions');
const modeLabel = document.getElementById('modeLabel');
const phaseLabel = document.getElementById('phaseLabel');
const streakLabel = document.getElementById('streakLabel');
const languageLabel = document.getElementById('languageLabel');
const playerBar = document.getElementById('playerBar');
const npcBar = document.getElementById('npcBar');
const playerHp = document.getElementById('playerHp');
const npcHp = document.getElementById('npcHp');
const message = document.getElementById('message');
const timerText = document.getElementById('timerText');
const abilityText = document.getElementById('abilityText');
const questionPrompt = document.getElementById('questionPrompt');
const answerButtons = Array.from(document.querySelectorAll('.answer-btn'));
const beatIndicator = document.getElementById('beatIndicator');
const continueLink = document.getElementById('continueLink');

const slugify = (value) => {
    return String(value || '')
        .toLowerCase()
        .replace(/\+/g, 'plus')
        .replace(/#/g, 'sharp')
        .replace(/\s+/g, '-');
};

const getActiveDescription = () => {
    const active = document.querySelector('.mode-button.active');
    return active ? active.dataset.description : '';
};

const initialActiveMode = document.querySelector('.mode-button.active');
if (initialActiveMode) {
    state.mode = initialActiveMode.dataset.mode || state.mode;
}
if (coOpOptions) {
    coOpOptions.classList.toggle('visible', initialActiveMode?.dataset.mode === 'Logic Duel');
}
if (arcadeOptions) {
    arcadeOptions.classList.toggle('visible', initialActiveMode?.dataset.mode === 'Arcade');
}

const updateContinueLink = () => {
        const mode = state.mode === 'Logic Duel' ? 'coop' : 'arcade';
        const fallbackPace = state.mode === 'Logic Duel' ? 'whole-note' : 'turtle';
        let chosen = fallbackPace;
        let paceLabel = state.mode === 'Logic Duel' ? 'Whole Note' : 'Turtle';
        if (state.mode === 'Logic Duel') {
            const selected = document.querySelector('input[name="co-op-choice"]:checked');
            const label = selected?.closest('label')?.querySelector('.label-text')?.textContent || '';
            if (label) {
                chosen = label.toLowerCase().replace(/\s+/g, '-');
                paceLabel = label;
            }
        } else {
            const selected = document.querySelector('input[name="arcade-choice"]:checked');
            const label = selected?.closest('label')?.querySelector('.label-text')?.textContent || '';
            if (label) {
                chosen = label.toLowerCase().replace(/\s+/g, '-');
                paceLabel = label;
            }
        }

        // Update HUD labels
        if (modeLabel) modeLabel.textContent = state.mode || '';
        if (phaseLabel) phaseLabel.textContent = paceLabel || '';
        if (languageLabel) languageLabel.textContent = state.language || 'HTML';

        if (continueLink) {
            const langParam = state.language ? `&lang=${encodeURIComponent(slugify(state.language))}` : '';
            continueLink.href = `QubeatGameStart.html?mode=${mode}&diff=${chosen}${langParam}`;
        }
    };

    const pacingInputs = Array.from(document.querySelectorAll('input[name="co-op-choice"], input[name="arcade-choice"]'));
    pacingInputs.forEach((input) => {
        input.addEventListener('change', updateContinueLink);
    });

    modeButtons.forEach((button) => {
        const wrapper = button.closest('.radio-wrapper');
        const input = wrapper ? wrapper.querySelector('.input') : null;

        const updateMode = () => {
            modeButtons.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
            if (input) input.checked = true;
            state.mode = button.dataset.mode;
            modeDescription.textContent = button.dataset.description || getActiveDescription();
            if (modePreviewCard) {
                modePreviewCard.classList.add('active');
            }
            if (coOpOptions) {
                coOpOptions.classList.toggle('visible', button.dataset.mode === 'Logic Duel');
            }
            if (arcadeOptions) {
                arcadeOptions.classList.toggle('visible', button.dataset.mode === 'Arcade');
            }
            updateContinueLink();
        };

        if (input) {
            input.addEventListener('change', updateMode);
        }

        button.addEventListener('click', updateMode);
    });

    updateContinueLink();

    if (startGameBtn) {
        startGameBtn.addEventListener('click', startGame);
    }

function startGame() {
    clearTimers();
    state.mode = document.querySelector('.mode-button.active').dataset.mode;
    state.difficulty = 'easy';
    state.phase = 'easy';
    state.language = 'HTML';
    state.playerHp = 100;
    state.npcHp = 100;
    state.streak = 0;
    state.roundActive = false;
    state.timeLimit = timeLimits[state.phase];
    state.questionDeck = shuffle([...questionCatalog[state.language][state.phase]]);
    state.deckIndex = 0;

    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    updateHud();
    nextRound();
}

function nextRound() {
    clearTimers();
    state.roundActive = true;
    state.currentQuestion = state.questionDeck[state.deckIndex % state.questionDeck.length];
    state.deckIndex += 1;
    state.windowStart = Date.now();

    questionPrompt.textContent = state.currentQuestion.prompt;
    answerButtons.forEach((button, index) => {
        button.textContent = state.currentQuestion.options[index];
    });

    message.textContent = 'The beat is live. Answer before the countdown ends.';
    updateHud();
    startBeatPulse();

    state.windowTimer = window.setTimeout(() => {
        resolveRound(false, 'late');
    }, state.timeLimit);
}

function startBeatPulse() {
    beatIndicator.classList.add('active');
    state.beatTimer = window.setInterval(() => {
        beatIndicator.classList.toggle('active');
    }, 700);
}

function handleAnswer(index) {
    if (!state.roundActive) return;

    const elapsed = Date.now() - state.windowStart;
    const quality = assessTiming(elapsed);
    const correct = index === state.currentQuestion.answer;

    if (correct && quality !== 'late' && quality !== 'early') {
        resolveRound(true, quality);
    } else {
        resolveRound(false, quality);
    }
}

function assessTiming(elapsed) {
    const earlyCutoff = Math.round(state.timeLimit * 0.28);
    const perfectStart = Math.round(state.timeLimit * 0.32);
    const perfectEnd = Math.round(state.timeLimit * 0.70);

    if (elapsed < earlyCutoff) return 'early';
    if (elapsed >= perfectStart && elapsed <= perfectEnd) return 'perfect';
    if (elapsed <= state.timeLimit) return 'good';
    return 'late';
}

function resolveRound(success, quality) {
    clearTimers();
    state.roundActive = false;

    if (success) {
        state.streak += 1;
        state.npcHp = Math.max(0, state.npcHp - (quality === 'perfect' ? 20 : 10));
        message.textContent = quality === 'perfect'
            ? 'Perfect parry. The rival staggered.'
            : 'Correct answer. The shot was deflected.';

        if (state.streak === 10 && state.phase === 'easy') {
            state.phase = 'medium';
            state.timeLimit = timeLimits.medium;
            state.questionDeck = shuffle([...questionCatalog[state.language][state.phase]]);
            state.deckIndex = 0;
        } else if (state.streak === 20 && state.phase === 'medium') {
            state.phase = 'hard';
            state.timeLimit = timeLimits.hard;
            state.questionDeck = shuffle([...questionCatalog[state.language][state.phase]]);
            state.deckIndex = 0;
        }
    } else {
        state.playerHp = Math.max(0, state.playerHp - (quality === 'early' ? 16 : 12));
        state.streak = 0;
        message.textContent = quality === 'early'
            ? 'Too early. You were stunned for one beat.'
            : 'Too late. The rival landed the shot.';
    }

    updateHud();

    if (state.playerHp <= 0) {
        message.textContent = 'Game over. The rival took the arena.';
        setTimeout(() => {
            gameScreen.classList.add('hidden');
            startScreen.classList.remove('hidden');
            showStep(1);
        }, 900);
        return;
    }

    if (state.npcHp <= 0) {
        message.textContent = 'Victory. You broke the rival rhythm.';
        setTimeout(() => {
            gameScreen.classList.add('hidden');
            startScreen.classList.remove('hidden');
            showStep(1);
        }, 900);
        return;
    }

    window.setTimeout(nextRound, 800);
}

function clearTimers() {
    if (state.windowTimer) {
        window.clearTimeout(state.windowTimer);
        state.windowTimer = null;
    }
    if (state.beatTimer) {
        window.clearInterval(state.beatTimer);
        state.beatTimer = null;
    }
    beatIndicator.classList.remove('active');
}

function updateHud() {
    modeLabel.textContent = state.mode;
    phaseLabel.textContent = capitalize(state.phase);
    streakLabel.textContent = state.streak;
    languageLabel.textContent = state.language;
    playerBar.style.width = `${state.playerHp}%`;
    npcBar.style.width = `${state.npcHp}%`;
    playerHp.textContent = state.playerHp;
    npcHp.textContent = state.npcHp;
    timerText.textContent = `Time Limit: ${state.timeLimit / 1000}s`;
    abilityText.textContent = `Phase: ${capitalize(state.phase)}`;
}

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function showStep(step) {
    state.currentStep = step;
    lessonOverlay.classList.add('hidden');
    stepPanels.forEach((panel) => {
        panel.classList.toggle('active', Number(panel.dataset.step) === step);
    });

    const titles = {
        1: 'Step 1 • Choose Your Arena',
        2: 'Step 2 • Pick Your Language'
    };

    const subtitles = {
        1: 'Choose your mode and difficulty.',
        2: 'Select the language and start the challenge.'
    };

    stepTitle.textContent = titles[step];
    stepSubtitle.textContent = subtitles[step];
    updateSummary();
}

function renderLanguageInfo() {
    const meta = languageMeta[state.language];
    languageInfoTitle.textContent = meta.title;
    languageInfoText.textContent = meta.summary;
    lessonFrame.src = languageFiles[state.language] || 'HTML.html';
    lessonTitle.textContent = `${meta.title} Lesson`;
}

function updateSummary() {
    const meta = languageMeta[state.language];
    summaryBox.innerHTML = `
        <strong>Mode:</strong> ${state.mode}<br/>
        <strong>Language:</strong> ${state.language}<br/>
        <strong>Difficulty:</strong> ${capitalize(state.difficulty)}<br/>
        <strong>Focus:</strong> ${meta.summary}
    `;
}

