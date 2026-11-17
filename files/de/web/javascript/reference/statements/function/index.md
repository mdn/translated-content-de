---
title: function
slug: Web/JavaScript/Reference/Statements/function
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`function`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen Funktion an einen bestimmten Namen.

Sie können Funktionen auch mit einem [`function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) definieren.

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
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Die maximale Anzahl der Argumente variiert je nach Engine. Informationen zur Syntax der Parameter finden Sie in der [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht.

## Beschreibung

Eine `function`-Deklaration erstellt ein {{jsxref("Function")}}-Objekt. Bei jedem Aufruf der Funktion gibt sie den Wert zurück, den die zuletzt ausgeführte {{jsxref("Statements/return", "return")}}-Anweisung angibt, oder `undefined`, wenn das Ende des Funktionskörpers erreicht wird. Ausführliche Informationen finden Sie unter [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

`function`-Deklarationen verhalten sich wie eine Mischung aus {{jsxref("Statements/var", "var")}} und {{jsxref("Statements/let", "let")}}:

- Wie bei `let` ist der Gültigkeitsbereich von [Funktionsdeklarationen im Strict Mode auf den nächstumschließenden Block beschränkt](#funktionsdeklaration_auf_blockebene).
- Wie bei `let` können Funktionsdeklarationen auf oberster Ebene eines Moduls oder innerhalb von Blöcken im Strict Mode nicht durch andere Deklarationen [erneut deklariert](#erneute_deklarationen) werden.
- Wie bei `var` werden Funktionsdeklarationen auf oberster Ebene eines Skripts (mit oder ohne Strict Mode) zu Eigenschaften von {{jsxref("globalThis")}}. Funktionsdeklarationen auf oberster Ebene eines Skripts oder Funktionskörpers (mit oder ohne Strict Mode) können durch eine weitere `function`- oder `var`-Deklaration erneut deklariert werden.
- Wie bei beiden kann Funktionsdeklarationen ein neuer Wert zugewiesen werden. Sie sollten dies jedoch vermeiden.
- Anders als bei beiden werden Funktionsdeklarationen zusammen mit ihren Werten [an den Anfang ihres Gültigkeitsbereichs gehoben](#hoisting) und können überall in ihrem Gültigkeitsbereich aufgerufen werden.

### Funktionsdeklaration auf Blockebene

> [!WARNING]
> Im [Non-Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verhalten sich Funktionsdeklarationen innerhalb von Blöcken ungewöhnlich. Deklarieren Sie Funktionen nur dann in Blöcken, wenn Sie den Strict Mode verwenden.

Funktionen können bedingt deklariert werden: Eine Funktionsdeklaration kann innerhalb einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung stehen. Im Non-Strict Mode unterscheiden sich die Ergebnisse jedoch je nach Implementierung.

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

Die Auswirkungen auf Gültigkeitsbereich und Hoisting ändern sich nicht, unabhängig davon, ob der Rumpf der `if`-Anweisung tatsächlich ausgeführt wird.

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

Im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist der Gültigkeitsbereich von Funktionsdeklarationen auf [Block](/de/docs/Web/JavaScript/Reference/Statements/block)ebene auf den jeweiligen Block beschränkt; sie werden an den Anfang des Blocks gehoben.

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

Funktionsdeklarationen werden in JavaScript an den Anfang der umschließenden Funktion oder des globalen Gültigkeitsbereichs {{Glossary("Hoisting", "gehoben")}}. Sie können eine Funktion verwenden, bevor Sie sie deklariert haben:

```js
hoisted(); // Logs "foo"

function hoisted() {
  console.log("foo");
}
```

Beachten Sie, dass [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) nicht an den Anfang gehoben werden:

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Erneute Deklarationen

Ob `function`-Deklarationen im selben Gültigkeitsbereich erneut deklariert werden können, hängt davon ab, in welchem Gültigkeitsbereich sie sich befinden.

Auf oberster Ebene eines Skripts verhalten sich `function`-Deklarationen wie `var`: Sie können durch eine weitere `function`- oder `var`-Deklaration erneut deklariert werden, nicht jedoch durch {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/class", "class")}}.

```js-nolint example-bad
function a(b) {}
function a(b, c) {}
console.log(a.length); // 2
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

Wenn `function`-Deklarationen durch `var` erneut deklariert werden, überschreibt der Initialisierer der `var`-Deklaration immer den Wert der Funktion, unabhängig von der Reihenfolge der Deklarationen. Das liegt daran, dass Funktionsdeklarationen an den Anfang gehoben werden, bevor ein Initialisierer ausgewertet wird. Der Initialisierer wird also später ausgewertet und überschreibt den Wert.

```js
var a = 1;
function a() {}
console.log(a); // 1
```

Auf oberster Ebene eines Funktionskörpers verhält sich `function` ebenfalls wie `var`: Eine solche Deklaration kann erneut deklariert werden oder denselben Namen wie ein Parameter haben.

```js
function foo(a) {
  function a() {}
  console.log(typeof a);
}

foo(2); // Logs "function"
```

Auf oberster Ebene eines Moduls oder innerhalb eines Blocks im Strict Mode verhalten sich `function`-Deklarationen wie `let` und können nicht durch andere Deklarationen erneut deklariert werden.

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

Eine `function`-Deklaration innerhalb eines `catch`-Blocks darf nicht denselben Namen wie der durch `catch` gebundene Bezeichner haben, auch nicht im Non-Strict Mode.

```js-nolint example-bad
try {
} catch (e) {
  function e() {} // SyntaxError: Identifier 'e' has already been declared
}
```

## Beispiele

### function verwenden

Der folgende Code deklariert eine Funktion, die anhand der Verkaufszahlen von drei Produkten den Gesamtumsatz zurückgibt.

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

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) – Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Function")}}
- [`function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
