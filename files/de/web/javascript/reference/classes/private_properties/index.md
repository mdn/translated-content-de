---
title: Private Eigenschaften
slug: Web/JavaScript/Reference/Classes/Private_properties
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

**Private Eigenschaften** sind Gegenstücke zu den regulären Klasseigenschaften, die öffentlich sind, einschließlich [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields), Klassenmethoden usw. Private Eigenschaften werden durch das vorangestellte Hash-Zeichen `#` erstellt und können außerhalb der Klasse nicht legal referenziert werden. Die Vertraulichkeit dieser Klasseigenschaften wird durch JavaScript selbst erzwungen. Der einzige Weg, auf eine private Eigenschaft zuzugreifen, ist über die [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation), und dies ist nur innerhalb der Klasse möglich, die die private Eigenschaft definiert.

Vor Einführung dieser Syntax waren private Eigenschaften nicht nativ in der Sprache verfügbar. In prototypischer Vererbung konnte ihr Verhalten mit [`WeakMap`](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#emulating_private_members)-Objekten oder [Closures](/de/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) emuliert werden, aber sie können im Vergleich zur `#`-Syntax nicht hinsichtlich der Ergonomie mithalten.

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

- Alle innerhalb einer Klasse deklarierten privaten Bezeichner müssen eindeutig sein. Der Namensraum wird zwischen statischen und Instanzeigenschaften geteilt. Die einzige Ausnahme ist, wenn die beiden Deklarationen ein Getter-Setter-Paar definieren.
- Der private Bezeichner kann nicht `#constructor` sein.

## Beschreibung

Die meisten Klasseigenschaften haben ihre privaten Gegenstücke:

- Private Felder
- Private Methoden
- Private statische Felder
- Private statische Methoden
- Private Getter
- Private Setter
- Private statische Getter
- Private statische Setter

Diese Funktionen werden zusammen als _private Eigenschaften_ bezeichnet. Allerdings können [Konstruktoren](/de/docs/Web/JavaScript/Reference/Classes/constructor) in JavaScript nicht privat sein. Um zu verhindern, dass Klassen außerhalb der Klasse instanziiert werden, müssen Sie [einen privaten Indikator verwenden](#simulieren_privater_konstruktoren).

Private Eigenschaften werden mit **# Namen** (ausgesprochen "Hash-Namen") deklariert, das sind Bezeichner, die mit `#` beginnen. Das Hash-Präfix ist ein integraler Bestandteil des Eigenschaftsnamens — Sie können eine Verbindung mit der alten Unterstrich-Präfix-Konvention `_privateField` ziehen —, aber es ist keine gewöhnliche Zeichenfolgen-Eigenschaft, daher können Sie nicht dynamisch mit der [Klammernotierung](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) darauf zugreifen.

Ein Syntaxfehler tritt auf, wenn `#`-Namen außerhalb der Klasse referenziert werden. Ebenso ist es ein Syntaxfehler, auf private Eigenschaften zu referenzieren, die nicht im Klassenkörper deklariert wurden, oder zu versuchen, deklarierte Eigenschaften mit [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) zu entfernen.

```js-nolint example-bad
class ClassWithPrivateField {
  #privateField;

  constructor() {
    delete this.#privateField; // Syntaxfehler
    this.#undeclaredField = 42; // Syntaxfehler
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField; // Syntaxfehler
```

JavaScript als dynamische Sprache kann diese Prüfung zur Kompilierungszeit wegen der speziellen Hash-Bezeichnungssyntax durchführen, was es von normalen Eigenschaften auf Syntaxebene unterscheidet.

> [!NOTE]
> Code, der in der Chrome-Konsole ausgeführt wird, kann private Eigenschaften außerhalb der Klasse zugreifen. Dies ist eine DevTools-spezifische Lockerung der JavaScript-Syntaxeinschränkung.

Wenn Sie von einem Objekt, das die Eigenschaft nicht besitzt, auf eine private Eigenschaft zugreifen, wird ein {{jsxref("TypeError")}} ausgelöst, anstatt wie bei normalen Eigenschaften `undefined` zurückzugeben.

```js example-bad
class C {
  #x;

  static getX(obj) {
    return obj.#x;
  }
}

console.log(C.getX(new C())); // undefined
console.log(C.getX({})); // TypeError: Kann nicht auf privates Element #x in einem Objekt zugreifen, dessen Klasse es nicht deklariert hat
```

Dieses Beispiel zeigt auch, dass Sie auf private Eigenschaften auch innerhalb statischer Funktionen und bei extern definierten Instanzen der Klasse zugreifen können.

Mit dem [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator können Sie überprüfen, ob ein extern definiertes Objekt eine private Eigenschaft besitzt. Dies gibt `true` zurück, wenn das private Feld oder die Methode existiert, andernfalls `false`.

```js example-good
class C {
  #x;
  constructor(x) {
    this.#x = x;
  }
  static getX(obj) {
    if (#x in obj) return obj.#x;

    return "obj muss eine Instanz von C sein";
  }
}
console.log(C.getX(new C("foo"))); // "foo"
console.log(C.getX(new C(0.196))); // 0.196
console.log(C.getX(new C(new Date()))); // das aktuelle Datum und die Uhrzeit
console.log(C.getX({})); // "obj muss eine Instanz von C sein"
```

Beachten Sie eine Folge von privaten Namen, die immer vordeklariert und nicht löschbar sind: Wenn Sie festgestellt haben, dass ein Objekt eine private Eigenschaft der aktuellen Klasse besitzt (entweder durch einen `try...catch`-Block oder eine `in`-Prüfung), muss es alle anderen privaten Eigenschaften besitzen. Dass ein Objekt die privaten Eigenschaften einer Klasse besitzt, bedeutet im Allgemeinen, dass es von dieser Klasse konstruiert wurde (obwohl [nicht immer](#rückgabe_eines_übergeordneten_objekts)).

Private Eigenschaften sind nicht Teil des [prototypischen Vererbung](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)-Modells, da sie nur innerhalb des aktuellen Klassenkörpers zugänglich sind und nicht von Unterklassen geerbt werden. Private Eigenschaften mit demselben Namen in verschiedenen Klassen sind völlig verschieden und interagieren nicht miteinander. Betrachten Sie sie als externe Metadaten, die jeder Instanz angehängt werden und von der Klasse verwaltet werden. Aus diesem Grund klonen [`structuredClone()`](/de/docs/Web/API/structuredClone) keine privaten Eigenschaften, und {{jsxref("Object.freeze()")}} und {{jsxref("Object.seal()")}} haben keine Auswirkungen auf private Eigenschaften.

Weitere Informationen darüber, wie und wann private Felder initialisiert werden, finden Sie unter [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

## Beispiele

### Private Felder

Private Felder umfassen private Instanzfelder und private statische Felder. Private Felder sind nur von innerhalb der Klassendeklaration zugänglich.

#### Private Instanzfelder

Wie ihre öffentlichen Gegenstücke werden private Instanzfelder:

- vor dem Ausführen des Konstruktors in einer Basisklasse hinzugefügt oder unmittelbar nach dem Aufruf von [`super()`](/de/docs/Web/JavaScript/Reference/Operators/super) in einer Unterklasse, und
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

new Subclass(); // In einigen Entwicklerwerkzeugen wird Subclass {#privateField: 42, #subPrivateField: 23} angezeigt
```

> **Hinweis:** `#privateField` aus der `ClassWithPrivateField`-Basisklasse ist privat für `ClassWithPrivateField` und nicht von der abgeleiteten `Subclass` zugänglich.

#### Rückgabe eines übergeordneten Objekts

Ein Konstruktor einer Klasse kann ein anderes Objekt zurückgeben, das als neues `this` für den Konstruktor der abgeleiteten Klasse verwendet wird. Die abgeleitete Klasse kann dann private Felder auf diesem zurückgegebenen Objekt definieren, was bedeutet, dass es möglich ist, private Felder auf nicht zusammenhängende Objekte zu "prägen".

```js
class Stamper extends class {
  // Eine Basisklasse, deren Konstruktor das übergebene Objekt zurückgibt
  constructor(obj) {
    return obj;
  }
} {
  // Diese Erklärung "prägt" das private Feld auf dem vom Basisklassenkonstruktor zurückgegebenen Objekt
  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}

const obj = {};
new Stamper(obj);
// `Stamper` ruft `Base` auf, das `obj` zurückgibt, also ist `obj` jetzt der `this`-Wert. `Stamper` definiert dann `#stamp` auf `obj`

console.log(obj); // In einigen Entwicklerwerkzeugen wird {#stamp: 42} angezeigt
console.log(Stamper.getStamp(obj)); // 42
console.log(obj instanceof Stamper); // false

// Sie können private Eigenschaften nicht zweimal prägen
new Stamper(obj); // Fehler: Das zweimalige Initialisieren eines Objekts ist ein Fehler bei privaten Feldern
```

> [!WARNING]
> Dies ist potenziell sehr verwirrend. Es wird allgemein davon abgeraten, etwas aus dem Konstruktor zurückzugeben – insbesondere etwas, das nicht mit `this` zusammenhängt.

#### Private statische Felder

Wie ihre öffentlichen Gegenstücke werden private statische Felder:

- zur Klassenkonstruktorzeit zur Klasse hinzugefügt, und
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

Für private statische Felder gibt es eine Beschränkung: Nur die Klasse, die das private statische Feld definiert, kann auf das Feld zugreifen. Dies kann zu unerwartetem Verhalten führen, wenn [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwendet wird. Im folgenden Beispiel bezieht sich `this` auf die `Subclass`-Klasse (nicht die `ClassWithPrivateStaticField`-Klasse), wenn versucht wird, `Subclass.publicStaticMethod()` aufzurufen, und verursacht daher einen `TypeError`.

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {}

Subclass.publicStaticMethod(); // TypeError: Kann nicht auf privates Element #privateStaticField in einem Objekt zugreifen, dessen Klasse es nicht deklariert hat
```

Dies ist dasselbe, wenn die Methode mit `super` aufgerufen wird, da [`super`-Methoden nicht mit der Superklasse als `this` aufgerufen werden](/de/docs/Web/JavaScript/Reference/Operators/super#calling_methods_from_super).

```js
class ClassWithPrivateStaticField {
  static #privateStaticField = 42;

  static publicStaticMethod() {
    // Bei Aufruf über super bezieht sich `this` weiterhin auf Subclass
    return this.#privateStaticField;
  }
}

class Subclass extends ClassWithPrivateStaticField {
  static callSuperMethod() {
    return super.publicStaticMethod();
  }
}

Subclass.callSuperMethod(); // TypeError: Kann nicht auf privates Element #privateStaticField in einem Objekt zugreifen, dessen Klasse es nicht deklariert hat
```

Es wird empfohlen, private statische Felder immer über den Klassennamen und nicht über `this` zuzugreifen, damit Vererbung die Methode nicht bricht.

### Private Methoden

Private Methoden umfassen private Instanzmethoden und private statische Methoden. Private Methoden sind nur von innerhalb der Klassendeklaration zugänglich.

#### Private Instanzmethoden

Im Gegensatz zu ihren öffentlichen Gegenstücken werden private Instanzmethoden:

- unmittelbar vor den Instanzfeldern installiert, und
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

Private Instanzmethoden können Generator-, Async- oder Async-Generator-Funktionen sein. Private Getter und Setter sind ebenfalls möglich und folgen denselben Syntaxanforderungen wie ihre öffentlichen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get)- und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Gegenstücke.

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

console.log(C.getMethod(new C())); // [Funktion: #method]
console.log(C.getMethod(C.prototype)); // TypeError: Der Empfänger muss eine Instanz der Klasse C sein
```

#### Private statische Methoden

Wie ihre öffentlichen Gegenstücke werden private statische Methoden:

- zur Klassenkonstruktorzeit zur Klasse hinzugefügt, und
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

Die zuvor erwähnte Beschränkung für private statische Felder gilt gleichermaßen für private statische Methoden und kann ebenfalls zu unerwartetem Verhalten führen, wenn `this` verwendet wird. Im folgenden Beispiel bezieht sich `this` auf die `Subclass`-Klasse (nicht die `ClassWithPrivateStaticMethod`-Klasse), wenn versucht wird, `Subclass.publicStaticMethod()` aufzurufen, und verursacht daher einen `TypeError`.

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

console.log(Subclass.publicStaticMethod()); // TypeError: Kann nicht auf privates Element #privateStaticMethod in einem Objekt zugreifen, dessen Klasse es nicht deklariert hat
```

### Simulieren privater Konstruktoren

Viele andere Sprachen bieten die Möglichkeit, einen Konstruktor als privat zu markieren, was verhindert, dass die Klasse außerhalb der Klasse selbst instanziiert wird – Sie können nur statische Fabrikmethoden verwenden, die Instanzen erstellen, oder Sie können überhaupt keine Instanzen erstellen. JavaScript verfügt nicht nativer über diese Möglichkeit, aber es kann durch Verwendung eines privaten statischen Indikators erreicht werden.

```js
class PrivateConstructor {
  static #isInternalConstructing = false;

  constructor() {
    if (!PrivateConstructor.#isInternalConstructing) {
      throw new TypeError("PrivateConstructor ist nicht konstruierbar");
    }
    PrivateConstructor.#isInternalConstructing = false;
    // Weitere Initialisierungslogik
  }

  static create() {
    PrivateConstructor.#isInternalConstructing = true;
    const instance = new PrivateConstructor();
    return instance;
  }
}

new PrivateConstructor(); // TypeError: PrivateConstructor ist nicht konstruierbar
PrivateConstructor.create(); // PrivateConstructor {}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using classes](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [Classes](/de/docs/Web/JavaScript/Reference/Classes)
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{jsxref("Statements/class", "class")}}
- [Private Syntax FAQ](https://github.com/tc39/proposal-class-fields/blob/main/PRIVATE_SYNTAX_FAQ.md) im TC39-Klassenfelder-Vorschlag
- [The semantics of all JS class elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Public and private class fields](https://v8.dev/features/class-fields) auf v8.dev (2018)
