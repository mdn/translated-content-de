---
title: Funktion
slug: Web/JavaScript/Reference/Statements/function
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`function`**-Deklaration erstellt eine neue {{Glossary("binding", "Bindung")}} einer Funktion mit einem gegebenen Namen.

Sie können auch Funktionen mit dem [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) definieren.

{{EmbedInteractiveExample("pages/js/statement-function.html", "shorter")}}

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
  - : Der Name eines formalen Parameters der Funktion. Die maximale Anzahl von Argumenten variiert in verschiedenen Engines. Zur Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Eine `function`-Deklaration erstellt ein {{jsxref("Function")}}-Objekt. Jedes Mal, wenn eine Funktion aufgerufen wird, gibt sie den Wert zurück, der durch die letzte ausgeführte {{jsxref("Statements/return", "return")}}-Anweisung angegeben ist, oder `undefined`, wenn das Ende des Funktionskörpers erreicht ist. Weitere Informationen zu Funktionen finden Sie unter [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

`function`-Deklarationen verhalten sich wie eine Mischung aus {{jsxref("Statements/var", "var")}} und {{jsxref("Statements/let", "let")}}:

- Wie `let` sind [Funktionsdeklarationen im strikten Modus auf den engsten umgebenden Block beschränkt](#block-level-funktionsdeklaration).
- Wie `let` können Funktionsdeklarationen auf der obersten Ebene eines Moduls oder innerhalb von Blöcken im strikten Modus nicht durch eine andere Deklaration [neu deklariert](#redeclarations) werden.
- Wie `var` werden Funktionsdeklarationen auf oberster Ebene eines Skripts (streng oder nicht streng) zu Eigenschaften auf {{jsxref("globalThis")}}. Funktionsdeklarationen auf der obersten Ebene eines Skripts oder Funktionskörpers (streng oder nicht streng) können durch eine andere `function` oder `var` neu deklariert werden.
- Wie beide, können Funktionsdeklarationen neu zugeordnet werden, aber Sie sollten dies vermeiden.
- Im Gegensatz zu beiden werden Funktionsdeklarationen [gehoben](#hoisting) zusammen mit ihrem Wert und können überall in ihrem Geltungsbereich aufgerufen werden.

### Block-Level-Funktionsdeklaration

> [!WARNING]
> Im [nicht strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) verhalten sich Funktionsdeklarationen innerhalb von Blöcken seltsam. Deklarieren Sie Funktionen in Blöcken nur, wenn Sie sich im strikten Modus befinden.

Funktionen können bedingt deklariert werden – das heißt, eine Funktionsanweisung kann innerhalb einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung geschachtelt werden. Allerdings sind im nicht strikten Modus die Ergebnisse in verschiedenen Implementierungen inkonsistent.

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

Der Geltungsbereich und der Hoisting-Effekt ändern sich nicht, unabhängig davon, ob der `if`-Block tatsächlich ausgeführt wird oder nicht.

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

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Level-Funktionsdeklarationen auf diesen Block begrenzt und werden an den Anfang des Blocks gehoben.

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

Funktionsdeklarationen in JavaScript werden [gehoben](/de/docs/Glossary/Hoisting) an den Anfang des umschließenden Funktions- oder globalen Geltungsbereichs. Sie können die Funktion verwenden, bevor Sie sie deklarieren:

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

Ob `function`-Deklarationen im gleichen Geltungsbereich neu deklariert werden können, hängt davon ab, in welchem Geltungsbereich sie enthalten sind.

Auf der obersten Ebene eines Skripts verhalten sich `function`-Deklarationen wie `var` und können durch eine andere `function` oder `var`, aber nicht durch {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/class", "class")}} neu deklariert werden.

```js-nolint example-bad
function a(b) {}
function a(b, c) {}
console.log(a.length); // 2
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Wenn `function`-Deklarationen durch `var` neu deklariert werden, überschreibt der Initialisierer der `var`-Deklaration immer den Wert der Funktion, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor jeder Initialisierung gehoben werden, sodass die Initialisierung später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

Auf der obersten Ebene eines Funktionskörpers verhält sich `function` auch wie `var` und kann neu deklariert werden oder denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  function a() {}
  console.log(typeof a);
}

foo(2); // Logs "function"
```

Auf der obersten Ebene eines Moduls oder eines Blocks im strengen Modus verhalten sich `function`-Deklarationen wie `let` und können durch keine andere Deklaration neu deklariert werden.

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

Eine `function`-Deklaration innerhalb eines `catch`-Blocks kann nicht denselben Namen wie der `catch`-gebundene Bezeichner haben, auch nicht im nicht-strikten Modus.

```js-nolint example-bad
try {
} catch (e) {
  function e() {} // SyntaxError: Identifier 'e' has already been declared
}
```

## Beispiele

### Verwendung von Funktionen

Der folgende Code deklariert eine Funktion, die den Gesamtbetrag der Verkäufe zurückgibt, wenn die Anzahl der verkauften Einheiten von drei Produkten angegeben wird.

```js
function calcSales(unitsA, unitsB, unitsC) {
  return unitsA * 79 + unitsB * 129 + unitsC * 699;
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Function")}}
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
