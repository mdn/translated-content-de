---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Math.round()`** statische Methode gibt den Wert einer Zahl zurück, gerundet auf die nächste ganze Zahl.

{{InteractiveExample("JavaScript Demo: Math.round()")}}

```js interactive-example
console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6
```

## Syntax

```js-nolint
Math.round(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der Wert von `x`, gerundet auf die nächste ganze Zahl.

## Beschreibung

Wenn der Bruchteil des Arguments größer als 0,5 ist, wird das Argument auf die ganze Zahl mit dem nächsthöheren absoluten Wert gerundet. Wenn der Bruchteil kleiner als 0,5 ist, wird das Argument auf die ganze Zahl mit dem niedrigeren absoluten Wert gerundet. Wenn der Bruchteil genau 0,5 beträgt, wird das Argument auf die nächste ganze Zahl in Richtung +∞ gerundet.

> [!NOTE]
> Dies unterscheidet sich von den `round()`-Funktionen vieler anderer Sprachen, die halbe Werte oft _vom Nullpunkt weg_ runden und bei negativen Zahlen mit einem Bruchteil von genau 0,5 ein anderes Ergebnis liefern.

`Math.round(x)` ist nicht exakt gleich wie [`Math.floor(x + 0.5)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor). Wenn `x` -0 oder -0.5 ≤ x < 0 ist, gibt `Math.round(x)` -0 zurück, während `Math.floor(x + 0.5)` 0 zurückgibt. Abgesehen von diesem Unterschied und möglichen Präzisionsfehlern sind `Math.round(x)` und `Math.floor(x + 0.5)` im Allgemeinen gleichwertig.

Da `round()` eine statische Methode von `Math` ist, wird sie immer als `Math.round()` verwendet und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` hat keinen Konstruktor).

## Beispiele

### Verwendung von round

```js
Math.round(-Infinity); // -Infinity
Math.round(-20.51); // -21
Math.round(-20.5); // -20
Math.round(-0.1); // -0
Math.round(0); // 0
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(42); // 42
Math.round(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
