---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Statements")}}

Die **`var`** Anweisung deklariert variablen, die entweder funktionsweise oder global sind, und initialisiert jede optional mit einem Wert.

{{EmbedInteractiveExample("pages/js/statement-var.html")}}

## Syntax

```js-nolint
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarienden Variablen. Jede muss ein gültiger JavaScript [Identifier](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN` {{optional_inline}}
  - : Ausgangswert der Variablen. Dies kann jeder gültige Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `var` deklarierten Variablen ist die nächste der folgenden geschweifter-Klammer-Syntaxen, die die `var`-Anweisung enthält:

- Funktionskörper
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keine der oben genannten zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules) im Modus "Modul"
- Der globale Gültigkeitsbereich im Modus "Skript".

```js
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();
```

Wichtig ist, dass andere Block-Konstrukte, einschließlich [Block-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, Header von [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), keine Gültigkeitsbereiche für `var` erstellen, und Variablen, die mit `var` innerhalb eines solchen Blocks deklariert werden, können außerhalb des Blocks referenziert werden.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht konfigurierbares Attribut des globalen Objekts hinzugefügt. Das bedeutet, dass ihr Attribut-Descriptor nicht geändert werden kann und sie nicht mit {{jsxref("Operators/delete", "delete")}} gelöscht werden kann. JavaScript hat eine automatische Speicherverwaltung, und es würde keinen Sinn machen, den `delete`-Operator auf eine globale Variable anwenden zu können.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

In NodeJS [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) Modulen und nativen [ECMAScript Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind Variablendeklarationen auf Modulebene modulgebunden und werden nicht als Attribute des globalen Objekts hinzugefügt.

Die Liste, die nach dem `var`-Schlüsselwort folgt, wird _[Binding-Liste](/de/docs/Glossary/binding)_ genannt und durch Kommata getrennt, wobei die Kommata _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=` Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen und deren initialisierten Wert erhalten.

### Hoisting

`var`-Deklarationen, egal wo sie in einem Skript vorkommen, werden vor jeglichem Code im Skript verarbeitet. Das Deklarieren einer Variablen irgendwo im Code ist gleichbedeutend mit einer Deklaration an der Anfangsstelle. Dies bedeutet auch, dass eine Variable scheinbar verwendet werden kann, bevor sie deklariert ist. Dieses Verhalten wird als [_Hoisting_](/de/docs/Glossary/Hoisting) bezeichnet, da es scheint, als ob die Variablendeklaration an den Anfang der Funktion, des statischen Initialisierungsblocks oder des Skript-Quellcodes verschoben wird, in dem sie vorkommt.

> **Hinweis:** `var`-Deklarationen werden nur an den Anfang des aktuellen Skriptes gehoben. Wenn Sie zwei `<script>`-Elemente innerhalb eines HTML-Dokuments haben, kann das erste Skript nicht auf Variablen zugreifen, die von dem zweiten deklariert wurden, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Dies wird implizit verstanden als:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer am Anfang ihres Gültigkeitsbereichs zu deklarieren (am Anfang des globalen Codes und am Anfang des Funktionscodes), um klarzustellen, welche Variablen dem aktuellen Funktionskontext zugeordnet sind.

Nur die Deklaration einer Variablen wird gehoben, nicht ihre Initialisierung. Die Initialisierung erfolgt erst, wenn die Zuweisungsanweisung erreicht wird. Bis dahin bleibt die Variable `undefined` (aber deklariert):

```js
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

Dies wird implizit verstanden als:

```js
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

### Wiederholte Deklarationen

Doppelte Variablendeklarationen mit `var` lösen keinen Fehler aus, selbst im strikten Modus, und die Variable verliert nicht ihren Wert, es sei denn, die Deklaration hat einen Initialisierer.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var`-Deklarationen können auch im gleichen Gültigkeitsbereich wie eine `function`-Deklaration sein. In diesem Fall überschreibt der Initialisierer der `var`-Deklaration immer den Funktionswert, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor jedem Initialisierer gehoben werden, so dass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var`-Deklarationen können nicht im gleichen Gültigkeitsbereich wie eine {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}} oder {{jsxref("Statements/import", "import")}}-Deklaration sein.

```js-nolint example-bad
var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Da `var`-Deklarationen nicht auf Blöcke beschränkt sind, gilt dies auch für den folgenden Fall:

```js-nolint example-bad
let a = 1;
{
  var a = 1; // SyntaxError: Identifier 'a' has already been declared
}
```

Es gilt nicht für den folgenden Fall, bei dem `let` in einem Kind-Gültigkeitsbereich von `var` ist, nicht im gleichen Gültigkeitsbereich:

```js example-good
var a = 1;
{
  let a = 2;
}
```

Eine `var`-Deklaration innerhalb des Körpers einer Funktion kann denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der im `catch`-Block gebundene Bezeichner haben, aber nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein Destructuring-Muster ist. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und Sie sollten sich nicht darauf verlassen. In diesem Fall wird die Deklaration außerhalb des `catch`-Blocks gehoben, aber jeder im `catch`-Block zugewiesene Wert ist außerhalb nicht sichtbar.

```js-nolint example-bad
try {
  throw 1;
} catch (e) {
  var e = 2; // Works
}
console.log(e); // undefined
```

## Beispiele

### Deklarieren und Initialisieren von zwei Variablen

```js
var a = 0,
  b = 0;
```

### Zuweisung zweier Variablen mit einem einzelnen String-Wert

```js
var a = "A";
var b = a;
```

Dies ist gleichwertig mit:

```js-nolint
var a, b = a = "A";
```

Achten Sie auf die Reihenfolge:

```js
var x = y,
  y = "A";
console.log(x, y); // undefined A
```

Hier werden `x` und `y` deklariert, bevor irgendein Code ausgeführt wird, aber die Zuweisungen erfolgen später. Zu dem Zeitpunkt, an dem `x = y` ausgewertet wird, existiert `y`, sodass kein `ReferenceError` ausgelöst wird und dessen Wert `undefined` ist. Somit wird `x` der Wert `undefined` zugewiesen. Dann wird `y` der Wert `"A"` zugewiesen.

### Initialisierung mehrerer Variablen

Seien Sie aufmerksam auf die Syntax `var x = y = 1` — `y` wird nicht tatsächlich als Variable deklariert, daher ist `y = 1` eine [Qualifizierter Bezeichner-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment), die im nicht-strikten Modus eine globale Variable erstellt.

```js-nolint
var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally.
}
f();

console.log(x, y); // 0 1

// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!
```

Dasselbe Beispiel wie oben aber mit einem strikten Modus:

```js-nolint
"use strict";

var x = 0;
function f() {
  var x = y = 1; // ReferenceError: y is not defined
}
f();

console.log(x, y);
```

### Implizite globale Variablen und äußerer Funktionsumfang

Variablen, die scheinbar implizite globale Variablen sind, können Referenzen auf Variablen in einem äußeren Funktionsbereich sein:

```js
var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
    // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z); // 3 5
console.log(typeof y); // "undefined", as y is local to function a
```

### Deklaration mit Destructuring

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht es, mehrere Variablen auf einmal zu erstellen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
