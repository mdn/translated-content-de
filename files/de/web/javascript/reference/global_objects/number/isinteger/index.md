---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die statische Methode **`Number.isInteger()`** bestimmt, ob der übergebene Wert eine ganze Zahl ist.

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## Syntax

```js-nolint
Number.isInteger(value)
```

### Parameter

- `value`
  - : Der Wert, der darauf getestet werden soll, ob er eine ganze Zahl ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine ganze Zahl ist. Andernfalls `false`.

## Beschreibung

Wenn der Zielwert eine ganze Zahl ist, gibt er `true` zurück, ansonsten `false`. Wenn der Wert {{jsxref("NaN")}} oder {{jsxref("Infinity")}} ist, gibt er `false` zurück. Die Methode gibt auch `true` für Gleitkommazahlen zurück, die als ganze Zahl dargestellt werden können. Sie gibt immer `false` zurück, wenn der Wert keine Zahl ist.

Man sollte beachten, dass einige Zahlenliterale, die wie Nicht-Integer aussehen, tatsächlich ganze Zahlen darstellen – aufgrund der Präzisionsgrenze der ECMAScript-Gleitkommazahlencodierung (IEEE-754). Zum Beispiel unterscheidet sich `5.0000000000000001` nur um `1e-16` von `5`, was zu klein ist, um dargestellt zu werden. (Zur Referenz speichert [`Number.EPSILON`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) den Abstand zwischen 1 und der nächsten darstellbaren Gleitkommazahl größer als 1, und das ist etwa `2.22e-16`.) Daher wird `5.0000000000000001` mit der gleichen Codierung wie `5` dargestellt, was dazu führt, dass `Number.isInteger(5.0000000000000001)` `true` zurückgibt.

In ähnlicher Weise leiden Zahlen im Bereich der Größe von [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) unter Präzisionsverlust und führen dazu, dass `Number.isInteger` `true` zurückgibt, auch wenn es sich nicht um eine ganze Zahl handelt. (Die tatsächliche Schwelle variiert, je nachdem wie viele Bits benötigt werden, um die Dezimalzahl darzustellen – zum Beispiel ist `Number.isInteger(4500000000000000.1)` `true`, aber `Number.isInteger(4500000000000000.5)` ist `false`.)

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
Number.isInteger(5.0000000000000001); // true, aufgrund von Präzisionsverlust
Number.isInteger(4500000000000000.1); // true, aufgrund von Präzisionsverlust
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.isInteger` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
