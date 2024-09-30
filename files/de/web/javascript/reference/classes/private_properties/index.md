---
title: Private properties
slug: Web/JavaScript/Reference/Classes/Private_properties
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{jsSidebar("Classes")}}

**Private Eigenschaften** sind Gegenstücke zu den regulären Klassen-Eigenschaften, die öffentlich sind, einschließlich [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields), Klassenmethoden usw. Private Eigenschaften werden durch das Präfix `#` erstellt und können außerhalb der Klasse legal nicht referenziert werden. Die Geheimhaltung dieser Klasse-Eigenschaften wird durch JavaScript selbst durchgesetzt. Der einzige Weg, auf eine private Eigenschaft zuzugreifen, ist die [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation), und Sie können dies nur innerhalb der Klasse tun, die die private Eigenschaft definiert.

Private Eigenschaften waren der Sprache vor dieser Syntax nicht eigen. In der prototypischen Vererbung kann ihr Verhalten mit [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members)-Objekten oder [Closures](/de/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) emuliert werden, aber sie können im Vergleich zur `#`-Syntax in Bezug auf Ergonomie nicht mithalten.

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

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Alle innerhalb einer Klasse deklarierten privaten Bezeichner müssen eindeutig sein. Der Namensraum wird zwischen statischen und Instanzeigenschaften geteilt. Die einzige Ausnahme ist, wenn die beiden Deklarationen ein Getter-Setter-Paar definieren.
- Der private Bezeichner kann nicht `#constructor` sein.

## Beschreibung

Die meisten Klasseneigenschaften haben ihre privaten Gegenstücke:

- Private Felder
- Private Methoden
- Private statische Felder
- Private statische Methoden
- Private Getter
- Private Setter
- Private statische Getter
- Private statische Setter

Diese Eigenschaften werden zusammenfassend als _private Eigenschaften_ bezeichnet. Konstruktoren können in JavaScript jedoch nicht privat sein. Um zu verhindern, dass Klassen außerhalb der Klasse konstruiert werden, müssen Sie [einen privaten Schalter verwenden](#simulieren_privater_konstruktoren).

Private Eigenschaften werden mit **# Namen** (ausgesprochen „Hash-Namen“) deklariert, das sind Bezeichner mit dem Präfix `#`. Das Hash-Präfix ist ein wesentlicher Bestandteil des Eigenschaftennamens – man kann eine Beziehung zur alten Unterstrich-Präfixkonvention `_privateField` ziehen – aber es ist keine gewöhnliche Zeichenketteneigenschaft, sodass man nicht dynamisch darauf mit der [Klammernnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zugreifen kann.

Es ist ein Syntaxfehler, auf `#`-Namen von außerhalb der Klasse zu verweisen. Es ist auch ein Syntaxfehler, auf private Eigenschaften zu verweisen, die nicht im Klassenkörper deklariert wurden, oder zu versuchen, deklarierte Eigenschaften mit [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) zu entfernen.

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

JavaScript, als dynamische Sprache, kann diese Überprüfung zur Kompilierungszeit aufgrund der besonderen Hash-Bezeichner-Syntax durchführen, wodurch es sich auf Syntaxebene von normalen Eigenschaften unterscheidet.

> [!NOTE]
> In der Chrome-Konsole ausgeführter Code kann private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine nur für DevTools geltende Lockerung der JavaScript-Syntaxeinschränkungen.

Wenn Sie von einem Objekt, das die Eigenschaft nicht hat, auf eine private Eigenschaft zugreifen, wird ein {{jsxref("TypeError")}} ausgelöst, anstatt `undefined` wie bei normalen Eigenschaften zurückzugeben.

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

Dieses Beispiel veranschaulicht auch, dass Sie auf private Eigenschaften auch innerhalb statischer Funktionen und auf extern definierte Instanzen der Klasse zugreifen können.

Sie können den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwenden, um zu überprüfen, ob ein extern definiertes Objekt eine private Eigenschaft besitzt. Dies gibt `true` zurück, wenn das private Feld oder die Methode existiert, und `false`, andernfalls.

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

Beachten Sie eine Folge der Tatsache, dass private Namen immer deklariert und nicht löschbar sind: Wenn Sie feststellen, dass ein Objekt eine private Eigenschaft der aktuellen Klasse besitzt (entweder durch einen `try...catch` oder eine `in`-Überprüfung), muss es alle anderen privaten Eigenschaften besitzen. Dass ein Objekt die privaten Eigenschaften einer Klasse besitzt, bedeutet im Allgemeinen, dass es von dieser Klasse konstruiert wurde (obwohl [nicht immer](#rückgabe_eines_überschreibenden_objekts)).

Private Eigenschaften sind nicht Teil des [prototypischen Vererbung](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) Modells, da sie nur innerhalb des aktuellen Klassenkörpers zugänglich sind und von Unterklassen nicht geerbt werden. Private Eigenschaften mit demselben Namen innerhalb verschiedener Klassen sind völlig unterschiedlich und interagieren nicht miteinander. Betrachten Sie sie als externe Metadaten, die von der Klasse an jede Instanz angehängt werden. Aus diesem Grund kopiert [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) keine privaten Eigenschaften, und {{jsxref("Object.freeze()")}} und {{jsxref("Object.seal()")}} haben keine Auswirkungen auf private Eigenschaften.

Für weitere Informationen darüber, wie und wann private Felder initialisiert werden, siehe [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

## Beispiele

### Private Felder

Private Felder umfassen private Instanzfelder und private statische Felder. Private Felder sind nur innerhalb der Klassendeklaration zugänglich.

#### Private Instanzfelder

Wie ihre öffentlichen Gegenstücke sind private Instanzfelder:

- werden vor dem Ausführen des Konstruktors in einer Basisklasse hinzugefügt oder unmittelbar nachdem [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) in einer Unterklasse aufgerufen wurde, und
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

> **Hinweis:** `#privateField` aus der Basisklasse `ClassWithPrivateField` ist privat für `ClassWithPrivateField` und von der abgeleiteten `Subclass` aus nicht zugänglich.

#### Rückgabe eines überschreibenden Objekts

Ein Konstruktor einer Klasse kann ein anderes Objekt zurückgeben, das als neues `this` für den Konstruktor der abgeleiteten Klasse verwendet wird. Die abgeleitete Klasse kann dann private Felder auf diesem zurückgegebenen Objekt definieren – was bedeutet, dass es möglich ist, private Felder auf unabhängige Objekte zu stempeln.

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

// You cannot stamp private properties twice
new Stamper(obj); // Error: Initializing an object twice is an error with private fields
```

> [!WARNING]
> Dies ist eine potenziell sehr verwirrende Sache zu tun. Es wird allgemein geraten, nichts vom Konstruktor zurückzugeben – insbesondere nichts, das nicht mit `this` verwandt ist.

#### Private statische Felder

Wie ihre öffentlichen Gegenstücke sind private statische Felder:

- werden dem Klassenkonstruktor zur Zeitpunkt der Klassenevaluierung hinzugefügt, und
- sind nur auf die Klasse selbst verfügbar.

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return ClassWithPrivateStaticField.#privateStaticField;
  }
}

console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42
```

Es gibt eine Einschränkung bei privaten statischen Feldern: Nur die Klasse, die das private statische Feld definiert, kann auf das Feld zugreifen. Dies kann zu unerwartetem Verhalten führen, wenn man [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwendet. Im folgenden Beispiel bezieht sich `this` auf die `Subclass` (nicht die `ClassWithPrivateStaticField`), wenn wir `Subclass.publicStaticMethod()` aufrufen, und verursacht daher einen `TypeError`.

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

Das Gleiche gilt, wenn Sie die Methode mit `super` aufrufen, da [die `super`-Methoden nicht mit der Superklasse als `this` aufgerufen werden](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

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

Es wird empfohlen, immer über den Klassennamen auf private statische Felder zuzugreifen, nicht über `this`, damit die Vererbung die Methode nicht unterbricht.

### Private Methoden

Private Methoden umfassen private Instanzmethoden und private statische Methoden. Private Methoden sind nur innerhalb der Klassendeklaration zugänglich.

#### Private Instanzmethoden

Im Gegensatz zu ihren öffentlichen Gegenstücken sind private Instanzmethoden:

- werden unmittelbar installiert, bevor die Instanzfelder installiert werden, und
- sind nur auf Instanzen der Klasse verfügbar, nicht auf deren `.prototype`-Eigenschaft.

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

Private Instanzmethoden können Generator-, async- oder async-Generatorfunktionen sein. Private Getter und Setter sind ebenfalls möglich und folgen denselben Syntaxanforderungen wie ihre öffentlichen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) Gegenstücke.

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

Im Gegensatz zu öffentlichen Methoden sind private Methoden auf der `.prototype`-Eigenschaft ihrer Klasse nicht zugänglich.

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

Wie ihre öffentlichen Gegenstücke sind private statische Methoden:

- werden dem Klassenkonstruktor zur Zeitpunkt der Klassenevaluierung hinzugefügt, und
- sind nur auf die Klasse selbst verfügbar.

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

Private statische Methoden können Generator-, async- und async-Generatorfunktionen sein.

Die zuvor erwähnte Einschränkung für private statische Felder gilt auch für private statische Methoden und kann ebenfalls zu unerwartetem Verhalten führen, wenn `this` verwendet wird. Im folgenden Beispiel bezieht sich `this` auf die `Subclass` (nicht die `ClassWithPrivateStaticMethod`), wenn wir `Subclass.publicStaticMethod()` aufrufen, und verursacht daher einen `TypeError`.

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

Viele andere Sprachen bieten die Möglichkeit, einen Konstruktor als privat zu markieren, was verhindert, dass die Klasse außerhalb der Klasse selbst instanziiert wird – man kann nur statische Fabrikmethoden verwenden, die Instanzen erstellen, oder überhaupt keine Instanzen erstellen. JavaScript hat keine native Möglichkeit, dies zu tun, aber es kann durch Verwendung eines privaten statischen Schalters erreicht werden.

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
- [Private Syntax FAQ](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md) im TC39-Klassenfeldvorschlag
- [Die Semantik aller JS-Klassenelemente](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Öffentliche und private Klassenfelder](https://v8.dev/features/class-fields) auf v8.dev (2018)
