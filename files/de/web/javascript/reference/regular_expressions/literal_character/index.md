---
title: "Literalzeichen: a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Ein **Literalzeichen** spezifiziert genau sich selbst, um im Eingabetext gefunden zu werden.

## Syntax

```regex
c
```

### Parameter

- `c`
  - : Ein einzelnes Zeichen, das keines der unten beschriebenen Syntaxzeichen ist.

## Beschreibung

In regulären Ausdrücken können die meisten Zeichen buchstäblich auftreten. Sie sind in der Regel die grundlegendsten Bausteine von Mustern. Zum Beispiel, hier ist ein Muster aus dem Beispiel [Entfernen von HTML-Tags](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#removing_html_tags):

```js
const pattern = /<.+?>/g;
```

In diesem Beispiel werden `.`, `+`, und `?` als _Syntaxzeichen_ bezeichnet. Sie haben spezielle Bedeutungen in regulären Ausdrücken. Die restlichen Zeichen im Muster (`<` und `>`) sind Literalzeichen. Sie stimmen im Eingabetext mit sich selbst überein: die linken und rechten spitzen Klammern.

Die folgenden Zeichen sind Syntaxzeichen in regulären Ausdrücken und können nicht als Literalzeichen auftreten:

- [`^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`*`, `+`, `?`, `{`, `}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

Innerhalb von Zeichengruppen können mehr Zeichen buchstäblich auftreten. Weitere Informationen finden Sie auf der Seite [Character class](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Zum Beispiel stimmen `\.` und `[.]` beide mit einem buchstäblichen `.` überein. In [`v`-Modus-Zeichengruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) jedoch gibt es eine andere Gruppe von Zeichen, die als Syntaxzeichen reserviert sind. Um umfassend zu sein, ist unten eine Tabelle von ASCII-Zeichen und ob sie in verschiedenen Kontexten maskiert oder unmaskiert auftreten können, wobei "✅" bedeutet, dass das Zeichen sich selbst darstellt, "❌" bedeutet, dass es einen Syntaxfehler verursacht, und "⚠️" bedeutet, dass das Zeichen gültig ist, aber etwas anderes als sich selbst bedeutet.

<table class="fullwidth-table">
  <thead>
    <tr>
      <th scope="col" rowspan="2">Zeichen</th>
      <th scope="col" colspan="2">Außerhalb von Zeichengruppen im <code>u</code>- oder <code>v</code>-Modus</th>
      <th scope="col" colspan="2">In <code>u</code>-Modus-Zeichengruppen</th>
      <th scope="col" colspan="2">In <code>v</code>-Modus-Zeichengruppen</th>
    </tr>
    <tr>
      <th scope="col">Unmaskiert</th>
      <th scope="col">Maskiert</th>
      <th scope="col">Unmaskiert</th>
      <th scope="col">Maskiert</th>
      <th scope="col">Unmaskiert</th>
      <th scope="col">Maskiert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>123456789&nbsp;"'<br>ACEFGHIJKLMN<br>OPQRTUVXYZ_<br>aceghijklmop<br>quxyz</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>!#%&,:;<=>@`~</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>]</code></td>
      <td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>()[{}</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>*+?</code></td>
      <td>❌</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>0DSWbdfnrstvw</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td><td>✅</td><td>⚠️</td>
    </tr>
    <tr>
      <td><code>B</code></td>
      <td>✅</td><td>⚠️</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>$.</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>⚠️</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>✅</td><td>❌</td><td>✅⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td><td>✅⚠️</td><td>✅</td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td><td>❌⚠️</td><td>✅</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Die Zeichen, die sowohl maskiert als auch unmaskiert in `v`-Modus-Zeichengruppen auftreten können, sind genau diejenigen, die als "doppelte Punktuatoren" verboten sind. Siehe [`v`-Modus-Zeichengruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) für weitere Informationen.

Wann immer Sie ein Syntaxzeichen buchstäblich darstellen möchten, müssen Sie es mit einem Backslash (`\`) [escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape). Zum Beispiel, um ein buchstäbliches `*` in einem Muster zu matchen, müssen Sie `\*` im Muster schreiben. Die Verwendung von Syntaxzeichen als Literalzeichen führt entweder zu unerwarteten Ergebnissen oder zu Syntaxfehlern — zum Beispiel ist `/*/` kein gültiger regulärer Ausdruck, weil der Quantifier nicht von einem Muster vorangegangen wird. Im [Unicode-unempfindlichen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können `]`, `{` und `}` buchstäblich auftreten, wenn es nicht möglich ist, sie als das Ende einer Zeichenklasse oder Quantifier-Delimiter zu analysieren. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und Sie sollten sich nicht darauf verlassen.

Literale reguläre Ausdrücke können nicht mit bestimmten nicht-Syntax-Literalzeichen spezifiziert werden. `/` kann nicht als Literalzeichen in einem regulären Ausdrucksliteral auftreten, da `/` als Trennzeichen des Literals selbst verwendet wird. Sie müssen es als `\/` escapen, wenn Sie ein buchstäbliches `/` matchen möchten. Zeilenabschlüsse können auch nicht als Literalzeichen in einem regulären Ausdrucksliteral auftreten, da ein Literal nicht über mehrere Zeilen spannt. Sie müssen einen [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) wie `\n` verwenden. Diese Einschränkungen gibt es nicht, wenn Sie den {{jsxref("RegExp/RegExp", "RegExp()")}}-Konstruktor verwenden, obwohl Zeichenkettenliterale ihre eigenen Escaping-Regeln haben (zum Beispiel steht `"\\"` tatsächlich für ein einzelnes Backslash-Zeichen, sodass `new RegExp("\\*")` und `/\*/` äquivalent sind).

Im [Unicode-unempfindlichen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) wird das Muster als eine Sequenz von [UTF-16-Codeeinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) interpretiert. Das bedeutet, dass Surrogatpaare tatsächlich zwei Literalzeichen darstellen. Dies führt zu unerwarteten Verhaltensweisen, wenn es mit anderen Funktionen kombiniert wird:

```js
/^[😄]$/.test("😄"); // false, because the pattern is interpreted as /^[\ud83d\udc04]$/
/^😄+$/.test("😄😄"); // false, because the pattern is interpreted as /^\ud83d\udc04+$/
```

Im Unicode-empfindlichen Modus wird das Muster als eine Sequenz von Unicode-Codepunkten interpretiert, und Surrogatpaare werden nicht aufgeteilt. Deshalb sollten Sie immer die Verwendung des `u`-Flags bevorzugen.

## Beispiele

### Verwendung von Literalzeichen

Das folgende Beispiel ist aus dem Artikel [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#using_character_escapes) kopiert. Die Zeichen `a` und `b` sind Literalzeichen im Muster, und `\n` ist ein maskiertes Zeichen, weil es nicht buchstäblich in einem regulären Ausdrucksliteral vorkommen kann.

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
