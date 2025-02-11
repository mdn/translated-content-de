---
title: Rest-Parameter
slug: Web/JavaScript/Reference/Functions/rest_parameters
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Functions")}}

Die Syntax für **Rest-Parameter** erlaubt es einer Funktion, eine unbegrenzte Anzahl von Argumenten als Array zu akzeptieren. Dies bietet eine Möglichkeit, [variadic functions](https://en.wikipedia.org/wiki/Variadic_function) in JavaScript darzustellen.

{{InteractiveExample("JavaScript Demo: Functions Rest Parameters", "taller")}}

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
- [Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nach dem Rest-Parameter nicht erlaubt.
- Der Rest-Parameter kann keinen [Standardwert](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) haben.

## Beschreibung

Der letzte Parameter einer Funktionsdefinition kann mit `...` (drei U+002E FULL STOP-Zeichen) versehen werden, wodurch alle verbleibenden (vom Benutzer übergebenen) Parameter innerhalb eines [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)-Objekts platziert werden.

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

Der Rest-Parameter kann mittels [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwendet werden, wodurch es möglich ist, bestimmte Parameterpositionen zu ignorieren.

```js
function ignoreFirst(...[, b, c]) {
  return b + c;
}
```

Folgende Beispiele führen jedoch zu Syntaxfehlern:

```js-nolint example-bad
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
function wrong3(...wrong,) {}
function wrong4(...wrong = []) {}
```

Der Rest-Parameter wird nicht in die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft der Funktion einbezogen.

### Der Unterschied zwischen Rest-Parametern und dem arguments-Objekt

Es gibt vier Hauptunterschiede zwischen Rest-Parametern und dem {{jsxref("Functions/arguments", "arguments")}}-Objekt:

- Das `arguments`-Objekt ist **kein echtes Array**, während Rest-Parameter {{jsxref("Array")}}-Instanzen sind. Methoden wie z. B. {{jsxref("Array/sort", "sort()")}}, {{jsxref("Array/map", "map()")}}, {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/pop", "pop()")}} können direkt darauf angewendet werden.
- Das `arguments`-Objekt hat die zusätzliche (veraltete) [`callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee)-Eigenschaft.
- In einer nicht-strikten Funktion mit einfachen Parametern [synchronisiert](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices) das `arguments`-Objekt seine Indizes mit den Werten der Parameter. Das Rest-Parameter-Array aktualisiert seinen Wert jedoch niemals, wenn benannte Parameter neu zugewiesen werden.
- Der Rest-Parameter bündelt alle _zusätzlichen_ Parameter in ein einzelnes Array, enthält jedoch keine benannten Argumente, die _vorher_ dem `...restParam` definiert sind. Das `arguments`-Objekt enthält alle Parameter — einschließlich der Parameter im `...restParam`-Array — gebündelt in einem array-ähnlichen Objekt.

## Beispiele

### Verwendete Rest-Parameter

In diesem Beispiel wird das erste Argument `a` und das zweite `b` zugeordnet, sodass diese benannten Argumente wie gewohnt verwendet werden.

Das dritte Argument, `manyMoreArgs`, ist ein Array, das das dritte, vierte, fünfte, sechste, …, n-te – so viele Argumente wie der Benutzer angibt – enthält.

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

Im folgenden Beispiel, selbst wenn nur ein Wert vorhanden ist, wird das letzte Argument in ein Array eingefügt.

```js
// Using the same function definition from example above

myFun("one", "two", "three");

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- an array with just one value
```

Im nächsten Beispiel wird das dritte Argument nicht angegeben, aber `manyMoreArgs` ist weiterhin ein Array (wenn auch ein leeres).

```js
// Using the same function definition from example above

myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- still an array
```

Im darunter stehenden Beispiel wird nur ein Argument übergeben, sodass `b` den Standardwert `undefined` erhält, aber `manyMoreArgs` ist weiterhin ein leeres Array.

```js
// Using the same function definition from example above

myFun("one");

// a, "one"
// b, undefined
// manyMoreArgs, [] <-- still an array
```

### Argumentanzahl

Da `theArgs` ein Array ist, kann die Anzahl der Elemente über die {{jsxref("Array/length", "length")}}-Eigenschaft ermittelt werden. Wenn der einzige Parameter der Funktion ein Rest-Parameter ist, entspricht `restParams.length` dem Wert von [`arguments.length`](/de/docs/Web/JavaScript/Reference/Functions/arguments/length).

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

### Nutzung von Rest-Parametern in Kombination mit normalen Parametern

Im nächsten Beispiel wird ein Rest-Parameter verwendet, um alle Parameter nach dem ersten Parameter in einem Array zu sammeln. Jeder der in das Array gesammelten Parameterwerte wird dann mit dem ersten Parameter multipliziert, und das Array wird zurückgegeben:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

### Vom arguments-Objekt zu einem Array

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

Rest-Parameter wurden eingeführt, um den Boilerplate-Code zu reduzieren, der üblicherweise für die Umwandlung einer Menge von Argumenten in ein Array verwendet wurde.

Vor den Rest-Parametern musste `arguments` in ein normales Array umgewandelt werden, bevor Array-Methoden darauf angewendet werden konnten:

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

Jetzt kann man mithilfe eines Rest-Parameters leicht auf ein normales Array zugreifen:

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
