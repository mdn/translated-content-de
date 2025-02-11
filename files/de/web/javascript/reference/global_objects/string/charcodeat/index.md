---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`charCodeAt()`** von {{jsxref("String")}}-Werten gibt eine Ganzzahl zwischen `0` und `65535` zurück, die die UTF-16-Code-Einheit an dem angegebenen Index repräsentiert.

`charCodeAt()` indiziert den String immer als eine Sequenz von [UTF-16-Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) und kann daher Einzel-Surrogate zurückgeben. Um den vollständigen Unicode-Codepunkt an einem gegebenen Index zu erhalten, verwenden Sie {{jsxref("String.prototype.codePointAt()")}}.

{{InteractiveExample("JavaScript Demo: String.charCodeAt()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);
// Expected output: "Character code 113 is equal to q"
```

## Syntax

```js-nolint
charCodeAt(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des Zeichens, das zurückgegeben werden soll. [Wird in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 konvertiert.

### Rückgabewert

Eine Ganzzahl zwischen `0` und `65535`, die den Wert der UTF-16-Code-Einheit des Zeichens am angegebenen `index` darstellt. Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `charCodeAt()` {{jsxref("NaN")}} zurück.

## Beschreibung

Zeichen in einem String werden von links nach rechts indiziert. Der Index des ersten Zeichens ist `0` und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). `charCodeAt()` gibt immer einen Wert zurück, der kleiner als `65536` ist, da die höheren Codepunkte durch _ein Paar_ von 16-Bit-Surrogat-Pseudo-Zeichen dargestellt werden. Um daher ein vollständiges Zeichen mit einem Wert größer als `65535` zu erhalten, ist es notwendig, nicht nur `charCodeAt(i)`, sondern auch `charCodeAt(i + 1)` abzurufen (als ob ein String mit zwei Zeichen manipuliert würde), oder stattdessen {{jsxref("String/codePointAt", "codePointAt(i)")}} zu verwenden. Für Informationen zu Unicode siehe [UTF-16 Characters, Unicode Code Points, and Grapheme Clusters](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Beispiele

### Verwendung von charCodeAt()

Das folgende Beispiel gibt `65` zurück, den Unicode-Wert für A.

```js
"ABC".charCodeAt(0); // returns 65
```

`charCodeAt()` kann Einzel-Surrogate zurückgeben, die keine gültigen Unicode-Zeichen darstellen.

```js
const str = "𠮷𠮾";
console.log(str.charCodeAt(0)); // 55362, or d842, which is not a valid Unicode character
console.log(str.charCodeAt(1)); // 57271, or dfb7, which is not a valid Unicode character
```

Um den vollständigen Unicode-Codepunkt am angegebenen Index zu erhalten, verwenden Sie {{jsxref("String.prototype.codePointAt()")}}.

```js
const str = "𠮷𠮾";
console.log(str.codePointAt(0)); // 134071
```

> [!NOTE]
> Vermeiden Sie es, `codePointAt()` mit `charCodeAt()` neu zu implementieren. Die Umrechnung von UTF-16-Surrogaten in Unicode-Codepunkte ist komplex, und `codePointAt()` ist möglicherweise performanter, da es direkt die interne Repräsentation des Strings nutzt. Installieren Sie bei Bedarf ein Polyfill für `codePointAt()`.

Unten finden Sie einen möglichen Algorithmus, um ein Paar von UTF-16-Code-Einheiten in einen Unicode-Codepunkt umzuwandeln, adaptiert aus der [Unicode-FAQ](https://unicode.org/faq/utf_bom.html#utf16-3):

```js
// constants
const LEAD_OFFSET = 0xd800 - (0x10000 >> 10);
const SURROGATE_OFFSET = 0x10000 - (0xd800 << 10) - 0xdc00;

function utf16ToUnicode(lead, trail) {
  return (lead << 10) + trail + SURROGATE_OFFSET;
}
function unicodeToUTF16(codePoint) {
  const lead = LEAD_OFFSET + (codePoint >> 10);
  const trail = 0xdc00 + (codePoint & 0x3ff);
  return [lead, trail];
}

const str = "𠮷";
console.log(utf16ToUnicode(str.charCodeAt(0), str.charCodeAt(1))); // 134071
console.log(str.codePointAt(0)); // 134071
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
