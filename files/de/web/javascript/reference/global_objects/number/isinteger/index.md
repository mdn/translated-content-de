---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

---

title: "Number.isInteger()"
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
page-type: javascript-static-method
browser-compat: javascript.builtins.Number.isInteger
---

{{JSRef}}

Die statische Methode **`Number.isInteger()`** bestimmt, ob der übergebene Wert eine Ganzzahl ist.

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## Syntax

```js-nolint
Number.isInteger(value)
```

### Parameter

- `value`
  - : Der Wert, der auf Ganzzahligkeit getestet werden soll.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Ganzzahl ist. Andernfalls `false`.

## Beschreibung

Wenn der Zielwert eine Ganzzahl ist, wird `true` zurückgegeben, andernfalls `false`. Wenn der Wert {{jsxref("NaN")}} oder {{jsxref("Infinity")}} ist, wird `false` zurückgegeben. Die Methode gibt auch `true` für Gleitkommazahlen zurück, die als Ganzzahlen dargestellt werden können. Sie wird immer `false` zurückgeben, wenn der Wert keine Zahl ist.

Beachten Sie, dass einige Zahlenliterale, obwohl sie wie Nicht-Ganzzahlen aussehen, tatsächlich Ganzzahlen darstellen — aufgrund der Begrenzung der Genauigkeit der ECMAScript-Gleitkommazahlencodierung (IEEE-754). Zum Beispiel unterscheidet sich `5.0000000000000001` nur um `1e-16` von `5`, was zu klein ist, um dargestellt zu werden. (Zum Vergleich speichert [`Number.EPSILON`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) den Abstand zwischen 1 und der nächsten darstellbaren Gleitkommazahl größer als 1 und das ist etwa `2.22e-16`.) Daher wird `5.0000000000000001` mit der gleichen Codierung wie `5` dargestellt, wodurch `Number.isInteger(5.0000000000000001)` `true` zurückgibt.

In ähnlicher Weise werden Zahlen in der Größenordnung von [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) unter Präzisionsverlust leiden und `Number.isInteger` wird `true` zurückgeben, selbst wenn sie keine Ganzzahl sind. (Die tatsächliche Schwelle variiert basierend darauf, wie viele Bits benötigt werden, um die Dezimalzahl darzustellen — zum Beispiel ist `Number.isInteger(4500000000000000.1)` `true`, aber `Number.isInteger(4500000000000000.5)` ist `false`.)

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
