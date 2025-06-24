---
title: AsyncGeneratorFunction() Konstruktor
short-title: AsyncGeneratorFunction()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`AsyncGeneratorFunction()`**-Konstruktor erstellt {{jsxref("AsyncGeneratorFunction")}}-Objekte.

Beachten Sie, dass `AsyncGeneratorFunction` kein globales Objekt ist. Es kann durch Ausführen des folgenden Codes erhalten werden.

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

Der `AsyncGeneratorFunction()`-Konstruktor ist nicht dafür gedacht, direkt verwendet zu werden. Alle in der Beschreibung von {{jsxref("Function/Function", "Function()")}} genannten Einschränkungen gelten auch für `AsyncGeneratorFunction()`.

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

> [!NOTE] > `AsyncGeneratorFunction()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Aufrufe erzeugen eine neue Instanz von `AsyncGeneratorFunction`.

### Parameter

Siehe {{jsxref("Function/Function", "Function()")}}.

## Beispiele

### Verwendung des Konstruktors

Das folgende Beispiel verwendet den `AsyncGeneratorFunction`-Konstruktor, um eine asynchrone Generatorfunktion zu erstellen.

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
- {{jsxref("Functions", "Functions", "", 1)}}
