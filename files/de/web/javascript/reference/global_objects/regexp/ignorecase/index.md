---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}}

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

`RegExp.prototype.ignoreCase` hat den Wert `true`, wenn das `i` Flag verwendet wurde; andernfalls `false`. Das `i` Flag zeigt an, dass bei dem Versuch, eine Übereinstimmung in einem String zu finden, die Groß- und Kleinschreibung ignoriert werden soll. Bei der Groß- und Kleinschreibungs-unabhängigen Übereinstimmung werden sowohl der erwartete Zeichensatz als auch der übereinstimmende String auf dieselbe Schreibweise abgebildet.

Wenn der Regexp [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, erfolgt die Fallzuordnung durch _einfache Fallfaltung_, die in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) spezifiziert ist. Die Zuordnung erfolgt immer zu einem einzelnen Codepunkt, daher wird zum Beispiel `ß` (U+00DF LATIN SMALL LETTER SHARP S) nicht zu `ss` zugeordnet (was _volle Fallfaltung_, nicht _einfache Fallfaltung_ ist). Allerdings können Codepunkte außerhalb des Basic Latin Blocks zu Codepunkten innerhalb desselben zugeordnet werden — zum Beispiel wird `ſ` (U+017F LATIN SMALL LETTER LONG S) zu `s` (U+0073 LATIN SMALL LETTER S) gefaltet und `K` (U+212A KELVIN SIGN) zu `k` (U+006B LATIN SMALL LETTER K). Daher können `ſ` und `K` mit `/[a-z]/ui` übereinstimmen.

Wenn der Regexp Unicode-unbewusst ist, verwendet die Fallzuordnung die [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — derselbe Algorithmus, der in {{jsxref("String.prototype.toUpperCase()")}} verwendet wird. Dieser Algorithmus verhindert, dass Codepunkte außerhalb des Basic Latin Blocks zu Codepunkten innerhalb desselben zugeordnet werden, daher werden `ſ` und `K`, die zuvor erwähnt wurden, nicht von `/[a-z]/i` erfasst.

Unicode-bewusste Fallfaltung erfolgt im Allgemeinen in Kleinbuchstaben, während Unicode-unbewusste Fallfaltung in Großbuchstaben erfolgt. Diese beiden sind keine perfekten Umkehrungen, daher gibt es einige subtile Verhaltensunterschiede. Zum Beispiel werden `Ω` (U+2126 OHM SIGN) und `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) beide durch einfache Fallfaltung zu `ω` (U+03C9 GREEK SMALL LETTER OMEGA) gefaltet, sodass `"\u2126"` sowohl von `/[\u03c9]/ui` als auch von `/[\u03a9]/ui` erfasst wird; andererseits wird U+2126 durch die Default Case Conversion zu sich selbst zugeordnet, während die anderen beiden zu U+03A9 zugeordnet werden, sodass `"\u2126"` weder von `/[\u03c9]/i` noch von `/[\u03a9]/i` erfasst wird.

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
