---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`var`**-Anweisung deklariert funktions- oder global-gescoped Variablen und initialisiert optional jede mit einem Wert.

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein legaler JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Initialwert der Variablen. Es kann jeder legale Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Geltungsbereich einer mit `var` deklarierten Variablen ist eine der folgenden geschweiften Klammer-Synaxen, die die `var`-Anweisung am engsten einschließt:

- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder, wenn keine der obigen zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules) für Code im Modulmodus
- Der globale Geltungsbereich für Code im Skriptmodus.

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

Wichtig ist, dass andere Blockkonstrukte, einschließlich [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, Header von [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) keine Geltungsbereiche für `var` erstellen, und Variablen, die mit `var` innerhalb eines solchen Blocks deklariert werden, können weiterhin außerhalb des Blocks referenziert werden.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht konfigurierbares Property des globalen Objekts hinzugefügt. Das bedeutet, dass ihr Property-Deskriptor nicht geändert und nicht mit {{jsxref("Operators/delete", "delete")}} gelöscht werden kann. JavaScript hat eine automatische Speicherverwaltung, und es würde keinen Sinn ergeben, den `delete`-Operator auf eine globale Variable anzuwenden.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

In sowohl NodeJS [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) Modulen als auch nativen [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind Top-Level-Variablendeklarationen auf das Modul beschränkt und werden nicht als Eigenschaften zum globalen Objekt hinzugefügt.

Die Liste, die auf das `var`-Schlüsselwort folgt, wird als _{{Glossary("binding", "Bindungsliste")}}_ bezeichnet und durch Kommas getrennt, wobei die Kommas keine [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen keine [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen und deren initialisierten Wert erhalten.

### Hoisting

`var`-Deklarationen, wo immer sie in einem Skript vorkommen, werden verarbeitet, bevor jeglicher Code im Skript ausgeführt wird. Eine Variable an beliebiger Stelle im Code zu deklarieren, ist gleichbedeutend damit, sie oben zu deklarieren. Das bedeutet auch, dass eine Variable scheinbar vor ihrer Deklaration verwendet werden kann. Dieses Verhalten wird {{Glossary("Hoisting", "_Hoisting_")}} genannt, da es scheint, als ob die Variablendeklaration an die Spitze der Funktion, des statistischen Initialisierungsblocks oder des Skript-Quellcodes verschoben wird, in dem sie vorkommt.

> [!NOTE]
> `var`-Deklarationen werden nur an die Spitze des aktuellen Skripts gehoben. Wenn Sie zwei `<script>`-Elemente innerhalb eines HTML-Dokuments haben, kann das erste Skript nicht auf Variablen zugreifen, die vom zweiten deklariert wurden, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Dies wird implizit wie folgt verstanden:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer am Anfang ihres Geltungsbereichs zu deklarieren (am Anfang des globalen Codes und am Anfang des Funktionscodes), damit klar ist, welche Variablen zum aktuellen Funktionsbereich gehören.

Nur die Deklaration einer Variablen wird gehoben, nicht ihre Initialisierung. Die Initialisierung erfolgt erst, wenn die Zuweisung ausgeführt wird. Bis dahin bleibt die Variable `undefined` (aber deklariert):

```js
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

Dies wird implizit wie folgt verstanden:

```js
function doSomething() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}
```

### Neudeklarationen

Doppelte Variablendeklarationen mit `var` lösen keinen Fehler aus, selbst im strengen Modus, und die Variable verliert ihren Wert nicht, es sei denn, die Deklaration hat einen Initialisierer.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var`-Deklarationen können sich auch im gleichen Geltungsbereich wie eine `function`-Deklaration befinden. In diesem Fall überschreibt der Initialisierer der `var`-Deklaration immer den Funktionswert, unabhängig von ihrer relativen Position. Das liegt daran, dass Funktionsdeklarationen vor jedem Initialisierer gehoben werden, sodass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var`-Deklarationen können sich nicht im gleichen Geltungsbereich wie eine {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}} oder {{jsxref("Statements/import", "import")}}-Deklaration befinden.

```js-nolint example-bad
var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Da `var`-Deklarationen nicht an Blöcke gebunden sind, gilt dies auch für folgenden Fall:

```js-nolint example-bad
let a = 1;
{
  var a = 1; // SyntaxError: Identifier 'a' has already been declared
}
```

Es gilt nicht für den folgenden Fall, bei dem `let` in einem untergeordneten Bereich von `var` ist, nicht im gleichen Bereich:

```js example-good
var a = 1;
{
  let a = 2;
}
```

Eine `var`-Deklaration im Funktionskörper kann denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der im `catch`-Block gebundene Bezeichner haben, aber nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein Destructuring-Muster ist. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und sollte nicht darauf vertraut werden. In diesem Fall wird die Deklaration außerhalb des `catch`-Blocks gehoben, aber ein im `catch`-Block zugewiesener Wert ist außerhalb nicht sichtbar.

```js-nolint example-bad
try {
  throw new Error();
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

### Zuweisen von zwei Variablen mit einem einzigen String-Wert

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

Hier werden `x` und `y` deklariert, bevor Code ausgeführt wird, aber die Zuweisungen erfolgen später. Zu dem Zeitpunkt, an dem `x = y` ausgewertet wird, existiert `y` also wird kein `ReferenceError` ausgelöst und sein Wert ist `undefined`. Daher wird `x` der undefined-Wert zugewiesen. Dann erhält `y` den Wert `"A"`.

### Initialisierung mehrerer Variablen

Seien Sie vorsichtig mit der `var x = y = 1`-Syntax — `y` wird nicht tatsächlich als Variable deklariert, daher ist `y = 1` eine [nicht qualifizierte Identifier-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment), die eine globale Variable im nicht-strengen Modus erstellt.

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

Dasselbe Beispiel wie oben, aber im strengen Modus:

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

Variablen, die scheinbar implizite Globale sind, können Referenzen auf Variablen in einem äußeren Funktionsbereich sein:

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

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht die Erstellung mehrerer Variablen auf einmal.

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
