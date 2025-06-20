---
title: Math.min()
short-title: min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Math.min()`** gibt die kleinste der als Eingabeparameter angegebenen Zahlen zurück oder {{jsxref("Infinity")}}, wenn keine Parameter angegeben sind.

{{InteractiveExample("JavaScript Demo: Math.min()")}}

```js interactive-example
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1
```

## Syntax

```js-nolint
Math.min()
Math.min(value1)
Math.min(value1, value2)
Math.min(value1, value2, /* …, */ valueN)
```

### Parameter

- `value1`, …, `valueN`
  - : Null oder mehr Zahlen, unter denen der niedrigste Wert ausgewählt und zurückgegeben wird.

### Rückgabewert

Die kleinste der angegebenen Zahlen. Gibt {{jsxref("NaN")}} zurück, wenn einer der Parameter `NaN` ist oder in `NaN` umgewandelt wird. Gibt {{jsxref("Infinity")}} zurück, wenn keine Parameter bereitgestellt werden.

## Beschreibung

Da `min()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.min()`, anstatt sie als Methode eines von Ihnen erstellten `Math`-Objekts zu verwenden (`Math` ist kein Konstruktor).

[`Math.min.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) ist 2, was schwach signalisiert, dass es so konzipiert ist, dass es mindestens zwei Parameter verarbeiten kann.

## Beispiele

### Verwendung von Math.min()

Dies findet das Minimum von `x` und `y` und weist es `z` zu:

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

### Abschneiden eines Wertes mit Math.min()

`Math.min()` wird häufig verwendet, um einen Wert so abzuschneiden, dass er immer kleiner oder gleich einer Grenze ist. Zum Beispiel kann dies

```js
let x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

so geschrieben werden

```js
const x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} kann in ähnlicher Weise verwendet werden, um einen Wert am anderen Ende abzuschneiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.max()")}}
