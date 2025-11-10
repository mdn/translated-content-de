---
title: Math.tan()
short-title: tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Math.tan()`** statische Methode gibt den Tangens einer Zahl in Radiant zurück.

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
  - : Eine Zahl, die einen Winkel in Radiant darstellt.

### Rückgabewert

Der Tangens von `x`. Wenn `x` {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}} ist, wird {{jsxref("NaN")}} zurückgegeben.

> [!NOTE]
> Aufgrund der Gleitkommagenauigkeit ist es nicht möglich, den exakten Wert π/2 zu erhalten, daher ist das Ergebnis immer endlich, wenn es nicht `NaN` ist.

## Beschreibung

Da `tan()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.tan()` und nicht als Methode eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

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

Da die Funktion `Math.tan()` Radiant akzeptiert, es aber oft einfacher ist, mit Grad zu arbeiten, akzeptiert die folgende Funktion einen Wert in Grad, konvertiert ihn in Radiant und gibt den Tangens zurück.

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
