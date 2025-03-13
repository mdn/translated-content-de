---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toExponential()`**-Methode von {{jsxref("Number")}}-Werten gibt einen String zurück, der diese Zahl in Exponentialschreibweise darstellt.

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
  - : Optional. Ein ganzzahliger Wert, der die Anzahl der Ziffern nach dem Dezimalkomma angibt.
    Standardmäßig wird so viele Ziffern verwendet, wie notwendig sind, um die Zahl darzustellen.

### Rückgabewert

Ein String, der das gegebene {{jsxref("Number")}}-Objekt in Exponentialschreibweise darstellt, mit einer Ziffer vor dem Dezimalkomma, gerundet auf `fractionDigits` Ziffern nach dem Dezimalkomma.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fractionDigits` nicht zwischen `0` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Wenn das `fractionDigits`-Argument weggelassen wird, entspricht die Anzahl der Ziffern nach dem Dezimalkomma der Anzahl, die notwendig ist, um den Wert eindeutig darzustellen.

Wenn Sie die `toExponential()`-Methode für ein numerisches Literal ohne Exponent und Dezimalkomma verwenden, lassen Sie Leerzeichen vor dem Punkt, der dem Methodenaufruf vorausgeht, um zu verhindern, dass der Punkt als Dezimalkomma interpretiert wird.

Wenn eine Zahl mehr Ziffern hat, als durch den `fractionDigits`-Parameter angefordert wird, wird die Zahl auf die nächste Zahl gerundet, die durch `fractionDigits`-Ziffern dargestellt wird. Siehe die Diskussion über das Runden in der Beschreibung der {{jsxref("Number/toFixed", "toFixed()")}}-Methode, die auch für `toExponential()` gilt.

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

- [Polyfill von `Number.prototype.toExponential` mit vielen Fehlerbehebungen in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.prototype.toExponential`](https://www.npmjs.com/package/number.prototype.toexponential)
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
