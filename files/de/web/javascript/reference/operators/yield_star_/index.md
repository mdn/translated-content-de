---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der **`yield*`**-Operator kann innerhalb von Generatorfunktionen (synchron oder asynchron) verwendet werden, um die Iteration an ein anderes [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt zu delegieren, beispielsweise an einen {{jsxref("Generator")}}. Innerhalb asynchroner Generatorfunktionen kann er außerdem an ein anderes asynchron iterierbares Objekt delegieren, beispielsweise an einen {{jsxref("AsyncGenerator")}}.

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

- `expression`
  - : Ein iterierbares Objekt.

### Rückgabewert

Gibt den Wert zurück, den der Iterator zurückgibt, wenn er abgeschlossen ist (wenn `done` den Wert `true` hat).

## Beschreibung

Der `yield*`-Ausdruck iteriert über seinen Operanden und gibt jeden von ihm gelieferten Wert weiter. Er delegiert die Iteration des aktuellen Generators an einen zugrunde liegenden Iterator – im Folgenden als „Generator“ beziehungsweise „Iterator“ bezeichnet. Zunächst ruft `yield*` die Methode [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) des Operanden auf, um dessen Iterator abzurufen. Bei jedem Aufruf der `next()`-Methode des Generators ruft `yield*` anschließend die `next()`-Methode des Iterators auf. Dabei übergibt es das Argument, das die `next()`-Methode des Generators erhalten hat (beim ersten Aufruf immer `undefined`), und liefert dasselbe Ergebnisobjekt wie die `next()`-Methode des Iterators. Wenn das Iteratorergebnis `done: true` enthält, endet die Ausführung des `yield*`-Ausdrucks, und er gibt den `value` dieses Ergebnisses zurück.

Der `yield*`-Operator leitet auch die Methoden {{jsxref("Generator/throw", "throw()")}} und {{jsxref("Generator/return", "return()")}} des aktuellen Generators an den zugrunde liegenden Iterator weiter. Wird der aktuelle Generator durch eine dieser Methoden vorzeitig geschlossen, wird der zugrunde liegende Iterator darüber informiert. Wird die `throw()`- oder `return()`-Methode des Generators aufgerufen, wird die entsprechende Methode des zugrunde liegenden Iterators mit demselben Argument aufgerufen. Der Rückgabewert von `throw()` oder `return()` wird wie das Ergebnis der `next()`-Methode behandelt. Löst die Methode eine Ausnahme aus, wird diese vom `yield*`-Ausdruck weitergegeben.

Wenn der zugrunde liegende Iterator keine `return()`-Methode hat, verhält sich der `yield*`-Ausdruck wie eine {{jsxref("Statements/return", "return")}}-Anweisung – ebenso wie beim Aufruf von `return()` für einen angehaltenen {{jsxref("Operators/yield", "yield")}}-Ausdruck.

Wenn der zugrunde liegende Iterator keine `throw()`-Methode hat, löst `yield*` einen {{jsxref("TypeError")}} aus. Bevor der Fehler ausgelöst wird, wird jedoch die `return()`-Methode des zugrunde liegenden Iterators aufgerufen, sofern sie vorhanden ist.

## Beispiele

### Delegation an einen anderen Generator

Im folgenden Code geben `next()`-Aufrufe sowohl von `g1()` als auch von `g2()` gelieferte Werte zurück.

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

Neben Generatorobjekten kann `yield*` auch Werte anderer Arten iterierbarer Objekte liefern, beispielsweise von Arrays, Strings oder {{jsxref("Functions/arguments", "arguments")}}-Objekten.

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

### Der Wert des yield\*-Ausdrucks selbst

`yield*` ist ein Ausdruck und keine Anweisung. Daher wird er zu einem Wert ausgewertet.

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
console.log(gen.next()); // {value: 3, done: false}
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

### Weiterleitung von Methoden

Die Methoden `next()`, `throw()` und `return()` des aktuellen Generators werden alle an den zugrunde liegenden Iterator weitergeleitet.

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
console.log(gen2.next(60));
// { value: undefined, done: true }; gen2 is already closed
```

Wenn die `return()`- oder `throw()`-Methode des zugrunde liegenden Iterators `done: false` zurückgibt, wird die Ausführung des aktuellen Generators fortgesetzt, und `yield*` delegiert weiterhin an den zugrunde liegenden Iterator.

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
// next called with 30
// { value: 2, done: false }; gen is not closed
```

Wenn der zugrunde liegende Iterator keine `throw()`-Methode hat und `throw()` für den Generator aufgerufen wird, löst `yield*` einen Fehler aus.

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
- [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield", "yield")}}
