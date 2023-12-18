async function fetchUserData(): Promise<{ name: string; age: number }> {
    return { name: "Alice", age: 30 };
}

async function fetchData(): Promise<string> {
    return "Hello, TypeScript World!";
}

type UserData = Awaited<ReturnType<typeof fetchUserData>>;
type DataString = Awaited<ReturnType<typeof fetchData>>;

//Result:

const userData: Promise<{ name: string; age: number }> = fetchUserData();
const dataString: Promise<string> = fetchData();

////


interface Person {
    name: string;
    age: number;
    address: string;
}

const partialPerson: Partial<Person> = {
    name: "John",
    age: 25,
    // address is optional and can be omitted
};

// partialPerson is { name?: string; age?: number; address?: string; }
//real-life example:

interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
////
//Required
interface PartialPerson {
    name?: string;
    age?: number;
}

const requiredPerson: Required<PartialPerson> = {
    name: "John",
    age: 25,
    // All properties are now required, so no option to omit them
};

// requiredPerson is { name: string; age: number; }

//Readonly

interface Config {
    apiKey: string;
    debugMode: boolean;
    timeout: number;
}

const initialConfig: Readonly<Config> = {
    apiKey: "secretKey",
    debugMode: true,
    timeout: 5000,
};

// Attempting to reassign a property will result in a TypeScript error
// initialConfig.apiKey = "newKey";
// initialConfig.debugMode = false;
// initialConfig.timeout = 10000;

//reallife:


function freeze<Type>(obj: Type): Readonly<Type> {
    return Object.freeze(obj);
};
//Record
//Pick
//Omit

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

type ProductDetails = Omit<Product, 'id' | 'category'>;

const simplifiedProduct: ProductDetails = {
    name: "Smartphone",
    price: 599.99,
    // 'id' and 'category' are omitted because ProductDetails excludes them
};

// simplifiedProduct is { name: string, price: number }

//Excluded

type Numbers = 1 | 2 | 3 | 4 | 5;
type EvenNumbers = Exclude<Numbers, 1 | 3 | 5>;

// EvenNumbers is 2 | 4


type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; x: number }
    | { kind: "triangle"; x: number; y: number };

type notAcircle = Exclude<Shape, { kind: "circle" }>
//Extract

type UserRole = "user" | "admin" | "manager" | "guest";

type AdminRoles = Extract<UserRole, "admin" | "manager">;

// AdminRoles is "admin" | "manager"

//NonNullable

type example1 = NonNullable<string | number | undefined>;
//type T0 = string | number

type example2 = NonNullable<string[] | null | undefined>;

//type T1 = string[]

////Parameters

type MathOperation = (a: number, b: number) => number;

type OperationParameters = Parameters<MathOperation>;

// OperationParameters is [number, number]

type UserCallback = (name: string, age: number, email: string) => void;

type CallbackParameters = Parameters<UserCallback>;

// CallbackParameters is [string, number, string]

/////ConstructorParameters<Type>

class Person {
    constructor(name: string, age: number) {
        // constructor implementation
    }
}

type PersonConstructorParameters = ConstructorParameters<typeof Person>;

// PersonConstructorParameters is [string, number]


/////ReturnType

type UserCallback1 = (name: string, age: number, email: string) => { id: number, isActive: boolean };

type CallbackResult = ReturnType<UserCallback>;

// CallbackResult is { id: number, isActive: boolean }

function processData(input: number | string): { result: string } | number {
    if (typeof input === 'number') {
        return input * 2;
    } else {
        return { result: input.toUpperCase() };
    }
}

type ProcessedData = ReturnType<typeof processData>;

// ProcessedData is { result: string } | number

///// InstanceType<Type>

class Car {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }
}

const myCar: InstanceType<typeof Car> = new Car("Toyota");

// myCar is an instance of Car
// The type of myCar is { brand: string }

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof!");
    }
}

const myDog: InstanceType<typeof Dog> = new Dog("Buddy");

// myDog is an instance of Dog
// The type of myDog is { name: string } & Dog

//ThisParameterType

function toHex(this: Number) {
    return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
}

////ThisType<Type>

type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
}

let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx: number, dy: number) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        },
    },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
