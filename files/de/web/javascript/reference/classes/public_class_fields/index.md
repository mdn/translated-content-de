---
title: Öffentliche Klassenfelder
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

**Öffentliche Felder** sind beschreibbare, durchsuchbare und konfigurierbare Eigenschaften. Im Gegensatz zu ihren privaten Gegenstücken nehmen sie daher an der Prototyp-Vererbung teil.

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
- Der Name eines Klassenfeldes (statisch oder instanziiert) kann nicht `constructor` sein.

## Beschreibung

Diese Seite führt öffentliche Instanzfelder detailliert ein.

- Für öffentliche statische Felder, siehe [`static`](/de/docs/Web/JavaScript/Reference/Classes/static).
- Für private Felder, siehe [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).
- Für öffentliche Methoden, siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).
- Für öffentliche Zugriffsmethoden, siehe [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set).

Öffentliche Instanzfelder existieren in jeder erstellten Instanz einer Klasse. Durch die Deklaration eines öffentlichen Feldes können Sie sicherstellen, dass das Feld immer vorhanden ist und die Klassendefinition wird selbstdokumentierend.

Öffentliche Instanzfelder werden entweder zur Laufzeit im Basisklassenkonstruktor (bevor der Konstruktor-Body ausgeführt wird) oder direkt nach der Rückkehr von `super()` in einer Unterklasse hinzugefügt. Felder ohne Initialisierer werden auf `undefined` gesetzt. Ähnlich wie Eigenschaften können Feldnamen berechnet werden.

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

Berechnete Feldnamen werden nur einmal zur [Definition der Klasse](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order) ausgewertet. Das bedeutet, dass jede Klasse immer eine feste Menge von Feldnamen hat und zwei Instanzen nicht unterschiedliche Feldnamen über berechnete Namen haben können. Der `this`-Wert im berechneten Ausdruck ist das `this`, das die Klassendefinition umgibt, und die Referenz auf den Namen der Klasse führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck wie erwartet.

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Beide Instanzen haben denselben Feldnamen
```

Im Feldinitialisierer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die im Bau befindliche Klasseninstanz, und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf die `prototype`-Eigenschaft der Basisklasse, die die Instanzmethoden der Basisklasse enthält, aber nicht deren Instanzfelder.

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

Der Feldinitialisierungs-Ausdruck wird jedes Mal ausgewertet, wenn eine neue Instanz erstellt wird. (Da der `this`-Wert für jede Instanz unterschiedlich ist, kann der Initialisierungs-Ausdruck auf instanzspezifische Eigenschaften zugreifen.)

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

Der Ausdruck wird synchron ausgewertet. Sie können nicht {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} im Initialisierungs-Ausdruck verwenden. (Betrachten Sie den Initialisierungs-Ausdruck als implizit in eine Funktion verpackt.)

Da Instanzfelder einer Klasse hinzugefügt werden, bevor der jeweilige Konstruktor ausgeführt wird, können Sie in den Konstruktor auf die Werte der Felder zugreifen. Allerdings hat der Konstruktor der Basisklasse keinen Zugriff auf die Felder der abgeleiteten Klasse, da die Instanzfelder einer abgeleiteten Klasse erst nach der Rückkehr von `super()` definiert werden.

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

Felder werden nacheinander hinzugefügt. Feldinitialisierer können sich auf Feldwerte oberhalb beziehen, aber nicht darunter. Alle Instanz- und statischen Methoden werden vorher hinzugefügt und sind zugänglich, obwohl ihr Aufruf möglicherweise nicht wie erwartet funktioniert, wenn sie sich auf Felder unterhalb des initialisierten beziehen.

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
> Dies ist wichtiger bei [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} wirft, selbst wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, wäre es ein früher {{jsxref("SyntaxError")}}.)

Da Klassenfelder mit dem [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)-Semantik (was im Wesentlichen {{jsxref("Object.defineProperty()")}} ist) hinzugefügt werden, rufen Felddeklarationen in abgeleiteten Klassen keine Setter in der Basisklasse auf. Dieses Verhalten unterscheidet sich von der Verwendung von `this.field = …` im Konstruktor.

```js
class Base {
  set field(val) {
    console.log(val);
  }
}

class DerivedWithField extends Base {
  field = 1;
}

const instance = new DerivedWithField(); // Kein Log

class DerivedWithConstructor extends Base {
  constructor() {
    super();
    this.field = 1;
  }
}

const instance2 = new DerivedWithConstructor(); // Loggt 1
```

> [!NOTE]
> Bevor die Klassenfeldspezifikation mit der `[[DefineOwnProperty]]`-Semantik finalisiert wurde, transformierten die meisten Transpiler, einschließlich [Babel](https://babeljs.io/) und [tsc](https://www.typescriptlang.org/), Klassenfelder in die `DerivedWithConstructor`-Form, was nach der Standardisierung der Klassenfelder zu subtilen Fehlern geführt hat.

## Beispiele

### Verwendung von Klassenfeldern

Klassenfelder können nicht von Argumenten des Konstruktors abhängen, daher werten sich Feldinitialisierer normalerweise auf denselben Wert für jede Instanz aus (es sei denn, derselbe Ausdruck kann sich jedes Mal zu unterschiedlichen Werten auswerten, wie z.B. {{jsxref("Date.now()")}} oder Objektinitialisierer).

```js example-bad
class Person {
  name = nameArg; // nameArg ist außerhalb des Bereichs des Konstruktors
  constructor(nameArg) {}
}
```

```js example-good
class Person {
  // Alle Instanzen von Person werden denselben Namen haben
  name = "Dragomir";
}
```

Allerdings ist selbst die Deklaration eines leeren Klassenfeldes vorteilhaft, da sie auf die Existenz des Feldes hinweist, was Typprüfern sowie menschlichen Lesern ermöglicht, die Struktur der Klasse statisch zu analysieren.

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

Der obenstehende Code scheint redundant, aber betrachten Sie den Fall, bei dem `this` dynamisch mutiert wird: die explizite Felddeklaration macht deutlich, welche Felder definitiv in der Instanz vorhanden sein werden.

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

Da Initialisierer ausgewertet werden, nachdem die Basisklasse ausgeführt wurde, können Sie auf Eigenschaften zugreifen, die durch den Basisklassenkonstruktor erstellt wurden.

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
