---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Methode **`Math.sin()`** gibt den Sinus einer Zahl in Bogenmaß zurück.

{{EmbedInteractiveExample("pages/js/math-sin.html")}}

## Syntax

```js-nolint
Math.sin(x)
```

### Parameter

- `x`
  - : Eine Zahl, die einen Winkel in Bogenmaß darstellt.

### Rückgabewert

Der Sinus von `x`, zwischen -1 und 1 inklusive. Wenn `x` {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}} ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `sin()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.sin()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.sin()

```js
Math.sin(-Infinity); // NaN
Math.sin(-0); // -0
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965
Math.sin(Math.PI / 2); // 1
Math.sin(Infinity); // NaN
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
- {{jsxref("Math.tan()")}}
