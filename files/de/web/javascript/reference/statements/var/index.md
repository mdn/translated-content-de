---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: ae58f6ba0c0413fcf65b7aac854b4680faaeb619
---

Die **`var`**-Anweisung deklariert variablen mit Funktions- oder globalem Geltungsbereich und initialisiert optional jede mit einem Wert.

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
  - : Der Name der zu deklarierenden Variablen. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN` {{optional_inline}}
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein. Standardwert ist `undefined`.

## Beschreibung

Der Geltungsbereich einer mit `var` deklarierten Variablen ist eine der folgenden geschweift-klammer-umgebenen Strukturen, die die `var`-Anweisung am engsten umfasst:

- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder wenn nichts davon zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules), für Code im Modul-Modus
- Der globale Geltungsbereich, für Code im Skript-Modus.

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

Wichtig ist, dass andere Blockkonstrukte, einschließlich [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, sowie die Köpfe von [einer der `for`-Schleifenanweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations) keine Geltungsbereiche für `var` erstellen, und dass Variablen, die mit `var` innerhalb eines solchen Blocks deklariert werden, weiterhin außerhalb des Blocks referenziert werden können.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht konfigurierbare Eigenschaft des globalen Objekts hinzugefügt. Das bedeutet, dass der Eigenschafts-Deskriptor nicht geändert werden kann und dass sie nicht mit {{jsxref("delete")}} gelöscht werden kann. JavaScript verfügt über eine automatische Speicherverwaltung, und es wäre sinnlos, den `delete`-Operator auf eine globale Variable anwenden zu können.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

In sowohl NodeJS [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Modulen als auch nativen [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind top-level Variablendeklarationen auf das Modul angewiesen und werden nicht als Eigenschaften des globalen Objekts hinzugefügt.

Die Liste, die dem `var`-Schlüsselwort folgt, wird _{{Glossary("binding", "Bindung")}}-Liste_ genannt und durch Kommata getrennt, wobei die Kommata _keine_ [Kommaoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) sind und die `=`-Zeichen _keine_ [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment) sind. Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen und den initialisierten Wert erhalten.

### Hoisting

`var`-Deklarierungen werden, egal wo sie in einem Skript auftreten, verarbeitet, bevor irgendein Code im Skript ausgeführt wird. Wenn eine Variable irgendwo im Code deklariert wird, ist das gleichbedeutend damit, sie am Anfang zu deklarieren. Das bedeutet auch, dass eine Variable scheinbar verwendet werden kann, bevor sie deklariert ist. Dieses Verhalten wird _{{Glossary("Hoisting", "Hoisting")}}_ genannt, da es scheint, als ob die Variablendeklaration an den Anfang der Funktion, des statischen Initialisierungsblocks oder des Skriptquelltexts, in dem sie vorkommt, verschoben wird.

> [!NOTE]
> `var`-Deklarierungen werden nur an die Spitze des aktuellen Skripts verschoben. Wenn Sie zwei `<script>`-Elemente innerhalb eines HTML-Dokuments haben, kann das erste Skript nicht auf Variablen des zweiten Skripts zugreifen, bevor das zweite Skript verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Dies wird implizit verstanden als:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer am Anfang ihres Geltungsbereichs zu deklarieren (am Anfang des globalen Codes und am Anfang des Funktionscodes), um klarzustellen, welche Variablen im aktuellen Funktionsbereich festgelegt sind.

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

### Mehrfachdeklarationen

Mehrfache Variablendeklarationen mit `var` lösen keinen Fehler aus, auch nicht im strikten Modus, und die Variable verliert ihren Wert nicht, es sei denn, die Deklaration hat einen Initialisierer.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var`-Deklarationen können auch im selben Geltungsbereich wie eine `function`-Deklaration vorkommen. Sowohl die Funktionsdeklaration als auch die `var`-Deklaration werden an die Spitze verschoben, sodass der Funktionswert nur vom Anfang seines Geltungsbereichs bis zum Initialisierer oder der ersten Zuweisung der Variable zugänglich ist, unabhängig von den relativen Positionen der beiden Deklarationen im Quellcode.

```js
console.log(typeof a); // "function"
function a() {}
var a;
console.log(typeof a); // "function"
```

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var`-Deklarationen können nicht im selben Geltungsbereich wie eine {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, oder {{jsxref("Statements/import", "import")}}-Deklaration sein.

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

Es gilt nicht für den folgenden Fall, bei dem `let` in einem Kindbereich von `var` und nicht im selben Bereich ist:

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

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der im `catch` gebundene Bezeichner haben, jedoch nur, wenn die `catch`-Bindung ein einfacher Bezeichner und kein Destrukturierungsmuster ist. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und sollte nicht darauf vertraut werden. In diesem Fall wird die Deklaration nach außerhalb des `catch`-Blocks gehoben, aber ein innerhalb des `catch`-Blocks zugewiesener Wert ist außerhalb nicht sichtbar.

```js-nolint example-bad
try {
  throw new Error();
} catch (e) {
  var e = 2; // Works
}
console.log(e); // undefined
```

## Beispiele

### Deklarieren und Initialisieren zweier Variablen

```js
var a = 0,
  b = 0;
```

### Zuweisen zweier Variablen mit einem einzigen String-Wert

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

Hier werden `x` und `y` deklariert, bevor irgendein Code ausgeführt wird, aber die Zuweisungen erfolgen später. Zu dem Zeitpunkt, an dem `x = y` ausgewertet wird, existiert `y`, sodass kein `ReferenceError` ausgelöst wird und sein Wert `undefined` ist. Somit wird `x` der undefined-Wert zugewiesen. Dann wird `y` der Wert `"A"` zugewiesen.

### Initialisierung mehrerer Variablen

Achten Sie auf die Syntax `var x = y = 1` — `y` wird tatsächlich nicht als Variable deklariert, daher ist `y = 1` eine [unangeschlossene Bezeichnerzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment), die im nicht-strikten Modus eine globale Variable erstellt.

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

Dasselbe Beispiel wie oben, jedoch im strikten Modus:

```js-nolint
"use strict";

var x = 0;
function f() {
  var x = y = 1; // ReferenceError: y is not defined
}
f();

console.log(x, y);
```

### Implizite Globals und äußerer Funktionsbereich

Variablen, die wie implizite Globals erscheinen, können Verweise auf Variablen in einem äußeren Funktionsbereich sein:

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

Für weitere Informationen siehe [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
