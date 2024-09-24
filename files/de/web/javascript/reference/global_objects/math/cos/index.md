---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die **`Math.cos()`** statische Methode gibt den Kosinus einer Zahl in Bogenmaß zurück.

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

## Syntax

```js-nolint
Math.cos(x)
```

### Parameter

- `x`
  - : Eine Zahl, die einen Winkel in Bogenmaß darstellt.

### Rückgabewert

Der Kosinus von `x`, zwischen -1 und 1, einschließlich. Wenn `x` {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}} ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `cos()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.cos()` und nicht als Methode eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.cos()

```js
Math.cos(-Infinity); // NaN
Math.cos(-0); // 1
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398
Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
Math.cos(Infinity); // NaN
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
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
