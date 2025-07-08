---
title: "Lookbehind Assertion: (?<=...), (?<!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **Lookbehind Assertion** "blickt zurück": Sie versucht, den vorherigen Input mit dem gegebenen Muster zu vergleichen, aber sie verbraucht keinen Input — wenn der Vergleich erfolgreich ist, bleibt die aktuelle Position im Input unverändert. Sie vergleicht jedes Atom in ihrem Muster in umgekehrter Reihenfolge.

## Syntax

```regex
(?<=pattern)
(?<!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem regulären Ausdrucksliteral verwenden können, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck vergleicht im Allgemeinen von links nach rechts. Deshalb werden [Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und Lookbehind Assertions so genannt — Lookahead prüft, was sich rechts befindet, und Lookbehind prüft, was sich links befindet.

Damit eine `(?<=pattern)` Assertion erfolgreich ist, muss das `pattern` direkt links von der aktuellen Position im Input übereinstimmen, aber die aktuelle Position wird nicht verändert, bevor der folgende Input abgeglichen wird. Die `(?<!pattern)`-Form negiert die Assertion — sie ist erfolgreich, wenn das `pattern` nicht direkt links von der aktuellen Position im Input übereinstimmt.

Lookbehind hat im Allgemeinen die gleichen Semantiken wie Lookahead — jedoch vergleicht der reguläre Ausdruck innerhalb einer Lookbehind Assertion _rückwärts_. Zum Beispiel,

```js
/(?<=([ab]+)([bc]+))$/.exec("abc"); // ['', 'a', 'bc']
// Not ['', 'ab', 'c']
```

Wenn das Lookbehind von links nach rechts übereinstimmt, sollte es zuerst gierig `[ab]+` abgleichen, was dazu führt, dass die erste Gruppe `"ab"` erfasst, und das verbleibende `"c"` wird von `[bc]+` erfasst. Da jedoch `[bc]+` zuerst abgeglichen wird, greift es gierig `"bc"` und lässt nur `"a"` für `[ab]+` übrig.

Dieses Verhalten ist sinnvoll — der Matcher weiß nicht, wo er den Vergleich _beginnen_ soll (weil das Lookbehind möglicherweise nicht fester Länge ist), aber er weiß, wo er _enden_ soll (an der aktuellen Position). Daher beginnt er an der aktuellen Position und arbeitet rückwärts. (Regexes in einigen anderen Sprachen verbieten nicht feste Längen bei Lookbehind, um dieses Problem zu vermeiden.)

Für [quantifizierte](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) [Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) innerhalb des Lookbehind wird aufgrund des rückwärtsgerichteten Vergleichs der am weitesten links stehende Treffer im Eingabestring erfasst — anstatt desjenigen, der rechts ist. Weitere Informationen finden Sie auf der Seite der Erfassungsgruppen. [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) innerhalb des Lookbehind müssen links von der Gruppe, auf die sie sich beziehen, erscheinen, ebenfalls aufgrund des rückwärtsgerichteten Vergleichs. [Disjunktionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) werden jedoch weiterhin von links nach rechts ausprobiert.

## Beispiele

### Zeichenfolgen abgleichen, ohne sie zu konsumieren

Ähnlich wie [Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#matching_strings_without_consuming_them) können Lookbehinds verwendet werden, um Zeichenfolgen abzugleichen, ohne sie zu konsumieren, sodass nur nützliche Informationen extrahiert werden. Zum Beispiel: Der folgende Regex erfasst die Zahl in einem Preisschild:

```js
function getPrice(label) {
  return /(?<=\$)\d+(?:\.\d*)?/.exec(label)?.[0];
}

getPrice("$10.53"); // "10.53"
getPrice("10.53"); // undefined
```

Ein ähnlicher Effekt kann erzielt werden, indem man den interessanten Teil des Submatches [erfasst](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingabe-Grenz-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
