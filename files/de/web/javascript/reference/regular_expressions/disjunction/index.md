---
title: "Disjunction: |"
slug: Web/JavaScript/Reference/Regular_expressions/Disjunction
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **Disjunktion** spezifiziert mehrere Alternativen. Jede Alternative, die mit der Eingabe übereinstimmt, führt dazu, dass die gesamte Disjunktion übereinstimmt.

## Syntax

```regex
alternative1|alternative2
alternative1|alternative2|alternative3|…
```

### Parameter

- `alternativeN`
  - : Ein alternatives Muster, bestehend aus einer Sequenz von [Atomen und Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions). Das erfolgreiche Übereinstimmen einer Alternative führt dazu, dass die gesamte Disjunktion übereinstimmt.

## Beschreibung

Der `|` Operator im regulären Ausdruck trennt zwei oder mehr _Alternativen_. Das Muster versucht zuerst, mit der ersten Alternative zu übereinstimmen; falls es fehlschlägt, versucht es, mit der zweiten Alternative zu übereinstimmen und so weiter. Zum Beispiel passt das folgende Beispiel `"a"` statt `"ab"`, weil die erste Alternative bereits erfolgreich übereinstimmt:

```js
/a|ab/.exec("abc"); // ['a']
```

Der `|` Operator hat die niedrigste Priorität in einem regulären Ausdruck. Möchten Sie eine Disjunktion als Teil eines größeren Musters verwenden, müssen Sie sie [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group).

Wenn eine gruppierte Disjunktion mehr Ausdrücke danach hat, beginnt die Übereinstimmung, indem die erste Alternative ausgewählt und versucht wird, den Rest des regulären Ausdrucks zu matchen. Wenn der Rest des regulären Ausdrucks nicht übereinstimmt, versucht der Matcher stattdessen die nächste Alternative. Beispielsweise:

```js
/(?:(a)|(ab))(?:(c)|(bc))/.exec("abc"); // ['abc', 'a', undefined, undefined, 'bc']
// Not ['abc', undefined, 'ab', 'c', undefined]
```

Dies ist, weil durch die Auswahl von `a` in der ersten Alternative die Möglichkeit besteht, `bc` in der zweiten Alternative auszuwählen und eine erfolgreiche Übereinstimmung zu erzielen. Dieser Prozess wird _Backtracking_ genannt, weil der Matcher zuerst über die Disjunktion hinausgeht und dann zurückkommt, wenn das nachfolgende Matching fehlschlägt.

Beachten Sie auch, dass Klammern innerhalb einer Alternative, die nicht gematcht wird, `undefined` im resultierenden Array produzieren.

Eine Alternative kann leer sein; in diesem Fall entspricht sie der leeren Zeichenkette (mit anderen Worten, sie passt immer).

Alternativen werden immer von links nach rechts versucht, unabhängig von der Matching-Richtung (die in einer [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) umgekehrt ist).

## Beispiele

### Übereinstimmung von Dateierweiterungen

Im folgenden Beispiel werden Dateierweiterungen mit dem gleichen Code gematcht wie im Artikel über die [Eingangsgrenzwert-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#matching_file_extensions):

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantor: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
