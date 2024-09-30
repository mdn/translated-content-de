---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Number.isNaN()`** bestimmt, ob der übergebene Wert der Zahlenwert {{jsxref("NaN")}} ist, und gibt `false` zurück, wenn die Eingabe nicht vom Typ Number ist. Es ist eine robustere Version der ursprünglichen globalen Funktion {{jsxref("isNaN()")}}.

{{EmbedInteractiveExample("pages/js/number-isnan.html", "taller")}}

## Syntax

```js-nolint
Number.isNaN(value)
```

### Parameter

- `value`
  - : Der Wert, der auf {{jsxref("NaN")}} getestet werden soll.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Zahl mit dem Wert {{jsxref("NaN")}} ist. Andernfalls `false`.

## Beschreibung

Die Funktion `Number.isNaN()` bietet eine bequeme Möglichkeit, auf Gleichheit mit `NaN` zu prüfen. Beachten Sie, dass Sie die Gleichheit mit `NaN` nicht mit den Operatoren [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) oder [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) testen können, da diese, im Gegensatz zu allen anderen Wertvergleichen in JavaScript, immer `false` ergeben, wenn einer der Operanden {{jsxref("NaN")}} ist, selbst wenn der andere Operand ebenfalls {{jsxref("NaN")}} ist.

Da `x !== x` nur für `NaN` unter allen möglichen JavaScript-Werten wahr ist, kann `Number.isNaN(x)` auch durch einen Test für `x !== x` ersetzt werden, obwohl letzterer weniger lesbar ist.

Im Gegensatz zur globalen Funktion {{jsxref("isNaN()")}} erzwingt die Methode `Number.isNaN()` keine Umwandlung des Parameters in eine Zahl. Dies macht es sicher, Werte zu übergeben, die normalerweise in {{jsxref("NaN")}} umgewandelt würden, aber tatsächlich nicht denselben Wert wie {{jsxref("NaN")}} darstellen. Dies bedeutet auch, dass nur Werte des Typs Number, die ebenfalls {{jsxref("NaN")}} sind, `true` zurückgeben.

## Beispiele

### Verwendung von isNaN()

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Unterschied zwischen Number.isNaN() und globalem isNaN()

`Number.isNaN()` versucht nicht, den Parameter in eine Zahl umzuwandeln, sodass Nicht-Zahlen immer `false` zurückgeben. Die folgenden sind alle `false`:

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

Die globale Funktion {{jsxref("isNaN()")}} konvertiert ihren Parameter zu einer Zahl:

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
