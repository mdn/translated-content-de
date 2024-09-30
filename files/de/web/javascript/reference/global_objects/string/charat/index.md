---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`charAt()`**-Methode von {{jsxref("String")}}-Objekten gibt einen neuen String zurück, der aus dem einzelnen UTF-16-Code-Einheit an dem angegebenen Index besteht.

`charAt()` indexiert den String immer als eine Sequenz von [UTF-16-Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters), sodass möglicherweise einzelne Surrogate zurückgegeben werden. Um den vollständigen Unicode-Codepunkt an dem gegebenen Index zu erhalten, verwenden Sie {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.fromCodePoint()")}}.

{{EmbedInteractiveExample("pages/js/string-charat.html", "shorter")}}

## Syntax

```js-nolint
charAt(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des zurückzugebenden Zeichens. [Konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 umgewandelt.

### Rückgabewert

Ein String, der das Zeichen (genau eine UTF-16-Code-Einheit) an dem angegebenen `index` repräsentiert. Wenn `index` außerhalb des Bereichs `0` – `str.length - 1` liegt, gibt `charAt()` einen leeren String zurück.

## Beschreibung

Zeichen in einem String sind von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). `charAt()` gibt immer ein Zeichen zurück, dessen Wert kleiner als `65536` ist, da die höheren Codepunkte durch _ein Paar_ von 16-Bit-Surrogat-Pseudo-Zeichen dargestellt werden. Daher ist es notwendig, um ein vollständiges Zeichen mit einem Wert größer als `65535` zu erhalten, nicht nur `charAt(i)`, sondern auch `charAt(i + 1)` (als ob man einen String mit zwei Zeichen manipuliert) abzurufen, oder stattdessen {{jsxref("String/codePointAt", "codePointAt(i)")}} und {{jsxref("String.fromCodePoint()")}} zu verwenden. Für Informationen zu Unicode, siehe [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

`charAt()` ist der Verwendung von [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zum Zugriff auf ein Zeichen an dem angegebenen Index sehr ähnlich. Die Hauptunterschiede sind:

- `charAt()` versucht, `index` in eine Ganzzahl zu konvertieren, während die Klammernotation dies nicht tut und `index` direkt als Eigenschaftsname verwendet.
- `charAt()` gibt einen leeren String zurück, wenn `index` außerhalb des Bereichs liegt, während die Klammernotation `undefined` zurückgibt.

## Beispiele

### Verwendung von charAt()

Das folgende Beispiel zeigt Zeichen an verschiedenen Positionen in dem String `"Brave new world"`:

```js
const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);
```

Diese Zeilen zeigen Folgendes an:

```plain
The character at index 0   is 'B'

The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''
```

`charAt()` kann einzelne Surrogate zurückgeben, die keine gültigen Unicode-Zeichen sind.

```js
const str = "𠮷𠮾";
console.log(str.charAt(0)); // "\ud842", which is not a valid Unicode character
console.log(str.charAt(1)); // "\udfb7", which is not a valid Unicode character
```

Um den vollständigen Unicode-Codepunkt an dem gegebenen Index zu erhalten, verwenden Sie eine Indizierungsmethode, die nach Unicode-Codepunkten aufteilt, wie {{jsxref("String.prototype.codePointAt()")}} und [Strings aufsplitten](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) in ein Array von Unicode-Codepunkten.

```js
const str = "𠮷𠮾";
console.log(String.fromCodePoint(str.codePointAt(0))); // "𠮷"
console.log([...str][0]); // "𠮷"
```

> [!NOTE]
> Vermeiden Sie es, die obigen Lösungen mit `charAt()` neu zu implementieren. Die Erkennung einzelner Surrogate und deren Paarung ist komplex, und eingebettete APIs können effizienter sein, da sie direkt die interne Darstellung des Strings verwenden. Installieren Sie bei Bedarf ein Polyfill für die oben genannten APIs.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript has a Unicode problem](https://mathiasbynens.be/notes/javascript-unicode) von Mathias Bynens (2013)
