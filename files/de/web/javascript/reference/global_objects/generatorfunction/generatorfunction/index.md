---
title: GeneratorFunction() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Der **`GeneratorFunction()`**-Konstruktor erstellt {{jsxref("GeneratorFunction")}}-Objekte.

Beachten Sie, dass `GeneratorFunction` _kein_ globales Objekt ist. Es kann mit dem folgenden Code erhalten werden:

```js
const GeneratorFunction = function* () {}.constructor;
```

Der `GeneratorFunction()`-Konstruktor ist nicht dazu gedacht, direkt verwendet zu werden, und alle in der Beschreibung von {{jsxref("Function/Function", "Function()")}} erwähnten Warnhinweise gelten auch für `GeneratorFunction()`.

## Syntax

```js-nolint
new GeneratorFunction(functionBody)
new GeneratorFunction(arg1, functionBody)
new GeneratorFunction(arg1, arg2, functionBody)
new GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

GeneratorFunction(functionBody)
GeneratorFunction(arg1, functionBody)
GeneratorFunction(arg1, arg2, functionBody)
GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> **Note:** `GeneratorFunction()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `GeneratorFunction` Instanz.

### Parameter

Siehe {{jsxref("Function/Function", "Function()")}}.

## Beispiele

### Erstellen und Verwenden eines GeneratorFunction() Konstruktors

```js
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- [`Function()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
- {{jsxref("Functions", "Funktionen", "", 1)}}
