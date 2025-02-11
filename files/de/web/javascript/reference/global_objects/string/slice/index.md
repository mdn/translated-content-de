---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`slice()`**-Methode von {{jsxref("String")}}-Werten extrahiert einen Abschnitt des Strings und gibt ihn als neuen String zurück, ohne den ursprünglichen String zu verändern.

{{InteractiveExample("JavaScript Demo: String.slice()", "taller")}}

```js interactive-example
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
```

## Syntax

```js-nolint
slice(indexStart)
slice(indexStart, indexEnd)
```

### Parameter

- `indexStart`
  - : Der Index des ersten Zeichens, das im zurückgegebenen Teilstring enthalten sein soll.
- `indexEnd` {{optional_inline}}
  - : Der Index des ersten Zeichens, das vom zurückgegebenen Teilstring ausgeschlossen werden soll.

### Rückgabewert

Ein neuer String, der den extrahierten Abschnitt des ursprünglichen Strings enthält.

## Beschreibung

`slice()` extrahiert den Text aus einem String und gibt einen neuen String zurück.

`slice()` extrahiert bis, aber nicht einschließlich `indexEnd`. Zum Beispiel extrahiert `str.slice(4, 8)` das fünfte bis achte Zeichen (Zeichen mit Index `4`, `5`, `6` und `7`):

```plain
              indexStart        indexEnd
                  ↓               ↓
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| T | h | e |   | m | i | r | r | o | r |

                  m   i   r   r
                 _______________
                      ↑
                    Result
```

- Wenn `indexStart >= str.length`, wird ein leerer String zurückgegeben.
- Wenn `indexStart < 0` ist, wird der Index vom Ende des Strings aus gezählt. Formal beginnt in diesem Fall der Teilstring bei `max(indexStart + str.length, 0)`.
- Wenn `indexStart` weggelassen, undefiniert ist oder nicht [in eine Zahl umgewandelt werden kann](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), wird er als `0` behandelt.
- Wenn `indexEnd` weggelassen oder undefiniert ist oder `indexEnd >= str.length`, extrahiert `slice()` bis zum Ende des Strings.
- Wenn `indexEnd < 0`, wird der Index vom Ende des Strings aus gezählt. Formal endet in diesem Fall der Teilstring bei `max(indexEnd + str.length, 0)`.
- Wenn `indexEnd <= indexStart` nach Normalisierung negativer Werte (d. h. `indexEnd` repräsentiert ein Zeichen, das vor `indexStart` liegt), wird ein leerer String zurückgegeben.

## Beispiele

### Die Verwendung von slice(), um einen neuen String zu erstellen

Das folgende Beispiel zeigt, wie `slice()` verwendet wird, um einen neuen String zu erstellen.

```js
const str1 = "The morning is upon us."; // The length of str1 is 23.
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
console.log(str2); // he morn
console.log(str3); // morning is upon u
console.log(str4); // is upon us.
console.log(str5); // ""
```

### Die Verwendung von slice() mit negativen Indizes

Das folgende Beispiel zeigt die Verwendung von `slice()` mit negativen Indizes.

```js
const str = "The morning is upon us.";
str.slice(-3); // 'us.'
str.slice(-3, -1); // 'us'
str.slice(0, -1); // 'The morning is upon us'
str.slice(4, -1); // 'morning is upon us'
```

In diesem Beispiel wird vom Ende des Strings 11 Stellen rückwärts gezählt, um den Startindex zu finden, und vom Anfang des Strings 16 Stellen vorwärts gezählt, um den Endindex zu finden.

```js
console.log(str.slice(-11, 16)); // "is u"
```

Hier wird vom Anfang aus 11 Stellen vorwärts gezählt, um den Startindex zu finden, und vom Ende aus 7 Stellen rückwärts gezählt, um den Endindex zu finden.

```js
console.log(str.slice(11, -7)); // " is u"
```

Diese Argumente zählen 5 Stellen rückwärts vom Ende, um den Startindex zu finden, und 1 Stelle rückwärts vom Ende, um den Endindex zu finden.

```js
console.log(str.slice(-5, -1)); // "n us"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
