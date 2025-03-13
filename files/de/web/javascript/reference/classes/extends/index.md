---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Classes")}}

Das **`extends`**-Schlüsselwort wird in [Klassendeklarationen](/de/docs/Web/JavaScript/Reference/Statements/class) oder [Klassen-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/class) verwendet, um eine Klasse zu erstellen, die eine Unterklasse einer anderen Klasse ist.

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

Das `extends`-Schlüsselwort kann verwendet werden, um benutzerdefinierte Klassen sowie eingebaute Objekte zu subklassifizieren.

Jeder Konstruktor, der mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden kann und die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft hat, kann als übergeordnete Klasse in Frage kommen. Beide Bedingungen müssen erfüllt sein - beispielsweise können [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) und {{jsxref("Proxy")}} konstruiert werden, aber sie haben keine `prototype`-Eigenschaft und können daher nicht subklassifiziert werden.

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

Die `prototype`-Eigenschaft der `ParentClass` muss ein {{jsxref("Object")}} oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, aber Sie werden sich in der Praxis selten darüber Gedanken machen müssen, da ein nicht-objektorientiertes `prototype` sowieso nicht wie erwartet funktioniert. (Es wird vom [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator ignoriert.)

```js
function ParentClass() {}
ParentClass.prototype = 3;

class ChildClass extends ParentClass {}
// Uncaught TypeError: Class extends value does not have valid prototype property 3

console.log(Object.getPrototypeOf(new ParentClass()));
// [Object: null prototype] {}
// Not actually a number!
```

`extends` setzt das Prototype sowohl für `ChildClass` als auch `ChildClass.prototype`.

|                                   | Prototype von `ChildClass` | Prototype von `ChildClass.prototype` |
| --------------------------------- | -------------------------- | ------------------------------------ |
| `extends`-Klausel abwesend        | `Function.prototype`       | `Object.prototype`                   |
| [`extends null`](#null_erweitern) | `Function.prototype`       | `null`                               |
| `extends ParentClass`             | `ParentClass`              | `ParentClass.prototype`              |

```js
class ParentClass {}
class ChildClass extends ParentClass {}

// Allows inheritance of static properties
Object.getPrototypeOf(ChildClass) === ParentClass;
// Allows inheritance of instance properties
Object.getPrototypeOf(ChildClass.prototype) === ParentClass.prototype;
```

Die rechte Seite von `extends` muss kein Bezeichner sein. Sie können jeden Ausdruck verwenden, der zu einem Konstruktor ausgewertet wird. Dies ist oft nützlich, um [Mixins](#mix-ins) zu erstellen. Der `this`-Wert im `extends`-Ausdruck ist das `this` der umgebenden Klassendefinition, und die Bezugnahme auf den Klassennamen führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck wie erwartet.

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

Während die Basisklasse alles aus ihrem Konstruktor zurückgeben kann, muss die abgeleitete Klasse ein Objekt oder `undefined` zurückgeben, ansonsten wird ein {{jsxref("TypeError")}} ausgelöst.

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

Wenn der Konstruktor der übergeordneten Klasse ein Objekt zurückgibt, wird dieses Objekt als `this`-Wert für die abgeleitete Klasse verwendet, wenn weitere [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) initialisiert werden. Dieser Trick wird als ["Return Overriding"](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) bezeichnet, der es ermöglicht, dass die Felder der abgeleiteten Klasse (einschließlich der [privaten](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)) auf nicht verwandte Objekte definiert werden.

### Subklassifizierung von eingebauten Objekten

> [!WARNING]
> Das Standardkomitee vertritt mittlerweile die Auffassung, dass der eingebaute Subklassifizierungsmechanismus in früheren Spezifikationsversionen überkonstruiert ist und nicht unerhebliche Leistungs- und Sicherheitsauswirkungen hat. Neue eingebaute Methoden berücksichtigen Subklassen weniger, und Engine-Implementierer untersuchen [ob bestimmte Subklassifizierungsmechanismen entfernt werden sollen](https://github.com/tc39/proposal-rm-builtin-subclassing). Erwägen Sie die Verwendung von Komposition anstelle von Vererbung, wenn Sie eingebaute Objekte erweitern.

Hier sind einige Dinge, die Sie erwarten können, wenn Sie eine Klasse erweitern:

- Beim Aufrufen einer statischen Fabrikmethode (wie {{jsxref("Promise.resolve()")}} oder {{jsxref("Array.from()")}}) auf einer Unterklasse ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Beim Aufrufen einer Instanzmethode, die eine neue Instanz zurückgibt (wie {{jsxref("Promise.prototype.then()")}} oder {{jsxref("Array.prototype.map()")}}) auf einer Unterklasse ist die zurückgegebene Instanz immer eine Instanz der Unterklasse.
- Instanzmethoden versuchen, auf ein minimales Set von Primärmethoden zu delegieren, wo möglich. Beispielsweise bei einer Unterklasse von {{jsxref("Promise")}}, führt das Überschreiben von {{jsxref("Promise/then", "then()")}} automatisch dazu, dass sich das Verhalten von {{jsxref("Promise/catch", "catch()")}} ändert; oder bei einer Unterklasse von {{jsxref("Map")}}, führt das Überschreiben von {{jsxref("Map/set", "set()")}} automatisch dazu, dass sich das Verhalten des {{jsxref("Map/Map", "Map()")}}-Konstruktors ändert.

Allerdings erfordern die oben genannten Erwartungen nicht unwesentliche Anstrengungen, um korrekt implementiert zu werden.

- Der erste Punkt erfordert, dass die statische Methode den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) liest, um den Konstruktor zum Konstruieren der zurückgegebenen Instanz zu erhalten. Das bedeutet, dass `[p1, p2, p3].map(Promise.resolve)` einen Fehler auslöst, da das `this` innerhalb von `Promise.resolve` `undefined` ist. Eine Möglichkeit, dies zu beheben, ist der Rückgriff auf die Basisklasse, wenn `this` kein Konstruktor ist, wie es bei {{jsxref("Array.from()")}} der Fall ist, aber das bedeutet trotzdem, dass die Basisklasse eine Sonderbehandlung erfährt.
- Der zweite Punkt erfordert, dass die Instanzmethode [`this.constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) liest, um die Konstruktorfunktion zu erhalten. Allerdings kann `new this.constructor()` alten Code brechen, weil die `constructor`-Eigenschaft sowohl schreibbar als auch konfigurierbar ist und in keiner Weise geschützt ist. Daher verwenden viele eingebaute Kopiermethoden die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)-Eigenschaft des Konstruktors stattdessen (die standardmäßig nur `this`, den Konstruktor selbst, zurückgibt). Allerdings erlaubt `[Symbol.species]` das Ausführen von beliebigem Code und das Erstellen von Instanzen beliebiger Typen, was ein Sicherheitsproblem darstellt und die Subklassifizierung-Semantik stark verkompliziert.
- Der dritte Punkt führt zu sichtbaren Aufrufen von benutzerdefiniertem Code, was es erschwert, viele Optimierungen zu implementieren. Beispielsweise, wenn der `Map()`-Konstruktor mit einem iterierbaren _x_ Elementen aufgerufen wird, muss er die `set()`-Methode _x_ Mal sichtbar aufrufen, anstatt die Elemente einfach in den internen Speicher zu kopieren.

Diese Probleme sind nicht einzigartig für eingebaute Klassen. Bei Ihren eigenen Klassen müssen Sie wahrscheinlich die gleichen Entscheidungen treffen. Allerdings sind bei eingebauten Klassen Optimierbarkeit und Sicherheit ein viel größeres Anliegen. Neue eingebaute Methoden konstruieren immer die Basisklasse und rufen so wenige benutzerdefinierte Methoden wie möglich auf. Wenn Sie eingebaute Klassen unter gleichzeitiger Erreichung der oben genannten Erwartungen subklassifizieren möchten, müssen Sie alle Methoden überschreiben, die das Standardverhalten in sich aufgenommen haben. Jede Hinzufügung neuer Methoden zur Basisklasse kann auch die Semantik Ihrer Unterklasse brechen, da diese standardmäßig vererbt werden. Daher ist eine bessere Möglichkeit, eingebaute Klassen zu erweitern, die Verwendung von [_Komposition_](#vermeidung_von_vererbung).

### Null erweitern

`extends null` wurde entwickelt, um die einfache Erstellung von [Objekten zu ermöglichen, die nicht von `Object.prototype` erben](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Aufgrund nicht geklärter Entscheidungen darüber, ob `super()` im Konstruktor aufgerufen werden sollte, ist es in der Praxis nicht möglich, solch eine Klasse mit einer Konstruktorimplementierung zu erstellen, die kein Objekt zurückgibt. [Das TC39-Komitee arbeitet daran, diese Funktion wieder zu aktivieren](https://github.com/tc39/ecma262/pull/1321).

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

Das erste Beispiel erstellt eine Klasse namens `Square` aus einer Klasse namens `Polygon`. Dieses Beispiel stammt aus diesem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

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

Klassen können nicht von regulären (nicht-konstruktiblen) Objekten erben. Wenn Sie von einem regulären Objekt erben möchten, indem Sie alle Eigenschaften dieses Objekts auf geerbten Instanzen verfügbar machen, können Sie stattdessen {{jsxref("Object.setPrototypeOf()")}} verwenden:

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

Dieses Beispiel erweitert das eingebaute Modell {{jsxref("Date")}}. Dieses Beispiel stammt aus diesem [Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(Quellcode)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

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

Alle JavaScript-Objekte erben standardmäßig von `Object.prototype`, daher scheint das Schreiben von `extends Object` auf den ersten Blick überflüssig. Der einzige Unterschied, wenn `extends` überhaupt nicht geschrieben wird, besteht darin, dass der Konstruktor selbst statische Methoden von `Object` erbt, wie {{jsxref("Object.keys()")}}. Da jedoch keine statische Methode von `Object` den `this`-Wert verwendet, gibt es immer noch keinen Nutzen, diese statischen Methoden zu erben.

Der {{jsxref("Object/Object", "Object()")}}-Konstruktor berücksichtigt das Subklassifizierungsszenario speziell. Wenn er implizit über [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) aufgerufen wird, wird immer ein neues Objekt mit `new.target.prototype` als seinem Prototyp initialisiert. Jeder Wert, der an `super()` übergeben wird, wird ignoriert.

```js
class C extends Object {
  constructor(v) {
    super(v);
  }
}

console.log(new C(1) instanceof Number); // false
console.log(C.keys({ a: 1, b: 2 })); // [ 'a', 'b' ]
```

Vergleichen Sie dieses Verhalten mit einem benutzerdefinierten Wrapper, der das Subklassifizierungsszenario nicht speziell behandelt:

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

Möglicherweise möchten Sie, dass Ihre abgeleitete Array-Klasse `MyArray` {{jsxref("Array")}}-Objekte zurückgibt. Das Species-Muster ermöglicht es, Standardkonstruktoren zu überschreiben.

Zum Beispiel, wenn Methoden wie {{jsxref("Array.prototype.map()")}} verwendet werden, die den Standardkonstruktor zurückgeben, möchten Sie, dass diese Methoden ein übergeordnetes `Array`-Objekt anstelle des `MyArray`-Objekts zurückgeben. Das Symbol {{jsxref("Symbol.species")}} ermöglicht Ihnen dies:

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

Dieses Verhalten wird von vielen eingebauten Kopiermethoden implementiert. Zu den Einschränkungen dieser Funktion siehe die Diskussion zur [Subklassifizierung eingebauter Objekte](#subklassifizierung_von_eingebauten_objekten).

### Mix-ins

Abstrakte Unterklassen oder _Mix-ins_ sind Vorlagen für Klassen. Eine Klasse kann nur eine einzige Superklasse haben, sodass Mehrfachvererbung von Werkzeugklassen, zum Beispiel, nicht möglich ist. Die Funktionalität muss von der Superklasse bereitgestellt werden.

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

Eine Klasse, die diese Mix-ins verwendet, könnte dann wie folgt geschrieben werden:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

### Vermeidung von Vererbung

Vererbung ist eine sehr starke Kopplungsbeziehung in der objektorientierten Programmierung. Sie bedeutet, dass alle Verhaltensweisen der Basisklasse standardmäßig von der Unterklasse geerbt werden, was nicht immer erwünscht ist. Zum Beispiel, ziehen Sie die Implementierung einer `ReadOnlyMap` in Betracht:

```js
class ReadOnlyMap extends Map {
  set() {
    throw new TypeError("A read-only map must be set at construction time.");
  }
}
```

Es stellt sich heraus, dass `ReadOnlyMap` nicht konstruierbar ist, weil der [`Map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)-Konstruktor die Instanz-`set()`-Methode aufruft.

```js
const m = new ReadOnlyMap([["a", 1]]); // TypeError: A read-only map must be set at construction time.
```

Wir könnten dies umgehen, indem wir ein privates Flag verwenden, um anzugeben, ob die Instanz konstruiert wird. Ein signifikanteres Problem bei diesem Design ist jedoch, dass es das [Liskov-Substitutionsprinzip](https://de.wikipedia.org/wiki/Liskov-Substitutionsprinzip) verletzt, das besagt, dass eine Unterklasse für ihre Superklasse ersetzbar sein sollte. Wenn eine Funktion ein `Map`-Objekt erwartet, sollte sie auch ein `ReadOnlyMap`-Objekt verwenden können, was hier brechen wird.

Vererbung führt oft zu [dem Kreis-Ellipse-Problem](https://de.wikipedia.org/wiki/Kreis-Ellipse-Problem), weil weder Typ perfekt das Verhalten des anderen umfasst, obwohl sie viele gemeinsame Eigenschaften haben. Im Allgemeinen, sofern es keinen sehr guten Grund gibt, Vererbung zu verwenden, ist es besser, stattdessen Komposition zu verwenden. Komposition bedeutet, dass eine Klasse eine Referenz zu einem Objekt einer anderen Klasse hat und dieses Objekt nur als Implementierungsdetail verwendet.

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

In diesem Fall ist die `ReadOnlyMap`-Klasse keine Unterklasse von `Map`, aber sie implementiert dennoch die meisten der gleichen Methoden. Das bedeutet mehr Code-Duplizierung, aber es bedeutet auch, dass die `ReadOnlyMap`-Klasse nicht stark mit der `Map`-Klasse gekoppelt ist und nicht leicht bricht, wenn die `Map`-Klasse geändert wird, wodurch die [semantischen Fragen der eingebauten Subklassifizierung](#subklassifizierung_von_eingebauten_objekten) vermieden werden. Wenn die `Map`-Klasse zum Beispiel eine `emplace()`-Methode hinzufügt, die `set()` nicht aufruft, würde dies dazu führen, dass die `ReadOnlyMap`-Klasse nicht mehr schreibgeschützt ist, es sei denn, letztere wird entsprechend aktualisiert, um auch `emplace()` zu überschreiben. Darüber hinaus haben `ReadOnlyMap`-Objekte die `set`-Methode überhaupt nicht, was genauer ist, als zur Laufzeit einen Fehler auszulösen.

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
