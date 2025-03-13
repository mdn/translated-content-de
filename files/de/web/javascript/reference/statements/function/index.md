---
title: function
slug: Web/JavaScript/Reference/Statements/function
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`function`**-Deklaration erstellt eine {{Glossary("binding", "Binding")}} einer neuen Funktion mit einem gegebenen Namen.

Sie können Funktionen auch mit dem [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) definieren.

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
  - : Der Name eines formalen Parameters der Funktion. Die maximale Anzahl von Argumenten variiert in den verschiedenen Engines. Für die Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Rumpf der Funktion bilden.

## Beschreibung

Eine `function`-Deklaration erstellt ein {{jsxref("Function")}}-Objekt. Jedes Mal, wenn eine Funktion aufgerufen wird, gibt sie den Wert zurück, der durch die letzte ausgeführte {{jsxref("Statements/return", "return")}}-Anweisung spezifiziert ist, oder `undefined`, wenn das Ende des Funktionskörpers erreicht wird. Siehe [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für detaillierte Informationen über Funktionen.

`function`-Deklarationen verhalten sich wie ein Mix aus {{jsxref("Statements/var", "var")}} und {{jsxref("Statements/let", "let")}}:

- Wie `let`, sind [Function-Deklarationen im strikten Modus dem nächstgelegenen umgebenden Block zugeordnet](#blockebene_funktionsdeklaration).
- Wie `let`, können Funktionsdeklarationen auf der obersten Ebene eines Moduls oder innerhalb von Blöcken im strikten Modus nicht durch eine andere Deklaration [neu deklariert](#redeclarations) werden.
- Wie `var`, werden Funktionsdeklarationen auf der obersten Ebene eines Skripts (strikt oder nicht strikt) Eigenschaften auf {{jsxref("globalThis")}}. Funktionsdeklarationen auf der obersten Ebene eines Skripts oder Funktionskörpers (strikt oder nicht strikt) können durch eine andere `function` oder `var` neu deklariert werden.
- Wie beide, können Funktionsdeklarationen neu zugewiesen werden, aber Sie sollten dies vermeiden.
- Anders als beide, werden Funktionsdeklarationen zusammen mit ihrem Wert [gehoistet](#hoisting) und können überall in ihrem Gültigkeitsbereich aufgerufen werden.

### Blockebene Funktionsdeklaration

> [!WARNING]
> Im [nicht-strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) verhalten sich Funktionsdeklarationen innerhalb von Blöcken seltsam. Deklarieren Sie Funktionen in Blöcken nur, wenn Sie sich im strikten Modus befinden.

Funktionen können bedingt deklariert werden – das heißt, eine Funktionsanweisung kann innerhalb einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung verschachtelt werden. Im nicht-strikten Modus sind die Ergebnisse jedoch über Implementierungen hinweg inkonsistent.

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

Die Gültigkeits- und Hoisting-Effekte ändern sich nicht, unabhängig davon, ob der `if`-Körper tatsächlich ausgeführt wird.

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

Im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Ebene Funktionsdeklarationen diesem Block zugeordnet und werden an die Spitze des Blocks gehoistet.

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

Funktionsdeklarationen in JavaScript werden an den Beginn der umschließenden Funktion oder des globalen Gültigkeitsbereichs {{Glossary("Hoisting", "gehoistet")}}. Sie können die Funktion verwenden, bevor Sie sie deklariert haben:

```js
hoisted(); // Logs "foo"

function hoisted() {
  console.log("foo");
}
```

Beachten Sie, dass [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) nicht gehoistet werden:

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Redeclarations

Ob `function`-Deklarationen im selben Gültigkeitsbereich neu deklariert werden können, hängt davon ab, in welchem Gültigkeitsbereich sie enthalten sind.

Auf der obersten Ebene eines Skripts verhalten sich `function`-Deklarationen wie `var` und können durch eine andere `function` oder `var` neu deklariert werden, aber nicht durch {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, oder {{jsxref("Statements/class", "class")}}.

```js-nolint example-bad
function a(b) {}
function a(b, c) {}
console.log(a.length); // 2
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Wenn `function`-Deklarationen durch `var` neu deklariert werden, überschreibt der Initialisierer der `var`-Deklaration immer den Wert der Funktion, unabhängig von ihrer relativen Position. Dies liegt daran, dass Funktionsdeklarationen vor jeder Evaluierung eines Initialisierers gehoistet werden, sodass der Initialisierer später kommt und den Wert überschreibt.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

Auf der obersten Ebene eines Funktionskörpers verhält sich `function` wie `var` und kann neu deklariert werden oder denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  function a() {}
  console.log(typeof a);
}

foo(2); // Logs "function"
```

Auf der obersten Ebene eines Moduls oder eines Blocks im strikten Modus verhalten sich `function`-Deklarationen wie `let` und können nicht durch eine andere Deklaration neu deklariert werden.

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

Eine `function`-Deklaration innerhalb eines `catch`-Blocks kann nicht denselben Namen wie der `catch`-gebundene Bezeichner haben, selbst im nicht-strikten Modus.

```js-nolint example-bad
try {
} catch (e) {
  function e() {} // SyntaxError: Identifier 'e' has already been declared
}
```

## Beispiele

### Verwendung von function

Der folgende Code deklariert eine Funktion, die den Gesamtumsatz zurückgibt, wenn die Anzahl der verkauften Einheiten von drei Produkten angegeben wird.

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

- [Funktionsleitfaden](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Function")}}
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
