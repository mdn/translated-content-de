---
title: "Lookbehind Assertion: (?<=...), (?<!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Lookbehind Assertion** "schaut zurück": Sie versucht, den vorherigen Input mit dem angegebenen Muster abzugleichen, verbraucht dabei jedoch keinen Teil des Inputs — wenn der Abgleich erfolgreich ist, bleibt die aktuelle Position im Input unverändert. Es werden die Atome im Muster in umgekehrter Reihenfolge abgeglichen.

## Syntax

```regex
(?<=pattern)
(?<!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden dürfen, einschließlich einer [Disjunction](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck wird im Allgemeinen von links nach rechts abgeglichen. Dies ist der Grund, warum [Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und Lookbehind-Assertions so genannt werden — Lookahead prüft, was sich rechts befindet, und Lookbehind prüft, was sich links befindet.

Damit eine `(?<=pattern)`-Assertion erfolgreich ist, muss das `pattern` den Input unmittelbar links von der aktuellen Position abgleichen, aber die aktuelle Position wird nicht verändert, bevor der nachfolgende Input abgeglichen wird. Die Form `(?<!pattern)` negiert die Assertion — sie ist erfolgreich, wenn das `pattern` den Input unmittelbar links von der aktuellen Position nicht abgleicht.

Lookbehind hat im Allgemeinen die gleichen Semantiken wie Lookahead — jedoch wird innerhalb einer Lookbehind Assertion der reguläre Ausdruck _rückwärts_ abgeglichen. Zum Beispiel:

```js
/(?<=([ab]+)([bc]+))$/.exec("abc"); // ['', 'a', 'bc']
// Not ['', 'ab', 'c']
```

Wenn das Lookbehind von links nach rechts abgleichen würde, sollte es zuerst gierig `[ab]+` abgleichen, was dazu führt, dass die erste Gruppe `"ab"` einfängt, und das verbleibende `"c"` von `[bc]+` eingefangen wird. Da jedoch zuerst `[bc]+` abgeglichen wird, erfasst es gierig `"bc"`, sodass nur `"a"` für `[ab]+` übrig bleibt.

Dieses Verhalten ist sinnvoll — der Matcher weiß nicht, wo er den Abgleich _beginnen_ soll (da das Lookbehind nicht unbedingt eine feste Länge haben muss), aber er weiß, wo er _enden_ soll (an der aktuellen Position). Daher beginnt er an der aktuellen Position und arbeitet rückwärts. (Regexes in einigen anderen Sprachen verbieten Lookbehind mit variabler Länge, um dieses Problem zu vermeiden.)

Für [quantifizierte](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) [Capture-Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) innerhalb des Lookbehinds wird das am weitesten links liegende Ergebnis in der Eingabezeichenkette erfasst und nicht das rechts liegende, aufgrund des rückwärts gerichteten Abgleichs. Weitere Informationen finden Sie auf der Seite zu Capture-Gruppen. [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) innerhalb des Lookbehinds müssen links von der Gruppe erscheinen, auf die sie sich beziehen, auch aufgrund des rückwärts gerichteten Abgleichs. Allerdings werden [Disjunctions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) weiterhin von links nach rechts versucht.

## Beispiele

### Zeichenfolgen abgleichen, ohne sie zu konsumieren

Ähnlich wie [Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#matching_strings_without_consuming_them) können Lookbehinds verwendet werden, um Zeichenfolgen abzugleichen, ohne sie zu konsumieren, sodass nur nützliche Informationen extrahiert werden. Zum Beispiel stimmt der folgende Regex die Zahl in einem Preisschild ab:

```js
function getPrice(label) {
  return /(?<=\$)\d+(?:\.\d*)?/.exec(label)?.[0];
}

getPrice("$10.53"); // "10.53"
getPrice("10.53"); // undefined
```

Ein ähnlicher Effekt kann erzielt werden, indem das Submatch eingefangen wird, an dem Sie interessiert sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)-Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Input Boundary Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Word Boundary Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Capture-Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
