---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Math.tan()`** gibt den Tangens einer Zahl in Radiant zurück.

{{EmbedInteractiveExample("pages/js/math-tan.html")}}

## Syntax

```js-nolint
Math.tan(x)
```

### Parameter

- `x`
  - : Eine Zahl, die einen Winkel in Radiant darstellt.

### Rückgabewert

Der Tangens von `x`. Wenn `x` {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}} ist, wird {{jsxref("NaN")}} zurückgegeben.

> [!NOTE]
> Aufgrund der Gleitkomma-Präzision ist es nicht möglich, den exakten Wert π/2 zu erreichen, sodass das Ergebnis immer endlich ist, wenn es nicht `NaN` ist.

## Beschreibung

Da `tan()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.tan()` und nicht als eine Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

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

Da die Funktion `Math.tan()` Radiant akzeptiert, es aber oft einfacher ist, mit Grad zu arbeiten, akzeptiert die folgende Funktion einen Wert in Grad, wandelt ihn in Radiant um und gibt den Tangens zurück.

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
