---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`charAt()`** Methode von {{jsxref("String")}} Werten gibt eine neue Zeichenkette zurück, die aus der einzelnen UTF-16-Code-Einheit an dem angegebenen Index besteht.

`charAt()` ordnet die Zeichenkette immer als eine Sequenz von [UTF-16-Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters), sodass es einzelne Surrogate zurückgeben kann. Um den vollständigen Unicode-Codepunkt an dem angegebenen Index zu erhalten, verwenden Sie {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.fromCodePoint()")}}.

{{EmbedInteractiveExample("pages/js/string-charat.html", "shorter")}}

## Syntax

```js-nolint
charAt(index)
```

### Parameter

- `index`
  - : Index des Zeichens, das zurückgegeben werden soll, beginnend bei null. [In eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 umgewandelt.

### Rückgabewert

Eine Zeichenkette, die das Zeichen (genau eine UTF-16-Code-Einheit) am angegebenen `index` darstellt. Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `charAt()` eine leere Zeichenkette zurück.

## Beschreibung

Zeichen in einer Zeichenkette werden von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einer Zeichenkette namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). `charAt()` gibt immer ein Zeichen zurück, dessen Wert kleiner als `65536` ist, da die höheren Codepunkte durch _ein Paar_ 16-Bit-Surrogat-Pseud-Zeichen dargestellt werden. Daher ist es notwendig, um ein vollständiges Zeichen mit einem Wert größer als `65535` zu erhalten, nicht nur `charAt(i)`, sondern auch `charAt(i + 1)` abzurufen (als ob man eine Zeichenkette mit zwei Zeichen manipuliert), oder stattdessen {{jsxref("String/codePointAt", "codePointAt(i)")}} und {{jsxref("String.fromCodePoint()")}} zu verwenden. Für Informationen über Unicode siehe [UTF-16-Zeichen, Unicode-Codepunkte und Grapheme-Clustern](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

`charAt()` ist sehr ähnlich zu der Verwendung von [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation), um ein Zeichen am angegebenen Index zuzugreifen. Die Hauptunterschiede sind:

- `charAt()` versucht, `index` in eine Ganzzahl umzuwandeln, während Klammernotation dies nicht tut und `index` direkt als Eigenschaftsname verwendet.
- `charAt()` gibt eine leere Zeichenkette zurück, wenn `index` außerhalb des Bereichs liegt, während Klammernotation `undefined` zurückgibt.

## Beispiele

### Verwendung von charAt()

Das folgende Beispiel zeigt Zeichen an verschiedenen Positionen in der Zeichenkette `"Brave new world"`:

```js
const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// Kein Index angegeben, 0 als Standard verwendet

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);
```

Diese Zeilen zeigen folgendes an:

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
console.log(str.charAt(0)); // "\ud842", das ist kein gültiges Unicode-Zeichen
console.log(str.charAt(1)); // "\udfb7", das ist kein gültiges Unicode-Zeichen
```

Um den vollständigen Unicode-Codepunkt am angegebenen Index zu erhalten, verwenden Sie eine Indexierungsmethode, die nach Unicode-Codepunkten unterteilt, wie {{jsxref("String.prototype.codePointAt()")}} und [Zeichenketten spreads](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) in ein Array von Unicode-Codepunkten.

```js
const str = "𠮷𠮾";
console.log(String.fromCodePoint(str.codePointAt(0))); // "𠮷"
console.log([...str][0]); // "𠮷"
```

> [!NOTE]
> Vermeiden Sie die erneute Implementierung der obigen Lösungen mit `charAt()`. Die Erkennung von einzelnen Surrogaten und deren Paarung ist komplex, und integrierte APIs können leistungsfähiger sein, da sie die interne Darstellung der Zeichenkette direkt verwenden. Installieren Sie bei Bedarf ein Polyfill für die oben genannten APIs.

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
