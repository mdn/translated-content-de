---
title: "Disjunktion: |"
slug: Web/JavaScript/Reference/Regular_expressions/Disjunction
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Disjunktion** spezifiziert mehrere Alternativen. Wenn eine Alternative mit der Eingabe übereinstimmt, wird die gesamte Disjunktion als passend betrachtet.

## Syntax

```regex
alternative1|alternative2
alternative1|alternative2|alternative3|…
```

### Parameter

- `alternativeN`
  - : Ein alternatives Muster, bestehend aus einer Folge von [Atomen und Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions). Wenn eine Alternative erfolgreich übereinstimmt, wird die gesamte Disjunktion als passend betrachtet.

## Beschreibung

Der `|`-Regulärausdrucksoperator trennt zwei oder mehr _Alternativen_. Das Muster versucht zuerst, die erste Alternative zu finden; wenn dies fehlschlägt, versucht es, die zweite zu finden, und so weiter. Zum Beispiel wird hier `"a"` statt `"ab"` gefunden, da die erste Alternative bereits erfolgreich übereinstimmt:

```js
/a|ab/.exec("abc"); // ['a']
```

Der `|`-Operator hat die niedrigste Priorität in einem Regulärausdruck. Wenn Sie eine Disjunktion als Teil eines größeren Musters verwenden möchten, müssen Sie sie [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group).

Wenn eine gruppierte Disjunktion noch Ausdrücke danach hat, beginnt das Matching, indem die erste Alternative ausgewählt wird und versucht wird, den Rest des Regulärausdrucks zu finden. Wenn der Rest des Regulärausdrucks nicht übereinstimmt, versucht der Matcher stattdessen die nächste Alternative. Zum Beispiel:

```js
/(?:(a)|(ab))(?:(c)|(bc))/.exec("abc"); // ['abc', 'a', undefined, undefined, 'bc']
// Nicht ['abc', undefined, 'ab', 'c', undefined]
```

Dies liegt daran, dass durch die Auswahl von `a` in der ersten Alternative es möglich ist, `bc` in der zweiten Alternative auszuwählen, was zu einem erfolgreichen Match führt. Dieser Prozess wird _Backtracking_ genannt, da der Matcher zuerst ein Stück über die Disjunktion hinaus geht und dann zu ihr zurückkommt, wenn das folgende Matching fehlschlägt.

Beachten Sie auch, dass alle erfassten Klammern innerhalb einer Alternative, die nicht übereinstimmt, `undefined` im resultierenden Array erzeugen.

Eine Alternative kann leer sein, in diesem Fall entspricht sie dem leeren String (mit anderen Worten, sie stimmt immer überein).

Alternativen werden immer von links nach rechts versucht, unabhängig von der Richtung des Matching (die bei einem [Lookbehind-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) umgekehrt ist).

## Beispiele

### Dateiendungen abgleichen

Im folgenden Beispiel werden Dateiendungen verglichen, wobei derselbe Code wie im Artikel zur [Eingabegrenzen-Assertion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#matching_file_extensions) verwendet wird:

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
