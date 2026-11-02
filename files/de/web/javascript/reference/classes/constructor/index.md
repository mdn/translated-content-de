---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Die **`constructor`**-Methode ist eine spezielle Methode einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes), mit der eine Objektinstanz dieser Klasse erstellt und initialisiert wird.

> [!NOTE]
> Diese Seite erläutert die `constructor`-Syntax. Informationen zur `constructor`-Eigenschaft, die auf allen Objekten vorhanden ist, finden Sie unter {{jsxref("Object.prototype.constructor")}}.

{{InteractiveExample("JavaScript Demo: Class constructor")}}

```js interactive-example
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

const poly = new Polygon();

console.log(poly.name);
// Expected output: "Polygon"
```

## Syntax

```js-nolint
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }
```

Es gelten einige zusätzliche Syntaxbeschränkungen:

- Eine nicht statische Klassenmethode mit dem nicht berechneten Namen `constructor` darf kein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get), [Setter](/de/docs/Web/JavaScript/Reference/Functions/set), keine [asynchrone Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) und kein [Generator](/de/docs/Web/JavaScript/Reference/Statements/function*) sein.
- Eine Klasse darf nicht mehr als eine `constructor`-Methode haben.

## Beschreibung

Mit einem Konstruktor können Sie eine benutzerdefinierte Initialisierung vornehmen, die erforderlich ist, bevor andere Methoden auf einem instanziierten Objekt aufgerufen werden können.

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

Wenn Sie keinen eigenen Konstruktor bereitstellen, wird ein Standardkonstruktor verwendet.
Bei einer Basisklasse ist der Standardkonstruktor leer:

```js-nolint
constructor() {}
```

Bei einer abgeleiteten Klasse ruft der Standardkonstruktor den Konstruktor der Elternklasse auf und gibt alle übergebenen Argumente weiter:

```js-nolint
constructor(...args) {
  super(...args);
}
```

> [!NOTE]
> Der Unterschied zwischen einem expliziten Konstruktor wie dem oben gezeigten und dem Standardkonstruktor besteht darin, dass Letzterer bei der [Verteilung der Argumente](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) nicht tatsächlich [den Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) aufruft.

Dadurch funktioniert beispielsweise folgender Code:

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

Die Klasse `ValidationError` benötigt keinen expliziten Konstruktor, da sie keine benutzerdefinierte Initialisierung vornehmen muss.
Der Standardkonstruktor übernimmt die Initialisierung der Elternklasse `Error` mit dem übergebenen Argument.

Wenn Sie jedoch einen eigenen Konstruktor bereitstellen und Ihre Klasse von einer Elternklasse abgeleitet ist, müssen Sie den Konstruktor der Elternklasse ausdrücklich mit [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufrufen.
Zum Beispiel:

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

Bei der Verwendung von [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) mit einer Klasse werden die folgenden Schritte durchlaufen:

1. Bei einer abgeleiteten Klasse wird der Teil des `constructor`-Rumpfs vor dem Aufruf von `super()` ausgeführt. Dieser Teil darf nicht auf `this` zugreifen, da es noch nicht initialisiert ist.
2. Bei einer abgeleiteten Klasse wird `super()` aufgerufen, wodurch die Elternklasse nach demselben Verfahren initialisiert wird.
3. Die [Felder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) der aktuellen Klasse werden initialisiert.
4. Der Teil des `constructor`-Rumpfs nach dem Aufruf von `super()` wird ausgeführt. Bei einer Basisklasse wird der gesamte Rumpf ausgeführt.

Innerhalb des `constructor`-Rumpfs können Sie über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf das zu erstellende Objekt und über [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) auf die Klasse zugreifen, mit der [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen wurde. Beachten Sie, dass Methoden (einschließlich [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set)) und die [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) auf `this` bereits initialisiert sind, bevor `constructor` ausgeführt wird. Daher können Sie vom Konstruktor der Oberklasse aus sogar auf Methoden der Unterklasse zugreifen. Wenn diese Methoden jedoch `this` verwenden, ist `this` zu diesem Zeitpunkt noch nicht vollständig initialisiert. Das bedeutet, dass das Lesen öffentlicher Felder der abgeleiteten Klasse `undefined` ergibt, während das Lesen privater Felder einen `TypeError` auslöst.

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

Die `constructor`-Methode kann einen Wert zurückgeben. Während der Konstruktor einer Basisklasse einen beliebigen Wert zurückgeben kann, muss der Konstruktor einer abgeleiteten Klasse ein Objekt oder `undefined` zurückgeben. Andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

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

Wenn der Konstruktor der Elternklasse ein Objekt zurückgibt, wird dieses Objekt als `this`-Wert verwendet, auf dem die [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) der abgeleiteten Klasse definiert werden. Dieser Mechanismus wird als [„return overriding“](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#returning_overriding_object) bezeichnet. Er ermöglicht es, Felder einer abgeleiteten Klasse (auch [private](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) Felder) auf Objekten zu definieren, die nicht zur Klassenhierarchie gehören.

Für `constructor` gilt die normale [Methodensyntax](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions). Daher können unter anderem [Standardwerte für Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) und [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) verwendet werden.

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

Der Name des Konstruktors muss wörtlich angegeben werden. [Berechnete Eigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) können keine Konstruktoren sein.

Nicht statische asynchrone Methoden, Generatormethoden und Accessors dürfen nicht den nicht berechneten Namen `constructor` tragen. Auch statische und Instanz-Klassenfelder dürfen nicht den nicht berechneten Namen `constructor` tragen. Private Namen dürfen nicht `#constructor` lauten. Jedes nicht statische Mitglied mit dem nicht berechneten Namen `constructor` muss eine gewöhnliche Methode sein.

## Beispiele

### Den Konstruktor verwenden

Dieser Codeausschnitt stammt aus dem [Klassenbeispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

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

### `super` in einem Konstruktor aufrufen, der an einen anderen Prototyp gebunden ist

`super()` ruft den Konstruktor auf, der der Prototyp der aktuellen Klasse ist. Wenn Sie den Prototyp der aktuellen Klasse selbst ändern, ruft `super()` den Konstruktor auf, der der neue Prototyp ist. Eine Änderung des Prototyps der `prototype`-Eigenschaft der aktuellen Klasse hat keinen Einfluss darauf, welchen Konstruktor `super()` aufruft.

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

- [Klassen verwenden](/de/docs/Web/JavaScript/Guide/Using_classes) – Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super()")}}
- {{jsxref("Object.prototype.constructor")}}
