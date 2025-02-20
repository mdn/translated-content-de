---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Number.isInteger()`** bestimmt, ob der übergebene Wert eine Ganzzahl ist.

{{InteractiveExample("JavaScript Demo: Number.isInteger()")}}

```js interactive-example
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return "Fits!";
  }
  return "Does NOT fit!";
}

console.log(fits(5, 10));
// Expected output: "Fits!"

console.log(fits(5, 11));
// Expected output: "Does NOT fit!"
```

## Syntax

```js-nolint
Number.isInteger(value)
```

### Parameter

- `value`
  - : Der Wert, der auf Ganzzahligkeit geprüft werden soll.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine Ganzzahl ist. Andernfalls `false`.

## Beschreibung

Wenn der Zielwert eine Ganzzahl ist, wird `true` zurückgegeben, andernfalls `false`. Wenn der Wert {{jsxref("NaN")}} oder {{jsxref("Infinity")}} ist, wird `false` zurückgegeben. Die Methode gibt auch `true` für Gleitkommazahlen zurück, die als Ganzzahl dargestellt werden können. Sie gibt immer `false` zurück, wenn der Wert keine Zahl ist.

Beachten Sie, dass einige Zahlenliterale, obwohl sie wie keine Ganzzahlen aussehen, tatsächlich Ganzzahlen darstellen – aufgrund der Präzisionsgrenze der ECMAScript-Gleitkomma-Zahlenkodierung (IEEE-754). Zum Beispiel unterscheidet sich `5.0000000000000001` nur durch `1e-16` von `5`, was zu klein ist, um dargestellt zu werden. (Zur Referenz: [`Number.EPSILON`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) gibt den Abstand zwischen 1 und der nächsten darstellbaren Gleitkommazahl größer als 1 an, und dieser beträgt etwa `2.22e-16`.) Daher wird `5.0000000000000001` mit der gleichen Kodierung wie `5` dargestellt, wodurch `Number.isInteger(5.0000000000000001)` `true` zurückgibt.

In ähnlicher Weise leiden Zahlen in der Größenordnung von [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) unter Präzisionsverlust, wodurch `Number.isInteger` `true` zurückgibt, auch wenn es sich nicht um eine Ganzzahl handelt. (Die tatsächliche Schwelle variiert basierend darauf, wie viele Bits benötigt werden, um die Dezimalzahl darzustellen – zum Beispiel ist `Number.isInteger(4500000000000000.1)` `true`, aber `Number.isInteger(4500000000000000.5)` ist `false`.)

## Beispiele

### Verwendung von isInteger

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true, because of loss of precision
Number.isInteger(4500000000000000.1); // true, because of loss of precision
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.isInteger` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
