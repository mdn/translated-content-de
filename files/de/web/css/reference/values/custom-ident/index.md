---
title: <custom-ident>
slug: Web/CSS/Reference/Values/custom-ident
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<custom-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) bezeichnet eine willkürliche, benutzerdefinierte Zeichenfolge, die als {{Glossary("identifier", "Identifier")}} verwendet wird. Er ist Groß- und Kleinschreibung beachtend, und bestimmte Werte sind in verschiedenen Kontexten verboten, um Mehrdeutigkeiten zu vermeiden.

## Syntax

Die Syntax von `<custom-ident>` ähnelt den CSS-Identifikatoren (wie Eigenschaftsnamen), mit der Ausnahme, dass sie [Groß- und Kleinschreibung beachtend](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie besteht aus einem oder mehreren Zeichen, wobei Zeichen wie folgt sein können:

- jedes alphabetische Zeichen (`A` bis `Z` oder `a` bis `z`),
- jede Dezimalziffer (`0` bis `9`),
- ein Bindestrich (`-`),
- ein Unterstrich (`_`),
- ein [entkommenes Zeichen](#zeichen_entkommen) (gekennzeichnet durch einen umgekehrten Schrägstrich, `\`),
- ein [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen (im Format eines umgekehrten Schrägstrichs, `\`, gefolgt von ein bis sechs Hexadezimalziffern, die seinen Unicode-Codierungspunkt repräsentieren)

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alle unterschiedliche Identifier sind, da sie [Groß- und Kleinschreibung beachtend](https://en.wikipedia.org/wiki/Case_sensitivity) sind.

### Zeichen entkommen

Jeder Unicode-Codierungspunkt kann als Teil eines `<custom-ident>` oder eines in Anführungszeichen gesetzten {{cssxref("string")}} durch Escape eingeschlossen werden.

In CSS gibt es mehrere Möglichkeiten, ein Zeichen zu entkommen. Escape-Sequenzen beginnen mit einem umgekehrten Schrägstrich (`\`) und gehen weiter mit:

- Einer bis sechs Hex-(`ABCDEF0123456789`) Ziffern. Die Hex-Ziffern können optional durch Leerzeichen gefolgt werden. Die Hex-Escape-Sequenz wird durch den Unicode-Codierungspunkt ersetzt, dessen Wert durch diese Ziffern angegeben wird. Das Leerzeichen ermöglicht, dass die Sequenzen von tatsächlichen Hex-Ziffern (anstatt von ersetzten) gefolgt werden können.
- Jedem Unicode-Codierungspunkt, der keine Hex-Ziffer oder kein Zeilenumbruch-Zeichen ist.

Beispiele:

- "&B" kann als `\26 B` oder `\000026B` geschrieben werden.
- "hi.there" kann als `hi\.there` oder `hi\002Ethere` geschrieben werden.
- "toto?" kann als `toto\?`, `toto\3F` oder `toto\00003F` geschrieben werden.

Um tatsächliche Leerzeichen nach einer Escape-Sequenz einzuschließen, schließen Sie zwei Leerzeichen in die Escape-Sequenz ein.

### Verbotene Werte

Ein `<custom-ident>` darf nicht in Einzel- oder Doppel-Zitate gesetzt werden, da dies identisch mit einem {{CSSxRef("&lt;string&gt;")}} wäre. Außerdem darf das erste Zeichen keine Dezimalziffer oder ein Bindestrich (`-`) gefolgt von einer Dezimalziffer sein.

Um Mehrdeutigkeiten zu vermeiden, verbietet jede Eigenschaft, die `<custom-ident>` verwendet, die Verwendung bestimmter Werte:

- {{CSSxRef("animation-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie die Werte:
    - `none`
    - `inline`
    - `outside`

    Außerdem werden eine Vielzahl vordefinierter Werte von den verschiedenen Browsern implementiert:
    - `disc`
    - `circle`
    - `square`
    - `decimal`
    - `cjk-decimal`
    - `decimal-leading-zero`
    - `lower-roman`
    - `upper-roman`
    - `lower-greek`
    - `lower-alpha`
    - `lower-latin`
    - `upper-alpha`
    - `upper-latin`
    - `arabic-indic`
    - `armenian`
    - `bengali`
    - `cambodian`
    - `cjk-earthly-branch`
    - `cjk-heavenly-stem`
    - `cjk-ideographic`
    - `devanagari`
    - `ethiopic-numeric`
    - `georgian`
    - `gujarati`
    - `gurmukhi`
    - `hebrew`
    - `hiragana`
    - `hiragana-iroha`
    - `japanese-formal`
    - `japanese-informal`
    - `kannada`
    - `katakana`
    - `katakana-iroha`
    - `khmer`
    - `korean-hangul-formal`
    - `korean-hanja-formal`
    - `korean-hanja-informal`
    - `lao`
    - `lower-armenian`
    - `malayalam`
    - `mongolian`
    - `myanmar`
    - `oriya`
    - `persian`
    - `simp-chinese-formal`
    - `simp-chinese-informal`
    - `tamil`
    - `telugu`
    - `thai`
    - `tibetan`
    - `trad-chinese-formal`
    - `trad-chinese-informal`
    - `upper-armenian`
    - `disclosure-open`
    - `disclosure-close`

- {{CSSxRef("grid-row-start")}}, {{CSSxRef("grid-row-end")}}, {{CSSxRef("grid-column-start")}}, {{CSSxRef("grid-column-end")}}, {{CSSxRef("grid-template-rows")}}, {{CSSxRef("grid-template-columns")}}
  - : Verbietet die Werte `span` und `auto`.
- {{CSSxRef("view-transition-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("will-change")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie die Werte `will-change`, `auto`, `scroll-position` und `contents`.

## Beispiele

### Gültige Identifier

```plain example-good
nono79            A mix of alphanumeric characters and numbers
ground-level      A mix of alphanumeric characters and a dash
-test             A dash followed by alphanumeric characters
_internal         An underscore followed by alphanumeric characters
\22 toto          A Unicode character followed by a sequence of alphanumeric characters
scooby\.doo       A correctly escaped period
```

### Ungültige Identifier

```plain example-bad
34rem             It must not start with a decimal digit.
-12rad            It must not start with a dash followed by a decimal digit.
scooby.doo        Only alphanumeric characters, _, and - needn't be escaped.
'scoobyDoo'       This would be a <string>.
"scoobyDoo"       This would be a <string>.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

_Da dieser Typ kein echter Typ, sondern ein bequemlichkeitstyp zur Vereinfachung der Beschreibung von erlaubten Werten ist, gibt es keine Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/Reference/Values/ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident)
