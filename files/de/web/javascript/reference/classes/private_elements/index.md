---
title: Private Elemente
slug: Web/JavaScript/Reference/Classes/Private_elements
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**Private Elemente** sind Gegenstücke zu regulären Klassen-Elementen, die öffentlich sind, einschließlich [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields), Klassenmethoden usw. Private Elemente werden durch einen Hash-Präfix `#` erstellt und können außerhalb der Klasse nicht legal referenziert werden. Die Datenschutzeinkapselung dieser Klassenelemente wird von JavaScript selbst durchgesetzt. Der einzige Weg, um auf ein privates Element zuzugreifen, ist über die [Punkt-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation), und dies ist nur innerhalb der Klasse möglich, die das private Element definiert.

Private Elemente waren vor dem Vorhandensein dieser Syntax nicht nativ in der Sprache. In der prototypischen Vererbung kann ihr Verhalten mit [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members)-Objekten oder [Closures](/de/docs/Web/JavaScript/Guide/Closures#emulating_private_methods_with_closures) nachgeahmt werden, aber sie können im Hinblick auf Ergonomie nicht mit der `#`-Syntax verglichen werden.

> [!NOTE]
> Auf MDN vermeiden wir den Begriff "private Eigenschaft". Eine {{Glossary("Property/JavaScript", "Eigenschaft")}} in JavaScript hat einen Zeichenfolgen- oder Symbol-Schlüssel und Attribute wie `writable`, `enumerable` und `configurable`, aber private Elemente haben keine dieser Attribute. Obwohl private Elemente mit der vertrauten Punkt-Notation zugegriffen werden, können sie nicht [proxy-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) gemacht, aufgezählt, gelöscht oder mit einer {{jsxref("Object")}} Methode interagiert werden.

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

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Alle innerhalb einer Klasse deklarierten privaten Bezeichner müssen einzigartig sein. Der Namensraum wird zwischen statischen und Instanz-Elementen geteilt. Die einzige Ausnahme ist, wenn die beiden Deklarationen ein Getter-Setter-Paar definieren.
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

Diese Funktionen werden zusammenfassend als _private Elemente_ bezeichnet. Allerdings können [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor) in JavaScript nicht privat sein. Um zu verhindern, dass Klassen außerhalb der Klasse instanziiert werden, müssen Sie [eine private Flagge verwenden](#simulieren_privater_konstruktoren).

Private Elemente werden mit **# Namen** (ausgesprochen „Hash-Namen“) deklariert, d.h. Bezeichner, die mit `#` beginnen. Das Hash-Präfix ist ein wesentlicher Bestandteil des Eigenschaftennamens — man kann es mit der alten Unterstrich-Präfix-Konvention `_privateField` in Verbindung bringen — aber es ist keine gewöhnliche Zeichenfolgen-Eigenschaft, daher kann man nicht dynamisch mit der [Klammer-Notation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) darauf zugreifen.

Es ist ein Syntaxfehler, auf `#`-Namen außerhalb der Klasse zu verweisen. Es ist auch ein Syntaxfehler, auf private Elemente zu verweisen, die nicht im Klassenrumpf deklariert wurden, oder zu versuchen, deklarierte Elemente mit [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) zu entfernen.

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

JavaScript, als dynamische Sprache, ist in der Lage, diese Überprüfung zur Kompilierzeit durchzuführen, dank der speziellen Hash-Bezeichner-Syntax, die sie auf der Syntaxebene von normalen Eigenschaften unterscheidet.

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann auf private Elemente außerhalb der Klasse zugreifen. Dies ist eine nur in DevTools geltende Entspannung der JavaScript-Syntaxbeschränkung.

Wenn Sie auf ein privates Element von einem Objekt zugreifen, das das Element nicht hat, wird ein {{jsxref("TypeError")}} ausgelöst, anstatt wie bei normalen Eigenschaften `undefined` zurückzugeben.

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

Dieses Beispiel zeigt auch, dass Sie auf private Elemente innerhalb von statischen Funktionen und auch auf extern definierte Instanzen der Klasse zugreifen können.

Sie können den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwenden, um zu überprüfen, ob ein extern definiertes Objekt ein privates Element besitzt. Dies gibt `true` zurück, wenn das private Feld oder die private Methode existiert, und `false` andernfalls.

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

Beachten Sie einen Korollar aus privaten Namen, die immer vor-deklariert und nicht löschbar sind: Wenn Sie festgestellt haben, dass ein Objekt ein privates Element der aktuellen Klasse besitzt (entweder aus einem `try...catch` oder einer `in`-Prüfung), muss es alle anderen privaten Elemente besitzen. Dass ein Objekt die privaten Elemente einer Klasse besitzt, bedeutet in der Regel, dass es von dieser Klasse konstruiert wurde (obwohl [nicht immer](#zurückgeben_eines_überschreibenden_objekts)).

Private Elemente sind kein Teil des [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)-Modells, da sie nur innerhalb des Körper der aktuellen Klasse zugänglich sind und nicht von Unterklassen geerbt werden. Private Elemente mit demselben Namen in verschiedenen Klassen sind völlig unterschiedlich und arbeiten nicht miteinander. Betrachten Sie sie als externe Metadaten, die an jede Instanz angehängt und von der Klasse verwaltet werden. Aus diesem Grund klont [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) keine privaten Elemente und {{jsxref("Object.freeze()")}} sowie {{jsxref("Object.seal()")}} haben keine Auswirkungen auf private Elemente.

Für weitere Informationen darüber, wie und wann private Felder initialisiert werden, siehe [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

## Beispiele

### Private Felder

Private Felder umfassen private Instanzfelder und private statische Felder. Private Felder sind nur innerhalb der Klassendeklaration zugänglich.

#### Private Instanzfelder

Wie ihre öffentlichen Gegenstücke, private Instanzfelder:

- werden hinzugefügt, bevor der Konstruktor in einer Basisklasse ausgeführt wird oder unmittelbar nachdem [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) in einer Unterklasse aufgerufen wurde, und
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
> `#privateField` aus der `ClassWithPrivateField` Basisklasse ist privat für `ClassWithPrivateField` und von der abgeleiteten `Subclass` nicht zugänglich.

#### Zurückgeben eines überschreibenden Objekts

Ein Konstruktor einer Klasse kann ein anderes Objekt zurückgeben, das als neues `this` für den Konstruktor der abgeleiteten Klasse verwendet wird. Die abgeleitete Klasse kann dann private Felder auf diesem zurückgegebenen Objekt definieren — was bedeutet, dass es möglich ist, private Felder auf nicht verwandte Objekte zu "stempeln".

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
> Dies ist potenziell sehr verwirrend. Es wird im Allgemeinen empfohlen, nichts vom Konstruktor zurückzugeben — insbesondere nichts, das nicht mit `this` zu tun hat.

#### Private statische Felder

Wie ihre öffentlichen Gegenstücke, private statische Felder:

- werden zur Klassenkonstruktorzeit zur Klasse hinzugefügt, und
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

Es gibt eine Einschränkung für private statische Felder: Nur die Klasse, die das private statische Feld definiert, kann auf das Feld zugreifen. Dies kann zu unerwartetem Verhalten führen, wenn [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwendet wird. Im folgenden Beispiel bezieht sich `this` auf die `Subclass` Klasse (nicht auf die `ClassWithPrivateStaticField` Klasse), wenn wir versuchen, `Subclass.publicStaticMethod()` aufzurufen, und verursacht daher einen `TypeError`.

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

Dies ist das gleiche, wenn Sie die Methode mit `super` aufrufen, da [`super`-Methoden nicht mit der Superklasse als `this` aufgerufen werden](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

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

Es wird empfohlen, auf private statische Felder immer über den Klassennamen zuzugreifen und nicht über `this`, damit die Vererbung die Methode nicht unterbricht.

### Private Methoden

Private Methoden umfassen private Instanzmethoden und private statische Methoden. Private Methoden sind nur innerhalb der Klassendeklaration zugänglich.

#### Private Instanzmethoden

Im Gegensatz zu ihren öffentlichen Gegenstücken, private Instanzmethoden:

- werden unmittelbar bevor die Instanzfelder installiert, installiert, und
- sind nur auf Instanzen der Klasse und nicht auf ihrer `.prototype`-Eigenschaft verfügbar.

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

Private Instanzmethoden können Generator-, asynchrone oder asynchrone Generatorfunktionen sein. Private Getter und Setter sind ebenfalls möglich und folgen den gleichen Syntaxanforderungen wie ihre öffentlichen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) Gegenstücke.

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

Wie ihre öffentlichen Gegenstücke, private statische Methoden:

- werden zur Klassenkonstruktorzeit zur Klasse hinzugefügt, und
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

Private statische Methoden können Generator-, asynchrone oder asynchrone Generatorfunktionen sein.

Die zuvor erwähnte Einschränkung für private statische Felder gilt auch für private statische Methoden und kann ebenfalls zu unerwartetem Verhalten führen, wenn `this` verwendet wird. Im folgenden Beispiel bezieht sich `this` auf die `Subclass` Klasse (nicht auf die `ClassWithPrivateStaticMethod` Klasse), wenn wir versuchen, `Subclass.publicStaticMethod()` aufzurufen, und verursacht daher einen `TypeError`.

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

### Simulieren privater Konstruktoren

Viele andere Sprachen bieten die Möglichkeit, einen Konstruktor als privat zu kennzeichnen, was verhindert, dass die Klasse außerhalb der Klasse selbst instanziiert wird — Sie können nur statische Fabrikmethoden verwenden, die Instanzen erstellen, oder gar keine Instanzen erstellen. JavaScript hat keine native Möglichkeit, dies zu tun, aber es kann durch die Verwendung einer privaten statischen Flag implementiert werden.

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

- [Verwenden von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Statements/class", "class")}}
- [Private Syntax FAQ](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md) im TC39-Klassenfelder-Vorschlag
- [Die Semantik aller JS-Klassenelemente](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Öffentliche und private Klassenfelder](https://v8.dev/features/class-fields) auf v8.dev (2018)
