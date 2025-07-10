---
title: Math.min()
short-title: min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Math.min()`** statische Methode gibt die kleinste der als Eingabeparameter gegebenen Zahlen zurück, oder {{jsxref("Infinity")}}, wenn keine Parameter vorhanden sind.

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

Die kleinste der gegebenen Zahlen. Gibt {{jsxref("NaN")}} zurück, wenn einer der Parameter `NaN` ist oder in `NaN` umgewandelt wird. Gibt {{jsxref("Infinity")}} zurück, wenn keine Parameter angegeben sind.

## Beschreibung

Da `min()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.min()`, anstatt als Methode eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

[`Math.min.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) ist 2, was schwach signalisiert, dass sie dafür ausgelegt ist, mindestens zwei Parameter zu verarbeiten.

## Beispiele

### Verwendung von Math.min()

Dies findet das Minimum von `x` und `y` und weist es `z` zu:

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

### Begrenzen eines Werts mit Math.min()

`Math.min()` wird oft verwendet, um einen Wert zu begrenzen, damit er immer kleiner oder gleich einer Grenze ist. Beispielsweise kann dies

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

{{jsxref("Math.max()")}} kann auf ähnliche Weise verwendet werden, um einen Wert am anderen Ende zu begrenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.max()")}}
