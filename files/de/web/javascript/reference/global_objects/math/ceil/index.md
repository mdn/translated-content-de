---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
l10n:
  sourceCommit: 910a6fedb299488ba7e94b884da7bcd71e79ec1a
---

{{JSRef}}

Die statische Methode **`Math.ceil()`** rundet immer auf und gibt die kleinste ganze Zahl zurück, die größer oder gleich einer gegebenen Zahl ist.

{{EmbedInteractiveExample("pages/js/math-ceil.html")}}

## Syntax

```js-nolint
Math.ceil(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Die kleinste ganze Zahl, die größer oder gleich `x` ist. Es ist derselbe Wert wie [`-Math.floor(-x)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).

## Beschreibung

Da `ceil()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.ceil()` und nicht als eine Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.ceil()

```js
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
