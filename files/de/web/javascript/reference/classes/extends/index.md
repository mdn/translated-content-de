---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Classes")}}

Das **`extends`** Schlüsselwort wird in [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) oder [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class) verwendet, um eine Klasse zu erstellen, die ein Kind einer anderen Klasse ist.

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

Das `extends` Schlüsselwort kann verwendet werden, um benutzerdefinierte Klassen sowie eingebaute Objekte zu unterklassen.

Jeder Konstruktor, der mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden kann und die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft hat, kann Kandidat für die Elternklasse sein. Die beiden Bedingungen müssen beide zutreffen – beispielsweise können [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und {{jsxref("Proxy")}} konstruiert werden, aber sie haben keine `prototype` Eigenschaft und können daher nicht unterklassen werden.

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

Die `prototype` Eigenschaft der `ParentClass` muss ein {{jsxref("Object")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein. In der Praxis müssen Sie sich darüber jedoch selten Sorgen machen, da ein nicht-objekthaftes `prototype` sich sowieso nicht wie erwartet verhält. (Es wird vom [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator ignoriert.)

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

|                                       | Prototyp von `ChildClass` | Prototyp von `ChildClass.prototype` |
| ------------------------------------- | ------------------------- | ----------------------------------- |
| `extends` Klausel fehlt               | `Function.prototype`      | `Object.prototype`                  |
| [`extends null`](#ausdehnen_von_null) | `Function.prototype`      | `null`                              |
| `extends ParentClass`                 | `ParentClass`             | `ParentClass.prototype`             |

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
Object.getPrototypeOf(ChildClass) === ParentClass;
// Allows inheritance of instance properties
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

Die rechte Seite von `extends` muss kein Bezeichner sein. Sie können jeden Ausdruck verwenden, der zu einem Konstruktor auswertet. Dies ist oft nützlich, um [Mixins](#mix-ins) zu erstellen. Der `this` Wert im `extends` Ausdruck ist das `this`, das die Klassendefinition umgibt, und der Verweis auf den Klassennamen ist ein {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck wie erwartet.

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

Während die Basisklasse alles aus ihrem Konstruktor zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, sonst wird ein {{jsxref("TypeError")}} ausgelöst.

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

Wenn der Konstruktor der Elternklasse ein Objekt zurückgibt, wird dieses Objekt als `this` Wert für die abgeleitete Klasse verwendet, wenn weitere [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) initialisiert werden. Dieser Trick wird als ["return overriding"](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#returning_overriding_object) bezeichnet, wodurch es ermöglicht wird, dass die Felder einer abgeleiteten Klasse (einschließlich [privater](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) Felder) auf nicht verwandten Objekten definiert werden.

### Unterklassen von eingebauten Objekten

> [!WARNING]
> Das Standardkomitee ist jetzt der Ansicht, dass der eingebaute Unterklassenmechanismus in früheren Versionen der Spezifikation übermäßig komplex ist und nicht zu vernachlässigende Performance- und Sicherheitsprobleme verursacht. Neue eingebaute Methoden berücksichtigen weniger Unterklassen, und Implementierer von Engines untersuchen [ob bestimmte Unterklassenmechanismen entfernt werden sollen](https://github.com/tc39/proposal-rm-builtin-subclassing). Erwägen Sie die Verwendung von Komposition anstelle von Vererbung bei der Erweiterung von eingebauten Objekten.

Hier sind einige Dinge, die Sie erwarten könnten, wenn Sie eine Klasse erweitern:

- Wenn eine statische Fabrikmethode (wie {{jsxref("Promise.resolve()")}} oder {{jsxref("Array.from()")}}) auf einer Unterklasse aufgerufen wird, ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Wenn eine Instanzmethode, die eine neue Instanz zurückgibt (wie {{jsxref("Promise.prototype.then()")}} oder {{jsxref("Array.prototype.map()")}}), auf einer Unterklasse aufgerufen wird, ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Instanzmethoden versuchen, nach Möglichkeit an eine minimale Menge primitiver Methoden zu delegieren. Beispielsweise bei einer Unterklasse von {{jsxref("Promise")}} führt das Überschreiben von {{jsxref("Promise/then", "then()")}} automatisch dazu, dass sich das Verhalten von {{jsxref("Promise/catch", "catch()")}} ändert; oder bei einer Unterklasse von {{jsxref("Map")}} führt das Überschreiben von {{jsxref("Map/set", "set()")}} automatisch dazu, dass sich das Verhalten des {{jsxref("Map/Map", "Map()")}} Konstruktors ändert.

Diese Erwartungen erfordern jedoch nicht-triviale Anstrengungen bei der Implementierung.

- Die erste erfordert, dass die statische Methode den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) liest, um den Konstruktor zum Konstruieren der zurückgegebenen Instanz zu erhalten. Dies bedeutet, dass `[p1, p2, p3].map(Promise.resolve)` einen Fehler auslöst, da `this` innerhalb von `Promise.resolve` `undefined` ist. Ein Weg, dies zu beheben, besteht darin, auf die Basisklasse zurückzufallen, wenn `this` kein Konstruktor ist, wie {{jsxref("Array.from()")}} es tut. Aber das bedeutet immer noch, dass die Basisklasse eine besondere Behandlung erfährt.
- Die zweite erfordert, dass die Instanzmethode [`this.constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) liest, um die Konstruktorfunktion zu erhalten. Jedoch, `new this.constructor()` kann alten Code brechen, da die `constructor` Eigenschaft sowohl beschreibbar als auch konfigurierbar ist und in keiner Weise geschützt ist. Daher verwenden viele kopierende eingebaute Methoden stattdessen die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) Eigenschaft des Konstruktors (die standardmäßig einfach `this` zurückgibt, den Konstruktor selbst). Jedoch erlaubt `[Symbol.species]` das Ausführen von beliebigem Code und das Erstellen von Instanzen eines beliebigen Typs, was ein Sicherheitsproblem darstellt und die Unterklassensemantik stark verkompliziert.
- Die dritte führt zu sichtbaren Aufrufen von benutzerdefiniertem Code, was viele Optimierungen schwerer zu implementieren macht. Beispielsweise muss der `Map()` Konstruktor beim Aufruf mit einem iterierbaren Objekt mit _x_ Elementen die `set()` Methode _x_ Mal sichtbar aufrufen, anstatt die Elemente einfach in den internen Speicher zu kopieren.

Diese Probleme sind nicht einzigartig für eingebaute Klassen. Für Ihre eigenen Klassen müssen Sie wahrscheinlich dieselben Entscheidungen treffen. Für eingebaute Klassen sind jedoch Optimierbarkeit und Sicherheit weitaus größere Anliegen. Neue eingebaute Methoden konstruieren immer die Basisklasse und rufen so wenige benutzerdefinierte Methoden wie möglich auf. Wenn Sie eingebaute Klassen unterklassen möchten und die oben genannten Erwartungen erreichen wollen, müssen Sie alle Methoden überschreiben, deren Standardverhalten fest eingebaut ist. Jede Hinzufügung neuer Methoden zur Basisklasse kann auch die Semantik Ihrer Unterklasse brechen, da sie standardmäßig vererbt werden. Daher ist es besser, eingebaute Klassen mit [_Komposition_](#vermeidung_von_vererbung) zu erweitern.

### Ausdehnen von null

`extends null` wurde entwickelt, um die einfache Erstellung von [Objekten, die nicht von `Object.prototype` erben](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) zu ermöglichen. Aufgrund unklarer Entscheidungen darüber, ob `super()` im Konstruktor aufgerufen werden soll, ist es jedoch in der Praxis nicht möglich, eine solche Klasse mit einer Konstruktorimplementierung zu erstellen, die kein Objekt zurückgibt. [Das TC39-Komitee arbeitet daran, diese Funktion erneut zu aktivieren](https://github.com/tc39/ecma262/pull/1321).

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

Das erste Beispiel erstellt eine Klasse namens `Square` aus einer Klasse namens `Polygon`. Dieses Beispiel stammt aus diesem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quelle)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

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

### Erweiterung von einfachen Objekten

Klassen können normale (nicht konstruierbare) Objekte nicht erweitern. Wenn Sie von einem normalen Objekt erben möchten, indem Sie alle Eigenschaften dieses Objekts für geerbte Instanzen verfügbar machen, können Sie stattdessen {{jsxref("Object.setPrototypeOf()")}} verwenden:

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

### Erweiterung von `Object`

Alle JavaScript-Objekte erben standardmäßig von `Object.prototype`, also scheint `extends Object` auf den ersten Blick redundant. Der einzige Unterschied zur Nichtverwendung von `extends` besteht darin, dass der Konstruktor selbst statische Methoden von `Object` erbt, wie {{jsxref("Object.keys()")}}. Da jedoch keine statische Methode von `Object` den `this` Wert verwendet, gibt es immer noch keinen Wert im Erben dieser statischen Methoden.

Der {{jsxref("Object/Object", "Object()")}} Konstruktor behandelt die Unterklassiervariante besonders. Wenn er implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufgerufen wird, initialisiert er immer ein neues Objekt mit `new.target.prototype` als Prototyp. Jeder Wert, der an `super()` übergeben wird, wird ignoriert.

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

Vergleichen Sie dieses Verhalten mit einem benutzerdefinierten Wrapper, der die Unterklassiervariante nicht besonders behandelt:

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

Sie könnten möchten, dass in Ihrer abgeleiteten Array-Klasse `MyArray` {{jsxref("Array")}} Objekte zurückgegeben werden. Das Species-Muster ermöglicht es Ihnen, Standardkonstruktoren zu überschreiben.

Wenn Sie beispielsweise Methoden wie {{jsxref("Array.prototype.map()")}} verwenden, die den Standardkonstruktor zurückgeben, möchten Sie, dass diese Methoden ein Eltern-`Array`-Objekt anstelle des `MyArray`-Objekts zurückgeben. Das {{jsxref("Symbol.species")}} Symbol ermöglicht Ihnen dies:

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

Dieses Verhalten wird von vielen eingebauten Kopiermethoden implementiert. Für Vorbehalte zu diesem Feature siehe die Diskussion [Unterklassen von eingebauten Objekten](#unterklassen_von_eingebauten_objekten).

### Mix-ins

Abstrakte Unterklassen oder _Mix-ins_ sind Vorlagen für Klassen. Eine Klasse kann nur eine einzige Superklasse haben, daher ist Mehrfachvererbung von Werkzeugklassen beispielsweise nicht möglich. Die Funktionalität muss von der Superklasse bereitgestellt werden.

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

Vererbung ist eine sehr starke Kopplungsbeziehung in der objektorientierten Programmierung. Es bedeutet, dass alle Verhaltensweisen der Basisklasse standardmäßig von der Unterklasse geerbt werden, was nicht immer das ist, was Sie wollen. Beispielsweise beachten Sie die Implementierung einer `ReadOnlyMap`:

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

Wir könnten dieses Problem umgehen, indem wir eine private Flagge verwenden, um anzuzeigen, ob die Instanz konstruiert wird. Ein bedeutenderes Problem bei diesem Design ist jedoch, dass es das [Liskov'sche Substitutionsprinzip](https://en.wikipedia.org/wiki/Liskov_substitution_principle) verletzt, welches besagt, dass eine Unterklasse für ihre Superklasse austauschbar sein sollte. Wenn eine Funktion ein `Map`-Objekt erwartet, sollte sie ebenfalls ein `ReadOnlyMap`-Objekt verwenden können, was hier nicht der Fall ist.

Vererbung führt oft zu [dem Kreis-Ellipsen-Problem](https://en.wikipedia.org/wiki/Circle%E2%80%93ellipse_problem), da kein Typ perfekt das Verhalten des anderen umfasst, obwohl sie viele gemeinsame Merkmale teilen. Im Allgemeinen, es sei denn, es gibt einen sehr guten Grund, Vererbung zu verwenden, ist es besser, Komposition zu verwenden. Komposition bedeutet, dass eine Klasse eine Referenz zu einem Objekt einer anderen Klasse hat und dieses Objekt nur als Implementierungsdetail verwendet.

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

In diesem Fall ist die `ReadOnlyMap` Klasse keine Unterklasse von `Map`, aber sie implementiert dennoch die meisten der gleichen Methoden. Dies bedeutet mehr Code-Duplikation, aber es bedeutet auch, dass die `ReadOnlyMap` Klasse nicht stark mit der `Map` Klasse verbunden ist und nicht so leicht bricht, wenn die `Map` Klasse geändert wird, wodurch die [semantischen Probleme der eingebauten Unterklassen](#unterklassen_von_eingebauten_objekten) vermieden werden. Beispielsweise, wenn die `Map` Klasse eine neue Hilfsmethode hinzufügt (wie [`getOrInsert()`](https://github.com/tc39/proposal-upsert)), die nicht `set()` aufruft, würde sie dazu führen, dass `ReadOnlyMap` Klasse nicht mehr schreibgeschützt ist, es sei denn, letztere wird dementsprechend aktualisiert, um `getOrInsert()` ebenfalls zu überschreiben. Darüber hinaus haben `ReadOnlyMap` Objekte die `set` Methode überhaupt nicht, was genauer ist als das Werfen eines Fehlers zur Laufzeit.

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
