---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

Das **`extends`**-Schlüsselwort wird in [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) oder [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class) verwendet, um eine Klasse zu erstellen, die eine Kindklasse einer anderen Klasse ist.

{{EmbedInteractiveExample("pages/js/classes-extends.html", "taller")}}

## Syntax

```js-nolint
class ChildClass extends ParentClass { /* … */ }
```

- `ParentClass`
  - : Ein Ausdruck, der zu einer Konstruktorfunktion (einschließlich einer Klasse) oder `null` auswertet.

## Beschreibung

Das `extends`-Schlüsselwort kann verwendet werden, um benutzerdefinierte Klassen sowie eingebaute Objekte zu unterklassifizieren.

Jeder Konstruktor, der mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden kann und die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft hat, kann als Kandidat für die Elternklasse dienen. Beide Bedingungen müssen erfüllt sein – zum Beispiel, [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und {{jsxref("Proxy")}} können konstruiert werden, haben jedoch keine `prototype`-Eigenschaft und können daher nicht unterklassifiziert werden.

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

Die `prototype`-Eigenschaft der `ParentClass` muss ein {{jsxref("Object")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, aber dies ist in der Praxis selten von Bedeutung, da ein nicht-objektbezogenes `prototype` ohnehin nicht wie erwartet funktioniert. (Es wird vom [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator ignoriert.)

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!
```

`extends` setzt das Prototyp-Objekt sowohl für `ChildClass` als auch für `ChildClass.prototype`.

|                                     | Prototyp von `ChildClass` | Prototyp von `ChildClass.prototype` |
| ----------------------------------- | ------------------------- | ----------------------------------- |
| `extends`-Klausel fehlt             | `Function.prototype`      | `Object.prototype`                  |
| [`extends null`](#`null`_erweitern) | `Function.prototype`      | `null`                              |
| `extends ParentClass`               | `ParentClass`             | `ParentClass.prototype`             |

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
Object.getPrototypeOf(ChildClass) === ParentClass;
// Allows inheritance of instance properties
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

Die rechte Seite von `extends` muss kein Bezeichner sein. Sie können jeden Ausdruck verwenden, der zu einem Konstruktor auswertet. Dies ist oft nützlich, um [Mix-ins](#mix-ins) zu erstellen. Der `this`-Wert im `extends`-Ausdruck ist das `this`, das die Klassendefinition umgibt, und das Verweisen auf den Namen der Klasse ist ein {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck wie erwartet.

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

Während die Basisklasse aus ihrem Konstruktor alles zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, sonst wird ein {{jsxref("TypeError")}} ausgelöst.

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

Wenn der Konstruktor der Elternklasse ein Objekt zurückgibt, wird dieses Objekt als `this`-Wert für die abgeleitete Klasse verwendet, wenn weiter [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) initialisiert werden. Dieses Konzept wird als ["Rückgabe-Überschreibung"](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) bezeichnet, wodurch es möglich wird, dass die Felder einer abgeleiteten Klasse (einschließlich [privater](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) Felder) auf nicht zueinandergehörigen Objekten definiert werden.

### Unterklassifizierung von eingebauten Klassen

> [!WARNING]
> Das Standardkomitee vertritt nun die Meinung, dass der eingebettete Unterklassierungsmechanismus in früheren Spezifikationsversionen übermäßig komplex ist und nicht unerhebliche Leistungs- und Sicherheitsauswirkungen hat. Neue eingebaute Methoden berücksichtigen Unterklassen weniger, und Implementierer von Engines untersuchen, [ob bestimmte Unterklassierungsmechanismen entfernt werden sollen](https://github.com/tc39/proposal-rm-builtin-subclassing). Ziehen Sie Komposition der Vererbung beim Erweitern von eingebauten Klassen vor.

Hier sind einige Erwartungen, die Sie beim Erweitern einer Klasse haben können:

- Beim Aufrufen einer statischen Fabrikmethode (wie {{jsxref("Promise.resolve()")}} oder {{jsxref("Array.from()")}}) auf einer Unterklasse ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Bei einem Aufruf einer Instanzmethode, die eine neue Instanz zurückgibt (wie {{jsxref("Promise.prototype.then()")}} oder {{jsxref("Array.prototype.map()")}}) auf einer Unterklasse, ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Instanzmethoden versuchen, wo möglich an ein minimales Set von primitiven Methoden zu delegieren. Zum Beispiel führt das Überschreiben von {{jsxref("Promise/then", "then()")}} bei einer Unterklasse von {{jsxref("Promise")}} automatisch zu einem geänderten Verhalten von {{jsxref("Promise/catch", "catch()")}}; oder bei einer Unterklasse von {{jsxref("Map")}} verursacht das Überschreiben von {{jsxref("Map/set", "set()")}} automatisch eine Änderung im Verhalten des {{jsxref("Map/Map", "Map()")}}-Konstruktors.

Allerdings erfordern die obigen Erwartungen nicht-triviale Anstrengungen für eine ordnungsgemäße Implementierung.

- Die erste Erwartung erfordert, dass die statische Methode den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) liest, um den Konstruktor zur Konstruktion der zurückgegebenen Instanz zu erhalten. Das bedeutet, dass `[p1, p2, p3].map(Promise.resolve)` einen Fehler wirft, weil `this` in `Promise.resolve` `undefined` ist. Eine Möglichkeit, dies zu beheben, besteht darin, auf die Basisklasse zurückzufallen, wenn `this` kein Konstruktor ist, wie es {{jsxref("Array.from()")}} tut, aber das bedeutet immer noch, dass die Basisklasse speziell behandelt wird.
- Die zweite Erwartung erfordert, dass die Instanzmethode [`this.constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) liest, um die Konstruktorfunktion zu erhalten. `new this.constructor()` kann jedoch Altcodes brechen, weil die `constructor`-Eigenschaft sowohl beschreibbar als auch konfigurierbar ist und in keiner Weise geschützt ist. Deshalb verwenden viele Kopiermethoden der eingebauten Klassen stattdessen die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)-Eigenschaft des Konstruktors (die standardmäßig einfach `this` zurückgibt, den Konstruktor selbst). Allerdings ermöglicht `[Symbol.species]` das Ausführen von beliebigem Code und das Erstellen von Instanzen beliebigen Typs, was ein Sicherheitsproblem darstellt und die Semantik der Unterklassifizierung stark verkompliziert.
- Die dritte Erwartung führt zu sichtbaren Aufrufen von benutzerdefiniertem Code, was viele Optimierungen erschwert. Bei einem Aufruf des `Map()`-Konstruktors mit einem Iterable von _x_ Elementen muss zum Beispiel die `set()`-Methode _x_ Mal sichtbar aufgerufen werden, anstatt die Elemente einfach in den internen Speicher zu kopieren.

Diese Probleme sind nicht einzigartig für eingebaute Klassen. Bei Ihren eigenen Klassen müssen Sie wahrscheinlich dieselben Entscheidungen treffen. Bei eingebauten Klassen sind jedoch die Optimierbarkeit und Sicherheit von weitaus größerer Bedeutung. Neue eingebaute Methoden konstruieren immer die Basisklasse und rufen so wenige benutzerdefinierte Methoden wie möglich auf. Wenn Sie eingebaute Klassen unterklassen und die oben genannten Erwartungen erfüllen möchten, müssen Sie alle Methoden überschreiben, die das Standardverhalten beinhalten. Jede Hinzufügung neuer Methoden in der Basisklasse kann auch die Semantik Ihrer Unterklasse beeinträchtigen, weil sie standardmäßig vererbt werden. Daher ist es besser, eingebaute Klassen mit [_Komposition_](#vermeidung_von_vererbung) zu erweitern.

### `null` erweitern

`extends null` wurde entworfen, um die einfache Erstellung von [Objekten, die nicht von `Object.prototype` erben](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), zu ermöglichen. Aufgrund ungeklärter Entscheidungen darüber, ob `super()` innerhalb des Konstruktors aufgerufen werden sollte, ist es jedoch nicht möglich, eine solche Klasse in der Praxis mit einer Konstruktorimplementierung zu konstruieren, die kein Objekt zurückgibt. [Das TC39-Komitee arbeitet daran, diese Funktionalität wieder zu ermöglichen](https://github.com/tc39/ecma262/pull/1321).

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

Stattdessen müssen Sie explizit eine Instanz vom Konstruktor zurückgeben.

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

Das erste Beispiel erstellt eine Klasse `Square` von einer Klasse `Polygon`. Dieses Beispiel ist aus diesem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) extrahiert.

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

### Erweitern von einfachen Objekten

Klassen können keine normalen (nicht konstruierbaren) Objekte erweitern. Wenn Sie von einem normalen Objekt erben möchten, indem Sie alle Eigenschaften dieses Objekts auf vererbten Instanzen verfügbar machen, können Sie stattdessen {{jsxref("Object.setPrototypeOf()")}} verwenden:

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

### Erweitern von eingebauten Objekten

Dieses Beispiel erweitert das eingebaute {{jsxref("Date")}}-Objekt. Dieses Beispiel ist aus diesem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) extrahiert.

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

Alle JavaScript-Objekte erben standardmäßig von `Object.prototype`, daher scheint das Schreiben von `extends Object` auf den ersten Blick redundant. Der einzige Unterschied zum Nichtschreiben von `extends` besteht darin, dass der Konstruktor selbst statische Methoden von `Object` erbt, wie {{jsxref("Object.keys()")}}. Weil jedoch keine `Object`-statische Methode den Wert von `this` verwendet, gibt es immer noch keinen Wert im Erben dieser statischen Methoden.

Der {{jsxref("Object/Object", "Object()")}}-Konstruktor behandelt das Unterklassierungsszenario speziell. Wenn er implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufgerufen wird, wird immer ein neues Objekt mit `new.target.prototype` als sein Prototyp initialisiert. Jeder an `super()` übergebene Wert wird ignoriert.

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

Vergleichen Sie dieses Verhalten mit einem benutzerdefinierten Wrapper, der die Unterklassierung nicht speziell behandelt:

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

### Spezies

Möglicherweise möchten Sie {{jsxref("Array")}}-Objekte in Ihrer abgeleiteten Array-Klasse `MyArray` zurückgeben. Das Spezies-Muster ermöglicht es Ihnen, Standardkonstruktoren zu überschreiben.

Zum Beispiel, wenn Sie Methoden wie {{jsxref("Array.prototype.map()")}} verwenden, die den Standardkonstruktor zurückgeben, möchten Sie, dass diese Methoden ein Eltern-`Array`-Objekt zurückgeben, anstelle des `MyArray`-Objekts. Das {{jsxref("Symbol.species")}}-Symbol ermöglicht Ihnen dies:

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

Dieses Verhalten wird von vielen eingebauten Kopiermethoden implementiert. Für Einschränkungen dieser Funktion sehen Sie die Diskussion [Unterklassifizierung von eingebauten Klassen](#unterklassifizierung_von_eingebauten_klassen).

### Mix-ins

Abstrakte Unterklassen oder _Mix-ins_ sind Templates für Klassen. Eine Klasse kann nur eine einzelne Superklasse haben, daher ist die Mehrfachvererbung von Werkzeugklassen zum Beispiel nicht möglich. Die Funktionalität muss von der Superklasse bereitgestellt werden.

Eine Funktion mit einer Superklasse als Eingabe und einer Unterklasse, die diese Superklasse erweitert, als Ausgabe kann verwendet werden, um Mix-ins zu implementieren:

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

Eine Klasse, die diese Mix-ins verwendet, kann dann so geschrieben werden:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

### Vermeidung von Vererbung

Vererbung ist eine sehr starke Kopplungsbeziehung in objektorientierter Programmierung. Es bedeutet, dass alle Verhaltensweisen der Basisklasse standardmäßig von der Unterklasse geerbt werden, was nicht immer wünschenswert ist. Betrachten Sie zum Beispiel die Implementierung einer `ReadOnlyMap`:

```js
class ReadOnlyMap extends Map {
  set() {
    throw new TypeError("A read-only map must be set at construction time.");
  }
}
```

Es stellt sich heraus, dass `ReadOnlyMap` nicht konstruierbar ist, weil der [`Map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)-Konstruktor die `set()`-Methode der Instanz aufruft.

```js
const m = new ReadOnlyMap([["a", 1]]); // TypeError: A read-only map must be set at construction time.
```

Wir könnten dies umgehen, indem wir eine private Kennung verwenden, um anzuzeigen, ob die Instanz konstruiert wird. Ein bedeutenderes Problem bei diesem Design ist jedoch, dass es das [Liskov‘sche Substitutionsprinzip](https://de.wikipedia.org/wiki/Liskovsche_Substitutionsprinzip) verletzt, welches besagt, dass eine Unterklasse für ihre Superklasse substituierbar sein sollte. Wenn eine Funktion ein `Map`-Objekt erwartet, sollte sie auch ein `ReadOnlyMap`-Objekt verwenden können, was hier nicht der Fall ist.

Vererbung führt oft zu [dem Kreis-Ellipse-Problem](https://de.wikipedia.org/wiki/Kreis-Ellipsen-Problem), da weder der eine noch der andere Typ das Verhalten des jeweils anderen perfekt umfasst, obwohl sie viele gemeinsame Merkmale haben. Im Allgemeinen, wenn es keinen sehr guten Grund gibt, Vererbung zu verwenden, ist es besser, Komposition zu verwenden. Komposition bedeutet, dass eine Klasse eine Referenz zu einem Objekt einer anderen Klasse hat und dieses Objekt nur als Implementierungsdetail verwendet.

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

In diesem Fall ist die `ReadOnlyMap`-Klasse keine Unterklasse von `Map`, sie implementiert jedoch die meisten der gleichen Methoden. Dies bedeutet mehr Code-Duplikation, jedoch auch, dass die `ReadOnlyMap`-Klasse nicht stark mit der `Map`-Klasse gekoppelt ist und nicht leicht bricht, wenn die `Map`-Klasse geändert wird, wodurch die [semantischen Probleme der unterklassifizierung von eingebauten Klassen](#unterklassifizierung_von_eingebauten_klassen) vermieden werden. Zum Beispiel, wenn die `Map`-Klasse eine [`emplace()`](https://github.com/tc39/proposal-upsert)-Methode hinzufügt, die nicht `set()` aufruft, würde dies dazu führen, dass die `ReadOnlyMap`-Klasse nicht mehr schreibgeschützt ist, es sei denn, letztere wird entsprechend aktualisiert, um auch `emplace()` zu überschreiben. Darüber hinaus haben `ReadOnlyMap`-Objekte die `set`-Methode überhaupt nicht, was genauer ist, als einen Fehler zur Laufzeit auszulösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/constructor", "constructor")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Operators/super", "super")}}
