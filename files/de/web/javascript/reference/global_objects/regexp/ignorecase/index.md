---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`ignoreCase`** Zugriffseigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `i`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}

## Beschreibung

`RegExp.prototype.ignoreCase` hat den Wert `true`, wenn das `i`-Flag verwendet wurde; andernfalls `false`. Das `i`-Flag gibt an, dass die Groß- und Kleinschreibung beim Versuch, eine Übereinstimmung in einem String zu finden, ignoriert werden soll. Die Groß-/Kleinschreibungs-unabhängige Übereinstimmung erfolgt durch das Abbilden sowohl des erwarteten Zeichensatzes als auch des übereinstimmenden Strings auf dieselbe Schreibweise.

Wenn der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, erfolgt das Abbilden der Groß- und Kleinschreibung durch einfaches Falten der Schreibweise, wie in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) spezifiziert. Das Mapping erfolgt stets auf einen einzelnen Codepunkt, es mappt also beispielsweise nicht `ß` (U+00DF LATIN SMALL LETTER SHARP S) zu `ss` (was vollständiges Falten der Schreibweise wäre, nicht einfaches Falten). Es kann jedoch Codepunkte außerhalb des Basis-Latein-Blocks auf Codepunkte innerhalb desselben abbilden — beispielsweise mappt `ſ` (U+017F LATIN SMALL LETTER LONG S) zu `s` (U+0073 LATIN SMALL LETTER S) und `K` (U+212A KELVIN SIGN) zu `k` (U+006B LATIN SMALL LETTER K). Daher können `ſ` und `K` durch `/[a-z]/ui` übereinstimmen.

Wenn der Regex Unicode-unbewusst ist, verwendet das Abbilden der Groß- und Kleinschreibung die [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — dasselbe Algorithmus wie bei {{jsxref("String.prototype.toUpperCase()")}}. Zum Beispiel werden `Ω` (U+2126 OHM SIGN) und `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) durch die Standard-Großschreibungsumwandlung auf sich selbst abgebildet, aber durch einfaches Falten der Schreibweise auf `ω` (U+03C9 GREEK SMALL LETTER OMEGA), sodass `"ω"` durch `/[\u2126]/ui` und `/[\u03a9]/ui` übereinstimmt, aber nicht durch `/[\u2126]/i` oder `/[\u03a9]/i`. Dieser Algorithmus verhindert, dass Codepunkte außerhalb des Basis-Latein-Blocks auf Codepunkte innerhalb desselben abgebildet werden, sodass `ſ` und `K`, die zuvor erwähnt wurden, nicht durch `/[a-z]/i` übereinstimmen.

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
