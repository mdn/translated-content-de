---
title: "Wörtliches Zeichen: a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Ein **wörtliches Zeichen** spezifiziert exakt sich selbst, das im Eingabetext abgeglichen werden soll.

## Syntax

```regex
c
```

### Parameter

- `c`
  - : Ein einzelnes Zeichen, das keines der unten beschriebenen Syntaxzeichen ist.

## Beschreibung

In regulären Ausdrücken können die meisten Zeichen wörtlich erscheinen. Sie bilden in der Regel die grundlegendsten Bausteine der Muster. Zum Beispiel wird hier ein Muster aus dem Beispiel [Entfernen von HTML-Tags](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#removing_html_tags) gezeigt:

```js
const pattern = /<.+?>/g;
```

In diesem Beispiel werden `.`, `+` und `?` als _Syntaxzeichen_ bezeichnet. Sie haben spezielle Bedeutungen in regulären Ausdrücken. Die restlichen Zeichen im Muster (`<` und `>`) sind wörtliche Zeichen. Sie stimmen mit sich selbst im Eingabetext überein: die linke und rechte spitze Klammer.

Die folgenden Zeichen sind Syntaxzeichen in regulären Ausdrücken und können nicht als wörtliche Zeichen erscheinen:

- [`^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`*`, `+`, `?`, `{`, `}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

Innerhalb von Zeichenklassen können weitere Zeichen wörtlich erscheinen. Für weitere Informationen siehe die Seite [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Zum Beispiel stimmen `\.` und `[.]` beide mit einem wörtlichen `.` überein. In [v-Modus Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) jedoch, gibt es eine andere Menge von Zeichen, die als Syntaxzeichen reserviert sind. Um möglichst umfassend zu sein, unten ist eine Tabelle der ASCII-Zeichen und ob sie in verschiedenen Kontexten mit oder ohne Escape-Zeichen erscheinen können, wobei "✅" bedeutet, dass das Zeichen sich selbst repräsentiert, "❌" bedeutet, dass es einen Syntaxfehler verursacht, und "⚠️" bedeutet, dass das Zeichen gültig ist, aber etwas anderes als sich selbst bedeutet.

<table class="fullwidth-table">
  <thead>
    <tr>
      <th scope="col" rowspan="2">Zeichen</th>
      <th scope="col" colspan="2">Außerhalb von Zeichenklassen im <code>u</code>- oder <code>v</code>-Modus</th>
      <th scope="col" colspan="2">In <code>u</code>-Modus Zeichenklassen</th>
      <th scope="col" colspan="2">In <code>v</code>-Modus Zeichenklassen</th>
    </tr>
    <tr>
      <th scope="col">Unescaped</th>
      <th scope="col">Escaped</th>
      <th scope="col">Unescaped</th>
      <th scope="col">Escaped</th>
      <th scope="col">Unescaped</th>
      <th scope="col">Escaped</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>123456789&nbsp;"'<br>ACEFGHIJKLMN<br>OPQRTUVXYZ_<br>aceghijklmop<br>quxyz</code></td>
      <td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td>
    </tr>
    <tr>
      <td><code>!#%&,:;&lt;=&gt;@`~</code></td>
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
> Die Zeichen, die sowohl escaped als auch unescaped in `v`-Modus Zeichenklassen erscheinen können, sind genau diejenigen, die als "Doppelpunktionen" verboten sind. Sehen Sie sich [v-Modus Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) für weitere Informationen an.

Wann immer Sie ein Syntaxzeichen wörtlich abgleichen möchten, müssen Sie es mit einem Backslash (`\`) [escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape). Um zum Beispiel ein wörtliches `*` in einem Muster zu finden, müssen Sie im Muster `\*` schreiben. Die Verwendung von Syntaxzeichen als wörtliche Zeichen führt entweder zu unerwarteten Ergebnissen oder verursacht Syntaxfehler. Zum Beispiel ist `/*/` kein gültiger regulärer Ausdruck, weil der Quantor nicht von einem Muster gefolgt wird. Im [Unicode-unabhängigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können `]`, `{` und `}` wörtlich erscheinen, wenn es nicht möglich ist, sie als das Ende einer Zeichenklasse oder als Quantor-Begrenzer zu interpretieren. Dies ist eine [abgekündigte Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht verwendet werden.

Reguläre Ausdrucksliterale können nicht mit bestimmten nicht-Syntax wörtlichen Zeichen angegeben werden. `/` kann nicht als wörtliches Zeichen in einem regulären Ausdrucksliteral erscheinen, weil `/` als Begrenzer des Literals selbst verwendet wird. Sie müssen es als `\/` escapen, wenn Sie ein wörtliches `/` abgleichen möchten. Zeilenabschlüsse können auch nicht als wörtliche Zeichen in einem regulären Ausdrucksliteral vorkommen, weil ein Literal nicht mehrere Zeilen umfassen kann. Sie müssen eine [Zeichen escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) wie `\n` verwenden. Es gibt keine solchen Einschränkungen bei der Verwendung des {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktors, obwohl Zeichenkettenliterale ihre eigenen Escape-Regeln haben (zum Beispiel bedeutet `"\\"` tatsächlich ein einzelnes Backslash-Zeichen, so dass `new RegExp("\\*")` und `/\*/` äquivalent sind).

Im [Unicode-unabhängigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) wird das Muster als eine Sequenz von [UTF-16 Codeeinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) interpretiert. Das bedeutet, dass Surrogatpaare tatsächlich zwei wörtliche Zeichen repräsentieren. Dies kann zu unerwarteten Verhaltensweisen führen, wenn es mit anderen Merkmalen kombiniert wird:

```js
/^[😄]$/.test("😄"); // false, because the pattern is interpreted as /^[\ud83d\udc04]$/
/^😄+$/.test("😄😄"); // false, because the pattern is interpreted as /^\ud83d\udc04+$/
```

Im Unicode-bewussten Modus wird das Muster als eine Sequenz von Unicode-Codepunkten interpretiert, und Surrogatpaare werden nicht getrennt. Deshalb sollten Sie immer bevorzugt das `u`-Flag verwenden.

## Beispiele

### Verwendung von wörtlichen Zeichen

Das folgende Beispiel ist aus [Zeichen escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#using_character_escapes) kopiert. Die Zeichen `a` und `b` sind wörtliche Zeichen im Muster, und `\n` ist ein escaped Zeichen, da es nicht wörtlich in einem regulären Ausdrucksliteral erscheinen kann.

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
- [Zeichen escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
