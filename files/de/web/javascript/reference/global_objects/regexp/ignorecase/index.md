---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: d9e1eba619129f2130d82200d47c41eb6ec51125
---

{{JSRef}}

Die **`ignoreCase`** Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `i`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.ignoreCase")}}

```js interactive-example
const regex1 = new RegExp("foo");
const regex2 = new RegExp("foo", "i");

console.log(regex1.test("Football"));
// Expected output: false

console.log(regex2.ignoreCase);
// Expected output: true

console.log(regex2.test("Football"));
// Expected output: true
```

## Beschreibung

`RegExp.prototype.ignoreCase` hat den Wert `true`, wenn das `i`-Flag verwendet wurde; andernfalls `false`. Das `i`-Flag zeigt an, dass die Groß- und Kleinschreibung bei der Versuch eines Abgleichs in einer Zeichenfolge ignoriert werden soll. Groß-/Kleinschreibung-unabhängige Vergleiche werden durchgeführt, indem sowohl das erwartete Zeichenset als auch die verglichene Zeichenfolge auf dieselbe Groß-/Kleinschreibung abgebildet werden.

Falls der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, erfolgt die Groß-/Kleinschreibungszuordnung durch ein _Simple Case Folding_, das in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) spezifiziert ist. Dabei wird immer auf einen einzelnen Codepunkt abgebildet, sodass beispielsweise `ß` (U+00DF LATIN SMALL LETTER SHARP S) nicht auf `ss` abgebildet wird (was ein _Full Case Folding_ wäre, aber kein _Simple Case Folding_). Es können jedoch Codepunkte außerhalb des Basis-Latein-Blocks auf Codepunkte innerhalb davon abgebildet werden – zum Beispiel wird `ſ` (U+017F LATIN SMALL LETTER LONG S) auf `s` (U+0073 LATIN SMALL LETTER S) und `K` (U+212A KELVIN SIGN) auf `k` (U+006B LATIN SMALL LETTER K) abgebildet. Daher können `ſ` und `K` mit `/[a-z]/ui` abgeglichen werden.

Falls der reguläre Ausdruck nicht Unicode-bewusst ist, verwendet die Groß-/Kleinschreibungszuordnung die [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) – denselben Algorithmus, der auch in {{jsxref("String.prototype.toUpperCase()")}} verwendet wird. Dieser Algorithmus verhindert, dass Codepunkte außerhalb des Basis-Latein-Blocks auf Codepunkte innerhalb dessen abgebildet werden. Daher werden die zuvor erwähnten `ſ` und `K` nicht von `/[a-z]/i` abgeglichen.

Unicode-bewusstes Case Folding erfolgt gewöhnlich in Kleinbuchstaben, während Unicode-unbewusstes Case Folding in Großbuchstaben erfolgt. Diese beiden Operationen sind keine perfekten Umkehroperationen, daher gibt es einige subtile Verhaltensunterschiede. Zum Beispiel werden `Ω` (U+2126 OHM SIGN) und `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) durch Simple Case Folding beide auf `ω` (U+03C9 GREEK SMALL LETTER OMEGA) abgebildet, sodass `"\u2126"` sowohl mit `/[\u03c9]/ui` als auch mit `/[\u03a9]/ui` abgeglichen wird. Andererseits wird U+2126 durch die Default Case Conversion auf sich selbst abgebildet, während die anderen beiden auf U+03A9 abgebildet werden. Daher wird `"\u2126"` weder durch `/[\u03c9]/i` noch durch `/[\u03a9]/i` abgeglichen.

Der Set-Accessor von `ignoreCase` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von ignoreCase

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
