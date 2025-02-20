---
title: Function() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`Function()`**-Konstruktor erstellt {{jsxref("Function")}}-Objekte. Ein direkter Aufruf des Konstruktors kann Funktionen dynamisch erstellen, leidet jedoch unter Sicherheits- und ähnlichen (wenn auch wesentlich weniger signifikanten) Leistungsproblemen wie {{jsxref("Global_Objects/eval", "eval()")}}. Im Gegensatz zu `eval` (das Zugriff auf den lokalen Gültigkeitsbereich haben kann) erstellt der `Function`-Konstruktor jedoch Funktionen, die ausschließlich im globalen Gültigkeitsbereich ausgeführt werden.

{{InteractiveExample("JavaScript Demo: Function()", "shorter")}}

```js interactive-example
const sum = new Function("a", "b", "return a + b");

console.log(sum(2, 6));
// Expected output: 8
```

## Syntax

```js-nolint
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, /* …, */ argN, functionBody)
```

> **Hinweis:** `Function()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Möglichkeiten erstellen eine neue `Function`-Instanz.

### Parameter

- `arg1`, …, `argN` {{optional_inline}}

  - : Namen, die von der Funktion als formale Argumentnamen verwendet werden sollen. Jeder muss ein String sein, der einem gültigen JavaScript-Parameter entspricht (z. B. ein einfacher {{Glossary("Identifier", "Bezeichner")}}, ein [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) oder ein [destrukturierter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parameter, optional mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)), oder eine Liste solcher Strings, getrennt durch Kommata.

    Da die Parameter auf ähnliche Weise wie Funktionsausdrücke geparsed werden, sind Leerzeichen und Kommentare erlaubt. Beispiele: `"x", "theValue = 42", "[a, b] /* numbers */"` — oder `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` ist ebenfalls korrekt, jedoch schwer lesbar.)

- `functionBody`
  - : Ein String, der die JavaScript-Anweisungen enthält, die die Funktionsdefinition bilden.

## Beschreibung

`Function`-Objekte, die mit dem `Function`-Konstruktor erstellt werden, werden analysiert, wenn die Funktion erstellt wird. Dies ist weniger effizient als das Erstellen einer Funktion mit einem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) und deren Aufruf innerhalb Ihres Codes, da solche Funktionen zusammen mit dem Rest des Codes analysiert werden.

Alle Argumente, die an die Funktion übergeben werden, mit Ausnahme des letzten, werden als Namen der Parameteridentifier in der zu erstellenden Funktion behandelt, in der Reihenfolge, in der sie übergeben werden. Die Funktion wird dynamisch als Funktionsausdruck kompiliert, wobei die Quelle wie folgt zusammengesetzt wird:

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

Dies ist beobachtbar, indem die Methode [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) der Funktion aufgerufen wird.

Im Gegensatz zu normalen [Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) wird der Name `anonymous` jedoch nicht zum Scope von `functionBody` hinzugefügt, da `functionBody` nur Zugriff auf den globalen Gültigkeitsbereich hat. Wenn sich `functionBody` nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet (der String selbst muss die `"use strict"`-Anweisung enthalten, da es die Striktheit nicht aus dem Kontext erbt), können Sie [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) verwenden, um auf die Funktion selbst zu verweisen. Alternativ können Sie den rekursiven Teil als innere Funktion definieren:

```js
const recursiveFn = new Function(
  "count",
  `
(function recursiveFn(count) {
  if (count < 0) {
    return;
  }
  console.log(count);
  recursiveFn(count - 1);
})(count);
`,
);
```

Beachten Sie, dass die beiden dynamischen Teile der zusammengesetzten Quelle — die Parameterliste `args.join(",")` und `functionBody` — zuerst separat analysiert werden, um sicherzustellen, dass sie jeweils syntaktisch gültig sind. Dies verhindert versuchte Injektionen.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

## Beispiele

### Argumente mit dem Function-Konstruktor angeben

Der folgende Code erstellt ein `Function`-Objekt, das zwei Argumente entgegennimmt.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// 8
```

Die Argumente `a` und `b` sind formale Argumentnamen, die im Funktionskörper `return a + b` verwendet werden.

### Erstellen eines Funktionsobjekts aus einer Funktionsdeklaration oder einem Funktionsausdruck

```js
// The function constructor can take in multiple statements separated by a semicolon. Function expressions require a return statement with the function's name

// Observe that new Function is called. This is so we can call the function we created directly afterwards
const sumOfArray = new Function(
  "const sumArray = (arr) => arr.reduce((previousValue, currentValue) => previousValue + currentValue); return sumArray",
)();

// call the function
sumOfArray([1, 2, 3, 4]);
// 10

// If you don't call new Function at the point of creation, you can use the Function.call() method to call it
const findLargestNumber = new Function(
  "function findLargestNumber (arr) { return Math.max(...arr) }; return findLargestNumber",
);

// call the function
findLargestNumber.call({}).call({}, [2, 4, 1, 8, 5]);
// 8

// Function declarations do not require a return statement
const sayHello = new Function(
  "return function (name) { return `Hello, ${name}` }",
)();

// call the function
sayHello("world");
// Hello, world
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [Funktionsausdruck (`function` expression)](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "Funktionen", "", 1)}}
