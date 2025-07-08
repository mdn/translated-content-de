---
title: Rest-Parameter
slug: Web/JavaScript/Reference/Functions/rest_parameters
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **Rest-Parameter**-Syntax ermöglicht es einer Funktion, eine unbestimmte Anzahl an Argumenten als Array zu akzeptieren und bietet damit eine Möglichkeit, [variadische Funktionen](https://en.wikipedia.org/wiki/Variadic_function) in JavaScript darzustellen.

{{InteractiveExample("JavaScript Demo: Rest parameters", "taller")}}

```js interactive-example
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
```

## Syntax

```js-nolint
function f(a, b, ...theArgs) {
  // …
}
```

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Eine Funktionsdefinition kann nur einen Rest-Parameter haben.
- Der Rest-Parameter muss der letzte Parameter in der Funktionsdefinition sein.
- [Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nach dem Rest-Parameter nicht erlaubt.
- Der Rest-Parameter kann keinen [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) besitzen.

## Beschreibung

Der letzte Parameter einer Funktionsdefinition kann mit `...` (drei U+002E FULL STOP Zeichen) vorangestellt werden, wodurch alle verbleibenden (vom Benutzer angegebenen) Parameter innerhalb eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Objekts platziert werden.

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

Der Rest-Parameter kann [destrukturiert](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) werden, was es Ihnen ermöglicht, bestimmte Parameterpositionen zu ignorieren.

```js
function ignoreFirst(...[, b, c]) {
  return b + c;
}
```

Allerdings sind die folgenden alle Syntaxfehler:

```js-nolint example-bad
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
function wrong3(...wrong,) {}
function wrong4(...wrong = []) {}
```

Der Rest-Parameter wird nicht zur [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft der Funktion gezählt.

### Der Unterschied zwischen Rest-Parametern und dem arguments-Objekt

Es gibt vier Hauptunterschiede zwischen Rest-Parametern und dem {{jsxref("Functions/arguments", "arguments")}} Objekt:

- Das `arguments`-Objekt ist **kein echtes Array**, während Rest-Parameter {{jsxref("Array")}}-Instanzen sind, was bedeutet, dass Methoden wie {{jsxref("Array/sort", "sort()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/pop", "pop()")}} direkt darauf angewendet werden können.
- Das `arguments`-Objekt hat die zusätzliche (veraltete) [`callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft.
- In einer nicht-strikten Funktion mit einfachen Parametern [synchronisiert](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices) das `arguments`-Objekt seine Indizes mit den Werten der Parameter. Das Rest-Parameter-Array aktualisiert seinen Wert nie, wenn die benannten Parameter neu zugewiesen werden.
- Der Rest-Parameter bündelt alle zusätzlichen Parameter in einem einzelnen Array, enthält jedoch keine benannten Argumente, die vor dem `...restParam` definiert sind. Das `arguments`-Objekt enthält alle Parameter — einschließlich der Parameter im `...restParam` Array — gebündelt in einem array-ähnlichen Objekt.

## Beispiele

### Verwendung von Rest-Parametern

In diesem Beispiel wird das erste Argument `a` zugeordnet und das zweite `b`, sodass diese benannten Argumente normal verwendet werden.

Das dritte Argument, `manyMoreArgs`, wird jedoch ein Array sein, das das dritte, vierte, fünfte, sechste, …, n-te — so viele Argumente, wie der Benutzer angibt — enthält.

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

Unten, auch wenn es nur einen Wert gibt, wird das letzte Argument immer noch in ein Array gesetzt.

```js
// Using the same function definition from example above

myFun("one", "two", "three");

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- an array with just one value
```

Unten wird das dritte Argument nicht bereitgestellt, aber `manyMoreArgs` ist dennoch ein Array (wenn auch ein leeres).

```js
// Using the same function definition from example above

myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- still an array
```

Unten wird nur ein Argument bereitgestellt, sodass `b` den Standardwert `undefined` erhält, aber `manyMoreArgs` ist dennoch ein leeres Array.

```js
// Using the same function definition from example above

myFun("one");

// a, "one"
// b, undefined
// manyMoreArgs, [] <-- still an array
```

### Argumentlänge

Da `theArgs` ein Array ist, wird die Anzahl seiner Elemente durch die {{jsxref("Array/length", "length")}}-Eigenschaft angegeben. Wenn der einzige Parameter der Funktion ein Rest-Parameter ist, wird `restParams.length` gleich [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length) sein.

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

### Verwendung von Rest-Parametern in Kombination mit normalen Parametern

Im nächsten Beispiel wird ein Rest-Parameter verwendet, um alle Parameter nach dem ersten Parameter in ein Array zu sammeln. Jeder der in das Array gesammelten Parameterwerte wird dann mit dem ersten Parameter multipliziert und das Array wird zurückgegeben:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

### Von arguments zu einem Array

{{jsxref("Array")}}-Methoden können bei Rest-Parametern verwendet werden, nicht jedoch beim `arguments`-Objekt:

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

Rest-Parameter wurden eingeführt, um den Boilerplate-Code zu reduzieren, der häufig zum Umwandeln einer Menge von Argumenten in ein Array verwendet wurde.

Vor den Rest-Parametern mussten `arguments` in ein normales Array umgewandelt werden, bevor Array-Methoden darauf aufgerufen wurden:

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

Jetzt können Sie leicht Zugriff auf ein normales Array mit einem Rest-Parameter erhalten:

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
