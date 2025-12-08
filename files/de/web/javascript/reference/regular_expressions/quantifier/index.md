---
title: "Quantor: *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
l10n:
  sourceCommit: 0f6daa30cf89c66d37700c51b8a12e660fee29d9
---

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

> [!NOTE]
> Das Hinzufügen von `?` nach `{count}` ist syntaktisch korrekt, aber praktisch nutzlos. Da `{count}` immer genau `count` Mal übereinstimmt, verhält sich `atom{count}?` genauso wie `atom{count}`.

### Parameter

- `atom`
  - : Ein einzelnes [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms).
- `count`
  - : Eine nicht-negative ganze Zahl. Die Anzahl der Male, die das Atom wiederholt werden soll.
- `min`
  - : Eine nicht-negative ganze Zahl. Die minimale Anzahl der Wiederholungen des Atoms.
- `max` {{optional_inline}}
  - : Eine nicht-negative ganze Zahl. Die maximale Anzahl der Wiederholungen des Atoms. Wenn sie weggelassen wird, kann das Atom so oft wie nötig wiederholt werden.

## Beschreibung

Ein Quantor wird nach einem [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) platziert, um es eine bestimmte Anzahl von Malen zu wiederholen. Er kann nicht alleine erscheinen. Jeder Quantor kann eine minimale und maximale Anzahl von Wiederholungen angeben, die ein Muster haben muss.

| Quantor     | Minimum | Maximum   |
| ----------- | ------- | --------- |
| `?`         | 0       | 1         |
| `*`         | 0       | Unendlich |
| `+`         | 1       | Unendlich |
| `{count}`   | `count` | `count`   |
| `{min,}`    | `min`   | Unendlich |
| `{min,max}` | `min`   | `max`     |

Bei den Syntaxen `{count}`, `{min,}` und `{min,max}` dürfen keine Leerzeichen um die Zahlen vorhanden sein — andernfalls wird es zu einem [Literal-](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster.

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

Dieses Verhalten ist im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) behoben, in dem Klammern nicht wörtlich ohne [Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) erscheinen können. Die Fähigkeit, `{` und `}` wörtlich ohne Escape zu verwenden, ist eine [veraltete Syntax für die Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js-nolint example-bad
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

Es tritt ein Syntaxfehler auf, wenn das Minimum größer als das Maximum ist.

```js-nolint example-bad
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

Quantoren können dazu führen, dass [erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) mehrmals übereinstimmen. Siehe die Seite über die erfassenden Gruppen für weitere Informationen zum Verhalten in diesem Fall.

Jedes wiederholte Übereinstimmen muss nicht der gleiche String sein.

```js
/[ab]*/.exec("aba"); // ['aba']
```

Quantoren sind standardmäßig _gierig_, was bedeutet, dass sie versuchen, so oft wie möglich zu arbeiten, bis das Maximum erreicht ist oder bis es nicht mehr möglich ist, weiter abzugleichen. Sie können einen Quantor _nicht-gierig_ machen, indem Sie ein `?` dahinter hinzufügen. In diesem Fall wird der Quantor versuchen, so wenig wie möglich zu arbeiten, und nur dann öfter übereinstimmen, wenn es unmöglich ist, den Rest des Musters mit dieser Anzahl von Wiederholungen abzugleichen.

```js
/a*/.exec("aaa"); // ['aaa']; the entire input is consumed
/a*?/.exec("aaa"); // ['']; it's possible to consume no characters and still match successfully
/^a*?$/.exec("aaa"); // ['aaa']; it's not possible to consume fewer characters and still match successfully
```

Jedoch, sobald der Regex den String an einem Index erfolgreich übereinstimmt, wird er nicht versuchen, nachfolgende Indizes zu prüfen, obwohl dies möglicherweise zu weniger konsumierten Zeichen führt.

```js
/a*?$/.exec("aaa"); // ['aaa']; the match already succeeds at the first character, so the regex never attempts to start matching at the second character
```

Gierige Quantoren können weniger Wiederholungen versuchen, wenn es sonst unmöglich ist, den Rest des Musters abzugleichen.

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

In diesem Beispiel stimmt `[ab]+` zuerst gierig mit `"abb"` überein, aber `[abc]c` kann den Rest des Musters (`"c"`) nicht abgleichen, sodass der Quantor reduziert wird, um nur mit `"ab"` übereinzustimmen.

Gierige Quantoren vermeiden es, unendlich viele leere Zeichenfolgen zu übereinstimmen. Wenn die minimale Anzahl von Übereinstimmungen erreicht ist und keine weiteren Zeichen von dem Atom an dieser Position konsumiert werden, hört der Quantor auf, übereinzustimmen. Deshalb resultiert `/(a*)*/.exec("b")` nicht in einer Endlosschleife.

Gierige Quantoren versuchen, so oft wie möglich _immer wieder_ zu übereinstimmen; sie maximieren nicht die _Länge_ des Übereinstimmungstreffers. Zum Beispiel, `/(aa|aabaac|ba)*/.exec("aabaac")` stimmt mit `"aa"` und dann mit `"ba"` überein, anstatt mit `"aabaac"`.

Quantoren beziehen sich auf ein einzelnes Atom. Wenn Sie ein längeres Muster oder eine Disjunktion quantifizieren möchten, müssen Sie es [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group). Quantoren können nicht auf [Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet werden.

```js-nolint example-bad
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können [Lookahead Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) quantifiziert werden. Dies ist eine [veraltete Syntax für die Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## Beispiele

### HTML-Tags entfernen

Das folgende Beispiel entfernt HTML-Tags, die in spitzen Klammern eingeschlossen sind. Beachten Sie die Verwendung von `?`, um zu vermeiden, dass zu viele Zeichen auf einmal konsumiert werden.

```js
function stripTags(str) {
  return str.replace(/<.+?>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

Der gleiche Effekt kann mit einer gierigen Übereinstimmung erreicht werden, jedoch ohne dass das wiederholte Muster mit `>` übereinstimmen darf.

```js
function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> [!WARNING]
> Dies ist nur zur Demonstration — es behandelt nicht `>` in Attributwerten. Verwenden Sie stattdessen einen geeigneten HTML-Filter wie die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API).

### Auffinden von Markdown-Absätzen

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
> Dies ist nur zur Demonstration — es behandelt nicht Zeilenumbrüche in Codeblöcken oder anderen Markdown-Blockelementen wie Überschriften. Verwenden Sie stattdessen einen geeigneten Markdown-Parser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Quantifiers](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
