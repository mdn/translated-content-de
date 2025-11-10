---
title: function
slug: Web/JavaScript/Reference/Statements/function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`function`** Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen Funktion mit einem gegebenen Namen.

Sie können Funktionen auch mithilfe des [`function` Ausdrucks](/de/docs/Web/JavaScript/Reference/Operators/function) definieren.

{{InteractiveExample("JavaScript Demo: function declaration", "shorter")}}

```js interactive-example
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// Expected output: 30
```

## Syntax

```js-nolint
function name(param0) {
  statements
}
function name(param0, param1) {
  statements
}
function name(param0, param1, /* …, */ paramN) {
  statements
}
```

### Parameter

- `name`
  - : Der Funktionsname.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Die maximale Anzahl von Argumenten variiert in verschiedenen Engines. Für die Syntax der Parameter siehe die [Referenz für Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Rumpf der Funktion bilden.

## Beschreibung

Eine `function` Deklaration erstellt ein {{jsxref("Function")}} Objekt. Jedes Mal, wenn eine Funktion aufgerufen wird, gibt sie den Wert zurück, der durch die zuletzt ausgeführte {{jsxref("Statements/return", "return")}} Anweisung angegeben wird, oder `undefined`, wenn das Ende des Funktionsrumpfes erreicht ist. Siehe [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für detaillierte Informationen zu Funktionen.

`function` Deklarationen verhalten sich wie eine Mischung aus {{jsxref("Statements/var", "var")}} und {{jsxref("Statements/let", "let")}}:

- Wie `let` sind in strict mode [Funktionen auf den am nächstgelegenen umgebenden Block beschränkt](#block-level_funktion_deklaration).
- Wie `let` können Funktionsdeklarationen auf der obersten Ebene eines Moduls oder innerhalb von Blöcken im strict mode nicht durch eine andere Deklaration [neu deklariert](#neu-deklarationen) werden.
- Wie `var` werden Funktionsdeklarationen auf oberster Ebene eines Skripts (strict oder non-strict) zu Eigenschaften von {{jsxref("globalThis")}}. Funktionsdeklarationen auf oberster Ebene eines Skripts oder Funktionsrumpfes (strict oder non-strict) können durch eine andere `function` oder `var` neu deklariert werden.
- Wie beide können Funktionsdeklarationen neu zugewiesen werden, aber Sie sollten dies vermeiden.
- Im Gegensatz zu beiden werden Funktionsdeklarationen zusammen mit ihrem Wert [gehoben](#hoisting) und können überall in ihrem Gültigkeitsbereich aufgerufen werden.

### Block-level Funktion Deklaration

> [!WARNING]
> Im [Nicht-strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verhalten sich Funktionsdeklarationen innerhalb von Blöcken seltsam. Deklarieren Sie Funktionen innerhalb von Blöcken nur, wenn Sie sich im strict mode befinden.

Funktionen können bedingt deklariert werden – das heißt, eine Funktionsanweisung kann innerhalb einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisung geschachtelt werden. Im Nicht-strict Mode sind die Ergebnisse jedoch inkonsistent zwischen Implementierungen.

```js
console.log(
  `'foo' name ${
    "foo" in globalThis ? "is" : "is not"
  } global. typeof foo is ${typeof foo}`,
);
if (false) {
  function foo() {
    return 1;
  }
}

// In Chrome:
// 'foo' name is global. typeof foo is undefined
//
// In Firefox:
// 'foo' name is global. typeof foo is undefined
//
// In Safari:
// 'foo' name is global. typeof foo is function
```

Die Wirkung auf den Gültigkeitsbereich und das Hoisting ändert sich nicht, unabhängig davon, ob der `if`-Körper tatsächlich ausgeführt wird.

```js
console.log(
  `'foo' name ${
    "foo" in globalThis ? "is" : "is not"
  } global. typeof foo is ${typeof foo}`,
);
if (true) {
  function foo() {
    return 1;
  }
}

// In Chrome:
// 'foo' name is global. typeof foo is undefined
//
// In Firefox:
// 'foo' name is global. typeof foo is undefined
//
// In Safari:
// 'foo' name is global. typeof foo is function
```

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) sind Funktionsdeklarationen auf Blockebene auf diesen Block beschränkt und werden an die Spitze des Blocks gehoben.

```js
"use strict";

{
  foo(); // Logs "foo"
  function foo() {
    console.log("foo");
  }
}

console.log(
  `'foo' name ${
    "foo" in globalThis ? "is" : "is not"
  } global. typeof foo is ${typeof foo}`,
);
// 'foo' name is not global. typeof foo is undefined
```

### Hoisting

Funktionsdeklarationen in JavaScript werden {{Glossary("Hoisting", "an die Spitze des umgebenden Funktions- oder globalen Gültigkeitsbereichs gehoben")}}. Sie können die Funktion verwenden, bevor Sie sie deklariert haben:

```js
hoisted(); // Logs "foo"

function hoisted() {
  console.log("foo");
}
```

Beachten Sie, dass [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) nicht gehoben werden:

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Neu-Deklarationen

Ob `function` Deklarationen im gleichen Gültigkeitsbereich neu deklariert werden können, hängt davon ab, in welchem Gültigkeitsbereich sie enthalten sind.

Auf oberster Ebene eines Skripts verhalten sich `function` Deklarationen wie `var` und können durch eine andere `function` oder `var` neu deklariert werden, aber nicht durch {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, oder {{jsxref("Statements/class", "class")}}.

```js-nolint example-bad
function a(b) {}
function a(b, c) {}
console.log(a.length); // 2
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Wenn `function` Deklarationen durch `var` neu deklariert werden, überschreibt der Initialisierer der `var` Deklaration immer den Funktionswert, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor allen Initialisierern gehoben werden, sodass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

Auf der obersten Ebene des Funktionsrumpfes verhält sich `function` auch wie `var` und kann neu deklariert werden oder denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  function a() {}
  console.log(typeof a);
}

foo(2); // Logs "function"
```

Auf der obersten Ebene eines Moduls oder eines Blocks im strict mode verhalten sich `function` Deklarationen wie `let` und können durch keine andere Deklaration neu deklariert werden.

```js-nolint example-bad
// Assuming current source is a module
function foo() {}
function foo() {} // SyntaxError: Identifier 'foo' has already been declared
```

```js-nolint example-bad
"use strict";
{
  function foo() {}
  function foo() {} // SyntaxError: Identifier 'foo' has already been declared
}
```

Eine `function` Deklaration innerhalb eines `catch` Blocks kann nicht denselben Namen wie der `catch`-gebundene Bezeichner haben, selbst im Nicht-strict Mode.

```js-nolint example-bad
try {
} catch (e) {
  function e() {} // SyntaxError: Identifier 'e' has already been declared
}
```

## Beispiele

### Verwendung von funktion

Der folgende Code deklariert eine Funktion, die den Gesamtbetrag an Verkäufen zurückgibt, wenn die Anzahl der verkauften Einheiten von drei Produkten angegeben ist.

```js
function calcSales(unitsA, unitsB, unitsC) {
  return unitsA * 79 + unitsB * 129 + unitsC * 699;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Function")}}
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
