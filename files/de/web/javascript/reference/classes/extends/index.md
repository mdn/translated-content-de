---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Classes")}}

Das **`extends`**-Schlüsselwort wird in [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) oder [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class) verwendet, um eine Klasse zu erstellen, die von einer anderen Klasse abgeleitet ist.

{{InteractiveExample("JavaScript Demo: Classes Extends", "taller")}}

```js interactive-example
class DateFormatter extends Date {
  getFormattedDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

console.log(new DateFormatter("August 19, 1975 23:15:30").getFormattedDate());
// Expected output: "19-Aug-1975"
```

## Syntax

```js-nolint
class ChildClass extends ParentClass { /* … */ }
```

- `ParentClass`
  - : Ein Ausdruck, der in eine Konstruktorfunktion (einschließlich einer Klasse) oder `null` ausgewertet wird.

## Beschreibung

Das Schlüsselwort `extends` kann verwendet werden, um benutzerdefinierte Klassen sowie eingebaute Objekte zu subklassifizieren.

Jeder Konstruktor, der mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden kann und über die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft verfügt, kann als Elternklasse dienen. Beide Bedingungen müssen erfüllt sein – beispielsweise können [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und {{jsxref("Proxy")}} konstruiert werden, haben aber keine `prototype`-Eigenschaft und können daher nicht subklassifiziert werden.

```js
function OldStyleClass() {
  this.someProperty = 1;
}
OldStyleClass.prototype.someMethod = function () {};

class ChildClass extends OldStyleClass {}

class ModernClass {
  someProperty = 1;
  someMethod() {}
}

class AnotherChildClass extends ModernClass {}
```

Die `prototype`-Eigenschaft der `ParentClass` muss ein {{jsxref("Object")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein. In der Praxis ist dies jedoch selten relevant, da ein nicht-objektorientiertes `prototype` ohnehin nicht wie erwartet funktioniert (es wird vom [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator ignoriert).

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!
```

`extends` setzt das Prototype sowohl für `ChildClass` als auch für `ChildClass.prototype`.

|                                         | Prototyp von `ChildClass` | Prototyp von `ChildClass.prototype` |
| --------------------------------------- | ------------------------- | ----------------------------------- |
| `extends`-Klausel fehlt                 | `Function.prototype`      | `Object.prototype`                  |
| [`extends null`](#erweiterung_von_null) | `Function.prototype`      | `null`                              |
| `extends ParentClass`                   | `ParentClass`             | `ParentClass.prototype`             |

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
Object.getPrototypeOf(ChildClass) === ParentClass;
// Allows inheritance of instance properties
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

Auf der rechten Seite von `extends` muss kein Bezeichner stehen. Sie können jeden Ausdruck verwenden, der in einen Konstruktor ausgewertet wird. Dies ist häufig praktisch, um [Mix-ins](#mix-ins) zu erstellen. Der `this`-Wert im `extends`-Ausdruck ist der `this`-Wert, der die Klassendefinition umgibt. Auf den Klassennamen selbst zu verweisen, führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren wie erwartet in diesem Ausdruck.

```js
class SomeClass extends class {
  constructor() {
    console.log("Base class");
  }
} {
  constructor() {
    super();
    console.log("Derived class");
  }
}

new SomeClass();
// Base class
// Derived class
```

Während die Basisklasse alles Mögliche von ihrem Konstruktor zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

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
    super();
    return 1;
  }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
```

Wenn der Konstruktor der Elternklasse ein Objekt zurückgibt, wird dieses Objekt als `this`-Wert für die abgeleitete Klasse verwendet, wenn weitere [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) initialisiert werden. Dieser Trick wird als ["Rückgabeüberschreibung"](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) bezeichnet und ermöglicht es, dass die Felder einer abgeleiteten Klasse (einschließlich [privater](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) auf nicht verwandten Objekten definiert werden.

### Eingebaute Objekte subklassifizieren

> [!WARNING]
> Der Standard-Ausschuss vertritt nun die Ansicht, dass der Mechanismus zur Subklassifizierung eingebauter Objekte in früheren Spezifikationsversionen überkompliziert ist und nicht unerhebliche Leistungs- und Sicherheitsprobleme verursacht. Neue eingebaute Methoden berücksichtigen Subklassen weniger, und die Entwickler der Engines untersuchen, [ob bestimmte Subklassifizierungsmechanismen entfernt werden sollen](https://github.com/tc39/proposal-rm-builtin-subclassing). Erwägen Sie die Verwendung von Komposition anstelle von Vererbung, wenn Sie eingebaute Objekte erweitern möchten.

Folgende Aspekte könnten Sie erwarten, wenn Sie eine Klasse erweitern:

- Beim Aufruf einer statischen Fabrikmethode (wie {{jsxref("Promise.resolve()")}} oder {{jsxref("Array.from()")}}) auf einer Subklasse ist die zurückgegebene Instanz immer eine Instanz der Subklasse.
- Beim Aufruf einer Instanzmethode, die eine neue Instanz zurückgibt (wie {{jsxref("Promise.prototype.then()")}} oder {{jsxref("Array.prototype.map()")}}) auf einer Subklasse, ist die zurückgegebene Instanz ebenfalls immer eine Instanz der Subklasse.
- Instanzmethoden versuchen, soweit möglich, an eine minimale Anzahl von primitiven Methoden zu delegieren. Zum Beispiel verursacht bei einer Subklasse von {{jsxref("Promise")}} das Überschreiben von {{jsxref("Promise/then", "then()")}} automatisch, dass sich das Verhalten von {{jsxref("Promise/catch", "catch()")}} ändert. Oder bei einer Subklasse von {{jsxref("Map")}} führt das Überschreiben von {{jsxref("Map/set", "set()")}} automatisch dazu, dass sich das Verhalten des {{jsxref("Map/Map", "Map()")}}-Konstruktors ändert.

Jedoch erfordert das oben Genannte nicht-triviale Bemühungen, dies korrekt zu implementieren.

- Der erste Punkt erfordert, dass die statische Methode den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) liest, um den Konstruktor für die Konstruktion der zurückgegebenen Instanz zu erhalten. Dies bedeutet, dass `[p1, p2, p3].map(Promise.resolve)` einen Fehler auslöst, weil `this` innerhalb von `Promise.resolve` `undefined` ist. Eine Möglichkeit, dies zu beheben, ist, auf die Basisklasse zurückzugreifen, wenn `this` kein Konstruktor ist, wie dies {{jsxref("Array.from()")}} macht. Das bedeutet jedoch weiterhin, dass die Basisklasse eine Sonderbehandlung erfährt.
- Der zweite Punkt erfordert, dass die Instanzmethode [`this.constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) liest, um die Konstruktorfunktion zu erhalten. `new this.constructor()` könnte jedoch bestehenden Code brechen, da die `constructor`-Eigenschaft sowohl beschreibbar als auch konfigurierbar ist und nicht auf irgendeine Weise geschützt ist. Daher verwenden viele kopierende eingebauten Methoden stattdessen die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)-Eigenschaft des Konstruktors (die standardmäßig einfach `this`, also den Konstruktor selbst, zurückgibt). `[Symbol.species]` erlaubt jedoch das Ausführen beliebigen Codes und das Erstellen von Instanzen beliebigen Typs, was ein Sicherheitsproblem darstellt und die Subklassifizierungssemantik erheblich verkompliziert.
- Der dritte Punkt führt zu sichtbaren Aufrufen benutzerdefinierter Codes, was viele Optimierungen erschwert. Zum Beispiel, wenn der `Map()`-Konstruktor mit einem Iterable von _x_ Elementen aufgerufen wird, muss er die `set()`-Methode _x_ Mal sichtbar aufrufen, anstatt einfach die Elemente in den internen Speicher zu kopieren.

Diese Probleme sind nicht einzigartig für eingebaute Klassen. Bei eigenen Klassen müssen Sie wahrscheinlich dieselben Entscheidungen treffen. Für eingebaute Klassen sind jedoch Optimierungen und Sicherheit viel wichtiger. Neue eingebaute Methoden konstruieren immer die Basisklasse und rufen so wenige benutzerdefinierte Methoden wie möglich auf. Wenn Sie eingebaute Objekte subklassifizieren und dennoch die oben genannten Erwartungen erfüllen wollen, müssen Sie alle Methoden überschreiben, die das Standardverhalten beinhalten. Jegliche Neuhinzugabe von Methoden zur Basisklasse könnte auch die Semantik Ihrer Subklasse brechen, da diese standardmäßig vererbt werden. Daher ist ein besserer Ansatz zur Erweiterung eingebauter Objekte die Verwendung von [_Komposition_](#vermeidung_von_vererbung).

### Erweiterung von null

`extends null` wurde entworfen, um die einfache Erstellung von [Objekten, die nicht von `Object.prototype` erben](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), zu ermöglichen. Aufgrund ungelöster Entscheidungen darüber, ob `super()` innerhalb des Konstruktors aufgerufen werden soll, ist es jedoch praktisch nicht möglich, eine solche Klasse mit einer beliebigen Konstruktor-Implementierung zu erstellen, die kein Objekt zurückgibt. [Das TC39-Komitee arbeitet daran, diese Funktionalität wieder zu aktivieren](https://github.com/tc39/ecma262/pull/1321).

```js
new (class extends null {})();
// TypeError: Super constructor null of anonymous class is not a constructor

new (class extends null {
  constructor() {}
})();
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

new (class extends null {
  constructor() {
    super();
  }
})();
// TypeError: Super constructor null of anonymous class is not a constructor
```

Stattdessen müssen Sie explizit eine Instanz aus dem Konstruktor zurückgeben.

```js
class NullClass extends null {
  constructor() {
    // Using new.target allows derived classes to
    // have the correct prototype chain
    return Object.create(new.target.prototype);
  }
}

const proto = Object.getPrototypeOf;
console.log(proto(proto(new NullClass()))); // null
```

## Beispiele

### Verwendung von extends

Das erste Beispiel erstellt eine Klasse namens `Square` aus einer Klasse namens `Polygon`. Dieses Beispiel stammt aus dieser [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quelle)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class Square extends Polygon {
  constructor(length) {
    // Here, it calls the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }
}
```

### Erweiterung einfacher Objekte

Klassen können keine regulären (nicht-konstruktiven) Objekte erweitern. Wenn Sie von einem regulären Objekt erben möchten, indem Sie alle Eigenschaften dieses Objekts für geerbte Instanzen verfügbar machen, können Sie stattdessen {{jsxref("Object.setPrototypeOf()")}} verwenden:

```js
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);

const d = new Dog("Mitzie");
d.speak(); // Mitzie makes a noise.
```

### Erweiterung eingebauter Objekte

Dieses Beispiel erweitert das eingebaute {{jsxref("Date")}}-Objekt. Dieses Beispiel stammt aus dieser [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quelle)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js-nolint
class MyDate extends Date {
  getFormattedDate() {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}
```

### Erweiterung von `Object`

Alle JavaScript-Objekte erben standardmäßig von `Object.prototype`, sodass das Schreiben von `extends Object` auf den ersten Blick redundant erscheint. Der einzige Unterschied zum vollständigen Verzicht auf `extends` besteht darin, dass der Konstruktor selbst statische Methoden von `Object` erbt, wie etwa {{jsxref("Object.keys()")}}. Da jedoch keine statische `Object`-Methode den `this`-Wert verwendet, gibt es dennoch keinen Nutzen darin, diese statischen Methoden zu erben.

Der {{jsxref("Object/Object", "Object()")}}-Konstruktor behandelt das Szenario der Subklassifizierung speziell. Wenn er implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufgerufen wird, initialisiert er immer ein neues Objekt mit `new.target.prototype` als Prototyp. Jeder an `super()` übergebene Wert wird ignoriert.

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

Vergleichen Sie dieses Verhalten mit einem benutzerdefinierten Wrapper, der die Subklassifizierung nicht speziell behandelt:

```js
function MyObject(v) {
  return new Object(v);
}
class D extends MyObject {
  constructor(v) {
    super(v);
  }
}
console.log(new D(1) instanceof Number); // true
```

### Species

Möglicherweise möchten Sie in Ihrer abgeleiteten Array-Klasse `MyArray` {{jsxref("Array")}}-Objekte zurückgeben. Das Species-Muster ermöglicht es Ihnen, Standardkonstruktoren zu überschreiben.

Zum Beispiel möchten Sie mit Methoden wie {{jsxref("Array.prototype.map()")}}, die den Standardkonstruktor zurückgeben, dass diese Methoden ein Eltern-`Array`-Objekt anstelle eines `MyArray`-Objekts zurückgeben. Das {{jsxref("Symbol.species")}}-Symbol ermöglicht Ihnen dies:

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

Dieses Verhalten wird von vielen eingebauten Kopiermethoden implementiert. Für Einschränkungen dieses Features siehe die Diskussion über [Subklassifizierung eingebauter Objekte](#eingebaute_objekte_subklassifizieren).

### Mix-ins

Abstrakte Subklassen oder _Mix-ins_ sind Vorlagen für Klassen. Eine Klasse kann nur eine einzige Superklasse haben, sodass Mehrfachvererbung von beispielsweise Toolklassen nicht möglich ist. Die Funktionalität muss von der Superklasse bereitgestellt werden.

Eine Funktion mit einer Superklasse als Eingabe und einer Subklasse, die diese Superklasse erweitert, als Ausgabe, kann verwendet werden, um Mix-ins zu implementieren:

```js
const calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

const randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

Eine Klasse, die diese Mix-ins verwendet, kann dann wie folgt geschrieben werden:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

### Vermeidung von Vererbung

Vererbung ist in der objektorientierten Programmierung eine sehr starke Kopplungsbeziehung. Das bedeutet, dass alle Verhaltensweisen der Basisklasse standardmäßig von der Subklasse geerbt werden, was möglicherweise nicht immer erwünscht ist. Zum Beispiel bei der Implementierung einer `ReadOnlyMap`:

```js
class ReadOnlyMap extends Map {
  set() {
    throw new TypeError("A read-only map must be set at construction time.");
  }
}
```

Es stellt sich heraus, dass `ReadOnlyMap` nicht konstruierbar ist, da der [`Map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)-Konstruktor die `set()`-Methode der Instanz aufruft.

```js
const m = new ReadOnlyMap([["a", 1]]); // TypeError: A read-only map must be set at construction time.
```

Wir könnten dies umgehen, indem wir eine private Kennung verwenden, um anzuzeigen, ob die Instanz konstruiert wird. Ein grundsätzlicheres Problem bei diesem Design ist jedoch, dass es das [Liskov-Substitutionsprinzip](https://de.wikipedia.org/wiki/Liskovsches_Substitutionsprinzip) verletzt, welches besagt, dass eine Subklasse für ihre Superklasse austauschbar sein sollte. Wenn eine Funktion ein `Map`-Objekt erwartet, sollte sie auch ein `ReadOnlyMap`-Objekt verwenden können, was in diesem Fall nicht funktioniert.

Vererbung führt oft zu [dem Problem Kreis-Ellipse](https://de.wikipedia.org/wiki/Kreis-Ellipse-Problem), da keines der beiden Typen perfekt das Verhalten des anderen umfasst, obwohl sie viele gemeinsame Merkmale teilen. Im Allgemeinen gilt: Solange es keinen sehr guten Grund für die Verwendung von Vererbung gibt, ist es besser, Komposition zu verwenden. Komposition bedeutet, dass eine Klasse eine Referenz zu einem Objekt einer anderen Klasse hat und dieses Objekt nur als Implementierungsdetail verwendet.

```js
class ReadOnlyMap {
  #data;
  constructor(values) {
    this.#data = new Map(values);
  }
  get(key) {
    return this.#data.get(key);
  }
  has(key) {
    return this.#data.has(key);
  }
  get size() {
    return this.#data.size;
  }
  *keys() {
    yield* this.#data.keys();
  }
  *values() {
    yield* this.#data.values();
  }
  *entries() {
    yield* this.#data.entries();
  }
  *[Symbol.iterator]() {
    yield* this.#data[Symbol.iterator]();
  }
}
```

In diesem Fall ist die `ReadOnlyMap`-Klasse keine Unterklasse von `Map`, implementiert jedoch die meisten der gleichen Methoden. Dies führt zwar zu mehr Code-Duplizierungen, bedeutet aber auch, dass die `ReadOnlyMap`-Klasse nicht stark mit der `Map`-Klasse gekoppelt ist und nicht leicht bricht, wenn die `Map`-Klasse geändert wird. So werden die [semantischen Probleme bei der Subklassifizierung von eingebauten Objekten](#eingebaute_objekte_subklassifizieren) vermieden. Beispielsweise würde das Hinzufügen einer [`emplace()`](https://github.com/tc39/proposal-upsert)-Methode zur `Map`-Klasse, die nicht `set()` aufruft, dazu führen, dass die `ReadOnlyMap`-Klasse nicht mehr schreibgeschützt ist, es sei denn, sie wird entsprechend aktualisiert, um `emplace()` ebenfalls zu überschreiben. Darüber hinaus haben `ReadOnlyMap`-Objekte die Methode `set` überhaupt nicht, was genauer ist, als zur Laufzeit einen Fehler auszulösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)-Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/constructor", "constructor")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super")}}
