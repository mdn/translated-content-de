---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **`yield*`**-Operator kann innerhalb von Generatorfunktionen (synchron oder asynchron) verwendet werden, um an ein anderes [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt, wie zum Beispiel einen {{jsxref("Generator")}}, zu delegieren. Innerhalb asynchroner Generatorfunktionen kann er zusätzlich verwendet werden, um an ein weiteres asynchrones iterierbares Objekt, wie einen {{jsxref("AsyncGenerator")}}, zu delegieren.

{{InteractiveExample("JavaScript Demo: yield* operator")}}

```js interactive-example
function* func1() {
  yield 42;
}

function* func2() {
  yield* func1();
}

const iterator = func2();

console.log(iterator.next().value);
// Expected output: 42
```

## Syntax

```js-nolint
yield* expression
```

### Parameter

- `expression` {{optional_inline}}
  - : Ein iterierbares Objekt.

### Rückgabewert

Gibt den Wert zurück, der von diesem Iterator zurückgegeben wird, wenn er geschlossen wird (wenn `done` `true` ist).

## Beschreibung

Der `yield*`-Ausdruck iteriert über den Operanden und yieldet jeden von ihm zurückgegebenen Wert. Er delegiert die Iteration des aktuellen Generators an einen zugrunde liegenden Iterator — die wir im Folgenden als "Generator" und "Iterator" bezeichnen werden. `yield*` holt zunächst den Iterator vom Operanden, indem die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)-Methode des letzteren aufgerufen wird. Dann, jedes Mal, wenn die `next()`-Methode des Generators aufgerufen wird, ruft `yield*` die `next()`-Methode des Iterators auf, übergibt das vom Generator mit `next()` empfangene Argument (immer `undefined` beim ersten Aufruf), und yieldet dasselbe Ergebnisobjekt wie das, was von der `next()`-Methode des Iterators zurückgegeben wird. Wenn das Iterator-Ergebnis `done: true` hat, dann hört der `yield*`-Ausdruck auf zu laufen und gibt den `value` dieses Ergebnisses zurück.

Der `yield*`-Operator leitet auch die {{jsxref("Generator/throw", "throw()")}}- und {{jsxref("Generator/return", "return()")}}-Methoden des aktuellen Generators an den zugrunde liegenden Iterator weiter. Wenn der aktuelle Generator vorzeitig durch eine dieser Methoden geschlossen wird, wird der zugrunde liegende Iterator informiert. Wenn die `throw()`/`return()`-Methode des Generators aufgerufen wird, wird die `throw()`/`return()`-Methode des zugrunde liegenden Iterators mit demselben Argument aufgerufen. Der Rückgabewert von `throw()`/`return()` wird ähnlich wie das Ergebnis der `next()`-Methode behandelt, und wenn die Methode wirft, wird die Ausnahme vom `yield*`-Ausdruck weitergegeben.

Falls der zugrunde liegende Iterator keine `return()`-Methode besitzt, wird der `yield*`-Ausdruck in eine {{jsxref("Statements/return", "return")}}-Anweisung umgewandelt, ebenso als würde `return()` auf einem angehaltenen {{jsxref("Operators/yield", "yield")}}-Ausdruck aufgerufen.

Falls der zugrunde liegende Iterator keine `throw()`-Methode besitzt, führt dies dazu, dass `yield*` einen {{jsxref("TypeError")}} wirft – doch bevor der Fehler geworfen wird, wird die `return()`-Methode des zugrunde liegenden Iterators aufgerufen, falls eine existiert.

## Beispiele

### Delegieren an einen anderen Generator

Im folgenden Code werden Werte, die von `g1()` yielded werden, von `next()`-Aufrufen genauso zurückgegeben wie diejenigen, die von `g2()` yielded werden.

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

const gen = g2();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 4, done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```

### Andere iterierbare Objekte

Neben Generator-Objekten kann `yield*` auch andere Arten von Iterables yielden (z. B. Arrays, Strings oder {{jsxref("Functions/arguments", "arguments")}}-Objekte).

```js
function* g3(...args) {
  yield* [1, 2];
  yield* "34";
  yield* args;
}

const gen = g3(5, 6);

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: "3", done: false}
console.log(gen.next()); // {value: "4", done: false}
console.log(gen.next()); // {value: 5, done: false}
console.log(gen.next()); // {value: 6, done: false}
console.log(gen.next()); // {value: undefined, done: true}
```

### Der Wert des yield\* Ausdrucks selbst

`yield*` ist ein Ausdruck, keine Anweisung, daher wird er zu einem Wert ausgewertet.

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

function* g5() {
  const g4ReturnValue = yield* g4();
  console.log(g4ReturnValue); // 'foo'
  return g4ReturnValue;
}

const gen = g5();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false} done is false because g5 generator isn't finished, only g4
console.log(gen.next()); // {value: 'foo', done: true}
```

### Verwendung mit asynchronen Generatoren

```js
async function* g1() {
  await Promise.resolve(0);
  yield "foo";
}

function* g2() {
  yield "bar";
}

async function* g3() {
  // Can use yield* on both async and sync iterators
  yield* g1();
  yield* g2();
}

const gen = g3();

console.log(await gen.next()); // {value: "foo", done: false}
console.log(await gen.next()); // {value: "bar", done: false}
console.log(await gen.next()); // {done: true}
```

### Methodenweiterleitung

Die `next()`, `throw()`, und `return()`-Methoden des aktuellen Generators werden alle an den zugrunde liegenden Iterator weitergeleitet.

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        console.log("next called with", v);
        count++;
        return { value: count, done: false };
      },
      return(v) {
        console.log("return called with", v);
        return { value: "iterable return value", done: true };
      },
      throw(v) {
        console.log("throw called with", v);
        return { value: "iterable thrown value", done: true };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
console.log(gen.next(10));
// next called with undefined; the argument of the first next() call is always ignored
// { value: 1, done: false }
console.log(gen.next(20));
// next called with 20
// { value: 2, done: false }
console.log(gen.return(30));
// return called with 30
// { value: 'iterable return value', done: true }
console.log(gen.next(40));
// { value: undefined, done: true }; gen is already closed

const gen2 = gf();
console.log(gen2.next(10));
// next called with undefined
// { value: 1, done: false }
console.log(gen2.throw(50));
// throw called with 50
// { value: 'gf return value', done: true }
console.log(gen.next(60));
// { value: undefined, done: true }; gen is already closed
```

Falls die `return()`/`throw()`-Methode des zugrunde liegenden Iterators `done: false` zurückgibt, wird der aktuelle Generator weiter ausgeführt und `yield*` delegiert weiterhin an den zugrunde liegenden Iterator.

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        console.log("next called with", v);
        count++;
        return { value: count, done: false };
      },
      return(v) {
        console.log("return called with", v);
        return { value: "iterable return value", done: false };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
console.log(gen.next(10));
// next called with undefined
// { value: 1, done: false }
console.log(gen.return(20));
// return called with 20
// { value: 'iterable return value', done: false }
console.log(gen.next(30));
// { value: 2, done: false }; gen is not closed
```

Falls der zugrunde liegende Iterator keine `throw()`-Methode hat und die `throw()`-Methode des Generators aufgerufen wird, wirft `yield*` einen Fehler.

```js
const iterable = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next(v) {
        count++;
        return { value: count, done: false };
      },
    };
  },
};

function* gf() {
  yield* iterable;
  return "gf return value";
}

const gen = gf();
gen.next(); // First next() starts the yield* expression
gen.throw(20); // TypeError: The iterator does not provide a 'throw' method.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield", "yield")}}
