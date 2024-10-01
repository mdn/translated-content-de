---
title: Function() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Der **`Function()`**-Konstruktor erstellt {{jsxref("Function")}} Objekte. Der direkte Aufruf des Konstruktors kann Funktionen dynamisch erstellen, leidet jedoch unter Sicherheits- und ähnlichen (aber weit weniger signifikanten) Leistungsproblemen wie {{jsxref("Global_Objects/eval", "eval()")}}. Im Gegensatz zu `eval` (das möglicherweise Zugriff auf den lokalen Bereich hat), erstellt der `Function` Konstruktor Funktionen, die nur im globalen Bereich ausgeführt werden.

{{EmbedInteractiveExample("pages/js/function-constructor.html", "shorter")}}

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

> **Note:** `Function()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Function` Instanz.

### Parameter

- `arg1`, …, `argN` {{optional_inline}}

  - : Namen, die von der Funktion als formale Parameter-Namen verwendet werden. Jeder muss ein String sein, der einer gültigen JavaScript-Parameteranzahl entspricht (entweder ein einfacher {{Glossary("Identifier", "Identifier")}}, [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) oder [destrukturierter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parameter, optional mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)), oder eine Liste solcher Strings, getrennt durch Kommata.

    Da die Parameter auf die gleiche Weise wie Funktionsausdrücke geparst werden, sind Leerzeichen und Kommentare zulässig. Zum Beispiel: `"x", "theValue = 42", "[a, b] /* numbers */"` — oder `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` ist ebenfalls korrekt, aber sehr verwirrend zu lesen.)

- `functionBody`
  - : Ein String, der die JavaScript-Anweisungen enthält, die die Funktionsdefinition umfassen.

## Beschreibung

`Function` Objekte, die mit dem `Function` Konstruktor erstellt werden, werden beim Erstellen der Funktion geparst. Dies ist weniger effizient als das Erstellen einer Funktion mit einem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) und das Aufrufen in Ihrem Code, da solche Funktionen mit dem Rest des Codes geparst werden.

Alle an die Funktion übergebenen Argumente, außer dem letzten, werden als die Namen der Bezeichner der zu erstellenden Funktionsparameter in der Reihenfolge behandelt, in der sie übergeben werden. Die Funktion wird dynamisch als Funktionsausdruck kompiliert, wobei die Quelle folgendermaßen zusammengesetzt wird:

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

Dies ist durch den Aufruf der `toString()` Methode der Funktion beobachtbar.

Anders als normale [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) wird der Name `anonymous` jedoch nicht zum Gültigkeitsbereich des `functionBody` hinzugefügt, da `functionBody` nur Zugriff auf den globalen Bereich hat. Wenn `functionBody` nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist (der Body selbst muss die `"use strict"` Direktive enthalten, da er die Strenge nicht vom Kontext erbt), können Sie `arguments.callee` verwenden, um auf die Funktion selbst zu verweisen. Alternativ können Sie den rekursiven Teil als innere Funktion definieren:

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

Beachten Sie, dass die zwei dynamischen Teile des zusammengebauten Quellcodes — die Parameterliste `args.join(",")` und `functionBody` — zuerst separat geparst werden, um sicherzustellen, dass sie jeweils syntaktisch gültig sind. Dies verhindert versuchende Injektionen.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

## Beispiele

### Argumente mit dem Function Konstruktor spezifizieren

Der folgende Code erstellt ein `Function` Objekt, das zwei Argumente entgegennimmt.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// 8
```

Die Argumente `a` und `b` sind formale Argumentnamen, die im Funktionsbereich `return a + b` verwendet werden.

### Ein Funktionsobjekt aus einer Funktionsdeklaration oder einem Funktionsausdruck erstellen

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
- [`function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "Funktionen", "", 1)}}
