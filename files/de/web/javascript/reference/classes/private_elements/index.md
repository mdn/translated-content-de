---
title: Private Elemente
slug: Web/JavaScript/Reference/Classes/Private_elements
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Classes")}}

**Private Elemente** sind Gegenstücke der regulären Klassen-Elemente, die öffentlich sind, einschließlich [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields), Klassenmethoden usw. Private Elemente werden erstellt, indem ein Hash-`#`-Präfix verwendet wird und sie können außerhalb der Klasse nicht legal referenziert werden. Die Kapselung der Privatsphäre dieser Klassenelemente wird von JavaScript selbst erzwungen. Der einzige Weg, auf ein privates Element zuzugreifen, ist über die [Punkt-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation), und dies ist nur innerhalb der Klasse, die das private Element definiert, möglich.

Private Elemente waren vor der Existenz dieser Syntax nicht in der Sprache eingebaut. Im prototypischen Vererbungsmuster kann ihr Verhalten mit [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members)-Objekten oder [Closures](/de/docs/Web/JavaScript/Guide/Closures#emulating_private_methods_with_closures) emuliert werden, aber sie können in Bezug auf Ergonomie nicht mit der `#`-Syntax verglichen werden.

> [!NOTE]
> Auf MDN vermeiden wir den Begriff "private Eigenschaft". Eine {{Glossary("Property/JavaScript", "property")}} (Eigenschaft) in JavaScript hat einen Zeichenfolgen- oder Symbolschlüssel und Attribute wie `writable`, `enumerable` und `configurable`, aber private Elemente haben keine davon. Während private Elemente mit der vertrauten Punkt-Notation zugegriffen werden, können sie nicht [proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy), aufgezählt, gelöscht oder mit einer beliebigen {{jsxref("Object")}}-Methode interagiert werden.

## Syntax

```js-nolint
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 42;

  #privateMethod() {
    // …
  }

  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}
```

Es gibt einige zusätzliche Syntax-Einschränkungen:

- Alle privaten Bezeichner, die innerhalb einer Klasse deklariert werden, müssen eindeutig sein. Der Namensraum wird zwischen statischen und Instanz-Elementen geteilt. Die einzige Ausnahme ist, wenn die beiden Deklarationen ein Getter-Setter-Paar definieren.
- Der private Bezeichner kann nicht `#constructor` sein.

## Beschreibung

Die meisten Klassenelemente haben ihre privaten Gegenstücke:

- Private Felder
- Private Methoden
- Private statische Felder
- Private statische Methoden
- Private Getter
- Private Setter
- Private statische Getter
- Private statische Setter

Diese Funktionen werden kollektiv als _private Elemente_ bezeichnet. Allerdings können [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor) in JavaScript nicht privat sein. Um zu verhindern, dass Klassen außerhalb der Klasse konstruiert werden, müssen Sie [ein privates Flag verwenden](#simulieren_von_privaten_konstruktoren).

Private Elemente werden mit **# Namen** (ausgesprochen "Hash-Namen") deklariert, bei denen es sich um Bezeichner handelt, die mit `#` versehen sind. Das Hash-Präfix ist ein wesentlicher Bestandteil des Eigenschaftsnamen — Sie können es mit der alten Unterstrich-Präfix-Konvention `_privateField` in Beziehung setzen — aber es ist keine gewöhnliche Zeichenfolgen-Eigenschaft, so dass Sie nicht dynamisch mit der [Klammer-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) darauf zugreifen können.

Es ist ein Syntaxfehler, von außerhalb der Klasse auf `#`-Namen zu verweisen. Es ist auch ein Syntaxfehler, auf private Elemente zu verweisen, die nicht im Klassenkörper deklariert wurden, oder zu versuchen, deklarierte Elemente mit [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) zu entfernen.

```js-nolint example-bad
class ClassWithPrivateField {
  #privateField;

  constructor() {
    delete this.#privateField; // Syntax error
    this.#undeclaredField = 42; // Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField; // Syntax error
```

JavaScript als dynamische Sprache kann diese Prüfung zur Kompilierungszeit aufgrund der speziellen Hash-Bezeichner-Syntax durchführen, wodurch sie sich auf der Syntaxebene von normalen Eigenschaften unterscheidet.

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann private Elemente außerhalb der Klasse zugreifen. Dies ist eine nur für DevTools geltende Lockerung der JavaScript-Syntaxeinschränkung.

Wenn Sie auf ein privates Element von einem Objekt zugreifen, das das Element nicht enthält, wird ein {{jsxref("TypeError")}} ausgelöst, anstatt `undefined` wie bei normalen Eigenschaften zurückzugeben.

```js example-bad
class C {
  #x;

  static getX(obj) {
    return obj.#x;
  }
}

console.log(C.getX(new C())); // undefined
console.log(C.getX({})); // TypeError: Cannot read private member #x from an object whose class did not declare it
```

Dieses Beispiel zeigt auch, dass Sie auf private Elemente innerhalb statischer Funktionen zugreifen können und auf extern definierte Instanzen der Klasse.

Sie können den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwenden, um zu überprüfen, ob ein extern definiertes Objekt ein privates Element besitzt. Dies gibt `true` zurück, wenn das private Feld oder die Methode existiert, und `false` andernfalls.

```js example-good
class C {
  #x;
  constructor(x) {
    this.#x = x;
  }
  static getX(obj) {
    if (#x in obj) return obj.#x;

    return "obj must be an instance of C";
  }
}
console.log(C.getX(new C("foo"))); // "foo"
console.log(C.getX(new C(0.196))); // 0.196
console.log(C.getX(new C(new Date()))); // the current date and time
console.log(C.getX({})); // "obj must be an instance of C"
```

Beachten Sie eine Konsequenz davon, dass private Namen immer vordeklariert und nicht löschbar sind: Wenn Sie feststellen, dass ein Objekt ein privates Element der aktuellen Klasse besitzt (entweder aus einem `try...catch` oder einem `in`-Check), muss es alle anderen privaten Elemente besitzen. Dass ein Objekt die privaten Elemente einer Klasse besitzt, bedeutet im Allgemeinen, dass es von dieser Klasse konstruiert wurde (obwohl [nicht immer](#zurückgeben_eines_überschreibenden_objekts)).

Private Elemente sind nicht Teil des [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)-Modells, da sie nur innerhalb des Körpers der aktuellen Klasse zugänglich sind und nicht von Unterklassen geerbt werden. Private Elemente mit demselben Namen in verschiedenen Klassen sind völlig unterschiedlich und agieren nicht miteinander. Sehen Sie sie als externe Metadaten, die an jede Instanz angehängt sind und von der Klasse verwaltet werden. Aus diesem Grund klont [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) private Elemente nicht, und {{jsxref("Object.freeze()")}} und {{jsxref("Object.seal()")}} haben keine Auswirkung auf private Elemente.

Weitere Informationen darüber, wie und wann private Felder initialisiert werden, finden Sie unter [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

## Beispiele

### Private Felder

Private Felder umfassen private Instanzfelder und private statische Felder. Private Felder sind nur von innerhalb der Klassendeklaration aus zugänglich.

#### Private Instanzfelder

Wie ihre öffentlichen Gegenstücke:

- werden private Instanzfelder hinzugefügt, bevor der Konstruktor in einer Basisklasse ausgeführt wird, oder unmittelbar nachdem [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) in einer Unterklasse aufgerufen wurde, und
- sind nur auf Instanzen der Klasse verfügbar.

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}

class Subclass extends ClassWithPrivateField {
  #subPrivateField;

  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new Subclass(); // In some dev tools, it shows Subclass {#privateField: 42, #subPrivateField: 23}
```

> [!NOTE]
> `#privateField` aus der `ClassWithPrivateField` Basisklasse ist privat für `ClassWithPrivateField` und nicht von der abgeleiteten `Subclass` aus zugänglich.

#### Zurückgeben eines überschreibenden Objekts

Ein Konstruktor einer Klasse kann ein anderes Objekt zurückgeben, das als neues `this` für den Konstruktor der abgeleiteten Klasse verwendet wird. Die abgeleitete Klasse kann dann private Felder auf diesem zurückgegebenen Objekt definieren — was bedeutet, dass es möglich ist, private Felder auf nicht verwandten Objekten zu "stempeln".

```js
class Stamper extends class {
  // A base class whose constructor returns the object it's given
  constructor(obj) {
    return obj;
  }
} {
  // This declaration will "stamp" the private field onto the object
  // returned by the base class constructor
  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}

const obj = {};
new Stamper(obj);
// `Stamper` calls `Base`, which returns `obj`, so `obj` is
// now the `this` value. `Stamper` then defines `#stamp` on `obj`

console.log(obj); // In some dev tools, it shows {#stamp: 42}
console.log(Stamper.getStamp(obj)); // 42
console.log(obj instanceof Stamper); // false

// You cannot stamp private elements twice
new Stamper(obj); // Error: Initializing an object twice is an error with private fields
```

> [!WARNING]
> Dies ist potenziell sehr verwirrend. Es wird allgemein geraten, nichts vom Konstruktor zurückzugeben — insbesondere nicht etwas, das nicht mit `this` in Zusammenhang steht.

#### Private statische Felder

Wie ihre öffentlichen Gegenstücke:

- werden private statische Felder beim Bewerten der Klasse dem Klassenkonstruktor hinzugefügt, und
- sind nur auf der Klasse selbst verfügbar.

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return ClassWithPrivateStaticField.#privateStaticField;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42
```

Es gibt eine Einschränkung für private statische Felder: Nur die Klasse, die das private statische Feld definiert, kann darauf zugreifen. Dies kann zu unerwartetem Verhalten führen, wenn Sie [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwenden. Im folgenden Beispiel bezieht sich `this` auf die `Subclass`-Klasse (nicht die `ClassWithPrivateStaticField`-Klasse), wenn wir versuchen, `Subclass.publicStaticMethod()` aufzurufen, und verursacht daher einen `TypeError`.

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {}

Subclass.publicStaticMethod(); // TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it
```

Das Gleiche passiert, wenn Sie die Methode mit `super` aufrufen, weil [`super`-Methoden nicht mit der Superklasse als `this` aufgerufen werden](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    // When invoked through super, `this` still refers to Subclass
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {
  static callSuperMethod() {
    return super.publicStaticMethod();
  }
}

Subclass.callSuperMethod(); // TypeError: Cannot read private member #privateStaticField from an object whose class did not declare it
```

Es wird geraten, immer über den Klassennamen auf private statische Felder zuzugreifen und nicht über `this`, sodass die Vererbung die Methode nicht unterbricht.

### Private Methoden

Private Methoden umfassen private Instanzmethoden und private statische Methoden. Private Methoden sind nur von innerhalb der Klassendeklaration aus zugänglich.

#### Private Instanzmethoden

Im Gegensatz zu ihren öffentlichen Gegenstücken:

- werden private Instanzmethoden unmittelbar vor den Instanzfeldern installiert, und
- sind nur auf Instanzen der Klasse verfügbar, nicht auf ihrer `.prototype`-Eigenschaft.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 42;
  }

  publicMethod() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.publicMethod()); // 42
```

Private Instanzmethoden können Generator-, Async- oder Async-Generator-Funktionen sein. Private Getter und Setter sind ebenfalls möglich und folgen denselben syntaktischen Anforderungen wie ihre öffentlichen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) Gegenstücke.

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `🎬${this.#message}🛑`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor(); // 🎬hello world🛑
```

Im Gegensatz zu öffentlichen Methoden sind private Methoden nicht auf der `.prototype`-Eigenschaft ihrer Klasse zugänglich.

```js
class C {
  #method() {}

  static getMethod(x) {
    return x.#method;
  }
}

console.log(C.getMethod(new C())); // [Function: #method]
console.log(C.getMethod(C.prototype)); // TypeError: Receiver must be an instance of class C
```

#### Private statische Methoden

Wie ihre öffentlichen Gegenstücke:

- werden private statische Methoden beim Bewerten der Klasse dem Klassenkonstruktor hinzugefügt, und
- sind nur auf der Klasse selbst verfügbar.

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }
}

console.log(ClassWithPrivateStaticMethod.publicStaticMethod()); // 42
```

Private statische Methoden können Generator-, Async- und Async-Generator-Funktionen sein.

Die gleiche Einschränkung, die zuvor für private statische Felder erwähnt wurde, gilt auch für private statische Methoden und kann ähnlich zu unerwartetem Verhalten führen, wenn `this` verwendet wird. Im folgenden Beispiel, wenn wir versuchen, `Subclass.publicStaticMethod()` aufzurufen, bezieht sich `this` auf die `Subclass`-Klasse (nicht die `ClassWithPrivateStaticMethod`-Klasse) und verursacht daher einen `TypeError`.

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return this.#privateStaticMethod();
  }
}

class Subclass extends ClassWithPrivateStaticMethod {}

console.log(Subclass.publicStaticMethod()); // TypeError: Cannot read private member #privateStaticMethod from an object whose class did not declare it
```

### Simulieren von privaten Konstruktoren

Viele andere Sprachen beinhalten die Möglichkeit, einen Konstruktor als privat zu markieren, was verhindert, dass die Klasse außerhalb der Klasse selbst instanziiert wird — Sie können nur statische Fabrikmethoden verwenden, die Instanzen erstellen, oder es können überhaupt keine Instanzen erstellt werden. JavaScript bietet keine native Möglichkeit, dies zu tun, aber es kann durch die Verwendung eines privaten statischen Flags erreicht werden.

```js
class PrivateConstructor {
  static #isInternalConstructing = false;

  constructor() {
    if (!PrivateConstructor.#isInternalConstructing) {
      throw new TypeError("PrivateConstructor is not constructable");
    }
    PrivateConstructor.#isInternalConstructing = false;
    // More initialization logic
  }

  static create() {
    PrivateConstructor.#isInternalConstructing = true;
    const instance = new PrivateConstructor();
    return instance;
  }
}

new PrivateConstructor(); // TypeError: PrivateConstructor is not constructable
PrivateConstructor.create(); // PrivateConstructor {}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)-Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Statements/class", "class")}}
- [Private Syntax FAQ](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md) im TC39-Klassenfelder-Proposal
- [Die Semantik aller JS-Klassenelemente](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Öffentliche und private Klassenfelder](https://v8.dev/features/class-fields) auf v8.dev (2018)
