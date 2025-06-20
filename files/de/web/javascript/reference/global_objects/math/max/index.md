---
title: Math.max()
short-title: max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Math.max()`** gibt die größte der übergebenen Zahlen als Eingabeparameter zurück oder -{{jsxref("Infinity")}}, wenn keine Parameter angegeben werden.

{{InteractiveExample("JavaScript Demo: Math.max()")}}

```js interactive-example
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3
```

## Syntax

```js-nolint
Math.max()
Math.max(value1)
Math.max(value1, value2)
Math.max(value1, value2, /* …, */ valueN)
```

### Parameter

- `value1`, …, `valueN`
  - : Null oder mehr Zahlen, aus denen der größte Wert ausgewählt und zurückgegeben wird.

### Rückgabewert

Die größte der angegebenen Zahlen. Gibt {{jsxref("NaN")}} zurück, wenn einer der Parameter `NaN` ist oder in `NaN` umgewandelt wird. Gibt -{{jsxref("Infinity")}} zurück, wenn keine Parameter angegeben werden.

## Beschreibung

Da `max()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.max()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

[`Math.max.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) ist 2, was schwach andeutet, dass es darauf ausgelegt ist, mindestens zwei Parameter zu verarbeiten.

## Beispiele

### Verwendung von Math.max()

```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### Das Maximum eines Arrays ermitteln

{{jsxref("Array.prototype.reduce()")}} kann verwendet werden, um das maximale Element in einem numerischen Array zu finden, indem jeder Wert verglichen wird:

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

Die folgende Funktion verwendet {{jsxref("Function.prototype.apply()")}}, um das Maximum eines Arrays zu erhalten. `getMaxOfArray([1, 2, 3])` ist gleichwertig mit `Math.max(1, 2, 3)`, aber Sie können `getMaxOfArray()` auf programmgesteuert konstruierte Arrays anwenden. Dies sollte nur bei Arrays mit relativ wenigen Elementen verwendet werden.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

Die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ist eine kürzere Art, die `apply`-Lösung zu schreiben, um das Maximum eines Arrays zu erhalten:

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

Allerdings werden sowohl Spread (`...`) als auch `apply` entweder fehlschlagen oder das falsche Ergebnis liefern, wenn das Array zu viele Elemente hat, da sie versuchen, die Array-Elemente als Funktionsparameter zu übergeben. Weitere Details finden Sie unter [Using apply and built-in functions](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions). Die `reduce`-Lösung hat dieses Problem nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.min()")}}
