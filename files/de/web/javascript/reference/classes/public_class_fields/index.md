---
title: Öffentliche Klassenfelder
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

**Öffentliche Felder** sind beschreibbare, aufzählbare und konfigurierbare Eigenschaften, die auf jeder Klasseninstanz oder auf dem Klassenkonstruktor definiert sind.

## Syntax

```js-nolint
class ClassWithField {
  instanceField;
  instanceFieldWithInitializer = "instance field";
  static staticField;
  static staticFieldWithInitializer = "static field";
}
```

Es gelten einige zusätzliche Syntaxbeschränkungen:

- Der Name einer statischen Eigenschaft (Feld oder Methode) darf nicht `prototype` sein.
- Der Name eines Klassenfelds (statisch oder instanzbezogen) darf nicht `constructor` sein.

## Beschreibung

Diese Seite erläutert öffentliche Instanzfelder im Detail.

- Informationen zu öffentlichen statischen Feldern finden Sie unter [`static`](/de/docs/Web/JavaScript/Reference/Classes/static).
- Informationen zu privaten Feldern finden Sie unter [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).
- Informationen zu öffentlichen Methoden finden Sie unter [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).
- Informationen zu öffentlichen Accessors finden Sie unter [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set).

Öffentliche Instanzfelder sind auf jeder erstellten Instanz einer Klasse vorhanden. Indem Sie ein öffentliches Feld deklarieren, stellen Sie sicher, dass das Feld immer vorhanden ist. Zugleich wird die Klassendefinition dadurch aussagekräftiger.

Öffentliche Instanzfelder werden der Instanz entweder beim Erstellen in der Basisklasse hinzugefügt (bevor der Konstruktorcode ausgeführt wird) oder in einer abgeleiteten Klasse unmittelbar nach der Rückkehr von `super()`. Felder ohne Initialisierer werden mit `undefined` initialisiert. Wie bei Eigenschaften können Feldnamen berechnet werden.

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

Berechnete Feldnamen werden nur einmal ausgewertet, und zwar zum [Zeitpunkt der Klassendefinition](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order). Das bedeutet, dass jede Klasse immer einen festen Satz von Feldnamen hat und zwei Instanzen nicht durch berechnete Namen unterschiedliche Feldnamen erhalten können. Der `this`-Wert im berechneten Ausdruck ist der `this`-Wert der Umgebung der Klassendefinition. Ein Verweis auf den Namen der Klasse führt zu einem {{jsxref("ReferenceError")}}, weil die Klasse zu diesem Zeitpunkt noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren in diesem Ausdruck wie erwartet.

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name
```

Im Feldinitialisierer verweist [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die gerade erstellte Klasseninstanz und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) auf die `prototype`-Eigenschaft der Basisklasse. Diese enthält die Instanzmethoden der Basisklasse, nicht aber ihre Instanzfelder.

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

Der Ausdruck des Feldinitialisierers wird jedes Mal ausgewertet, wenn eine neue Instanz erstellt wird. (Da sich der `this`-Wert für jede Instanz unterscheidet, kann der Initialisierungsausdruck auf instanzspezifische Eigenschaften zugreifen.)

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

Der Ausdruck wird synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} nicht im Initialisierungsausdruck verwenden. (Stellen Sie sich den Initialisierungsausdruck so vor, als wäre er implizit in eine Funktion eingebettet.)

Da Instanzfelder einer Klasse hinzugefügt werden, bevor der jeweilige Konstruktor ausgeführt wird, können Sie innerhalb des Konstruktors auf ihre Werte zugreifen. Da Instanzfelder einer abgeleiteten Klasse jedoch erst definiert werden, nachdem `super()` zurückgekehrt ist, hat der Konstruktor der Basisklasse keinen Zugriff auf die Felder der abgeleiteten Klasse.

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

Felder werden einzeln hinzugefügt. Feldinitialisierer können auf die Werte darüber deklarierter Felder zugreifen, nicht aber auf die Werte darunter deklarierter Felder. Alle Instanzmethoden und statischen Methoden werden zuvor hinzugefügt und können aufgerufen werden. Wenn sie auf Felder verweisen, die unterhalb des gerade initialisierten Felds deklariert sind, verhalten sie sich dabei möglicherweise nicht wie erwartet.

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
> Bei [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) ist dies besonders wichtig: Der Zugriff auf ein noch nicht initialisiertes privates Feld löst einen {{jsxref("TypeError")}} aus, selbst wenn das private Feld weiter unten deklariert ist. (Ist das private Feld überhaupt nicht deklariert, würde bereits frühzeitig ein {{jsxref("SyntaxError")}} auftreten.)

Da Klassenfelder mit der Semantik von [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) hinzugefügt werden (was im Wesentlichen {{jsxref("Object.defineProperty()")}} entspricht), rufen Felddeklarationen in abgeleiteten Klassen keine Setter der Basisklasse auf. Dieses Verhalten unterscheidet sich von der Verwendung von `this.field = …` im Konstruktor.

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
> Bevor die Spezifikation für Klassenfelder mit der `[[DefineOwnProperty]]`-Semantik fertiggestellt wurde, wandelten die meisten Transpiler, darunter [Babel](https://babeljs.io/) und [tsc](https://www.typescriptlang.org/), Klassenfelder in die Form `DerivedWithConstructor` um. Nach der Standardisierung von Klassenfeldern hat dies zu schwer erkennbaren Fehlern geführt.

## Beispiele

### Klassenfelder verwenden

Klassenfelder können nicht von den Argumenten des Konstruktors abhängen. Daher ergeben Feldinitialisierer in der Regel für jede Instanz denselben Wert (es sei denn, derselbe Ausdruck kann bei jeder Auswertung einen anderen Wert ergeben, etwa {{jsxref("Math.random()")}} oder Objektinitialisierer).

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

Selbst die Deklaration eines leeren Klassenfelds ist jedoch nützlich: Sie zeigt an, dass das Feld existiert. So können sowohl Typprüfprogramme als auch menschliche Leser die Struktur der Klasse statisch analysieren.

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

Der obige Code wirkt repetitiv. Wenn `this` jedoch dynamisch verändert wird, macht die explizite Felddeklaration deutlich, welche Felder auf der Instanz auf jeden Fall vorhanden sein werden.

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

Da Initialisierer erst ausgewertet werden, nachdem die Basisklasse ausgeführt wurde, können Sie auf Eigenschaften zugreifen, die der Konstruktor der Basisklasse erstellt hat.

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

- Leitfaden [Klassen verwenden](/de/docs/Web/JavaScript/Guide/Using_classes)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
- {{jsxref("Statements/class", "class")}}
- [Die Semantik aller JS-Klassenelemente](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Öffentliche und private Klassenfelder](https://v8.dev/features/class-fields) auf v8.dev (2018)
