---
title: function
slug: Web/JavaScript/Reference/Statements/function
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`function`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen Funktion an einen gegebenen Namen.

Sie können Funktionen auch mit dem [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) definieren.

{{InteractiveExample("JavaScript Demo: Statement - Function", "shorter")}}

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
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Die maximale Anzahl von Argumenten variiert in verschiedenen Engines. Für die Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Funktionskörper bilden.

## Beschreibung

Eine `function`-Deklaration erstellt ein {{jsxref("Function")}}-Objekt. Jedes Mal, wenn eine Funktion aufgerufen wird, gibt sie den Wert zurück, der durch die zuletzt ausgeführte {{jsxref("Statements/return", "return")}}-Anweisung angegeben wird, oder `undefined`, wenn das Ende des Funktionskörpers erreicht wird. Detaillierte Informationen zu Funktionen finden Sie unter [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

`function`-Deklarationen verhalten sich wie eine Mischung aus {{jsxref("Statements/var", "var")}} und {{jsxref("Statements/let", "let")}}:

- Ähnlich wie `let` sind [Funktionserklärungen in strict mode auf den nächstgelegenen Block beschränkt](#block-level_function_declaration).
- Ähnlich wie `let` können Funktionsdeklarationen auf der obersten Ebene eines Moduls oder innerhalb von Blöcken im strict mode nicht durch eine andere Deklaration [erneut deklariert](#redeclarations) werden.
- Ähnlich wie `var` werden Funktionsdeklarationen auf der obersten Ebene eines Skripts (strict oder nicht-strict) zu Eigenschaften von {{jsxref("globalThis")}}. Funktionsdeklarationen auf der obersten Ebene eines Skripts oder Funktionskörpers (strict oder nicht-strict) können durch eine andere `function` oder `var` erneut deklariert werden.
- Ähnlich wie bei beiden können Funktionsdeklarationen neu zugewiesen werden. Dies sollte jedoch vermieden werden.
- Im Gegensatz zu beiden werden Funktionsdeklarationen [zusammen mit ihrem Wert gehoben](#hoisting) und können überall in ihrem Bereich aufgerufen werden.

### Block-level Function Declaration

> [!WARNING]
> Im [nicht-strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verhalten sich Funktionsdeklarationen innerhalb von Blöcken merkwürdig. Deklarieren Sie Funktionen nur dann in Blöcken, wenn Sie sich im strict mode befinden.

Funktionen können bedingt deklariert werden – das heißt, eine Funktionsanweisung kann innerhalb einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung verschachtelt werden. Im nicht-strict mode sind die Ergebnisse jedoch zwischen Implementierungen inkonsistent.

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

Die Auswirkungen auf den Scope und das Hoisting ändern sich nicht, unabhängig davon, ob der `if`-Block tatsächlich ausgeführt wird.

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

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) werden [block](/de/docs/Web/JavaScript/Reference/Statements/block)-level Funktionsdeklarationen auf diesen Block beschränkt und an die Spitze des Blocks gehoben.

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

Funktionsdeklarationen in JavaScript werden {{Glossary("Hoisting", "gehoben")}} an die Spitze des umschließenden Funktions- oder globalen Scopes. Sie können die Funktion verwenden, bevor Sie sie deklarieren:

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

### Redeclarations

Ob `function`-Deklarationen im gleichen Scope erneut deklariert werden können, hängt davon ab, in welchem Scope sie enthalten sind.

Auf der obersten Ebene eines Skripts verhalten sich `function`-Deklarationen wie `var` und können durch eine andere `function` oder `var`, jedoch nicht durch {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/class", "class")}} erneut deklariert werden.

```js-nolint example-bad
function a(b) {}
function a(b, c) {}
console.log(a.length); // 2
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Wenn `function`-Deklarationen durch `var` erneut deklariert werden, überschreibt der Initialisierer der `var`-Deklaration immer den Funktionswert, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor der Auswertung des Initialisierers gehoben werden. Der Initialisierer kommt später und überschreibt den Wert.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

Auf Ebene des Funktionskörpers verhalten sich `function`-Deklarationen ebenfalls wie `var` und können erneut deklariert oder denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  function a() {}
  console.log(typeof a);
}

foo(2); // Logs "function"
```

Auf der obersten Ebene eines Moduls oder Blocks im strict mode verhalten sich `function`-Deklarationen wie `let` und können von keiner anderen Deklaration erneut deklariert werden.

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

Eine `function`-Deklaration innerhalb eines `catch`-Blocks darf nicht denselben Namen wie der im `catch`-Block gebundene Bezeichner haben, selbst im nicht-strict mode.

```js-nolint example-bad
try {
} catch (e) {
  function e() {} // SyntaxError: Identifier 'e' has already been declared
}
```

## Beispiele

### Verwendung von function

Der folgende Code deklariert eine Funktion, die die Gesamtsumme der Verkäufe zurückgibt, wenn die Anzahl der verkauften Einheiten von drei Produkten angegeben wird.

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
