---
title: Rest-Parameter
slug: Web/JavaScript/Reference/Functions/rest_parameters
l10n:
  sourceCommit: 03075e57e2e1d2cd12cfc1d57a57037ba6cc1349
---

{{jsSidebar("Functions")}}

Die **Rest-Parameter**-Syntax ermöglicht es einer Funktion, eine unbestimmte Anzahl von Argumenten als Array zu akzeptieren und bietet damit eine Möglichkeit, [variadic functions](https://en.wikipedia.org/wiki/Variadic_function) in JavaScript darzustellen.

{{EmbedInteractiveExample("pages/js/functions-restparameters.html", "taller")}}

## Syntax

```js-nolint
function f(a, b, ...theArgs) {
  // …
}
```

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Eine Funktionsdefinition kann nur einen Rest-Parameter haben.
- Der Rest-Parameter muss das letzte Parameter in der Funktionsdefinition sein.
- [Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nach dem Rest-Parameter nicht erlaubt.
- Der Rest-Parameter kann keinen [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) haben.

## Beschreibung

Das letzte Parameter einer Funktionsdefinition kann mit `...` (drei U+002E FULL STOP Zeichen) versehen werden, wodurch alle verbleibenden (vom Benutzer bereitgestellten) Parameter innerhalb eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Objekts platziert werden.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

Der Rest-Parameter kann [de-strukturiert](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) werden, was Ihnen ermöglicht, bestimmte Parameterpositionen zu ignorieren.

```js
function ignoreFirst(...[, b, c]) {
  return b + c;
}
```

Jedoch sind die folgenden alle Syntaxfehler:

```js-nolint example-bad
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
function wrong3(...wrong,) {}
function wrong4(...wrong = []) {}
```

Der Rest-Parameter zählt nicht zur [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft der Funktion.

### Der Unterschied zwischen Rest-Parametern und dem `arguments`-Objekt

Es gibt vier Hauptunterschiede zwischen Rest-Parametern und dem {{jsxref("Functions/arguments", "arguments")}}-Objekt:

- Das `arguments`-Objekt ist **kein echtes Array**, während Rest-Parameter {{jsxref("Array")}}-Instanzen sind. Das bedeutet, dass Methoden wie {{jsxref("Array/sort", "sort()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/pop", "pop()")}} direkt darauf angewendet werden können.
- Das `arguments`-Objekt besitzt die zusätzliche (veraltete) [`callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft.
- In einer nicht strengen Funktion mit einfachen Parametern synchronisiert das `arguments`-Objekt [seine Indizes mit den Werten der Parameter](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices). Das Rest-Parameter-Array aktualisiert seinen Wert nie, wenn die benannten Parameter neu zugewiesen werden.
- Der Rest-Parameter bündelt alle _zusätzlichen_ Parameter in einem einzigen Array, enthält jedoch keine benannten Argumente, die _vor_ dem `...restParam` definiert wurden. Das `arguments`-Objekt enthält alle Parameter — einschließlich der Parameter im `...restParam`-Array — und bündelt sie in einem array-ähnlichen Objekt.

## Beispiele

### Verwendung von Rest-Parametern

In diesem Beispiel wird das erste Argument auf `a` und das zweite auf `b` abgebildet, daher werden diese benannten Argumente wie gewohnt verwendet.

Das dritte Argument, `manyMoreArgs`, wird jedoch ein Array sein, das das dritte, vierte, fünfte, sechste, …, n-te Argument enthält — so viele Argumente, wie der Benutzer angibt.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- an array
```

Unten, obwohl es nur einen Wert gibt, wird das letzte Argument trotzdem in ein Array gesetzt.

```js
// Using the same function definition from example above

myFun("one", "two", "three");

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- an array with just one value
```

Unten wird das dritte Argument nicht bereitgestellt, aber `manyMoreArgs` ist weiterhin ein Array (wenn auch ein leeres).

```js
// Using the same function definition from example above

myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- still an array
```

Unten wird nur ein Argument bereitgestellt, sodass `b` den Standardwert `undefined` erhält, aber `manyMoreArgs` bleibt ein leeres Array.

```js
// Using the same function definition from example above

myFun("one");

// a, "one"
// b, undefined
// manyMoreArgs, [] <-- still an array
```

### Argumentlänge

Da `theArgs` ein Array ist, wird die Anzahl seiner Elemente durch die {{jsxref("Array/length", "length")}}-Eigenschaft angegeben. Wenn das einzige Parameter der Funktion ein Rest-Parameter ist, wird `restParams.length` gleich [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length) sein.

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

### Verwendung von Rest-Parametern in Kombination mit gewöhnlichen Parametern

Im nächsten Beispiel wird ein Rest-Parameter verwendet, um alle Parameter nach dem ersten Parameter in einem Array zu sammeln. Jeder der im Array gesammelten Parameterwerte wird dann mit dem ersten Parameter multipliziert, und das Array wird zurückgegeben:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

### Von Argumenten zu einem Array

{{jsxref("Array")}}-Methoden können auf Rest-Parameter angewendet werden, jedoch nicht auf das `arguments`-Objekt:

```js
function sortRestArgs(...theArgs) {
  const sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

function sortArguments() {
  const sortedArgs = arguments.sort();
  return sortedArgs; // this will never happen
}

console.log(sortArguments(5, 3, 7, 1));
// throws a TypeError (arguments.sort is not a function)
```

Rest-Parameter wurden eingeführt, um den Boilerplate-Code zu reduzieren, der üblicherweise verwendet wurde, um eine Menge von Argumenten in ein Array zu konvertieren.

Vor Rest-Parametern mussten `arguments` in ein normales Array umgewandelt werden, bevor Array-Methoden darauf aufgerufen werden konnten:

```js
function fn(a, b) {
  const normalArray = Array.prototype.slice.call(arguments);
  // — or —
  const normalArray2 = [].slice.call(arguments);
  // — or —
  const normalArrayFrom = Array.from(arguments);

  const first = normalArray.shift(); // OK, gives the first argument
  const firstBad = arguments.shift(); // ERROR (arguments is not a normal array)
}
```

Jetzt können Sie einfach über einen Rest-Parameter auf ein normales Array zugreifen:

```js
function fn(...args) {
  const normalArray = args;
  const first = normalArray.shift(); // OK, gives the first argument
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Spread-Syntax (`...`)](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Array")}}
