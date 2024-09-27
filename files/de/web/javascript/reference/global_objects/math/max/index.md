---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

Die statische Methode **`Math.max()`** gibt die größte der als Eingabeparameter gegebenen Zahlen zurück oder -{{jsxref("Infinity")}}, wenn keine Parameter vorhanden sind.

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## Syntax

```js-nolint
Math.max()
Math.max(value1)
Math.max(value1, value2)
Math.max(value1, value2, /* …, */ valueN)
```

### Parameter

- `value1`, …, `valueN`
  - : Null oder mehr Zahlen, unter denen der größte Wert ausgewählt und zurückgegeben wird.

### Rückgabewert

Die größte der gegebenen Zahlen. Gibt {{jsxref("NaN")}} zurück, wenn einer der Parameter `NaN` ist oder zu `NaN` konvertiert wird. Gibt -{{jsxref("Infinity")}} zurück, wenn keine Parameter angegeben sind.

## Beschreibung

Da `max()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.max()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

[`Math.max.length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) ist 2, was schwach signalisiert, dass es für die Verarbeitung von mindestens zwei Parametern ausgelegt ist.

## Beispiele

### Verwendung von Math.max()

```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### Ermittlung des maximalen Elements eines Arrays

{{jsxref("Array.prototype.reduce()")}} kann verwendet werden, um das maximale Element in einem numerischen Array zu finden, indem jeder Wert verglichen wird:

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

Die folgende Funktion verwendet {{jsxref("Function.prototype.apply()")}}, um das Maximum eines Arrays zu ermitteln. `getMaxOfArray([1, 2, 3])` entspricht `Math.max(1, 2, 3)`, aber Sie können `getMaxOfArray()` auf programmgesteuert erstellte Arrays anwenden. Dies sollte nur für Arrays mit relativ wenigen Elementen verwendet werden.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

Die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ist eine kürzere Schreibweise für die `apply`-Lösung, um das Maximum eines Arrays zu ermitteln:

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

Sowohl Spread (`...`) als auch `apply` werden jedoch entweder fehlschlagen oder das falsche Ergebnis zurückgeben, wenn das Array zu viele Elemente hat, da sie versuchen, die Array-Elemente als Funktionsparameter zu übergeben. Siehe [Verwendung von apply und eingebauten Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions) für weitere Details. Die `reduce`-Lösung hat dieses Problem nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.min()")}}
