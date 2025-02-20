---
title: var
slug: Web/JavaScript/Reference/Statements/var
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`var`**-Anweisung deklariert funktions- oder global-scopierte Variablen und kann optional jeder Variablen einen Wert zuweisen.

{{InteractiveExample("JavaScript Demo: Statement - Var")}}

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
  - : Der Name der deklarierten Variable. Jeder muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) sein.
- `valueN` {{optional_inline}}
  - : Der Initialwert der Variablen. Dies kann jeder gültige Ausdruck sein. Der Standardwert ist `undefined`.

## Beschreibung

Der Gültigkeitsbereich einer mit `var` deklarierten Variable befindet sich im am nächsten liegenden, geschweiften Klammern eingeschlossenen Syntaxblock, der die `var`-Anweisung enthält:

- Funktionskörper
- [Statischer Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

Oder, wenn keines der obigen Szenarien zutrifft:

- Das aktuelle [Modul](/de/docs/Web/JavaScript/Guide/Modules) im Modus "Modulverarbeitung".
- Der globale Gültigkeitsbereich im Modus "Skriptverarbeitung".

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

Wichtig: Andere Blockkonstrukte, einschließlich [Blockanweisungen](/de/docs/Web/JavaScript/Reference/Statements/block), {{jsxref("Statements/try...catch", "try...catch")}}, {{jsxref("Statements/switch", "switch")}}, Kopfzeilen einer [der `for`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements#iterations), schaffen keinen neuen Gültigkeitsbereich für `var`. Variablen, die mit `var` innerhalb eines solchen Blocks deklariert wurden, können weiterhin außerhalb des Blocks referenziert werden.

```js
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In einem Skript wird eine mit `var` deklarierte Variable als nicht konfigurierbare Eigenschaft des globalen Objekts hinzugefügt. Dies bedeutet, dass ihr Eigenschaftsbeschreiber nicht geändert werden kann und sie nicht mit {{jsxref("Operators/delete", "delete")}} gelöscht werden kann. JavaScript verfügt über eine automatische Speicherverwaltung, und es würde keinen Sinn ergeben, den `delete`-Operator auf eine globale Variable anzuwenden.

```js-nolint example-bad
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

In sowohl NodeJS [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Modulen als auch in nativen [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) sind Variablen, die auf oberster Ebene deklariert werden, auf das Modul beschränkt und werden nicht als Eigenschaften des globalen Objekts hinzugefügt.

Die Liste, die dem Schlüsselwort `var` folgt, wird _{{Glossary("binding", "Bindungsliste")}}_ genannt und ist durch Kommata getrennt. Diese Kommata sind keine [Komma-Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator), und die `=`-Zeichen sind keine [Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Assignment). Die Initialisierungen späterer Variablen können sich auf frühere Variablen in der Liste beziehen und deren initialisierten Wert erhalten.

### Hoisting

`var`-Deklarationen, egal an welcher Stelle sie in einem Skript auftreten, werden verarbeitet, bevor einer der Skriptinhalte ausgeführt wird. Das Deklarieren einer Variablen irgendwo im Code ist gleichbedeutend mit dem Deklarieren dieser Variablen am Anfang. Dies bedeutet auch, dass eine Variable scheinbar verwendet werden kann, bevor sie deklariert wurde. Dieses Verhalten wird {{Glossary("Hoisting", "_Hoisting_")}} genannt, da es so erscheint, als ob die Deklaration der Variablen an die Spitze der Funktion, des statischen Initialisierungsblocks oder der Skriptquelle verschoben wurde, in dem sie steht.

> **Hinweis:** `var`-Deklarationen werden nur bis an die Spitze des aktuellen Skripts "gehoisted". Wenn es zwei `<script>`-Elemente innerhalb einer einzigen HTML gibt, kann das erste Skript nicht auf Variablen zugreifen, die vom zweiten definiert wurden, bevor das zweite verarbeitet und ausgeführt wurde.

```js
bla = 2;
var bla;
```

Dies wird implizit wie folgt verstanden:

```js
var bla;
bla = 2;
```

Aus diesem Grund wird empfohlen, Variablen immer am Anfang ihres Gültigkeitsbereichs (am Anfang des globalen Codes oder oben in Funktionsblöcken) zu deklarieren, damit klar ist, welche Variablen auf die aktuelle Funktion beschränkt sind.

Nur die Deklaration der Variable wird hochgezogen, nicht ihre Initialisierung. Die Initialisierung erfolgt nur, wenn die Zuweisungsanweisung erreicht wird. Bis zu diesem Zeitpunkt bleibt die Variable `undefined` (aber deklariert):

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

### Wiederholte Deklarationen

Doppelte Deklarationen mit `var` lösen keinen Fehler aus, auch nicht im Strict-Modus. Die Variable verliert ihren Wert nicht, es sei denn, die Deklaration enthält eine Initialisierung.

```js
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

`var`-Deklarationen können auch im gleichen Gültigkeitsbereich wie eine `function`-Deklaration vorkommen. In diesem Fall überschreibt die Initialisierung der `var`-Deklaration immer den Funktionswert, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor der Bewertung jeglicher Initialisierer gehoben werden, sodass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

`var`-Deklarationen können nicht im gleichen Gültigkeitsbereich wie {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}} oder {{jsxref("Statements/import", "import")}} existieren.

```js-nolint example-bad
var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Weil `var`-Deklarationen nicht auf Blöcke beschränkt sind, gilt dies auch für folgende Fälle:

```js-nolint example-bad
let a = 1;
{
  var a = 1; // SyntaxError: Identifier 'a' has already been declared
}
```

Es gilt jedoch nicht für den folgenden Fall, bei dem `let` in einem untergeordneten Bereich von `var` und nicht im gleichen Gültigkeitsbereich liegt:

```js example-good
var a = 1;
{
  let a = 2;
}
```

Eine `var`-Deklaration innerhalb des Funktionskörpers kann denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

Eine `var`-Deklaration innerhalb eines `catch`-Blocks kann denselben Namen wie der im `catch` gebundene Bezeichner haben, aber nur, wenn die `catch`-Bindung ein einfacher Bezeichner ist und kein Destructuring-Muster. Dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements) und sollte nicht verwendet werden. In diesem Fall wird die Deklaration außerhalb des `catch`-Blocks angehoben, aber ein innerhalb des `catch`-Blocks zugewiesener Wert ist außerhalb nicht sichtbar.

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

### Zuweisung von zwei Variablen mit einer einzelnen Zeichenfolge

```js
var a = "A";
var b = a;
```

Das entspricht:

```js-nolint
var a, b = a = "A";
```

Achten Sie auf die Reihenfolge:

```js
var x = y,
  y = "A";
console.log(x, y); // undefined A
```

Hier werden `x` und `y` deklariert, bevor irgendein Code ausgeführt wird, aber die Zuweisungen erfolgen später. Zu dem Zeitpunkt, an dem `x = y` ausgewertet wird, existiert `y`, sodass kein `ReferenceError` ausgelöst wird, aber sein Wert ist `undefined`. Daher erhält `x` den Wert `undefined`. Danach wird `y` der Wert `"A"` zugewiesen.

### Initialisieren mehrerer Variablen

Seien Sie vorsichtig mit der Syntax `var x = y = 1` – `y` wird dabei nicht tatsächlich als Variable deklariert. `y = 1` stellt eine [nicht qualifizierte Bezeichnerzuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment#unqualified_identifier_assignment) dar, die im Nicht-Strict-Modus eine globale Variable erstellt.

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

Das gleiche Beispiel, aber im Strict-Modus:

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

Variablen, die wie implizite globale Variablen erscheinen, könnten Referenzen auf Variablen im äußeren Funktionsbereich sein:

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

### Deklarationen mit Destructuring

Die linke Seite jedes `=` kann auch ein Bindungsmuster sein, was ermöglicht, mehrere Variablen gleichzeitig zu erstellen.

```js
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```

Weitere Informationen finden Sie unter [Destructuring assignment](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
