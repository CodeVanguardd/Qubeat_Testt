$pages = @(
    @{
        key = 'HTML'
        title = 'HTML'
        summary = 'HTML structures web pages with semantic markup and nested tags.'
        overview = 'HTML is the foundation of every web page, defining the structure and content using tags such as headings, paragraphs, images, links, and forms.'
        history = 'HTML was invented by Tim Berners-Lee in 1991 to describe web page structure and allow browsers to render documents from the early web. It evolved through HTML 4.01, XHTML, and later HTML5 with multimedia and semantic improvements.'
        versionNotes = 'HTML5 is the current standard, adding semantic tags, multimedia support, SVG, canvas, and improved accessibility features.'
        fileStructure = 'HTML files typically include a root <html> element, a <head> section for metadata and a <body> section for visible content.'
        syntaxExample1 = '&lt;!DOCTYPE html&gt;\n&lt;html lang="en"&gt;\n  &lt;head&gt;\n    &lt;meta charset="UTF-8"&gt;\n    &lt;title&gt;My Page&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Welcome&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;'
        syntaxExample2 = '&lt;section&gt;\n  &lt;article&gt;\n    &lt;p&gt;Semantic HTML improves readability.&lt;/p&gt;\n  &lt;/article&gt;\n&lt;/section&gt;'
        keywords = 'HTML itself does not have reserved programming keywords, but it has tag names like <header>, <footer>, <nav>, <main>, and <section> that should be used semantically.'
        dataTypes = 'HTML content is text, attributes, boolean attributes, and URLs. The closest equivalents are string-like text nodes and attribute values.'
        variables = 'HTML does not use variables directly, but template engines and modern frameworks use placeholders and data binding to inject values into markup.'
        operators = 'HTML uses special syntax like attribute assignment with = and boolean attributes that appear without a value, such as disabled.'
        controlFlow = 'HTML itself does not include control flow. Conditionals and loops are handled by JavaScript or server-side templates.'
        functions = 'HTML does not define functions. Scripts can attach functions to events like onclick or onsubmit.'
        classes = 'In HTML, classes are attributes that group elements for styling and scripting.'
        objects = 'HTML elements become objects in the DOM, with properties and methods accessible from JavaScript.'
        oop = 'HTML is not object-oriented, but it participates in the browser DOM object model with elements represented as objects.'
        modules = 'HTML can include external resources such as CSS and JavaScript modules using <link> and <script type="module">.'
        libraries = 'HTML pages often use libraries like Bootstrap or Tailwind CSS for styling and React or Vue for rendering components.'
        apis = 'HTML interacts with browser APIs through script tags, such as fetch for network requests and the DOM API for elements.'
        errorHandling = 'HTML errors are often validation issues. Browsers ignore invalid markup gracefully, but accessibility and structure may break.'
        memory = 'HTML does not manage memory directly. The browser manages DOM node lifecycle and garbage collects nodes removed from the document.'
        performance = 'HTML performance depends on minimizing DOM size, using semantic structure, and deferring non-critical resources.'
        bestPractices = 'Use semantic tags, keep structure simple, and avoid deeply nested layouts. Place scripts at the end of the body or use defer.'
        security = 'Protect against injection by encoding user content, avoid inline event handlers, and keep third-party scripts trusted.'
        accessibility = 'Semantic HTML is the most important accessibility feature. Use landmarks, labels, alt text, and proper heading order.'
        style = 'Write clean, reusable markup, use classes for styling, and keep presentation in CSS rather than inline.'
        patterns = 'Common design patterns include layout with header/nav/main/footer, card components, and responsive sections.'
        projectStructure = 'A solid HTML project includes an index.html, component partials, assets folder, and documentation for structure and naming conventions.'
        mistakes = 'Common mistakes include missing alt attributes, using divs instead of semantic tags, and placing script blocks before content that needs them.'
        interview = 'Be ready to explain semantic HTML, the difference between block and inline elements, and accessibility improvements.'
        problems = 'Practice building a landing page, a responsive form, and a semantic article layout.'
        real = 'Real HTML projects include landing pages, documentation sites, and blog templates. Every web application starts with HTML structure.'
        cheatSheet = 'Use <header>, <nav>, <main>, <article>, <section>, <footer>, <img>, <a>, <button>, and <form> as your core tags.'
        faq = 'Frequently asked HTML questions focus on semantic tags, accessibility, responsive images, and doctype usage.'
        prosCons = 'HTML is universal and simple, but it alone does not provide interactivity or dynamic behavior. It works best with CSS and JavaScript.'
        comparison = 'HTML is structural markup, not a programming language. It is compared with XML and markdown for document structure.'
        latest = 'HTML5 introduced modern semantic tags, audio/video support, and the canvas element for drawing.'
        future = 'The future of HTML is richer semantics, better accessibility, and continued integration with web APIs and component frameworks.'
        examples = @(
            @{code='&lt;button type="button"&gt;Click me&lt;/button&gt;'; explanation='A simple button element you can style and attach behavior to using JavaScript.'},
            @{code='&lt;img src="hero.png" alt="Product showcase"&gt;'; explanation='An image with an alt attribute for accessibility and search engines.'},
            @{code='&lt;a href="https://example.com"&gt;Visit example&lt;/a&gt;'; explanation='A link that navigates to a new page when clicked.'}
        )
    },
    @{
        key = 'CSS'
        title = 'CSS'
        summary = 'CSS styles web pages by assigning colors, layout, typography, and interaction states.'
        overview = 'CSS is the language that controls how HTML looks and behaves visually. It separates presentation from structure and lets developers theme pages consistently.'
        history = 'CSS was introduced in 1996 by Håkon Wium Lie and Bert Bos. It began with simple selectors and evolved into a powerful layout language with flexbox, grid, animations, and variables.'
        versionNotes = 'Modern CSS includes CSS3 modules, custom properties, grid layout, flexbox, and newer API features like container queries.'
        fileStructure = 'CSS files are commonly grouped by global styles, component styles, utilities, and responsive rules.'
        syntaxExample1 = 'body {\n  background: #09142e;\n  color: #f5efff;\n}'
        syntaxExample2 = '.button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.6rem;\n}'
        keywords = 'CSS does not use reserved programming keywords, but it has at-rules like @media, @supports, @keyframes, and properties like color and display.'
        dataTypes = 'CSS data types include lengths, colors, numbers, strings, URLs, percentages, and custom property values.'
        variables = 'CSS custom properties are variables defined with --name and used with var(--name).' 
        operators = 'CSS uses operators inside calc() and supports combinations like +, -, *, /, and comparisons in media queries.'
        controlFlow = 'CSS does not have traditional control flow, but @media and @supports act as conditional rules that apply only when conditions are met.'
        functions = 'CSS functions such as calc(), rgba(), var(), min(), and clamp() transform values at runtime.'
        classes = 'CSS classes are selectors that style HTML elements with matching class attributes.'
        objects = 'In CSS, objects are not explicit, but each element is a styled box in the CSS box model.'
        oop = 'CSS is not object-oriented, though object-like abstractions arise in component-driven systems and custom property scopes.'
        modules = 'CSS can be modularized using @import, CSS modules in build tools, and scoped styles in component frameworks.'
        libraries = 'Popular CSS libraries include Tailwind, Bootstrap, Bulma, and Animate.css.'
        apis = 'CSS works with browser APIs like DOM class manipulation, prefers-color-scheme, and CSSOM for runtime style changes.'
        errorHandling = 'CSS failures are usually ignored by the browser, so invalid declarations do not break layout but may fail silently.'
        memory = 'CSS does not manage memory in application code, but browsers may optimize and cache style calculations.'
        performance = 'CSS performance improves with fewer large selectors, avoiding expensive layout triggers, and using will-change only when needed.'
        bestPractices = 'Use semantic selectors, avoid !important, prefer classes over IDs for reusable styling, and keep styles maintainable.'
        security = 'Avoid CSS injection by sanitizing user-controlled values for style tags and attributes.'
        accessibility = 'Use color contrast, focus styles, and responsive text sizing to make interfaces accessible.'
        style = 'Organize CSS with variables, utility classes, and component blocks for readability.'
        patterns = 'Component-based styling, BEM naming, utility-first classes, and responsive design are common CSS patterns.'
        projectStructure = 'A modern CSS project includes variables, base styles, layout rules, components, and responsive overrides.'
        mistakes = 'Avoid global selectors, duplicate rules, and overly-specific selectors that are hard to override.'
        interview = 'Expect questions about specificity, layout systems, responsive design, and how browser rendering works.'
        problems = 'Practice building navigation bars, card grids, responsive forms, and animated buttons.'
        real = 'Real projects use CSS for theming dashboards, landing pages, and application interfaces with consistent spacing and typography.'
        cheatSheet = 'Remember display, position, flex, grid, gap, margin, padding, color, background, border, and text-align.'
        faq = 'Common CSS questions include how to center elements, create responsive layouts, and handle spacing consistently.'
        prosCons = 'CSS is powerful for presentation, but it can become hard to manage without structure and naming conventions.'
        comparison = 'CSS is compared to Sass, Less, and utility frameworks for better organization and faster styling.'
        latest = 'Latest CSS features include container queries, :is() selectors, subgrid, and aspect-ratio.'
        future = 'The future of CSS includes more layout control, better responsive tooling, and closer integration with design systems.'
        examples = @(
            @{code='.card {\n  border-radius: 24px;\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);\n}'; explanation='A card style that adds rounded corners and shadow for depth.'},
            @{code='@media (max-width: 768px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}'; explanation='A responsive rule that changes the grid to a single column on smaller screens.'},
            @{code=':root {\n  --primary: #ff96e1;\n}\n.button {\n  background: var(--primary);\n}'; explanation='A CSS custom property is defined and then reused in a component style.'}
        )
    },
    @{
        key = 'Java'
        title = 'Java'
        summary = 'Java is a statically typed, object-oriented language used for cross-platform applications, backend systems, and Android development.'
        overview = 'Java compiles to bytecode that runs on the Java Virtual Machine, giving it strong portability and broad platform support.'
        history = 'Java was introduced by Sun Microsystems in 1995. It popularized write-once-run-anywhere and became a dominant language for enterprise systems.'
        versionNotes = 'Modern Java versions include records, sealed classes, pattern matching, and improved performance. Java 17 is a long-term support release, while Java 21 has newer language features.'
        fileStructure = 'A Java project usually stores source files in src/main/java and test files in src/test/java, with packages matching directory structure.'
        syntaxExample1 = 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, QuBeat!");\n    }\n}'
        syntaxExample2 = 'int score = 42;\nString name = "QuBeat";\nboolean active = true;' 
        keywords = 'Java keywords include public, static, void, class, new, extends, implements, if, else, switch, for, while, try, catch, finally, and return.'
        dataTypes = 'Java primitive types include int, long, float, double, boolean, char, byte, and short. Reference types include String, List, and custom objects.'
        variables = 'Java variables must declare a type. Use final for constants and var for local type inference in newer versions.'
        operators = 'Java supports arithmetic, comparison, logical, bitwise, and assignment operators, plus the ternary operator ? :.'
        controlFlow = 'Java control flow uses if/else, switch, for, while, do/while, break, continue, and enhanced for loops.'
        functions = 'Java uses methods inside classes; a method includes a signature, return type, and body.'
        classes = 'Classes define blueprints for objects that hold state and behavior.'
        objects = 'Objects are instances of classes created with new, containing fields and methods.'
        oop = 'Java supports encapsulation, inheritance, polymorphism, and abstraction as core OOP concepts.'
        modules = 'Java modules were introduced in Java 9 with module-info.java for explicit dependencies.'
        libraries = 'Popular Java libraries include Spring, Hibernate, Apache Commons, and JUnit.'
        apis = 'Java APIs include JDBC for databases, Servlet API for web servers, and the Java Standard Library for streams, collections, and concurrency.'
        errorHandling = 'Java handles errors with checked and unchecked exceptions using try/catch/finally and throw.'
        memory = 'Java memory is managed by the JVM garbage collector, with heap, stack, and metaspace regions.'
        performance = 'Java performance improves with JIT compilation, efficient collections, and avoiding excessive object creation.'
        bestPractices = 'Favor immutable objects, use descriptive names, keep methods small, and write unit tests.'
        security = 'Use secure coding for input validation, avoid unsafe deserialization, and keep libraries up to date.'
        accessibility = 'Java UIs can support accessibility through Swing/JavaFX APIs, but web accessibility is handled by the front-end layer.'
        style = 'Follow standard Java conventions: camelCase names, PascalCase classes, and consistent indentation.'
        patterns = 'Common patterns include MVC, Singleton, Factory, Builder, and Dependency Injection.'
        projectStructure = 'A Java project uses Maven or Gradle with src/main/java, src/main/resources, src/test/java, and build configuration files.'
        mistakes = 'Avoid empty catch blocks, tight coupling, and mixing business logic with presentation code.'
        interview = 'Java interviews often ask about memory management, exceptions, OOP, and concurrency.'
        problems = 'Practice writing console apps, REST services, and data-processing pipelines.'
        real = 'Real Java projects include backend APIs, Android apps, and large enterprise systems with transaction management.'
        cheatSheet = 'Remember class, interface, extends, implements, new, static, final, try, catch, and synchronized.'
        faq = 'Common questions cover JVM tuning, checked vs. unchecked exceptions, and the difference between == and equals().' 
        prosCons = 'Java is stable and portable but can be verbose and requires JVM setup.'
        comparison = 'Java is compared to C# for enterprise apps and to Python for readability and scripting.'
        latest = 'Latest Java features include records, pattern matching, virtual threads, and improved switch expressions.'
        future = 'Java continues evolving with performance improvements, stronger type inference, and better modularity.'
        examples = @(
            @{code='public class Player {\n    private String name;\n    private int score;\n\n    public Player(String name) {\n        this.name = name;\n        this.score = 0;\n    }\n\n    public void addScore(int points) {\n        score += points;\n    }\n}\n'; explanation='A Java class with fields, constructor, and a method to update state.'},
            @{code='int lives = 3;\nif (lives > 0) {\n    System.out.println("Alive");\n} else {\n    System.out.println("Game over");\n}'; explanation='A control flow example that prints different messages depending on lives.'},
            @{code='List<String> inventory = new ArrayList<>();\ninventory.add("sword");'; explanation='A generic collection stores strings and adds items dynamically.'}
        )
    },
    @{
        key = 'JavaScript'
        title = 'JavaScript'
        summary = 'JavaScript is the dynamic language of the web, used for browser scripting, server-side apps, and tooling.'
        overview = 'JavaScript is event-driven and prototype-based, enabling interactive web pages, server logic, and desktop tools.'
        history = 'Created in 1995 by Brendan Eich, JavaScript started as a simple scripting language and grew into a full application language used across browsers and servers.'
        versionNotes = 'ECMAScript versions add new syntax, such as arrow functions, async/await, optional chaining, and class fields.'
        fileStructure = 'JavaScript projects often use src/, tests/, package.json, and build configuration files like webpack.config.js.'
        syntaxExample1 = 'const score = 42;\nlet name = "QuBeat";\nconsole.log(`${name} scored ${score}`);'
        syntaxExample2 = 'const greeting = (player) => `Hello, ${player}`;\nconsole.log(greeting("QuBeat"));'
        keywords = 'JavaScript keywords include const, let, var, function, class, if, else, return, async, await, import, export.'
        dataTypes = 'JavaScript data types include number, string, boolean, null, undefined, symbol, bigint, object, and array.'
        variables = 'Use let and const for block-scoped variables, and avoid var unless compatibility demands it.'
        operators = 'JavaScript operators include +, -, *, /, ===, !==, &&, ||, ??, and ?. for optional chaining.'
        controlFlow = 'Use if/else, switch, for, while, for...of, for...in, and try/catch for flow control.'
        functions = 'JavaScript functions can be declarations, expressions, arrow functions, or async functions.'
        classes = 'Classes provide a modern syntax for constructor functions and prototype-based inheritance.'
        objects = 'Objects are key-value maps used for structured data and configuration.'
        oop = 'JavaScript supports prototypes, classes, encapsulation via closures, and polymorphism through objects.'
        modules = 'Modules are imported and exported using import/export syntax, or require in CommonJS environments.'
        libraries = 'Popular libraries include React, Vue, Lodash, Axios, Express, and D3.'
        apis = 'Browser APIs include DOM, fetch, localStorage, Service Workers, and WebSockets. Node APIs include fs, http, and path.'
        errorHandling = 'Use try/catch, Promise.catch, and async/await error handling patterns.'
        memory = 'JavaScript uses garbage collection to reclaim objects no longer referenced by code.'
        performance = 'Minimize DOM updates, debounce events, and prefer efficient algorithms to keep scripts responsive.'
        bestPractices = 'Write clear functions, avoid global state, use linting, and keep asynchronous logic readable.'
        security = 'Prevent XSS by escaping user input, validate data, and avoid insecure eval() usage.'
        accessibility = 'Use ARIA roles, keyboard-friendly interactions, and semantic HTML with JavaScript-enhanced behaviors.'
        style = 'Format code consistently, prefer meaningful names, and keep functions focused on a single task.'
        patterns = 'Common patterns are module patterns, Pub/Sub, factory functions, and async/await flows.'
        projectStructure = 'A JavaScript app often includes src/, public/, package.json, node_modules/, and build scripts.'
        mistakes = 'Common mistakes are not handling promises, using == instead of ===, and mutating shared objects.'
        interview = 'Expect questions about prototypes, closures, event loop, async/await, and browser rendering.'
        problems = 'Practice building interactive components, API fetch flows, and form validation.'
        real = 'Real JavaScript projects include single-page apps, serverless functions, browser games, and CLI tools.'
        cheatSheet = 'Remember const, let, arrow functions, template strings, destructuring, spread, promises, and modules.'
        faq = 'Frequently asked questions cover hoisting, this binding, callbacks vs promises, and event delegation.'
        prosCons = 'JavaScript is flexible and everywhere, but inconsistent browser quirks and coercion can be tricky.'
        comparison = 'JavaScript is compared to TypeScript for typing and Python for scripting simplicity.'
        latest = 'Latest JavaScript features include top-level await, logical assignment operators, and private class fields.'
        future = 'JavaScript will continue evolving with better ergonomics, stronger typing compatibility, and faster engines.'
        examples = @(
            @{code='const players = ["Alice", "Bob", "QuBeat"];\nfor (const player of players) {\n  console.log(player);\n}'; explanation='A loop over an array that prints each player name.'},
            @{code='async function loadData() {\n  const response = await fetch("/api/data");\n  const json = await response.json();\n  return json;\n}'; explanation='An async function that fetches JSON data from an API and returns it.'},
            @{code='const config = {\n  theme: "dark",\n  version: 1.0,\n};\nconsole.log(config.theme);'; explanation='An object literal defining configuration values and reading one property.'}
        )
    },
    @{
        key = 'C'
        title = 'C'
        summary = 'C is a low-level procedural language used for systems programming, embedded firmware, and performance-critical software.'
        overview = 'C gives direct access to memory and hardware through pointers, manual allocation, and a small standard library.'
        history = 'Created in the early 1970s by Dennis Ritchie at Bell Labs, C became the foundation of operating systems like UNIX and influenced many later languages.'
        versionNotes = 'Modern C standards include C89, C99, C11, and C18. C11 introduced atomic operations and improved multithreading support.'
        fileStructure = 'C source files use .c for implementation and .h for headers. Projects compile source files into object files and link them into executables.'
        syntaxExample1 = '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, QuBeat!\n");\n    return 0;\n}'
        syntaxExample2 = "int x = 42;\nfloat ratio = 3.14f;\nchar letter = 'A';"
        keywords = 'C keywords include int, char, float, double, if, else, while, for, return, struct, typedef, enum, and sizeof.'
        dataTypes = 'C data types include int, char, float, double, pointers, arrays, structs, and unions.'
        variables = 'C variables must declare a type and may be initialized when defined.'
        operators = 'C provides arithmetic, bitwise, logical, relational, assignment, and pointer operators.'
        controlFlow = 'C supports if, else, switch, for, while, do/while, break, continue, and goto.'
        functions = 'C functions are declared with return types and parameter lists, and executed by calling the function name.'
        classes = 'C does not have classes; it uses structs and functions to simulate object-like behavior.'
        objects = 'C uses structs to combine fields; pointers to structs allow mutable state.'
        oop = 'C is procedural, but disciplined struct usage and function pointers can build object-like APIs.'
        modules = 'C modules are source files and headers. Build systems compile them separately and link them together.'
        libraries = 'Common C libraries include libc, POSIX APIs, GTK, and embedded SDK libraries.'
        apis = 'C APIs often expose functions through header files and libraries, such as stdio.h for input/output.'
        errorHandling = 'C error handling uses return codes, errno, and sometimes setjmp/longjmp for non-local jumps.'
        memory = 'C manages memory manually with malloc/free, making it powerful but error-prone without careful discipline.'
        performance = 'C performance comes from minimal runtime overhead, direct memory access, and optimized compiler output.'
        bestPractices = 'Use clear ownership rules, initialize variables, check return values, and avoid buffer overflows.'
        security = 'Avoid unsafe functions like gets, validate input lengths, and use bounds-checked APIs.'
        accessibility = 'Accessibility is not part of C itself; UI accessibility is handled by the frameworks built on top of C code.'
        style = 'Follow a consistent C style guide with meaningful names, indentation, and comments for pointer logic.'
        patterns = 'Common patterns include RAII-like resource management, data structures with structs, and callback functions.'
        projectStructure = 'A C project organizes headers, sources, build scripts, and documentation, often with src/ and include/ directories.'
        mistakes = 'Common mistakes include null pointer dereferences, memory leaks, and off-by-one array errors.'
        interview = 'C interviews ask about pointers, memory allocation, stack vs heap, and how functions are called.'
        problems = 'Practice writing command-line tools, linked lists, and small systems utilities.'
        real = 'Real C projects include operating systems, device drivers, embedded firmware, and performance-critical libraries.'
        cheatSheet = 'Remember #include, int main, malloc/free, pointers, structs, arrays, and %d/%s formatting.'
        faq = 'Common questions cover pointer syntax, memory allocation, and the difference between arrays and pointers.'
        prosCons = 'C is extremely fast and portable, but it requires manual memory management and careful low-level discipline.'
        comparison = 'C is compared to C++ for object orientation and to assembly for low-level control.'
        latest = 'Latest C standards refine the language with optional features like anonymous structures and thread support.'
        future = 'C remains essential for systems programming and embedded development, with slower evolution than higher-level languages.'
        examples = @(
            @{code='#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C world!\n");\n    return 0;\n}'; explanation='A complete C program that prints a message to standard output.'},
            @{code='int add(int a, int b) {\n    return a + b;\n}\n\nint result = add(2, 3);'; explanation='A function that adds two integers and returns the result.'},
            @{code='int numbers[5] = {1, 2, 3, 4, 5};\nfor (int i = 0; i < 5; i++) {\n    printf("%d\n", numbers[i]);\n}'; explanation='A static array iterated with a for loop to print each value.'}
        )
    },
    @{
        key = 'C#'
        title = 'C#'
        summary = 'C# is a modern object-oriented language designed for Windows, web, and game development on .NET.'
        overview = 'C# is statically typed with managed memory, strong tooling, and an extensive runtime library.'
        history = 'Created by Microsoft in 2000, C# became the flagship language for .NET applications, evolving with LINQ, async/await, and cross-platform .NET Core.'
        versionNotes = 'Modern C# includes records, pattern matching, nullable reference types, and source generators.'
        fileStructure = 'A C# project uses .cs files, project files like .csproj, and folders such as Controllers, Models, and Views for web apps.'
        syntaxExample1 = 'public class Player {\n    public string Name { get; set; }\n    public int Score { get; set; }\n}\n\nvar player = new Player { Name = "QuBeat", Score = 10 };'
        syntaxExample2 = 'int lives = 3;\nif (lives > 0) {\n    Console.WriteLine("Alive");\n}'
        keywords = 'C# keywords include class, namespace, using, public, private, static, void, async, await, switch, case, and return.'
        dataTypes = 'C# data types include int, long, float, double, decimal, bool, char, string, and object.'
        variables = 'C# variables are declared with type names or var for inference. Use const or readonly for immutable values.'
        operators = 'C# operators include arithmetic, logical, null-coalescing ??, Elvis ?., and pattern matching operators.'
        controlFlow = 'C# supports if/else, switch, for, foreach, while, do, break, continue, and goto.'
        functions = 'Methods in C# belong to classes and can be static or instance methods.'
        classes = 'Classes are reference types with fields, properties, constructors, and methods.'
        objects = 'Objects are instances of classes created with new and used through references.'
        oop = 'C# supports encapsulation, inheritance, polymorphism, and abstraction with interfaces and base classes.'
        modules = 'C# modules are assemblies and namespaces; code is organized into DLLs and packages via NuGet.'
        libraries = 'Popular .NET libraries include ASP.NET Core, Entity Framework Core, Serilog, and xUnit.'
        apis = 'C# APIs include .NET Base Class Library, HTTP clients, LINQ, and platform-specific frameworks.'
        errorHandling = 'Use try/catch/finally and exceptions derived from System.Exception.'
        memory = 'C# memory is managed by the CLR garbage collector; large objects are handled in a separate heap segment.'
        performance = 'C# performance benefits from value types, async I/O, span<T>, and avoiding unnecessary allocations.'
        bestPractices = 'Use async for I/O, keep methods single-purpose, prefer dependency injection, and avoid null reference exceptions.'
        security = 'Use secure authentication, validate inputs, avoid SQL injection, and manage secrets outside source code.'
        accessibility = 'C# accessibility is enforced by access modifiers public, private, protected, and internal.'
        style = 'Follow .NET naming conventions: PascalCase for types/methods, camelCase for locals/parameters.'
        patterns = 'Common patterns include MVC, repository, factory, and middleware pipeline.'
        projectStructure = 'A typical C# solution contains multiple projects, each with its own .csproj file and organized folders.'
        mistakes = 'Avoid catching general exceptions, using magic strings, and creating overly large methods.'
        interview = 'Expect questions on async programming, garbage collection, LINQ, and class inheritance.'
        problems = 'Practice building APIs, data models, console utilities, and desktop apps.'
        real = 'Real C# projects include web APIs, game engines with Unity, desktop apps with WPF, and cloud functions.'
        cheatSheet = 'Remember using, namespace, class, interface, async, await, var, and LINQ query syntax.'
        faq = 'Questions often cover the difference between struct and class, reference vs value types, and async/await semantics.'
        prosCons = 'C# is productive and powerful on .NET, but it depends on the runtime and can be more heavyweight than scripting languages.'
        comparison = 'C# is often compared to Java for syntax and to F# for functional programming styles.'
        latest = 'Latest C# versions introduce improved pattern matching, record structs, and async stream support.'
        future = 'C# will continue evolving with compiler features, performance improvements, and cloud-native libraries.'
        examples = @(
            @{code='public class Player {\n    public string Name { get; set; }\n    public int Score { get; set; }\n}\n\nvar player = new Player { Name = "QuBeat", Score = 5 };'; explanation='A simple class with auto-properties and object initializer syntax.'},
            @{code='int lives = 3;\nif (lives > 0) {\n    Console.WriteLine("Alive");\n}'; explanation='A conditional statement that prints a message based on the number of lives.'},
            @{code='var items = new[] { "sword", "shield" };\nforeach (var item in items) {\n    Console.WriteLine(item);\n}'; explanation='A foreach loop that iterates over an array of strings.'}
        )
    },
    @{
        key = 'PHP'
        title = 'PHP'
        summary = 'PHP is a server-side scripting language used to build dynamic web pages and backend applications.'
        overview = 'PHP runs on the server and outputs HTML, JSON, or other content to clients, powering many content management systems and APIs.'
        history = 'PHP was created by Rasmus Lerdorf in 1994. It became popular for web development thanks to easy embedding in HTML and rapid deployment.'
        versionNotes = 'Modern PHP versions like 8.0 and 8.1 added JIT compilation, union types, attributes, and improved performance.'
        fileStructure = 'PHP apps typically store scripts in public/ or www/, with include/ or src/ folders for reusable code and templates for views.'
        syntaxExample1 = '&lt;?php\n$score = 42;\necho "Score: $score";\n?&gt;'
        syntaxExample2 = '&lt;?php\nfunction greet(string $name): string {\n    return "Hello, $name";\n}\n?&gt;'
        keywords = 'PHP keywords include function, class, public, private, protected, namespace, use, if, else, foreach, and return.'
        dataTypes = 'PHP data types include int, float, string, bool, array, object, null, resource, and mixed.'
        variables = 'PHP variables start with $ and are dynamically typed, but can have type hints in newer versions.'
        operators = 'PHP operators include +, -, ., ==, ===, &&, ||, ??, and .= for string concatenation.'
        controlFlow = 'PHP control flow uses if/else, switch, foreach, for, while, and try/catch.'
        functions = 'PHP functions are declared with function and can return values or output directly.'
        classes = 'PHP classes support properties, methods, inheritance, traits, and interfaces.'
        objects = 'Objects are instances of classes and can store state with public, protected, and private members.'
        oop = 'PHP supports OOP with classes, inheritance, interfaces, traits, and magic methods.'
        modules = 'PHP modules are extensions loaded via php.ini, while autoloading manages class files.'
        libraries = 'Common PHP libraries include Composer packages such as Symfony, Laravel, and Guzzle.'
        apis = 'PHP commonly builds REST APIs, SOAP services, and integrates with database APIs like PDO.'
        errorHandling = 'PHP handles errors with exceptions, error_reporting configuration, and try/catch blocks.'
        memory = 'PHP memory is managed by the engine with a request lifecycle and garbage collection for circular references.'
        performance = 'PHP performance improves with opcode caching, avoiding unnecessary I/O, and using efficient array operations.'
        bestPractices = 'Use Composer, separate concerns, sanitize input, and avoid insecure eval/exec operations.'
        security = 'Sanitize input, use prepared statements, escape output, and keep PHP versions patched.'
        accessibility = 'Accessibility in PHP is achieved through generated HTML output and semantic markup, not PHP itself.'
        style = 'Follow PSR coding standards, use meaningful variable names, and keep templates clean.'
        patterns = 'Common PHP patterns include MVC, repository, service layer, and dependency injection.'
        projectStructure = 'A PHP project often includes public/index.php, src/, vendor/, composer.json, and config files.'
        mistakes = 'Avoid mixing HTML and PHP too heavily, trusting user input, and not handling exceptions.'
        interview = 'Expect questions about PHP lifecycle, superglobals, session handling, and Composer.'
        problems = 'Practice building forms, session-based authentication, and JSON APIs.'
        real = 'Real PHP projects include CMS sites, e-commerce backends, and REST APIs for web apps.'
        cheatSheet = 'Remember $variables, echo, include, require, function, class, array, and $_SERVER.'
        faq = 'Common questions cover session vs cookie, include vs require, and differences between == and ===.'
        prosCons = 'PHP is easy to deploy and great for web scripting, but can be inconsistent without modern practices.'
        comparison = 'PHP is compared to Node.js for server-side scripting and Python for web framework styles.'
        latest = 'PHP 8 introduced union types, attributes, constructor property promotion, and JIT.'
        future = 'PHP will continue evolving with performance gains, modern syntax, and stronger typing support.'
        examples = @(
            @{code='&lt;?php\n$score = 42;\nif ($score > 30) {\n    echo "Great score!";\n}\n?&gt;'; explanation='A conditional statement that outputs a message when the score is greater than 30.'},
            @{code='&lt;?php\nfunction add(int $a, int $b): int {\n    return $a + $b;\n}\n?&gt;'; explanation='A typed function that adds two integers and returns the result.'},
            @{code='&lt;?php\nclass Player {\n    public string $name;\n\n    public function __construct(string $name) {\n        $this->name = $name;\n    }\n}\n$player = new Player("QuBeat");\n?&gt;'; explanation='A PHP class with a constructor and property initialization.'}
        )
    },
    @{
        key = 'Python'
        title = 'Python'
        summary = 'Python is a high-level, readable language used for automation, data science, web apps, and scripting.'
        overview = 'Python prioritizes readability and fast development with dynamic typing, a large standard library, and a strong ecosystem.'
        history = 'Created by Guido van Rossum in 1991, Python became popular for education, scripting, web development, and scientific computing.'
        versionNotes = 'Python 3 is the modern version. Python 3.11 introduced faster startup and performance improvements, while 3.12 continues the trend.'
        fileStructure = 'Python projects often use src/, tests/, requirements.txt or pyproject.toml, and package directories with __init__.py.'
        syntaxExample1 = 'score = 42\nname = "QuBeat"\nprint(f"{name} scored {score}")'
        syntaxExample2 = 'def greet(player):\n    return f"Hello, {player}!"\n\nprint(greet("QuBeat"))'
        keywords = 'Python keywords include def, class, if, elif, else, for, while, import, from, return, and lambda.'
        dataTypes = 'Python data types include int, float, str, bool, list, tuple, dict, set, and None.'
        variables = 'Python variables are dynamically typed and assigned by name at runtime.'
        operators = 'Python operators include +, -, *, /, //, %, ==, !=, and, or, not.'
        controlFlow = 'Python control flow uses indentation to scope blocks with if, for, while, and try/except.'
        functions = 'Python functions are defined with def and can accept positional, keyword, and default arguments.'
        classes = 'Python classes define blueprints with methods, attributes, and inheritance.'
        objects = 'Everything in Python is an object, including functions, classes, and modules.'
        oop = 'Python supports OOP with encapsulation, inheritance, polymorphism, and duck typing.'
        modules = 'Python modules are .py files imported with import statements. Packages group modules in directories.'
        libraries = 'Popular libraries include requests, pandas, Flask, Django, NumPy, and matplotlib.'
        apis = 'Python builds APIs with frameworks like Flask, FastAPI, and Django REST Framework.'
        errorHandling = 'Python handles errors with try/except/finally and custom exception classes.'
        memory = 'Python uses automatic garbage collection and reference counting to manage memory.'
        performance = 'Python performance improves with optimized algorithms, built-in functions, and avoiding expensive loops.'
        bestPractices = 'Use readable code, follow PEP 8, write tests, and avoid deep nesting.'
        security = 'Validate input, avoid shell injection, and use secure libraries for authentication and encryption.'
        accessibility = 'Python accessibility is generally handled by generated user interfaces or web frameworks, not the language itself.'
        style = 'Follow PEP 8 style conventions and use type hints for clarity.'
        patterns = 'Common patterns include MVC, factory, decorator, and context managers.'
        projectStructure = 'A Python project often has src/, tests/, pyproject.toml, and a virtual environment for dependencies.'
        mistakes = 'Avoid mutable default arguments, using bare except, and mixing tabs and spaces.'
        interview = 'Python interviews often cover list/dict comprehensions, generators, decorators, and OOP concepts.'
        problems = 'Practice building small scripts, data parsers, and simple web APIs.'
        real = 'Real Python projects include automation scripts, data pipelines, web services, and machine learning models.'
        cheatSheet = 'Remember def, class, import, for, if, elif, else, list comprehensions, and with statements.'
        faq = 'Common questions cover virtual environments, list vs tuple, and Python 2 vs 3 differences.'
        prosCons = 'Python is readable and fast to develop in, but it trades runtime speed compared to compiled languages.'
        comparison = 'Python is compared to JavaScript for scripting and to Java for enterprise stability.'
        latest = 'Python 3.12 adds better pattern matching, faster startup, and improved error messages.'
        future = 'Python continues to grow in AI, data science, automation, and education with performance enhancements.'
        examples = @(
            @{code='score = 42\nname = "QuBeat"\nprint(f"{name} scored {score}")'; explanation='A simple assignment and formatted output example in Python.'},
            @{code='def add(a, b):\n    return a + b\n\nresult = add(2, 3)'; explanation='A function that takes two arguments and returns their sum.'},
            @{code='items = ["sword", "shield", "potion"]\nfor item in items:\n    print(item)'; explanation='A for loop iterating over a list of strings.'}
        )
    },
    @{
        key = 'Ruby'
        title = 'Ruby'
        summary = 'Ruby is a dynamic, expressive language focused on developer happiness and elegant syntax.'
        overview = 'Ruby is object-oriented by design, with clean syntax and powerful metaprogramming capabilities.'
        history = 'Created by Yukihiro Matsumoto in 1995, Ruby became famous for Rails and its emphasis on programmer joy.'
        versionNotes = 'Ruby 3 introduced improved performance and concurrency support, while Ruby 3.2 adds pattern matching refinements.'
        fileStructure = 'Ruby projects often include lib/, bin/, spec/ or test/, and a Gemfile for dependencies.'
        syntaxExample1 = 'score = 42\nname = "QuBeat"\nputs "#{name} scored #{score}"'
        syntaxExample2 = 'def greet(player)\n  "Hello, #{player}!"\nend\n\nputs greet("QuBeat")'
        keywords = 'Ruby keywords include def, class, module, if, else, elsif, unless, while, until, and yield.'
        dataTypes = 'Ruby data types include Integer, Float, String, Boolean, Array, Hash, Symbol, and NilClass.'
        variables = 'Ruby variables are dynamically typed. Local variables start with lowercase letters, and constants start with uppercase.'
        operators = 'Ruby operators include +, -, *, /, ==, !=, &&, ||, and the spaceship operator <=>.'
        controlFlow = 'Ruby control flow uses if/else, case, unless, while, until, and iterators like each.'
        functions = 'Ruby functions are methods defined with def and invoked by name.'
        classes = 'Ruby classes define objects and can include modules to share behavior.'
        objects = 'Everything in Ruby is an object, including numbers and methods.'
        oop = 'Ruby supports OOP with classes, mixins, inheritance, and duck typing.'
        modules = 'Ruby modules group methods and constants and can be mixed into classes.'
        libraries = 'Popular Ruby libraries include Rails, Sinatra, RSpec, and ActiveSupport.'
        apis = 'Ruby builds APIs with frameworks like Rails and Sinatra, and uses HTTP libraries like Net::HTTP and Faraday.'
        errorHandling = 'Ruby handles errors with begin/rescue/ensure and allows raising custom exceptions.'
        memory = 'Ruby has garbage collection, and modern runtimes use generational GC to manage memory efficiently.'
        performance = 'Ruby performance improves with avoiding object churn, using symbols and lazy enumerators, and profiling hotspots.'
        bestPractices = 'Write readable code, use Ruby style guides, and keep methods small and expressive.'
        security = 'Sanitize input, avoid eval with untrusted strings, and keep gems updated.'
        accessibility = 'Ruby accessibility is handled by generated applications and HTML output, not the language itself.'
        style = 'Use snake_case for variables and methods, PascalCase for classes, and consistent indentation.'
        patterns = 'Common patterns include MVC, service objects, decorators, and presenters.'
        projectStructure = 'A Ruby project often includes lib/, app/, config/, spec/, and a Gemfile for dependencies.'
        mistakes = 'Avoid global state, monkey patching core classes indiscriminately, and overly complex metaprogramming.'
        interview = 'Expect questions about blocks, procs, mixins, and Rails conventions.'
        problems = 'Practice building command-line tools, small web services, and data-processing scripts.'
        real = 'Real Ruby projects include web applications, automation scripts, and developer tools.'
        cheatSheet = 'Remember def, class, module, if, else, elsif, each, map, block syntax, and symbols.'
        faq = 'Common questions cover blocks vs procs, symbols vs strings, and how Ruby handles object orientation.'
        prosCons = 'Ruby is elegant and productive, but can be slower than compiled languages and depends on gem quality.'
        comparison = 'Ruby is compared to Python for readability and to JavaScript for web frameworks.'
        latest = 'Recent Ruby adds pattern matching, rightward assignment, and improved error messages.'
        future = 'Ruby continues to be used for web development, scripting, and DSL-based frameworks.'
        examples = @(
            @{code='score = 42\nname = "QuBeat"\nputs "#{name} scored #{score}"'; explanation='A Ruby string interpolation example that prints a formatted message.'},
            @{code='def add(a, b)\n  a + b\nend\n\nputs add(2, 3)'; explanation='A Ruby method that returns the sum of two values.'},
            @{code='items = ["sword", "shield"]\nitems.each do |item|\n  puts item\nend'; explanation='An iterator that prints each item in an array.'}
        )
    },
    @{
        key = 'TypeScript'
        title = 'TypeScript'
        summary = 'TypeScript adds static typing to JavaScript, making code safer and easier to maintain in large applications.'
        overview = 'TypeScript compiles to JavaScript and introduces types, interfaces, enums, and modern tooling support.'
        history = 'TypeScript was released by Microsoft in 2012 to address JavaScript scalability in large codebases.'
        versionNotes = 'Recent TypeScript versions improve type inference, template literal types, and support for ECMAScript proposals.'
        fileStructure = 'A TypeScript project uses tsconfig.json, src/, tests/, and declaration files (.d.ts) when publishing packages.'
        syntaxExample1 = 'const score: number = 42;\nconst player: string = "QuBeat";\nconsole.log(`${player} scored ${score}`);'
        syntaxExample2 = 'interface Player {\n  name: string;\n  score: number;\n}\n\nconst player: Player = { name: "QuBeat", score: 10 };'
        keywords = 'TypeScript shares JavaScript keywords and adds type-specific syntax like interface, type, enum, readonly, and as.'
        dataTypes = 'TypeScript data types include number, string, boolean, any, unknown, never, tuple, enum, and union types.'
        variables = 'Use let and const, and declare types when needed for clearer APIs.'
        operators = 'TypeScript uses JavaScript operators and adds type guards with instanceof and typeof.'
        controlFlow = 'TypeScript control flow is the same as JavaScript, with extra type narrowing inside branches.'
        functions = 'TypeScript functions include parameter and return type annotations.'
        classes = 'TypeScript classes support constructors, access modifiers, and implements clauses.'
        objects = 'Objects are typed as interfaces, type aliases, or inline object shapes.'
        oop = 'TypeScript supports OOP features with stricter type checking and visibility modifiers.'
        modules = 'Use ES modules with import/export syntax and configure module resolution in tsconfig.json.'
        libraries = 'TypeScript is used with React, Angular, Vue, Node libraries, and typed definitions from DefinitelyTyped.'
        apis = 'TypeScript APIs are typed with interfaces and generics, improving editor support and refactoring.'
        errorHandling = 'TypeScript compiles away and runtime error handling uses JavaScript try/catch, but type errors are caught at compile time.'
        memory = 'TypeScript does not change runtime memory management; it compiles to JavaScript.'
        performance = 'TypeScript adds a compile step but improves developer productivity and catches bugs before runtime.'
        bestPractices = 'Use strict mode, avoid any, prefer readonly and type-safe APIs.'
        security = 'Type safety reduces defects, but runtime security still depends on input validation and secure coding.'
        accessibility = 'TypeScript accessibility refers to code clarity and maintainability, not UI accessibility.'
        style = 'Use consistent naming, explicit types in public APIs, and type aliases for complex structures.'
        patterns = 'Common TypeScript patterns include typed Redux stores, utility types, generics, and mapped types.'
        projectStructure = 'A TypeScript project includes src/, dist/, tsconfig.json, package.json, and type definition files.'
        mistakes = 'Avoid overusing any, ignore type errors, and mix implicit and explicit types inconsistently.'
        interview = 'TypeScript interviews cover types, generics, unions, intersections, and type narrowing.'
        problems = 'Practice converting JavaScript modules, typing APIs, and designing generic utility functions.'
        real = 'Real TypeScript projects include frontend apps, backend services, libraries, and CLI tools.'
        cheatSheet = 'Remember interface, type, enum, readonly, generic <T>, and type guards like typeof.'
        faq = 'Common questions cover how TypeScript differs from JavaScript and how to configure tsconfig for strictness.'
        prosCons = 'TypeScript adds safety and tooling at the cost of compilation and more upfront typing work.'
        comparison = 'TypeScript is compared to JavaScript for typing and to Flow for static analysis.'
        latest = 'Latest TypeScript features include template literal types, satisfies operator, and improved inference.'
        future = 'TypeScript will keep strengthening type inference and narrowing while embracing new ECMAScript features.'
        examples = @(
            @{code='type Player = {\n  name: string;\n  score: number;\n};\n\nconst player: Player = { name: "QuBeat", score: 10 };'; explanation='A typed object shape using an alias for a player model.'},
            @{code='function add(a: number, b: number): number {\n  return a + b;\n}\n\nconst result = add(2, 3);'; explanation='A function with parameter and return type annotations.'},
            @{code='const maybeName: string | null = null;\nconst name = maybeName ?? "Guest";'; explanation='A union type with nullish coalescing to provide a fallback value.'}
        )
    },
    @{
        key = 'Tailwind'
        title = 'Tailwind'
        summary = 'Tailwind is a utility-first CSS framework that lets developers build custom designs with low-level utility classes.'
        overview = 'Tailwind provides many small classes that map directly to CSS properties, enabling rapid styling without custom CSS for every component.'
        history = 'Tailwind was introduced in 2017 and became popular for its utility-first approach, enabling responsive design and consistent spacing.'
        versionNotes = 'Latest Tailwind versions include JIT mode, arbitrary value support, and improved plugin APIs.'
        fileStructure = 'A Tailwind project uses a configuration file, CSS entry point with @tailwind directives, and source files with HTML or templates that use utility classes.'
        syntaxExample1 = '&lt;button class="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-400"&gt;Start&lt;/button&gt;'
        syntaxExample2 = '&lt;div class="grid grid-cols-1 md:grid-cols-3 gap-6"&gt;...&lt;/div&gt;'
        keywords = 'Tailwind does not have keywords like a programming language, but it has class names such as bg-, text-, flex, grid, gap-, and rounded-.'
        dataTypes = 'Tailwind values are CSS properties encoded as utility class names, such as spacing, color, size, and layout.'
        variables = 'Tailwind uses configuration values and CSS custom properties where needed, but most styles come from utility classes.'
        operators = 'Tailwind does not use operators; it composes styles by stacking classes in HTML.'
        controlFlow = 'Tailwind styling is static; conditionals are managed by templates or JavaScript frameworks that render class names dynamically.'
        functions = 'Tailwind includes helper functions in configuration, such as theme() and plugin() inside tailwind.config.js.'
        classes = 'Tailwind classes are the primary way to express styles directly in markup.'
        objects = 'Tailwind itself does not define objects, but its configuration is a JavaScript object in tailwind.config.js.'
        oop = 'Tailwind is not object-oriented; it is a styling methodology built on utility classes.'
        modules = 'Tailwind is installed as an npm package and composed through build tools like PostCSS and Vite.'
        libraries = 'Tailwind works with companion libraries such as Headless UI, Heroicons, and Tailwind UI.'
        apis = 'Tailwind exposes a plugin API and a configuration API for theme customization and custom utilities.'
        errorHandling = 'Tailwind errors appear at build time from invalid class names or config values.'
        memory = 'Tailwind does not manage memory at runtime; its output is static CSS generated during the build.'
        performance = 'Tailwind performance is strong when using JIT mode and purging unused classes from production builds.'
        bestPractices = 'Use utility classes consistently, extract repeated patterns into components, and avoid deep nesting of custom CSS.'
        security = 'Tailwind itself is safe, but generated class names should not include unsanitized user input.'
        accessibility = 'Use Tailwind to create accessible focus rings, spacing, contrast, and responsive layouts.'
        style = 'Keep markup readable by grouping related utilities and using semantic class ordering.'
        patterns = 'Common patterns include component classes, responsive variants, hover/focus states, and theme customization.'
        projectStructure = 'A Tailwind project includes tailwind.config.js, a CSS entry point, a source folder, and build tooling configuration.'
        mistakes = 'Avoid unmaintainable class lists, mixing logic in markup, and not purging unused utilities.'
        interview = 'Expect questions about the JIT compiler, responsive prefixes, and how Tailwind differs from traditional CSS.'
        problems = 'Practice building navbars, card grids, forms, and responsive landing pages with Tailwind.'
        real = 'Real Tailwind projects include dashboards, marketing sites, and component libraries with consistent spacing and theme tokens.'
        cheatSheet = 'Remember bg-, text-, px-, py-, rounded-, shadow-, flex, grid, gap-, and transition-.'
        faq = 'Common questions cover customizing the theme, responsive classes, and when to use Tailwind vs custom CSS.'
        prosCons = 'Tailwind is fast to build with and consistent, but HTML can grow verbose without component extraction.'
        comparison = 'Tailwind is compared to Bootstrap for utility-first vs component-based styling and to plain CSS for flexibility.'
        latest = 'Tailwind JIT mode and arbitrary value syntax let you write classes like bg-[#ff0080] and text-[clamp(1rem,2vw,2rem)].' 
        future = 'Tailwind will continue improving designer collaboration, plugin ecosystems, and build performance.'
        examples = @(
            @{code='&lt;div class="max-w-5xl mx-auto p-6 bg-slate-900 text-white rounded-3xl shadow-2xl"&gt;...&lt;/div&gt;'; explanation='A Tailwind container with spacing, background, text, border radius, and shadow utilities.'},
            @{code='&lt;button class="inline-flex items-center gap-3 px-5 py-3 bg-pink-500 hover:bg-pink-400 text-white rounded-full"&gt;Play&lt;/button&gt;'; explanation='A styled button with hover states, spacing, and rounded corners.'},
            @{code='&lt;div class="grid grid-cols-1 md:grid-cols-3 gap-6"&gt;...&lt;/div&gt;'; explanation='A responsive grid layout that changes from one column on small screens to three columns on medium screens.'}
        )
    }
)

function Get-GuideHtml($page) {
    $title = $page.title
    $summary = $page.summary
    $overview = $page.overview
    $history = $page.history
    $versionNotes = $page.versionNotes
    $fileStructure = $page.fileStructure
    $syntax1 = $page.syntaxExample1
    $syntax2 = $page.syntaxExample2
    $keywords = $page.keywords
    $dataTypes = $page.dataTypes
    $variables = $page.variables
    $operators = $page.operators
    $controlFlow = $page.controlFlow
    $functions = $page.functions
    $classes = $page.classes
    $objects = $page.objects
    $oop = $page.oop
    $modules = $page.modules
    $libraries = $page.libraries
    $apis = $page.apis
    $errorHandling = $page.errorHandling
    $memory = $page.memory
    $performance = $page.performance
    $bestPractices = $page.bestPractices
    $security = $page.security
    $accessibility = $page.accessibility
    $style = $page.style
    $patterns = $page.patterns
    $projectStructure = $page.projectStructure
    $mistakes = $page.mistakes
    $interview = $page.interview
    $problems = $page.problems
    $real = $page.real
    $cheatSheet = $page.cheatSheet
    $faq = $page.faq
    $prosCons = $page.prosCons
    $comparison = $page.comparison
    $latest = $page.latest
    $future = $page.future
    $examples = $page.examples

    $exampleRows = $examples | ForEach-Object {
        "<tr><td><pre><code>$($_.code)</code></pre></td><td>$($_.explanation)</td></tr>"
    } | Out-String

    return @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>$title Master Guide</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double:wght@100..900&family=Creepster&family=Caveat&family=Luckiest+Guy&family=Playwrite+NZ+Basic:wght@100..400&display=swap" rel="stylesheet">
  <style>
    :root {
      color-scheme: dark;
      --bg: #040616;
      --surface: rgba(8, 12, 30, 0.92);
      --surface-soft: rgba(12, 18, 44, 0.9);
      --border: rgba(255, 99, 212, 0.18);
      --text: #f4e9ff;
      --muted: #c9b8ef;
      --accent: #ff86e1;
      --accent-strong: #5ef0ff;
      --shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
    }
    html { min-height: 100%; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Playwrite NZ Basic', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(255, 92, 227, 0.14), transparent 24%),
        radial-gradient(circle at bottom right, rgba(92, 231, 255, 0.12), transparent 24%),
        url("background.gif") center/cover fixed no-repeat,
        linear-gradient(180deg, #040816 0%, #08122a 100%);
      padding: 32px 20px 48px;
      background-attachment: fixed;
    }
    .page {
      max-width: 1180px;
      margin: 0 auto;
      display: grid;
      gap: 28px;
    }
    .page-header {
      display: grid;
      gap: 26px;
      padding: 34px;
      border-radius: 32px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(8, 12, 28, 0.92);
      box-shadow: var(--shadow);
      backdrop-filter: blur(16px);
    }
    .hero-grid {
      display: grid;
      gap: 24px;
      grid-template-columns: minmax(0, 1.35fr) minmax(260px, 320px);
      align-items: start;
    }
    .hero-summary {
      display: grid;
      gap: 18px;
    }
    .hero-summary h1 {
      margin: 0;
      font-family: 'Creepster', cursive;
      font-size: clamp(3rem, 4vw, 5rem);
      color: #ffb4ff;
      letter-spacing: 0.03em;
      text-shadow: 0 0 26px rgba(255, 114, 224, 0.28);
      line-height: 1.02;
    }
    .hero-summary p {
      margin: 0;
      font-size: 1.05rem;
      line-height: 1.85;
      color: var(--muted);
    }
    .hero-meta {
      display: grid;
      gap: 16px;
    }
    .hero-stat {
      padding: 20px;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .hero-stat strong {
      display: block;
      margin-bottom: 0.5rem;
      color: #ffffff;
      font-size: 0.95rem;
    }
    .hero-stat p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
    }
    .info-grid {
      display: grid;
      gap: 18px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .info-card {
      padding: 22px;
      border-radius: 26px;
      background: rgba(7, 14, 30, 0.88);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .info-card h3 {
      margin: 0 0 10px;
      font-size: 1rem;
      color: #ffffff;
    }
    .info-card p {
      margin: 0;
      color: var(--muted);
      line-height: 1.75;
    }
    .content-grid {
      display: grid;
      gap: 28px;
    }
    .panel {
      background: rgba(3, 8, 23, 0.96);
      border: 1px solid rgba(255, 109, 235, 0.12);
      border-radius: 32px;
      box-shadow: var(--shadow);
      padding: 36px;
      overflow: hidden;
    }
    .section-block {
      padding: 28px;
      border-radius: 28px;
      background: rgba(8, 12, 30, 0.88);
      border: 1px solid rgba(255, 255, 255, 0.06);
      margin-top: 28px;
    }
    h2 {
      font-family: 'Luckiest Guy', cursive;
      color: #d0a4ff;
      margin: 0 0 20px;
      font-size: clamp(2.2rem, 3vw, 2.8rem);
      letter-spacing: 0.02em;
    }
    h3 {
      margin: 0 0 16px;
      color: #f4edff;
      font-size: 1.3rem;
    }
    p, li, td {
      color: var(--muted);
      line-height: 1.85;
      font-size: 1rem;
    }
    .intro { max-width: 82ch; }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.85rem 1.25rem;
      border-radius: 999px;
      background: rgba(255, 95, 226, 0.14);
      color: #ffd9ff;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.9rem;
    }
    .comic-brutal-button-container {
      --primary-color: #8516B5;
      --secondary-color: #F20069;
      --text-color: #F20069;
      --accent-color: #00F2F2;
      --panel-color: #00F2F2;
      --shadow-color: rgba(0, 0, 0, 0.75);

      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5rem 0 0.5rem 0;
    }

    .comic-brutal-button {
      position: relative;
      font-size: 1.15em;
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      transform: rotate(-2deg);
      transform-origin: center;
      transition: transform 0.15s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .button-inner {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--primary-color);
      color: var(--text-color);
      padding: 0.6em 1.1em;
      z-index: 3;
      overflow: hidden;
      transform: skew(-3deg, 1deg);
      transition: transform 0.15s cubic-bezier(0.22, 0.61, 0.36, 1);
      clip-path: polygon(
        0% 10%,
        3% 0%,
        97% 0%,
        100% 10%,
        100% 90%,
        97% 100%,
        3% 100%,
        0% 90%
      );
    }

    .button-text {
      position: relative;
      font-weight: 900;
      font-size: 1.2em;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      z-index: 5;
      color: var(--text-color);
      text-shadow:
        0.05em 0.05em 0 var(--panel-color),
        -0.05em -0.05em 0 var(--panel-color),
        0.05em -0.05em 0 var(--panel-color),
        -0.05em 0.05em 0 var(--panel-color);
      transform: rotate(2deg);
    }

    .button-frame {
      position: absolute;
      top: -0.3em;
      left: -0.3em;
      right: -0.3em;
      bottom: -0.3em;
      background-color: var(--accent-color);
      border: 0.15em solid var(--text-color);
      z-index: 1;
      transition: transform 0.15s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .button-shadow {
      position: absolute;
      top: 0.4em;
      left: 0.4em;
      right: -0.4em;
      bottom: -0.4em;
      background-color: var(--shadow-color);
      z-index: 0;
      transition: all 0.15s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .halftone-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(
        circle at 30% 30%,
        rgba(0, 0, 0, 0.2) 0.1em,
        transparent 0.1em
      );
      background-size: 0.5em 0.5em;
      background-position: 0 0;
      opacity: 0.3;
      z-index: 2;
      mix-blend-mode: multiply;
    }

    .ink-splatter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.2s ease;
      background: radial-gradient(
          circle at 20% 30%,
          rgba(0, 0, 0, 0.15) 0%,
          rgba(0, 0, 0, 0.08) 20%,
          transparent 50%
        ),
        radial-gradient(
          circle at 70% 65%,
          rgba(0, 0, 0, 0.15) 0%,
          rgba(0, 0, 0, 0.08) 25%,
          transparent 50%
        ),
        radial-gradient(
          circle at 40% 50%,
          rgba(0, 0, 0, 0.15) 0%,
          rgba(0, 0, 0, 0.08) 30%,
          transparent 60%
        ),
        radial-gradient(
          circle at 85% 15%,
          rgba(0, 0, 0, 0.15) 0%,
          rgba(0, 0, 0, 0.08) 15%,
          transparent 40%
        );
    }

    .comic-brutal-button:hover {
      transform: rotate(-1deg) scale(1.05);
    }

    .comic-brutal-button:hover .button-inner {
      transform: skew(-5deg, 2deg);
      background-color: var(--secondary-color);
    }

    .comic-brutal-button:hover .button-text {
      color: var(--panel-color);
      text-shadow:
        0.05em 0.05em 0 var(--text-color),
        -0.05em -0.05em 0 var(--text-color),
        0.05em -0.05em 0 var(--text-color),
        -0.05em 0.05em 0 var(--text-color);
    }

    .comic-brutal-button:hover .button-shadow {
      transform: translate(0.2em, 0.2em);
    }

    .comic-brutal-button:hover .ink-splatter {
      opacity: 1;
    }

    .comic-brutal-button:focus {
      outline: none;
    }

    .comic-brutal-button:focus .button-frame {
      border-color: var(--secondary-color);
    }

    .comic-brutal-button:active {
      transform: rotate(0) scale(0.98);
    }

    .comic-brutal-button:active .button-inner {
      transform: skew(0, 0);
    }

    .comic-brutal-button:active .button-shadow {
      transform: translate(0.1em, 0.1em);
    }

    @keyframes burst {
      0% {
        transform: scale(0.95);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }

    .comic-brutal-button:active .button-text {
      animation: burst 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    @keyframes dash {
      to {
        stroke-dashoffset: -20;
      }
    }

    .comic-brutal-button:focus::after {
      content: "";
      position: absolute;
      top: -0.5em;
      left: -0.5em;
      right: -0.5em;
      bottom: -0.5em;
      border: 0.15em dashed var(--text-color);
      z-index: 0;
      animation: dash 1s linear infinite;
      pointer-events: none;
    }

    .comic-brutal-button::before {
      content: "";
      position: absolute;
      top: 0.4em;
      left: 0.8em;
      width: 1em;
      height: 1em;
      background-color: var(--accent-color);
      border-radius: 50%;
      z-index: 2;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .comic-brutal-button:hover::before {
      opacity: 0.7;
    }

    @keyframes action-lines {
      0% {
        opacity: 0;
        transform: scale(0.7);
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        transform: scale(1.2);
      }
    }

    .comic-brutal-button:active::before {
      content: "";
      position: absolute;
      top: -1em;
      left: -1em;
      right: -1em;
      bottom: -1em;
      background-image: radial-gradient(var(--text-color) 0%, transparent 70%),
        repeating-conic-gradient(
          transparent 0%,
          transparent 5%,
          var(--text-color) 5%,
          var(--text-color) 6%
        );
      opacity: 0;
      z-index: 6;
      mix-blend-mode: overlay;
      pointer-events: none;
      animation: action-lines 0.5s ease-out forwards;
    }

    .toc {
      display: none;
      width: min(100%, 420px);
      padding: 16px;
      border-radius: 20px;
      background: rgba(7, 12, 26, 0.92);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .toc h3 {
      margin: 0 0 12px;
      font-size: 1rem;
      color: #ffffff;
    }
    .toc ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 10px;
    }
    .toc a {
      color: var(--muted);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .toc a:hover { color: #ffffff; }
    .top-layout { display: grid; gap: 28px; grid-template-columns: minmax(260px, 320px) minmax(0, 1fr); align-items: start; }
    .card { background: rgba(8, 14, 46, 0.9); border: 1px solid rgba(213, 136, 255, 0.14); border-radius: 22px; padding: 22px; }
    .card strong { color: #f5e2ff; }
    pre, code { font-family: ui-monospace, SFMono-Regular, Consolas, Monaco, 'Liberation Mono', monospace; background: #08122f; color: #f6f1ff; border-radius: 16px; overflow-x: auto; }
    pre { padding: 22px; margin: 20px 0; }
    code.inline { padding: 4px 8px; border-radius: 10px; background: rgba(255, 255, 255, 0.08); }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { border: 1px solid rgba(255, 255, 255, 0.12); padding: 14px 16px; text-align: left; vertical-align: top; }
    th { background: rgba(255, 110, 218, 0.12); color: #ffe4ff; }
    .question, .exercise { margin-top: 18px; padding: 18px 22px; background: rgba(255, 97, 205, 0.08); border-left: 4px solid #ff7cf0; border-radius: 18px; }
    .answer { margin-top: 10px; padding: 16px 20px; background: rgba(255, 255, 255, 0.06); border-radius: 16px; }
    .note { display: inline-flex; margin-top: 14px; padding: 12px 16px; background: rgba(255, 255, 255, 0.08); border-radius: 14px; }
    .exercise-list { margin-top: 14px; padding-left: 24px; }
    @media (max-width: 1024px) { .hero-grid { grid-template-columns: 1fr; } .info-grid { grid-template-columns: 1fr; } .content-grid { grid-template-columns: 1fr; } }
    @media (max-width: 860px) { .grid-two { grid-template-columns: 1fr; } .page { padding: 24px 16px 40px; } .top-layout { grid-template-columns: 1fr; } .toc { display: block; } }
    @media (min-width: 1180px) { .toc { display: block; } }
  </style>
</head>
<body>
  <div class="page">
    <div class="comic-brutal-button-container">
      <button class="comic-brutal-button" type="button" aria-label="Back to language selector" onclick="window.location.href='QubeatLanguage.html'">
        <div class="button-inner">
          <span class="button-text">Back</span>
          <div class="halftone-overlay"></div>
          <div class="ink-splatter"></div>
        </div>
        <div class="button-shadow"></div>
        <div class="button-frame"></div>
      </button>
    </div>
    <div class="top-layout">
      <aside class="toc">
        <h3>Page quick links</h3>
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#versions">Versions</a></li>
          <li><a href="#syntax">Syntax</a></li>
          <li><a href="#best-practices">Best practices</a></li>
          <li><a href="#examples">Examples</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </aside>
      <div class="page-header">
        <div class="hero-grid">
          <div class="hero-summary">
            <span class="badge">Complete Master Guide</span>
            <h1>$title Master Guide</h1>
            <p class="intro">$overview</p>
            <p>This guide covers $title in a complete, practical way: history, syntax, architecture, best practices, security, and real-world usage across the full language ecosystem.</p>
          </div>
          <div class="hero-meta">
            <div class="hero-stat">
              <strong>Language</strong>
              <p>$title</p>
            </div>
            <div class="hero-stat">
              <strong>Quick Summary</strong>
              <p>$summary</p>
            </div>
            <div class="hero-stat">
              <strong>Mastery focus</strong>
              <p>Practical fundamentals, tips, and examples for fast language confidence.</p>
            </div>
          </div>
        </div>
        <div class="info-grid">
          <div class="info-card"><h3>What you learn</h3><p>$patterns</p></div>
          <div class="info-card"><h3>Best practice</h3><p>$bestPractices</p></div>
          <div class="info-card"><h3>Real world</h3><p>$real</p></div>
        </div>
      </div>
    </div>
    <div class="content-grid">
      <article class="panel">
      <h2 id="introduction">1. Introduction</h2>
      <p>$overview</p>
      <p>$summary</p>

      <h2 id="history">2. History</h2>
      <p>$history</p>
      <div class="grid-two">
        <div class="card"><strong>Origin</strong><p>Many of the core ideas in $title came from early language design and the need to solve real-world problems efficiently.</p></div>
        <div class="card"><strong>Evolution</strong><p>$versionNotes</p></div>
      </div>

      <h2 id="versions">3. Versions</h2>
      <p>$versionNotes</p>
      <table>
        <thead><tr><th>Version</th><th>What changed</th></tr></thead>
        <tbody>
          <tr><td>Early release</td><td>Introduced the core language and basic syntax.</td></tr>
          <tr><td>Modern release</td><td>Added current best practices, performance improvements, and ecosystem stability.</td></tr>
          <tr><td>Latest</td><td>Includes the newest features and modern tooling support.</td></tr>
        </tbody>
      </table>

      <h2>4. File Structure</h2>
      <p>$fileStructure</p>
      <pre><code>$syntax1</code></pre>
      <p>That example shows the most important structural elements for $title projects.</p>

      <h2 id="syntax">5. Syntax</h2>
      <p>$syntax1</p>
      <p>Explanation:</p>
      <ul>
        <li>The first line declares the document or variable definition using $title syntax.</li>
        <li>Subsequent lines show how to write a simple program, element, or style block depending on the language.</li>
      </ul>
      <pre><code>$syntax2</code></pre>
      <p>Additional example that expands the syntax in a more practical direction.</p>

      <h2>6. Keywords</h2>
      <p>$keywords</p>

      <h2>7. Data Types</h2>
      <p>$dataTypes</p>

      <h2>8. Variables</h2>
      <p>$variables</p>

      <h2>9. Operators</h2>
      <p>$operators</p>

      <h2>10. Control Flow</h2>
      <p>$controlFlow</p>

      <h2>11. Functions</h2>
      <p>$functions</p>

      <h2>12. Classes</h2>
      <p>$classes</p>

      <h2>13. Objects</h2>
      <p>$objects</p>

      <h2>14. OOP Concepts</h2>
      <p>$oop</p>

      <h2>15. Modules</h2>
      <p>$modules</p>

      <h2>16. Libraries</h2>
      <p>$libraries</p>

      <h2>17. APIs</h2>
      <p>$apis</p>

      <h2>18. Error Handling</h2>
      <p>$errorHandling</p>

      <h2>19. Memory Management</h2>
      <p>$memory</p>

      <h2>20. Performance</h2>
      <p>$performance</p>

      <h2 id="best-practices">21. Best Practices</h2>
      <p>$bestPractices</p>

      <h2>22. Security</h2>
      <p>$security</p>

      <h2>23. Accessibility</h2>
      <p>$accessibility</p>

      <h2>24. Code Style</h2>
      <p>$style</p>

      <h2>25. Design Patterns</h2>
      <p>$patterns</p>

      <h2>26. Project Structure</h2>
      <p>$projectStructure</p>

      <h2>27. Common Mistakes</h2>
      <p>$mistakes</p>

      <h2>28. Interview Questions</h2>
      <p>$interview</p>

      <h2>29. Practice Problems</h2>
      <p>$problems</p>

      <h2>30. Real Projects</h2>
      <p>$real</p>

      <h2>31. Cheat Sheet</h2>
      <p>$cheatSheet</p>

      <h2 id="faq">32. FAQ</h2>
      <p>$faq</p>

      <h2>33. Pros and Cons</h2>
      <p>$prosCons</p>

      <h2>34. Comparison with other languages</h2>
      <p>$comparison</p>

      <h2>35. Latest Features</h2>
      <p>$latest</p>

      <h2>36. Future of the language</h2>
      <p>$future</p>

      <h2 id="examples">Examples</h2>
      <table>
        <thead><tr><th>Example</th><th>Explanation</th></tr></thead>
        $exampleRows
      </table>

      <div class="question">
        <h3>Practice challenge</h3>
        <p>Build a small example that uses the key language features from this guide and explain each line as you write it.</p>
      </div>
    </article>
  </div>
</body>
</html>
"@
}

foreach ($page in $pages) {
    $html = Get-GuideHtml $page
    $outputPath = Join-Path $PSScriptRoot "$($page.key).html"
    $html | Set-Content -Path $outputPath -Encoding utf8
    Write-Host "Wrote $($page.key).html"
}
