---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Das **`extends`** Schlüsselwort wird in [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) oder [Klassenexpressionen](/de/docs/Web/JavaScript/Reference/Operators/class) verwendet, um eine Klasse zu erstellen, die eine Unterklasse einer anderen Klasse ist.

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
  - : Ein Ausdruck, der zu einer Konstruktorfunktion (einschließlich einer Klasse) oder `null` auswertet.

## Beschreibung

Das `extends` Schlüsselwort kann zum Erstellen von Unterklassen für benutzerdefinierte Klassen sowie für eingebaute Objekte verwendet werden.

Jeder Konstruktor, der mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden kann und die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft hat, kann Kandidat für die Elternklasse sein. Beide Bedingungen müssen erfüllt sein – zum Beispiel können [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und {{jsxref("Proxy")}} konstruiert werden, aber sie haben keine `prototype` Eigenschaft, also können sie nicht unterklassifiziert werden.

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

Die `prototype` Eigenschaft der `ParentClass` muss ein {{jsxref("Object")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, aber in der Praxis werden Sie sich selten darum kümmern, da ein nicht-objekt-orientiertes `prototype` sich ohnehin nicht wie erwartet verhält. (Es wird vom [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator ignoriert.)

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!
```

`extends` legt das Prototyp für sowohl `ChildClass` als auch `ChildClass.prototype` fest.

|                                   | Prototyp von `ChildClass` | Prototyp von `ChildClass.prototype` |
| --------------------------------- | ------------------------- | ----------------------------------- |
| `extends` Klausel fehlt           | `Function.prototype`      | `Object.prototype`                  |
| [`extends null`](#null_erweitern) | `Function.prototype`      | `null`                              |
| `extends ParentClass`             | `ParentClass`             | `ParentClass.prototype`             |

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
Object.getPrototypeOf(ChildClass) === ParentClass;
// Allows inheritance of instance properties
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

Die rechte Seite von `extends` muss kein Bezeichner sein. Sie können jeden Ausdruck verwenden, der zu einem Konstruktor auswertet. Dies ist oft nützlich, um [Mixins](#mix-ins) zu erstellen. Der `this` Wert im `extends` Ausdruck ist das `this`, das die Klassendefinition umgibt, und das Verweisen auf den Klassennamen führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren erwartungsgemäß in diesem Ausdruck.

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

Während die Basisklasse alles von ihrem Konstruktor zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, sonst wird ein {{jsxref("TypeError")}} ausgelöst.

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

Wenn der Elternklassenkonstruktor ein Objekt zurückgibt, wird dieses Objekt als `this` Wert für die abgeleitete Klasse verwendet, wenn diese weiter [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) initialisiert. Dieser Trick wird als ["Rückgabeveränderung"](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#returning_overriding_object) bezeichnet und ermöglicht es, dass die Felder einer abgeleiteten Klasse (einschließlich der [privaten](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)) auf nicht verwandten Objekten definiert werden.

### Unterklassenbildung eingebauter Klassen

> [!WARNING]
> Das Standardkomitee ist mittlerweile der Ansicht, dass der eingebaute Unterklassifizierungsmechanismus in früheren Spezifikationsversionen überentwickelt ist und nicht unerhebliche Leistungs- und Sicherheitsprobleme verursacht. Neue eingebaute Methoden berücksichtigen Unterklassen weniger, und Implementierer von Engines untersuchen, [ob bestimmte Mechanismen der Unterklassifizierung entfernt werden sollen](https://github.com/tc39/proposal-rm-builtin-subclassing). Ziehen Sie in Betracht, Zusammensetzung anstelle von Vererbung zu verwenden, wenn Sie eingebaute Klassen erweitern.

Hier sind einige Dinge, die Sie erwarten können, wenn Sie eine Klasse erweitern:

- Beim Aufruf einer statischen Fabrikmethode (wie {{jsxref("Promise.resolve()")}} oder {{jsxref("Array.from()")}}) auf einer Unterklasse ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Beim Aufruf einer Instanzmethode, die eine neue Instanz zurückgibt (wie {{jsxref("Promise.prototype.then()")}} oder {{jsxref("Array.prototype.map()")}}) auf einer Unterklasse, ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Instanzmethoden versuchen, soweit möglich, an eine minimalen Satz von primitiven Methoden zu delegieren. Zum Beispiel führt das Überschreiben von {{jsxref("Promise/then", "then()")}} in einer Unterklasse von {{jsxref("Promise")}} automatisch dazu, dass sich das Verhalten von {{jsxref("Promise/catch", "catch()")}} ändert; oder beim Überschreiben von {{jsxref("Map/set", "set()")}} in einer Unterklasse von {{jsxref("Map")}} ändert sich das Verhalten des {{jsxref("Map/Map", "Map()")}} Konstruktors automatisch.

Diese Erwartungen richtig zu implementieren erfordert jedoch nicht-triviale Anstrengungen.

- Erstens muss die statische Methode den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) lesen, um den Konstruktor für die Konstruktion der zurückgegebenen Instanz zu erhalten. Dies bedeutet, dass `[p1, p2, p3].map(Promise.resolve)` einen Fehler auslöst, da `this` innerhalb von `Promise.resolve` `undefined` ist. Eine Möglichkeit, dies zu beheben, besteht darin, auf die Basisklasse zurückzufallen, wenn `this` kein Konstruktor ist, wie {{jsxref("Array.from()")}} es tut, wobei die Basisklasse dennoch eine Sonderbehandlung erfährt.
- Zweitens muss die Instanzmethode [`this.constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) lesen, um die Konstruktorfunktion zu erhalten. Aber `new this.constructor()` kann alten Code brechen, weil die `constructor` Eigenschaft sowohl beschreibbar als auch konfigurierbar ist und in keiner Weise geschützt ist. Daher verwenden viele eingebaute Kopiermethoden stattdessen die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) Eigenschaft des Konstruktors (die standardmäßig einfach `this`, also den Konstruktor selbst, zurückgibt). Aber `[Symbol.species]` erlaubt es, beliebigen Code auszuführen und Instanzen eines beliebigen Typs zu erstellen, was ein Sicherheitsproblem darstellt und die Semantik der Unterklassenerstellung erheblich verkompliziert.
- Drittens führt es zu sichtbaren Aufrufen von benutzerdefiniertem Code, was viele Optimierungen erschwert. Zum Beispiel, wenn der `Map()` Konstruktor mit einem iterierbaren von _x_ Elementen aufgerufen wird, muss er die `set()` Methode _x_-mal sichtbar aufrufen, anstatt die Elemente einfach in den internen Speicher zu kopieren.

Diese Probleme sind nicht einzigartig für eingebaute Klassen. Bei Ihren eigenen Klassen müssen Sie wahrscheinlich die gleichen Entscheidungen treffen. Bei eingebauten Klassen sind jedoch Optimierbarkeit und Sicherheit ein viel größeres Anliegen. Neue eingebaute Methoden konstruieren immer die Basisklasse und rufen so wenige benutzerdefinierte Methoden wie möglich auf. Wenn Sie eingebaute Klassen unterklassen wollen und trotzdem die oben genannten Erwartungen erfüllen möchten, müssen Sie alle Methoden überschreiben, bei denen das Standardverhalten fest integriert ist. Jede Hinzufügung neuer Methoden in die Basisklasse kann auch die Semantik Ihrer Unterklasse brechen, da sie standardmäßig vererbt werden. Daher ist eine bessere Art, eingebaute Klassen zu erweitern, die [_Zusammensetzung_](#vermeidung_von_vererbung) zu verwenden.

### Null erweitern

`extends null` wurde entworfen, um die einfache Erstellung von [Objekten, die nicht von `Object.prototype` erben](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) zu ermöglichen. Aufgrund ungelöster Entscheidungen darüber, ob `super()` im Konstruktor aufgerufen werden sollte, ist es jedoch in der Praxis nicht möglich, eine solche Klasse unter Verwendung einer beliebigen Konstruktorimplementierung zu konstruieren, die kein Objekt zurückgibt. [Das TC39 Komitee arbeitet daran, dieses Feature wieder zu aktivieren](https://github.com/tc39/ecma262/pull/1321).

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

Das erste Beispiel erstellt eine Klasse namens `Square` von einer Klasse namens `Polygon`. Dieses Beispiel stammt aus diesem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quelle)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

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

### Normale Objekte erweitern

Klassen können reguläre (nicht konstruierbare) Objekte nicht erweitern. Wenn Sie von einem regulären Objekt erben möchten, indem Sie alle Eigenschaften dieses Objekts in geerbten Instanzen verfügbar machen, können Sie stattdessen {{jsxref("Object.setPrototypeOf()")}} verwenden:

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

### Eingebaute Objekte erweitern

Dieses Beispiel erweitert das eingebaute {{jsxref("Date")}} Objekt. Dieses Beispiel stammt aus diesem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quelle)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

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

Alle JavaScript-Objekte erben standardmäßig von `Object.prototype`, daher scheint das Schreiben von `extends Object` auf den ersten Blick redundant zu sein. Der einzige Unterschied, `extends` nicht zu schreiben, besteht darin, dass der Konstruktor selbst statische Methoden von `Object` erbt, wie zum Beispiel {{jsxref("Object.keys()")}}. Da jedoch keine statische Methode von `Object` den `this` Wert verwendet, gibt es keinen Nutzen darin, diese statischen Methoden zu erben.

Der {{jsxref("Object/Object", "Object()")}} Konstruktor behandelt die Unterklassification besonders. Wenn er implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufgerufen wird, initialisiert er immer ein neues Objekt mit `new.target.prototype` als sein Prototyp. Jeder an `super()` übergebene Wert wird ignoriert.

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

Vergleichen Sie dieses Verhalten mit einem benutzerdefinierten Wrapper, der die Unterklassification nicht besonders behandelt:

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

Es kann sein, dass Sie {{jsxref("Array")}} Objekte in Ihrer abgeleiteten Array-Klasse `MyArray` zurückgeben möchten. Das Species-Muster ermöglicht es Ihnen, Standardkonstruktoren zu überschreiben.

Zum Beispiel möchten Sie bei der Verwendung von Methoden wie {{jsxref("Array.prototype.map()")}}, die den Standardkonstruktor zurückgeben, dass diese Methoden ein übergeordnetes `Array`-Objekt zurückgeben, anstelle des `MyArray`-Objekts. Das {{jsxref("Symbol.species")}} Symbol lässt Sie dies tun:

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

Dieses Verhalten wird von vielen eingebauten Kopiermethoden implementiert. Für Vorbehalte zu diesem Feature siehe die Diskussion zur [Unterklassenbildung eingebauter Klassen](#unterklassenbildung_eingebauter_klassen).

### Mix-ins

Abstrakte Unterklassen oder _Mix-ins_ sind Vorlagen für Klassen. Eine Klasse kann nur eine einzige Oberklasse haben, daher ist Mehrfachvererbung von Werkzeugklassen beispielsweise nicht möglich. Die Funktionalität muss von der Oberklasse bereitgestellt werden.

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

Eine Klasse, die diese Mix-ins verwendet, kann dann so geschrieben werden:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

### Vermeidung von Vererbung

Vererbung ist eine sehr starke Kopplungsbeziehung in der objektorientierten Programmierung. Sie bedeutet, dass alle Verhaltensweisen der Basisklasse standardmäßig von der Unterklasse geerbt werden, was nicht immer gewünscht sein könnte. Betrachten Sie zum Beispiel die Implementierung einer `ReadOnlyMap`:

```js
class ReadOnlyMap extends Map {
  set() {
    throw new TypeError("A read-only map must be set at construction time.");
  }
}
```

Es stellt sich heraus, dass `ReadOnlyMap` nicht konstruierbar ist, da der [`Map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) Konstruktor die `set()` Methode der Instanz aufruft.

```js
const m = new ReadOnlyMap([["a", 1]]); // TypeError: A read-only map must be set at construction time.
```

Wir können dies umgehen, indem wir einen privaten Indikator verwenden, um anzuzeigen, ob die Instanz konstruiert wird. Ein wesentliches Problem bei diesem Design ist jedoch, dass es das [Liskov'sche Substitutionsprinzip](https://en.wikipedia.org/wiki/Liskov_substitution_principle) bricht, welches besagt, dass eine Unterklasse für ihre Oberklasse austauschbar sein sollte. Wenn eine Funktion ein `Map`-Objekt erwartet, sollte sie auch ein `ReadOnlyMap`-Objekt verwenden können, was hier jedoch zu einem Bruch führt.

Vererbung führt oft zu [dem Kreis-Ellipse-Problem](https://en.wikipedia.org/wiki/Circle%E2%80%93ellipse_problem), da kein Typ perfekt das Verhalten des anderen beinhaltet, obwohl sie viele gemeinsame Merkmale teilen. Im Allgemeinen ist es, es sei denn, es gibt einen sehr guten Grund, Vererbung zu verwenden, besser, Zusammensetzung einzusetzen. Zusammensetzung bedeutet, dass eine Klasse eine Referenz zu einem Objekt einer anderen Klasse hat und dieses Objekt nur als Implementierungsdetail verwendet.

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

In diesem Fall ist die `ReadOnlyMap` Klasse keine Unterklasse von `Map`, aber sie implementiert dennoch die meisten der gleichen Methoden. Dies bedeutet mehr Code-Duplikation, aber es bedeutet auch, dass die `ReadOnlyMap` Klasse nicht stark mit der `Map` Klasse gekoppelt ist und nicht leicht bricht, wenn sich die `Map` Klasse ändert. Es vermeidet die [semantischen Probleme der eingebauten Unterklassifizierung](#unterklassenbildung_eingebauter_klassen). Zum Beispiel, wenn die `Map` Klasse eine neue Utility-Methode hinzufügt (wie [`getOrInsert()`](https://github.com/tc39/proposal-upsert)), die `set()` nicht aufruft, würde dies bedeuten, dass die `ReadOnlyMap` Klasse nicht mehr schreibgeschützt ist, es sei denn, letztere wird entsprechend aktualisiert, um `getOrInsert()` ebenfalls zu überschreiben. Außerdem haben `ReadOnlyMap` Objekte die `set` Methode überhaupt nicht, was genauer ist, als zur Laufzeit einen Fehler auszulösen.

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
