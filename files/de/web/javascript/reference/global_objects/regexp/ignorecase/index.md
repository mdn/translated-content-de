---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die **`ignoreCase`**-Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `i`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-ignorecase.html")}}

## Beschreibung

`RegExp.prototype.ignoreCase` hat den Wert `true`, wenn das `i`-Flag verwendet wurde; andernfalls `false`. Das `i`-Flag gibt an, dass die Groß- und Kleinschreibung beim Versuch, eine Übereinstimmung in einem String zu finden, ignoriert werden soll. Eine Groß- und Kleinschreibung ignorierende Übereinstimmung wird durchgeführt, indem sowohl die erwartete Zeichensatz als auch der übereinstimmende String auf die gleiche Schreibweise abgebildet werden.

Falls der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist, erfolgt die Schreibweisenanpassung durch _einfaches Fallfalten_ wie in [`CaseFolding.txt`](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) spezifiziert. Die Abbildung erfolgt immer zu einem einzelnen Codepunkt, so dass z. B. `ß` (U+00DF LATIN SMALL LETTER SHARP S) nicht zu `ss` abgebildet wird (was _volles Fallfalten_ und nicht _einfaches Fallfalten_ wäre). Es kann jedoch Codepunkte außerhalb des Basis-Latein-Blocks auf Codepunkte innerhalb desselben abbilden — beispielsweise wird `ſ` (U+017F LATIN SMALL LETTER LONG S) zu `s` (U+0073 LATIN SMALL LETTER S) und `K` (U+212A KELVIN SIGN) zu `k` (U+006B LATIN SMALL LETTER K) gefaltet. Daher können `ſ` und `K` durch `/[a-z]/ui` gematcht werden.

Falls der reguläre Ausdruck nicht Unicode-bewusst ist, verwendet die Schreibweisenanpassung die [Unicode-Standard-Fallkonvertierung](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html) — derselbe Algorithmus, der in {{jsxref("String.prototype.toUpperCase()")}} verwendet wird. Zum Beispiel werden `Ω` (U+2126 OHM SIGN) und `Ω` (U+03A9 GREEK CAPITAL LETTER OMEGA) durch die Standard-Fallkonvertierung beide auf sich selbst abgebildet, aber durch einfaches Fallfalten auf `ω` (U+03C9 GREEK SMALL LETTER OMEGA), so dass `"ω"` durch `/[\u2126]/ui` und `/[\u03a9]/ui` gematcht wird, aber nicht durch `/[\u2126]/i` oder `/[\u03a9]/i`. Dieser Algorithmus verhindert, dass Codepunkte außerhalb des Basis-Latein-Blocks auf Codepunkte innerhalb dessen abgebildet werden, so dass die zuvor erwähnten `ſ` und `K` nicht durch `/[a-z]/i` gematcht werden.

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
