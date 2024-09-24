---
title: Restparameter
slug: Web/JavaScript/Reference/Functions/rest_parameters
l10n:
  sourceCommit: 03075e57e2e1d2cd12cfc1d57a57037ba6cc1349
---

{{jsSidebar("Functions")}}

Die **Restparameter**-Syntax ermöglicht es einer Funktion, eine unbestimmte Anzahl von Argumenten als Array zu akzeptieren, wodurch eine Möglichkeit geschaffen wird, [variadic functions](https://en.wikipedia.org/wiki/Variadic_function) in JavaScript darzustellen.

{{EmbedInteractiveExample("pages/js/functions-restparameters.html", "taller")}}

## Syntax

```js-nolint
function f(a, b, ...theArgs) {
  // …
}
```

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Eine Funktionsdefinition kann nur einen Restparameter haben.
- Der Restparameter muss der letzte Parameter in der Funktionsdefinition sein.
- [Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nach dem Restparameter nicht erlaubt.
- Der Restparameter kann keinen [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) haben.

## Beschreibung

Der letzte Parameter einer Funktionsdefinition kann mit `...` (drei U+002E FULL STOP-Zeichen) versehen werden, wodurch alle verbleibenden (vom Benutzer bereitgestellten) Parameter in einem [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Objekt platziert werden.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Konsolenausgabe:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

Der Restparameter kann [de-strukturiert](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) werden, was es Ihnen erlaubt, bestimmte Parameterpositionen zu ignorieren.

```js
function ignoreFirst(...[, b, c]) {
  return b + c;
}
```

Die folgenden Beispiele sind jedoch alles Syntaxfehler:

```js-nolint example-bad
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
function wrong3(...wrong,) {}
function wrong4(...wrong = []) {}
```

Der Restparameter wird nicht zur [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft der Funktion gezählt.

### Der Unterschied zwischen Restparametern und dem arguments-Objekt

Es gibt vier Hauptunterschiede zwischen Restparametern und dem {{jsxref("Functions/arguments", "arguments")}}-Objekt:

- Das `arguments`-Objekt ist **kein echtes Array**, während Restparameter Instanzen von {{jsxref("Array")}} sind, was bedeutet, dass Methoden wie {{jsxref("Array/sort", "sort()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/pop", "pop()")}} direkt darauf angewendet werden können.
- Das `arguments`-Objekt hat die zusätzliche (veraltete) [`callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft.
- In einer nicht-strikten Funktion mit einfachen Parametern synchronisiert das `arguments`-Objekt [seine Indizes mit den Werten der Parameter](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices). Das Restparameter-Array aktualisiert niemals seinen Wert, wenn die benannten Parameter neu zugewiesen werden.
- Der Restparameter bündelt alle _extra_ Parameter in einem einzigen Array, enthält jedoch keine benannten Argumente, die _vor_ dem `...restParam` definiert sind. Das `arguments`-Objekt enthält alle Parameter — einschließlich der Parameter im `...restParam`-Array — gebündelt in einem array-ähnlichen Objekt.

## Beispiele

### Verwendung von Restparametern

In diesem Beispiel wird das erste Argument `a` zugeordnet und das zweite `b`, sodass diese benannten Argumente wie gewohnt verwendet werden.

Das dritte Argument, `manyMoreArgs`, wird jedoch ein Array enthalten, das das dritte, vierte, fünfte, sechste, …, n-te Argument umfasst – so viele Argumente wie der Benutzer angibt.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- ein Array
```

Im Folgenden wird, obwohl es nur einen Wert gibt, das letzte Argument dennoch in ein Array gelegt.

```js
// Verwenden derselben Funktionsdefinition wie oben

myFun("one", "two", "three");

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- ein Array mit nur einem Wert
```

Im Folgenden wird das dritte Argument nicht bereitgestellt, aber `manyMoreArgs` ist trotzdem ein Array (wenn auch ein leeres).

```js
// Verwenden derselben Funktionsdefinition wie oben

myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- immer noch ein Array
```

Im Folgenden wird nur ein Argument bereitgestellt, sodass `b` den Standardwert `undefined` erhält, aber `manyMoreArgs` ist immer noch ein leeres Array.

```js
// Verwenden derselben Funktionsdefinition wie oben

myFun("one");

// a, "one"
// b, undefined
// manyMoreArgs, [] <-- immer noch ein Array
```

### Argumentlänge

Da `theArgs` ein Array ist, wird die Anzahl seiner Elemente durch die {{jsxref("Array/length", "length")}}-Eigenschaft angegeben. Wenn der einzige Parameter der Funktion ein Restparameter ist, entspricht `restParams.length` der [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length).

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

### Verwendung von Restparametern in Kombination mit gewöhnlichen Parametern

Im nächsten Beispiel wird ein Restparameter verwendet, um alle Parameter nach dem ersten Parameter in einem Array zu sammeln. Jeder der Parameterwerte, die in das Array gesammelt werden, wird dann mit dem ersten Parameter multipliziert und das Array wird zurückgegeben:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

### Von Arguments zu einem Array

{{jsxref("Array")}}-Methoden können auf Restparameter angewendet werden, jedoch nicht auf das `arguments`-Objekt:

```js
function sortRestArgs(...theArgs) {
  const sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

function sortArguments() {
  const sortedArgs = arguments.sort();
  return sortedArgs; // das wird nie passieren
}

console.log(sortArguments(5, 3, 7, 1));
// wirft einen TypeError (arguments.sort ist keine Funktion)
```

Restparameter wurden eingeführt, um den Boilerplate-Code zu reduzieren, der häufig für die Umwandlung einer Gruppe von Argumenten in ein Array verwendet wurde.

Vor Restparametern mussten `arguments` in ein normales Array umgewandelt werden, bevor Array-Methoden darauf angewendet werden konnten:

```js
function fn(a, b) {
  const normalArray = Array.prototype.slice.call(arguments);
  // — oder —
  const normalArray2 = [].slice.call(arguments);
  // — oder —
  const normalArrayFrom = Array.from(arguments);

  const first = normalArray.shift(); // OK, gibt das erste Argument
  const firstBad = arguments.shift(); // ERROR (arguments ist kein normales Array)
}
```

Jetzt können Sie mit einem Restparameter einfach auf ein normales Array zugreifen:

```js
function fn(...args) {
  const normalArray = args;
  const first = normalArray.shift(); // OK, gibt das erste Argument
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Spreizsyntax (`...`)](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Array")}}
