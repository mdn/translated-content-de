---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

Die **`constructor`** Methode ist eine spezielle Methode einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) zur Erstellung und Initialisierung einer Objektinstanz dieser Klasse.

> [!NOTE]
> Diese Seite führt in die `constructor`-Syntax ein. Für die `constructor`-Eigenschaft, die in allen Objekten vorhanden ist, siehe {{jsxref("Object.prototype.constructor")}}.

{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}

## Syntax

```js-nolint
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }
```

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Eine Klassenmethode namens `constructor` kann kein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get), [Setter](/de/docs/Web/JavaScript/Reference/Functions/set), [async](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder [Generator](/de/docs/Web/JavaScript/Reference/Statements/function*) sein.
- Eine Klasse kann nicht mehr als eine `constructor`-Methode haben.

## Beschreibung

Ein Konstruktor ermöglicht es Ihnen, jede benutzerdefinierte Initialisierung vorzunehmen, die durchgeführt werden muss, bevor andere Methoden auf einem instanziierten Objekt aufgerufen werden können.

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

Wenn Sie keinen eigenen Konstruktor bereitstellen, wird automatisch ein Standard-Konstruktor für Sie bereitgestellt.
Wenn Ihre Klasse eine Basisklasse ist, ist der Standard-Konstruktor leer:

```js-nolint
constructor() {}
```

Wenn Ihre Klasse eine abgeleitete Klasse ist, ruft der Standard-Konstruktor den Elternkonstruktor auf und übergibt dabei alle angegebenen Argumente:

```js-nolint
constructor(...args) {
  super(...args);
}
```

> [!NOTE]
> Der Unterschied zwischen einem expliziten Konstruktor wie dem obigen und dem Standard-Konstruktor besteht darin, dass letzterer den [Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) nicht durch [Argument-Spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) aufruft.

Das ermöglicht es, dass Code wie dieser funktioniert:

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

Die Klasse `ValidationError` benötigt keinen expliziten Konstruktor, weil sie keine benutzerdefinierte Initialisierung benötigt.
Der Standard-Konstruktor kümmert sich dann um die Initialisierung des Elternteils `Error` mit dem übergebenen Argument.

Wenn Sie jedoch Ihren eigenen Konstruktor bereitstellen und Ihre Klasse von einer übergeordneten Klasse erbt, müssen Sie explizit den Konstruktor der übergeordneten Klasse mit [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufrufen.
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

Die Verwendung von [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) bei einer Klasse durchläuft die folgenden Schritte:

1. (Wenn es eine abgeleitete Klasse ist) Der `constructor`-Körper vor dem `super()`-Aufruf wird ausgewertet. Dieser Teil sollte nicht auf `this` zugreifen, da es noch nicht initialisiert ist.
2. (Wenn es eine abgeleitete Klasse ist) Der `super()`-Aufruf wird ausgewertet, was die übergeordnete Klasse durch denselben Prozess initialisiert.
3. Die Felder der aktuellen Klasse werden initialisiert.
4. Der `constructor`-Körper nach dem `super()`-Aufruf (oder der gesamte Körper, wenn es eine Basisklasse ist) wird ausgewertet.

Innerhalb des `constructor`-Körpers können Sie auf das erstellte Objekt über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zugreifen und die Klasse, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen wird, über [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) aufrufen. Beachten Sie, dass Methoden (einschließlich [Gettern](/de/docs/Web/JavaScript/Reference/Functions/get) und [Settern](/de/docs/Web/JavaScript/Reference/Functions/set)) und die [Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) bereits auf `this` initialisiert sind, bevor der `constructor` ausgeführt wird, sodass Sie sogar Methoden der Unterklasse aus dem Konstruktor der Oberklasse aufrufen können. Wenn diese Methoden jedoch `this` verwenden, wird `this` noch nicht vollständig initialisiert sein. Das bedeutet, dass das Lesen öffentlicher Felder der abgeleiteten Klasse zu `undefined` führt, während das Lesen privater Felder zu einem `TypeError` führt.

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

Die `constructor`-Methode kann einen Rückgabewert haben. Während die Basisklasse alles aus ihrem Konstruktor zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, sonst wird ein {{jsxref("TypeError")}} ausgelöst.

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

Wenn der Elternkonstruktor ein Objekt zurückgibt, wird dieses Objekt als `this`-Wert verwendet, auf dem die [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) der abgeleiteten Klasse definiert werden. Dieser Trick wird ["Rückgabeüberlagerung"](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) genannt, der es ermöglicht, dass Felder der abgeleiteten Klasse (einschließlich der [privaten](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) auf unverwandten Objekten definiert werden.

Der `constructor` folgt der normalen [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)-Syntax, daher können [Standardparameterwerte](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), usw. alle verwendet werden.

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

Der Konstruktor muss ein literaler Name sein. [Berechnete Eigenschaftsnamen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) können nicht zu Konstruktoren werden.

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

Asynchrone Methoden, Generatormethoden, Zugriffsmethoden und Klassenfelder dürfen nicht `constructor` genannt werden. Private Namen dürfen nicht `#constructor` genannt werden. Jedes Mitglied namens `constructor` muss eine einfache Methode sein.

## Beispiele

### Verwendung des Konstruktors

Dieser Code-Schnipsel ist aus dem [Klassen-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)) entnommen.

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

### Aufrufen von super in einem Konstruktor, der an einen anderen Prototyp gebunden ist

`super()` ruft den Konstruktor auf, der der Prototyp der aktuellen Klasse ist. Wenn Sie den Prototyp der aktuellen Klasse selbst ändern, ruft `super()` den Konstruktor auf, der der neue Prototyp ist. Das Ändern des Prototyps der `Prototyp`-Eigenschaft der aktuellen Klasse hat keinen Einfluss darauf, welchen Konstruktor `super()` aufruft.

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

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super()")}}
- {{jsxref("Object.prototype.constructor")}}
