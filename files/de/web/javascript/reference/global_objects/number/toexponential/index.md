---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toExponential()`**-Methode von {{jsxref("Number")}}-Werten gibt einen String zurück, der diese Zahl in exponentieller Notation darstellt.

{{InteractiveExample("JavaScript Demo: Number.toExponential()")}}

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
  - : Optional. Eine ganze Zahl, die die Anzahl der Stellen nach dem Dezimalpunkt angibt.
    Standardmäßig wird so viele Stellen wie nötig verwendet, um die Zahl darzustellen.

### Rückgabewert

Ein String, der das gegebene {{jsxref("Number")}}-Objekt in exponentieller Notation darstellt, mit einer Ziffer vor dem Dezimalpunkt, gerundet auf `fractionDigits` Stellen nach dem Dezimalpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wirft einen Fehler, wenn `fractionDigits` nicht zwischen `0` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Wirft einen Fehler, wenn diese Methode auf ein Objekt angewendet wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Falls das `fractionDigits`-Argument weggelassen wird, entspricht die Anzahl der Stellen nach dem Dezimalpunkt der Anzahl, die erforderlich ist, um den Wert eindeutig darzustellen.

Wenn Sie die `toExponential()`-Methode für einen numerischen Literal verwenden und dieser keinen Exponenten und keinen Dezimalpunkt hat, lassen Sie Leerzeichen vor dem Punkt, der dem Methodenaufruf vorausgeht, um zu verhindern, dass dieser Punkt als Dezimalpunkt interpretiert wird.

Falls eine Zahl mehr Stellen hat, als durch den `fractionDigits`-Parameter angegeben, wird die Zahl auf die nächste durch `fractionDigits` Stellen repräsentierte Zahl gerundet. Siehe die Diskussion über das Runden in der Beschreibung der {{jsxref("Number/toFixed", "toFixed()")}}-Methode, die auch für `toExponential()` gilt.

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
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
