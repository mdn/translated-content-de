---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Math.tan()`** gibt den Tangens einer Zahl im Bogenmaß zurück.

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## Syntax

```js-nolint
Math.tan(x)
```

### Parameter

- `x`
  - : Eine Zahl, die einen Winkel im Bogenmaß darstellt.

### Rückgabewert

Der Tangens von `x`. Falls `x` {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}} ist, wird {{jsxref("NaN")}} zurückgegeben.

> [!NOTE]
> Aufgrund der Gleitkomma-Genauigkeit ist es nicht möglich, den exakten Wert π/2 zu erhalten, daher ist das Ergebnis immer endlich, wenn es nicht `NaN` ist.

## Beschreibung

Da `tan()` eine statische Methode von `Math` ist, wird sie immer als `Math.tan()` verwendet und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

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

Es ist nicht möglich, `tan(π/2)` exakt zu berechnen.

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
