---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Math.tan()`** gibt die Tangente einer Zahl im Bogenmaß zurück.

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
  - : Eine Zahl, die einen Winkel im Bogenmaß repräsentiert.

### Rückgabewert

Die Tangente von `x`. Falls `x` {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}} ist, wird {{jsxref("NaN")}} zurückgegeben.

> [!NOTE]
> Aufgrund der Begrenzung der Gleitkomma-Präzision ist es nicht möglich, den genauen Wert von π/2 zu erhalten. Daher ist das Ergebnis immer endlich, falls es nicht `NaN` ist.

## Beschreibung

Da `tan()` eine statische Methode von `Math` ist, wird sie immer als `Math.tan()` verwendet und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

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

Da die Funktion `Math.tan()` Bogenmaß erwartet, es jedoch oft einfacher ist, mit Gradwerten zu arbeiten, akzeptiert die folgende Funktion einen Wert in Grad, konvertiert ihn in Bogenmaß und gibt die Tangente zurück.

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
