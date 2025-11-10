---
title: Math.round()
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Math.round()`** gibt den Wert einer Zahl zurück, der auf die nächstgelegene ganze Zahl gerundet ist.

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

Der Wert von `x`, gerundet auf die nächstgelegene ganze Zahl.

## Beschreibung

Wenn der Bruchteil des Arguments größer als 0.5 ist, wird das Argument auf die ganze Zahl mit dem nächsthöheren absoluten Wert gerundet. Wenn es kleiner als 0.5 ist, wird das Argument auf die ganze Zahl mit dem niedrigeren absoluten Wert gerundet. Wenn der Bruchteil genau 0.5 ist, wird das Argument auf die nächste ganze Zahl in Richtung +∞ gerundet.

> [!NOTE]
> Dies unterscheidet sich von den `round()`-Funktionen vieler Programmiersprachen, die halbe Inkremente oft _weg von Null_ runden, was bei negativen Zahlen mit einem Bruchteil von genau 0.5 zu einem anderen Ergebnis führt.

`Math.round(x)` ist nicht genau dasselbe wie [`Math.floor(x + 0.5)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor). Wenn `x` gleich -0 ist oder -0.5 ≤ x < 0, gibt `Math.round(x)` -0 zurück, während `Math.floor(x + 0.5)` 0 zurückgibt. Abgesehen von diesem Unterschied und möglichen Präzisionsfehlern, sind `Math.round(x)` und `Math.floor(x + 0.5)` im Allgemeinen äquivalent.

Da `round()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.round()` und nicht als eine Methode eines erstellten `Math`-Objekts (`Math` hat keinen Konstruktor).

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
