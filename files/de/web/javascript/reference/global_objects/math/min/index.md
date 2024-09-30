---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

Die statische Methode **`Math.min()`** gibt die kleinste der als Eingabeparameter gegebenen Zahlen zurück oder {{jsxref("Infinity")}}, wenn keine Parameter vorhanden sind.

{{EmbedInteractiveExample("pages/js/math-min.html")}}

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

Die kleinste der gegebenen Zahlen. Gibt {{jsxref("NaN")}} zurück, wenn einer der Parameter `NaN` ist oder in `NaN` umgewandelt wird. Gibt {{jsxref("Infinity")}} zurück, wenn keine Parameter bereitgestellt werden.

## Beschreibung

Da `min()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.min()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

[`Math.min.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) ist 2, was schwach signalisiert, dass es entworfen wurde, um mindestens zwei Parameter zu verarbeiten.

## Beispiele

### Verwendung von Math.min()

Dies findet das Minimum von `x` und `y` und weist es `z` zu:

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

### Clipping eines Wertes mit Math.min()

`Math.min()` wird häufig verwendet, um einen Wert zu begrenzen, sodass er immer kleiner oder gleich einer Grenze ist. Zum Beispiel kann dies

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

{{jsxref("Math.max()")}} kann in ähnlicher Weise verwendet werden, um einen Wert am anderen Ende zu begrenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.max()")}}
