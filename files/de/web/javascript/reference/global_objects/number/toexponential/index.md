---
title: Number.prototype.toExponential()
short-title: toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toExponential()`**-Methode von {{jsxref("Number")}}-Werten gibt eine Zeichenkette zurück, die diese Zahl in exponentieller Notation darstellt.

{{InteractiveExample("JavaScript Demo: Number.prototype.toExponential()")}}

```js interactive-example
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2));
// Expected output: "1.23e+5"

console.log(expo("123456"));
// Expected output: "1.23456e+5"

console.log(expo("oink"));
// Expected output: "NaN"
```

## Syntax

```js-nolint
toExponential()
toExponential(fractionDigits)
```

### Parameter

- `fractionDigits` {{optional_inline}}
  - : Optional. Eine Ganzzahl, die die Anzahl der Ziffern nach dem Dezimalpunkt angibt. Standardmäßig so viele Ziffern, wie nötig sind, um die Zahl anzugeben.

### Rückgabewert

Eine Zeichenkette, die das gegebene {{jsxref("Number")}}-Objekt in exponentieller Notation darstellt, mit einer Ziffer vor dem Dezimalpunkt, gerundet auf `fractionDigits` Ziffern nach dem Dezimalpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fractionDigits` nicht zwischen `0` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Wenn das Argument `fractionDigits` weggelassen wird, ist die Anzahl der Ziffern nach dem Dezimalpunkt standardmäßig die Anzahl der Ziffern, die erforderlich sind, um den Wert eindeutig darzustellen.

Wenn Sie die Methode `toExponential()` für ein Zahlenliteral verwenden und das Zahlenliteral weder einen Exponenten noch einen Dezimalpunkt hat, lassen Sie Leerzeichen vor dem Punkt, der dem Methodenaufruf vorausgeht, um zu verhindern, dass der Punkt als Dezimalpunkt interpretiert wird.

Wenn eine Zahl mehr Ziffern hat, als durch den `fractionDigits`-Parameter angefordert wurden, wird die Zahl auf die nächstliegende Zahl gerundet, die durch `fractionDigits` Ziffern dargestellt wird. Siehe die Diskussion über Rundung in der Beschreibung der {{jsxref("Number/toFixed", "toFixed()")}}-Methode, die auch für `toExponential()` gilt.

## Beispiele

### Verwendung von toExponential

```js
const numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
console.log(numObj.toExponential(2)); // 7.71e+1
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77).toExponential()); // 7.7e+1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.prototype.toExponential` mit vielen Fehlerkorrekturen in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.prototype.toExponential`](https://www.npmjs.com/package/number.prototype.toexponential)
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
