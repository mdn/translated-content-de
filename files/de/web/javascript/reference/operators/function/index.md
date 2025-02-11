---
title: Funktionsausdruck
slug: Web/JavaScript/Reference/Operators/function
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Das **`function`**-Schlüsselwort kann verwendet werden, um eine Funktion innerhalb eines Ausdrucks zu definieren.

Sie können Funktionen auch mithilfe der [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder der [Pfeilsyntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

{{InteractiveExample("JavaScript Demo: Expressions - function expression", "shorter")}}

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) darf nicht mit dem Schlüsselwort `function` beginnen, um Verwechslungen mit einer [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) zu vermeiden. Das Schlüsselwort `function` beginnt nur dann einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen zulässt.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, wobei die Funktion dann _anonym_ ist. Der Name ist nur lokal im Funktionskörper verfügbar.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Zur Syntax der Parameter siehe die [Funktionen-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Funktionskörper ausmachen.

## Beschreibung

Ein `function`-Ausdruck ist dem [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `function`-Ausdruck und einer `function`-Deklaration ist der _Funktionsname_, der bei `function`-Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `function`-Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression, sofort ausgeführter Funktionsausdruck) verwendet werden, der ausgeführt wird, sobald er definiert ist. Weitere Informationen finden Sie auch im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

### Hoisting von Funktionsausdrücken

Funktionsausdrücke in JavaScript werden im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#hoisting) nicht "gehoistet". Sie können Funktionsausdrücke nicht verwenden, bevor Sie sie erstellen:

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

Wenn Sie innerhalb des Funktionskörpers auf die aktuelle Funktion verweisen möchten, müssen Sie einen benannten Funktionsausdruck erstellen. Dieser Name ist dann nur lokal im Funktionskörper (Scope) sichtbar. Dies verhindert die Verwendung der veralteten {{jsxref("Functions/arguments/callee", "arguments.callee")}}-Eigenschaft, um die Funktion rekursiv aufzurufen.

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

math.factorial(3); //3;2;1;
```

Wenn ein Funktionsausdruck benannt ist, wird die [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)-Eigenschaft der Funktion auf diesen Namen gesetzt, anstatt des impliziten Namens, der aus der Syntax abgeleitet wird (z. B. der Variablen, der die Funktion zugewiesen ist).

Im Gegensatz zu Deklarationen ist der Name von Funktionsausdrücken schreibgeschützt.

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

### Verwendung eines Funktionsausdrucks

Im folgenden Beispiel wird eine unbenannte Funktion definiert und `x` zugewiesen. Die Funktion gibt das Quadrat ihres Arguments zurück:

```js
const x = function (y) {
  return y * y;
};
```

### Verwendung einer Funktion als Callback

Häufig wird ein Funktionsausdruck als {{Glossary("Callback_function", "Callback")}} verwendet:

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

### Verwendung eines sofort ausgeführten Funktionsausdrucks (IIFE)

{{Glossary("IIFE", "IIFEs")}} sind ein gängiges Muster, um beliebig viele Anweisungen in ihrem eigenen Gültigkeitsbereich auszuführen (und möglicherweise einen Wert zurückzugeben), an einer Stelle, die einen einzelnen Ausdruck erfordert. Viele traditionelle Anwendungsfälle von IIFEs wurden durch neue Syntaxmerkmale wie [Module](/de/docs/Web/JavaScript/Guide/Modules) und [block-skopierte Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/let) obsolet gemacht. IIFEs werden jetzt häufiger mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) geschrieben, doch die Idee bleibt dieselbe. Im Allgemeinen sehen IIFEs so aus:

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
  } else {
    return "tails";
  }
}());
```

Hier zeigen wir mehrere Anwendungsfälle mit Beispielen.

### Vermeidung der Verschmutzung des globalen Namensraums im Skriptcode

Der oberste Gültigkeitsbereich aller Skripte wird gemeinsam genutzt, was viele Funktionen und globale Variablen aus verschiedenen Dateien einschließen könnte. Um Namenskonflikte zu vermeiden, ist es wichtig, die Anzahl der global deklarierten Namen zu begrenzen (dies wird in [Modulen](/de/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_classic_scripts) stark gemildert, aber manchmal ist es immer noch nützlich, den Gültigkeitsbereich temporärer Variablen zu begrenzen, insbesondere wenn die Datei sehr lang ist). Wenn wir Initialisierungscode haben, den wir nicht erneut verwenden müssen, könnten wir das IIFE-Muster verwenden, das besser ist als die Verwendung einer Funktionsdeklaration oder eines Funktionsausdrucks, da es sicherstellt, dass der Code nur an dieser Stelle und einmal ausgeführt wird.

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

### Das Modulpattern

Wir könnten IIFE auch verwenden, um private und öffentliche Variablen und Methoden zu erstellen. Für eine weitergehende Verwendung des Modulpatterns und andere Anwendungen von IIFE können Sie das Buch "Learning JavaScript Design Patterns" von Addy Osmani einsehen.

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

Im Folgenden sehen wir eine Verwendung von IIFE in älterem Code, bevor block-skopierte Deklarationen wie `let` und `const` eingeführt wurden. Mit der Anweisung `var` haben wir nur Funktions-Skopes und den globalen Scope.
Nehmen wir an, wir wollen 2 Buttons mit den Texten Button 0 und Button 1 erstellen, und wenn wir darauf klicken, möchten wir, dass sie 0 und 1 ausgeben. Der folgende Code funktioniert nicht:

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

Beim Anklicken geben sowohl Button 0 als auch Button 1 die Zahl 2 aus, weil `i` global ist und den letzten Wert 2 annimmt. Um dieses Problem vor ES6 zu lösen, könnten wir das IIFE-Muster verwenden:

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

Beim Anklicken geben Button 0 und 1 nun 0 und 1 aus. Die Variable `i` ist global definiert. Mit der Anweisung `let` könnten wir einfach Folgendes tun:

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

Beim Anklicken geben diese Buttons 0 und 1 aus.

### Kontrollflussanweisungen in Ausdruckspositionen

IIFEs ermöglichen uns die Verwendung von Sprachkonstrukten wie `switch` in einem Ausdruck.

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

Dieser Ansatz kann besonders in Szenarien nützlich sein, in denen Sie eine Variable `const` machen möchten, aber gezwungen sind, `let` oder `var` während der Initialisierung zu verwenden:

```js
let onlyAssignedOnce;
try {
  onlyAssignedOnce = someFunctionThatMightThrow();
} catch (e) {
  onlyAssignedOnce = null;
}
```

Mit IIFEs können wir die Variable zu `const` machen:

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
