---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`charCodeAt()`**-Methode von {{jsxref("String")}}-Werten gibt eine Ganzzahl zwischen `0` und `65535` zurück, die die UTF-16-Code-Einheit am angegebenen Index darstellt.

`charCodeAt()` indexiert den String immer als Sequenz von [UTF-16-Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters), so dass es einzelne Surrogate zurückgeben kann. Um den vollständigen Unicode-Codepunkt am angegebenen Index zu erhalten, verwenden Sie {{jsxref("String.prototype.codePointAt()")}}.

{{EmbedInteractiveExample("pages/js/string-charcodeat.html", "shorter")}}

## Syntax

```js-nolint
charCodeAt(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des zurückzugebenden Zeichens. [In eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 konvertiert.

### Rückgabewert

Eine Ganzzahl zwischen `0` und `65535`, die den UTF-16-Code-Einheitswert des Zeichens am angegebenen `index` darstellt. Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `charCodeAt()` {{jsxref("NaN")}} zurück.

## Beschreibung

Zeichen in einem String werden von links nach rechts indexiert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). `charCodeAt()` gibt immer einen Wert zurück, der kleiner als `65536` ist, da die höheren Codepunkte durch ein Paar von 16-Bit-Surrogat-Pseud-Zeichen dargestellt werden. Daher ist es notwendig, um ein vollständiges Zeichen mit einem Wert größer als `65535` zu erhalten, nicht nur `charCodeAt(i)`, sondern auch `charCodeAt(i + 1)` abzurufen (so als ob man einen String mit zwei Zeichen manipuliert), oder stattdessen {{jsxref("String/codePointAt", "codePointAt(i)")}} zu verwenden. Weitere Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Beispiele

### Verwendung von charCodeAt()

Das folgende Beispiel gibt `65` zurück, den Unicode-Wert für A.

```js
"ABC".charCodeAt(0); // gibt 65 zurück
```

`charCodeAt()` kann einzelne Surrogate zurückgeben, die keine gültigen Unicode-Zeichen sind.

```js
const str = "𠮷𠮾";
console.log(str.charCodeAt(0)); // 55362, oder d842, das ist kein gültiges Unicode-Zeichen
console.log(str.charCodeAt(1)); // 57271, oder dfb7, das ist kein gültiges Unicode-Zeichen
```

Um den vollständigen Unicode-Codepunkt am angegebenen Index zu erhalten, verwenden Sie {{jsxref("String.prototype.codePointAt()")}}.

```js
const str = "𠮷𠮾";
console.log(str.codePointAt(0)); // 134071
```

> [!NOTE]
> Vermeiden Sie, `codePointAt()` mit Hilfe von `charCodeAt()` neu zu implementieren. Die Übersetzung von UTF-16-Surrogaten zu Unicode-Codepunkten ist komplex, und `codePointAt()` könnte performanter sein, da es direkt die interne Repräsentation des Strings verwendet. Installieren Sie gegebenenfalls ein Polyfill für `codePointAt()`.

Im Folgenden ist ein möglicher Algorithmus zur Umwandlung eines Paares von UTF-16-Code-Einheiten in einen Unicode-Codepunkt dargestellt, adaptiert aus dem [Unicode FAQ](https://unicode.org/faq/utf_bom.html#utf16-3):

```js
// Konstanten
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
