---
title: Privateigenschaften
slug: Web/JavaScript/Reference/Classes/Private_properties
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Classes")}}

**Privateigenschaften** sind Gegenstücke der regulären Klassen-Eigenschaften, die öffentlich sind, einschließlich [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields), Klassenmethoden usw. Privateigenschaften werden mithilfe eines Hash-Prefixes `#` erstellt und können rechtmäßig nicht außerhalb der Klasse referenziert werden. Die Vertraulichkeitskapselung dieser Klassen-Eigenschaften wird von JavaScript selbst durchgesetzt. Der einzige Weg, auf eine Privateigenschaft zuzugreifen, erfolgt über die [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation), und das nur innerhalb der Klasse, die die Privateigenschaft definiert.

Vor dem Bestehen dieser Syntax waren Privateigenschaften nicht nativ in der Sprache enthalten. In der prototypischen Vererbung kann ihr Verhalten mit [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members)-Objekten oder [Closures](/de/docs/Web/JavaScript/Guide/Closures#emulating_private_methods_with_closures) emuliert werden, aber sie können in Bezug auf Ergonomie nicht mit der `#`-Syntax verglichen werden.

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

- Alle privaten Bezeichner, die innerhalb einer Klasse deklariert werden, müssen eindeutig sein. Der Namensraum wird zwischen statischen und Instanzeigenschaften geteilt. Die einzige Ausnahme ist, wenn die beiden Deklarationen ein Getter-Setter-Paar definieren.
- Der private Bezeichner kann nicht `#constructor` sein.

## Beschreibung

Die meisten Klassen-Eigenschaften haben ihre privaten Gegenstücke:

- Private Felder
- Private Methoden
- Private statische Felder
- Private statische Methoden
- Private Getter
- Private Setter
- Private statische Getter
- Private statische Setter

Diese Funktionen werden zusammenfassend als _Privateigenschaften_ bezeichnet. Allerdings können [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor) in JavaScript nicht privat sein. Um zu verhindern, dass Klassen außerhalb der Klasse instanziiert werden, müssen Sie [ein privates Flag verwenden](#simulation_privater_konstruktoren).

Privateigenschaften werden mit **# Namen** deklariert (ausgesprochen "Hash-Namen"), das sind Bezeichner, die mit `#` präfixiert sind. Das Hash-Prefix ist ein wesentlicher Bestandteil des Eigenschaftsnamens – Sie können eine Beziehung zur alten Unterstrich-Prefix-Konvention `_privateField` ziehen – aber es ist keine gewöhnliche Zeichenketten-Eigenschaft, daher können Sie nicht dynamisch über die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) darauf zugreifen.

Es ist ein Syntaxfehler, `#`-Namen von außerhalb der Klasse zu referenzieren. Es ist auch ein Syntaxfehler, sich auf private Eigenschaften zu beziehen, die nicht im Klassenkörper deklariert wurden, oder zu versuchen, deklarierte Eigenschaften mit [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) zu entfernen.

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

JavaScript als dynamische Sprache ist in der Lage, diese Prüfzur Compile-Zeit aufgrund der speziellen Hash-Bezeichner-Syntax durchzuführen, wodurch es sich von normalen Eigenschaften auf der Syntaxebene unterscheidet.

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann Privateigenschaften außerhalb der Klasse zugreifen. Dies ist eine nur für DevTools geltende Lockerung der JavaScript-Syntaxbeschränkung.

Wenn Sie auf eine Privateigenschaft aus einem Objekt zugreifen, das die Eigenschaft nicht hat, wird ein {{jsxref("TypeError")}} ausgelöst, anstatt `undefined` wie bei normalen Eigenschaften zurückzugeben.

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

Dieses Beispiel zeigt auch, dass Sie auf Privateigenschaften innerhalb statischer Funktionen und auf extern definierten Instanzen der Klasse zugreifen können.

Sie können den [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwenden, um zu überprüfen, ob ein extern definiertes Objekt eine Privateigenschaft besitzt. Dies gibt `true` zurück, wenn das private Feld oder die Methode existiert, andernfalls `false`.

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

Beachten Sie ein Korollar, dass private Namen immer vorab deklariert und nicht löschbar sind: Wenn Sie festgestellt haben, dass ein Objekt eine Privateigenschaft der aktuellen Klasse besitzt (entweder aus einem `try...catch`- oder einem `in`-Check), muss es alle anderen Privateigenschaften besitzen. Ein Objekt, das die Privateigenschaften einer Klasse besitzt, bedeutet im Allgemeinen, dass es von dieser Klasse konstruiert wurde (obwohl [nicht immer](#rückgabe_eines_überschreibenden_objekts)).

Privateigenschaften sind nicht Teil des [prototypischen Vererbung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)-Modells, da sie nur innerhalb des aktuellen Klassenkörpers zugänglich sind und nicht von Unterklassen geerbt werden. Privateigenschaften mit demselben Namen in verschiedenen Klassen sind völlig unterschiedlich und interagieren nicht miteinander. Sehen Sie sie als externes Metadaten, das an jede Instanz angehängt und von der Klasse verwaltet wird. Aus diesem Grund klont [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) keine Privateigenschaften, und {{jsxref("Object.freeze()")}} und {{jsxref("Object.seal()")}} haben keinen Effekt auf Privateigenschaften.

Für weitere Informationen darüber, wie und wann private Felder initialisiert werden, siehe [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

## Beispiele

### Private Felder

Private Felder umfassen private Instanzfelder und private statische Felder. Private Felder sind nur von innerhalb der Klassendeklaration zugänglich.

#### Private Instanzfelder

Wie ihre öffentlichen Gegenstücke:

- werden private Instanzfelder vor dem Ausführen des Konstruktors in einer Basisklasse hinzugefügt oder sofort nach dem Aufrufen von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) in einer Unterklasse, und
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

> [!NOTE] > `#privateField` aus der Basisklasse `ClassWithPrivateField` ist privat für `ClassWithPrivateField` und ist von der abgeleiteten `Subclass` nicht zugänglich.

#### Rückgabe eines überschreibenden Objekts

Der Konstruktor einer Klasse kann ein anderes Objekt zurückgeben, das als neues `this` für den Konstruktor der abgeleiteten Klasse verwendet wird. Die abgeleitete Klasse kann dann private Felder auf diesem zurückgegebenen Objekt definieren – das bedeutet, dass es möglich ist, "Stempel" privater Felder auf nicht zusammenhängende Objekte zu setzen.

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
> Dies ist potenziell eine sehr verwirrende Vorgehensweise. Es wird grundsätzlich davon abgeraten, irgendetwas vom Konstruktor zurückzugeben – insbesondere etwas Unzusammenhängendes zu `this`.

#### Private statische Felder

Wie ihre öffentlichen Gegenstücke:

- werden private statische Felder zum Klassenkonstruktor zur Evaluierungszeit der Klasse hinzugefügt, und
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

Es gibt eine Einschränkung für private statische Felder: Nur die Klasse, die das private statische Feld definiert, kann auf das Feld zugreifen. Dies kann zu unerwartetem Verhalten führen, wenn [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwendet wird. Im folgenden Beispiel bezieht sich `this` auf die Klasse `Subclass` (nicht die Klasse `ClassWithPrivateStaticField`), wenn wir versuchen, `Subclass.publicStaticMethod()` aufzurufen, und verursacht daher einen `TypeError`.

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

Dies ist dasselbe, wenn Sie die Methode mit `super` aufrufen, da [`super`-Methoden nicht mit der Superklasse als `this` aufgerufen](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super) werden.

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

Es wird geraten, immer auf private statische Felder über den Klassennamen und nicht über `this` zuzugreifen, damit die Vererbung die Methode nicht unterbricht.

### Private Methoden

Private Methoden umfassen private Instanzmethoden und private statische Methoden. Private Methoden sind nur von innerhalb der Klassendeklaration zugänglich.

#### Private Instanzmethoden

Im Gegensatz zu ihren öffentlichen Gegenstücken:

- werden private Instanzmethoden direkt vor den Instanzfeldern installiert, und
- sind nur auf Instanzen der Klasse verfügbar, nicht auf der `.prototype`-Eigenschaft.

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

Private Instanzmethoden können Generator-, Async- oder Async-Generator-Funktionen sein. Private Getter und Setter sind ebenfalls möglich und folgen den gleichen Syntaxanforderungen wie ihre öffentlichen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) Gegenstücke.

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

- werden private statische Methoden zum Klassenkonstruktor zur Evaluierungszeit der Klasse hinzugefügt, und
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

Private statische Methoden können Generator-, Async- und Async-Generator-Funktionen sein.

Die gleiche zuvor erwähnte Einschränkung für private statische Felder gilt auch für private statische Methoden und kann ähnlich zu unerwartetem Verhalten bei der Verwendung von `this` führen. Im folgenden Beispiel, wenn wir versuchen, `Subclass.publicStaticMethod()` aufzurufen, bezieht sich `this` auf die Klasse `Subclass` (nicht die Klasse `ClassWithPrivateStaticMethod`) und verursacht daher einen `TypeError`.

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

### Simulation privater Konstruktoren

Viele andere Sprachen verfügen über die Möglichkeit, einen Konstruktor als privat zu markieren, was verhindert, dass die Klasse außerhalb der Klasse selbst instanziiert wird – Sie können nur statische Factory-Methoden verwenden, die Instanzen erstellen, oder gar keine Instanzen erstellen. JavaScript hat keine native Möglichkeit, dies zu tun, aber es kann mit einem privaten statischen Flag erreicht werden.

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

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Statements/class", "class")}}
- [Private Syntax FAQ](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md) im TC39 class-fields Vorschlag
- [The semantics of all JS class elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Public and private class fields](https://v8.dev/features/class-fields) auf v8.dev (2018)
