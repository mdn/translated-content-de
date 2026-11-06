---
title: Funktionsausdruck
slug: Web/JavaScript/Reference/Operators/function
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Mit dem Schlüsselwort **`function`** können Sie eine Funktion innerhalb eines Ausdrucks definieren.

Sie können Funktionen auch mit einer [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) oder der [Pfeilfunktionssyntax](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) definieren.

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
> Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da sie sonst nicht von einer [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) zu unterscheiden wäre. Das Schlüsselwort `function` leitet nur dann einen Ausdruck ein, wenn es in einem Kontext steht, in dem keine Anweisungen zulässig sind.

### Parameter

- `name` {{optional_inline}}
  - : Der Name der Funktion. Er kann weggelassen werden; in diesem Fall ist die Funktion _anonym_. Der Name ist nur innerhalb des Funktionskörpers gültig.
- `paramN` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Informationen zur Parametersyntax finden Sie in der [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht.

## Beschreibung

Ein `function`-Ausdruck ist einer [`function`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function) sehr ähnlich und hat nahezu dieselbe Syntax. Der wesentliche Unterschied zwischen einem `function`-Ausdruck und einer `function`-Deklaration ist der _Funktionsname_: Bei `function`-Ausdrücken kann er weggelassen werden, um _anonyme_ Funktionen zu erstellen. Ein `function`-Ausdruck kann als {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression) verwendet werden, die unmittelbar nach ihrer Definition ausgeführt wird. Weitere Informationen finden Sie im Kapitel über [Funktionen](/de/docs/Web/JavaScript/Reference/Functions).

### Hoisting von Funktionsausdrücken

Anders als bei [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function#hoisting) findet bei Funktionsausdrücken in JavaScript kein Hoisting statt. Sie können Funktionsausdrücke nicht verwenden, bevor Sie sie erstellt haben:

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

Wenn Sie innerhalb des Funktionskörpers auf die aktuelle Funktion verweisen möchten, müssen Sie einen benannten Funktionsausdruck erstellen. Dieser Name ist dann nur innerhalb des Funktionskörpers gültig (Scope). So vermeiden Sie die Verwendung der veralteten Eigenschaft {{jsxref("Functions/arguments/callee", "arguments.callee")}}, um die Funktion rekursiv aufzurufen.

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

Wenn ein Funktionsausdruck benannt ist, wird die Eigenschaft [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name) der Funktion auf diesen Namen gesetzt, statt auf den implizit aus der Syntax abgeleiteten Namen (etwa den Namen der Variablen, der die Funktion zugewiesen wird).

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

{{Glossary("IIFE", "IIFEs")}} sind ein verbreitetes Muster, um an einer Stelle, an der ein einzelner Ausdruck erforderlich ist, beliebig viele Anweisungen in ihrem eigenen Gültigkeitsbereich auszuführen (und gegebenenfalls einen Wert zurückzugeben). Viele traditionelle Anwendungsfälle für IIFEs sind durch neue Syntaxfunktionen wie [Module](/de/docs/Web/JavaScript/Guide/Modules) und [blockbezogene Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/let) überflüssig geworden. IIFEs werden heute häufiger mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) geschrieben, das Prinzip bleibt jedoch dasselbe. Im Allgemeinen sehen IIFEs so aus:

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

Alle Skripte teilen sich denselben obersten Gültigkeitsbereich. Dieser kann zahlreiche Funktionen und globale Variablen aus verschiedenen Dateien enthalten. Um Namenskonflikte zu vermeiden, ist es daher wichtig, die Anzahl global deklarierter Namen zu begrenzen. (In [Modulen](/de/docs/Web/JavaScript/Guide/Modules#module_philosophy) ist dieses Problem weitgehend entschärft. Dennoch kann es sinnvoll sein, den Gültigkeitsbereich temporärer Variablen einzuschränken, insbesondere bei sehr langen Dateien.) Für Initialisierungscode, den wir später nicht erneut benötigen, können wir das IIFE-Muster verwenden. Das ist besser als eine Funktionsdeklaration oder ein Funktionsausdruck, weil so sichergestellt ist, dass der Code nur an dieser Stelle und nur einmal ausgeführt wird.

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

Mit einer IIFE können wir auch private und öffentliche Variablen und Methoden erstellen. Eine ausführlichere Darstellung des Modulmusters und weiterer Einsatzmöglichkeiten von IIFEs finden Sie im Buch „Learning JavaScript Design Patterns“ von Addy Osmani.

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

### `for`-Schleifen mit `var` vor ES6

Die folgende Verwendung einer IIFE findet sich mitunter in älterem Code aus der Zeit vor der Einführung der blockbezogenen Deklarationen `let` und `const`. Bei Deklarationen mit `var` gibt es nur Funktionsgültigkeitsbereiche und den globalen Gültigkeitsbereich.

Angenommen, wir möchten zwei Schaltflächen mit den Beschriftungen Button 0 und Button 1 erstellen. Beim Anklicken sollen sie jeweils 0 beziehungsweise 1 als Benachrichtigung anzeigen. Der folgende Code funktioniert nicht:

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

Beim Anklicken zeigen sowohl Button 0 als auch Button 1 den Wert 2 an, weil `i` global ist und zuletzt den Wert 2 hat. Vor ES6 konnten wir dieses Problem mit dem IIFE-Muster beheben:

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

Beim Anklicken zeigen Button 0 und Button 1 die Werte 0 beziehungsweise 1 an. Die Variable `i` ist global definiert. Mit der Deklaration `let` können wir es einfacher lösen:

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

Beim Anklicken zeigen diese Schaltflächen die Werte 0 beziehungsweise 1 an.

### Kontrollflussanweisungen an Stellen für Ausdrücke

Mit IIFEs können wir Sprachkonstrukte wie `switch` in einem Ausdruck verwenden.

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

Dieser Ansatz kann besonders dann nützlich sein, wenn Sie eine Variable als `const` deklarieren möchten, bei der Initialisierung aber gezwungen sind, `let` oder `var` zu verwenden:

```js
let onlyAssignedOnce;
try {
  onlyAssignedOnce = someFunctionThatMightThrow();
} catch (e) {
  onlyAssignedOnce = null;
}
```

Mit einer IIFE können wir die Variable als `const` deklarieren:

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
