---
title: Math.tan()
short-title: tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

Die statische Methode **`Math.tan()`** gibt den Tangens einer Zahl in Bogenmaß zurück.

{{InteractiveExample("JavaScript Demo: Math.tan()")}}

```js interactive-example
function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

console.log(getTanFromDegrees(0));
// Expected output: 0

console.log(getTanFromDegrees(45));
// Expected output: 0.9999999999999999

console.log(getTanFromDegrees(90));
// Expected output: 16331239353195370
```

## Syntax

```js-nolint
Math.tan(x)
```

### Parameter

- `x`
  - : Eine Zahl, die einen Winkel in Bogenmaß darstellt.

### Rückgabewert

Der Tangens von `x`. Wenn `x` {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}} ist, wird {{jsxref("NaN")}} zurückgegeben.

> [!NOTE]
> Aufgrund der Gleitkomma-Genauigkeit ist es nicht möglich, den exakten Wert von π/2 zu erhalten, daher ist das Ergebnis immer endlich, wenn es nicht `NaN` ist.

## Beschreibung

Da `tan()` eine statische Methode von `Math` ist, verwenden Sie es immer als `Math.tan()` und nicht als eine Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.tan()

```js
Math.tan(-Infinity); // NaN
Math.tan(-0); // -0
Math.tan(0); // 0
Math.tan(1); // 1.5574077246549023
Math.tan(Math.PI / 4); // 0.9999999999999999 (Floating point error)
Math.tan(Infinity); // NaN
```

### Math.tan() und π/2

Es ist nicht möglich, `tan(π/2)` genau zu berechnen.

```js
Math.tan(Math.PI / 2); // 16331239353195370
Math.tan(Math.PI / 2 + Number.EPSILON); // -6218431163823738
```

### Verwendung von Math.tan() mit einem Gradwert

Da die Funktion `Math.tan()` Bogenmaß akzeptiert, es jedoch oft einfacher ist, mit Grad zu arbeiten, akzeptiert die folgende Funktion einen Wert in Grad, konvertiert ihn in Bogenmaß und gibt den Tangens zurück.

```js
function getTanDeg(deg) {
  const rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- CSS {{cssxref("tan()")}} Funktion
