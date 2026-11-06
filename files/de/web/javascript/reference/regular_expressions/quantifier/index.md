---
title: "Quantifizierer: *, +, ?, {n}, {n,}, {n,m}"
slug: Web/JavaScript/Reference/Regular_expressions/Quantifier
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Ein **Quantifizierer** wiederholt ein [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) eine bestimmte Anzahl von Malen. Der Quantifizierer steht hinter dem Atom, auf das er sich bezieht.

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
> Das Anhängen von `?` an `{count}` ist syntaktisch gültig, aber praktisch nutzlos. Da `{count}` immer genau `count`-mal übereinstimmt, verhält sich `atom{count}?` genauso wie `atom{count}`.

### Parameter

- `atom`
  - : Ein einzelnes [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms).
- `count`
  - : Eine nicht negative Ganzzahl. Gibt an, wie oft das Atom wiederholt werden soll.
- `min`
  - : Eine nicht negative Ganzzahl. Gibt an, wie oft das Atom mindestens wiederholt werden kann.
- `max` {{optional_inline}}
  - : Eine nicht negative Ganzzahl. Gibt an, wie oft das Atom höchstens wiederholt werden kann. Wenn der Wert weggelassen wird, kann das Atom beliebig oft wiederholt werden.

## Beschreibung

Ein Quantifizierer steht hinter einem [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms), um es eine bestimmte Anzahl von Malen zu wiederholen. Er kann nicht allein stehen. Mit jedem Quantifizierer lässt sich eine Mindest- und Höchstzahl an Wiederholungen eines Musters festlegen.

| Quantifizierer | Minimum | Maximum  |
| -------------- | ------- | -------- |
| `?`            | 0       | 1        |
| `*`            | 0       | Infinity |
| `+`            | 1       | Infinity |
| `{count}`      | `count` | `count`  |
| `{min,}`       | `min`   | Infinity |
| `{min,max}`    | `min`   | `max`    |

Bei den Syntaxformen `{count}`, `{min,}` und `{min,max}` dürfen keine Leerzeichen um die Zahlen stehen – andernfalls entsteht ein [literales](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) Muster.

```js example-bad
const re = /a{1, 3}/;
re.test("aa"); // false
re.test("a{1, 3}"); // true
```

Dieses Verhalten ist im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) behoben: Dort können geschweifte Klammern ohne [Maskierung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) nicht als literale Zeichen vorkommen. Die Möglichkeit, `{` und `}` ohne Maskierung als literale Zeichen zu verwenden, ist eine [veraltete Syntax zur Wahrung der Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js-nolint example-bad
/a{1, 3}/u; // SyntaxError: Invalid regular expression: Incomplete quantifier
```

Wenn das Minimum größer als das Maximum ist, liegt ein Syntaxfehler vor.

```js-nolint example-bad
/a{3,2}/; // SyntaxError: Invalid regular expression: numbers out of order in {} quantifier
```

Quantifizierer können dazu führen, dass [Capturing Groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) mehrfach übereinstimmen. Weitere Informationen zu diesem Verhalten finden Sie auf der Seite zu Capturing Groups.

Die einzelnen wiederholten Treffer müssen nicht dieselbe Zeichenfolge sein.

```js
/[ab]*/.exec("aba"); // ['aba']
```

Quantifizierer sind standardmäßig _gierig_. Das bedeutet, dass sie versuchen, so oft wie möglich eine Übereinstimmung zu finden, bis das Maximum erreicht ist oder keine weitere Übereinstimmung mehr möglich ist. Sie können einen Quantifizierer _nicht gierig_ machen, indem Sie ein `?` anhängen. In diesem Fall versucht der Quantifizierer, so wenige Übereinstimmungen wie möglich zu finden. Er lässt nur dann weitere Wiederholungen zu, wenn sich der Rest des Musters mit der bisherigen Anzahl nicht abgleichen lässt.

```js
/a*/.exec("aaa"); // ['aaa']; the entire input is consumed
/a*?/.exec("aaa"); // ['']; it's possible to consume no characters and still match successfully
/^a*?$/.exec("aaa"); // ['aaa']; it's not possible to consume fewer characters and still match successfully
```

Sobald der reguläre Ausdruck an einer bestimmten Position erfolgreich mit der Zeichenfolge übereinstimmt, versucht er es jedoch nicht mehr an späteren Positionen – auch wenn dadurch weniger Zeichen erfasst werden.

```js
/a*?$/.exec("aaa"); // ['aaa']; the match already succeeds at the first character, so the regex never attempts to start matching at the second character
```

Gierige Quantifizierer können weniger Wiederholungen zulassen, wenn der Rest des Musters andernfalls nicht übereinstimmen würde.

```js
/[ab]+[abc]c/.exec("abbc"); // ['abbc']
```

In diesem Beispiel stimmt `[ab]+` zunächst gierig mit `"abb"` überein. `[abc]c` kann dann aber nicht mit dem Rest der Zeichenfolge (`"c"`) übereinstimmen. Daher wird der Quantifizierer so weit zurückgenommen, dass er nur mit `"ab"` übereinstimmt.

Gierige Quantifizierer vermeiden es, unendlich viele leere Zeichenfolgen abzugleichen. Wenn die Mindestanzahl an Übereinstimmungen erreicht ist und das Atom an dieser Position keine weiteren Zeichen erfasst, endet die Übereinstimmung des Quantifizierers. Deshalb führt `/(a*)*/.exec("b")` nicht zu einer Endlosschleife.

Gierige Quantifizierer versuchen, so oft wie möglich eine Übereinstimmung zu finden; sie maximieren nicht die _Länge_ des Treffers. Beispielsweise stimmt `/(aa|aabaac|ba)*/.exec("aabaac")` zuerst mit `"aa"` und dann mit `"ba"` überein, statt mit `"aabaac"`.

Quantifizierer beziehen sich auf ein einzelnes Atom. Wenn Sie ein längeres Muster oder eine Disjunktion quantifizieren möchten, müssen Sie es [gruppieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group). Quantifizierer können nicht auf [Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions#assertions) angewendet werden.

```js-nolint example-bad
/^*/; // SyntaxError: Invalid regular expression: nothing to repeat
```

Im [nicht Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können [Lookahead Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) quantifiziert werden. Dies ist eine [veraltete Syntax zur Wahrung der Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 times
```

## Beispiele

### HTML-Tags entfernen

Das folgende Beispiel entfernt HTML-Tags, die in spitze Klammern eingeschlossen sind. Beachten Sie die Verwendung von `?`, um zu vermeiden, dass zu viele Zeichen auf einmal erfasst werden.

```js
function stripTags(str) {
  return str.replace(/<.+?>/gs, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

Derselbe Effekt lässt sich mit einer gierigen Übereinstimmung erzielen, wenn das wiederholte Muster nicht mit `>` übereinstimmen darf.

```js
function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

stripTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

> [!WARNING]
> Dies dient nur der Veranschaulichung – `>` in Attributwerten wird nicht berücksichtigt. Verwenden Sie stattdessen einen geeigneten HTML-Sanitizer wie die [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API).

### Markdown-Absätze finden

In Markdown werden Absätze durch eine oder mehrere Leerzeilen getrennt. Das folgende Beispiel zählt alle Absätze in einer Zeichenfolge, indem es zwei oder mehr Zeilenumbrüche abgleicht.

```js
function countParagraphs(str) {
  return (str.match(/(?:\r?\n){2,}/g)?.length ?? 0) + 1;
}

countParagraphs(`
Paragraph 1

Paragraph 2
Containing some line breaks, but still the same paragraph

Another paragraph
`); // 3
```

> [!WARNING]
> Dies dient nur der Veranschaulichung – Zeilenumbrüche in Codeblöcken oder anderen Markdown-Blockelementen wie Überschriften werden nicht berücksichtigt. Verwenden Sie stattdessen einen geeigneten Markdown-Parser.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Quantifizierern](/de/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
