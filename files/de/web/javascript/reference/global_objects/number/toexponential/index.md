---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`toExponential()`** Methode von {{jsxref("Number")}} Werten gibt einen String zurück, der diese Zahl in der Exponentialschreibweise darstellt.

{{EmbedInteractiveExample("pages/js/number-toexponential.html")}}

## Syntax

```js-nolint
toExponential()
toExponential(fractionDigits)
```

### Parameter

- `fractionDigits` {{optional_inline}}
  - : Optional. Eine Ganzzahl, die die Anzahl der Ziffern nach dem Dezimalpunkt angibt. Standardmäßig sind so viele Ziffern erforderlich, um die Zahl zu spezifizieren.

### Rückgabewert

Ein String, der das gegebene {{jsxref("Number")}} Objekt in Exponentialschreibweise darstellt, mit einer Ziffer vor dem Dezimalpunkt, gerundet auf `fractionDigits` Ziffern nach dem Dezimalpunkt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fractionDigits` nicht zwischen `0` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Wenn das Argument `fractionDigits` weggelassen wird, ist die Anzahl der Ziffern nach dem Dezimalpunkt standardmäßig die Anzahl der Ziffern, die erforderlich sind, um den Wert eindeutig darzustellen.

Wenn Sie die `toExponential()` Methode für ein numerisches Literal verwenden und das numerische Literal keinen Exponenten und keinen Dezimalpunkt hat, lassen Sie Leerzeichen vor dem Punkt, der dem Methodenaufruf vorangeht, um zu verhindern, dass der Punkt als Dezimalpunkt interpretiert wird.

Wenn eine Zahl mehr Ziffern hat, als durch den Parameter `fractionDigits` angefordert, wird die Zahl auf die nächste durch `fractionDigits` Ziffern dargestellte Zahl gerundet. Siehe die Diskussion zur Rundung in der Beschreibung der {{jsxref("Number/toFixed", "toFixed()")}} Methode, die auch für `toExponential()` gilt.

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

- [Polyfill von `Number.prototype.toExponential` mit vielen Bugfixes in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
