---
title: "Lookbehind Assertion: (?<=...), (?<!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Lookbehind-Assertion** "blickt zurück": Sie versucht, die vorherige Eingabe mit dem gegebenen Muster abzugleichen, verbraucht jedoch keinen Teil der Eingabe — wenn der Abgleich erfolgreich ist, bleibt die aktuelle Position in der Eingabe unverändert. Sie stimmt jedes Atom in ihrem Muster in umgekehrter Reihenfolge ab.

## Syntax

```regex
(?<=pattern)
(?<!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunction](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck stimmt im Allgemeinen von links nach rechts überein. Dies ist der Grund, warum [Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und Lookbehind-Assertionen so genannt werden — Lookahead überprüft, was rechts ist, und Lookbehind überprüft, was links ist.

Damit eine `(?<=pattern)`-Assertion erfolgreich ist, muss das `pattern` direkt links von der aktuellen Position der Eingabe übereinstimmen, aber die aktuelle Position wird nicht geändert, bevor die nachfolgende Eingabe abgeglichen wird. Die Form `(?<!pattern)` negiert die Assertion — sie ist erfolgreich, wenn das `pattern` nicht direkt links von der aktuellen Position der Eingabe übereinstimmt.

Lookbehind hat im Allgemeinen die gleichen Semantiken wie Lookahead — jedoch stimmt innerhalb einer Lookbehind-Assertion der reguläre Ausdruck _rückwärts_ überein. Zum Beispiel,

```js
/(?<=([ab]+)([bc]+))$/.exec("abc"); // ['', 'a', 'bc']
// Not ['', 'ab', 'c']
```

Wenn das Lookbehind von links nach rechts übereinstimmt, sollte es zuerst gierig `[ab]+` abgleichen, was die erste Gruppe `"ab"` erfassen lässt, und der verbleibende `"c"` wird von `[bc]+` erfasst. Da jedoch zuerst `[bc]+` abgeglichen wird, wird gierig `"bc"` ergriffen, wodurch nur `"a"` für `[ab]+` übrig bleibt.

Dieses Verhalten ist vernünftig — der Matcher weiß nicht, wo er den Abgleich _starten_ soll (da das Lookbehind möglicherweise keine feste Länge hat), aber er weiß, wo er _enden_ soll (an der aktuellen Position). Daher beginnt er an der aktuellen Position und arbeitet rückwärts. (Regexes in einigen anderen Sprachen verbieten Lookbehind ohne feste Länge, um dieses Problem zu vermeiden.)

Für [quantifizierte](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) [capturing groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) innerhalb des Lookbehinds wird das am weitesten links liegende Übereinstimmung in der Eingabezeichenfolge erfasst, anstatt der rechtsliegenden, aufgrund der rückwärtigen Übereinstimmung. Weitere Informationen finden Sie auf der Seite zu capturing groups. [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) innerhalb des Lookbehinds müssen links der Gruppe erscheinen, auf die sie sich beziehen, ebenfalls aufgrund der rückwärtigen Übereinstimmung. Allerdings werden [Disjunctions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) immer noch von links nach rechts versucht.

## Beispiele

### Übereinstimmung von Zeichenfolgen, ohne sie zu verbrauchen

Ähnlich wie [Lookaheads](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#matching_strings_without_consuming_them) können Lookbehinds verwendet werden, um Zeichenfolgen abzugleichen, ohne sie zu verbrauchen, sodass nur nützliche Informationen extrahiert werden. Zum Beispiel stimmt der folgende Regex die Zahl in einem Preisschild ab:

```js
function getPrice(label) {
  return /(?<=\$)\d+(?:\.\d*)?/.exec(label)?.[0];
}

getPrice("$10.53"); // "10.53"
getPrice("10.53"); // undefined
```

Ein ähnlicher Effekt kann erzielt werden, indem das Teilstück, das Sie interessiert, [erfasst](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Input-Grenz-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Capturing Group: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
