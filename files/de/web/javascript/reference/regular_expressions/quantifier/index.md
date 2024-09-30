---
title: "Quantifier: *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
l10n:
  sourceCommit: 041d9aa17d190e5b1b29e3706b31403e16a29046
---

{{jsSidebar}}

Ein **Quantor** wiederholt ein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) eine bestimmte Anzahl von Malen. Der Quantor wird direkt nach dem Atom platziert, auf das er angewendet wird.

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
  - : Eine nicht-negative ganze Zahl. Die Anzahl der Male, die das Atom wiederholt werden soll.
- `min`
  - : Eine nicht-negative ganze Zahl. Die Mindestanzahl von Wiederholungen des Atoms.
- `max` {{optional_inline}}
  - : Eine nicht-negative ganze Zahl. Die Höchstanzahl von Wiederholungen des Atoms. Wenn ausgelassen, kann das Atom so oft wie nötig wiederholt werden.

## Beschreibung

Ein Quantor wird nach einem [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) platziert, um es eine bestimmte Anzahl von Malen zu wiederholen. Er kann nicht eigenständig erscheinen. Jeder Quantor kann eine Mindest- und Höchstanzahl angeben, die ein Muster wiederholt werden muss.

| Quantor     | Minimum | Maximum  |
| ----------- | ------- | -------- |
| `?`         | 0       | 1        |
| `*`         | 0       | Unendlich |
| `+`         | 1       | Unendlich |
| `{count}`   | `count` | `count`  |
| `{min,}`    | `min`   | Unendlich |
| `{min,max}` | `min`   | `max`    |

Für die Syntaxen `{count}`, `{min,}` und `{min,max}` dürfen keine Leerzeichen um die Zahlen vorhanden sein – andernfalls wird es zu einem [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster.

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

Dieses Verhalten wird im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) behoben, wo Klammern nicht ohne [Escaping](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) buchstäblich erscheinen können. Die Fähigkeit, `{` und `}` buchstäblich ohne Escaping zu verwenden, ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js-nolint example-bad
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

Es ist ein Syntaxfehler, wenn das Minimum größer als das Maximum ist.

```js-nolint example-bad
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

Quantoren können dazu führen, dass [Capturing Groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) mehrmals übereinstimmen. Weitere Informationen zu diesem Verhalten finden Sie auf der Seite über Capturing Groups.

Jedes wiederholte Übereinstimmen muss nicht derselbe String sein.

```js
/[ab]*/.exec("aba"); // ['aba']
```

Quantoren sind standardmäßig _gierig_, was bedeutet, dass sie versuchen, so oft wie möglich zu übereinstimmen, bis das Maximum erreicht ist oder es nicht mehr möglich ist, weiter zu übereinstimmen. Sie können einen Quantor _nicht gierig_ machen, indem Sie ein `?` dahinter hinzufügen. In diesem Fall wird der Quantor versuchen, so wenige Male wie möglich zu übereinstimmen und nur dann mehrmals zu passen, wenn es unmöglich ist, den Rest des Musters mit dieser Anzahl an Wiederholungen zu passen.

```js
/a*/.exec("aaa"); // ['aaa']; the entire input is consumed
/a*?/.exec("aaa"); // ['']; it's possible to consume no characters and still match successfully
/^a*?$/.exec("aaa"); // ['aaa']; it's not possible to consume fewer characters and still match successfully
```

Sobald der Regex jedoch erfolgreich den String an einem bestimmten Index übereinstimmt, wird er keine weiteren Indizes versuchen, obwohl dies zu weniger verbrauchten Zeichen führen kann.

```js
/a*?$/.exec("aaa"); // ['aaa']; the match already succeeds at the first character, so the regex never attempts to start matching at the second character
```

Gierige Quantoren können weniger Wiederholungen versuchen, wenn es sonst unmöglich ist, den Rest des Musters zu übereinstimmen.

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

In diesem Beispiel matcht `[ab]+` zuerst gierig `"abb"`, aber `[abc]c` kann den Rest des Musters (`"c"`) nicht übereinstimmen, sodass der Quantor reduziert wird, um nur `"ab"` zu passen.

Gierige Quantoren vermeiden, unendlich viele leere Strings zu matchen. Wenn die minimale Anzahl von Übereinstimmungen erreicht ist und keine weiteren Zeichen an dieser Position vom Atom verbraucht werden, stoppt der Quantor das Übereinstimmen. Das ist der Grund, warum `/(a*)*/.exec("b")` nicht zu einer Endlosschleife führt.

Gierige Quantoren versuchen, so oft wie möglich zu passen; sie maximieren nicht die _Länge_ des Matches. Zum Beispiel, `/(aa|aabaac|ba)*/.exec("aabaac")` matcht `"aa"` und dann `"ba"` statt `"aabaac"`.

Quantoren gelten für ein einzelnes Atom. Wenn Sie ein längeres Muster oder eine Disjunktion quantifizieren möchten, müssen Sie es [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group). Quantoren können nicht auf [Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet werden.

```js-nolint example-bad
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können [Lookahead Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) quantifiziert werden. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## Beispiele

### Entfernen von HTML-Tags

Das folgende Beispiel entfernt HTML-Tags, die in spitze Klammern eingeschlossen sind. Beachten Sie die Verwendung von `?`, um zu vermeiden, zu viele Zeichen auf einmal zu konsumieren.

```js
function stripTags(str) {
  return str.replace(/<.+?>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

Der gleiche Effekt kann mit einem gierigen Match erreicht werden, wobei jedoch verhindert wird, dass das wiederholte Muster `>` matchen kann.

```js
function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> [!WARNING]
> Dies dient nur zu Demonstrationszwecken — es behandelt nicht `>` in Attributwerten. Verwenden Sie stattdessen einen ordnungsgemäßen HTML-Filter.

### Lokalisierung von Markdown-Absätzen

In Markdown sind Absätze durch ein oder mehrere leere Zeilen getrennt. Das folgende Beispiel zählt alle Absätze in einem String, indem es zwei oder mehr Zeilenumbrüche matcht.

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
> Dies dient nur zu Demonstrationszwecken — es behandelt nicht Zeilenumbrüche in Codeblöcken oder anderen Markdown-Blockelementen wie Überschriften. Verwenden Sie stattdessen einen ordnungsgemäßen Markdown-Parser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjunction: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
