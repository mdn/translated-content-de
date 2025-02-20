---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Number.isNaN()`** bestimmt, ob der übergebene Wert der Zahlenwert {{jsxref("NaN")}} ist, und gibt `false` zurück, wenn die Eingabe nicht vom Typ Number ist. Sie ist eine robustere Version der ursprünglichen, globalen Funktion {{jsxref("isNaN()")}}.

{{InteractiveExample("JavaScript Demo: Number.isNaN()", "taller")}}

```js interactive-example
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}

console.log(typeOfNaN("100F"));
// Expected output: "NaN"

console.log(typeOfNaN(NaN));
// Expected output: "Number NaN"
```

## Syntax

```js-nolint
Number.isNaN(value)
```

### Parameter

- `value`
  - : Der Wert, der auf {{jsxref("NaN")}} überprüft werden soll.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine Zahl mit dem Wert {{jsxref("NaN")}} ist. Andernfalls `false`.

## Beschreibung

Die Funktion `Number.isNaN()` bietet eine bequeme Möglichkeit, `NaN` zu überprüfen. Beachten Sie, dass Sie `NaN` nicht mit den Operatoren [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) oder [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) auf Gleichheit testen können, da im Gegensatz zu allen anderen Wertvergleichen in JavaScript diese immer `false` ergeben, wenn ein Operand {{jsxref("NaN")}} ist, selbst wenn der andere Operand ebenfalls {{jsxref("NaN")}} ist.

Da `x !== x` nur für `NaN` unter allen möglichen JavaScript-Werten wahr ist, kann `Number.isNaN(x)` auch durch einen Test auf `x !== x` ersetzt werden, obwohl Letzteres weniger lesbar ist.

Im Gegensatz zur globalen Funktion {{jsxref("isNaN()")}} erzwingt die Methode `Number.isNaN()` keine Konvertierung des Parameters in eine Zahl. Dies macht es sicher, Werte zu übergeben, die normalerweise in {{jsxref("NaN")}} konvertiert würden, aber tatsächlich nicht denselben Wert wie {{jsxref("NaN")}} haben. Dies bedeutet auch, dass nur Werte des Typs Number, die auch {{jsxref("NaN")}} sind, `true` zurückgeben.

## Beispiele

### Verwendung von isNaN()

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Unterschied zwischen Number.isNaN() und global isNaN()

`Number.isNaN()` versucht nicht, den Parameter in eine Zahl umzuwandeln, sodass Nicht-Zahlen immer `false` zurückgeben. Folgende Beispiele ergeben alle `false`:

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

Die globale Funktion {{jsxref("isNaN()")}} wandelt ihren Parameter in eine Zahl um:

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
