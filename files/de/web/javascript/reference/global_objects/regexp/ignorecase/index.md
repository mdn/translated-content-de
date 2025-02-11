---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`ignoreCase`** Zugriffseigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `i`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.ignoreCase` hat den Wert `true`, wenn das `i`-Flag verwendet wurde; andernfalls `false`. Das `i`-Flag gibt an, dass Groß- und Kleinschreibung beim Versuch, eine Übereinstimmung in einem String zu finden, ignoriert werden soll. Eine groß-/kleinschreibungsunabhängige Übereinstimmung erfolgt durch Mapping sowohl des erwarteten Zeichensatzes als auch des verglichenen Strings auf die gleiche Schreibweise.

Wenn der reguläre Ausdruck [Unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, erfolgt das Mapping der Groß- und Kleinschreibung durch _simple case folding_, wie in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) spezifiziert. Dieses Mapping bezieht sich immer auf ein einzelnes Codepoint und mappt z. B. nicht `ß` (U+00DF LATIN SMALL LETTER SHARP S) zu `ss` (was _full case folding_ wäre, nicht _simple case folding_). Es kann jedoch Codepoints außerhalb des Basic Latin Blocks zu Codepoints innerhalb dieses Blocks mappen — beispielsweise wird `ſ` (U+017F LATIN SMALL LETTER LONG S) durch case folding zu `s` (U+0073 LATIN SMALL LETTER S) und `K` (U+212A KELVIN SIGN) wird zu `k` (U+006B LATIN SMALL LETTER K) gemappt. Daher können `ſ` und `K` durch `/[a-z]/ui` übereinstimmen.

Wenn der reguläre Ausdruck nicht Unicode-fähig ist, verwendet das Groß-/Kleinschreibungsmapping die [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — denselben Algorithmus, der in {{jsxref("String.prototype.toUpperCase()")}} verwendet wird. Beispielsweise werden `Ω` (U+2126 OHM SIGN) und `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) durch die Default Case Conversion zu sich selbst gemappt, aber durch simple case folding zu `ω` (U+03C9 GREEK SMALL LETTER OMEGA). Daher entspricht `"ω"` `/[\u2126]/ui` und `/[\u03a9]/ui`, aber nicht `/[\u2126]/i` oder `/[\u03a9]/i`. Dieser Algorithmus verhindert, dass Codepoints außerhalb des Basic Latin Blocks zu Codepoints innerhalb dieses Blocks gemappt werden. Deshalb entsprechen `ſ` und `K`, wie zuvor erwähnt, nicht `/[a-z]/i`.

Der Set-Zugriff von `ignoreCase` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
