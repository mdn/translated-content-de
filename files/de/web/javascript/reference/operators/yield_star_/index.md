---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jsSidebar("Operators")}}

Der **`yield*`** Operator wird verwendet, um an ein anderes [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt zu delegieren, wie zum Beispiel einen {{jsxref("Generator")}}.

{{EmbedInteractiveExample("pages/js/expressions-yieldasterisk.html")}}

## Syntax

```js-nolint
yield* expression
```

### Parameter

- `expression` {{optional_inline}}
  - : Ein iterierbares Objekt.

### Rückgabewert

Gibt den Wert zurück, den dieser Iterator liefert, wenn er abgeschlossen ist (wenn `done` `true` ist).

## Beschreibung

Der `yield*` Ausdruck iteriert über den Operanden und gibt jeden von ihm zurückgegebenen Wert aus. Er delegiert die Iteration des aktuellen Generators an einen zugrundeliegenden Iterator — welchen wir als „Generator“ und „Iterator“ bezeichnen werden. `yield*` ruft zuerst den Iterator vom Operanden ab, indem es die [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) Methode des letzteren aufruft. Danach ruft `yield*` jedes Mal, wenn die `next()` Methode des Generators aufgerufen wird, die `next()` Methode des Iterators auf, übergibt das von der `next()` Methode des Generators erhaltene Argument (immer `undefined` beim ersten Aufruf) und gibt dasselbe Ergebnisobjekt zurück wie das von der `next()` Methode des Iterators zurückgegebene. Wenn das Iterator-Ergebnis `done: true` hat, stoppt der `yield*` Ausdruck die Ausführung und gibt den `value` dieses Ergebnisses zurück.

Der `yield*` Operator leitet außerdem die {{jsxref("Generator/throw", "throw()")}} und {{jsxref("Generator/return", "return()")}} Methoden des aktuellen Generators an den zugrundeliegenden Iterator weiter. Wenn der aktuelle Generator vorzeitig durch eine dieser Methoden geschlossen wird, wird der zugrundeliegende Iterator benachrichtigt. Wenn die `throw()`/`return()` Methode des Generators aufgerufen wird, wird die `throw()`/`return()` Methode des zugrundeliegenden Iterators mit demselben Argument aufgerufen. Der Rückgabewert von `throw()`/`return()` wird wie das Ergebnis der `next()` Methode behandelt, und wenn die Methode eine Ausnahme auslöst, wird die Ausnahme vom `yield*` Ausdruck weitergegeben.

Wenn der zugrundeliegende Iterator keine `return()` Methode hat, wird der `yield*` Ausdruck zu einer {{jsxref("Statements/return", "return")}} Anweisung, genauso wie wenn `return()` auf einen angehaltenen {{jsxref("Operators/yield", "yield")}} Ausdruck aufgerufen wird.

Wenn der zugrundeliegende Iterator keine `throw()` Methode hat, führt dies dazu, dass `yield*` einen {{jsxref("TypeError")}} auslöst – aber bevor der Fehler ausgelöst wird, wird die `return()` Methode des zugrundeliegenden Iterators aufgerufen, falls vorhanden.

## Beispiele

### Delegation an einen anderen Generator

Im folgenden Code werden die von `g1()` ausgegebenen Werte von den `next()` Aufrufen genauso zurückgegeben wie diejenigen, die von `g2()` ausgegeben werden.

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

Neben Generatorobjekten kann `yield*` auch andere Arten von iterierbaren Objekten `yield` (z.B. Arrays, Strings oder {{jsxref("Functions/arguments", "arguments")}} Objekte).

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

### Der Wert des Yield\* Ausdrucks selbst

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

### Methodenweiterleitung

Die `next()`, `throw()`, und `return()` Methoden des aktuellen Generators werden alle an den zugrundeliegenden Iterator weitergeleitet.

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

Wenn die `return()`/`throw()` Methode des zugrundeliegenden Iterators `done: false` zurückgibt, setzt der aktuelle Generator die Ausführung fort und `yield*` delegiert weiterhin an den zugrundeliegenden Iterator.

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

Wenn der zugrundeliegende Iterator keine `throw()` Methode hat und die `throw()` Methode des Generators aufgerufen wird, verursacht `yield*` einen Fehler.

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

- [Iteration-Protocols](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield", "yield")}}
