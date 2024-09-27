---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Math.round()`** gibt den Wert einer Zahl zurück, der auf die nächste Ganzzahl gerundet ist.

{{EmbedInteractiveExample("pages/js/math-round.html")}}

## Syntax

```js-nolint
Math.round(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der Wert von `x`, gerundet auf die nächste Ganzzahl.

## Beschreibung

Wenn der Bruchteil des Arguments größer als 0,5 ist, wird das Argument auf die Ganzzahl mit dem nächsthöheren absoluten Wert gerundet. Wenn er kleiner als 0,5 ist, wird das Argument auf die Ganzzahl mit dem niedrigeren absoluten Wert gerundet. Wenn der Bruchteil genau 0,5 beträgt, wird das Argument zur nächsten Ganzzahl in Richtung +∞ gerundet.

> [!NOTE]
> Dies unterscheidet sich von den `round()`-Funktionen in vielen anderen Programmiersprachen, die oft halbe Inkremente _von null weg_ runden und bei negativen Zahlen mit einem Bruchteil von genau 0,5 ein anderes Ergebnis liefern.

`Math.round(x)` ist nicht exakt dasselbe wie [`Math.floor(x + 0.5)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor). Wenn `x` -0 ist oder -0.5 ≤ x < 0, gibt `Math.round(x)` -0 zurück, während `Math.floor(x + 0.5)` 0 zurückgibt. Abgesehen von diesem Unterschied und potenziellen Präzisionsfehlern sind `Math.round(x)` und `Math.floor(x + 0.5)` im Allgemeinen gleichwertig.

Da `round()` eine statische Methode von `Math` ist, verwenden Sie es immer als `Math.round()`, anstatt als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` hat keinen Konstruktor).

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
