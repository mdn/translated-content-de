---
title: Math.f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die **`Math.f16round()`** statische Methode gibt die nächstgelegene [16-Bit Half-Precision](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Fließkommadarstellung einer Zahl zurück.

{{EmbedInteractiveExample("pages/js/math-f16round.html")}}

## Syntax

```js-nolint
Math.f16round(doubleFloat)
```

### Parameter

- `doubleFloat`
  - : Eine Zahl.

### Rückgabewert

Die nächstgelegene [16-Bit Half-Precision](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Fließkommadarstellung von `doubleFloat`.

## Beschreibung

`Math.f16round` ist das 16-Bit Gegenstück zu {{jsxref("Math.fround()")}}. Es ist darauf ausgelegt, einige Unebenheiten beim Umgang mit `float16`-Zahlen zu glätten, etwa beim Lesen aus einem {{jsxref("Float16Array")}}. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit Fließkommazahl; es wird nur ein "Runden zur nächsten geraden Zahl" an der 10. Stelle der Mantisse durchgeführt, und alle folgenden Mantissenbits werden auf `0` gesetzt. Wenn die Zahl außerhalb des Bereichs einer 16-Bit Fließkommazahl liegt, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `f16round()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.f16round()`, anstatt als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.f16round()

Die Zahl 1.5 kann im binären Zahlensystem exakt dargestellt werden und ist in 16-Bit und 64-Bit identisch:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

Jedoch kann die Zahl 1.337 im binären Zahlensystem nicht exakt dargestellt werden, daher unterscheidet sie sich in 16-Bit und 64-Bit:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 ist zu groß für eine 16-Bit Fließkommazahl, daher wird `Infinity` zurückgegeben:

```js
Math.f16round(100000); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.f16round` in `core-js`](https://github.com/zloirock/core-js#float16-methods)
- {{jsxref("Math.fround()")}}
- {{jsxref("Math.round()")}}
