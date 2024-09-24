---
title: "Quantor: *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
l10n:
  sourceCommit: 041d9aa17d190e5b1b29e3706b31403e16a29046
---

{{jsSidebar}}

Ein **Quantor** wiederholt ein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) eine bestimmte Anzahl von Malen. Der Quantor wird hinter dem Atom platziert, auf das er angewendet wird.

## Syntax

```regex
// Geizig
atom?
atom*
atom+
atom{count}
atom{min,}
atom{min,max}

// Nicht-geizig
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
  - : Eine nicht-negative ganze Zahl. Die Anzahl der Wiederholungen des Atoms.
- `min`
  - : Eine nicht-negative ganze Zahl. Die minimale Anzahl der Wiederholungen des Atoms.
- `max` {{optional_inline}}
  - : Eine nicht-negative ganze Zahl. Die maximale Anzahl der Wiederholungen des Atoms. Falls ausgelassen, kann das Atom so oft wie nötig wiederholt werden.

## Beschreibung

Ein Quantor wird hinter einem [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) platziert, um es eine bestimmte Anzahl von Malen zu wiederholen. Es kann nicht alleine erscheinen. Jeder Quantor kann eine Mindest- und Höchstanzahl angeben, wie oft ein Muster wiederholt werden muss.

| Quantor    | Minimum | Maximum  |
| ---------- | ------- | -------- |
| `?`        | 0       | 1        |
| `*`        | 0       | Unendlich|
| `+`        | 1       | Unendlich|
| `{count}`  | `count` | `count`  |
| `{min,}`   | `min`   | Unendlich|
| `{min,max}`| `min`   | `max`    |

Für die Syntaxen `{count}`, `{min,}` und `{min,max}` dürfen keine Leerzeichen um die Zahlen vorhanden sein — andernfalls wird es zu einem [Literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)-Muster.

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

Dieses Verhalten wird im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) behoben, wo geschweifte Klammern nicht wörtlich ohne [Escaping](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) erscheinen können. Die Fähigkeit, `{` und `}` wörtlich ohne Escaping zu verwenden, ist eine [veraltete Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js-nolint example-bad
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

Es ist ein Syntaxfehler, wenn das Minimum größer als das Maximum ist.

```js-nolint example-bad
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

Quantoren können dazu führen, dass [Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) mehrmals übereinstimmen. Siehe die Seite zu Erfassungsgruppen für weitere Informationen über das Verhalten in diesem Fall.

Jedes wiederholte Match muss nicht derselbe String sein.

```js
/[ab]*/.exec("aba"); // ['aba']
```

Quantoren sind standardmäßig _geizig_, was bedeutet, dass sie versuchen, so oft wie möglich zu passen, bis das Maximum erreicht ist oder bis es nicht mehr möglich ist, weiter zu passen. Sie können einen Quantor _nicht-geizig_ machen, indem Sie ein `?` dahinter hinzufügen. In diesem Fall versucht der Quantor, so wenig wie möglich zu passen, und passt nur mehrmals, wenn es unmöglich ist, den Rest des Musters mit dieser Anzahl von Wiederholungen zu matchen.

```js
/a*/.exec("aaa"); // ['aaa']; die gesamte Eingabe wird konsumiert
/a*?/.exec("aaa"); // ['']; es ist möglich, keine Zeichen zu verbrauchen und dennoch erfolgreich zu matchen
/^a*?$/.exec("aaa"); // ['aaa']; es ist nicht möglich, weniger Zeichen zu verbrauchen und trotzdem erfolgreich zu matchen
```

Sobald der reguläre Ausdruck erfolgreich mit dem String an einem bestimmten Index übereinstimmt, versucht er jedoch keine nachfolgenden Indizes, obwohl dies zu weniger verbrauchten Zeichen führen könnte.

```js
/a*?$/.exec("aaa"); // ['aaa']; das Match gelingt bereits beim ersten Zeichen, sodass der Regexp nicht versucht, beim zweiten Zeichen zu beginnen
```

Geizige Quantoren können versuchen, weniger Wiederholungen zu machen, wenn es ansonsten unmöglich ist, den Rest des Musters zu matchen.

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

In diesem Beispiel passt `[ab]+` zuerst geizig `"abb"`, aber `[abc]c` kann den Rest des Musters (`"c"`) nicht passen, daher wird der Quantor reduziert, um nur `"ab"` zu passen.

Geizige Quantoren vermeiden es, unendlich viele leere Zeichenfolgen zu passen. Wenn die minimale Anzahl von Übereinstimmungen erreicht ist und keine weiteren Zeichen an dieser Position vom Atom verbraucht werden, hört der Quantor auf zu passen. Deshalb führt `/(a*)*/.exec("b")` nicht zu einer Endlosschleife.

Geizige Quantoren versuchen, so oft wie möglich zu passen; sie maximieren nicht die Länge des Matches. Zum Beispiel `/(aa|aabaac|ba)*/.exec("aabaac")` passt `"aa"` und dann `"ba"` anstelle von `"aabaac"`.

Quantoren gelten für ein einzelnes Atom. Wenn Sie ein längeres Muster oder eine Disjunktion quantifizieren möchten, müssen Sie es [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group). Quantoren können nicht auf [Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet werden.

```js-nolint example-bad
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können [Lookahead-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) quantifiziert werden. Dies ist eine [veraltete Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/(?=a)?b/.test("b"); // true; das Lookahead wird 0 Mal gematcht
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

Der gleiche Effekt kann mit einem geizigen Match erzielt werden, jedoch ohne das wiederholte Muster zuzulassen, um `>` zu passen.

```js
function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> [!WARNING]
> Dies ist nur zur Demonstration — es behandelt nicht `>` in Attributwerten. Verwenden Sie stattdessen einen ordnungsgemäßen HTML-Sanitizer.

### Lokalisieren von Markdown-Absätzen

In Markdown werden Absätze durch eine oder mehrere Leerzeilen getrennt. Das folgende Beispiel zählt alle Absätze in einem String, indem es zwei oder mehr Zeilenumbrüche matched.

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
> Dies ist nur zur Demonstration — es behandelt keine Zeilenumbrüche in Codeblöcken oder anderen Markdown-Blockelementen wie Überschriften. Verwenden Sie stattdessen einen ordnungsgemäßen Markdown-Parser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Quantoren](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Anleitung
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
