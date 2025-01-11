---
title: Öffentliche Klassenfelder
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: 3f4f184edc1211cb2d3e6b52a7c85fe7a29404d5
---

{{jsSidebar("Classes")}}

**Öffentliche Felder** sind schreibbare, aufzählbare und konfigurierbare Eigenschaften, die auf jeder Klassen-Instanz oder Klassen-Konstruktor definiert sind.

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

- Der Name einer statischen Eigenschaft (Felder oder Methoden) kann nicht `prototype` sein.
- Der Name eines Klassenfelds (statisch oder Instanz) kann nicht `constructor` sein.

## Beschreibung

Diese Seite führt öffentlich Instanzfelder im Detail ein.

- Für öffentliche statische Felder siehe [`static`](/de/docs/Web/JavaScript/Reference/Classes/static).
- Für private Felder siehe [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).
- Für öffentliche Methoden siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).
- Für öffentliche Accessoren sehen Sie [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set).

Öffentliche Instanzfelder existieren in jeder erstellten Instanz einer Klasse. Durch das Deklarieren eines öffentlichen Feldes können Sie sicherstellen, dass das Feld immer vorhanden ist und die Klassendefinition ist selbstdokumentierender.

Öffentliche Instanzfelder werden der Instanz entweder zur Konstruktion im Basisklassen (bevor der Konstruktor-Körper ausgeführt wird) hinzugefügt, oder direkt nachdem `super()` in einer Unterklasse zurückkehrt. Felder ohne Initialisierungen werden mit `undefined` initialisiert. Ähnlich wie Eigenschaften können Feldnamen berechnet werden.

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

Berechnete Feldnamen werden nur einmal ausgewertet, zur [Auswertungszeit der Klassendefinition](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order). Das bedeutet, dass jede Klasse immer einen festen Satz von Feldnamen hat und zwei Instanzen nicht über unterschiedliche Feldnamen durch berechnete Namen verfügen können. Der `this`-Wert im Ausdruck mit berechnetem Namen bezieht sich auf das `this` um die Klassendefinition herum, und die Bezugnahme auf den Klassennamen führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck erwartungsgemäß.

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name
```

Im Feldinitializer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die in Konstruktion befindliche Klasseninstanz, und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf die `prototype`-Eigenschaft der Basisklasse, die die Instanzmethoden der Basisklasse enthält, aber nicht deren Instanzfelder.

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

Der Ausdruck des Feldinitializers wird jedes Mal ausgewertet, wenn eine neue Instanz erstellt wird. (Da der `this`-Wert für jede Instanz unterschiedlich ist, kann der Initialisierer-Ausdruck auf instanzspezifische Eigenschaften zugreifen.)

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

Der Ausdruck wird synchron ausgewertet. Sie können in dem Initialisierer-Ausdruck nicht {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} verwenden. (Sehen Sie den Initialisierer-Ausdruck als implizit in eine Funktion eingebettet an.)

Da die Instanzfelder einer Klasse hinzugefügt werden, bevor der jeweilige Konstruktor ausgeführt wird, können Sie innerhalb des Konstruktors auf die Werte der Felder zugreifen. Da jedoch die Instanzfelder einer abgeleiteten Klasse nach dem Zurückkehren von `super()` definiert werden, hat der Konstruktor der Basisklasse keinen Zugriff auf die Felder der abgeleiteten Klasse.

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

Felder werden eins nach dem anderen hinzugefügt. Feldinitialisierungen können sich auf Feldwerte oberhalb davon beziehen, nicht jedoch darunter. Alle Instanz- und statische Methoden werden vorher hinzugefügt und können aufgerufen werden, obwohl das Verhalten möglicherweise nicht wie erwartet ist, wenn sie sich auf Felder beziehen, die unterhalb des Initialisierers liegen.

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
> Dies ist wichtiger bei [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), da der Zugriff auf ein nicht initialisiertes privates Feld zu einem {{jsxref("TypeError")}} führt, auch wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, würde es zu einem frühen {{jsxref("SyntaxError")}} führen.)

Da Klassenfelder unter Verwendung der [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)-Semantik hinzugefügt werden (was im Wesentlichen {{jsxref("Object.defineProperty()")}} ist), rufen Felddeklarationen in abgeleiteten Klassen keine Setter in der Basisklasse auf. Dieses Verhalten unterscheidet sich von der Verwendung von `this.field = …` im Konstruktor.

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
> Bevor die Klassenspezifikation für Felder mit der `[[DefineOwnProperty]]`-Semantik festgelegt wurde, verwandelten die meisten Transpiler, einschließlich [Babel](https://babeljs.io/) und [tsc](https://www.typescriptlang.org/), Klassenfelder in die `DerivedWithConstructor`-Form, was nach der Standardisierung der Klassenfelder subtile Bugs verursacht hat.

## Beispiele

### Verwenden von Klassenfeldern

Klassenfelder können nicht von Argumenten des Konstruktors abhängen, daher werten Feldinitialisierer gewöhnlich auf denselben Wert für jede Instanz aus (es sei denn, derselbe Ausdruck kann jedes Mal unterschiedliche Werte auswerten, wie {{jsxref("Date.now()")}} oder Objektinitialisierer).

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

Jedoch ist es selbst dann von Vorteil, ein leeres Klassenfeld zu deklarieren, da das Bestehen des Feldes angegeben wird, was statische Analysen der Klassengestalt durch Typprüfer sowie menschliche Leser ermöglicht.

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

Der obige Code scheint sich zu wiederholen, aber betrachten Sie den Fall, in dem `this` dynamisch verändert wird: Die explizite Felddeklaration macht deutlich, welche Felder definitiv auf der Instanz vorhanden sein werden.

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

Da Initialisierer nach der Ausführung der Basisklasse ausgewertet werden, können Sie auf Eigenschaften zugreifen, die durch den Konstruktor der Basisklasse erstellt wurden.

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

- [Verwenden von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
- {{jsxref("Statements/class", "class")}}
- [Die Semantik aller JS-Klassenelemente](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Öffentliche und private Klassenfelder](https://v8.dev/features/class-fields) auf v8.dev (2018)
