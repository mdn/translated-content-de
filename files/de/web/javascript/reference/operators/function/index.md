---
title: function expression
slug: Web/JavaScript/Reference/Operators/function
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{jsSidebar("Operators")}}

Das **`function`** Schlüsselwort kann verwendet werden, um eine Funktion innerhalb eines Ausdrucks zu definieren.

Sie können auch Funktionen mit der [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder der [Pfeilsyntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um Verwechslungen mit einer [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) zu vermeiden. Das `function` Schlüsselwort beginnt nur dann einen Ausdruck, wenn es in einem Kontext erscheint, der keine Anweisungen akzeptieren kann.

### Parameter

- `name` {{optional_inline}}
  - : Der Funktionsname. Kann weggelassen werden, in diesem Fall ist die Funktion _anonym_. Der Name ist nur innerhalb des Funktionskörpers lokal.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Functions Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden.

## Beschreibung

Ein `function` Ausdruck ist einem [`function` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) sehr ähnlich und hat fast die gleiche Syntax. Der Hauptunterschied zwischen einem `function` Ausdruck und einer `function` Deklaration ist der _Funktionsname_, der in `function` Ausdrücken weggelassen werden kann, um _anonyme_ Funktionen zu erstellen. Ein `function` Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (sofort ausgeführter Funktionsausdruck) verwendet werden, der ausgeführt wird, sobald er definiert ist. Weitere Informationen finden Sie im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

### Funktionen Ausdrucks-Hoisting

Funktionsexpressionen in JavaScript werden nicht gehoben (hoisted), im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#hoisting). Sie können keine Funktionsausdrücke verwenden, bevor Sie sie erstellen:

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

Wenn Sie im Funktionskörper auf die aktuelle Funktion verweisen möchten, müssen Sie einen benannten Funktionsausdruck erstellen. Dieser Name ist dann nur lokal zum Funktionskörper (Gültigkeitsbereich). Dies vermeidet die Verwendung der veralteten {{jsxref("Functions/arguments/callee", "arguments.callee")}} Eigenschaft, um die Funktion rekursiv aufzurufen.

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

Wenn ein Funktionsausdruck benannt ist, wird die [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name) Eigenschaft der Funktion auf diesen Namen gesetzt, anstatt des impliziten Namens, der aus der Syntax abgeleitet wird (wie der Variable, der die Funktion zugewiesen ist).

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

### Verwendung von Funktionsexpressionen

Das folgende Beispiel definiert eine unbenannte Funktion und weist sie `x` zu. Die Funktion gibt das Quadrat ihres Arguments zurück:

```js
const x = function (y) {
  return y * y;
};
```

### Verwendung einer Funktion als Rückruf

Häufiger wird sie als {{Glossary("Callback_function", "Rückruf")}} verwendet:

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

### Verwendung eines sofort ausgeführten Funktionsausdrucks (IIFE)

{{Glossary("IIFE", "IIFEs")}} sind ein weit verbreitetes Muster, um eine beliebige Anzahl von Anweisungen in ihrem eigenen Gültigkeitsbereich auszuführen (und möglicherweise einen Wert zurückzugeben), an einem Ort, der einen einzelnen Ausdruck erfordert. Viele traditionelle Anwendungsfälle von IIFEs wurden durch neue Syntaxfunktionen wie [Module](/de/docs/Web/JavaScript/Guide/Modules) und [Block-Scoped-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/let) überflüssig. IIFEs selbst werden heutzutage häufiger mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) geschrieben, aber die Idee bleibt die gleiche. Allgemein sehen IIFEs so aus:

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
})();
```

Hier stellen wir mehrere Anwendungsfälle mit Beispielen vor.

### Vermeidung der Verschmutzung des globalen Namensraums im Skriptcode

Der oberste Gültigkeitsbereich aller Skripte ist geteilt, was viele Funktionen und globale Variablen aus verschiedenen Dateien einschließen könnte. Um Namenskonflikte zu vermeiden, ist es wichtig, die Anzahl der global deklarierten Namen zu begrenzen (dies wird in [Modulen](/de/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_classic_scripts) stark gemildert, aber manchmal ist es immer noch nützlich, den Gültigkeitsbereich temporärer Variablen zu begrenzen, insbesondere wenn die Datei sehr lang ist). Wenn wir einige Initialisierungscode haben, den wir nicht erneut verwenden müssen, könnten wir das IIFE-Muster verwenden, das besser ist als die Verwendung einer Funktionsdeklaration oder eines Funktionsausdrucks, da es sicherstellt, dass der Code nur hier und einmal ausgeführt wird.

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

### Das Modulmuster

Wir würden auch IIFE verwenden, um private und öffentliche Variablen und Methoden zu erstellen. Für eine anspruchsvollere Verwendung des Modulmustermusters und weitere Anwendungsbeispiele von IIFE könnten Sie das Buch "Learning JavaScript Design Patterns" von Addy Osmani lesen.

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

Wir könnten die folgende Verwendung von IIFE in altem Code sehen, bevor die Block-Scoped-Deklarationen `let` und `const` eingeführt wurden. Mit der `var`-Anweisung haben wir nur Funktionsbereiche und den globalen Bereich. Angenommen, wir möchten zwei Schaltflächen mit den Texten Button 0 und Button 1 erstellen und wenn wir darauf klicken, möchten wir, dass sie 0 und 1 ausgeben. Der folgende Code funktioniert nicht:

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

Wenn geklickt, geben sowohl Button 0 als auch Button 1 2 aus, weil `i` global ist, mit dem letzten Wert 2. Um dieses Problem vor ES6 zu beheben, könnten wir das IIFE-Muster verwenden:

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

Wenn geklickt, geben Buttons 0 und 1 0 und 1 aus. Die Variable `i` ist global definiert. Verwenden Sie die Anweisung `let`, könnten wir einfach:

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

Wenn geklickt, geben diese Buttons 0 und 1 aus.

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

Dieser Ansatz kann besonders nützlich sein in Szenarien, in denen Sie eine Variable `const` machen möchten, aber gezwungen sind, `let` oder `var` während der Initialisierung zu verwenden:

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
- {{jsxref("Functions/Arrow_functions", "Pfeilfunktionen", "", 1)}}
