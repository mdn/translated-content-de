---
title: "Disjunktion: |"
slug: Web/JavaScript/Reference/Regular_expressions/Disjunction
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Disjunktion** gibt mehrere Alternativen an. Wenn eine Alternative mit der Eingabe übereinstimmt, führt dies dazu, dass die gesamte Disjunktion übereinstimmt.

## Syntax

```regex
alternative1|alternative2
alternative1|alternative2|alternative3|…
```

### Parameter

- `alternativeN`
  - : Ein alternatives Muster, bestehend aus einer Sequenz von [Atomen und Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions). Das erfolgreiche Abgleichen einer Alternative führt dazu, dass die gesamte Disjunktion übereinstimmt.

## Beschreibung

Der `|` reguläre Ausdrucksoperator trennt zwei oder mehr _Alternativen_. Das Muster versucht zuerst, mit der ersten Alternative übereinzustimmen; wenn dies fehlschlägt, versucht es, mit der zweiten übereinzustimmen, und so weiter. Zum Beispiel stimmt das Folgende mit `"a"` anstelle von `"ab"` überein, da die erste Alternative bereits erfolgreich übereinstimmt:

```js
/a|ab/.exec("abc"); // ['a']
```

Der `|` Operator hat die niedrigste Priorität in einem regulären Ausdruck. Wenn Sie eine Disjunktion als Teil eines größeren Musters verwenden möchten, müssen Sie sie [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group).

Wenn eine gruppierte Disjunktion nach ihr weitere Ausdrücke hat, beginnt das Matching, indem die erste Alternative ausgewählt wird und versucht wird, den Rest des regulären Ausdrucks abzugleichen. Wenn der Rest des regulären Ausdrucks nicht übereinstimmt, versucht der Matcher stattdessen die nächste Alternative. Zum Beispiel,

```js
/(?:(a)|(ab))(?:(c)|(bc))/.exec("abc"); // ['abc', 'a', undefined, undefined, 'bc']
// Not ['abc', undefined, 'ab', 'c', undefined]
```

Dies liegt daran, dass durch die Auswahl von `a` in der ersten Alternative `bc` in der zweiten Alternative ausgewählt werden kann und das Ganze zu einem erfolgreichen Match führt. Dieser Prozess wird _Backtracking_ genannt, weil der Matcher zunächst über die Disjunktion hinausgeht und dann zu ihr zurückkehrt, wenn das nachfolgende Match fehlschlägt.

Beachten Sie auch, dass Klammern, die innerhalb einer Alternative erfasst werden und die nicht übereinstimmen, `undefined` im resultierenden Array erzeugen.

Eine Alternative kann leer sein, in diesem Fall stimmt sie mit dem leeren String überein (mit anderen Worten, sie stimmt immer überein).

Alternativen werden immer von links nach rechts versucht, unabhängig von der Richtung des Matchings (die in einem [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) umgekehrt ist).

## Beispiele

### Dateierweiterungen abgleichen

Das folgende Beispiel stimmt mit Dateierweiterungen überein, mit demselben Code wie der Artikel zur [Eingangsgrenzen-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#matching_file_extensions):

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
- [Quantifizierer: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
