---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`charAt()`** Methode von {{jsxref("String")}} Werten gibt einen neuen String zurück, der aus der einzelnen UTF-16 Codeeinheit am angegebenen Index besteht.

`charAt()` indiziert den String immer als eine Folge von [UTF-16 Codeeinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters), sodass es einzelne Surrogate zurückgeben kann. Um den vollständigen Unicode-Codepunkt am angegebenen Index zu erhalten, verwenden Sie {{jsxref("String.prototype.codePointAt()")}} und {{jsxref("String.fromCodePoint()")}}.

{{InteractiveExample("JavaScript Demo: String.prototype.charAt()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"
```

## Syntax

```js-nolint
charAt(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des Zeichens, das zurückgegeben werden soll. [Konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird zu 0 konvertiert.

### Rückgabewert

Ein String, der das Zeichen (genau eine UTF-16 Codeeinheit) am angegebenen `index` darstellt. Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `charAt()` einen leeren String zurück.

## Beschreibung

Zeichen in einem String werden von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). `charAt()` gibt immer ein Zeichen zurück, dessen Wert kleiner als `65536` ist, da die höheren Codepunkte durch _ein Paar_ von 16-Bit-Surrogat-Pseudozahlen dargestellt werden. Daher ist es notwendig, um ein vollständiges Zeichen mit einem Wert größer als `65535` zu erhalten, nicht nur `charAt(i)`, sondern auch `charAt(i + 1)` abzurufen (als ob man einen String mit zwei Zeichen manipulieren würde), oder stattdessen {{jsxref("String/codePointAt", "codePointAt(i)")}} und {{jsxref("String.fromCodePoint()")}} zu verwenden. Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

`charAt()` ist dem Verwenden der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) zum Zugriff auf ein Zeichen am angegebenen Index sehr ähnlich. Die Hauptunterschiede sind:

- `charAt()` versucht, `index` in eine Ganzzahl zu konvertieren, während die Klammernotation dies nicht tut und `index` direkt als Eigenschaftsname verwendet.
- `charAt()` gibt einen leeren String zurück, wenn `index` außerhalb des Bereichs liegt, während die Klammernotation `undefined` zurückgibt.

## Beispiele

### Verwendung von charAt()

Das folgende Beispiel zeigt Zeichen an verschiedenen Positionen im String `"Brave new world"` an:

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
console.log(str.charAt(0)); // "\ud842", which is not a valid Unicode character
console.log(str.charAt(1)); // "\udfb7", which is not a valid Unicode character
```

Um den vollständigen Unicode-Codepunkt am angegebenen Index zu erhalten, verwenden Sie eine Indizierungsmethode, die nach Unicode-Codepunkten aufteilt, wie {{jsxref("String.prototype.codePointAt()")}} und [Aufspaltung von Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) in ein Array von Unicode-Codepunkten.

```js
const str = "𠮷𠮾";
console.log(String.fromCodePoint(str.codePointAt(0))); // "𠮷"
console.log([...str][0]); // "𠮷"
```

> [!NOTE]
> Vermeiden Sie es, die oben genannten Lösungen mit `charAt()` erneut zu implementieren. Die Erkennung von einzelnen Surrogaten und deren Paarung ist komplex, und integrierte APIs sind möglicherweise leistungsfähiger, da sie direkt die interne Darstellung des Strings verwenden. Installieren Sie bei Bedarf ein Polyfill für die oben genannten APIs.

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
