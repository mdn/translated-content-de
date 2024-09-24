---
title: "Literales Zeichen: a, b"
slug: Web/JavaScript/Reference/Regular_expressions/Literal_character
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Ein **literales Zeichen** gibt exakt sich selbst an, das im Eingabetext abgeglichen werden soll.

## Syntax

```regex
c
```

### Parameter

- `c`
  - : Ein einzelnes Zeichen, das nicht eines der unten beschriebenen Syntaxzeichen ist.

## Beschreibung

In regulären Ausdrücken können die meisten Zeichen wörtlich erscheinen. Sie sind in der Regel die grundlegendsten Bausteine von Mustern. Hier ist zum Beispiel ein Muster aus dem Beispiel [HTML-Tags entfernen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier#removing_html_tags):

```js
const pattern = /<.+?>/g;
```

In diesem Beispiel werden `.`, `+` und `?` als _Syntaxzeichen_ bezeichnet. Sie haben spezielle Bedeutungen in regulären Ausdrücken. Die restlichen Zeichen im Muster (`<` und `>`) sind literale Zeichen. Sie entsprechen sich selbst im Eingabetext: den linken und rechten spitzen Klammern.

Die folgenden Zeichen sind Syntaxzeichen in regulären Ausdrücken und können nicht als literale Zeichen erscheinen:

- [`^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [`\`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [`*`, `+`, `?`, `{`, `}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [`(`, `)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [`[`, `]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [`|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)

Innerhalb von Zeichenklassen können mehr Zeichen wörtlich erscheinen. Für mehr Informationen siehe die Seite [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Zum Beispiel entsprechen sowohl `\.` als auch `[.]` einem wörtlichen `.`. In [v-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) jedoch gibt es eine andere Gruppe von Zeichen, die als Syntaxzeichen reserviert sind. Um umfassend zu sein, folgt unten eine Tabelle von ASCII-Zeichen und ob sie in verschiedenen Kontexten maskiert oder unmaskiert erscheinen dürfen, wobei "✅" bedeutet, dass das Zeichen sich selbst darstellt, "❌" bedeutet, dass es zu einem Syntaxfehler führt, und "⚠️" bedeutet, dass das Zeichen gültig ist, aber etwas anderes als sich selbst bedeutet.

> [!NOTE]
> Die Zeichen, die sowohl maskiert als auch unmaskiert in `v`-Modus-Zeichenklassen erscheinen können, sind genau diejenigen, die als "doppelte Interpunktion" verboten sind. Weitere Informationen finden Sie unter [`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class).

Wann immer Sie ein Syntaxzeichen wörtlich abgleichen möchten, müssen Sie es mit einem Rückwärtsschrägstrich (`\`) [maskieren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape). Um beispielsweise ein wörtliches `*` in einem Muster abzugleichen, müssen Sie `\*` im Muster schreiben. Die Verwendung von Syntaxzeichen als literale Zeichen führt entweder zu unerwarteten Ergebnissen oder verursacht Syntaxfehler — zum Beispiel, `/*/` ist kein gültiger regulärer Ausdruck, da der Quantor nicht von einem Muster vorhergegangen wird. Im [Unicode-unverständlichen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) dürfen `]`, `{` und `}` wörtlich erscheinen, wenn es nicht möglich ist, sie als Ende von Zeichenklassen- oder Quantifikatorbegrenzern zu analysieren. Dies ist eine [veraltete Syntax für die Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und Sie sollten sich nicht darauf verlassen.

In regulären Ausdrucksliteralen können bestimmte Nicht-Syntaxliterale nicht angegeben werden. `/` kann nicht als wörtliches Zeichen in einem regulären Ausdrucksliteral erscheinen, da `/` als Trennzeichen des Literals selbst verwendet wird. Sie müssen es als `\/` maskieren, wenn Sie ein wörtliches `/` abgleichen möchten. Zeilenendzeichen können ebenfalls nicht als literale Zeichen in einem regulären Ausdrucksliteral erscheinen, da ein Literal nicht über mehrere Zeilen hinweg erstreckt werden kann. Sie müssen eine [Zeichenmaskierung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) wie `\n` verwenden. Es gibt keine derartigen Einschränkungen bei der Verwendung des {{jsxref("RegExp/RegExp", "RegExp()")}} Konstruktors, obwohl Zeichenfolgenliterale ihre eigenen Maskierungsregeln haben (zum Beispiel steht `"\\"` tatsächlich für einen einzelnen Rückwärtsschrägstrich, sodass `new RegExp("\\*")` und `/\*/` gleichwertig sind).

Im [Unicode-unverständlichen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) wird das Muster als Sequenz von [UTF-16-Codeeinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) interpretiert. Das bedeutet, dass Ersatzpaarerweise tatsächlich zwei wörtliche Zeichen darstellen. Dies führt zu unerwartetem Verhalten, wenn es mit anderen Funktionen kombiniert wird:

```js
/^[😄]$/.test("😄"); // false, weil das Muster als /^[\ud83d\udc04]$/ interpretiert wird
/^😄+$/.test("😄😄"); // false, weil das Muster als /^\ud83d\udc04+$/ interpretiert wird
```

Im Unicode-bewussten Modus wird das Muster als Sequenz von Unicode-Codepunkten interpretiert, und Ersatzpaaren werden nicht geteilt. Daher sollten Sie immer den `u`-Flag bevorzugen.

## Beispiele

### Verwendung von literalen Zeichen

Das folgende Beispiel ist kopiert von [Zeichenmaskierung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape#using_character_escapes). Die Zeichen `a` und `b` sind literale Zeichen im Muster, und `\n` ist ein maskiertes Zeichen, weil es nicht wörtlich in einem regulären Ausdrucksliteral erscheinen kann.

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

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Anleitung
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenmaskierung: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
