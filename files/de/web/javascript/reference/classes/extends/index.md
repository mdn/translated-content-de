---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: 1b7dbf06b84237832fc9108e1531542fd6a21a5b
---

{{jsSidebar("Classes")}}

Das **`extends`**-Schlüsselwort wird in [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) oder [Klassenexpressions](/de/docs/Web/JavaScript/Reference/Operators/class) verwendet, um eine Klasse zu erstellen, die ein Kind einer anderen Klasse ist.

{{InteractiveExample("JavaScript Demo: Class extends", "taller")}}

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
  - : Ein Ausdruck, der zu einer Konstruktorfunktion (einschließlich einer Klasse) oder `null` ausgewertet wird.

## Beschreibung

Das Schlüsselwort `extends` kann verwendet werden, um benutzerdefinierte Klassen sowie eingebaute Objekte zu unterklassen.

Jeder Konstruktor, der mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden kann und die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft besitzt, kann als übergeordnete Klasse in Frage kommen. Beide Bedingungen müssen erfüllt sein — beispielsweise können [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und {{jsxref("Proxy")}} konstruiert werden, aber sie haben keine `prototype`-Eigenschaft, sodass sie nicht unterklassenfähig sind.

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

Die `prototype`-Eigenschaft der `ParentClass` muss ein {{jsxref("Object")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, aber in der Praxis müssen Sie sich darüber selten Sorgen machen, da ein nicht-Objekt-`prototype` ohnehin nicht wie erwartet verhält. (Es wird vom [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator ignoriert.)

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!
```

`extends` setzt das Prototyp für sowohl `ChildClass` als auch `ChildClass.prototype`.

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

Die rechte Seite von `extends` muss kein Bezeichner sein. Sie können jeden Ausdruck verwenden, der zu einem Konstruktor ausgewertet wird. Dies ist oft nützlich, um [Mixins](#mix-ins) zu erstellen. Der Wert `this` im `extends`-Ausdruck ist das umgebende `this` der Klassen-Definition, und das Verweisen auf den Klassennamen ist ein {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren wie erwartet in diesem Ausdruck.

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

Während die Basisklasse von ihrem Konstruktor alles zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.

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

Wenn der Konstruktor der übergeordneten Klasse ein Objekt zurückgibt, wird dieses Objekt als `this`-Wert für die abgeleitete Klasse verwendet, wenn weitere [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) initialisiert werden. Dieser Trick wird ["Return Overriding"](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) genannt, der es erlaubt, Felder der abgeleiteten Klasse (einschließlich [privater](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) auf nicht verwandten Objekten zu definieren.

### Subklassifizierung eingebaute Objekte

> [!WARNING]
> Das Normierungsgremium vertritt nun die Ansicht, dass der eingebaute Subklassierungsmechanismus in früheren Spezifikationsversionen überkonstruiert ist und nicht zu vernachlässigende Performance- und Sicherheitsauswirkungen hat. Neue eingebaute Methoden berücksichtigen Subklassen weniger, und Implementierer der Engines untersuchen, [ob bestimmte Subklassierungsmechanismen entfernt werden sollten](https://github.com/tc39/proposal-rm-builtin-subclassing). Ziehen Sie stattdessen in Betracht, Komposition anstelle von Vererbung zu verwenden, wenn Sie eingebaute Objekte erweitern.

Hier sind einige Dinge, die Sie erwarten können, wenn Sie eine Klasse erweitern:

- Beim Aufrufen einer statischen Fabrikmethode (wie {{jsxref("Promise.resolve()")}} oder {{jsxref("Array.from()")}}) auf einer Subklasse ist die zurückgegebene Instanz immer eine Instanz der Subklasse.
- Beim Aufrufen einer Instanzmethode, die eine neue Instanz zurückgibt (wie {{jsxref("Promise.prototype.then()")}} oder {{jsxref("Array.prototype.map()")}}) auf einer Subklasse, ist die zurückgegebene Instanz immer eine Instanz der Subklasse.
- Instanzmethoden versuchen, wo möglich, auf ein minimales Set von primitiven Methoden zu delegieren. Beispielsweise führt das Überladen von {{jsxref("Promise/then", "then()")}} in einer Subklasse von {{jsxref("Promise")}} automatisch zu Änderungen im Verhalten von {{jsxref("Promise/catch", "catch()")}}; oder bei einer Subklasse von {{jsxref("Map")}} führt das Überladen von {{jsxref("Map/set", "set()")}} automatisch zu einem geänderten Verhalten des {{jsxref("Map/Map", "Map()")}}-Konstruktors.

Diese Erwartungen erfordern jedoch erhebliche Anstrengungen, um richtig implementiert zu werden.

- Das erste erfordert, dass die statische Methode den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) liest, um den Konstruktor zur Konstruktion der zurückgegebenen Instanz zu erhalten. Dies bedeutet, dass `[p1, p2, p3].map(Promise.resolve)` einen Fehler auslöst, da `this` innerhalb von `Promise.resolve` `undefined` ist. Eine Möglichkeit, dies zu beheben, besteht darin, auf die Basisklasse zurückzugreifen, wenn `this` kein Konstruktor ist, wie es {{jsxref("Array.from()")}} tut, aber das bedeutet immer noch, dass die Basisklasse speziell behandelt wird.
- Das zweite erfordert, dass die Instanzmethode [`this.constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) liest, um die Konstruktorfunktion zu erhalten. `new this.constructor()` kann jedoch Legacy-Code brechen, da die `constructor`-Eigenschaft sowohl beschreibbar als auch konfigurierbar ist und nicht auf irgendeine Weise geschützt ist. Daher verwenden viele kopierende eingebaute Methoden stattdessen die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)-Eigenschaft des Konstruktors (die standardmäßig einfach `this`, den Konstruktor selbst, zurückgibt). Allerdings ermöglicht `[Symbol.species]`, beliebigen Code auszuführen und Instanzen eines beliebigen Typs zu erstellen, was ein Sicherheitsrisiko darstellt und die Subklassierungssemantik erheblich verkompliziert.
- Das dritte führt zu sichtbaren Aufrufen benutzerdefinierten Codes, was viele Optimierungen schwieriger macht. Wenn beispielsweise der Konstruktor `Map()` mit einem iterierbaren Objekt von _x_ Elementen aufgerufen wird, muss er die `set()`-Methode _x_ Mal sichtbar aufrufen, anstatt einfach die Elemente in den internen Speicher zu kopieren.

Diese Probleme sind nicht einzigartig für eingebaute Klassen. Für Ihre eigenen Klassen müssen Sie wahrscheinlich dieselben Entscheidungen treffen. Bei eingebauten Klassen sind jedoch Optimierbarkeit und Sicherheit von weitaus größerer Bedeutung. Neue eingebaute Methoden konstruieren immer die Basisklasse und rufen so wenige benutzerdefinierte Methoden wie möglich auf. Wenn Sie eingebaute Objekte unterklassen und die oben genannten Erwartungen erfüllen möchten, müssen Sie alle Methoden überschreiben, die das eingefahrene Verhalten in sie eingebaut haben. Jede Hinzufügung neuer Methoden zur Basisklasse kann auch die Semantik Ihrer Subklasse brechen, da sie standardmäßig geerbt werden. Daher ist es besser, eingebauten Objekten mit [_Komposition_](#vermeidung_von_vererbung) zu erweitern.

### `null` erweitern

`extends null` wurde entwickelt, um die einfache Erstellung von [Objekten, die nicht von `Object.prototype` erben](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), zu ermöglichen. Aufgrund von ungelösten Entscheidungen darüber, ob `super()` im Konstruktor aufgerufen werden sollte, ist es jedoch nicht möglich, eine solche Klasse in der Praxis unter Verwendung einer Konstruktorimplementierung zu konstruieren, die kein Objekt zurückgibt. [Das TC39-Komitee arbeitet daran, diese Funktion wieder zu aktivieren](https://github.com/tc39/ecma262/pull/1321).

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

Das erste Beispiel erstellt eine Klasse namens `Square` aus einer Klasse namens `Polygon`. Dieses Beispiel ist einem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) entnommen.

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

### Erweitern von normalen Objekten

Klassen können normale (nicht konstruierbare) Objekte nicht erweitern. Wenn Sie von einem normalen Objekt erben möchten, indem Sie alle Eigenschaften dieses Objekts auf geerbten Instanzen verfügbar machen, können Sie stattdessen {{jsxref("Object.setPrototypeOf()")}} verwenden:

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

Dieses Beispiel erweitert das eingebaute {{jsxref("Date")}}-Objekt. Dieses Beispiel ist einem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) entnommen.

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

### `Object` erweitern

Alle JavaScript-Objekte erben standardmäßig von `Object.prototype`, daher scheint das Schreiben von `extends Object` auf den ersten Blick redundant. Der einzige Unterschied, wenn `extends` überhaupt nicht geschrieben wird, besteht darin, dass der Konstruktor selbst statische Methoden von `Object` wie {{jsxref("Object.keys()")}} erbt. Da jedoch keine statische Methode von `Object` den `this`-Wert verwendet, gibt es keinen Nutzen in der Vererbung dieser statischen Methoden.

Der {{jsxref("Object/Object", "Object()")}}-Konstruktor behandelt das Subklassierungsszenario speziell. Wenn er implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufgerufen wird, initialisiert er immer ein neues Objekt mit `new.target.prototype` als Prototyp. Jede an `super()` übergebene Wert wird ignoriert.

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

Vergleichen Sie dieses Verhalten mit einem benutzerdefinierten Wrapper, der die Subklassierung nicht speziell behandelt:

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

Sie möchten möglicherweise {{jsxref("Array")}}-Objekte in Ihrer abgeleiteten Array-Klasse `MyArray` zurückgeben. Das Species-Muster ermöglicht es Ihnen, Standardkonstruktoren zu überschreiben.

Zum Beispiel möchten Sie bei der Verwendung von Methoden wie {{jsxref("Array.prototype.map()")}}, die den Standardkonstruktor zurückgeben, dass diese Methoden ein übergeordnetes `Array`-Objekt anstelle des `MyArray`-Objekts zurückgeben. Das {{jsxref("Symbol.species")}}-Symbol ermöglicht dies:

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

Dieses Verhalten wird von vielen eingebauten Kopiermethoden implementiert. Für die Vorbehalte dieser Funktion siehe die Diskussion [Subklassifizierung von eingebauten Objekten](#subklassifizierung_eingebaute_objekte).

### Mix-ins

Abstrakte Unterklassen oder _Mix-ins_ sind Vorlagen für Klassen. Eine Klasse kann nur eine einzelne Superklasse haben, daher ist die Mehrfachvererbung von Werkzeugklassen beispielsweise nicht möglich. Die Funktionalität muss von der Superklasse bereitgestellt werden.

Eine Funktion mit einer Superklasse als Eingabe und einer Subklasse, die diese Superklasse erweitert, als Ausgabe kann verwendet werden, um Mix-ins zu implementieren:

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

Vererbung ist eine sehr starke Kopplungsbeziehung in der objektorientierten Programmierung. Das bedeutet, dass alle Verhaltensweisen der Basisklasse standardmäßig von der Subklasse geerbt werden, was nicht immer das sein könnte, was Sie wollen. Betrachten Sie zum Beispiel die Implementierung eines `ReadOnlyMap`:

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

Wir könnten dies umgehen, indem wir ein privates Flag verwenden, um anzugeben, ob die Instanz konstruiert wird. Ein bedeutenderes Problem bei diesem Design ist jedoch, dass es das [Liskov-Substitutionsprinzip](https://de.wikipedia.org/wiki/Liskovsche_Substitutionsprinzip) verletzt, das besagt, dass eine Subklasse für ihre Superklasse substituierbar sein sollte. Wenn eine Funktion ein `Map`-Objekt erwartet, sollte sie auch ein `ReadOnlyMap`-Objekt verwenden können, was hier brechen wird.

Vererbung führt oft zu [dem Kreis-Ellipse-Problem](https://de.wikipedia.org/wiki/Kreis-Ellipse-Problem), da weder der Typ perfekt das Verhalten des anderen beinhaltet, obwohl sie viele gemeinsame Merkmale teilen. Im Allgemeinen ist es besser, Komposition anstelle von Vererbung zu verwenden, es sei denn, es gibt einen sehr guten Grund für die Verwendung von Vererbung. Komposition bedeutet, dass eine Klasse eine Referenz zu einem Objekt einer anderen Klasse hat und dieses Objekt nur als Implementierungsdetail verwendet.

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

In diesem Fall ist die `ReadOnlyMap`-Klasse keine Subklasse von `Map`, aber sie implementiert immer noch die meisten der gleichen Methoden. Dies bedeutet mehr Code-Duplikation, aber es bedeutet auch, dass die `ReadOnlyMap`-Klasse nicht stark mit der `Map`-Klasse gekoppelt ist und nicht leicht bricht, wenn die `Map`-Klasse geändert wird, wodurch die [semantischen Probleme der eingebauten Subklassierung](#subklassifizierung_eingebaute_objekte) vermieden werden. Wenn beispielsweise die `Map`-Klasse eine neue Hilfsmethode (wie [`getOrInsert()`](https://github.com/tc39/proposal-upsert)) hinzufügt, die `set()` nicht aufruft, würde dies dazu führen, dass die `ReadOnlyMap`-Klasse nicht mehr schreibgeschützt ist, es sei denn, letztere wird entsprechend aktualisiert, um auch `getOrInsert()` zu überschreiben. Darüber hinaus haben `ReadOnlyMap`-Objekte die `set`-Methode überhaupt nicht, was genauer ist als ein Fehler zur Laufzeit zu werfen.

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
