---
title: Öffentliche Klassenfelder
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

**Öffentliche Felder** sind schreibbare, aufzählbare und konfigurierbare Eigenschaften. Daher nehmen sie, im Gegensatz zu ihren privaten Gegenstücken, an der Prototypvererbung teil.

## Syntax

```js-nolint
class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  static staticFieldWithInitializer = "static field";
}
```

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Der Name einer statischen Eigenschaft (Feld oder Methode) kann nicht `prototype` sein.
- Der Name eines Klassenfelds (statisch oder instanz) kann nicht `constructor` sein.

## Beschreibung

Diese Seite führt öffentliche Instanzfelder im Detail ein.

- Für öffentliche statische Felder siehe [`static`](/de/docs/Web/JavaScript/Reference/Classes/static).
- Für private Felder siehe [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).
- Für öffentliche Methoden siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).
- Für öffentliche Zugriffs-Methoden siehe [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set).

Öffentliche Instanzfelder existieren in jeder erstellten Instanz einer Klasse. Durch die Deklaration eines öffentlichen Feldes können Sie sicherstellen, dass das Feld immer vorhanden ist und die Klassendefinition selbstdokumentierender ist.

Öffentliche Instanzfelder werden entweder während der Konstruktion in der Basisklasse hinzugefügt (bevor der Konstruktor-Body ausgeführt wird) oder direkt nach der Rückgabe von `super()` in einer Unterklasse. Felder ohne Initialisierer werden auf `undefined` gesetzt. Wie Eigenschaften können Feldnamen berechnet werden.

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

Berechnete Feldnamen werden nur einmal, zur [Zeit der Klassendefinition](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order), evaluiert. Dies bedeutet, dass jede Klasse immer eine feste Menge an Feldnamen hat und zwei Instanzen nicht unterschiedliche Feldnamen durch berechnete Namen haben können. Der `this`-Wert im berechneten Ausdruck ist das `this`, welches die Klassendefinition umgibt, und die Referenz auf den Klassennamen führt zu einem {{jsxref("ReferenceError")}}, weil die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck wie erwartet.

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name
```

Im Feldinitialisierer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die im Bau befindliche Klasseninstanz und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf die `prototype`-Eigenschaft der Basisklasse, die die Instanzmethoden der Basisklasse enthält, nicht aber deren Instanzfelder.

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

Der Feldinitialisierungs-Ausdruck wird jedes Mal ausgewertet, wenn eine neue Instanz erstellt wird. (Da der `this`-Wert für jede Instanz unterschiedlich ist, kann der Initialisierungs-Ausdruck instanzspezifische Eigenschaften zugreifen.)

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

Der Ausdruck wird synchron ausgewertet. Sie können nicht {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} im Initialisierungs-Ausdruck verwenden. (Betrachten Sie den Initialisierungs-Ausdruck als implizit in eine Funktion eingewickelt.)

Da Instanzfelder einer Klasse hinzugefügt werden, bevor der jeweilige Konstruktor ausgeführt wird, können Sie innerhalb des Konstruktors auf die Werte der Felder zugreifen. Da jedoch Instanzfelder einer abgeleiteten Klasse nach der Rückgabe von `super()` definiert werden, hat der Konstruktor der Basisklasse keinen Zugriff auf die Felder der abgeleiteten Klasse.

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

Felder werden einzeln hinzugefügt. Feldinitialisierer können auf Feldwerte über ihnen verweisen, jedoch nicht darunter. Alle Instanz- und statischen Methoden werden zuvor hinzugefügt und können aufgerufen werden, obwohl ihre Ausführung möglicherweise nicht wie erwartet funktioniert, wenn sie auf Felder unter dem gerade initialisierten verweisen.

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
> Dies ist bei [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) wichtiger, da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} wirft, auch wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, würde dies zu einem frühen {{jsxref("SyntaxError")}} führen.)

Da Klassenfelder mit dem [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)-Semantik (was im Wesentlichen {{jsxref("Object.defineProperty()")}} ist) hinzugefügt werden, lösen Felddeklarationen in abgeleiteten Klassen keine Setter in der Basisklasse aus. Dieses Verhalten unterscheidet sich von der Verwendung von `this.field = …` im Konstruktor.

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
> Bevor die Klassenfeldspezifikation mit der `[[DefineOwnProperty]]`-Semantik abgeschlossen wurde, transformierten die meisten Transpiler, einschließlich [Babel](https://babeljs.io/) und [tsc](https://www.typescriptlang.org/), Klassenfelder in die `DerivedWithConstructor`-Form, was nach der Standardisierung der Klassenfelder subtile Bugs verursachte.

## Beispiele

### Verwendung von Klassenfeldern

Klassenfelder können nicht von Konstruktorargumenten abhängig sein, daher bewerten Feldinitialisierer normalerweise denselben Wert für jede Instanz (es sei denn, derselbe Ausdruck kann jedes Mal zu unterschiedlichen Werten führen, wie {{jsxref("Date.now()")}} oder Objektinitialisierer).

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

Selbst das Deklarieren eines leeren Klassenfeldes ist jedoch vorteilhaft, da es auf das Vorhandensein des Feldes hinweist, was es Typprüfungen und menschlichen Lesern ermöglicht, die Struktur der Klasse statisch zu analysieren.

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

Der obige Code wirkt sich wiederholend aus, aber bedenken Sie den Fall, in dem `this` dynamisch verändert wird: die explizite Felddeklaration macht deutlich, welche Felder definitiv in der Instanz vorhanden sein werden.

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

Da Initialisierer ausgewertet werden, nachdem die Basisklasse ausgeführt wurde, können Sie auf Eigenschaften zugreifen, die vom Konstruktor der Basisklasse erstellt wurden.

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
- [The semantics of all JS class elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Public and private class fields](https://v8.dev/features/class-fields) auf v8.dev (2018)
