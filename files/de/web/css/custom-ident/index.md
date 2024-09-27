---
title: <custom-ident>
slug: Web/CSS/custom-ident
l10n:
  sourceCommit: a42dcee9b9cd82d26f1d8de321e2f42975aea07d
---

{{CSSRef}}

Der **`<custom-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige, benutzerdefinierte Zeichenfolge, die als [Bezeichner](/de/docs/Glossary/identifier) verwendet wird. Er ist groß-/kleinbuchstabenempfindlich, und bestimmte Werte sind in verschiedenen Kontexten verboten, um Mehrdeutigkeiten zu vermeiden.

## Syntax

Die Syntax von `<custom-ident>` ist ähnlich wie bei CSS-Bezeichnern (wie Eigenschaftsnamen), außer dass sie [groß-/kleinbuchstabenempfindlich](https://de.wikipedia.org/wiki/Case_sensitivity) ist. Sie besteht aus einem oder mehreren Zeichen, die aus den folgenden bestehen können:

- einem beliebigen alphabetischen Zeichen (`A` bis `Z` oder `a` bis `z`),
- einer beliebigen Dezimalziffer (`0` bis `9`),
- einem Bindestrich (`-`),
- einem Unterstrich (`_`),
- einem [entwichenden Zeichen](#zeichen_entfliehen) (vorangestellt mit einem Backslash, `\`),
- einem [Unicode](https://de.wikipedia.org/wiki/Unicode)-Zeichen (im Format eines Backslashs, `\`, gefolgt von ein bis sechs hexadezimalen Ziffern, die den Unicode-Codepunkt darstellen)

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alle unterschiedliche Bezeichner sind, da sie [groß-/kleinbuchstabenempfindlich](https://de.wikipedia.org/wiki/Case_sensitivity) sind.

### Zeichen entfliehen

Jeder Unicode-Codepunkt kann als Teil eines `<custom-ident>` oder eines zitierten {{cssxref("string")}} durch Entkommen eingefügt werden.

In CSS gibt es mehrere Möglichkeiten, ein Zeichen zu entkommen. Escape-Sequenzen beginnen mit einem Backslash (`\`) und setzen sich fort mit:

- Ein bis sechs hexadezimalen (`ABCDEF0123456789`) Ziffern. Die hexadezimalen Ziffern können optional durch ein Leerzeichen gefolgt werden. Die hexadezimale Escape-Sequenz wird durch den Unicode-Codepunkt ersetzt, dessen Wert durch diese Ziffern angegeben wird. Das Leerzeichen ermöglicht es, dass die Sequenzen tatsächlich auf hexadezimale Ziffern (im Gegensatz zu ersetzten) folgen können.
- Einem beliebigen Unicode-Codepunkt, der keine hexadezimale Ziffer oder ein Zeilenumbruchzeichen ist.

Beispiele:

- "&B" kann geschrieben werden als `\26 B` oder `\000026B`.
- "hi.there" kann geschrieben werden als `hi\.there` oder `hi\002Ethere`.
- "toto?" kann geschrieben werden als `toto\?`, `toto\3F` oder `toto\00003F`.

Um tatsächlichen Leerraum nach einer Escape-Sequenz einzuschließen, fügen Sie zwei Leerzeichen in der Escape-Sequenz ein.

### Verbotene Werte

Ein `<custom-ident>` darf nicht zwischen einfachen oder doppelten Anführungszeichen stehen, da dies identisch mit einem {{CSSxRef("&lt;string&gt;")}} wäre. Zudem darf das erste Zeichen keine Dezimalziffer oder ein Bindestrich (`-`) gefolgt von einer Dezimalziffer sein.

Um Mehrdeutigkeiten zu vermeiden, verbieten alle Eigenschaften, die `<custom-ident>` verwenden, die Anwendung spezifischer Werte:

- {{CSSxRef("animation-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`), sowie `none`.
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`), sowie `none`.
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}

  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`), sowie die Werte:

    - `none`
    - `inline`
    - `outside`

    Außerdem werden einige vordefinierte Werte von den verschiedenen Browsern implementiert:

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
  - : Verbietet den `span`-Wert.
- {{CSSxRef("view-transition-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`), sowie `none`.
- {{CSSxRef("will-change")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial` und `inherit`), sowie die Werte `will-change`, `auto`, `scroll-position` und `contents`.

## Beispiele

### Gültige Bezeichner

```plain example-good
nono79            A mix of alphanumeric characters and numbers
ground-level      A mix of alphanumeric characters and a dash
-test             A dash followed by alphanumeric characters
_internal         An underscore followed by alphanumeric characters
\22 toto          A Unicode character followed by a sequence of alphanumeric characters
bili\.bob         A correctly escaped period
```

### Ungültige Bezeichner

```plain example-bad
34rem             It must not start with a decimal digit.
-12rad            It must not start with a dash followed by a decimal digit.
bili.bob          Only alphanumeric characters, _, and - needn't be escaped.
'bilibob'         This would be a <string>.
"bilibob"         This would be a <string>.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

_Da dieser Typ kein echter Typ ist, sondern ein Komforttyp, der die Beschreibung der erlaubten Werte vereinfacht, gibt es keine spezifischen Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
