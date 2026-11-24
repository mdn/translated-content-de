---
title: Funktionsausdruck
slug: Web/JavaScript/Reference/Operators/function
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Mit dem Schlüsselwort **`function`** können Sie eine Funktion innerhalb eines Ausdrucks definieren.

Sie können Funktionen auch mit einer [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder der [Pfeilsyntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, um eine Mehrdeutigkeit mit einer [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) zu vermeiden. Das Schlüsselwort `function` leitet nur dann einen Ausdruck ein, wenn es in einem Kontext steht, in dem keine Anweisungen zulässig sind.

### Parameter

- `name` {{optional_inline}}
  - : Der Name der Funktion. Er kann weggelassen werden; in diesem Fall ist die Funktion _anonym_. Der Name ist nur innerhalb des Funktionskörpers verfügbar.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Zur Parametersyntax siehe die [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht.

### Rückgabewert

Ein {{jsxref("Function")}}-Objekt.

## Beschreibung

Ein `function`-Ausdruck ist einer [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) sehr ähnlich und hat nahezu dieselbe Syntax. Der Hauptunterschied zwischen einem `function`-Ausdruck und einer `function`-Deklaration ist der _Funktionsname_: Bei `function`-Ausdrücken kann er weggelassen werden, um _anonyme_ Funktionen zu erstellen. Ein `function`-Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden, die unmittelbar nach ihrer Definition ausgeführt wird. Weitere Informationen finden Sie im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

### Hoisting von Funktionsausdrücken

Anders als [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#hoisting) werden Funktionsausdrücke in JavaScript nicht durch Hoisting vorgezogen. Sie können einen Funktionsausdruck nicht verwenden, bevor Sie ihn erstellt haben:

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

Wenn Sie innerhalb des Funktionskörpers auf die aktuelle Funktion verweisen möchten, müssen Sie einen benannten Funktionsausdruck erstellen. Dieser Name ist dann nur innerhalb des Funktionskörpers verfügbar (Scope). So vermeiden Sie die Verwendung der veralteten Eigenschaft {{jsxref("Functions/arguments/callee", "arguments.callee")}}, um die Funktion rekursiv aufzurufen.

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

Wenn ein Funktionsausdruck benannt ist, wird die Eigenschaft [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name) der Funktion auf diesen Namen gesetzt, statt auf den impliziten Namen, der aus der Syntax abgeleitet wird (beispielsweise aus der Variablen, der die Funktion zugewiesen wird).

Anders als bei Deklarationen ist der Name eines Funktionsausdrucks schreibgeschützt.

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

### Einen Funktionsausdruck verwenden

Das folgende Beispiel definiert eine unbenannte Funktion und weist sie `x` zu. Die Funktion gibt das Quadrat ihres Arguments zurück:

```js
const x = function (y) {
  return y * y;
};
```

### Eine Funktion als Callback verwenden

Häufiger wird ein Funktionsausdruck als {{Glossary("Callback_function", "Callback")}} verwendet:

```js
button.addEventListener("click", function (event) {
  console.log("button is clicked!");
});
```

### Eine Immediately Invoked Function Expression (IIFE) verwenden

{{Glossary("IIFE", "IIFEs")}} sind ein verbreitetes Muster, um beliebig viele Anweisungen in einem eigenen Scope auszuführen (und gegebenenfalls einen Wert zurückzugeben), wenn an der betreffenden Stelle ein einzelner Ausdruck erforderlich ist. Viele traditionelle Anwendungsfälle für IIFEs sind durch neue Syntaxfunktionen wie [Module](/de/docs/Web/JavaScript/Guide/Modules) und [Deklarationen mit Block-Scope](/de/docs/Web/JavaScript/Reference/Statements/let) überflüssig geworden. IIFEs selbst werden heute häufiger mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) geschrieben, die Grundidee bleibt jedoch dieselbe. Im Allgemeinen sehen IIFEs so aus:

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

Im Folgenden werden mehrere Anwendungsfälle anhand von Beispielen vorgestellt.

### Den globalen Namensraum in Skriptcode nicht überladen

Der oberste Scope wird von allen Skripten gemeinsam genutzt und kann viele Funktionen und globale Variablen aus verschiedenen Dateien enthalten. Um Namenskonflikte zu vermeiden, ist es daher wichtig, die Anzahl global deklarierter Namen zu begrenzen. (In [Modulen](/de/docs/Web/JavaScript/Guide/Modules#module_philosophy) ist dieses Problem deutlich geringer, aber manchmal ist es dennoch sinnvoll, den Scope temporärer Variablen zu begrenzen, insbesondere bei sehr langen Dateien.) Wenn wir Initialisierungscode haben, den wir später nicht erneut verwenden müssen, können wir das IIFE-Muster nutzen. Das ist besser als eine Funktionsdeklaration oder ein Funktionsausdruck, weil es sicherstellt, dass der Code nur an dieser Stelle und nur einmal ausgeführt wird.

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

Mit einer IIFE können wir außerdem private und öffentliche Variablen und Methoden erstellen. Eine weiterführende Beschreibung des Modulmusters und anderer Einsatzmöglichkeiten von IIFEs finden Sie im Buch „Learning JavaScript Design Patterns“ von Addy Osmani.

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

### `for`-Schleife mit `var` vor ES6

In älterem Code aus der Zeit vor der Einführung der Deklarationen `let` und `const` mit Block-Scope findet sich mitunter die folgende Verwendung einer IIFE. Mit der Anweisung `var` gibt es nur Funktions-Scopes und den globalen Scope.

Angenommen, wir möchten zwei Schaltflächen mit den Beschriftungen „Button 0“ und „Button 1“ erstellen. Beim Anklicken sollen sie `0` beziehungsweise `1` protokollieren. Der folgende Code funktioniert nicht:

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

Beim Anklicken protokollieren beide Schaltflächen `2`, weil `i` global ist und zuletzt den Wert `2` hat. Vor ES6 konnten wir dieses Problem mit dem IIFE-Muster beheben:

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

Beim Anklicken protokollieren die Schaltflächen 0 und 1 die Werte `0` beziehungsweise `1`. Die Variable `i` ist global definiert. Mit der Anweisung `let` könnten wir stattdessen Folgendes tun:

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

Beim Anklicken protokollieren diese Schaltflächen 0 beziehungsweise 1.

### Kontrollflussanweisungen an Stellen für Ausdrücke

IIFEs ermöglichen es uns, Sprachkonstrukte wie `switch` innerhalb eines Ausdrucks zu verwenden.

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

Dieser Ansatz kann besonders dann nützlich sein, wenn Sie eine Variable mit `const` deklarieren möchten, bei der Initialisierung aber `let` oder `var` verwenden müssten:

```js
let onlyAssignedOnce;
try {
  onlyAssignedOnce = someFunctionThatMightThrow();
} catch (e) {
  onlyAssignedOnce = null;
}
```

Mit einer IIFE können wir die Variable mit `const` deklarieren:

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

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Function")}}
- {{jsxref("Functions/Arrow_functions", "Arrow functions", "", 1)}}
