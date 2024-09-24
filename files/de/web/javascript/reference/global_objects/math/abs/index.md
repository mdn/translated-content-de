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

Der Absolutwert von `x`. Wenn `x` negativ oder `-0` ist, wird seine gegenteilige Zahl `-x` zurückgegeben (die nicht negativ ist). Andernfalls wird `x` selbst zurückgegeben. Das Ergebnis ist daher immer eine positive Zahl oder `0`.

## Beschreibung

Da `abs()` eine statische Methode von `Math` ist, wird sie immer als `Math.abs()` verwendet, und nicht als eine Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

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

### Erzwungene Typumwandlung des Parameters

`Math.abs()` [erzwingt eine Typumwandlung seines Parameters zu einer Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Nicht umwandelbare Werte werden zu `NaN`, sodass `Math.abs()` auch `NaN` zurückgibt.

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
