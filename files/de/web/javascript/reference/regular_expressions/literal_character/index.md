---
title: "Literalzeichen: a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Ein **Literalzeichen** gibt genau sich selbst an, um im Eingabetext übereinzustimmen.

## Syntax

```regex
c
```

### Parameter

- `c`
  - : Ein einzelnes Zeichen, das kein Syntaxzeichen ist, wie unten beschrieben.

## Beschreibung

In regulären Ausdrücken können die meisten Zeichen wörtlich erscheinen. Sie sind normalerweise die grundlegendsten Bausteine von Mustern. Beispielsweise hier ist ein Muster aus dem [Entfernen von HTML-Tags](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#removing_html_tags) Beispiel:

```js
const pattern = /<.+?>/g;
```

In diesem Beispiel werden `.`, `+` und `?` als _Syntaxzeichen_ bezeichnet. Sie haben spezielle Bedeutungen in regulären Ausdrücken. Der Rest der Zeichen im Muster (`<` und `>`) sind Literalzeichen. Sie stimmen im Eingabetext mit sich selbst überein: die linken und rechten spitzen Klammern.

Die folgenden Zeichen sind Syntaxzeichen in regulären Ausdrücken und können nicht als Literalzeichen erscheinen:

- [`^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`*`, `+`, `?`, `{`, `}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

Innerhalb von Zeichenklassen können mehr Zeichen wörtlich erscheinen. Für weitere Informationen siehe die Seite [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Zum Beispiel stimmen `\.` und `[.]` beide mit einem wörtlichen `.` überein. In [`v`-Modus Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) gibt es jedoch eine andere Menge von Zeichen, die als Syntaxzeichen reserviert sind. Um am umfassendsten zu sein, finden Sie unten eine Tabelle von ASCII-Zeichen und ob sie in verschiedenen Kontexten entkommen oder nicht entkommen erscheinen dürfen, wobei "✅" bedeutet, dass das Zeichen sich selbst darstellt, "❌" bedeutet, dass es einen Syntaxfehler auslöst, und "⚠️" bedeutet, dass das Zeichen gültig ist, aber etwas anderes als sich selbst bedeutet.

<table class="fullwidth-table">
  <thead>
    <tr>
      <th scope="col" rowspan="2">Zeichen</th>
      <th scope="col" colspan="2">Außerhalb von Zeichenklassen im <code>u</code>- oder <code>v</code>-Modus</th>
      <th scope="col" colspan="2">In <code>u</code>-Modus Zeichenklassen</th>
      <th scope="col" colspan="2">In <code>v</code>-Modus Zeichenklassen</th>
    </tr>
    <tr>
      <th scope="col">Nicht entkommen</th>
      <th scope="col">Entkommen</th>
      <th scope="col">Nicht entkommen</th>
      <th scope="col">Entkommen</th>
      <th scope="col">Nicht entkommen</th>
      <th scope="col">Entkommen</th>
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
> Die Zeichen, die sowohl entkommen als auch nicht entkommen in `v`-Modus Zeichenklassen auftreten können, sind genau diejenigen, die als "Doppelpunktriche" verboten sind. Siehe [`v`-Modus Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) für weitere Informationen.

Wann immer Sie ein Syntaxzeichen wortwörtlich übereinstimmen wollen, müssen Sie es mit einem Rückwärtsschrägstrich (`\`) [escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape). Zum Beispiel, um ein wörtliches `*` in einem Muster zu übereinstimmen, müssen Sie `\*` im Muster schreiben. Die Verwendung von Syntaxzeichen als Literalzeichen führt entweder zu unerwarteten Ergebnissen oder verursacht Syntaxfehler — zum Beispiel ist `/*/` kein gültiger regulärer Ausdruck, da der Quantifizierer nicht von einem Muster vorangestellt wird. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können `]`, `{` und `}` wörtlich erscheinen, wenn es nicht möglich ist, sie als das Ende einer Zeichenklasse oder Quantifizierergrenzen zu interpretieren. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

Reguläre Ausdruck-Literale können nicht mit bestimmten nicht-Syntax Literalzeichen spezifiziert werden. `/` kann nicht als Literalzeichen in einem regulären Ausdruck-Literal erscheinen, da `/` als Trennzeichen des Literals selbst verwendet wird. Sie müssen es als `\/` escapen, wenn Sie ein wörtliches `/` übereinstimmen möchten. Zeilenendzeichen können ebenfalls nicht als Literalzeichen in einem regulären Ausdruck-Literal erscheinen, da ein Literal sich nicht über mehrere Zeilen erstrecken kann. Sie müssen stattdessen eine [Zeichenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) wie `\n` verwenden. Es gibt keine solchen Beschränkungen bei der Verwendung des {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktors, obwohl Zeichenfolgenliterale ihre eigenen Escape-Regeln haben (zum Beispiel bedeutet `"\\"` tatsächlich ein einzelnes Rückwärtsschrägstrichzeichen, sodass `new RegExp("\\*")` und `/\*/` gleichwertig sind).

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) wird das Muster als eine Folge von [UTF-16 Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) interpretiert. Dies bedeutet, dass Surrogatpaare tatsächlich zwei Literalzeichen darstellen. Dies führt zu unerwarteten Verhaltensweisen, wenn es mit anderen Funktionen kombiniert wird:

```js
/^[😄]$/.test("😄"); // false, because the pattern is interpreted as /^[\ud83d\udc04]$/
/^😄+$/.test("😄😄"); // false, because the pattern is interpreted as /^\ud83d\udc04+$/
```

Im Unicode-bewussten Modus wird das Muster als eine Folge von Unicode-Codepunkten interpretiert, und Surrogatpaare werden nicht aufgeteilt. Daher sollten Sie immer den `u`-Flag verwenden.

## Beispiele

### Verwendung von Literalzeichen

Das folgende Beispiel ist aus [Zeichenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#using_character_escapes) kopiert. Die Zeichen `a` und `b` sind Literalzeichen im Muster, und `\n` ist ein entkommenes Zeichen, da es nicht wörtlich in einem regulären Ausdruck-Literal erscheinen kann.

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
- [Zeichenflucht: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
