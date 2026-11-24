---
title: RegExp.prototype.ignoreCase
short-title: ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die **`ignoreCase`**-Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `i`-Flag für diesen regulären Ausdruck verwendet wird.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.ignoreCase")}}

```js interactive-example
const regex1 = /foo/;
const regex2 = /foo/i;

console.log(regex1.test("Football"));
// Expected output: false

console.log(regex2.ignoreCase);
// Expected output: true

console.log(regex2.test("Football"));
// Expected output: true
```

## Beschreibung

`RegExp.prototype.ignoreCase` hat den Wert `true`, wenn das `i`-Flag verwendet wurde; andernfalls ist der Wert `false`. Das `i`-Flag bewirkt, dass beim Abgleichen mit einer Zeichenfolge die Groß- und Kleinschreibung ignoriert wird. Dazu werden sowohl die erwarteten Zeichen als auch die abzugleichende Zeichenfolge auf dieselbe Schreibweise abgebildet.

Wenn der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, erfolgt die Abbildung durch das in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) festgelegte _simple case folding_. Dabei wird ein Zeichen stets auf einen einzelnen Codepunkt abgebildet. Beispielsweise wird `ß` (U+00DF LATIN SMALL LETTER SHARP S) nicht auf `ss` abgebildet – das wäre _full case folding_ statt _simple case folding_. Codepunkte außerhalb des Blocks Basic Latin können jedoch auf Codepunkte innerhalb dieses Blocks abgebildet werden: So wird `ſ` (U+017F LATIN SMALL LETTER LONG S) auf `s` (U+0073 LATIN SMALL LETTER S) und `K` (U+212A KELVIN SIGN) auf `k` (U+006B LATIN SMALL LETTER K) abgebildet. Daher können `ſ` und `K` mit `/[a-z]/ui` abgeglichen werden.

Wenn der reguläre Ausdruck nicht Unicode-bewusst ist, verwendet die Abbildung die [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) – denselben Algorithmus wie {{jsxref("String.prototype.toUpperCase()")}}. Dieser Algorithmus verhindert, dass Codepunkte außerhalb des Blocks Basic Latin auf Codepunkte innerhalb dieses Blocks abgebildet werden. Deshalb werden die zuvor genannten Zeichen `ſ` und `K` nicht von `/[a-z]/i` erfasst.

Unicode-bewusstes Case Folding bildet Zeichen im Allgemeinen auf Kleinbuchstaben ab, während Unicode-unbewusstes Case Folding sie auf Großbuchstaben abbildet. Da diese beiden Vorgänge keine exakten Umkehrungen voneinander sind, gibt es einige feine Unterschiede im Verhalten. Beispielsweise werden sowohl `Ω` (U+2126 OHM SIGN) als auch `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) durch simple case folding auf `ω` (U+03C9 GREEK SMALL LETTER OMEGA) abgebildet. Deshalb wird `"\u2126"` sowohl von `/[\u03c9]/ui` als auch von `/[\u03a9]/ui` erfasst. Bei der Default Case Conversion hingegen wird U+2126 auf sich selbst abgebildet, während die beiden anderen Zeichen auf U+03A9 abgebildet werden. Daher wird `"\u2126"` weder von `/[\u03c9]/i` noch von `/[\u03a9]/i` erfasst.

Der Set-Accessor von `ignoreCase` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Aus Gründen der Abwärtskompatibilität gilt `RegExp.prototype.ignoreCase === undefined`, obwohl `RegExp.prototype` keine `RegExp`-Instanz ist. (Eigentlich wäre zu erwarten, dass der Getter einen `TypeError` auslöst, wenn der `this`-Wert keine `RegExp`-Instanz ist.)

## Beispiele

### `ignoreCase` verwenden

```js
const regex = /foo/i;

console.log(regex.ignoreCase); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.dotAll")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
