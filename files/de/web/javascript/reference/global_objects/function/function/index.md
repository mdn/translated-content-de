---
title: Function() Konstruktor
short-title: Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Function()`** Konstruktor erstellt {{jsxref("Function")}} Objekte. Durch direktes Aufrufen des Konstruktors können Funktionen dynamisch erstellt werden, jedoch mit Sicherheitsproblemen und ähnlichen (aber weniger signifikanten) Leistungseinbußen wie bei {{jsxref("Global_Objects/eval", "eval()")}}. Im Gegensatz zu `eval` (das möglicherweise Zugriff auf den lokalen Geltungsbereich hat), erstellt der `Function` Konstruktor Funktionen, die ausschließlich im globalen Geltungsbereich ausgeführt werden.

{{InteractiveExample("JavaScript Demo: Function() constructor", "shorter")}}

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

> [!NOTE] > `Function()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `Function` Instanz.

### Parameter

- `arg1`, …, `argN` {{optional_inline}}

  - : Namen, die von der Funktion als formale Argumentnamen verwendet werden. Jeder muss ein String sein, der einem gültigen JavaScript-Parameter entspricht (entweder ein einfacher {{Glossary("Identifier", "Identifier")}}, [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) oder [destrukturierter](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Parameter, optional mit einem [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)), oder eine Liste solcher Strings, getrennt durch Kommata.

    Da die Parameter auf die gleiche Weise wie Funktionsausdrücke geparst werden, sind Leerzeichen und Kommentare zulässig. Zum Beispiel: `"x", "theValue = 42", "[a, b] /* numbers */"` — oder `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` ist ebenfalls korrekt, jedoch sehr verwirrend zu lesen.)

- `functionBody`
  - : Ein String, der die JavaScript-Anweisungen enthält, aus denen die Funktionsdefinition besteht.

## Beschreibung

`Function` Objekte, die mit dem `Function` Konstruktor erstellt wurden, werden geparst, wenn die Funktion erstellt wird. Dies ist weniger effizient als die Erstellung einer Funktion mit einem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) und deren Aufruf innerhalb Ihres Codes, da solche Funktionen mit dem restlichen Code geparst werden.

Alle Argumente, die an die Funktion übergeben werden, außer dem letzten, werden als Namen der Parameter-Identifikatoren in der zu erstellenden Funktion in der Reihenfolge behandelt, in der sie übergeben werden. Die Funktion wird dynamisch als Funktionsausdruck kompiliert, wobei die Quelle in der folgenden Weise zusammengesetzt wird:

```js
`function anonymous(${args.join(",")}
) {
${functionBody}
}`;
```

Dies ist beobachtbar, indem die [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/toString) Methode der Funktion aufgerufen wird.

Im Gegensatz zu normalen [Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function), wird der Name `anonymous` jedoch nicht dem Geltungsbereich des `functionBody` hinzugefügt, da `functionBody` nur Zugriff auf den globalen Geltungsbereich hat. Wenn `functionBody` nicht im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist (der Körper selbst muss die `"use strict"` Direktive haben, da er die Striktheit nicht vom Kontext erbt), können Sie [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) verwenden, um auf die Funktion selbst zu verweisen. Alternativ können Sie den rekursiven Teil als innere Funktion definieren:

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

Beachten Sie, dass die beiden dynamischen Teile der zusammengesetzten Quelle — die Parameterliste `args.join(",")` und `functionBody` — zuerst separat geparst werden, um sicherzustellen, dass sie jeweils syntaktisch gültig sind. Dies verhindert versuchsweise Injektionen.

```js
new Function("/*", "*/) {");
// SyntaxError: Unexpected end of arg string
// Doesn't become "function anonymous(/*) {*/) {}"
```

## Beispiele

### Argumente mit dem Function Konstruktor angeben

Der folgende Code erstellt ein `Function` Objekt, das zwei Argumente nimmt.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments, and returns the sum of those arguments
const adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// 8
```

Die Argumente `a` und `b` sind formale Argumentnamen, die im Funktionskörper verwendet werden, `return a + b`.

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
- [`function` expression](/de/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Functions", "Functions", "", 1)}}
