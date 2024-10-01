---
title: function expression
slug: Web/JavaScript/Reference/Operators/function
l10n:
  sourceCommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jsSidebar("Operators")}}

Das **`function`**-Schlüsselwort kann verwendet werden, um eine Funktion innerhalb eines Ausdrucks zu definieren.

Sie können Funktionen auch mithilfe der [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder der [Pfeilsyntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

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
> Eine [Ausdrucks-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um Verwechslungen mit einer [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) zu vermeiden. Das `function`-Schlüsselwort beginnt nur dann einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal für den Funktionskörper.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Zur Syntax der Parameter siehe das [Referenzdokument zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `function`-Ausdruck ist dem [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `function`-Ausdruck und einer `function`-Deklaration ist der _Funktionsname_, der bei `function`-Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erzeugen. Ein `function`-Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden, das ausgeführt wird, sobald es definiert ist. Siehe auch das Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für weitere Informationen.

### Hoisting von Funktionsausdrücken

Funktionsausdrücke in JavaScript werden, anders als [Funktionserklärungen](/de/docs/Web/JavaScript/Reference/Statements/function#hoisting), nicht gehoben. Sie können Funktionsausdrücke nicht verwenden, bevor Sie sie erstellen:

```js
console.log(notHoisted); // undefined
// Even though the variable name is hoisted,
// the definition isn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Benannter Funktionsausdruck

Wenn Sie innerhalb des Funktionskörpers auf die aktuelle Funktion verweisen möchten, müssen Sie einen benannten Funktionsausdruck erstellen. Dieser Name ist dann nur lokal zum Funktionskörper (Umfang). Dadurch wird die Verwendung der veralteten {{jsxref("Functions/arguments/callee", "arguments.callee")}}-Eigenschaft vermieden, um die Funktion rekursiv aufzurufen.

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

Wenn ein Funktionsausdruck benannt ist, wird die [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)-Eigenschaft der Funktion auf diesen Namen gesetzt, anstelle des impliziten Namens, der aus der Syntax abgeleitet wird (z. B. die Variable, der die Funktion zugewiesen wird).

Im Gegensatz zu Deklarationen ist der Name der Funktionsausdrücke schreibgeschützt.

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

Das folgende Beispiel definiert eine nicht benannte Funktion und weist sie `x` zu. Die Funktion gibt das Quadrat ihres Arguments zurück:

```js
const x = function (y) {
  return y * y;
};
```

### Verwendung einer Funktion als Rückruf

In der Praxis wird sie häufig als {{Glossary("Callback_function", "Rückruf")}} verwendet:

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

// or

!function () {
  console.log("Code runs!");
}();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Function")}}
- {{jsxref("Functions/Arrow_functions", "Arrow functions", "", 1)}}
