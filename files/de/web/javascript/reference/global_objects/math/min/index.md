---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Math.min()`** gibt die kleinste der als Eingabeparameter übergebenen Zahlen zurück oder {{jsxref("Infinity")}}, falls keine Parameter übergeben werden.

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
  - : Null oder mehr Zahlen, von denen der geringste Wert ausgewählt und zurückgegeben wird.

### Rückgabewert

Die kleinste der angegebenen Zahlen. Gibt {{jsxref("NaN")}} zurück, wenn einer der Parameter `NaN` ist oder in `NaN` umgewandelt wird. Gibt {{jsxref("Infinity")}} zurück, wenn keine Parameter angegeben werden.

## Beschreibung

Da `min()` eine statische Methode von `Math` ist, wird sie immer als `Math.min()` verwendet und nicht als Methode eines durch Sie erstellten `Math` Objekts (`Math` ist kein Konstruktor).

[`Math.min.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) ist 2, was schwach signalisiert, dass sie darauf ausgelegt ist, mit mindestens zwei Parametern zu arbeiten.

## Beispiele

### Verwendung von Math.min()

Hier wird das Minimum von `x` und `y` gefunden und `z` zugewiesen:

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

### Begrenzen eines Wertes mit Math.min()

`Math.min()` wird häufig verwendet, um einen Wert zu begrenzen, sodass er immer kleiner oder gleich einer Grenze ist. Zum Beispiel kann dies

```js
let x = f(foo);

if (x > boundary) {
  x = boundary;
}
```

so geschrieben werden:

```js
const x = Math.min(f(foo), boundary);
```

{{jsxref("Math.max()")}} kann in ähnlicher Weise verwendet werden, um einen Wert am anderen Ende zu begrenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.max()")}}
