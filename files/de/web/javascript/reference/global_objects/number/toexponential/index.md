---
title: Number.prototype.toExponential()
short-title: toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`toExponential()`** von {{jsxref("Number")}}-Werten gibt einen String zurück, der diese Zahl in exponentieller Notation darstellt.

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
  - : Optional. Eine ganze Zahl, die die Anzahl der Nachkommastellen angibt. Standardmäßig entspricht dies der Anzahl der Stellen, die erforderlich sind, um die Zahl anzugeben.

### Rückgabewert

Ein String, der das gegebene {{jsxref("Number")}}-Objekt in exponentieller Notation mit einer Ziffer vor dem Dezimalpunkt darstellt, gerundet auf `fractionDigits` Nachkommastellen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fractionDigits` nicht zwischen `0` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Wird das `fractionDigits`-Argument weggelassen, entspricht die Anzahl der Nachkommastellen standardmäßig der Anzahl, die erforderlich ist, um den Wert eindeutig darzustellen.

Wenn Sie die `toExponential()`-Methode für ein numerisches Literal verwenden und das numerische Literal keinen Exponenten und keinen Dezimalpunkt hat, lassen Sie Leerzeichen vor dem Punkt, der dem Methodenaufruf vorausgeht, um zu verhindern, dass der Punkt als Dezimalpunkt interpretiert wird.

Wenn eine Zahl mehr Stellen hat, als durch den `fractionDigits`-Parameter gefordert, wird die Zahl auf die nächste, durch `fractionDigits`-Stellen vertretene Zahl gerundet. Siehe die Diskussion über das Runden in der Beschreibung der {{jsxref("Number/toFixed", "toFixed()")}}-Methode, die auch für `toExponential()` gilt.

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
