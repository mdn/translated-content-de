---
title: Öffentliche Klassenfelder
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**Öffentliche Felder** sind beschreibbare, durchsuchbare und konfigurierbare Eigenschaften, die auf jeder Klasseninstanz oder Klassenkonstruktor definiert sind.

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
- Der Name eines Klassenfeldes (statisch oder instanziert) kann nicht `constructor` sein.

## Beschreibung

Diese Seite führt öffentliche Instanzfelder im Detail ein.

- Für öffentliche statische Felder siehe [`static`](/de/docs/Web/JavaScript/Reference/Classes/static).
- Für private Felder siehe [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).
- Für öffentliche Methoden siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).
- Für öffentliche Zugriffsobjekte siehe [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set).

Öffentliche Instanzfelder existieren in jeder erstellten Instanz einer Klasse. Durch das Deklarieren eines öffentlichen Feldes können Sie sicherstellen, dass das Feld immer vorhanden ist, und die Klassendefinition wird selbstdokumentierender.

Öffentliche Instanzfelder werden der Instanz entweder zur Konstruktionszeit in der Basisklasse (bevor der Konstruktorkörper Ablauf nimmt) hinzugefügt oder direkt nachdem `super()` in einer Unterklasse zurückkehrt. Felder ohne Initialisierer werden zu `undefined` initialisiert. Wie Eigenschaften können Feldnamen berechnet werden.

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

Berechnete Feldnamen werden nur einmal zur [Klassendefinitionszeit](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order) ausgewertet. Das bedeutet, dass jede Klasse immer eine feste Menge von Feldnamen hat und zwei Instanzen nicht unterschiedliche Feldnamen über berechnete Namen haben können. Der `this`-Wert im berechneten Ausdruck ist das umgebende `this` der Klassendefinition, und das Verweisen auf den Klassennamen führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck wie erwartet.

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name
```

Im Feldinitialisierer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die sich im Aufbau befindende Klasseninstanz, und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf die `prototype`-Eigenschaft der Basisklasse, die die Instanzmethoden der Basisklasse enthält, jedoch nicht deren Instanzfelder.

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

Der Ausdruck des Feldinitialisierers wird jedes Mal ausgewertet, wenn eine neue Instanz erstellt wird. (Da der `this`-Wert für jede Instanz unterschiedlich ist, kann der Initialisiererausdruck auf instanzspezifische Eigenschaften zugreifen.)

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

Der Ausdruck wird synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} im Initialisiererausdruck nicht verwenden. (Betrachten Sie den Initialisiererausdruck als implizit in eine Funktion eingebettet.)

Da Instanzfelder einer Klasse hinzugefügt werden, bevor der jeweilige Konstruktor abläuft, können Sie die Werte der Felder innerhalb des Konstruktors abrufen. Da jedoch Instanzfelder einer abgeleiteten Klasse nach der Rückkehr von `super()` definiert werden, hat der Konstruktor der Basisklasse keinen Zugriff auf die Felder der abgeleiteten Klasse.

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

Felder werden einzeln hinzugefügt. Feldinitialisierer können sich auf Feldwerte oberhalb davon beziehen, jedoch nicht auf solche darunter. Alle Instanz- und statischen Methoden werden vorab hinzugefügt und können aufgerufen werden, obwohl deren Verhalten möglicherweise nicht wie erwartet ist, wenn sie auf Felder unterhalb des initialisierten Feldes verweisen.

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
> Dies ist besonders wichtig bei [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), da das Zugreifen auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} auslöst, selbst wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, wäre es ein früher {{jsxref("SyntaxError")}}.)

Da Klassenfelder mithilfe der [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)-Semantik hinzugefügt werden (was im Wesentlichen {{jsxref("Object.defineProperty()")}} entspricht), lösen Feldeklarationen in abgeleiteten Klassen keine Setter in der Basisklasse aus. Dieses Verhalten unterscheidet sich von der Verwendung von `this.field = …` im Konstruktor.

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
> Bevor die Klassenspezifikation mit der `[[DefineOwnProperty]]`-Semantik finalisiert wurde, transformierten die meisten Transpiler, einschließlich [Babel](https://babeljs.io/) und [tsc](https://www.typescriptlang.org/), Klassenfelder in die `DerivedWithConstructor`-Form, was nach der Standardisierung von Klassenfeldern zu subtilen Fehlern führte.

## Beispiele

### Verwendung von Klassenfeldern

Klassenfelder können nicht von Argumenten des Konstruktors abhängen, daher evaluieren Feldinitialisierer normalerweise für jede Instanz denselben Wert (es sei denn, derselbe Ausdruck kann jedes Mal zu unterschiedlichen Werten evaluiert werden, wie z.B. {{jsxref("Math.random()")}} oder Objektinitialisierer).

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

Dennoch ist selbst die Deklaration eines leeren Klassenfeldes vorteilhaft, da sie auf die Existenz des Feldes hinweist, was Typtests und menschlichen Lesern ermöglicht, die Struktur der Klasse statisch zu analysieren.

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

Der obige Code scheint wiederholend zu sein, aber betrachten Sie den Fall, in dem `this` dynamisch mutiert wird: Die explizite Felderklärung macht klar, welche Felder definitiv in der Instanz vorhanden sein werden.

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

Da Initialisierer ausgeführt werden, nachdem die Basisklasse ausgeführt wurde, können Sie auf Eigenschaften zugreifen, die vom Konstruktor der Basisklasse erstellt wurden.

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

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)-Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
- {{jsxref("Statements/class", "class")}}
- [Die Semantik aller JS-Klassenelemente](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Öffentliche und private Klassenfelder](https://v8.dev/features/class-fields) auf v8.dev (2018)
