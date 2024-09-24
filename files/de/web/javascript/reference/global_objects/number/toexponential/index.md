---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`toExponential()`** Methode von {{jsxref("Number")}} Werten gibt eine Zeichenkette zurück, die
diese Zahl in Exponentialschreibweise darstellt.

{{EmbedInteractiveExample("pages/js/number-toexponential.html")}}

## Syntax

```js-nolint
toExponential()
toExponential(fractionDigits)
```

### Parameter

- `fractionDigits` {{optional_inline}}
  - : Optional. Ein ganzzahliger Wert, der die Anzahl der Nachkommastellen angibt.
    Standardmäßig wird die Anzahl an Ziffern verwendet, die notwendig ist, um die Zahl darzustellen.

### Rückgabewert

Eine Zeichenkette, die das gegebene {{jsxref("Number")}} Objekt in Exponentialschreibweise darstellt,
mit einer Ziffer vor dem Dezimalpunkt, gerundet auf
`fractionDigits` Nachkommastellen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `fractionDigits` nicht zwischen `0` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das keine {{jsxref("Number")}} ist.

## Beschreibung

Wenn das `fractionDigits` Argument weggelassen wird, wird die Anzahl der Ziffern
nach dem Dezimalpunkt standardmäßig auf die Anzahl der Ziffern gesetzt, die benötigt wird, um den
Wert eindeutig darzustellen.

Wenn Sie die `toExponential()` Methode für eine numerische Literalzahl verwenden und die
numerische Literalzahl keinen Exponenten und keinen Dezimalpunkt hat, lassen Sie Leerzeichen vor dem Punkt
stehen, der den Methodenaufruf einleitet, um zu verhindern, dass der Punkt als Dezimalpunkt interpretiert wird.

Wenn eine Zahl mehr Ziffern hat als durch den
`fractionDigits` Parameter angefordert, wird die Zahl auf die nächste Zahl
gerundet, die durch `fractionDigits` Ziffern dargestellt wird. Siehe die Diskussion
über das Runden in der Beschreibung der {{jsxref("Number/toFixed", "toFixed()")}} Methode, die auch für `toExponential()` gilt.

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
