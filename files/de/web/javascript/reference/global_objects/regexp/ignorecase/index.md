---
title: RegExp.prototype.ignoreCase
short-title: ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`ignoreCase`** Accessor-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `i` Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.ignoreCase` hat den Wert `true`, wenn das `i` Flag verwendet wurde; andernfalls `false`. Das `i` Flag gibt an, dass bei dem Versuch, in einem String eine Übereinstimmung zu finden, die Groß-/Kleinschreibung ignoriert werden soll. Durch die Fallunabhängigkeit wird sowohl die erwartete Zeichensatzmenge als auch der übereinstimmende String auf dieselbe Groß-/Kleinschreibung abgebildet.

Wenn der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, erfolgt die Fallabbildung durch _simple case folding_ wie in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) spezifiziert. Die Abbildung erfolgt immer auf einen einzelnen Codepunkt, sodass `ß` (U+00DF LATIN SMALL LETTER SHARP S) zum Beispiel nicht in `ss` abgebildet wird (was _full case folding_ wäre, nicht _simple case folding_). Es kann jedoch Codepunkte außerhalb des Basic Latin-Blocks zu Codepunkten innerhalb dieses Blocks abbilden — zum Beispiel wird `ſ` (U+017F LATIN SMALL LETTER LONG S) zu `s` (U+0073 LATIN SMALL LETTER S) und `K` (U+212A KELVIN SIGN) zu `k` (U+006B LATIN SMALL LETTER K) abgebildet. Daher können `ſ` und `K` durch `/[a-z]/ui` übereinstimmen.

Wenn der reguläre Ausdruck nicht Unicode-bewusst ist, erfolgt die Fallabbildung mittels [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — demselben Algorithmus, der in {{jsxref("String.prototype.toUpperCase()")}} verwendet wird. Dieser Algorithmus verhindert, dass Codepunkte außerhalb des Basic Latin-Blocks zu Codepunkten innerhalb dieses Blocks abgebildet werden, sodass `ſ` und `K`, wie zuvor erwähnt, nicht von `/[a-z]/i` übereinstimmen.

Unicode-bewusste Fallabbildung erfolgt allgemein zu Kleinbuchstaben, während Unicode-unbewusste Fallabbildung zu Großbuchstaben erfolgt. Diese beiden sind keine perfekten umgekehrten Operationen, daher gibt es einige subtile Verhaltensunterschiede. Zum Beispiel werden `Ω` (U+2126 OHM SIGN) und `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) beide durch einfache Fallabbildung zu `ω` (U+03C9 GREEK SMALL LETTER OMEGA) abgebildet, sodass `"\u2126"` durch `/[\u03c9]/ui` und `/[\u03a9]/ui` übereinstimmt; andererseits wird U+2126 durch die Default Case Conversion auf sich selbst abgebildet, während die anderen beiden auf U+03A9 abgebildet werden, sodass `"\u2126"` weder durch `/[\u03c9]/i` noch `/[\u03a9]/i` übereinstimmt.

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
