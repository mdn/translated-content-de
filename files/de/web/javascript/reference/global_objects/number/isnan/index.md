---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Number.isNaN()`** bestimmt, ob der übergebene Wert der Zahlenwert {{jsxref("NaN")}} ist, und gibt `false` zurück, wenn der Eingangswert nicht vom Typ Number ist. Es ist eine robustere Version der ursprünglichen, globalen Funktion {{jsxref("isNaN()")}}.

{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}

## Syntax

```js-nolint
Number.isNaN(value)
```

### Parameter

- `value`
  - : Der zu testende Wert für {{jsxref("NaN")}}.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine Zahl mit dem Wert {{jsxref("NaN")}} ist. Andernfalls `false`.

## Beschreibung

Die Funktion `Number.isNaN()` bietet eine bequeme Möglichkeit, auf Gleichheit mit `NaN` zu prüfen. Beachten Sie, dass Sie die Gleichheit mit `NaN` weder mit dem [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) noch dem [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) Operator testen können, da im Gegensatz zu allen anderen Wertvergleichen in JavaScript diese immer `false` ergeben, wenn einer der Operanden {{jsxref("NaN")}} ist, selbst wenn der andere Operand ebenfalls {{jsxref("NaN")}} ist.

Da `x !== x` nur für `NaN` unter allen möglichen JavaScript-Werten wahr ist, kann `Number.isNaN(x)` auch durch einen Test auf `x !== x` ersetzt werden, obwohl Letzteres weniger lesbar ist.

Im Gegensatz zur globalen Funktion {{jsxref("isNaN()")}} konvertiert die Methode `Number.isNaN()` den Parameter nicht in eine Zahl. Dies macht es sicher, Werte zu übergeben, die normalerweise in {{jsxref("NaN")}} umgewandelt würden, aber tatsächlich nicht denselben Wert wie {{jsxref("NaN")}} haben. Das bedeutet auch, dass nur Werte vom Typ Number, die auch {{jsxref("NaN")}} sind, `true` zurückgeben.

## Beispiele

### Verwendung von isNaN()

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Unterschied zwischen Number.isNaN() und global isNaN()

`Number.isNaN()` versucht nicht, den Parameter in eine Zahl umzuwandeln, daher geben Nicht-Zahlen immer `false` zurück. Die folgenden Beispiele sind alle `false`:

```js
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

Die globale Funktion {{jsxref("isNaN()")}} zwingt ihren Parameter zu einer Zahl:

```js
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false, this is coerced to 1
isNaN(null); // false, this is coerced to 0
isNaN("37"); // false, this is coerced to 37
isNaN("37.37"); // false, this is coerced to 37.37
isNaN(""); // false, this is coerced to 0
isNaN(" "); // false, this is coerced to 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.isNaN` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("isNaN()")}}
