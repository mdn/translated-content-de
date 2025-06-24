---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Statements")}}

Die **`var`** Anweisung deklariert funktions- oder global-skopierte Variablen und initialisiert optional jede mit einem Wert.

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Zerstörungsschema](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Er kann jeder gültige Ausdruck sein. Standardwert ist `undefined`.

## Beschreibung

Der Geltungsbereich einer Variablen, die mit `var` deklariert wird, ist eine der folgenden geschweiften Klammern, die die `var`-Anweisung am nächsten enthalten:

- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn keines der oben genannten zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code, der im Modulmodus ausgeführt wird
- Der globale Geltungsbereich, für Code, der im Skriptmodus ausgeführt wird.

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

Wichtig ist, dass andere Blockkonstrukte, einschließlich [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, die Köpfe von [einer der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), keine Geltungsbereiche für `var` schaffen, und Variablen, die mit `var` innerhalb eines solchen Blocks deklariert werden, können weiterhin außerhalb des Blocks referenziert werden.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht konfigurierbares Property des globalen Objekts hinzugefügt. Das bedeutet, dass ihr Property-Descriptor nicht geändert werden kann und sie nicht mit {{jsxref("Operators/delete", "delete")}} gelöscht werden kann. JavaScript hat automatische Speicherverwaltung, und es würde keinen Sinn machen, den `delete`-Operator auf eine globale Variable anwenden zu können.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

In sowohl NodeJS [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Modulen als auch nativen [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind Top-Level-Variablendeklarationen auf das Modul beschränkt und werden nicht als Properties zum globalen Objekt hinzugefügt.

Die Liste, die dem `var`-Schlüsselwort folgt, wird als _{{Glossary("binding", "binding")}}-Liste_ bezeichnet und wird durch Kommas getrennt, wobei die Kommas _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen und den initialisierten Wert erhalten.

### Hoisting

`var`-Deklarationen, wo auch immer sie in einem Skript vorkommen, werden verarbeitet, bevor jeglicher Code innerhalb des Skripts ausgeführt wird. Das Deklarieren einer Variablen irgendwo im Code entspricht dem Deklarieren am Anfang. Das bedeutet auch, dass eine Variable verwendet zu werden scheint, bevor sie deklariert wird. Dieses Verhalten wird als {{Glossary("Hoisting", "_Hoisting_")}} bezeichnet, da es scheint, als ob die Variablendeklaration an den Anfang der Funktion, des statischen Initialisierungsblocks oder des Skripttexts, in dem sie vorkommt, verschoben wird.

> [!NOTE] > `var`-Deklarationen werden nur an den Anfang des aktuellen Skripts "hochgehoben". Wenn Sie zwei `<script>`-Elemente innerhalb eines HTMLs haben, kann das erste Skript nicht auf Variablen zugreifen, die vom zweiten deklariert werden, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Dies wird implizit verstanden als:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer am Anfang ihres Geltungsbereichs (am Anfang des globalen Codes und am Anfang des Funktionscodes) zu deklarieren, damit klar ist, welche Variablen dem aktuellen Funktionsbereich zugeordnet sind.

Nur die Deklaration einer Variablen wird hochgehoben, nicht ihre Initialisierung. Die Initialisierung erfolgt nur, wenn die Zuweisungsanweisung erreicht wird. Bis dahin bleibt die Variable `undefined` (aber deklariert):

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

### Wiederdeklarationen

Doppelte Variablendeklarationen mit `var` führen nicht zu einem Fehler, selbst im strikten Modus, und die Variable verliert ihren Wert nicht, es sei denn, die Deklaration hat eine Initialisierung.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var`-Deklarationen können sich auch im selben Umfang einer `function`-Deklaration befinden. In diesem Fall überschreibt der Initialisierer der `var`-Deklaration immer den Funktionswert, unabhängig von ihrer relativen Position. Das liegt daran, dass Funktionsdeklarationen hochgehoben werden, bevor ein Initialisierer ausgewertet wird, sodass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var`-Deklarationen können sich nicht im selben Umfang wie eine {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, oder {{jsxref("Statements/import", "import")}}-Deklaration befinden.

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

Es gilt nicht für den folgenden Fall, in dem `let` in einem Unterbereich von `var` ist, nicht derselbe Bereich:

```js example-good
var a = 1;
{
  let a = 2;
}
```

Eine `var`-Deklaration innerhalb eines Funktionskörpers kann denselben Namen haben wie ein Parameter.

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der `catch`-gebundene Bezeichner haben, allerdings nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein Destrukturierungsmuster ist. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und Sie sollten sich nicht darauf verlassen. In diesem Fall wird die Deklaration außerhalb des `catch`-Blocks hochgehoben, aber ein innerhalb des `catch`-Blocks zugewiesener Wert ist außerhalb nicht sichtbar.

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

### Zuweisen von zwei Variablen mit einem einzigen Zeichenkettenwert

```js
var a = "A";
var b = a;
```

Das ist gleichbedeutend mit:

```js-nolint
var a, b = a = "A";
```

Seien Sie aufmerksam auf die Reihenfolge:

```js
var x = y,
  y = "A";
console.log(x, y); // undefined A
```

Hier werden `x` und `y` deklariert, bevor ein Code ausgeführt wird, aber die Zuweisungen erfolgen später. Zu dem Zeitpunkt, an dem `x = y` ausgewertet wird, existiert `y`, sodass kein `ReferenceError` ausgelöst wird und sein Wert `undefined` ist. So wird `x` der Wert `undefined` zugewiesen. Dann wird `y` der Wert `"A"` zugewiesen.

### Initialisierung mehrerer Variablen

Achten Sie auf die Syntax `var x = y = 1` - `y` wird nicht tatsächlich als Variable deklariert, sodass `y = 1` eine [nicht qualifizierte Bezeichnerzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment) ist, die im nicht-strikten Modus eine globale Variable erstellt.

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

Dasselbe Beispiel wie oben, aber mit einem strikten Modus:

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

Variablen, die als implizite globale Variablen erscheinen, können Referenzen auf Variablen im äußeren Funktionsbereich sein:

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

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein. Dies ermöglicht die Erstellung mehrerer Variablen auf einmal.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Für weitere Informationen siehe [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
