---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`var`**-Anweisung deklariert funktions- oder global-gescoped Variablen und kann jede mit einem Wert initialisieren.

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Der anfängliche Wert der Variablen. Es kann jeder gültige Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Scope einer mit `var` deklarierten Variablen ist eine der folgenden geschweifte-klammer-eingeschlossenen Syntaxstrukturen, die die `var`-Anweisung am nächsten umgibt:

- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keine der oben genannten zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für im Modus Modulen ausgeführte Code
- Der globale Scope, für im Skriptmodus ausgeführten Code.

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

Wichtig ist, dass andere Blockkonstrukte, einschließlich [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, Header von [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), keine Scopes für `var` erstellen, und Variablen, die mit `var` innerhalb eines solchen Blocks deklariert werden, außerhalb des Blocks weiterhin referenziert werden können.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht konfigurierbare Eigenschaft des globalen Objekts hinzugefügt. Das bedeutet, dass ihr Eigenschaftsbeschreiber nicht geändert werden kann und sie nicht mit {{jsxref("delete")}} gelöscht werden kann. JavaScript verfügt über automatische Speicherverwaltung, und es würde keinen Sinn machen, den `delete`-Operator auf eine globale Variable anwenden zu können.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

In sowohl NodeJS [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Modulen als auch nativen [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind Top-Level-Variablendeklarationen auf das Modul beschränkt und werden nicht als Eigenschaften zum globalen Objekt hinzugefügt.

Die Liste, die dem Schlüsselwort `var` folgt, wird als _{{Glossary("binding", "Binding")}}-Liste_ bezeichnet und durch Kommata getrennt, wobei die Kommata _keine_ [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen und den initialisierten Wert erhalten.

### Hoisting

`var`-Deklarationen werden, wo auch immer sie in einem Skript vorkommen, verarbeitet, bevor irgendein Code innerhalb des Skripts ausgeführt wird. Die Deklaration einer Variablen an irgendeiner Stelle im Code entspricht ihrer Deklaration am Anfang. Dies bedeutet auch, dass eine Variable verwendet werden kann, bevor sie deklariert ist. Dieses Verhalten wird als {{Glossary("Hoisting", "_Hoisting_")}} bezeichnet, da es scheint, dass die Variablendeklaration an den Anfang der Funktion, des statischen Initialisierungsblocks oder des Skriptquellcodes, in dem sie auftritt, verschoben wird.

> [!NOTE]
> `var`-Deklarationen werden nur an den Anfang des aktuellen Skripts gehoben. Wenn Sie zwei `<script>`-Elemente innerhalb desselben HTML haben, kann das erste Skript nicht auf Variablen zugreifen, die vom zweiten deklariert wurden, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Das wird implizit verstanden als:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer am Anfang ihres Scopes zu deklarieren (am Anfang des globalen Codes und am Anfang des Funktionscodes), um klarzustellen, welche Variablen zum aktuellen Funktions- oder globalen Scope gehören.

Nur die Deklaration einer Variablen wird gehoben, nicht die Initialisierung. Die Initialisierung erfolgt erst, wenn die Zuweisungsanweisung erreicht wird. Bis dahin bleibt die Variable `undefined` (aber deklariert):

```js
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

Das wird implizit verstanden als:

```js
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

### Erneute Deklarationen

Doppelte Variablendeklarationen mit `var` führen nicht zu einem Fehler, selbst im strikten Modus, und die Variable verliert ihren Wert nicht, es sei denn, die Deklaration hat einen Initialisierer.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var`-Deklarationen können auch im selben Scope wie eine `function`-Deklaration stehen. In diesem Fall überschreibt der Initialisierer der `var`-Deklaration immer den Wert der Funktion, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor jedem Initialisierer gehoben werden, sodass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var`-Deklarationen können nicht im selben Scope wie eine {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}} oder {{jsxref("Statements/import", "import")}}-Deklaration stehen.

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

Es gilt nicht für den folgenden Fall, bei dem `let` sich in einem Kind-Scope von `var` befindet, nicht im selben Scope:

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

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der im `catch` gebundene Bezeichner haben, aber nur, wenn der `catch`-Bezeichner ein einfacher Bezeichner ist, nicht ein Destructuring-Muster. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und sollte nicht darauf vertraut werden. In diesem Fall wird die Deklaration außerhalb des `catch`-Blocks gehoben, aber ein im `catch`-Block zugewiesener Wert ist außerhalb nicht sichtbar.

```js-nolint example-bad
try {
  throw new Error();
} catch (e) {
  var e = 2; // Works
}
console.log(e); // undefined
```

## Beispiele

### Deklaration und Initialisierung zweier Variablen

```js
var a = 0,
  b = 0;
```

### Zuweisung zweier Variablen mit einem einzelnen String-Wert

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

Hier werden `x` und `y` deklariert, bevor irgendein Code ausgeführt wird, aber die Zuweisungen erfolgen später. Zu dem Zeitpunkt, an dem `x = y` ausgewertet wird, existiert `y`, sodass kein `ReferenceError` geworfen wird und sein Wert `undefined` ist. Also wird `x` der undefinierte Wert zugewiesen. Dann wird `y` der Wert `"A"` zugewiesen.

### Initialisierung mehrerer Variablen

Seien Sie vorsichtig mit der Syntax `var x = y = 1` — `y` wird tatsächlich nicht als Variable deklariert, sodass `y = 1` eine [nicht-qualifizierte Bezeichnerzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment) ist, die im nicht-strikten Modus eine globale Variable erstellt.

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

### Implizite Globals und äußerer Funktions-Scope

Variablen, die wie implizite Globals erscheinen, können Referenzen auf Variablen in einem äußeren Funktions-Scope sein:

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

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht das Erstellen mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
