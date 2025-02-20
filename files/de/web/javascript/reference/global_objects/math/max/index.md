---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Math.max()`** statische Methode gibt den größten der als Eingabeparameter übergebenen Zahlen zurück oder -{{jsxref("Infinity")}}, wenn keine Parameter übergeben werden.

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
  - : Null oder mehr Zahlen, von denen der größte Wert ausgewählt und zurückgegeben wird.

### Rückgabewert

Der größte der übergebenen Zahlen. Gibt {{jsxref("NaN")}} zurück, wenn einer der Parameter `NaN` ist oder in `NaN` umgewandelt wird. Gibt -{{jsxref("Infinity")}} zurück, wenn keine Parameter angegeben sind.

## Beschreibung

Da `max()` eine statische Methode von `Math` ist, wird sie immer als `Math.max()` verwendet und nicht als Methode eines `Math`-Objekts, das Sie erstellt haben (`Math` ist kein Konstruktor).

[`Math.max.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) ist 2, was schwach andeutet, dass es darauf ausgelegt ist, mindestens zwei Parameter zu verarbeiten.

## Beispiele

### Verwendung von Math.max()

```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### Das maximale Element eines Arrays ermitteln

{{jsxref("Array.prototype.reduce()")}} kann verwendet werden, um das maximale
Element in einem numerischen Array zu finden, indem jeder Wert verglichen wird:

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

Die folgende Funktion verwendet {{jsxref("Function.prototype.apply()")}}, um das Maximum eines Arrays zu erhalten. `getMaxOfArray([1, 2, 3])` entspricht `Math.max(1, 2, 3)`, aber Sie können `getMaxOfArray()` für programmgesteuert erstellte Arrays verwenden. Dies sollte nur für Arrays mit relativ wenigen Elementen verwendet werden.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

Die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ist eine kürzere Möglichkeit, die `apply`-Lösung zu schreiben, um das Maximum eines Arrays zu erhalten:

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

Beachten Sie jedoch, dass sowohl Spread (`...`) als auch `apply` entweder fehlschlagen oder das falsche Ergebnis liefern können, wenn das Array zu viele Elemente enthält, da sie versuchen, die Array-Elemente als Funktionsparameter zu übergeben. Weitere Informationen finden Sie unter [Using apply and built-in functions](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions). Die `reduce`-Lösung hat dieses Problem nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.min()")}}
