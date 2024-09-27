---
title: "Quantifier: *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
l10n:
  sourceCommit: 041d9aa17d190e5b1b29e3706b31403e16a29046
---

{{jsSidebar}}

Ein **Quantor** wiederholt ein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) eine bestimmte Anzahl von Malen. Der Quantor wird nach dem Atom platziert, auf das er angewendet wird.

## Syntax

```regex
// Greedy
atom?
atom*
atom+
atom{count}
atom{min,}
atom{min,max}

// Non-greedy
atom??
atom*?
atom+?
atom{count}?
atom{min,}?
atom{min,max}?
```

### Parameter

- `atom`
  - : Ein einzelnes [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms).
- `count`
  - : Eine nicht-negative Ganzzahl. Die Anzahl der Wiederholungen des Atoms.
- `min`
  - : Eine nicht-negative Ganzzahl. Die minimale Anzahl der Wiederholungen des Atoms.
- `max` {{optional_inline}}
  - : Eine nicht-negative Ganzzahl. Die maximale Anzahl der Wiederholungen des Atoms. Wenn weggelassen, kann das Atom so oft wie nötig wiederholt werden.

## Beschreibung

Ein Quantor wird nach einem [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) platziert, um es eine bestimmte Anzahl von Malen zu wiederholen. Er kann nicht alleine erscheinen. Jeder Quantor kann eine minimale und maximale Anzahl angeben, wie oft ein Muster wiederholt werden muss.

| Quantor     | Minimum | Maximum   |
| ----------- | ------- | --------- |
| `?`         | 0       | 1         |
| `*`         | 0       | Unendlich |
| `+`         | 1       | Unendlich |
| `{count}`   | `count` | `count`   |
| `{min,}`    | `min`   | Unendlich |
| `{min,max}` | `min`   | `max`     |

Für die Syntaxen `{count}`, `{min,}` und `{min,max}` dürfen keine Leerzeichen um die Zahlen herum vorhanden sein – andernfalls wird es zu einem [Literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)-Muster.

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

Dieses Verhalten wird im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) festgelegt, in dem geschweifte Klammern nicht buchstäblich ohne [Escaping](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) erscheinen können. Die Fähigkeit, `{` und `}` buchstäblich ohne Escaping zu verwenden, ist eine [veraltete Syntax zur Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js-nolint example-bad
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

Es ist ein Syntaxfehler, wenn das Minimum größer als das Maximum ist.

```js-nolint example-bad
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

Quantoren können [erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) mehrmals übereinstimmen lassen. Weitere Informationen zu diesem Verhalten finden Sie auf der Seite über erfassende Gruppen.

Jeder wiederholte Abgleich muss nicht derselbe String sein.

```js
/[ab]*/.exec("aba"); // ['aba']
```

Quantoren sind standardmäßig _gierig_, was bedeutet, dass sie versuchen, so oft wie möglich zu passen, bis das Maximum erreicht ist oder es nicht möglich ist, weiter abzugleichen. Sie können einen Quantor _nicht gierig_ machen, indem Sie ein `?` nach ihm hinzufügen. In diesem Fall versucht der Quantor, so wenig Mal wie möglich zu passen und nur mehr Mal zu passen, wenn es unmöglich ist, den Rest des Musters mit dieser Anzahl von Wiederholungen abzugleichen.

```js
/a*/.exec("aaa"); // ['aaa']; the entire input is consumed
/a*?/.exec("aaa"); // ['']; it's possible to consume no characters and still match successfully
/^a*?$/.exec("aaa"); // ['aaa']; it's not possible to consume fewer characters and still match successfully
```

Sobald der Regex erfolgreich den String an einem Index abgleicht, versucht er nicht, spätere Indizes abzugleichen, obwohl dies dazu führen könnte, dass weniger Zeichen konsumiert werden.

```js
/a*?$/.exec("aaa"); // ['aaa']; the match already succeeds at the first character, so the regex never attempts to start matching at the second character
```

Gierige Quantoren können versuchen, weniger Wiederholungen durchzuführen, wenn es andernfalls unmöglich ist, den Rest des Musters zu passen.

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

In diesem Beispiel passt `[ab]+` zuerst gierig auf `"abb"`, aber `[abc]c` kann den Rest des Musters (`"c"`) nicht abgleichen, sodass der Quantor reduziert wird, um nur `"ab"` zu passen.

Gierige Quantoren vermeiden das unendliche Übereinstimmen vieler leerer Strings. Wenn die Mindestanzahl der Übereinstimmungen erreicht ist und keine weiteren Zeichen an dieser Position vom Atom konsumiert werden, stoppt der Quantor das Abgleichen. Aus diesem Grund führt `/(a*)*/.exec("b")` nicht zu einer Endlosschleife.

Gierige Quantoren versuchen, so oft wie möglich zu passen; sie maximieren nicht die Länge des Abgleichs. Zum Beispiel `/(aa|aabaac|ba)*/.exec("aabaac")` passt `"aa"` und dann `"ba"` statt `"aabaac"`.

Quantoren gelten für ein einzelnes Atom. Wenn Sie ein längeres Muster oder eine Disjunktion quantifizieren möchten, müssen Sie es [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group). Quantoren können nicht auf [Behauptungen](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet werden.

```js-nolint example-bad
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können [Lookahead-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) quantifiziert werden. Dies ist eine [veraltete Syntax zur Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## Beispiele

### Entfernen von HTML-Tags

Das folgende Beispiel entfernt HTML-Tags, die in spitzen Klammern eingeschlossen sind. Beachten Sie die Verwendung von `?`, um zu vermeiden, dass zu viele Zeichen auf einmal konsumiert werden.

```js
function stripTags(str) {
  return str.replace(/<.+?>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

Der gleiche Effekt kann mit einem gierigen Abgleich erreicht werden, allerdings darf das wiederholte Muster nicht `>` entsprechen.

```js
function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> [!WARNING]
> Dies dient nur zu Demonstrationszwecken — es hantiert nicht mit `>` in Attributwerten. Verwenden Sie stattdessen einen geeigneten HTML-Sanitizer.

### Auffinden von Markdown-Absätzen

In Markdown sind Absätze durch eine oder mehrere Leerzeilen voneinander getrennt. Das folgende Beispiel zählt alle Absätze in einem String, indem es auf zwei oder mehr Zeilenumbrüche abgleicht.

```js
function countParagraphs(str) {
  return str.match(/(?:\r?\n){2,}/g).length + 1;
}

countParagraphs(`
Paragraph 1

Paragraph 2
Containing some line breaks, but still the same paragraph

Another paragraph
`); // 3
```

> [!WARNING]
> Dies dient nur zu Demonstrationszwecken — es hantiert nicht mit Zeilenumbrüchen in Codeblöcken oder anderen Markdown-Blockelementen wie Überschriften. Verwenden Sie stattdessen einen geeigneten Markdown-Parser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
