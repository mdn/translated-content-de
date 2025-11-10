---
title: "TypeError: 'x' ist nicht iterierbar"
slug: Web/JavaScript/Reference/Errors/is_not_iterable
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "ist nicht iterierbar" tritt auf, wenn der Wert, der in ein Array oder einen Funktionsaufruf [gespreadet](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird, als rechte Seite in [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement), als Argument einer Funktion wie {{jsxref("Promise.all")}} oder {{jsxref("Set/Set", "Set()")}}, oder als rechte Seite bei einer Array-[Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) angegeben wird, kein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols) ist. Dieser Fehler tritt auch auf, wenn {{jsxref("Array.fromAsync()")}} oder {{jsxref("Statements/for-await...of", "for await...of")}} mit einem [nicht-asynchronen Iterierbaren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) verwendet wird.

## Nachricht

```plain
TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function (V8-based & Safari)
TypeError: %Array%.from requires that the property of the first argument, items[Symbol.iterator], when exists, be a function (V8-based & Safari)
TypeError: Array.fromAsync requires that the property of the first argument, items[Symbol.asyncIterator], when exists, be a function (V8-based & Safari)
TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator)) (V8-based)
TypeError: x is not async iterable (V8-based)
TypeError: x is not iterable (V8-based & Firefox)
TypeError: undefined is not a function (near '...y of x...') (Safari)
TypeError: Array.from: no function (Safari)
TypeError: Type error (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Der Wert, der in ein Array oder einen Funktionsaufruf [gespreadet](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) wird, als rechte Seite in [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement), oder als Argument einer Funktion wie {{jsxref("Promise.all")}} oder {{jsxref("Set/Set", "Set()")}}, oder als Quelle eines Array-[Destrukturierungsmusters](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) angegeben wird, ist kein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols). Ein iterierbares Objekt kann ein eingebauter iterierbarer Typ wie {{jsxref("Array")}}, {{jsxref("String")}} oder {{jsxref("Map")}}, ein Generatorergebnis oder ein Objekt sein, das das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) implementiert.

```js
const nonIterable1 = {};
const nonIterable2 = { [Symbol.iterator]: 1 };

[...nonIterable1];
Math.max(...nonIterable1);
for (const x of nonIterable1);
new Set(nonIterable1);
Array.from(nonIterable2);
new Int8Array(nonIterable2);
const [] = nonIterable1;
```

## Beispiele

### Array-Destrukturierung eines nicht-iterierbaren Objekts

```js example-bad
const myObj = { arrayOrObjProp1: {}, arrayOrObjProp2: [42] };

const {
  arrayOrObjProp1: [value1],
  arrayOrObjProp2: [value2],
} = myObj; // TypeError: object is not iterable

console.log(value1, value2);
```

In einigen Laufzeitumgebungen könnte sich herausstellen, dass das nicht-iterierbare Objekt `undefined` ist.

### Über Objekteigenschaften iterieren

In JavaScript sind {{jsxref("Object")}}e nicht iterierbar, es sei denn, sie implementieren das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Daher können Sie [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) nicht verwenden, um über die Eigenschaften eines Objekts zu iterieren.

```js example-bad
const obj = { France: "Paris", England: "London" };
for (const p of obj) {
  // …
} // TypeError: obj is not iterable
```

Stattdessen müssen Sie {{jsxref("Object.keys")}} oder {{jsxref("Object.entries")}} verwenden, um über die Eigenschaften oder Einträge eines Objekts zu iterieren.

```js example-good
const obj = { France: "Paris", England: "London" };
// Iterate over the property names:
for (const country of Object.keys(obj)) {
  const capital = obj[country];
  console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj)) {
  console.log(country, capital);
}
```

Eine andere Möglichkeit für diesen Anwendungsfall könnte die Verwendung eines {{jsxref("Map")}} sein:

```js example-good
const map = new Map();
map.set("France", "Paris");
map.set("England", "London");
// Iterate over the property names:
for (const country of map.keys()) {
  const capital = map.get(country);
  console.log(country, capital);
}

for (const capital of map.values()) {
  console.log(capital);
}

for (const [country, capital] of map.entries()) {
  console.log(country, capital);
}
```

### Über einen Generator iterieren

[Generatorfunktionen](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions) sind Funktionen, die Sie aufrufen, um ein iterierbares Objekt zu erzeugen.

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (const x of generate) {
  console.log(x);
} // TypeError: generate is not iterable
```

Wenn sie nicht aufgerufen werden, ist das {{jsxref("Function")}}-Objekt, das dem Generator entspricht, aufrufbar, aber nicht iterierbar. Das Aufrufen eines Generators erzeugt ein iterierbares Objekt, das über die während der Ausführung des Generators geernteten Werte iteriert.

```js example-good
function* generate(a, b) {
  yield a;
  yield b;
}

for (const x of generate(1, 2)) {
  console.log(x);
}
```

### Über ein benutzerdefiniertes iterierbares Objekt iterieren

Benutzerdefinierte iterierbare Objekte können erstellt werden, indem die Methode {{jsxref("Symbol.iterator")}} implementiert wird. Sie müssen sicherstellen, dass Ihre Iteratormethode ein Objekt zurückgibt, das ein Iterator ist, was bedeutet, dass es eine `next`-Methode haben muss.

```js example-bad
const myEmptyIterable = {
  [Symbol.iterator]() {
    return []; // [] is iterable, but it is not an iterator — it has no next method.
  },
};

Array.from(myEmptyIterable); // TypeError: myEmptyIterable is not iterable
```

Hier ist eine korrekte Implementierung:

```js example-good
const myEmptyIterable = {
  [Symbol.iterator]() {
    return [][Symbol.iterator]();
  },
};

Array.from(myEmptyIterable); // []
```

## Siehe auch

- [Iterierbares Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
- {{jsxref("Object.keys")}}
- {{jsxref("Object.entries")}}
- {{jsxref("Map")}}
- [Generatorfunktionen](/de/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions)
- [for...of](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
