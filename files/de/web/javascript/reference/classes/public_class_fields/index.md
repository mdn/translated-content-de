---
title: Public class fields
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

**Public Fields** sind beschreibbare, aufzählbare und konfigurierbare Eigenschaften. Anders als ihre privaten Gegenstücke nehmen sie an der Prototypvererbung teil.

## Syntax

```js-nolint
class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  static staticFieldWithInitializer = "static field";
}
```

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Der Name einer statischen Eigenschaft (Feld oder Methode) kann nicht `prototype` sein.
- Der Name eines Klassenfelds (statisch oder instanziiert) kann nicht `constructor` sein.

## Beschreibung

Diese Seite führt öffentliche Instanzfelder im Detail ein.

- Für öffentliche statische Felder, siehe [`static`](/de/docs/Web/JavaScript/Reference/Classes/static).
- Für private Felder, siehe [private properties](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).
- Für öffentliche Methoden, siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).
- Für öffentliche Zugriffsmechanismen, siehe [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set).

Öffentliche Instanzfelder existieren in jeder erstellten Instanz einer Klasse. Durch die Deklaration eines öffentlichen Feldes kann sichergestellt werden, dass das Feld immer vorhanden ist und die Klassendefinition selbstdokumentierender wird.

Öffentliche Instanzfelder werden entweder während der Konstruktion in der Basisklasse hinzugefügt (bevor der Konstruktorkörper ausgeführt wird) oder direkt nach der Rückgabe von `super()` in einer Unterklasse. Felder ohne Initialisierer werden auf `undefined` gesetzt. Wie Eigenschaften können Feldnamen berechnet werden.

```js
const PREFIX = "prefix";

class ClassWithField {
  field;
  fieldWithInitializer = "instance field";
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithField();
console.log(Object.hasOwn(instance, "field")); // true
console.log(instance.field); // undefined
console.log(instance.fieldWithInitializer); // "instance field"
console.log(instance.prefixField); // "prefixed field"
```

Berechnete Feldnamen werden nur einmal ausgewertet, zur [Klassendefinitionszeit](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order). Das bedeutet, dass jede Klasse immer einen festen Satz von Feldnamen hat, und zwei Instanzen können über berechnete Namen nicht unterschiedliche Feldnamen haben. Der `this`-Wert im berechneten Ausdruck ist das umgebende `this` der Klassendefinition, und das Verweisen auf den Namen der Klasse führt zu einem {{jsxref("ReferenceError")}}, weil die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck wie erwartet.

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name
```

Im Feld-Initialisierer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die Klasseninstanz, die gerade konstruiert wird, und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf die `prototype`-Eigenschaft der Basisklasse, die die Instanzmethoden der Basisklasse enthält, aber nicht deren Instanzfelder.

```js
class Base {
  baseField = "base field";
  anotherBaseField = this.baseField;
  baseMethod() {
    return "base method output";
  }
}

class Derived extends Base {
  subField = super.baseMethod();
}

const base = new Base();
const sub = new Derived();

console.log(base.anotherBaseField); // "base field"

console.log(sub.subField); // "base method output"
```

Der Feld-Initialisierungs-Ausdruck wird jedes Mal ausgewertet, wenn eine neue Instanz erstellt wird. (Weil der `this`-Wert für jede Instanz unterschiedlich ist, kann der Initialisierungs-Ausdruck auf instanzenspezifische Eigenschaften zugreifen.)

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

Der Ausdruck wird synchron ausgewertet. Sie können in dem Initialisierungs-Ausdruck nicht {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} verwenden. (Betrachten Sie den Initialisierungs-Ausdruck, als ob er implizit in einer Funktion eingeschlossen ist.)

Da Instanzfelder einer Klasse hinzugefügt werden, bevor der jeweilige Konstruktor ausgeführt wird, können Sie innerhalb des Konstruktors auf die Werte der Felder zugreifen. Da die Instanzfelder einer abgeleiteten Klasse jedoch erst nach der Rückgabe von `super()` definiert werden, hat der Konstruktor der Basisklasse keinen Zugriff auf die Felder der abgeleiteten Klasse.

```js
class Base {
  constructor() {
    console.log("Base constructor:", this.field);
  }
}

class Derived extends Base {
  field = 1;
  constructor() {
    super();
    console.log("Derived constructor:", this.field);
    this.field = 2;
  }
}

const instance = new Derived();
// Base constructor: undefined
// Derived constructor: 1
console.log(instance.field); // 2
```

Felder werden einzeln hinzugefügt. Feldinitialisierer können sich auf die Felder oberhalb beziehen, aber nicht auf die darunter. Alle Instanz- und statischen Methoden werden davor hinzugefügt und können zugegriffen werden, obwohl deren Aufruf möglicherweise nicht wie erwartet funktioniert, wenn sie sich auf die darunterliegenden Felder beziehen.

```js
class C {
  a = 1;
  b = this.c;
  c = this.a + 1;
  d = this.c + 1;
}

const instance = new C();
console.log(instance.d); // 3
console.log(instance.b); // undefined
```

> [!NOTE]
> Dies ist insbesondere bei [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) wichtig, da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} verursacht, selbst wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, würde es einen frühen {{jsxref("SyntaxError")}} geben.)

Da Klassenfelder unter Verwendung des [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)-Semantik (welches im Wesentlichen {{jsxref("Object.defineProperty()")}} ist) hinzugefügt werden, lösen Felddeklarationen in abgeleiteten Klassen keine Setter in der Basisklasse aus. Dieses Verhalten unterscheidet sich von der Verwendung von `this.field = …` im Konstruktor.

```js
class Base {
  set field(val) {
    console.log(val);
  }
}

class DerivedWithField extends Base {
  field = 1;
}

const instance = new DerivedWithField(); // No log

class DerivedWithConstructor extends Base {
  constructor() {
    super();
    this.field = 1;
  }
}

const instance2 = new DerivedWithConstructor(); // Logs 1
```

> [!NOTE]
> Bevor die Klassenspezifikation für Felder mit der `[[DefineOwnProperty]]`-Semantik abgeschlossen wurde, konvertierten die meisten Transpiler, einschließlich [Babel](https://babeljs.io/) und [tsc](https://www.typescriptlang.org/), Klassenfelder in die `DerivedWithConstructor`-Form, was nach der Standardisierung von Klassenfeldern subtile Fehler verursacht hat.

## Beispiele

### Verwendung von Klassenfeldern

Klassenfelder können nicht von Argumenten des Konstruktors abhängen, daher evaluieren Feldinitialisierer normalerweise auf denselben Wert für jede Instanz (es sei denn, derselbe Ausdruck kann jedes Mal zu unterschiedlichen Werten führen, wie {{jsxref("Date.now()")}} oder Objektinitialisierer).

```js example-bad
class Person {
  name = nameArg; // nameArg is out of scope of the constructor
  constructor(nameArg) {}
}
```

```js example-good
class Person {
  // All instances of Person will have the same name
  name = "Dragomir";
}
```

Es ist jedoch selbst dann vorteilhaft, ein leeres Klassenfeld zu deklarieren, da es das Vorhandensein des Feldes anzeigt, was es Typprüfern sowie menschlichen Lesern ermöglicht, die Struktur der Klasse statisch zu analysieren.

```js
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

Der obige Code scheint sich zu wiederholen, aber betrachten Sie den Fall, in dem `this` dynamisch mutiert wird: Die explizite Felddeklaration macht deutlich, welche Felder definitiv in der Instanz vorhanden sein werden.

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

Da Initialisierungen nach der Ausführung der Basisklasse ausgeführt werden, können Sie auf Eigenschaften zugreifen, die durch den Konstruktor der Basisklasse erstellt wurden.

```js
class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Professor extends Person {
  name = `Professor ${this.name}`;
}

console.log(new Professor("Radev", 54).name); // "Professor Radev"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
- {{jsxref("Statements/class", "class")}}
- [Die Semantik aller JS-Klassenelemente](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Öffentliche und private Klassenfelder](https://v8.dev/features/class-fields) auf v8.dev (2018)
