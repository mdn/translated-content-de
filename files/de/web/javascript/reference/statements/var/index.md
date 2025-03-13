---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`var`** Anweisung deklariert funktions- oder global-skopierte Variablen, optional initialisiert sie jede mit einem Wert.

{{InteractiveExample("JavaScript Demo: var statement")}}

```js interactive-example
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2
```

## Syntax

```js-nolint
var name1;
var name1 = value1;
var name1 = value1, name2 = value2;
var name1, name2 = value2;
var name1 = value1, name2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variable. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variable. Es kann jeder gültige Ausdruck sein. Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `var` deklarierten Variable ist eine der folgenden geschweiften Klammern umschlossenen Syntaxen, die die `var`-Anweisung am genauesten enthält:

- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder falls keiner der obigen Fälle zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code, der im Modus Modul ausgeführt wird
- Der globale Gültigkeitsbereich, für Code, der im Scriptmodus ausgeführt wird.

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

Wichtig ist, dass andere Blockkonstrukte, einschließlich [Block-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, Kopfzeilen einer [der `for` Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), keine Bereiche für `var` erstellen, und Variablen, die innerhalb eines solchen Blocks mit `var` deklariert werden, außerhalb des Blocks weiterhin referenziert werden können.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht konfigurierbare Eigenschaft des globalen Objekts hinzugefügt. Dies bedeutet, dass ihr Eigenschafts-Deskriptor nicht geändert werden kann und sie nicht mit {{jsxref("Operators/delete", "delete")}} gelöscht werden kann. JavaScript hat eine automatische Speicherverwaltung, und es wäre sinnlos, den `delete` Operator auf eine globale Variable anwenden zu können.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

In sowohl NodeJS [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) Modulen als auch nativen [ECMAScript Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind Top-Level-Variablendeklarationen auf das Modul beschränkt und werden nicht als Eigenschaften dem globalen Objekt hinzugefügt.

Die Liste, die dem `var` Schlüsselwort folgt, wird als _{{Glossary("binding", "Bindung")}}-Liste_ bezeichnet und durch Kommas getrennt, wobei die Kommas _nicht_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=` Zeichen _nicht_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen und den initialisierten Wert erhalten.

### Hoisting

`var` Deklarationen, wo auch immer sie in einem Skript vorkommen, werden verarbeitet, bevor der innerhalb des Skripts befindliche Code ausgeführt wird. Eine Variable irgendwo im Code zu deklarieren, ist gleichbedeutend damit, sie oben zu deklarieren. Dies bedeutet auch, dass eine Variable scheinbar verwendet werden kann, bevor sie deklariert ist. Dieses Verhalten wird als {{Glossary("Hoisting", "_Hoisting_")}} bezeichnet, da es scheint, als ob die Variablendeklaration an den Anfang der Funktion, des statischen Initialisierungsblocks oder der Skriptquelle verschoben wird, in der sie vorkommt.

> **Note:** `var` Deklarationen werden nur an den Anfang des aktuellen Skripts gehoben. Wenn Sie zwei `<script>` Elemente innerhalb eines HTML-Dokuments haben, kann das erste Skript nicht auf Variablen zugreifen, die vom zweiten deklariert wurden, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Dies wird implizit verstanden als:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer am Anfang ihres Gültigkeitsbereichs zu deklarieren (am oberen Ende des globalen Codes und am Beginn des Funktionscodes), damit klar ist, welche Variablen dem aktuellen Funktionsbereich zugeordnet sind.

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

### Wiederholte Deklarationen

Doppelte Variablendeklarationen mit `var` führen zu keinem Fehler, selbst im strikten Modus, und die Variable verliert ihren Wert nicht, es sei denn, die Deklaration enthält einen Initialisierer.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var` Deklarationen können auch im gleichen Geltungsbereich wie eine `function` Deklaration erfolgen. In diesem Fall überschreibt der Initialisierer der `var` Deklaration immer den Funktionswert, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor jedem Initialisierer gehoben werden, sodass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var` Deklarationen können sich nicht im gleichen Bereich wie eine {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, oder {{jsxref("Statements/import", "import")}} Deklaration befinden.

```js-nolint example-bad
var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Da `var` Deklarationen nicht auf Blöcke beschränkt sind, gilt dies auch für den folgenden Fall:

```js-nolint example-bad
let a = 1;
{
  var a = 1; // SyntaxError: Identifier 'a' has already been declared
}
```

Es gilt nicht für den folgenden Fall, bei dem `let` sich im untergeordneten Bereich von `var` befindet, nicht im gleichen Bereich:

```js example-good
var a = 1;
{
  let a = 2;
}
```

Eine `var` Deklaration innerhalb eines Funktionskörpers kann denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

Eine `var` Deklaration innerhalb eines `catch` Blocks kann denselben Namen wie der `catch`-gebundene Bezeichner haben, aber nur, wenn die `catch` Bindung ein einfacher Bezeichner und kein Destructuring-Muster ist. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und Sie sollten sich nicht darauf verlassen. In diesem Fall wird die Deklaration außerhalb des `catch` Blocks gehoben, aber ein innerhalb des `catch` Blocks zugewiesener Wert ist außerhalb nicht sichtbar.

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

### Zuweisen von zwei Variablen mit einem einzigen Zeichenfolgenwert

```js
var a = "A";
var b = a;
```

Dies ist gleichbedeutend mit:

```js-nolint
var a, b = a = "A";
```

Achten Sie auf die Reihenfolge:

```js
var x = y,
  y = "A";
console.log(x, y); // undefined A
```

Hier werden `x` und `y` deklariert, bevor irgendein Code ausgeführt wird, aber die Zuweisungen erfolgen später. Zum Zeitpunkt der Auswertung von `x = y` existiert `y`, sodass kein `ReferenceError` ausgelöst wird und sein Wert `undefined` ist. Daher wird `x` der Wert `undefined` zugewiesen. Dann wird `y` der Wert `"A"` zugewiesen.

### Initialisierung mehrerer Variablen

Seien Sie vorsichtig mit der `var x = y = 1` Syntax — `y` wird tatsächlich nicht als Variable deklariert, sodass `y = 1` eine [nicht qualifizierte Bezeichnerzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment) ist, die im nicht-strikten Modus eine globale Variable erstellt.

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

### Implizite Globale und äußerer Funktionsbereich

Variablen, die wie implizite Globale erscheinen, können Verweise auf Variablen in einem äußeren Funktionsbereich sein:

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

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Damit können mehrere Variablen gleichzeitig erstellt werden.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
