const codeSnippets = ["topic.png", "awaited.png",
    ["async function fetchUserData(): Promise&lt;{ name: string; age: number }&gt; {\n" +
    "    return { name: \"Alice\", age: 30 };\n" +
    "}\n" +
    "\n" +
    "async function fetchData(): Promise&lt;string&gt; {\n" +
    "    return \"Hello, TypeScript World!\";\n" +
    "}\n" +
    "\n" +
    "type UserData = Awaited&lt;ReturnType&lt;typeof fetchUserData&gt;&gt;;\n" +
    "type DataString = Awaited&lt;ReturnType&lt;typeof fetchData&gt;&gt;;\n" +
    "\n" +
    "//Result:\n" +
    "const userData = fetchUserData(); // Promise&lt;{ name: string; age: number }&gt;\n" +
    "const dataString = fetchData(); // Promise&lt;string&gt;"
    ], "Partial.png", [
        "interface Person {\n" +
        "    name: string;\n" +
        "    age: number;\n" +
        "    address: string;\n" +
        "}\n" +
        "\n" +
        `const partialPerson: Partial&lt;Person&gt; = {\n` +
        "    name: \"John\",\n" +
        "    age: 25,\n" +
        "    // address is optional and can be omitted\n" +
        "};\n" +
        "\n" +
        "// partialPerson is { name?: string; age?: number; address?: string; }"],
    ["interface Todo {\n" +
    "  title: string;\n" +
    "  description: string;\n" +
    "}\n" +
    " \n" +
    "function updateTodo(todo: Todo, fieldsToUpdate: Partial&lt;Todo&gt;) {\n" +
    "  return { ...todo, ...fieldsToUpdate };\n" +
    "}\n" +
    " \n" +
    "const todo1 = {\n" +
    "  title: \"organize desk\",\n" +
    "  description: \"clear clutter\",\n" +
    "};\n" +
    " \n" +
    "const todo2 = updateTodo(todo1, {\n" +
    "  description: \"throw out trash\",\n" +
    "});"
    ], "Required.png", ["interface PartialPerson {\n" +
    "    name?: string;\n" +
    "    age?: number;\n" +
    "}\n" +
    "\n" +
    "const requiredPerson: Required&lt;PartialPerson&gt; = {\n" +
    "    name: \"John\",\n" +
    "    age: 25,\n" +
    "    // All properties are now required, so no option to omit them\n" +
    "};\n" +
    "\n" +
    "// requiredPerson is { name: string; age: number; }"],
    "readonly.png",
    ["interface Config {\n" +
    "    apiKey: string;\n" +
    "    debugMode: boolean;\n" +
    "    timeout: number;\n" +
    "}\n" +
    "\n" +
    "const initialConfig: Readonly&lt;Config&gt; = {\n" +
    "    apiKey: \"secretKey\",\n" +
    "    debugMode: true,\n" +
    "    timeout: 5000,\n" +
    "};\n" +
    "\n" +
    "// Attempting to reassign a property will result in a TypeScript error\n" +
    "// initialConfig.apiKey = \"newKey\";\n" +
    "// initialConfig.debugMode = false;\n" +
    "// initialConfig.timeout = 10000;\n","",
    "//Another example: \n" +
    "function freeze&lt;Type&gt;(obj: Type): Readonly&lt;Type&gt; {\n" +
    "    return Object.freeze(obj);\n" +
    "};"],
    "Record.png",
    ["type Fruit = \"apple\" | \"banana\" | \"orange\";\n" +
    "type FruitPrices = Record&lt;Fruit, number&gt;;\n" +
    "\n" +
    "const fruitPrices: FruitPrices = {\n" +
    "    apple: 1.0,\n" +
    "    banana: 0.8,\n" +
    "    orange: 1.5,\n" +
    "};\n" +
    "\n" +
    "// fruitPrices is {\n" +
    "//     apple: number,\n" +
    "//     banana: number,\n" +
    "//     orange: number }\n\n"
        ,
    "interface Employee {\n" +
    "    id: number;\n" +
    "    name: string;\n" +
    "}\n" +
    "type EmployeeDatabase = Record&lt;number, Employee&gt;;\n" +
    "\n" +
    "const employees: EmployeeDatabase = {\n" +
    "    1: { id: 1, name: \"Alice\" },\n" +
    "    2: { id: 2, name: \"Bob\" },\n" +
    "    3: { id: 3, name: \"Charlie\" },\n" +
    "};\n" +
    "\n" +
    "// employees is { 1: Employee, 2: Employee, 3: Employee }"],
    "Pick.png",
    ["interface Product {\n" +
    "    id: number;\n" +
    "    name: string;\n" +
    "    price: number;\n" +
    "    category: string;\n" +
    "}\n" +
    "\n" +
    "type ProductSummary = Pick&lt;Product, 'name' | 'price'&gt;;\n" +
    "\n" +
    "const productDetails: ProductSummary = {\n" +
    "    name: \"Laptop\",\n" +
    "    price: 999.99,\n" +
    "    // Omitting 'id' and 'category' is allowed \n" +
    "//because ProductSummary only includes 'name' and 'price'\n" +
    "};\n" +
    "\n" +
    "// productDetails is { name: string, price: number }"],
    "Omit.png",
    ["interface Product {\n" +
    "    id: number;\n" +
    "    name: string;\n" +
    "    price: number;\n" +
    "    category: string;\n" +
    "}\n" +
    "\n" +
    "type ProductDetails = Omit&lt;Product, 'id' | 'category'&gt;;\n" +
    "\n" +
    "const simplifiedProduct: ProductDetails = {\n" +
    "    name: \"Smartphone\",\n" +
    "    price: 599.99,\n" +
    "    // 'id' and 'category' are omitted because ProductDetails excludes them\n" +
    "};\n" +
    "\n" +
    "// simplifiedProduct is { name: string, price: number }"],
    "Exclude.png",
    ["type Numbers = 1 | 2 | 3 | 4 | 5;\n" +
    "type EvenNumbers = Exclude&lt;Numbers, 1 | 3 | 5&gt;;\n" +
    "\n" +
    "// EvenNumbers is 2 | 4",
        "type Shape =\n" +
        "  | { kind: \"circle\"; radius: number }\n" +
        "  | { kind: \"square\"; x: number }\n" +
        "  | { kind: \"triangle\"; x: number; y: number };\n" +
        " \n" +
        "type notAcircle = Exclude&lt;Shape, { kind: \"circle\" }&gt;\n\n" +
        "// type notAcircle = {\n" +
        "//    kind: \"square\"; x: number;\n" +
        "//    } | {\n" +
        "//    kind: \"triangle\"; x: number; y: number;\n" +
        "//    }"],
    "Extract.png",
    ["type UserRole = \"user\" | \"admin\" | \"manager\" | \"guest\";\n" +
    "\n" +
    "type AdminRoles = Extract&lt;UserRole, \"admin\" | \"manager\"&gt;;\n" +
    "// AdminRoles is \"admin\" | \"manager\""],
    "NonNullable.png", [
        "type example1 = NonNullable&lt;string | number | undefined&gt;;\n" +
        "//type example1 = string | number\n" +
        "\n" +
        "type example2 = NonNullable&lt;string[] | null | undefined&gt;;\n" +
        "\n" +
        "//type example2 = string[]"
    ],
    "Parameters.png", ["type MathOperation = (a: number, b: number) => number;\n" +
    "\n" +
    "type OperationParameters = Parameters&lt;MathOperation&gt;;\n" +
    "\n" +
    "// OperationParameters is [number, number]\n" +
    "\n",
        "type UserCallback = (name: string, age: number, email: string) => void;\n" +
        "\n" +
        "type CallbackParameters = Parameters&lt;UserCallback&gt;;\n" +
        "\n" +
        "// CallbackParameters is [string, number, string]"],
    "ConstructorParameters.png",
    ["class Person {\n" +
    "    constructor(name: string, age: number) {\n" +
    "        // constructor implementation\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "type PersonConstructorParameters = ConstructorParameters&lt;typeof Person&gt;;\n" +
    "\n" +
    "// PersonConstructorParameters is [string, number]"],
    "RetrunType.png",
    ["type UserCallback = (name: string, age: number, email: string) => { \n" +
    "   return {id: number, isActive: boolean}\n" +
    "   };\n" +
    "\n" +
    "type CallbackResult = ReturnType&lt;UserCallback&gt;;\n" +
    "\n" +
    "// CallbackResult is { id: number, isActive: boolean }",
        "function processData(input: number | string): { result: string } | number {\n" +
        "    if (typeof input === 'number') {\n" +
        "        return input * 2;\n" +
        "    } else {\n" +
        "        return { result: input.toUpperCase() };\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "type ProcessedData = ReturnType&lt;typeof processData&gt;;\n" +
        "\n" +
        "// ProcessedData is { result: string } | number"],
    "InstanceType.png",
    ["class Car {\n" +
    "    brand: string;\n" +
    "\n" +
    "    constructor(brand: string) {\n" +
    "        this.brand = brand;\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "const myCar: InstanceType&lt;typeof Car&gt; = new Car(\"Fiat\");\n" +
    "\n" +
    "// myCar is an instance of Car\n" +
    "// The type of myCar is { brand: string }",
        "class Animal {\n" +
        "    name: string;\n" +
        "\n" +
        "    constructor(name: string) {\n" +
        "        this.name = name;\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "class Dog extends Animal {\n" +
        "    bark(): void {\n" +
        "        console.log(\"Woof!\");\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "const myDog: InstanceType&lt;typeof Dog&gt; = new Dog(\"Buddy\");\n" +
        "\n" +
        "// myDog is an instance of Dog\n" +
        "// The type of myDog is { name: string } & Dog"],
];

const itemsPerPage = 1;
let currentPage = 1;

function displayCodeSnippets(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const snippetsToShow = codeSnippets.slice(startIndex, endIndex);
    const codeContainer = document.querySelector('.code-container');

    // Prism.js
    codeContainer.innerHTML = snippetsToShow.map(snippets => {
        if (typeof snippets === "string") {
            console.log(snippets)
            return `<img class="img" src=${snippets} />`
        } else {
            return snippets.map((snippet) => {

                return `<pre class="language-javascript"><code>${snippet}</code></pre>`;
            }).join("");
        }


    }).join("");

    Prism.highlightAll();
}


function updatePageInfo() {
    const totalPages = Math.ceil(codeSnippets.length / itemsPerPage);
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayCodeSnippets(currentPage);
        updatePageInfo();
    }
}

function nextPage() {
    const totalPages = Math.ceil(codeSnippets.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayCodeSnippets(currentPage);
        updatePageInfo();
    }
}

displayCodeSnippets(currentPage);
updatePageInfo();
