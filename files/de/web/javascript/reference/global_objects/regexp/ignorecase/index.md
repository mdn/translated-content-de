---
title: RegExp.prototype.ignoreCase
short-title: ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`ignoreCase`**-Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `i`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.ignoreCase` hat den Wert `true`, wenn das `i`-Flag verwendet wurde, andernfalls `false`. Das `i`-Flag gibt an, dass bei dem Versuch, in einem String eine Übereinstimmung zu finden, die Groß-/Kleinschreibung ignoriert werden soll. Bei einer Groß-/Kleinschreibungs-unabhängigen Übereinstimmung werden sowohl das erwartete Zeichen-Set als auch der übereinstimmende String auf die gleiche Schreibweise abgebildet.

Wenn der Reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, erfolgt die Schreibweisenzuordnung durch _simple case folding_, wie in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) angegeben. Die Zuordnung erfolgt immer zu einem einzelnen Codepunkt, so dass zum Beispiel `ß` (U+00DF LATIN SMALL LETTER SHARP S) nicht in `ss` umgewandelt wird (was _full case folding_ wäre, nicht _simple case folding_). Es kann jedoch sein, dass Codepunkte außerhalb des Basic Latin Blocks zu Codepunkten innerhalb davon zugeordnet werden — zum Beispiel wird `ſ` (U+017F LATIN SMALL LETTER LONG S) zu `s` (U+0073 LATIN SMALL LETTER S) und `K` (U+212A KELVIN SIGN) zu `k` (U+006B LATIN SMALL LETTER K) case-gefaltet. Deshalb können `ſ` und `K` durch `/[a-z]/ui` gematcht werden.

Wenn der Reguläre Ausdruck Unicode-unbewusst ist, erfolgt die Schreibweisen-Zuordnung durch die [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — derselbe Algorithmus, der in {{jsxref("String.prototype.toUpperCase()")}} verwendet wird. Dieser Algorithmus verhindert, dass Codepunkte außerhalb des Basic Latin Blocks zu Codepunkten innerhalb davon zugeordnet werden; daher werden `ſ` und `K` wie zuvor erwähnt nicht durch `/[a-z]/i` gematcht.

Unicode-bewusste Schreibweisenzuordnung erfolgt allgemein in Kleinbuchstaben, während Unicode-unbewusste in Großbuchstaben erfolgt. Diese beiden sind keine perfekten Umkehr-Operationen, daher gibt es einige subtile Verhaltensunterschiede. Zum Beispiel werden `Ω` (U+2126 OHM SIGN) und `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) beide durch simple case folding zu `ω` (U+03C9 GREEK SMALL LETTER OMEGA) umgewandelt, sodass `"\u2126"` durch `/[\u03c9]/ui` und `/[\u03a9]/ui` gematcht wird; auf der anderen Seite wird U+2126 durch die Default Case Conversion zu sich selbst gemappt, während die anderen beiden zu U+03A9 gemappt werden, so dass `"\u2126"` von weder `/[\u03c9]/i` noch `/[\u03a9]/i` gematcht wird.

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
