---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
l10n:
  sourceCommit: dc90e6a09235136e0e5113e1fab2c11053e467d7
---

{{JSRef}}

Die statische Methode **`Math.abs()`** gibt den Absolutwert einer Zahl zurück.

{{EmbedInteractiveExample("pages/js/math-abs.html")}}

## Syntax

```js-nolint
Math.abs(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der Absolutwert von `x`. Wenn `x` negativ oder `-0` ist, gibt es die entgegengesetzte Zahl `-x` zurück (welche nicht negativ ist). Andernfalls gibt es `x` selbst zurück. Das Ergebnis ist daher immer eine positive Zahl oder `0`.

## Beschreibung

Da `abs()` eine statische Methode von `Math` ist, verwenden Sie sie stets als `Math.abs()` und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.abs()

```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

### Zwangskonvertierung des Parameters

`Math.abs()` [konvertiert seinen Parameter in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Nicht konvertierbare Werte werden zu `NaN`, und `Math.abs()` gibt ebenfalls `NaN` zurück.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
