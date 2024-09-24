---
title: "Lookbehind Assertion: (?<=...), (?<!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Lookbehind-Assertion** "blickt zurück": Sie versucht, die vorherige Eingabe mit dem gegebenen Muster abzugleichen, aber sie verbraucht keinen Teil der Eingabe – bei einem erfolgreichen Abgleich bleibt die aktuelle Position in der Eingabe unverändert. Sie vergleicht jedes Atom in ihrem Muster in umgekehrter Reihenfolge.

## Syntax

```regex
(?<=pattern)
(?<!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck gleicht generell von links nach rechts ab. Deshalb werden [Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und Lookbehind-Assertions so genannt — Lookahead überprüft, was rechts liegt, und Lookbehind überprüft, was links liegt.

Damit eine `(?<=pattern)`-Assertion erfolgreich ist, muss das `pattern` unmittelbar links von der aktuellen Position mit der Eingabe übereinstimmen, aber die aktuelle Position wird vor dem Abgleich der nachfolgenden Eingabe nicht geändert. Die `(?<!pattern)`-Form negiert die Assertion — sie ist erfolgreich, wenn das `pattern` nicht unmittelbar links von der aktuellen Position mit der Eingabe übereinstimmt.

Lookbehind hat im Allgemeinen dieselbe Semantik wie Lookahead — jedoch gleicht der reguläre Ausdruck innerhalb einer Lookbehind-Assertion _rückwärts_ ab. Zum Beispiel:

```js
/(?<=([ab]+)([bc]+))$/.exec("abc"); // ['', 'a', 'bc']
// Nicht ['', 'ab', 'c']
```

Wenn das Lookbehind von links nach rechts abgleichen würde, sollte es zunächst gierig `[ab]+` abgleichen, wodurch die erste Gruppe `"ab"` erfasst, und das verbleibende `"c"` von `[bc]+` erfasst wird. Da jedoch `[bc]+` zuerst abgeglichen wird, nimmt es gierig `"bc"` und hinterlässt nur `"a"` für `[ab]+`.

Dieses Verhalten ist sinnvoll — der Matcher weiß nicht, wo er den Abgleich _beginnen_ soll (da das Lookbehind möglicherweise nicht fester Länge ist), aber er weiß, wo er _enden_ soll (an der aktuellen Position). Daher beginnt er an der aktuellen Position und arbeitet rückwärts. (Regexes in einigen anderen Sprachen verbieten Lookbehind mit variabler Länge, um dieses Problem zu vermeiden.)

Für [quantifizierte](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) [erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) im Lookbehind wird aufgrund der Rückwärts-Abgleichung die am weitesten links liegende Übereinstimmung der Eingabezeichenfolge erfasst, anstatt die rechts. Siehe die Seite zu erfassenden Gruppen für weitere Informationen. [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) im Lookbehind müssen auch links von der Gruppe erscheinen, auf die sie sich beziehen, ebenfalls aufgrund der Rückwärts-Abgleichung. Disjunktionen werden jedoch weiterhin von links nach rechts versucht.

## Beispiele

### Zeichenfolgen abgleichen, ohne sie zu verbrauchen

Ähnlich wie bei [Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#matching_strings_without_consuming_them) können Lookbehinds verwendet werden, um Zeichenfolgen abzugleichen, ohne sie zu verbrauchen, sodass nur nützliche Informationen extrahiert werden. Zum Beispiel gleicht der folgende Regex die Zahl in einem Preisschild ab:

```js
function getPrice(label) {
  return /(?<=\$)\d+(?:\.\d*)?/.exec(label)?.[0];
}

getPrice("$10.53"); // "10.53"
getPrice("10.53"); // undefined
```

Ein ähnlicher Effekt kann erzielt werden, indem der Teilabgleich, an dem Sie interessiert sind, [erfasst](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Guide
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingabegrenzung: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenze: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
