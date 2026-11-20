---
title: Funktionsaufrufausdruck
slug: Web/JavaScript/Reference/Operators/Function_call
l10n:
  sourceCommit: b251b9bd2932d837806d743051b60aeab778d0f1
---

Die Syntax des **Funktionsaufrufausdrucks** wertet den Rumpf einer Funktion mit den angegebenen Argumenten aus und gibt das Ergebnis zurück.

{{InteractiveExample("JavaScript Demo: Function call expression", "shorter")}}

```js interactive-example
function getRectArea(width, height) {
  return width * height;
}

console.log(getRectArea(3, 4));
// Expected output: 12
```

## Syntax

```js-nolint
fn()
fn(arg1)
fn(arg1, arg2)
fn(arg1, arg2, /* …, */ argN)
```

### Parameter

- `fn`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 17 (Zugriff und Aufruf). Das Ergebnis muss eine aufrufbare Funktion sein. Üblicherweise handelt es sich um einen Bezeichner, einen [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) oder einen Funktionsausdruck (das {{Glossary("IIFE", "IIFE")}}-Muster).
- `arg1`, …, `argN` {{optional_inline}}
  - : Jedes Argument kann ein [Spread-Argument](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung) sein.

### Rückgabewert

- Wenn die Funktion eine normale Funktion ist, wird ihr gesamter Rumpf ausgewertet. Der Aufrufausdruck ergibt ihren Rückgabewert oder {{jsxref("undefined")}}, wenn das Ende des Funktionsrumpfs erreicht wird, ohne dass eine {{jsxref("Statements/return", "return")}}-Anweisung ausgeführt wurde.
- Wenn die Funktion eine [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) ist, wird ihr Rumpf bis zum ersten {{jsxref("Operators/await", "await")}}-Ausdruck oder bis zum Abschluss der Funktion ausgewertet. Der Aufrufausdruck ergibt eine noch ausstehende {{jsxref("Promise")}}, wenn ein `await` erreicht wird, oder eine auf den Rückgabewert [aufgelöste](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) Promise, wenn die Funktion ohne `await` endet.
- Wenn die Funktion eine [Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/function*) ist, ergibt der Aufrufausdruck ein neues {{jsxref("Generator")}}-Objekt. Die Ausführung des Funktionsrumpfs beginnt beim ersten Aufruf der {{jsxref("Generator/next", "next()")}}-Methode des Generators.
- Wenn die Funktion eine [asynchrone Generatorfunktion](/de/docs/Web/JavaScript/Reference/Statements/async_function*) ist, ergibt der Aufrufausdruck ein neues {{jsxref("AsyncGenerator")}}-Objekt. Die Ausführung des Funktionsrumpfs beginnt beim ersten Aufruf der {{jsxref("AsyncGenerator/next", "next()")}}-Methode des Generators. Diese gibt eine Promise für das nächste Iteratorergebnis zurück.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `fn` nicht aufrufbar ist. Dazu gehören Fälle, in denen `fn` keine Funktion ist (`typeof fn !== "function"`), eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) ist oder beim Aufruf immer einen Fehler auslöst (wie {{jsxref("Map/Map", "Map()")}}, das stattdessen mit {{jsxref("Operators/new", "new")}} konstruiert werden muss).

Der Aufrufausdruck gibt außerdem nicht abgefangene Fehler weiter, die bei der Auswertung des Funktionsrumpfs auftreten:

- Bei einer normalen Funktion werden nicht abgefangene Fehler aus dem Funktionsrumpf zu Fehlern des Aufrufausdrucks.
- Bei einer async function führen nicht abgefangene Fehler dazu, dass die zurückgegebene Promise zurückgewiesen wird.
- Bei einer Generatorfunktion werden nicht abgefangene Fehler zu Fehlern der `next()`-Methode.
- Bei einer asynchronen Generatorfunktion führen nicht abgefangene Fehler dazu, dass die von der `next()`-Methode zurückgegebene Promise zurückgewiesen wird.

## Beschreibung

Bei der Auswertung eines Funktionsaufrufs wird zuerst der Ausdruck `fn` ausgewertet. Anschließend werden die Argumentausdrücke der Reihe nach ausgewertet, wobei Spread-Argumente an der jeweiligen Stelle entfaltet werden. Erst nachdem alle Ausdrücke ausgewertet wurden, wird geprüft, ob `fn` aufrufbar ist. Zum Beispiel:

```js
1(console.log("Hi")); // Logs "Hi"
// Uncaught TypeError: 1 is not a function
```

Obwohl `1` nicht aufrufbar ist, tritt die Nebenwirkung des Arguments trotzdem ein.

Im Gegensatz dazu werden bei der [optionalen Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) die Argumente nicht ausgewertet, wenn `fn` bereits `null` oder `undefined` ist.

```js
null?.(console.log("Hi")); // Nothing logged
```

Die Argumentliste muss nicht mit den [Parametern](/de/docs/Web/JavaScript/Reference/Functions#function_parameters) übereinstimmen, die die Funktion deklariert hat. Werden weniger Argumente übergeben, als die Funktion erwartet, erhalten die übrigen Parameter den Wert `undefined`. Werden mehr Argumente übergeben, werden diese trotzdem ausgewertet und sind innerhalb der Funktion über das {{jsxref("Functions/arguments", "arguments")}}-Objekt zugänglich.

Argumente werden immer [_als Wert übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_value) und niemals [_als Referenz übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_reference). Das bedeutet: Wenn eine Funktion einem Parameter einen neuen Wert zuweist, ändert sich der Wert außerhalb der Funktion nicht. Genauer gesagt werden Objektargumente [_durch gemeinsame Nutzung übergeben_](https://en.wikipedia.org/wiki/Evaluation_strategy#Call_by_sharing). Werden Eigenschaften des Objekts verändert, wirkt sich das daher auch außerhalb der Funktion aus. Weitere Informationen finden Sie im [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Reference/Functions#passing_arguments).

Der Aufrufausdruck stellt dem Funktionsrumpf den {{jsxref("Operators/this", "this")}}-Kontext bereit. Dieser wird durch einen [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) festgelegt, der gegebenenfalls in Klammern steht. In `[].push(1);` ist beispielsweise `[].push` der aufgerufene Funktionswert, während `[]` der `this`-Wert ist.

## Beispiele

### Eine normale Funktion aufrufen

Normale Funktionen geben JavaScript-Werte direkt zurück (auch `undefined` ist möglich).

```js
function completes(a, b) {
  console.log(a, b);
}

function returns(a, b) {
  return a + b;
}

function throws(a, b) {
  throw new Error(`${a} and ${b}`);
}

console.log(completes(1, 2)); // Logs 1 2; returns undefined
console.log(returns(3, 4)); // 7
console.log(throws(5, 6)); // Error: 5 and 6
```

### Eine async function aufrufen

Async functions geben {{jsxref("Promise")}}-Objekte zurück.

```js
async function awaits(a, b) {
  console.log("awaits() starts");
  await new Promise((resolve) => setTimeout(resolve, 10));
  return a + b;
}

async function returns(a, b) {
  console.log("returns() starts");
  return a + b;
}

async function throws(a, b) {
  console.log("throws() starts");
  throw new Error(`${a} and ${b}`);
}

awaits(1, 2).then(console.log);
returns(3, 4).then(console.log);
throws(5, 6).catch(console.error);
Promise.resolve().then(() => console.log("Promise.resolve"));
console.log("All functions called");
```

Die Ausgabe lautet:

```plain
awaits() starts
returns() starts
throws() starts
All functions called
7
Error: 5 and 6
Promise.resolve
3
```

Wie Sie sehen, beginnen alle Funktionen ihre Ausführung synchron. Die von `returns(3, 4)` und `throws(5, 6)` zurückgegebenen Promises werden unmittelbar bei der Rückkehr aus den Funktionen erfüllt beziehungsweise zurückgewiesen, da die Funktionen kein `await` enthalten. Deshalb wird ihre Ausgabe vor der von `Promise.resolve` protokolliert. Das Ergebnis von `awaits()` liegt erst vor, nachdem `setTimeout` nach 10 ms abgeschlossen ist.

### Eine Generatorfunktion aufrufen

Generatorfunktionen geben {{jsxref("Generator")}}-Objekte zurück. Die Ausführung der Funktion wird ausgesetzt, bis `next()` aufgerufen wird.

```js
function* yieldTwo(a, b) {
  yield a;
  yield b;
  return "done";
}

const gen = yieldTwo(1, 2);
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: "done", done: true}
```

Weitere Informationen zur Funktionsweise finden Sie im Leitfaden [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators).

### Eine asynchrone Generatorfunktion aufrufen

Asynchrone Generatorfunktionen geben {{jsxref("AsyncGenerator")}}-Objekte zurück. Die Ausführung der Funktion wird ausgesetzt, bis `next()` aufgerufen wird.

```js
async function* yieldTwo(a, b) {
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield a;
  await new Promise((resolve) => setTimeout(resolve, 10));
  yield b;
  await new Promise((resolve) => setTimeout(resolve, 10));
  return "done";
}

const gen = yieldTwo(1, 2);
console.log(await gen.next()); // {value: 1, done: false}
console.log(await gen.next()); // {value: 2, done: false}
console.log(await gen.next()); // {value: "done", done: true}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Operators/new", "new")}}
