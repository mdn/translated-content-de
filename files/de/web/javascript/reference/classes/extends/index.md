---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

Das **`extends`** Schlüsselwort wird in [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) oder [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class) verwendet, um eine Klasse zu erstellen, die Kind einer anderen Klasse ist.

{{EmbedInteractiveExample("pages/js/classes-extends.html", "taller")}}

## Syntax

```js-nolint
class ChildClass extends ParentClass { /* … */ }
```

- `ParentClass`
  - : Ein Ausdruck, der zu einer Konstruktorfunktion (einschließlich einer Klasse) oder `null` evaluiert wird.

## Beschreibung

Das `extends` Schlüsselwort kann verwendet werden, um benutzerdefinierte Klassen sowie eingebaute Objekte zu unterklassifizieren.

Jeder Konstruktor, der mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden kann und die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft hat, kann als Elternklasse in Frage kommen. Beide Bedingungen müssen erfüllt sein – zum Beispiel können [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und {{jsxref("Proxy")}} erstellt werden, aber sie besitzen keine `prototype`-Eigenschaft, daher können sie nicht unterklassifiziert werden.

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

Die `prototype`-Eigenschaft der `ParentClass` muss ein {{jsxref("Object")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, aber in der Praxis werden Sie sich selten darum kümmern, weil ein nicht-Objekt-`prototype` ohnehin nicht wie erwartet funktioniert. (Es wird vom [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator ignoriert.)

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!
```

`extends` setzt die Prototypen sowohl für `ChildClass` als auch für `ChildClass.prototype`.

|                                   | Prototyp von `ChildClass` | Prototyp von `ChildClass.prototype` |
| --------------------------------- | ------------------------- | ----------------------------------- |
| `extends` Klausel fehlt           | `Function.prototype`      | `Object.prototype`                  |
| [`extends null`](#verlängern_von_`null`) | `Function.prototype`      | `null`                              |
| `extends ParentClass`             | `ParentClass`             | `ParentClass.prototype`             |

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
Object.getPrototypeOf(ChildClass) === ParentClass;
// Allows inheritance of instance properties
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

Die rechte Seite von `extends` muss kein Bezeichner sein. Sie können jeden Ausdruck verwenden, der zu einem Konstruktor evaluiert. Dies ist oft nützlich, um [Mixins](#mix-ins) zu erstellen. Der `this`-Wert im `extends` Ausdruck ist das `this`, das die Klassen-Definition umgibt, und ein Verweis auf den Klassennamen führt zu einem {{jsxref("ReferenceError")}}, weil die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck wie erwartet.

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

Während die Basisklasse irgendetwas aus ihrem Konstruktor zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

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

Wenn der Konstruktor der Elternklasse ein Objekt zurückgibt, wird dieses Objekt als `this` Wert für die abgeleitete Klasse verwendet, wenn weitere [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) initialisiert werden. Dieser Trick wird als ["Rückgabe-Überlagerung"](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) bezeichnet, der es ermöglicht, die Felder (einschließlich [privater](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) Felder) einer abgeleiteten Klasse auf nicht verwandten Objekten zu definieren.

### Unterklassifizierung eingebauter Klassen

> [!WARNING]
> Das Standardkomitee vertritt jetzt die Position, dass der in früheren Spezifikationsversionen vorhandene Mechanismus zum Unterklassifizieren von eingebauten Klassen übermäßig komplex ist und nicht vernachlässigbare Leistungs- und Sicherheitsauswirkungen hat. Neue eingebaute Methoden berücksichtigen Unterklassen weniger, und Implementierer von Engines untersuchen, [ob bestimmte Mechanismen zur Unterklassifizierung entfernt werden sollen](https://github.com/tc39/proposal-rm-builtin-subclassing). Erwägen Sie den Einsatz von Komposition anstelle von Vererbung, wenn Sie eingebaute Klassen erweitern.

Hier sind einige Dinge, die Sie erwarten können, wenn Sie eine Klasse erweitern:

- Beim Aufruf einer statischen Fabrikmethode (wie {{jsxref("Promise.resolve()")}} oder {{jsxref("Array.from()")}}) auf einer Unterklasse ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Beim Aufruf einer Instanzmethode, die eine neue Instanz zurückgibt (wie {{jsxref("Promise.prototype.then()")}} oder {{jsxref("Array.prototype.map()")}}) auf einer Unterklasse, ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Instanzmethoden versuchen, wenn möglich, an einen minimalen Satz von primitiven Methoden zu delegieren. Zum Beispiel überschreibt für eine Unterklasse von {{jsxref("Promise")}} das Überschreiben von {{jsxref("Promise/then", "then()")}} automatisch das Verhalten von {{jsxref("Promise/catch", "catch()")}}; oder für eine Unterklasse von {{jsxref("Map")}}, überschreibt {{jsxref("Map/set", "set()")}} automatisch das Verhalten des {{jsxref("Map/Map", "Map()")}} Konstruktors.

Es erfordert jedoch erhebliche Anstrengungen, die oben genannten Erwartungen ordnungsgemäß umzusetzen.

- Das erste erfordert, dass die statische Methode den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) liest, um den Konstruktor zur Konstruktion der zurückgegebenen Instanz zu erhalten. Das bedeutet, dass der Ausdruck `[p1, p2, p3].map(Promise.resolve)` einen Fehler auslöst, da `this` innerhalb von `Promise.resolve` `undefined` ist. Eine Möglichkeit, dies zu beheben, besteht darin, auf die Basisklasse zurückzugreifen, wenn `this` kein Konstruktor ist, wie es {{jsxref("Array.from()")}} tut, aber das bedeutet immer noch, dass die Basisklasse eine Sonderbehandlung erfährt.
- Das zweite erfordert, dass die Instanzmethode [`this.constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) liest, um die Konstruktorfunktion zu erhalten. `new this.constructor()` kann jedoch Altkode brechen, weil die `constructor`-Eigenschaft sowohl schreibbar als auch konfigurierbar ist und in keiner Weise geschützt ist. Daher verwenden viele kopierende eingebaute Methoden stattdessen die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)-Eigenschaft des Konstruktors (die standardmäßig einfach `this`, den Konstruktor selbst, zurückgibt). Allerdings erlaubt `[Symbol.species]` das Ausführen von beliebigem Code und das Erstellen von Instanzen beliebigen Typs, was ein Sicherheitsproblem darstellt und die Semantik der Unterklassifizierung erheblich erschwert.
- Das dritte führt zu sichtbaren Aufrufen von benutzerdefiniertem Code, was viele Optimierungen schwieriger implementierbar macht. Zum Beispiel, wenn der `Map()`-Konstruktor mit einem Iterable von _x_ Elementen aufgerufen wird, muss er die `set()`-Methode _x_-mal sichtbar aufrufen, anstatt die Elemente einfach in den internen Speicher zu kopieren.

Diese Probleme sind nicht einzigartig für eingebaute Klassen. Für Ihre eigenen Klassen müssen Sie wahrscheinlich die gleichen Entscheidungen treffen. Für eingebaute Klassen sind jedoch Optimierbarkeit und Sicherheit von größerer Bedeutung. Neue eingebaute Methoden konstruieren immer die Basisklasse und rufen so wenige benutzerdefinierte Methoden wie möglich auf. Wenn Sie eingebauten Klassen unterklassieren und die oben genannten Erwartungen erfüllen möchten, müssen Sie alle Methoden überschreiben, die das Standardverhalten in sich integriert haben. Jede Hinzufügung neuer Methoden in der Basisklasse kann auch die Semantik Ihrer Unterklasse beeinträchtigen, da sie standardmäßig geerbt werden. Daher ist es besser, eingebaute Klassen mit [_Komposition_](#vermeidung_von_vererbung) zu erweitern.

### Verlängern von `null`

`extends null` wurde entwickelt, um eine einfache Erstellung von [Objekten, die nicht von `Object.prototype` erben](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), zu ermöglichen. Aufgrund ungelöster Entscheidungen darüber, ob `super()` innerhalb des Konstruktors aufgerufen werden sollte, ist es jedoch praktisch nicht möglich, eine solche Klasse mit einer beliebigen Konstruktorimplementierung zu erstellen, die kein Objekt zurückgibt. [Das TC39-Komitee arbeitet an der Wiederherstellung dieser Funktion](https://github.com/tc39/ecma262/pull/1321).

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

Das erste Beispiel erstellt eine Klasse `Square` aus einer Klasse `Polygon`. Dieses Beispiel stammt aus dieser [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quelle)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

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

Klassen können reguläre (nicht konstruierbare) Objekte nicht erweitern. Wenn Sie von einem regulären Objekt erben möchten, indem Sie alle Eigenschaften dieses Objekts auf vererbten Instanzen verfügbar machen, können Sie stattdessen {{jsxref("Object.setPrototypeOf()")}} verwenden:

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

### Erweitern von `Object`

Alle JavaScript-Objekte erben standardmäßig von `Object.prototype`, daher scheint das Schreiben von `extends Object` auf den ersten Blick redundant. Der einzige Unterschied zum völligen Weglassen von `extends` besteht darin, dass der Konstruktor selbst statische Methoden von `Object` erbt, wie {{jsxref("Object.keys()")}}. Da jedoch keine statische `Object`-Methode den `this`-Wert verwendet, bringt es dennoch keinen Wert, diese statischen Methoden zu erben.

Der {{jsxref("Object/Object", "Object()")}}-Konstruktor behandelt den Fall der Unterklassifizierung speziell. Wenn er implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufgerufen wird, initialisiert er immer ein neues Objekt mit `new.target.prototype` als Prototyp. Jeder Wert, der an `super()` übergeben wird, wird ignoriert.

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

Vergleichen Sie dieses Verhalten mit einem benutzerdefinierten Wrapper, der die Unterklassifizierung nicht speziell behandelt:

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

Vielleicht möchten Sie {{jsxref("Array")}}-Objekte in Ihrer abgeleiteten Array-Klasse `MyArray` zurückgeben. Das Species-Muster erlaubt es Ihnen, die Standardkonstruktoren zu überschreiben.

Zum Beispiel, wenn Sie Methoden wie {{jsxref("Array.prototype.map()")}} verwenden, die den Standardkonstruktor zurückgeben, möchten Sie, dass diese Methoden ein übergeordnetes `Array`-Objekt zurückgeben, anstatt des `MyArray`-Objekts. Das {{jsxref("Symbol.species")}}-Symbol ermöglicht Ihnen dies:

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

Dieses Verhalten wird von vielen eingebauten Kopiermethoden implementiert. Für Vorbehalte zu dieser Funktion siehe die [Diskussion zur Unterklassifizierung eingebauter Klassen](#unterklassifizierung_eingebauter_klassen).

### Mix-ins

Abstrakte Unterklassen oder _Mix-ins_ sind Vorlagen für Klassen. Eine Klasse kann nur eine einzige Oberklasse haben, daher ist die Mehrfachvererbung von Tooling-Klassen zum Beispiel nicht möglich. Die Funktionalität muss von der Oberklasse bereitgestellt werden.

Eine Funktion mit einer Oberklasse als Eingabe und einer Unterklasse, die diese Oberklasse erweitert, als Ausgabe kann verwendet werden, um Mix-ins zu implementieren:

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

Eine Klasse, die diese Mix-ins verwendet, kann dann folgendermaßen geschrieben werden:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

### Vermeidung von Vererbung

Vererbung ist eine sehr starke Kopplungsbeziehung in der objektorientierten Programmierung. Es bedeutet, dass alle Verhaltensweisen der Basisklasse standardmäßig von der Unterklasse geerbt werden, was möglicherweise nicht immer gewünscht ist. Betrachten Sie beispielsweise die Implementierung einer `ReadOnlyMap`:

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

Wir können dies umgehen, indem wir ein privates Flag verwenden, um anzuzeigen, ob die Instanz konstruiert wird. Ein noch bedeutenderes Problem mit diesem Design ist jedoch, dass es das [Liskov Substitutionsprinzip](https://de.wikipedia.org/wiki/Liskovsche_Substitutionsprinzip) verletzt, das besagt, dass eine Unterklasse für ihre Oberklasse austauschbar sein sollte. Wenn eine Funktion ein `Map`-Objekt erwartet, sollte sie auch ein `ReadOnlyMap`-Objekt verwenden können, was hier nicht der Fall ist.

Vererbung führt oft zu Problemen wie dem [Kreis-Ellipsen-Problem](https://de.wikipedia.org/wiki/Kreis-Ellipsen-Problem), da kein Typ das Verhalten des anderen perfekt beinhaltet, obwohl sie viele gemeinsame Merkmale teilen. Im Allgemeinen ist es besser, außer aus sehr guten Gründen, Komposition anstelle von Vererbung zu verwenden. Komposition bedeutet, dass eine Klasse eine Referenz zu einem Objekt einer anderen Klasse hat und dieses Objekt nur als Implementierungsdetail verwendet.

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

In diesem Fall ist die `ReadOnlyMap`-Klasse keine Unterklasse von `Map`, implementiert aber dennoch die meisten der gleichen Methoden. Dies bedeutet mehr Code-Duplikation, aber es bedeutet auch, dass die `ReadOnlyMap`-Klasse nicht stark mit der `Map`-Klasse gekoppelt ist und nicht leicht bricht, wenn die `Map`-Klasse geändert wird, wodurch die [semantischen Probleme der eingebauten Unterklassifizierung](#unterklassifizierung_eingebauter_klassen) vermieden werden. Zum Beispiel, wenn die `Map`-Klasse eine [`emplace()`](https://github.com/tc39/proposal-upsert)-Methode hinzufügt, die `set()` nicht aufruft, würde dies dazu führen, dass die `ReadOnlyMap`-Klasse nicht mehr schreibgeschützt ist, es sei denn, letztere wird entsprechend aktualisiert, um `emplace()` ebenfalls zu überschreiben. Darüber hinaus haben `ReadOnlyMap`-Objekte die `set`-Methode überhaupt nicht, was genauer ist als das Auslösen eines Fehlers zur Laufzeit.

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
