---
title: <custom-ident>
slug: Web/CSS/custom-ident
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<custom-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bezeichnet eine beliebige benutzerdefinierte Zeichenfolge, die als {{Glossary("identifier", "Identifier")}} verwendet wird. Er ist case-sensitiv, und bestimmte Werte sind in verschiedenen Kontexten verboten, um Mehrdeutigkeiten zu vermeiden.

## Syntax

Die Syntax von `<custom-ident>` ähnelt den CSS-Identifikatoren (wie z. B. Eigenschaftsnamen), mit der Ausnahme, dass es [case-sensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Er besteht aus einem oder mehreren Zeichen, wobei Zeichen Folgendes sein können:

- ein beliebiges alphabetisches Zeichen (`A` bis `Z`, oder `a` bis `z`),
- eine beliebige Dezimalziffer (`0` bis `9`),
- ein Bindestrich (`-`),
- ein Unterstrich (`_`),
- ein [escaped character](#zeichen_escapen) (vorangestellt von einem Backslash, `\`),
- ein [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen (im Format eines Backslashes, `\`, gefolgt von ein bis sechs hexadezimalen Ziffern, die dessen Unicode-Codepunkt darstellen)

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` unterschiedliche Identifikatoren darstellen, da sie [case-sensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) sind.

### Zeichen escapen

Jeder Unicode-Codepunkt kann als Teil eines `<custom-ident>` oder eines in Anführungszeichen gesetzten {{cssxref("string")}} durch Escaping eingebunden werden.

In CSS gibt es mehrere Möglichkeiten, ein Zeichen zu escapen. Escape-Sequenzen beginnen mit einem Backslash (`\`) und setzen sich fort mit:

- Ein bis sechs hexadezimale (`ABCDEF0123456789`) Ziffern. Die hexadezimalen Ziffern können optional durch Leerzeichen gefolgt werden. Die hexadezimale Escape-Sequenz wird durch den Unicode-Codepunkt ersetzt, dessen Wert durch diese Ziffern angegeben ist. Das Leerzeichen ermöglicht es, dass die Sequenzen von tatsächlichen hexadezimalen Ziffern (im Gegensatz zu ersetzten) gefolgt werden können.
- Jedem Unicode-Codepunkt, der keine hexadezimale Ziffer oder kein Zeilenumbruchzeichen ist.

Beispiele:

- "&B" kann als `\26 B` oder `\000026B` geschrieben werden.
- "hi.there" kann als `hi\.there` oder `hi\002Ethere` geschrieben werden.
- "toto?" kann als `toto\?`, `toto\3F`, oder `toto\00003F` geschrieben werden.

Um tatsächlich Leerzeichen nach einer Escape-Sequenz einzufügen, fügen Sie zwei Leerzeichen in die Escape-Sequenz ein.

### Verbotene Werte

Ein `<custom-ident>` darf nicht in einfachen oder doppelten Anführungszeichen gesetzt werden, da dies identisch mit einem {{CSSxRef("&lt;string&gt;")}} wäre. Außerdem darf das erste Zeichen keine Dezimalziffer sein, noch ein Bindestrich (`-`), gefolgt von einer Dezimalziffer.

Um Mehrdeutigkeiten zu vermeiden, verbietet jede Eigenschaft, die `<custom-ident>` verwendet, die Nutzung bestimmter Werte:

- {{CSSxRef("animation-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}

  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie die Werte:

    - `none`
    - `inline`
    - `outside`

    Außerdem gibt es einige vordefinierte Werte, die von den verschiedenen Browsern implementiert werden:

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

- {{CSSxRef("grid-row-start")}}, {{CSSxRef("grid-row-end")}}, {{CSSxRef("grid-column-start")}}, {{CSSxRef("grid-column-end")}}
  - : Verbietet den Wert `span`.
- {{CSSxRef("view-transition-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("will-change")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie die Werte `will-change`, `auto`, `scroll-position` und `contents`.

## Beispiele

### Gültige Identifikatoren

```plain example-good
nono79            A mix of alphanumeric characters and numbers
ground-level      A mix of alphanumeric characters and a dash
-test             A dash followed by alphanumeric characters
_internal         An underscore followed by alphanumeric characters
\22 toto          A Unicode character followed by a sequence of alphanumeric characters
scooby\.doo       A correctly escaped period
```

### Ungültige Identifikatoren

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

_Da dieser Typ kein echter Typ ist, sondern ein Komforttyp, der die Beschreibung der erlaubten Werte vereinfacht, gibt es keine spezifischen Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
