---
title: Number.isInteger()
short-title: isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Number.isInteger()`** ermittelt, ob der übergebene Wert eine Ganzzahl ist.

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
  - : Der Wert, der darauf geprüft werden soll, ob er eine Ganzzahl ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Ganzzahl ist. Andernfalls `false`.

## Beschreibung

Wenn der übergebene Wert eine Ganzzahl ist, gibt die Methode `true` zurück, andernfalls `false`. Wenn der Wert {{jsxref("NaN")}} oder {{jsxref("Infinity")}} ist, gibt sie `false` zurück. Die Methode gibt auch für Gleitkommazahlen `true` zurück, die sich als Ganzzahlen darstellen lassen. Wenn der Wert keine Zahl ist, gibt sie immer `false` zurück.

Beachten Sie, dass manche Zahlenliterale zwar nicht wie Ganzzahlen aussehen, tatsächlich aber Ganzzahlen darstellen. Das liegt an der begrenzten Genauigkeit der Gleitkommakodierung von ECMAScript (IEEE 754). Beispielsweise unterscheidet sich `5.0000000000000001` von `5` nur um `1e-16`, was zu klein ist, um dargestellt zu werden. (Zum Vergleich: [`Number.EPSILON`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) enthält den Abstand zwischen 1 und der nächstgrößeren darstellbaren Gleitkommazahl. Dieser beträgt etwa `2.22e-16`.) Daher wird `5.0000000000000001` genauso kodiert wie `5`, sodass `Number.isInteger(5.0000000000000001)` `true` zurückgibt.

Ebenso kommt es bei Zahlen in der Größenordnung von [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) zu Genauigkeitsverlusten. Dadurch kann `Number.isInteger` `true` zurückgeben, obwohl der angegebene Wert keine Ganzzahl zu sein scheint. (Die genaue Grenze hängt davon ab, wie viele Bits zur Darstellung der Dezimalzahl benötigt werden. Beispielsweise ergibt `Number.isInteger(4500000000000000.1)` den Wert `true`, während `Number.isInteger(4500000000000000.5)` den Wert `false` ergibt.)

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

- [Polyfill für `Number.isInteger` in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [Polyfill für `Number.isInteger` von es-shims](https://www.npmjs.com/package/number.isinteger)
- {{jsxref("Number")}}
