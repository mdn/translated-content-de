---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Number.isNaN()`** bestimmt, ob der übergebene Wert der Zahlenwert {{jsxref("NaN")}} ist, und gibt `false` zurück, wenn die Eingabe nicht vom Typ Number ist. Sie ist eine robustere Version der ursprünglichen globalen Funktion {{jsxref("isNaN()")}}.

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
  - : Der Wert, der auf {{jsxref("NaN")}} geprüft werden soll.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Zahl mit dem Wert {{jsxref("NaN")}} ist. Andernfalls `false`.

## Beschreibung

Die Funktion `Number.isNaN()` bietet eine bequeme Möglichkeit, die Gleichheit mit `NaN` zu prüfen. Beachten Sie, dass Sie die Gleichheit mit `NaN` weder mit dem [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) noch mit dem [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) Operator überprüfen können, da im Gegensatz zu allen anderen Wertvergleichen in JavaScript diese zu `false` auswerten, sobald ein Operand {{jsxref("NaN")}} ist, selbst wenn der andere Operand ebenfalls {{jsxref("NaN")}} ist.

Da `x !== x` nur für `NaN` unter allen möglichen JavaScript-Werten wahr ist, kann `Number.isNaN(x)` auch mit einem Test für `x !== x` ersetzt werden, obwohl letzteres weniger lesbar ist.

Im Gegensatz zur globalen Funktion {{jsxref("isNaN()")}} erzwingt die Methode `Number.isNaN()` keine Umwandlung des Parameters in eine Zahl. Dies macht es sicher, Werte zu übergeben, die normalerweise zu {{jsxref("NaN")}} konvertiert würden, aber eigentlich nicht denselben Wert wie {{jsxref("NaN")}} haben. Das bedeutet auch, dass nur Werte des Typs Number, die auch {{jsxref("NaN")}} sind, `true` zurückgeben.

## Beispiele

### Verwendung von isNaN()

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Unterschied zwischen Number.isNaN() und globalem isNaN()

`Number.isNaN()` versucht nicht, den Parameter in eine Zahl zu konvertieren, daher geben Nicht-Nummern immer `false` zurück. Die folgenden Werte sind alle `false`:

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

Die globale Funktion {{jsxref("isNaN()")}} erzwingt die Umwandlung ihres Parameters in eine Zahl:

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
- [es-shims Polyfill von `Number.isNaN`](https://www.npmjs.com/package/number.isnan)
- {{jsxref("Number")}}
- {{jsxref("isNaN()")}}
