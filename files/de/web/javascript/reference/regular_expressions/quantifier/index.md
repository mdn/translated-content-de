---
title: "Quantifikatoren: *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Ein **Quantifikator** wiederholt ein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) eine bestimmte Anzahl von Malen. Der Quantifikator wird nach dem Atom platziert, auf das er angewendet wird.

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
  - : Eine nicht-negative ganze Zahl. Die Anzahl der Wiederholungen des Atoms.
- `min`
  - : Eine nicht-negative ganze Zahl. Die minimale Anzahl der Wiederholungen des Atoms.
- `max` {{optional_inline}}
  - : Eine nicht-negative ganze Zahl. Die maximale Anzahl der Wiederholungen des Atoms. Wenn weggelassen, kann das Atom so oft wie nötig wiederholt werden.

## Beschreibung

Ein Quantifikator wird nach einem [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) platziert, um es eine bestimmte Anzahl von Malen zu wiederholen. Er kann nicht alleine erscheinen. Jeder Quantifikator kann eine minimale und maximale Anzahl angeben, wie oft ein Muster wiederholt werden muss.

| Quantifikator | Minimum | Maximum  |
| ------------- | ------- | -------- |
| `?`           | 0       | 1        |
| `*`           | 0       | Infinity |
| `+`           | 1       | Infinity |
| `{count}`     | `count` | `count`  |
| `{min,}`      | `min`   | Infinity |
| `{min,max}`   | `min`   | `max`    |

Für die Syntaxen `{count}`, `{min,}`, und `{min,max}` dürfen keine Leerzeichen um die Zahlen stehen — sonst wird es zu einem [literal](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster.

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

Dieses Verhalten ist im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) festgelegt, wo geschweifte Klammern nicht ohne [Escape-Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) wörtlich erscheinen können. Die Möglichkeit, `{` und `}` wörtlich ohne Escape-Zeichen zu verwenden, ist eine [veraltete Syntax zur Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js-nolint example-bad
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

Es ist ein Syntaxfehler, wenn das Minimum größer als das Maximum ist.

```js-nolint example-bad
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

Quantifikatoren können dazu führen, dass [Capturing-Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) mehrmals übereinstimmen. Weitere Informationen dazu finden Sie auf der Seite über Capturing-Gruppen.

Jedes wiederholte Übereinstimmen muss nicht derselbe String sein.

```js
/[ab]*/.exec("aba"); // ['aba']
```

Quantifikatoren sind standardmäßig _gierig_, was bedeutet, dass sie versuchen, so oft wie möglich übereinzustimmen, bis das Maximum erreicht ist oder es nicht mehr möglich ist, weiter zu übereinstimmen. Sie können einen Quantifikator _nicht-gierig_ machen, indem Sie ein `?` danach hinzufügen. In diesem Fall wird der Quantifikator versuchen, so wenig wie möglich übereinzustimmen, und nur mehr übereinstimmen, wenn es unmöglich ist, den Rest des Musters mit dieser Anzahl von Wiederholungen zu übereinstimmen.

```js
/a*/.exec("aaa"); // ['aaa']; the entire input is consumed
/a*?/.exec("aaa"); // ['']; it's possible to consume no characters and still match successfully
/^a*?$/.exec("aaa"); // ['aaa']; it's not possible to consume fewer characters and still match successfully
```

Sobald der Regex jedoch die Zeichenkette erfolgreich an einem bestimmten Index abgleicht, wird er nicht an nachfolgenden Indizes versuchen, selbst wenn dies zu weniger konsumierten Zeichen führen könnte.

```js
/a*?$/.exec("aaa"); // ['aaa']; the match already succeeds at the first character, so the regex never attempts to start matching at the second character
```

Gierige Quantifikatoren können weniger Wiederholungen versuchen, wenn es sonst unmöglich ist, den Rest des Musters zu erfüllen.

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

In diesem Beispiel gleicht `[ab]+` zuerst gierig `"abb"` ab, aber `[abc]c` kann den Rest des Musters (`"c"`) nicht abgleichen, sodass der Quantifikator reduziert wird, um nur `"ab"` abzugleichen.

Gierige Quantifikatoren vermeiden es, unendlich viele leere Zeichenfolgen abzugleichen. Wenn die Mindestanzahl an Übereinstimmungen erreicht ist und keine weiteren Zeichen durch das Atom an dieser Position konsumiert werden, hört der Quantifikator auf, abzugleichen. Dies ist der Grund, warum `/(a*)*/.exec("b")` nicht in einer Endlosschleife resultiert.

Gierige Quantifikatoren versuchen, so oft wie möglich übereinzustimmen; dies maximiert jedoch nicht die _Länge_ des Abgleichs. Zum Beispiel, `/(aa|aabaac|ba)*/.exec("aabaac")` gleicht `"aa"` und dann `"ba"` ab, anstatt `"aabaac"`.

Quantifikatoren beziehen sich auf ein einzelnes Atom. Wenn Sie ein längeres Muster oder eine Disjunktion quantifizieren möchten, müssen Sie es [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group). Quantifikatoren können nicht auf [Assertionen](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet werden.

```js-nolint example-bad
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können [Lookahead-Assertionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) quantifiziert werden. Dies ist eine [veraltete Syntax zur Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

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

Der gleiche Effekt kann mit einem gierigen Abgleich erzielt werden, indem dem wiederholten Muster nicht erlaubt wird, `>` abzugleichen.

```js
function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> [!WARNING]
> Dies ist nur zu Demonstrationszwecken — es behandelt `>` in Attributwerten nicht. Verwenden Sie stattdessen einen richtigen HTML-Sanitizer wie die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API).

### Lokalisieren von Markdown-Absätzen

In Markdown werden Absätze durch eine oder mehrere leere Zeilen getrennt. Das folgende Beispiel zählt alle Absätze in einem String, indem es zwei oder mehr Zeilenumbrüche abgleicht.

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
> Dies ist nur zu Demonstrationszwecken — es behandelt keine Zeilenumbrüche in Codeblöcken oder anderen Markdown-Blockelementen wie Überschriften. Verwenden Sie stattdessen einen passenden Markdown-Parser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjunction: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
