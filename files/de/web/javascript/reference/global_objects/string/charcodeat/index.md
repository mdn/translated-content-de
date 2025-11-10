---
title: String.prototype.charCodeAt()
short-title: charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`charCodeAt()`** Methode von {{jsxref("String")}}-Werten gibt eine ganze Zahl zwischen `0` und `65535` zurück, die die UTF-16-Code-Einheit an dem angegebenen Index darstellt.

`charCodeAt()` indexiert den String immer als eine Sequenz von [UTF-16-Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters), sodass es möglicherweise einzelne Surrogate zurückgibt. Um den vollständigen Unicode-Codepunkt am angegebenen Index zu erhalten, verwenden Sie {{jsxref("String.prototype.codePointAt()")}}.

{{InteractiveExample("JavaScript Demo: String.prototype.charCodeAt()", "shorter")}}

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
  - : Index des zurückzugebenden Zeichens, beginnend bei Null. [In eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 umgewandelt.

### Rückgabewert

Eine ganze Zahl zwischen `0` und `65535`, die den Wert der UTF-16-Code-Einheit des Zeichens am angegebenen `index` darstellt. Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `charCodeAt()` {{jsxref("NaN")}} zurück.

## Beschreibung

Zeichen in einem String werden von links nach rechts indexiert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). `charCodeAt()` gibt immer einen Wert zurück, der kleiner als `65536` ist, da die höheren Codepunkte durch _ein Paar_ von 16-Bit-Surrogate-Pseudo-Zeichen dargestellt werden. Daher ist es notwendig, nicht nur `charCodeAt(i)`, sondern auch `charCodeAt(i + 1)` abzurufen (als ob ein String mit zwei Zeichen manipuliert wird), oder stattdessen {{jsxref("String/codePointAt", "codePointAt(i)")}} zu verwenden, um ein vollständiges Zeichen mit einem Wert größer als `65535` zu erhalten. Weitere Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Beispiele

### Verwendung von charCodeAt()

Das folgende Beispiel gibt `65` zurück, den Unicode-Wert für A.

```js
"ABC".charCodeAt(0); // returns 65
```

`charCodeAt()` kann einzelne Surrogate zurückgeben, die keine gültigen Unicode-Zeichen sind.

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
> Vermeiden Sie es, `codePointAt()` mit `charCodeAt()` neu zu implementieren. Die Übersetzung von UTF-16-Surrogaten zu Unicode-Codepunkten ist komplex, und `codePointAt()` kann performanter sein, da es die interne Darstellung des Strings direkt verwendet. Installieren Sie ein Polyfill für `codePointAt()`, falls notwendig.

Unten ist ein mögliches Algorithmus beschrieben, um ein Paar von UTF-16-Code-Einheiten in einen Unicode-Codepunkt umzuwandeln, adaptiert von der [Unicode-FAQ](https://unicode.org/faq/utf_bom.html#utf16-3):

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
