---
title: "Quantifier: *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{jsSidebar}}

Ein **Quantifier** wiederholt ein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) eine bestimmte Anzahl von Malen. Der Quantifier wird nach dem Atom platziert, auf das er sich bezieht.

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
  - : Eine nicht-negative Ganzzahl. Die maximale Anzahl der Wiederholungen des Atoms. Wird dies weggelassen, kann das Atom beliebig oft wiederholt werden.

## Beschreibung

Ein Quantifier wird nach einem [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) platziert, um es eine bestimmte Anzahl von Malen zu wiederholen. Er kann nicht alleine stehen. Jeder Quantifier kann eine minimale und maximale Anzahl anzugeben, wie oft ein Muster wiederholt werden muss.

| Quantifier  | Minimum | Maximum   |
| ----------- | ------- | --------- |
| `?`         | 0       | 1         |
| `*`         | 0       | Unendlich |
| `+`         | 1       | Unendlich |
| `{count}`   | `count` | `count`   |
| `{min,}`    | `min`   | Unendlich |
| `{min,max}` | `min`   | `max`     |

Für die `{count}`, `{min,}` und `{min,max}` Syntaxen dürfen keine Leerzeichen um die Zahlen vorhanden sein — andernfalls wird es zu einem [Literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)-Muster.

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

Dieses Verhalten ist im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) festgelegt, wo Klammern nicht ohne [Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) wörtlich erscheinen können. Die Möglichkeit, `{` und `}` wörtlich ohne Escape zu verwenden, ist eine [veraltete Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js-nolint example-bad
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

Es liegt ein Syntaxfehler vor, wenn das Minimum größer als das Maximum ist.

```js-nolint example-bad
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

Quantifier können bewirken, dass [Capturing Groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) mehrmals übereinstimmen. Weitere Informationen zum Verhalten in diesem Fall finden Sie auf der Seite zu Capturing Groups.

Jede wiederholte Übereinstimmung muss nicht derselbe String sein.

```js
/[ab]*/.exec("aba"); // ['aba']
```

Quantifier sind standardmäßig _gierig_, was bedeutet, dass sie versuchen, so oft wie möglich zu matchen, bis das Maximum erreicht ist oder es nicht mehr möglich ist, weiter zu matchen. Sie können einen Quantifier _nicht gierig_ machen, indem Sie ein `?` dahinter setzen. In diesem Fall versucht der Quantifier, so wenig wie möglich zu matchen und matched nur mehr, wenn es unmöglich ist, den Rest des Musters mit dieser Anzahl an Wiederholungen zu matchen.

```js
/a*/.exec("aaa"); // ['aaa']; the entire input is consumed
/a*?/.exec("aaa"); // ['']; it's possible to consume no characters and still match successfully
/^a*?$/.exec("aaa"); // ['aaa']; it's not possible to consume fewer characters and still match successfully
```

Sobald der Regex jedoch den String an einem bestimmten Index erfolgreich matched, wird er keine weiteren Indizes testen, obwohl dies zu weniger verbrauchten Zeichen führen kann.

```js
/a*?$/.exec("aaa"); // ['aaa']; the match already succeeds at the first character, so the regex never attempts to start matching at the second character
```

Gierige Quantifier können weniger Wiederholungen versuchen, falls es auf andere Weise unmöglich ist, den Rest des Musters zu matchen.

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

In diesem Beispiel matcht `[ab]+` zunächst gierig `"abb"`, aber `[abc]c` kann den Rest des Musters (`"c"`) nicht matchen, sodass der Quantifier reduziert wird, um nur `"ab"` zu matchen.

Gierige Quantifier vermeiden es, unendlich viele leere Strings zu matchen. Wenn die minimale Anzahl an Übereinstimmungen erreicht ist und keine weiteren Zeichen an dieser Position durch das Atom verbraucht werden, hört der Quantifier auf zu matchen. Das ist der Grund, warum `/(a*)*/.exec("b")` nicht zu einer Endlosschleife führt.

Gierige Quantifier versuchen, so oft wie möglich zu matchen; sie maximieren nicht die Länge des Matches. Zum Beispiel matcht `/(aa|aabaac|ba)*/.exec("aabaac")` `"aa"` und dann `"ba"` anstelle von `"aabaac"`.

Quantifier beziehen sich auf ein einziges Atom. Wenn Sie ein längeres Muster oder eine Disjunktion quantifizieren möchten, müssen Sie es [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group). Quantifier können nicht auf [Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet werden.

```js-nolint example-bad
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können [Lookahead Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) quantifiziert werden. Dies ist eine [veraltete Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

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

Der gleiche Effekt kann mit einem gierigen Match erzielt werden, jedoch ohne dass das wiederholte Muster `>` matchen kann.

```js
function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> [!WARNING]
> Dies ist nur zu Demonstrationszwecken — es behandelt `>` in Attributwerten nicht korrekt. Verwenden Sie stattdessen eine richtige HTML-Sanitizer wie die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API).

### Auffinden von Markdown-Absätzen

In Markdown werden Absätze durch eine oder mehrere leere Zeilen getrennt. Das folgende Beispiel zählt alle Absätze in einem String, indem es zwei oder mehr Zeilenumbrüche matched.

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
> Dies ist nur zu Demonstrationszwecken — es behandelt Zeilenumbrüche in Codeblöcken oder anderen Markdown-Blockelementen wie Überschriften nicht. Verwenden Sie stattdessen einen richtigen Markdown-Parser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
