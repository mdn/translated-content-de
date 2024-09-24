---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

Das **`extends`** Schlüsselwort wird in [Klassenanweisungen](/de/docs/Web/JavaScript/Reference/Statements/class) oder [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class) verwendet, um eine Klasse zu erstellen, die von einer anderen Klasse abgeleitet ist.

{{EmbedInteractiveExample("pages/js/classes-extends.html", "taller")}}

## Syntax

```js-nolint
class ChildClass extends ParentClass { /* … */ }
```

- `ParentClass`
  - : Ein Ausdruck, der zu einer Konstruktionsfunktion (einschließlich einer Klasse) oder `null` auswertet.

## Beschreibung

Das `extends` Schlüsselwort kann verwendet werden, um benutzerdefinierte Klassen sowie integrierte Objekte zu unterklassen.

Jeder Konstruktor, der mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden kann und die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft hat, kann Kandidat für die Elternklasse sein. Beide Bedingungen müssen erfüllt sein – zum Beispiel können [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und {{jsxref("Proxy")}} konstruiert werden, aber sie haben keine `prototype`-Eigenschaft, also können sie nicht unterklassen werden.

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

Die `prototype`-Eigenschaft der `ParentClass` muss ein {{jsxref("Object")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, aber in der Praxis würde man sich selten darum kümmern, da ein nicht-objekt-basiertes `prototype` sich ohnehin nicht wie erwartet verhält. (Es wird vom [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator ignoriert.)

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Tatsächlich keine Zahl!
```

`extends` setzt das Prototyp-Objekt für `ChildClass` und `ChildClass.prototype`.

|                                   | Prototype von `ChildClass` | Prototype von `ChildClass.prototype` |
| --------------------------------- | -------------------------- | ------------------------------------ |
| `extends` Klausel fehlt           | `Function.prototype`       | `Object.prototype`                   |
| [`extends null`](#erweiterung_von_null) | `Function.prototype`       | `null`                               |
| `extends ParentClass`             | `ParentClass`              | `ParentClass.prototype`              |

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// Erlaubt Vererbung von statischen Eigenschaften
Object.getPrototypeOf(ChildClass) === ParentClass;
// Erlaubt Vererbung von Instanzeigenschaften
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

Die rechtsseitige Komponente von `extends` muss kein Bezeichner sein. Sie können jeden Ausdruck verwenden, der zu einem Konstruktor auswertet. Dies ist oft nützlich, um [Mixins](#mix-ins) zu erstellen. Der `this`-Wert im `extends`-Ausdruck ist der `this`-Wert, der die Klassenanweisung umgibt, und das Verweisen auf den Klassennamen führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren erwartungsgemäß in diesem Ausdruck.

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

Während die Basisklasse möglicherweise alles von ihrem Konstruktor zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

```js
class ParentClass {
  constructor() {
    return 1;
  }
}

console.log(new ParentClass()); // ParentClass {}
// Der Rückgabewert wird ignoriert, da er kein Objekt ist
// Dies stimmt mit Funktionskonstruktoren überein

class ChildClass extends ParentClass {
  constructor() {
    super();
    return 1;
  }
}

console.log(new ChildClass()); // TypeError: Derived constructors may only return object or undefined
```

Wenn der Elternklassen-Konstruktor ein Objekt zurückgibt, wird dieses Objekt als `this`-Wert für die abgeleitete Klasse verwendet, wenn weitere [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) initialisiert werden. Dieser Trick wird als ["Return-Override"](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) bezeichnet, der es ermöglicht, Felder der abgeleiteten Klasse (einschließlich [privater](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) auf nicht verwandten Objekten zu definieren.

### Unterklassenbildung von integrierten Objekten

> [!WARNING]
> Das Standardkomitee ist nun der Meinung, dass der eingebaute Unterklassenmechanismus in früheren Spezifikationsversionen übermäßig komplex ist und spürbare Leistungs- und Sicherheitsauswirkungen hat. Neue eingebaute Methoden berücksichtigen Unterklassen weniger, und Engine-Implementierer untersuchen [ob bestimmte Unterklassenmechanismen entfernt werden sollen](https://github.com/tc39/proposal-rm-builtin-subclassing). Überlegen Sie, bei der Erweiterung von eingebauten Objekten Komposition anstelle von Vererbung zu verwenden.

Hier sind einige Dinge, die Sie erwarten könnten, wenn Sie eine Klasse erweitern:

- Beim Aufrufen einer statischen Fabrikmethode (wie {{jsxref("Promise.resolve()")}} oder {{jsxref("Array.from()")}}) auf einer Unterklasse ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Beim Aufrufen einer Instanzmethode, die eine neue Instanz zurückgibt (wie {{jsxref("Promise.prototype.then()")}} oder {{jsxref("Array.prototype.map()")}}) auf einer Unterklasse ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Instanzmethoden versuchen, nach Möglichkeit an eine minimalen Satz primitiver Methoden zu delegieren. Zum Beispiel führt das Überschreiben von {{jsxref("Promise/then", "then()")}} in einer Unterklasse von {{jsxref("Promise")}} automatisch dazu, dass sich das Verhalten von {{jsxref("Promise/catch", "catch()")}} ändert; oder bei einer Unterklasse von {{jsxref("Map")}} führt das Überschreiben von {{jsxref("Map/set", "set()")}} automatisch dazu, dass sich das Verhalten der {{jsxref("Map/Map", "Map()")}}-Konstruktor ändert.

Jedoch erfordern die obigen Erwartungen beträchtliche Anstrengungen, um korrekt umgesetzt zu werden.

- Der erste Punkt erfordert, dass die statische Methode den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) liest, um den Konstruktor für die zurückgegebene Instanz zu erhalten. Dies bedeutet, dass `[p1, p2, p3].map(Promise.resolve)` einen Fehler auslöst, da das `this`-Wert innerhalb von `Promise.resolve` `undefined` ist. Eine Möglichkeit, dies zu beheben, besteht darin, auf die Basisklasse zurückzufallen, wenn `this` kein Konstruktor ist, wie es {{jsxref("Array.from()")}} tut, aber das bedeutet immer noch, dass die Basisklasse besonders behandelt wird.
- Der zweite Punkt erfordert, dass die Instanzmethode [`this.constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) liest, um die Konstruktionsfunktion zu erhalten. Allerdings kann `new this.constructor()` alten Code brechen, da die `constructor`-Eigenschaft sowohl schreibbar als auch konfigurierbar ist und auf keine Weise geschützt ist. Daher verwenden viele eingebaute Kopiermethoden stattdessen die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)-Eigenschaft des Konstruktors (die standardmäßig einfach `this`, also der Konstruktor selbst, zurückgibt). Allerdings erlaubt `[Symbol.species]`, beliebigen Code auszuführen und Instanzen eines beliebigen Typs zu erstellen, was ein Sicherheitsproblem darstellt und die Unterklassen-Semantik erheblich verkompliziert.
- Der dritte Punkt führt zu sichtbaren Aufrufen von benutzerdefiniertem Code, was es schwieriger macht, viele Optimierungen umzusetzen. Zum Beispiel, wenn der `Map()`-Konstruktor mit einem Iterable von _x_ Elementen aufgerufen wird, dann muss er die `set()`-Methode _x_ Mal sichtbar aufrufen, anstatt einfach die Elemente in den internen Speicher zu kopieren.

Diese Probleme sind nicht einzigartig für eingebaute Klassen. Für Ihre eigenen Klassen müssen Sie wahrscheinlich die gleichen Entscheidungen treffen. Allerdings sind für eingebaute Klassen Optimierbarkeit und Sicherheit ein viel größeres Anliegen. Neue eingebaute Methoden konstruieren immer die Basisklasse und rufen so wenige benutzerdefinierte Methoden wie möglich auf. Wenn Sie eingebaute Klassen unterklassen möchten, während Sie die oben genannten Erwartungen erfüllen, müssen Sie alle Methoden überschreiben, die das Standardverhalten in sich haben. Jede Hinzufügung neuer Methoden zur Basisklasse kann auch die Semantik Ihrer Unterklasse brechen, da sie standardmäßig vererbt werden. Daher ist eine bessere Möglichkeit, eingebaute Klassen zu erweitern, die Verwendung von [_Komposition_](#vermeidung_von_vererbung).

### Erweiterung von null

`extends null` wurde entwickelt, um die einfache Erstellung von [Objekten zu ermöglichen, die nicht von `Object.prototype` erben](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Aufgrund unklarer Entscheidungen darüber, ob `super()` im Konstruktor aufgerufen werden soll, ist es jedoch praktisch nicht möglich, eine solche Klasse zu konstruieren, ohne einen Konstruktor zu verwenden, der kein Objekt zurückgibt. [Das TC39-Komitee arbeitet daran, dieses Feature wieder zu aktivieren](https://github.com/tc39/ecma262/pull/1321).

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
    // Die Verwendung von new.target ermöglicht es abgeleiteten Klassen,
    // die richtige Prototypkette zu haben
    return Object.create(new.target.prototype);
  }
}

const proto = Object.getPrototypeOf;
console.log(proto(proto(new NullClass()))); // null
```

## Beispiele

### Verwendung von extends

Das erste Beispiel erstellt eine Klasse namens `Square` aus einer Klasse namens `Polygon`. Dieses Beispiel stammt aus diesem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class Square extends Polygon {
  constructor(length) {
    // Hier wird der Konstruktor der Elternklasse mit den Längen aufgerufen,
    // die für die Breite und Höhe des Polygons angegeben sind
    super(length, length);
    // Hinweis: In abgeleiteten Klassen muss super() aufgerufen werden, bevor Sie
    // 'this' verwenden können. Wenn dies weggelassen wird, wird ein Referenzfehler verursacht.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }
}
```

### Erweiterung von einfachen Objekten

Klassen können keine normalen (nicht konstruierbaren) Objekte erweitern. Wenn Sie von einem normalen Objekt erben möchten, indem Sie alle Eigenschaften dieses Objekts auf geerbte Instanzen verfügbar machen, können Sie stattdessen {{jsxref("Object.setPrototypeOf()")}} verwenden:

```js
const Animal = {
  speak() {
    console.log(`${this.name} macht ein Geräusch.`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);

const d = new Dog("Mitzie");
d.speak(); // Mitzie macht ein Geräusch.
```

### Erweiterung von eingebauten Objekten

Dieses Beispiel erweitert das eingebaute {{jsxref("Date")}}-Objekt. Dieses Beispiel stammt aus diesem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js-nolint
class MyDate extends Date {
  getFormattedDate() {
    const months = [
      "Jan", "Feb", "Mrz", "Apr", "Mai", "Jun",
      "Jul", "Aug", "Sep", "Okt", "Nov", "Dez",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}
```

### Erweiterung von `Object`

Alle JavaScript-Objekte erben standardmäßig von `Object.prototype`, daher scheint das Schreiben von `extends Object` auf den ersten Blick redundant. Der einzige Unterschied zum völligen Weglassen von `extends` ist, dass der Konstruktor selbst statische Methoden von `Object` erbt, wie zum Beispiel {{jsxref("Object.keys()")}}. Da jedoch keine statische Methode von `Object` den `this`-Wert verwendet, gibt es trotzdem keinen Mehrwert bei der Vererbung dieser statischen Methoden.

Der {{jsxref("Object/Object", "Object()")}}-Konstruktor behandelt das Unterklassen-Szenario speziell. Wenn er implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufgerufen wird, initialisiert er immer ein neues Objekt mit `new.target.prototype` als Prototyp. Jeder an `super()` übergebene Wert wird ignoriert.

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

Vergleichen Sie dieses Verhalten mit einem benutzerdefinierten Wrapper, der das Unterklassen-Szenario nicht speziell behandelt:

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

Möglicherweise möchten Sie {{jsxref("Array")}}-Objekte in Ihrer abgeleiteten Array-Klasse `MyArray` zurückgeben. Das Species-Muster ermöglicht es Ihnen, Standardkonstruktoren zu überschreiben.

Zum Beispiel möchten Sie, wenn Sie Methoden wie {{jsxref("Array.prototype.map()")}} verwenden, die den Standardkonstruktor zurückgeben, dass diese Methoden ein übergeordnetes `Array`-Objekt anstelle des `MyArray`-Objekts zurückgeben. Das {{jsxref("Symbol.species")}}-Symbol ermöglicht es Ihnen, dies zu tun:

```js
class MyArray extends Array {
  // Überschreiben des Species, um den übergeordneten Array-Konstruktor zu verwenden
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

Dieses Verhalten wird von vielen eingebauten Kopiermethoden implementiert. Für Einschränkungen dieser Funktion siehe die Diskussion über [Unterklassenbildung von eingebauten Objekten](#unterklassenbildung_von_integrierten_objekten).

### Mix-ins

Abstrakte Unterklassen oder _Mix-ins_ sind Vorlagen für Klassen. Eine Klasse kann nur eine einzelne Superklasse haben, daher ist Mehrfachvererbung von Werkzeugklassen beispielsweise nicht möglich. Die Funktionalität muss von der Superklasse bereitgestellt werden.

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

Vererbung ist eine sehr starke Kopplungsbeziehung in der objektorientierten Programmierung. Dies bedeutet, dass alle Verhaltensweisen der Basisklasse standardmäßig von der Unterklasse geerbt werden, was nicht immer das ist, was gewünscht wird. Ziehen Sie zum Beispiel die Implementierung einer `ReadOnlyMap` in Betracht:

```js
class ReadOnlyMap extends Map {
  set() {
    throw new TypeError("Eine schreibgeschützte Map muss zur Bauzeit festgelegt werden.");
  }
}
```

Es stellt sich heraus, dass `ReadOnlyMap` nicht konstruktionsfähig ist, da der [`Map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)-Konstruktor die `set()`-Methode der Instanz aufruft.

```js
const m = new ReadOnlyMap([["a", 1]]); // TypeError: Eine schreibgeschützte Map muss zur Bauzeit festgelegt werden.
```

Wir könnten dies umschiffen, indem wir eine private Flag verwenden, um anzuzeigen, ob die Instanz konstruiert wird. Ein bedeutenderes Problem bei diesem Design ist jedoch, dass es das [Liskovsches Substitutionsprinzip](https://de.wikipedia.org/wiki/Liskovsches_Substitutionsprinzip) bricht, das besagt, dass eine Unterklasse für ihre Superklasse austauschbar sein sollte. Wenn eine Funktion ein `Map`-Objekt erwartet, sollte sie auch ein `ReadOnlyMap`-Objekt verwenden können, was hier nicht der Fall ist.

Vererbung führt oft zum [Kreis-Ellipsen-Problem](https://de.wikipedia.org/wiki/Kreis-Ellipsen-Problem), da keiner der Typen das Verhalten des anderen perfekt umfasst, obwohl sie viele gemeinsame Merkmale teilen. Im Allgemeinen ist es besser, Komposition anstelle von Vererbung zu verwenden, es sei denn, es gibt einen sehr guten Grund zur Verwendung von Vererbung. Komposition bedeutet, dass eine Klasse einen Verweis auf ein Objekt einer anderen Klasse hat und dieses Objekt nur als Implementierungsdetail verwendet.

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

In diesem Fall ist die `ReadOnlyMap`-Klasse keine Unterklasse von `Map`, aber sie implementiert trotzdem die meisten der gleichen Methoden. Das bedeutet mehr Code-Duplizierung, aber es bedeutet auch, dass die `ReadOnlyMap`-Klasse nicht stark an die `Map`-Klasse gekoppelt ist und nicht leicht zerbricht, wenn die `Map`-Klasse verändert wird, wodurch die [semantischen Probleme der eingebauten Unterklassenbildung](#unterklassenbildung_von_integrierten_objekten) vermieden werden. Wenn die `Map`-Klasse zum Beispiel eine [`emplace()`](https://github.com/tc39/proposal-upsert)-Methode hinzufügt, die nicht `set()` aufruft, würde dies dazu führen, dass die `ReadOnlyMap`-Klasse nicht mehr schreibgeschützt ist, es sei denn, letztere wird entsprechend aktualisiert, um `emplace()` ebenfalls zu überschreiben. Darüber hinaus haben `ReadOnlyMap`-Objekte die `set`-Methode überhaupt nicht, was genauer ist als das Auslösen eines Fehlers zur Laufzeit.

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
