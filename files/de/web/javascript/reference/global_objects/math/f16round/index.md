---
title: Math.f16round()
slug: Web/JavaScript/Reference/Global_Objects/Math/f16round
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die **`Math.f16round()`** statische Methode gibt die nächstgelegene [16-Bit-Halbpräzisions](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Gleitkommadarstellung einer Zahl zurück.

{{EmbedInteractiveExample("pages/js/math-f16round.html")}}

## Syntax

```js-nolint
Math.f16round(doubleFloat)
```

### Parameter

- `doubleFloat`
  - : Eine Zahl.

### Rückgabewert

Die nächstgelegene [16-Bit-Halbpräzisions](https://en.wikipedia.org/wiki/Half-precision_floating-point_format) Gleitkommadarstellung von `doubleFloat`.

## Beschreibung

`Math.f16round` ist das 16-Bit-Gegenstück zu {{jsxref("Math.fround()")}}. Es soll einige Ungenauigkeiten beim Umgang mit float16-Zahlen glätten, etwa beim Einlesen aus einem {{jsxref("Float16Array")}}. Intern wird die Zahl in JavaScript weiterhin als 64-Bit-Gleitkommazahl behandelt; es wird lediglich eine "Runden auf gerade"-Operation am 10. Bit der Mantisse durchgeführt, und alle folgenden Mantissenbits werden auf `0` gesetzt. Liegt die Zahl außerhalb des Bereichs eines 16-Bit-Gleitkommas, wird {{jsxref("Infinity")}} oder `-Infinity` zurückgegeben.

Da `f16round()` eine statische Methode von `Math` ist, wird sie immer als `Math.f16round()` verwendet, und nicht als Methode eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.f16round()

Die Zahl 1.5 kann im binären Zahlensystem exakt dargestellt werden und ist in 16-Bit und 64-Bit identisch:

```js
Math.f16round(1.5); // 1.5
Math.f16round(1.5) === 1.5; // true
```

Allerdings kann die Zahl 1.337 im binären Zahlensystem nicht exakt dargestellt werden, daher unterscheidet sie sich in 16-Bit und 64-Bit:

```js
Math.f16round(1.337); // 1.3369140625
Math.f16round(1.337) === 1.337; // false
```

100000 ist zu groß für ein 16-Bit-Gleitkomma, daher wird `Infinity` zurückgegeben:

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
