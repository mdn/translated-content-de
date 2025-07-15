---
title: <custom-ident>
slug: Web/CSS/custom-ident
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<custom-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bezeichnet eine beliebige, benutzerdefinierte Zeichenfolge, die als {{Glossary("identifier", "Bezeichner")}} verwendet wird. Er ist case-sensitiv, und bestimmte Werte sind in verschiedenen Kontexten verboten, um Mehrdeutigkeiten zu vermeiden.

## Syntax

Die Syntax von `<custom-ident>` ist ähnlich wie bei CSS-Bezeichnern (wie z.B. Eigenschaftsnamen), mit der Ausnahme, dass sie [case-sensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie besteht aus einem oder mehreren Zeichen, wobei die Zeichen aus Folgendem bestehen können:

- jedem alphabetischen Zeichen (`A` bis `Z` oder `a` bis `z`),
- jeder Dezimalziffer (`0` bis `9`),
- einem Bindestrich (`-`),
- einem Unterstrich (`_`),
- einem [maskierten Zeichen](#zeichen_maskieren) (vorangestellt mit einem Backslash, `\`),
- einem [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen (im Format eines Backslashes, `\`, gefolgt von ein bis sechs hexadezimalen Ziffern, die den Unicode-Codepunkt repräsentieren).

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` unterschiedliche Bezeichner sind, da sie [case-sensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) sind.

### Zeichen maskieren

Jeder Unicode-Codepunkt kann als Teil eines `<custom-ident>` oder eines in Anführungszeichen gesetzten {{cssxref("string")}} maskiert werden.

In CSS gibt es mehrere Möglichkeiten, ein Zeichen zu maskieren. Escape-Sequenzen beginnen mit einem Backslash (`\`) und setzen sich fort mit:

- Ein bis sechs hexadezimalen (`ABCDEF0123456789`) Ziffern. Die hexadezimalen Ziffern können optional gefolgt sein von einem Leerzeichen. Die hexadezimale Escape-Sequenz wird durch den Unicode-Codepunkt ersetzt, dessen Wert durch diese Ziffern angegeben ist. Das Leerzeichen ermöglicht es, dass die Sequenzen von tatsächlichen hexadezimalen Ziffern gefolgt werden (im Gegensatz zu ersetzten).
- Jedem Unicode-Codepunkt, der keine hexadezimale Ziffer oder kein Zeilenumbruchzeichen ist.

Beispiele:

- "&B" kann als `\26 B` oder `\000026B` geschrieben werden.
- "hi.there" kann als `hi\.there` oder `hi\002Ethere` geschrieben werden.
- "toto?" kann als `toto\?`, `toto\3F` oder `toto\00003F` geschrieben werden.

Um tatsächlich Leerzeichen nach einer Escape-Sequenz einzuschließen, müssen zwei Leerzeichen in der Escape-Sequenz enthalten sein.

### Verbotene Werte

Ein `<custom-ident>` darf nicht in einfachen oder doppelten Anführungszeichen gesetzt werden, da dies identisch zu einem {{CSSxRef("&lt;string&gt;")}} wäre. Außerdem darf das erste Zeichen keine Dezimalziffer und kein Bindestrich (`-`) gefolgt von einer Dezimalziffer sein.

Um Mehrdeutigkeiten zu vermeiden, verbietet jede Eigenschaft, die `<custom-ident>` verwendet, die Verwendung spezifischer Werte:

- {{CSSxRef("animation-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie die Werte:
    - `none`
    - `inline`
    - `outside`

    Ebenfalls sind einige vordefinierte Werte in verschiedenen Browsern implementiert:
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

### Gültige Bezeichner

```plain example-good
nono79            A mix of alphanumeric characters and numbers
ground-level      A mix of alphanumeric characters and a dash
-test             A dash followed by alphanumeric characters
_internal         An underscore followed by alphanumeric characters
\22 toto          A Unicode character followed by a sequence of alphanumeric characters
scooby\.doo       A correctly escaped period
```

### Ungültige Bezeichner

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

_Da dieser Typ kein realer Typ, sondern ein Komforttyp ist, der verwendet wird, um die Beschreibung der erlaubten Werte zu vereinfachen, gibt es keine Browser-Kompatibilitätsinformationen als solche._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
