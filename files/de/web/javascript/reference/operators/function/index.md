---
title: Funktionsausdruck
slug: Web/JavaScript/Reference/Operators/function
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Das Schlüsselwort **`function`** kann verwendet werden, um eine Funktion innerhalb eines Ausdrucks zu definieren.

Sie können auch Funktionen mit der [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder der [Pfeilsyntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html", "shorter")}}

## Syntax

```js-nolint
function (param0) {
  statements
}
function (param0, param1) {
  statements
}
function (param0, param1, /* …, */ paramN) {
  statements
}

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

> [!NOTE]
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um Mehrdeutigkeiten mit einer [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) zu vermeiden. Das Schlüsselwort `function` beginnt nur dann einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal im Funktionskörper.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `function` Ausdruck ist einem [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `function` Ausdruck und einer `function` Deklaration ist der _Funktionsname_, der in `function` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `function` Ausdruck kann als [IIFE](/de/docs/Glossary/IIFE) (Immediately Invoked Function Expression) verwendet werden, die sofort ausgeführt wird, sobald sie definiert ist. Siehe auch das Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für weitere Informationen.

### Hoisting von Funktionsausdrücken

Funktionsausdrücke in JavaScript werden nicht gehoben, im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#hoisting). Sie können Funktionsausdrücke nicht verwenden, bevor Sie sie erstellen:

```js
console.log(notHoisted); // undefined
// Obwohl der Variablenname gehoben wird,
// wird die Definition nicht gehoben. Es ist also undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Benannter Funktionsausdruck

Wenn Sie innerhalb des Funktionskörpers auf die aktuelle Funktion verweisen möchten, müssen Sie einen benannten Funktionsausdruck erstellen. Dieser Name ist dann nur lokal im Funktionskörper (Scope). Dies vermeidet die Verwendung der veralteten {{jsxref("Functions/arguments/callee", "arguments.callee")}} Eigenschaft, um die Funktion rekursiv aufzurufen.

```js
const math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;
```

Wenn ein Funktionsausdruck benannt wird, wird die [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name) Eigenschaft der Funktion auf diesen Namen gesetzt, anstatt auf den durch die Syntax implizierten Namen (wie die Variable, der die Funktion zugewiesen wird).

Im Gegensatz zu Deklarationen ist der Name des Funktionsausdrucks schreibgeschützt.

```js
function foo() {
  foo = 1;
}
foo();
console.log(foo); // 1
(function foo() {
  foo = 1; // TypeError: Assignment to constant variable.
})();
```

## Beispiele

### Verwendung eines Funktionsausdrucks

Das folgende Beispiel definiert eine unbenannte Funktion und weist sie `x` zu. Die Funktion gibt das Quadrat ihres Arguments zurück:

```js
const x = function (y) {
  return y * y;
};
```

### Verwendung einer Funktion als Rückruffunktion

Häufiger wird sie als {{Glossary("Callback_function", "Rückruffunktion")}} verwendet:

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

### Verwendung eines sofort ausgeführten Funktionsausdrucks (IIFE)

Eine anonyme Funktion wird erstellt und aufgerufen:

```js-nolint
(function () {
  console.log("Code runs!");
})();

// oder

!function () {
  console.log("Code runs!");
}();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Function")}}
- {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}}
