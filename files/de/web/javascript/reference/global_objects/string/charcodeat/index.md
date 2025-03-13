---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`charCodeAt()`** Methode von {{jsxref("String")}} Werten gibt ein ganzzahliges Ergebnis zwischen `0` und `65535` zurück, das die UTF-16 Code-Einheit am angegebenen Index darstellt.

`charCodeAt()` indiziert den String immer als eine Sequenz von [UTF-16 Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters), sodass es einzelne Surrogate zurückgeben kann. Um den vollständigen Unicode-Codepunkt am angegebenen Index zu erhalten, verwenden Sie {{jsxref("String.prototype.codePointAt()")}}.

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
  - : Der nullbasierte Index des zu retournierenden Zeichens. [Zu einer Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 konvertiert.

### Rückgabewert

Ein ganzzahliger Wert zwischen `0` und `65535`, der den UTF-16 Code-Einheitenwert des Zeichens am angegebenen `index` repräsentiert. Wenn `index` außerhalb des Bereichs von `0` bis `str.length - 1` liegt, gibt `charCodeAt()` {{jsxref("NaN")}} zurück.

## Beschreibung

Zeichen in einem String werden von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). `charCodeAt()` gibt immer einen Wert zurück, der kleiner als `65536` ist, da höhere Codepunkte durch _ein Paar_ von 16-Bit Surrogat-Pseudo-Zeichen dargestellt werden. Daher ist es notwendig, nicht nur `charCodeAt(i)`, sondern auch `charCodeAt(i + 1)` abzurufen (als ob man einen String mit zwei Zeichen manipuliert), oder statt dessen {{jsxref("String/codePointAt", "codePointAt(i)")}} zu verwenden. Für Informationen zu Unicode, siehe [UTF-16-Zeichen, Unicode-Code-Punkte und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

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
> Vermeiden Sie, `codePointAt()` mit `charCodeAt()` neu zu implementieren. Die Übersetzung von UTF-16 Surrogaten zu Unicode-Codepunkten ist komplex, und `codePointAt()` kann effizienter sein, da es direkt die interne Darstellung des Strings verwendet. Installieren Sie ein Polyfill für `codePointAt()`, falls nötig.

Unten ist ein mögliches Algorithmus dargestellt, um ein Paar von UTF-16 Code-Einheiten in einen Unicode-Codepunkt zu konvertieren, adaptiert von den [Unicode FAQ](https://unicode.org/faq/utf_bom.html#utf16-3):

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
