---
title: AsyncGeneratorFunction() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Der **`AsyncGeneratorFunction()`** Konstruktor erstellt {{jsxref("AsyncGeneratorFunction")}} Objekte.

Beachten Sie, dass `AsyncGeneratorFunction` kein globales Objekt ist. Es kann erhalten werden, indem der folgende Code ausgewertet wird.

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

Der `AsyncGeneratorFunction()` Konstruktor ist nicht zur direkten Verwendung gedacht, und alle in der Beschreibung von {{jsxref("Function/Function", "Function()")}} erwähnten Vorbehalte gelten auch für `AsyncGeneratorFunction()`.

## Syntax

```js-nolint
new AsyncGeneratorFunction(functionBody)
new AsyncGeneratorFunction(arg1, functionBody)
new AsyncGeneratorFunction(arg1, arg2, functionBody)
new AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

AsyncGeneratorFunction(functionBody)
AsyncGeneratorFunction(arg1, functionBody)
AsyncGeneratorFunction(arg1, arg2, functionBody)
AsyncGeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> **Hinweis:** `AsyncGeneratorFunction()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue Instanz von `AsyncGeneratorFunction`.

### Parameter

Siehe {{jsxref("Function/Function", "Function()")}}.

## Beispiele

### Verwendung des Konstruktors

Das folgende Beispiel verwendet den `AsyncGeneratorFunction` Konstruktor, um eine asynchrone Generatorfunktion zu erstellen.

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
const createAsyncGenerator = new AsyncGeneratorFunction("a", "yield a * 2");
const asyncGen = createAsyncGenerator(10);
asyncGen.next().then((res) => console.log(res.value)); // 20
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- [`Function()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Functions", "Funktionen", "", 1)}}
