---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Classes")}}

Die Methode **`constructor`** ist eine spezielle Methode einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) zum Erstellen und Initialisieren einer Objektinstanz dieser Klasse.

> [!NOTE]
> Diese Seite führt die `constructor`-Syntax ein. Für die `constructor`-Eigenschaft, die bei allen Objekten vorhanden ist, siehe {{jsxref("Object.prototype.constructor")}}.

{{InteractiveExample("JavaScript Demo: Classes Constructor")}}

```js interactive-example
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// Expected output: "Polygon"
```

## Syntax

```js-nolint
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }
```

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Eine Klassenmethode namens `constructor` kann kein [getter](/de/docs/Web/JavaScript/Reference/Functions/get), [setter](/de/docs/Web/JavaScript/Reference/Functions/set), [async](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder [generator](/de/docs/Web/JavaScript/Reference/Statements/function*) sein.
- Eine Klasse kann nicht mehr als eine `constructor`-Methode haben.

## Beschreibung

Ein `constructor` ermöglicht es Ihnen, jede benutzerdefinierte Initialisierung bereitzustellen, die durchgeführt werden muss, bevor andere Methoden auf einem instanziierten Objekt aufgerufen werden können.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new Person("Otto");

otto.introduce(); // Hello, my name is Otto
```

Wenn Sie keinen eigenen `constructor` bereitstellen, wird Ihnen ein Standard-`constructor` zur Verfügung gestellt.
Wenn Ihre Klasse eine Basisklasse ist, ist der Standard-`constructor` leer:

```js-nolint
constructor() {}
```

Wenn Ihre Klasse eine abgeleitete Klasse ist, ruft der Standard-`constructor` den übergeordneten Konstruktor auf und gibt alle übergebenen Argumente weiter:

```js-nolint
constructor(...args) {
  super(...args);
}
```

> [!NOTE]
> Der Unterschied zwischen einem expliziten `constructor` wie oben und dem Standard-`constructor` besteht darin, dass Letzterer nicht tatsächlich [den Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) über [Argumente-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) aufruft.

Das ermöglicht, dass Code wie dieser funktioniert:

```js
class ValidationError extends Error {
  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
```

Die Klasse `ValidationError` benötigt keinen expliziten `constructor`, da keine benutzerdefinierte Initialisierung erforderlich ist. Der Standard-`constructor` kümmert sich dann darum, die übergeordnete `Error`-Klasse mit dem übergebenen Argument zu initialisieren.

Wenn Sie jedoch einen eigenen `constructor` bereitstellen und Ihre Klasse von einer anderen Klasse erbt, müssen Sie den Konstruktor der übergeordneten Klasse explizit mit [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufrufen.
Ein Beispiel:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // call parent class constructor
    this.name = "ValidationError";
    this.code = "42";
  }

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // Now this is ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
```

Die Verwendung von [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) auf einer Klasse durchläuft die folgenden Schritte:

1. (Wenn es sich um eine abgeleitete Klasse handelt) Der `constructor`-Body vor dem Aufruf von `super()` wird ausgewertet. In diesem Abschnitt sollte nicht auf `this` zugegriffen werden, da es noch nicht initialisiert ist.
2. (Wenn es sich um eine abgeleitete Klasse handelt) Der `super()`-Aufruf wird ausgewertet, was die übergeordnete Klasse durch den gleichen Prozess initialisiert.
3. Die aktuellen [Felder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) der Klasse werden initialisiert.
4. Der `constructor`-Body nach dem Aufruf von `super()` (oder der gesamte Body, wenn es sich um eine Basisklasse handelt) wird ausgewertet.

Innerhalb des `constructor`-Bodies können Sie auf das erstellte Objekt über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zugreifen und die aufgerufene Klasse über [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) abrufen. Beachten Sie, dass Methoden (einschließlich [getters](/de/docs/Web/JavaScript/Reference/Functions/get) und [setters](/de/docs/Web/JavaScript/Reference/Functions/set)) und die [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) bereits auf `this` initialisiert sind, bevor der `constructor` ausgeführt wird. Daher können Sie sogar auf Methoden der Unterklasse aus dem Konstruktor der übergeordneten Klasse zugreifen. Wenn diese Methoden jedoch `this` verwenden, wird `this` möglicherweise noch nicht vollständig initialisiert. Das bedeutet, dass das Lesen öffentlicher Felder der abgeleiteten Klasse zu `undefined` führt, während das Lesen privater Felder zu einem `TypeError` führt.

```js example-bad
new (class C extends class B {
  constructor() {
    console.log(this.foo());
  }
} {
  #a = 1;
  foo() {
    return this.#a; // TypeError: Cannot read private member #a from an object whose class did not declare it
    // It's not really because the class didn't declare it,
    // but because the private field isn't initialized yet
    // when the superclass constructor is running
  }
})();
```

Die Methode `constructor` kann einen Rückgabewert haben. Während die Basisklasse alles von ihrem Konstruktor zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben; andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

```js
class ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ParentClass()); // ParentClass {}
// The return value is ignored because it's not an object
// This is consistent with function constructors

class ChildClass extends ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
```

Wenn der Konstruktor der übergeordneten Klasse ein Objekt zurückgibt, wird dieses Objekt als `this`-Wert verwendet, auf dem [Felder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) der abgeleiteten Klasse definiert werden. Dieser Trick wird ["Return Overriding"](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) genannt, wodurch es möglich wird, dass Felder der abgeleiteten Klasse (einschließlich [privater](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) auf nicht verbundenen Objekten definiert werden.

Der `constructor` folgt der normalen [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)-Syntax, sodass [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) usw. verwendet werden können.

```js
class Person {
  constructor(name = "Anonymous") {
    this.name = name;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person();
person.introduce(); // Hello, my name is Anonymous
```

Der `constructor` muss ein literaler Name sein. [Berechnete Properties](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) können keine Konstruktoren werden.

```js
class Foo {
  // This is a computed property. It will not be picked up as a constructor.
  ["constructor"]() {
    console.log("called");
    this.a = 1;
  }
}

const foo = new Foo(); // No log
console.log(foo); // Foo {}
foo.constructor(); // Logs "called"
console.log(foo); // Foo { a: 1 }
```

Asynchrone Methoden, Generator-Methoden, Accessoren und Klassenfelder dürfen nicht `constructor` genannt werden. Private Namen dürfen nicht `#constructor` heißen. Jeder Member, der `constructor` genannt wird, muss eine einfache Methode sein.

## Beispiele

### Den Constructor verwenden

Dieses Codebeispiel stammt aus dem [Sample zu Klassen](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // NOTE: In derived classes, `super()` must be called before you
    // can use `this`. Leaving this out will cause a ReferenceError.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value ** 0.5;
    this.width = value ** 0.5;
  }
}
```

### Super in einem `constructor` aufrufen, der an einen anderen Prototyp gebunden ist

`super()` ruft den Konstruktor auf, der der Prototyp der aktuellen Klasse ist. Wenn Sie den Prototyp der aktuellen Klasse selbst ändern, ruft `super()` den Konstruktor auf, der der neue Prototyp ist. Das Ändern des Prototyps der `prototype`-Eigenschaft der aktuellen Klasse hat keinen Einfluss darauf, welchen Konstruktor `super()` aufruft.

```js
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Rectangle {
  constructor() {
    this.name = "Rectangle";
  }
}

class Square extends Polygon {
  constructor() {
    super();
  }
}

// Make Square extend Rectangle (which is a base class) instead of Polygon
Object.setPrototypeOf(Square, Rectangle);

const newInstance = new Square();

// newInstance is still an instance of Polygon, because we didn't
// change the prototype of Square.prototype, so the prototype chain
// of newInstance is still
//   newInstance --> Square.prototype --> Polygon.prototype
console.log(newInstance instanceof Polygon); // true
console.log(newInstance instanceof Rectangle); // false

// However, because super() calls Rectangle as constructor, the name property
// of newInstance is initialized with the logic in Rectangle
console.log(newInstance.name); // Rectangle
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)-Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super()")}}
- {{jsxref("Object.prototype.constructor")}}
