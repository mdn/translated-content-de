---
title: "Disjunktion: |"
slug: Web/JavaScript/Reference/Regular_expressions/Disjunction
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Disjunktion** spezifiziert mehrere Alternativen. Wenn eine Alternative mit der Eingabe übereinstimmt, wird die gesamte Disjunktion als übereinstimmend betrachtet.

## Syntax

```regex
alternative1|alternative2
alternative1|alternative2|alternative3|…
```

### Parameter

- `alternativeN`
  - : Eine alternative Vorlage, bestehend aus einer Sequenz von [Atomen und Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions). Das erfolgreiche Übereinstimmen einer Alternative führt dazu, dass die gesamte Disjunktion übereinstimmt.

## Beschreibung

Der reguläre Ausdrucksoperator `|` trennt zwei oder mehr _Alternativen_. Das Muster versucht zuerst, die erste Alternative zu erkennen; wenn dies fehlschlägt, versucht es, die zweite zu erkennen, und so weiter. Zum Beispiel wird im folgenden Beispiel `"a"` anstelle von `"ab"` übereinstimmen, da die erste Alternative bereits erfolgreich übereinstimmt:

```js
/a|ab/.exec("abc"); // ['a']
```

Der `|` Operator hat die niedrigste Priorität in einem regulären Ausdruck. Wenn Sie eine Disjunktion als Teil eines größeren Musters verwenden möchten, müssen Sie diese [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group).

Wenn eine gruppierte Disjunktion weitere Ausdrücke danach hat, beginnt das Matching, indem die erste Alternative ausgewählt und versucht wird, den Rest des regulären Ausdrucks zu erfassen. Wenn der Rest des regulären Ausdrucks nicht übereinstimmt, versucht der Matcher stattdessen die nächste Alternative. Zum Beispiel,

```js
/(?:(a)|(ab))(?:(c)|(bc))/.exec("abc"); // ['abc', 'a', undefined, undefined, 'bc']
// Not ['abc', undefined, 'ab', 'c', undefined]
```

Dies liegt daran, dass durch das Auswählen von `a` in der ersten Alternative es möglich ist, `bc` in der zweiten Alternative auszuwählen und ein erfolgreiches Matching zu erzielen. Dieser Prozess wird _Backtracking_ genannt, da der Matcher zuerst über die Disjunktion hinausgeht und dann darauf zurückkommt, wenn das anschließende Matching fehlschlägt.

Beachten Sie auch, dass alle erfassenden Klammern innerhalb einer Alternative, die nicht übereinstimmt, `undefined` im resultierenden Array erzeugen.

Eine Alternative kann leer sein, in diesem Fall entspricht sie dem leeren String (in anderen Worten, sie stimmt immer überein).

Alternativen werden immer von links nach rechts versucht, unabhängig von der Richtung der Übereinstimmung (was bei einem [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) umgekehrt ist).

## Beispiele

### Dateierweiterungen abgleichen

Das folgende Beispiel stimmt mit Dateierweiterungen überein und verwendet denselben Code wie im Artikel zur [Eingabegrenzen-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#matching_file_extensions):

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
