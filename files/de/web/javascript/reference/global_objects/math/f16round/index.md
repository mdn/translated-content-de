---
title: Math.f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die statische Methode **`Math.f16round()`** gibt die nächstliegende [16-Bit-Halbgenauigkeit](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Gleitkommardarstellung einer Zahl zurück.

{{EmbedInteractiveExample("pages/js/math-f16round.html")}}

## Syntax

```js-nolint
Math.f16round(doubleFloat)
```

### Parameter

- `doubleFloat`
  - : Eine Zahl.

### Rückgabewert

Die nächstliegende [16-Bit-Halbgenauigkeit](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Gleitkommardarstellung von `doubleFloat`.

## Beschreibung

`Math.f16round` ist das 16-Bit-Gegenstück zu {{jsxref("Math.fround()")}}. Es soll einige Ungenauigkeiten beim Umgang mit `float16`-Zahlen glätten, z.B. beim Lesen aus einem {{jsxref("Float16Array")}}. Intern behandelt JavaScript die Zahl weiterhin als 64-Bit-Gleitkommazahl. Es führt lediglich ein "Rundung auf gerade" am 10. Bit der Mantisse durch und setzt alle folgenden Mantissenbits auf `0`. Wenn die Zahl außerhalb des Bereichs einer 16-Bit-Gleitkommazahl liegt, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `f16round()` eine statische Methode von `Math` ist, wird sie immer als `Math.f16round()` verwendet, statt als Methode eines von Ihnen erstellten `Math`-Objekts (da `Math` kein Konstruktor ist).

## Beispiele

### Verwendung von Math.f16round()

Die Zahl 1.5 kann im binären Zahlensystem genau dargestellt werden und ist sowohl in 16-Bit als auch in 64-Bit identisch:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

Jedoch kann die Zahl 1.337 im binären Zahlensystem nicht genau dargestellt werden, sodass sie sich in 16-Bit und 64-Bit unterscheidet:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 ist zu groß für eine 16-Bit-Gleitkommazahl, daher wird `Infinity` zurückgegeben:

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
