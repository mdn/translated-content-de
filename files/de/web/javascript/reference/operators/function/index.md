---
title: function expression
slug: Web/JavaScript/Reference/Operators/function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Das **`function`** Schlüsselwort kann verwendet werden, um eine Funktion innerhalb eines Ausdrucks zu definieren.

Sie können Funktionen auch mit der [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder der [Arrow-Syntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

{{InteractiveExample("JavaScript Demo: function expression", "shorter")}}

```js interactive-example
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12
```

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um Verwechslungen mit einer [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) zu vermeiden. Das `function` Schlüsselwort beginnt nur einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur lokal für den Funktionskörper.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Functions Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `function` Ausdruck ist sehr ähnlich zu und hat fast die gleiche Syntax wie eine [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function). Der Hauptunterschied zwischen einem `function` Ausdruck und einer `function` Deklaration ist der _Funktionsname_, der in `function` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `function` Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden, das ausgeführt wird, sobald es definiert ist. Siehe auch das Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) für weitere Informationen.

### Hoisting von Function Expressions

Function Expressions in JavaScript werden nicht gehoben, im Gegensatz zu [Function Declarations](/de/docs/Web/JavaScript/Reference/Statements/function#hoisting). Sie können Function Expressions nicht verwenden, bevor Sie diese erstellen:

```js
console.log(notHoisted); // undefined
// Even though the variable name is hoisted,
// the definition isn't. so it's undefined.
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### Benannte Function Expression

Wenn Sie sich innerhalb des Funktionskörpers auf die aktuelle Funktion beziehen möchten, müssen Sie eine benannte Function Expression erstellen. Dieser Name ist dann nur lokal für den Funktionskörper (Scope). Dies vermeidet die Verwendung der veralteten {{jsxref("Functions/arguments/callee", "arguments.callee")}} Eigenschaft, um die Funktion rekursiv aufzurufen.

```js
const math = {
  factorial: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factorial(3); // 3;2;1;
```

Wenn eine Function Expression benannt ist, wird die [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name) Eigenschaft der Funktion auf diesen Namen gesetzt, anstatt auf den impliziten Namen, der aus der Syntax abgeleitet wird (wie die Variable, der die Funktion zugewiesen ist).

Im Gegensatz zu Deklarationen ist der Name von Function Expressions schreibgeschützt.

```js
"use strict";

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

### Verwendung von Function Expression

Das folgende Beispiel definiert eine unbenannte Funktion und weist sie `x` zu. Die Funktion gibt das Quadrat ihres Arguments zurück:

```js
const x = function (y) {
  return y * y;
};
```

### Verwendung einer Funktion als Callback

Häufiger wird es als {{Glossary("Callback_function", "Callback")}} verwendet:

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

### Verwendung einer Immediately Invoked Function Expression (IIFE)

{{Glossary("IIFE", "IIFEs")}} sind ein häufiges Muster, das verwendet wird, um beliebig viele Anweisungen in ihrem eigenen Scope auszuführen (und möglicherweise einen Wert zurückzugeben), an einem Ort, der einen einzelnen Ausdruck erfordert. Viele traditionelle Anwendungsfälle von IIFEs wurden durch neue Syntaxfeatures wie [Module](/de/docs/Web/JavaScript/Guide/Modules) und [block-skopierte Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/let) überflüssig gemacht. IIFEs selbst werden jetzt häufiger mit [Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) geschrieben, aber die Idee bleibt dieselbe. Im Allgemeinen sehen IIFEs so aus:

```js
// standard IIFE
(function () {
  // statements…
})();

// IIFE with arguments
(function (a, b) {
  console.log(a + b);
})(1, 2); // logs 3

// IIFE being used to initialize a variable
const value = (() => {
  const randomValue = Math.random();
  if (randomValue > 0.5) {
    return "heads";
  }
  return "tails";
})();
```

Hier führen wir mehrere Anwendungsfälle mit Beispielen ein.

### Vermeidung der Verschmutzung des globalen Namensraums im Skriptcode

Der oberste Scope aller Skripte wird geteilt, was viele Funktionen und globale Variablen aus verschiedenen Dateien beinhalten könnte. Um Namenskonflikte zu vermeiden, ist es wichtig, die Anzahl der global deklarierten Namen zu beschränken (dies wird stark durch [Module](/de/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_classic_scripts) gemildert, aber manchmal ist es immer noch nützlich, den Scope von temporären Variablen zu begrenzen, besonders wenn die Datei sehr lang ist). Wenn wir Initialisierungscode haben, den wir nicht erneut verwenden müssen, könnten wir das IIFE-Muster verwenden, welches besser ist als eine Function Declaration oder eine Function Expression, da es sicherstellt, dass der Code nur hier und einmal ausgeführt wird.

```js
// top-level of a script (not a module)

var globalVariable = (() => {
  // some initialization code
  let firstVariable = something();
  let secondVariable = somethingElse();
  return firstVariable + secondVariable;
})();

// firstVariable and secondVariable cannot be accessed outside of the function body.
```

### Das Modul-Muster

Wir würden auch IIFE verwenden, um private und öffentliche Variablen und Methoden zu erstellen. Für eine ausgefeiltere Verwendung des Modul-Musters und andere Verwendungen von IIFE könnten Sie das Buch "Learning JavaScript Design Patterns" von Addy Osmani sehen.

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
```

### For-Schleife mit var vor ES6

Wir könnten die folgende Verwendung von IIFE in altem Code sehen, vor der Einführung der block-skopierten `let` und `const` Deklarationen. Mit der Anweisung `var` haben wir nur Funktions-Skopes und den globalen Scope. Angenommen, wir möchten 2 Buttons mit den Texten Button 0 und Button 1 erstellen und wenn wir sie anklicken, sollen sie 0 und 1 anzeigen. Der folgende Code funktioniert nicht:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // 2
```

Bei einem Klick zeigen beide Buttons 0 und Button 1 2 an, weil `i` global ist, mit dem letzten Wert 2. Um dieses Problem vor ES6 zu beheben, könnten wir das IIFE-Muster verwenden:

```js
for (var i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = (function (copyOfI) {
    return function () {
      console.log(copyOfI);
    };
  })(i);
  document.body.appendChild(button);
}
console.log(i); // 2
```

Bei einem Klick zeigen die Buttons 0 und 1 0 und 1 an. Die Variable `i` ist global definiert. Mit der Anweisung `let` könnten wir einfach tun:

```js
for (let i = 0; i < 2; i++) {
  const button = document.createElement("button");
  button.innerText = `Button ${i}`;
  button.onclick = function () {
    console.log(i);
  };
  document.body.appendChild(button);
}
console.log(i); // Uncaught ReferenceError: i is not defined.
```

Bei einem Klick zeigen diese Buttons 0 und 1 an.

### Kontrollflussanweisungen in Ausdruckspositionen

IIFEs ermöglichen es uns, Sprachkonstrukte wie `switch` in einem Ausdruck zu verwenden.

```js
someObject.property = (() => {
  switch (someVariable) {
    case 0:
      return "zero";
    case 1:
      return "one";
    default:
      return "unknown";
  }
})();
```

Dieser Ansatz kann besonders nützlich in Szenarien sein, in denen Sie eine Variable `const` machen möchten, aber gezwungen sind, `let` oder `var` während der Initialisierung zu verwenden:

```js
let onlyAssignedOnce;
try {
  onlyAssignedOnce = someFunctionThatMightThrow();
} catch (e) {
  onlyAssignedOnce = null;
}
```

Mit IIFEs können wir die Variable `const` machen:

```js
const onlyAssignedOnce = (() => {
  try {
    return someFunctionThatMightThrow();
  } catch (e) {
    return null;
  }
})();
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
- {{jsxref("Functions/Arrow_functions", "Arrow functions", "", 1)}}
