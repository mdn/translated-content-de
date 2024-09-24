---
title: <custom-ident>
slug: Web/CSS/custom-ident
l10n:
  sourceCommit: a42dcee9b9cd82d26f1d8de321e2f42975aea07d
---

{{CSSRef}}

Der **`<custom-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige benutzerdefinierte Zeichenfolge, die als {{glossary("Identifier")}} verwendet wird. Er ist case-sensitive, und bestimmte Werte sind in verschiedenen Kontexten verboten, um Mehrdeutigkeiten zu vermeiden.

## Syntax

Die Syntax von `<custom-ident>` ähnelt den CSS-Identifiers (wie Eigenschaftsnamen), außer dass sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) ist. Sie besteht aus einem oder mehreren Zeichen, wobei die Zeichen aus Folgendem bestehen können:

- jedem alphabetischen Zeichen (`A` bis `Z` oder `a` bis `z`),
- jedem Dezimalziffern (`0` bis `9`),
- einem Bindestrich (`-`),
- einem Unterstrich (`_`),
- einem [entkommenen Zeichen](#zeichen_entkommen) (vorangestellt durch einen Backslash, `\`),
- einem [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen (im Format eines Backslashes, `\`, gefolgt von ein bis sechs hexadezimalen Ziffern, die seinen Unicode-Codepunkt darstellen)

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alle unterschiedliche Identifier sind, da sie [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity) sind.

### Zeichen entkommen

Jeder Unicode-Codepunkt kann in einem `<custom-ident>` oder einem in Anführungszeichen stehenden {{cssxref("string")}} enthalten sein, indem er entkommen wird.

In CSS gibt es mehrere Möglichkeiten, ein Zeichen zu entkommen. Fluchtsequenzen beginnen mit einem Backslash (`\`) und setzen sich fort mit:

- Ein bis sechs hexadezimalen (`ABCDEF0123456789`) Ziffern. Die hexadezimalen Ziffern können optional von einem Leerzeichen gefolgt werden. Die Hexadezimal-Fluchtsequenz wird durch den Unicode-Codepunkt ersetzt, dessen Wert durch diese Ziffern angegeben wird. Das Leerzeichen ermöglicht es den Sequenzen, von tatsächlichen hexadezimalen Ziffern (im Gegensatz zu ersetzten) gefolgt zu werden.
- Jeder Unicode-Codepunkt, der keine hexadezimale Ziffer oder ein Zeilenumbruchzeichen ist.

Beispiele:

- "&B" kann als `\26 B` oder `\000026B` geschrieben werden.
- "hi.there" kann als `hi\.there` oder `hi\002Ethere` geschrieben werden.
- "toto?" kann als `toto\?`, `toto\3F`, oder `toto\00003F` geschrieben werden.

Um tatsächlich ein Leerzeichen nach einer Fluchtsequenz einzufügen, schließen Sie zwei Leerzeichen in die Fluchtsequenz ein.

### Verbotene Werte

Ein `<custom-ident>` darf nicht in einfache oder doppelte Anführungszeichen gesetzt werden, da dies identisch mit einem {{CSSxRef("&lt;string&gt;")}} wäre. Außerdem darf das erste Zeichen keine Dezimalziffer sein, noch ein Bindestrich (`-`), gefolgt von einer Dezimalziffer.

Um Mehrdeutigkeiten zu vermeiden, verbietet jede Eigenschaft, die `<custom-ident>` verwendet, die Nutzung spezifischer Werte:

- {{CSSxRef("animation-name")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial`, und `inherit`) sowie `none`.
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial`, und `inherit`) sowie `none`.
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}

  - : Verbietet die globalen CSS-Werte (`unset`, `initial`, und `inherit`) sowie die Werte:

    - `none`
    - `inline`
    - `outside`

    Außerdem werden von den verschiedenen Browsern einige vordefinierte Werte implementiert:

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
  - : Verbietet die globalen CSS-Werte (`unset`, `initial`, und `inherit`) sowie `none`.
- {{CSSxRef("will-change")}}
  - : Verbietet die globalen CSS-Werte (`unset`, `initial`, und `inherit`) sowie die Werte `will-change`, `auto`, `scroll-position` und `contents`.

## Beispiele

### Gültige Identifier

```plain example-good
nono79            Eine Mischung aus alphanumerischen Zeichen und Zahlen
ground-level      Eine Mischung aus alphanumerischen Zeichen und einem Bindestrich
-test             Ein Bindestrich gefolgt von alphanumerischen Zeichen
_internal         Ein Unterstrich gefolgt von alphanumerischen Zeichen
\22 toto          Ein Unicode-Zeichen gefolgt von einer Folge alphanumerischer Zeichen
bili\.bob         Ein korrekt entkommener Punkt
```

### Ungültige Identifier

```plain example-bad
34rem             Darf nicht mit einer Dezimalziffer beginnen.
-12rad            Darf nicht mit einem Bindestrich gefolgt von einer Dezimalziffer beginnen.
bili.bob          Nur alphanumerische Zeichen, _, und - müssen nicht entkommen werden.
'bilibob'         Dies wäre ein <string>.
"bilibob"         Dies wäre ein <string>.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

_Da dieser Typ kein echter Typ ist, sondern ein Hilfstyp, der zur Vereinfachung der Beschreibung erlaubter Werte verwendet wird, gibt es keine Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
