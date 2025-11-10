---
title: Number.isInteger()
short-title: isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Number.isInteger()`** bestimmt, ob der übergebene Wert eine ganze Zahl ist.

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
  - : Der Wert, der darauf getestet werden soll, ob er eine ganze Zahl ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine ganze Zahl ist. Andernfalls `false`.

## Beschreibung

Wenn der Zielwert eine ganze Zahl ist, wird `true` zurückgegeben, andernfalls `false`. Ist der Wert {{jsxref("NaN")}} oder {{jsxref("Infinity")}}, wird `false` zurückgegeben. Die Methode gibt auch `true` für Gleitkommazahlen zurück, die als ganze Zahl dargestellt werden können. Sie wird immer `false` zurückgeben, wenn der Wert keine Zahl ist.

Beachten Sie, dass einige Zahlenliterale, die wie Nicht-Ganzzahlen aussehen, tatsächlich ganze Zahlen darstellen – aufgrund der Präzisionsgrenze der ECMAScript-Gleitkommazahlenkodierung (IEEE-754). Zum Beispiel unterscheidet sich `5.0000000000000001` nur um `1e-16` von `5`, was zu klein ist, um dargestellt zu werden. (Zum Vergleich, [`Number.EPSILON`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) speichert die Entfernung zwischen 1 und der nächstgrößeren darstellbaren Gleitkommazahl größer als 1, und diese ist etwa `2.22e-16`.) Daher wird `5.0000000000000001` mit der gleichen Kodierung wie `5` dargestellt, sodass `Number.isInteger(5.0000000000000001)` `true` zurückgibt.

In ähnlicher Weise erleiden Zahlen im Bereich der Größenordnung von [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) einen Präzisionsverlust und führen dazu, dass `Number.isInteger` `true` zurückgibt, auch wenn es sich nicht um eine ganze Zahl handelt. (Die tatsächliche Schwelle variiert je nach Anzahl der benötigten Bits zur Darstellung der Dezimalstelle – zum Beispiel ist `Number.isInteger(4500000000000000.1)` `true`, aber `Number.isInteger(4500000000000000.5)` ist `false`.)

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
- [es-shims Polyfill von `Number.isInteger`](https://www.npmjs.com/package/number.isinteger)
- {{jsxref("Number")}}
