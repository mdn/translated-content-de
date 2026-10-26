---
title: Number.prototype.toExponential()
short-title: toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toExponential()`** von {{jsxref("Number")}}-Werten gibt einen String zurück, der die Zahl in Exponentialschreibweise darstellt.

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
  - : Optional. Eine Ganzzahl, die die Anzahl der Ziffern nach dem Dezimalpunkt angibt. Standardmäßig werden so viele Ziffern verwendet, wie zur Darstellung der Zahl erforderlich sind.

### Rückgabewert

Ein String, der das angegebene {{jsxref("Number")}}-Objekt in Exponentialschreibweise darstellt: mit einer Ziffer vor dem Dezimalpunkt und gerundet auf `fractionDigits` Ziffern nach dem Dezimalpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fractionDigits` nicht zwischen `0` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode für ein Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Wenn das Argument `fractionDigits` weggelassen wird, werden standardmäßig so viele Ziffern nach dem Dezimalpunkt verwendet, wie nötig sind, um den Wert eindeutig darzustellen.

Wenn Sie die Methode `toExponential()` für ein numerisches Literal verwenden und das Literal weder einen Exponenten noch einen Dezimalpunkt enthält, lassen Sie vor dem Punkt, der dem Methodenaufruf vorangeht, mindestens ein Leerzeichen. So verhindern Sie, dass der Punkt als Dezimalpunkt interpretiert wird.

Wenn eine Zahl mehr Ziffern hat, als durch den Parameter `fractionDigits` angefordert werden, wird sie auf die nächstgelegene Zahl gerundet, die mit `fractionDigits` Ziffern dargestellt werden kann. Weitere Informationen finden Sie in der Erläuterung zur Rundung in der Beschreibung der Methode {{jsxref("Number/toFixed", "toFixed()")}}. Diese Erläuterung gilt auch für `toExponential()`.

## Beispiele

### toExponential verwenden

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

- [Polyfill für `Number.prototype.toExponential` mit zahlreichen Fehlerbehebungen in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [Polyfill für `Number.prototype.toExponential` von es-shims](https://www.npmjs.com/package/number.prototype.toexponential)
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
