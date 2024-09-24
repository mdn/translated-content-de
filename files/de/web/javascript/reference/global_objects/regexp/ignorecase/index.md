---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`ignoreCase`** Zugriffsproperty von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `i`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}

## Beschreibung

`RegExp.prototype.ignoreCase` hat den Wert `true`, wenn das `i`-Flag verwendet wurde; andernfalls `false`. Das `i`-Flag gibt an, dass Groß-/Kleinschreibung beim Versuch, eine Übereinstimmung in einer Zeichenkette zu finden, ignoriert werden soll. Die Groß-/Kleinschreibung-unabhängige Suche erfolgt durch Zuordnung sowohl des erwarteten Zeichensatzes als auch der übereinstimmenden Zeichenfolge zur gleichen Schreibweise.

Wenn der reguläre Ausdruck [Unicode-empfindlich](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, erfolgt das Mapping der Groß-/Kleinschreibung durch das _einfache Case Folding_, das in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) spezifiziert ist. Das Mapping erfolgt immer zu einem einzelnen Codepoint, sodass es beispielsweise nicht `ß` (U+00DF LATIN SMALL LETTER SHARP S) zu `ss` mappt (was _vollständiges Case Folding_ ist, nicht _einfaches Case Folding_). Es kann jedoch Codepunkte außerhalb des Basic Latin Blocks zu Codepunkten innerhalb davon zuordnen — zum Beispiel wird `ſ` (U+017F LATIN SMALL LETTER LONG S) zu `s` (U+0073 LATIN SMALL LETTER S) und `K` (U+212A KELVIN SIGN) zu `k` (U+006B LATIN SMALL LETTER K) zugeordnet. Daher können `ſ` und `K` durch `/[a-z]/ui` übereinstimmen.

Wenn der reguläre Ausdruck Unicode-unempfindlich ist, verwendet das Mapping der Groß-/Kleinschreibung die [Unicode Standard-Fallumwandlung](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — derselbe Algorithmus, der in {{jsxref("String.prototype.toUpperCase()")}} verwendet wird. Zum Beispiel werden `Ω` (U+2126 OHM SIGN) und `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) beide durch die Standard-Fallumwandlung zu sich selbst gemappt, aber durch einfaches Case Folding zu `ω` (U+03C9 GREEK SMALL LETTER OMEGA), sodass `"ω"` von `/[\u2126]/ui` und `/[\u03a9]/ui` aber nicht von `/[\u2126]/i` oder `/[\u03a9]/i` abgeglichen wird. Dieser Algorithmus verhindert, dass Codepunkte außerhalb des Basic Latin Blocks zu Codepunkten innerhalb davon zugeordnet werden, sodass `ſ` und `K`, die zuvor erwähnt wurden, nicht durch `/[a-z]/i` übereinstimmen.

Der set-Accessor von `ignoreCase` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
