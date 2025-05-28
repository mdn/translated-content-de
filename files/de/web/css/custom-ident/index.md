---
title: <custom-ident>
slug: Web/CSS/custom-ident
l10n:
  sourceCommit: 017d2a4152d195a3f57849d23bc9cc6ebce3d0da
---

{{CSSRef}}

Der **`<custom-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) bezeichnet eine beliebige, vom Benutzer definierte Zeichenfolge, die als {{Glossary("identifier", "Identifier")}} verwendet wird. Er ist case-sensitiv, und bestimmte Werte sind in verschiedenen Kontexten verboten, um Mehrdeutigkeiten zu vermeiden.

## Syntax

Die Syntax von `<custom-ident>` ähnelt der von CSS-Identifikatoren (wie Eigenschaftsnamen), mit dem Unterschied, dass sie [case-sensitiv](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie besteht aus einem oder mehreren Zeichen, wobei die Zeichen wie folgt sein können:

- beliebige alphabetische Zeichen (`A` bis `Z` oder `a` bis `z`),
- beliebige Dezimalziffern (`0` bis `9`),
- ein Bindestrich (`-`),
- ein Unterstrich (`_`),
- ein [escaped character](#zeichen_entkommen) (eingeleitet durch einen Backslash, `\`),
- ein [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen (im Format eines Backslashs, `\`, gefolgt von eins bis sechs hexadezimalen Ziffern, die den Unicode-Codepunkt darstellen)

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` aufgrund der [case-Sensitivität](https://en.wikipedia.org/wiki/Case_sensitivity) unterschiedliche Identifikatoren sind.

### Zeichen entkommen

Jeder Unicode-Codepunkt kann als Teil eines `<custom-ident>` oder eines gequoteten {{cssxref("string")}} enthalten sein, indem er escapiert wird.

In CSS gibt es mehrere Möglichkeiten, ein Zeichen zu escapen. Escape-Sequenzen beginnen mit einem Backslash (`\`) und werden fortgesetzt mit:

- Einem bis sechs hexadezimalen (`ABCDEF0123456789`) Ziffern. Die hexadezimalen Ziffern können optional durch ein Leerzeichen gefolgt werden. Die hexadezimale Escape-Sequenz wird durch den Unicode-Codepunkt ersetzt, dessen Wert durch diese Ziffern angegeben wird. Das Leerzeichen ermöglicht es den Sequenzen, von tatsächlichen hexadezimalen Ziffern gefolgt zu werden (im Gegensatz zu ersetzten).
- Jedem Unicode-Codepunkt, der keine hexadezimale Ziffer oder ein Zeilenumbruchzeichen ist.

Beispiele:

- "&B" kann als `\26 B` oder `\000026B` geschrieben werden.
- "hi.there" kann als `hi\.there` oder `hi\002Ethere` geschrieben werden.
- "toto?" kann als `toto\?`, `toto\3F` oder `toto\00003F` geschrieben werden.

Um tatsächlich ein Leerzeichen nach einer Escape-Sequenz einzufügen, fügen Sie zwei Leerzeichen in die Escape-Sequenz ein.

### Verbotene Werte

Ein `<custom-ident>` darf nicht in einfache oder doppelte Anführungszeichen gesetzt werden, da dies identisch mit einem {{CSSxRef("&lt;string&gt;")}} wäre. Zudem darf das erste Zeichen keine Dezimalziffer sein, noch ein Bindestrich (`-`), gefolgt von einer Dezimalziffer.

Um Mehrdeutigkeit zu vermeiden, verbietet jede Eigenschaft, die `<custom-ident>` verwendet, die Nutzung spezifischer Werte:

- {{CSSxRef("animation-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie `none`.
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}

  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`) sowie die Werte:

    - `none`
    - `inline`
    - `outside`

    Darüber hinaus sind einige vordefinierte Werte von den verschiedenen Browsern implementiert:

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

_Da dieser Typ kein echter Typ, sondern ein Hilfstyp ist, der zur Vereinfachung der Beschreibung zulässiger Werte verwendet wird, gibt es keine Browser-Kompatibilitätsinformationen._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
