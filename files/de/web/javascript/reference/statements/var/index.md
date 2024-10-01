---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Statements")}}

Die **`var`**-Anweisung deklariert funktions- oder global-gescope Variablen und initialisiert diese optional mit einem Wert.

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
  - : Der Name der zu deklarierenden Variable. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsbindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein. Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `var` deklarierten Variablen ist eine der folgenden geschweifte Klammern einschließenden Syntaxen, die die `var`-Anweisung am nächsten enthält:

- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder, wenn keine der obigen zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code im Modus „Modul“.
- Der globale Gültigkeitsbereich, für Code im Skriptmodus.

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

Wichtig ist, dass andere Blockkonstrukte, einschließlich [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, Überschriften von [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), keine Gültigkeitsbereiche für `var` erstellen und Variablen, die innerhalb eines solchen Blocks mit `var` deklariert werden, weiterhin außerhalb des Blocks referenziert werden können.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht konfigurierbares Property des globalen Objekts hinzugefügt. Das bedeutet, dass der Property-Deskriptor nicht geändert werden kann und sie nicht mit {{jsxref("Operators/delete", "delete")}} gelöscht werden kann. JavaScript verwaltet den Speicher automatisch, und es wäre nicht sinnvoll, den `delete`-Operator auf eine globale Variable anwenden zu können.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

Sowohl in NodeJS-[CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Modulen als auch in nativen [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind oberste Variablendeklarationen auf das Modul beschränkt und werden nicht als Eigenschaften dem globalen Objekt hinzugefügt.

Die Liste, die dem `var`-Schlüsselwort folgt, wird _{{Glossary("binding", "Bindungsliste")}}_ genannt und ist durch Kommas getrennt, wobei die Kommas _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierer späterer Variablen können sich auf frühere Variablen in der Liste beziehen und deren initialisierten Wert erhalten.

### Hoisting

`var`-Deklarationen, wo auch immer sie in einem Skript vorkommen, werden verarbeitet, bevor irgendein Code innerhalb des Skripts ausgeführt wird. Eine Variable irgendwo im Code zu deklarieren, ist gleichbedeutend mit ihrer Deklaration am Anfang. Das bedeutet auch, dass eine Variable scheinbar verwendet werden kann, bevor sie deklariert wird. Dieses Verhalten wird {{Glossary("Hoisting", "_Hoisting_")}} genannt, da es den Anschein hat, dass die Variablendeklaration an den Anfang der Funktion, des statischen Initialisierungsblocks oder des Skriptquellcodes verschoben wird, in dem sie vorkommt.

> **Note:** `var`-Deklarationen werden nur an den Anfang des aktuellen Skripts gehoben. Wenn Sie zwei `<script>`-Elemente innerhalb eines HTML-Dokuments haben, kann das erste Skript nicht auf Variablen, die vom zweiten deklariert wurden, zugreifen, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Dies wird implizit verstanden als:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer am Anfang ihres Gültigkeitsbereichs zu deklarieren (den Anfang des globalen Codes und den Anfang des Funktionscodes), um klarzustellen, welche Variablen dem aktuellen Funktionskontext zugeordnet sind.

Nur die Deklaration einer Variablen wird gehoben, nicht ihre Initialisierung. Die Initialisierung erfolgt nur, wenn die Zuweisungsanweisung erreicht wird. Bis dahin bleibt die Variable `undefined` (aber deklariert):

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

### Neudeklarationen

Doppelte Variablendeklarationen mit `var` verursachen keinen Fehler, selbst im strikten Modus, und die Variable verliert nicht ihren Wert, es sei denn, die Deklaration enthält einen Initialisierer.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var`-Deklarationen können auch im selben Gültigkeitsbereich wie eine `function`-Deklaration erfolgen. In diesem Fall überschreibt der Initialisierer der `var`-Deklaration immer den Wert der Funktion, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor allen Initialisierern evaluiert werden, sodass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var`-Deklarationen können sich nicht im selben Gültigkeitsbereich wie eine {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}} oder {{jsxref("Statements/import", "import")}}-Deklaration befinden.

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

Es gilt nicht für den folgenden Fall, bei dem `let` in einem Kind-Bereich von `var` und nicht im gleichen Gültigkeitsbereich ist:

```js example-good
var a = 1;
{
  let a = 2;
}
```

Eine `var`-Deklaration innerhalb eines Funktionskörpers kann denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der durch `catch` gebundene Bezeichner haben, aber nur, wenn die `catch`-Bindung ein einfacher Bezeichner ist, kein Destrukturierungsmuster. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und Sie sollten sich nicht darauf verlassen. In diesem Fall wird die Deklaration aus dem `catch`-Block hinausgehoben, aber jeder im `catch`-Block zugewiesene Wert ist außerhalb nicht sichtbar.

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

### Zuweisung von zwei Variablen mit einem einzigen Zeichenkettenwert

```js
var a = "A";
var b = a;
```

Dies entspricht:

```js-nolint
var a, b = a = "A";
```

Achten Sie auf die Reihenfolge:

```js
var x = y,
  y = "A";
console.log(x, y); // undefined A
```

Hier werden `x` und `y` deklariert, bevor irgendein Code ausgeführt wird, aber die Zuweisungen erfolgen später. Zum Zeitpunkt der Auswertung von `x = y` existiert `y`, sodass kein `ReferenceError` ausgelöst wird, und sein Wert ist `undefined`. Daher wird `x` der Wert `undefined` zugewiesen. Dann wird `y` der Wert `"A"` zugewiesen.

### Initialisierung mehrerer Variablen

Achten Sie auf die Syntax `var x = y = 1` — `y` wird nicht tatsächlich als Variable deklariert, sodass `y = 1` eine [nicht qualifizierte Bezeichnerzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment) ist, die im nicht strikten Modus eine globale Variable erstellt.

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

Dasselbe Beispiel wie oben, aber im strikten Modus:

```js-nolint
"use strict";

var x = 0;
function f() {
  var x = y = 1; // ReferenceError: y is not defined
}
f();

console.log(x, y);
```

### Implizite globale Variablen und äußerer Funktionsbereich

Variablen, die als implizite globale Variablen erscheinen, können Verweise auf Variablen im äußeren Funktionsbereich sein:

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

### Deklaration mit Destrukturierung

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destrukturierungszuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
