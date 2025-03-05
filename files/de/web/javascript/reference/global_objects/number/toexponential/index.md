---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`toExponential()`**-Methode von {{jsxref("Number")}}-Werten gibt eine Zeichenkette zurück, die diese Zahl in Exponentialschreibweise darstellt.

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
  - : Optional. Eine Ganzzahl, die die Anzahl der Nachkommastellen angibt. Standardmäßig wird so viele Nachkommastellen verwendet, wie nötig sind, um die Zahl eindeutig darzustellen.

### Rückgabewert

Eine Zeichenkette, die das gegebene {{jsxref("Number")}}-Objekt in Exponentialschreibweise darstellt, mit einer Ziffer vor dem Dezimalpunkt, gerundet auf `fractionDigits` Nachkommastellen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fractionDigits` nicht zwischen `0` und `100` liegt (einschließlich).
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Wenn das `fractionDigits`-Argument weggelassen wird, entspricht die Anzahl der Nachkommastellen der Anzahl der Stellen, die erforderlich sind, um den Wert eindeutig darzustellen.

Wenn Sie die `toExponential()`-Methode für ein numerisches Literal verwenden und das numerische Literal keinen Exponenten und keinen Dezimalpunkt hat, lassen Sie Leerzeichen vor dem Punkt, der dem Methodenaufruf vorangeht, um zu verhindern, dass der Punkt als Dezimalpunkt interpretiert wird.

Wenn eine Zahl mehr Stellen hat als durch den `fractionDigits`-Parameter angefordert, wird die Zahl auf die nächstgelegene Zahl gerundet, die mit `fractionDigits`-Stellen dargestellt wird. Siehe die Diskussion über Rundung in der Beschreibung der {{jsxref("Number/toFixed", "toFixed()")}}-Methode, die auch für `toExponential()` gilt.

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
