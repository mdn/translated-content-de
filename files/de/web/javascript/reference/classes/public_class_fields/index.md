---
title: Öffentliche Klassenfelder
slug: Web/JavaScript/Reference/Classes/Public_class_fields
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Classes")}}

**Öffentliche Felder** sind schreibbare, aufzählbare und konfigurierbare Eigenschaften, die auf jeder Klasseninstanz oder dem Klassenkonstruktor definiert sind.

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
- Der Name eines Klassenfeldes (statisch oder Instanz) kann nicht `constructor` sein.

## Beschreibung

Diese Seite stellt öffentliche Instanzfelder im Detail vor.

- Für öffentliche statische Felder siehe [`static`](/de/docs/Web/JavaScript/Reference/Classes/static).
- Für private Felder siehe [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).
- Für öffentliche Methoden siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).
- Für öffentliche Accessoren siehe [getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [setter](/de/docs/Web/JavaScript/Reference/Functions/set).

Öffentliche Instanzfelder existieren in jeder erstellten Instanz einer Klasse. Durch das Deklarieren eines öffentlichen Feldes können Sie sicherstellen, dass das Feld immer vorhanden ist, und die Klassendefinition ist selbstdokumentierender.

Öffentliche Instanzfelder werden der Instanz entweder zur Konstruktion in der Basisklasse (bevor der Konstruktorkörper ausgeführt wird) oder unmittelbar nach der Rückkehr von `super()` in einer Unterklasse hinzugefügt. Felder ohne Initialisierungen werden auf `undefined` initialisiert. Wie Eigenschaften können auch Feldnamen berechnet werden.

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

Berechnete Feldnamen werden nur einmal ausgewertet, zum [Zeitpunkt der Klassendefinition](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order). Das bedeutet, dass jede Klasse immer einen festen Satz von Feldnamen hat und zwei Instanzen nicht über verschiedene Feldnamen via berechnete Namen verfügen können. Der `this`-Wert im berechneten Ausdruck ist das `this`, das die Klassendefinition umgibt, und ein Bezug auf den Namen der Klasse führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren wie erwartet in diesem Ausdruck.

```js
class C {
  [Math.random()] = 1;
}

console.log(new C());
console.log(new C());
// Both instances have the same field name
```

Im Feldinitializer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die im Bau befindliche Klasseninstanz, und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf die `prototype`-Eigenschaft der Basisklasse, die die Instanzmethoden der Basisklasse enthält, jedoch nicht deren Instanzfelder.

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

Der Ausdruck des Feldinitialisierers wird jedes Mal ausgewertet, wenn eine neue Instanz erstellt wird. (Da der `this`-Wert für jede Instanz unterschiedlich ist, kann der Initialisierausdruck auf instanzspezifische Eigenschaften zugreifen.)

```js
class C {
  obj = {};
}

const instance1 = new C();
const instance2 = new C();
console.log(instance1.obj === instance2.obj); // false
```

Der Ausdruck wird synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} im Initialisierausdruck nicht verwenden. (Betrachten Sie den Initialisierausdruck als implizit in einer Funktion verpackt.)

Da Instanzfelder einer Klasse hinzugefügt werden, bevor der jeweilige Konstruktor ausgeführt wird, können Sie die Werte der Felder im Konstruktor abrufen. Da jedoch Instanzfelder einer abgeleiteten Klasse nach der Rückkehr von `super()` definiert werden, hat der Konstruktor der Basisklasse keinen Zugriff auf die Felder der abgeleiteten Klasse.

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

Felder werden nacheinander hinzugefügt. Feldinitialisierer können auf Feldwerte oberhalb verweisen, aber nicht darunter. Alle Instanz- und statischen Methoden werden im Voraus hinzugefügt und können zugegriffen werden, obwohl der Aufruf möglicherweise nicht wie erwartet funktioniert, wenn sie auf Felder verweisen, die unterhalb des initialisierten Feldes liegen.

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
> Dies ist wichtiger bei [privaten Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} auslöst, auch wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, wäre es ein früherer {{jsxref("SyntaxError")}}.)

Da Klassenfelder unter Verwendung der [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) Semantik (was im Wesentlichen {{jsxref("Object.defineProperty()")}} entspricht) hinzugefügt werden, rufen Felddeklarationen in abgeleiteten Klassen keine Setter in der Basisklasse auf. Dieses Verhalten unterscheidet sich von der Verwendung von `this.field = …` im Konstruktor.

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
> Bevor die Klassenspezifikation mit der `[[DefineOwnProperty]]` Semantik abgeschlossen wurde, haben die meisten Transpiler, einschließlich [Babel](https://babeljs.io/) und [tsc](https://www.typescriptlang.org/), Klassenfelder in die `DerivedWithConstructor` Form umgewandelt, was nach der Standardisierung der Klassenfelder subtile Fehler verursacht hat.

## Beispiele

### Verwendung von Klassenfeldern

Klassenfelder können nicht von den Argumenten des Konstruktors abhängen, sodass Feldinitialisierer normalerweise für jede Instanz denselben Wert ergeben (es sei denn, derselbe Ausdruck kann jedes Mal zu unterschiedlichen Werten ausgewertet werden, wie {{jsxref("Math.random()")}} oder Objektinitialisierer).

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

Jedoch ist sogar die Deklaration eines leeren Klassenfeldes vorteilhaft, da sie die Existenz des Feldes anzeigt, was es Typ-Prüfern sowie menschlichen Lesern ermöglicht, die Form der Klasse statisch zu analysieren.

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

Der obige Code scheint repetitiv, aber beachten Sie den Fall, in dem `this` dynamisch verändert wird: Die explizite Felddeklaration macht deutlich, welche Felder definitiv auf der Instanz vorhanden sein werden.

```js
class Person {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}
```

Da Initialisierer nach der Ausführung der Basisklasse ausgewertet werden, können Sie auf Eigenschaften zugreifen, die vom Konstruktor der Basisklasse erstellt wurden.

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
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
- {{jsxref("Statements/class", "class")}}
- [The semantics of all JS class elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html) von Shu-yu Guo (2018)
- [Public and private class fields](https://v8.dev/features/class-fields) auf v8.dev (2018)
