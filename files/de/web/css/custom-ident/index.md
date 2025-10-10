---
title: <custom-ident>
slug: Web/CSS/custom-ident
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<custom-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) bezeichnet eine beliebige, benutzerdefinierte Zeichenfolge, die als {{Glossary("identifier", "Identifikator")}} verwendet wird. Er ist groß-/kleinschreibungssensitiv, und bestimmte Werte sind in verschiedenen Kontexten verboten, um Mehrdeutigkeiten zu vermeiden.

## Syntax

Die Syntax von `<custom-ident>` ähnelt CSS-Identifikatoren (wie Eigenschaftsnamen), mit der Ausnahme, dass er [groß-/kleinschreibungssensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Er besteht aus einem oder mehreren Zeichen, wobei Zeichen eines der folgenden sein können:

- ein beliebiges alphabetisches Zeichen (`A` bis `Z`, oder `a` bis `z`),
- eine Dezimalziffer (`0` bis `9`),
- ein Bindestrich (`-`),
- ein Unterstrich (`_`),
- ein [maskiertes Zeichen](#maskierung_von_zeichen) (eingeleitet durch einen Backslash, `\`),
- ein [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen (im Format eines Backslashes, `\`, gefolgt von ein bis sechs hexadezimalen Ziffern, die seinen Unicode-Codepunkt darstellen)

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` unterschiedliche Identifikatoren sind, da sie [groß-/kleinschreibungssensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) sind.

### Maskierung von Zeichen

Jeder Unicode-Codepunkt kann als Teil eines `<custom-ident>` oder zitierten {{cssxref("string")}} durch Maskierung eingeschlossen werden.

In CSS gibt es mehrere Möglichkeiten, ein Zeichen zu maskieren. Maskierungsfolgen beginnen mit einem Backslash (`\`) und werden fortgesetzt mit:

- Ein bis sechs hexadezimale (`ABCDEF0123456789`) Ziffern. Die hexadezimalen Ziffern können optional von einem Leerzeichen gefolgt sein. Die hexadezimale Maskierungssequenz wird durch den Unicode-Codepunkt ersetzt, dessen Wert durch diese Ziffern gegeben ist. Das Leerzeichen erlaubt es, dass die Sequenzen von tatsächlichen hexadezimalen Ziffern (im Gegensatz zu ersetzten) gefolgt werden.
- Jeder Unicode-Codepunkt, der keine hexadezimale Ziffer oder ein Zeilenumbruch ist.

Beispiele:

- "&B" kann als `\26 B` oder `\000026B` geschrieben werden.
- "hi.there" kann als `hi\.there` oder `hi\002Ethere` geschrieben werden.
- "toto?" kann als `toto\?`, `toto\3F` oder `toto\00003F` geschrieben werden.

Um tatsächlich ein Leerzeichen nach einer Maskierungssequenz einzuschließen, fügen Sie zwei Leerzeichen in die Maskierungssequenz ein.

### Verbotene Werte

Ein `<custom-ident>` darf nicht in einfache oder doppelte Anführungszeichen gesetzt werden, da dies einem {{CSSxRef("&lt;string&gt;")}} identisch wäre. Außerdem darf das erste Zeichen keine Dezimalziffer sein, noch ein Bindestrich (`-`), gefolgt von einer Dezimalziffer.

Um Mehrdeutigkeit zu verhindern, verbietet jede Eigenschaft, die `<custom-ident>` verwendet, die Nutzung bestimmter Werte:

- {{CSSxRef("animation-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie die Werte:
    - `none`
    - `inline`
    - `outside`

    Auch werden einige vordefinierte Werte von verschiedenen Browsern implementiert:
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

_Da dieser Typ kein realer Typ ist, sondern ein Bequemlichkeitstyp zur Vereinfachung der Beschreibung der erlaubten Werte, gibt es keine Browser-Kompatibilitätsinformationen als solche._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
