---
title: Konstruktor
slug: Web/JavaScript/Reference/Classes/constructor
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

Die **`constructor`**-Methode ist eine besondere Methode einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes) zur Erstellung und Initialisierung einer Objektinstanz dieser Klasse.

> [!NOTE]
> Diese Seite führt die `constructor`-Syntax ein. Für die `constructor`-Eigenschaft, die in allen Objekten vorhanden ist, siehe {{jsxref("Object.prototype.constructor")}}.

{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}

## Syntax

```js-nolint
constructor() { /* … */ }
constructor(argument0) { /* … */ }
constructor(argument0, argument1) { /* … */ }
constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }
```

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Eine Klassenmethode namens `constructor` kann kein [Getter](/de/docs/Web/JavaScript/Reference/Functions/get), [Setter](/de/docs/Web/JavaScript/Reference/Functions/set), [async](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder [Generator](/de/docs/Web/JavaScript/Reference/Statements/function*) sein.
- Eine Klasse kann nicht mehr als eine `constructor`-Methode haben.

## Beschreibung

Ein Konstruktor ermöglicht es Ihnen, eine benutzerdefinierte Initialisierung bereitzustellen, die durchgeführt werden muss, bevor andere Methoden auf einem instanziierten Objekt aufgerufen werden können.

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

Wenn Sie keinen eigenen Konstruktor bereitstellen, wird ein Standardkonstruktor für Sie bereitgestellt. Wenn Ihre Klasse eine Basisklasse ist, ist der Standardkonstruktor leer:

```js-nolint
constructor() {}
```

Wenn Ihre Klasse eine abgeleitete Klasse ist, ruft der Standardkonstruktor den Elternkonstruktor auf und übergibt die übergebenen Argumente:

```js-nolint
constructor(...args) {
  super(...args);
}
```

> [!NOTE]
> Der Unterschied zwischen einem expliziten Konstruktor wie oben gezeigt und dem Standardkonstruktor besteht darin, dass letzterer tatsächlich nicht [den Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator) durch [Argumentverteilung](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) aufruft.

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

Die `ValidationError`-Klasse benötigt keinen expliziten Konstruktor, da sie keine benutzerdefinierte Initialisierung durchführen muss. Der Standardkonstruktor kümmert sich dann um die Initialisierung der Eltern `Error` mit dem gegebenen Argument.

Wenn Sie jedoch einen eigenen Konstruktor bereitstellen und Ihre Klasse von einer Elternklasse abgeleitet ist, müssen Sie explizit den Konstruktor der Elternklasse mit [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufrufen. Zum Beispiel:

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // Aufruf des Elternklassens Konstruktors
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

1. (Wenn es sich um eine abgeleitete Klasse handelt) Der `constructor`-Körper vor dem `super()`-Aufruf wird ausgewertet. Dieser Teil sollte nicht auf `this` zugreifen, da es noch nicht initialisiert ist.
2. (Wenn es sich um eine abgeleitete Klasse handelt) Der `super()`-Aufruf wird ausgewertet, der die Elternklasse durch denselben Prozess initialisiert.
3. Die [Felder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) der aktuellen Klasse werden initialisiert.
4. Der `constructor`-Körper nach dem `super()`-Aufruf (oder der gesamte Körper, wenn es sich um eine Basisklasse handelt) wird ausgewertet.

Innerhalb des `constructor`-Körpers können Sie auf das erzeugte Objekt durch [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zugreifen und auf die Klasse, die mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen wird, durch [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target).
Beachten Sie, dass Methoden (einschließlich [Gettern](/de/docs/Web/JavaScript/Reference/Functions/get) und [Settern](/de/docs/Web/JavaScript/Reference/Functions/set)) und die [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) bereits auf `this` initialisiert sind, bevor der `constructor` ausgeführt wird; Sie können also sogar auf Methoden der Unterklasse vom Konstruktor der Oberklasse aus zugreifen. Wenn diese Methoden jedoch `this` verwenden, ist das `this` noch nicht vollständig initialisiert. Das bedeutet, dass das Lesen von öffentlichen Feldern der abgeleiteten Klasse `undefined` ergibt, während das Lesen privater Felder zu einem `TypeError` führt.

```js example-bad
new (class C extends class B {
  constructor() {
    console.log(this.foo());
  }
} {
  #a = 1;
  foo() {
    return this.#a; // TypeError: Cannot read private member #a from an object whose class did not declare it
    // Es liegt nicht wirklich daran, dass die Klasse es nicht deklariert hat,
    // sondern weil das private Feld nicht initialisiert ist,
    // wenn der Konstruktor der Oberklasse ausgeführt wird
  }
})();
```

Die `constructor`-Methode kann einen Rückgabewert haben. Während die Basisklasse alles aus ihrem Konstruktor zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, sonst wird ein {{jsxref("TypeError")}} geworfen.

```js
class ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ParentClass()); // ParentClass {}
// Der Rückgabewert wird ignoriert, da es sich nicht um ein Objekt handelt
// Dies ist konsistent mit Funktionskonstruktoren

class ChildClass extends ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
```

Wenn der Konstruktor der Elternklasse ein Objekt zurückgibt, wird dieses Objekt als `this`-Wert verwendet, auf dem die [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) der abgeleiteten Klasse definiert werden. Dieser Trick wird ["return overriding"](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) genannt, was es ermöglicht, dass die Felder einer abgeleiteten Klasse (einschließlich [privater](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) auf nicht verwandten Objekten definiert werden.

Der `constructor` folgt der normalen [Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) Syntax, sodass [Parameter-Standardwerte](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) usw. alle verwendet werden können.

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

Der Konstruktor muss ein literaler Name sein. [Berechnete Eigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) können nicht zu Konstruktoren werden.

```js
class Foo {
  // Dies ist eine berechnete Eigenschaft. Sie wird nicht als Konstruktor erkannt.
  ["constructor"]() {
    console.log("called");
    this.a = 1;
  }
}

const foo = new Foo(); // Kein Log
console.log(foo); // Foo {}
foo.constructor(); // Gibt "called" aus
console.log(foo); // Foo { a: 1 }
```

Asynchrone Methoden, Generatormethoden, Zugriffs- und Klassenfelder dürfen nicht `constructor` genannt werden. Private Namen dürfen nicht `#constructor` sein. Jedes Mitglied, das `constructor` genannt wird, muss eine einfache Methode sein.

## Beispiele

### Verwendung des Konstruktors

Dieser Codeausschnitt stammt aus dem [Klassensample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Square extends Polygon {
  constructor(length) {
    // Hier ruft es den Konstruktor der Elternklasse mit Längen auf,
    // die für die Breite und Höhe des Polygons bereitgestellt werden
    super(length, length);
    // HINWEIS: In abgeleiteten Klassen muss `super()` aufgerufen werden,
    // bevor Sie `this` verwenden können. Andernfalls wird ein ReferenceError ausgelöst.
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

### Aufruf von super in einem Konstruktor, der an einen anderen Prototyp gebunden ist

`super()` ruft den Konstruktor auf, der der Prototyp der aktuellen Klasse ist. Wenn Sie den Prototyp der aktuellen Klasse selbst ändern, wird `super()` den Konstruktor aufrufen, der der neue Prototyp ist. Das Ändern des Prototyps der `prototype`-Eigenschaft der aktuellen Klasse beeinflusst nicht, welchen Konstruktor `super()` aufruft.

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

// Machen Sie Square zu einer Erweiterung von Rectangle (welches eine Basisklasse ist) anstelle von Polygon
Object.setPrototypeOf(Square, Rectangle);

const newInstance = new Square();

// newInstance ist weiterhin eine Instanz von Polygon, da wir
// den Prototyp von Square.prototype nicht geändert haben, sodass die Prototyp-Kette
// von newInstance weiterhin ist:
//   newInstance --> Square.prototype --> Polygon.prototype
console.log(newInstance instanceof Polygon); // true
console.log(newInstance instanceof Rectangle); // false

// Da super() jedoch Rectangle als Konstruktor aufruft, wird die name-Eigenschaft
// von newInstance mit der Logik in Rectangle initialisiert
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
