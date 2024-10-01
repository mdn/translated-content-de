---
title: <custom-ident>
slug: Web/CSS/custom-ident
l10n:
  sourceCommit: a42dcee9b9cd82d26f1d8de321e2f42975aea07d
---

{{CSSRef}}

Der **`<custom-ident>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) bezeichnet eine beliebige benutzerdefinierte Zeichenfolge, die als {{Glossary("identifier", "Identifier")}} verwendet wird. Er ist unterscheidet zwischen Groß- und Kleinschreibung, und bestimmte Werte sind in verschiedenen Kontexten verboten, um Mehrdeutigkeiten zu vermeiden.

## Syntax

Die Syntax von `<custom-ident>` ähnelt der von CSS-Identifikatoren (wie Eigenschaftsnamen), außer dass sie [Groß- und Kleinschreibung beachtet](https://en.wikipedia.org/wiki/Case_sensitivity). Sie besteht aus einem oder mehreren Zeichen, wobei Zeichen eines der folgenden sein können:

- ein beliebiger alphabetischer Charakter (`A` bis `Z`, oder `a` bis `z`),
- eine beliebige Dezimalziffer (`0` bis `9`),
- ein Bindestrich (`-`),
- ein Unterstrich (`_`),
- ein [escaped character](#zeichen_escapen) (ein vorangestellter Backslash, `\`),
- ein [Unicode](https://en.wikipedia.org/wiki/Unicode)-Zeichen (im Format eines Backslashes, `\`, gefolgt von ein bis sechs hexadezimalen Ziffern, die seinen Unicode-Codepunkt darstellen)

Beachten Sie, dass `id1`, `Id1`, `iD1` und `ID1` alles unterschiedliche Bezeichner sind, da sie [Groß- und Kleinschreibung beachten](https://en.wikipedia.org/wiki/Case_sensitivity).

### Zeichen escapen

Jeder Unicode-Codepunkt kann als Teil eines `<custom-ident>` oder eines zitierten {{cssxref("string")}} durch Escaping eingebunden werden.

In CSS gibt es mehrere Möglichkeiten, ein Zeichen zu escapen. Escape-Sequenzen beginnen mit einem Backslash (`\`) und setzen sich fort mit:

- Einer bis sechs Hexadezimalziffern (`ABCDEF0123456789`). Die Hexadezimalziffern können optional von Leerzeichen gefolgt werden. Die Hex-Escape-Sequenz wird durch den Unicode-Codepunkt ersetzt, dessen Wert durch diese Ziffern angegeben wird. Der Leerraum ermöglicht es, dass die Sequenz von tatsächlichen hexadezimalen Ziffern (versus ersetzten) gefolgt wird.
- Einem Unicode-Codepunkt, der keine hexadezimale Ziffer oder ein Newline-Zeichen ist.

Beispiele:

- "&B" kann als `\26 B` oder `\000026B` geschrieben werden.
- "hi.there" kann als `hi\.there` oder `hi\002Ethere` geschrieben werden.
- "toto?" kann als `toto\?`, `toto\3F` oder `toto\00003F` geschrieben werden.

Um tatsächlich Leerraum nach einer Escape-Sequenz einzuschließen, fügen Sie zwei Leerzeichen in der Escape-Sequenz ein.

### Verbotene Werte

Ein `<custom-ident>` darf nicht in einfache oder doppelte Anführungszeichen gesetzt werden, da dies mit einem {{CSSxRef("&lt;string&gt;")}} identisch wäre. Außerdem darf das erste Zeichen keine dezimale Ziffer sein, noch ein Bindestrich (`-`) gefolgt von einer dezimalen Ziffer.

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

    Außerdem sind mehrere vordefinierte Werte durch die verschiedenen Browser implementiert:

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

_Da dieser Typ kein realer Typ ist, sondern ein bequem zu verwendender Typ zur Vereinfachung der Beschreibung zugelassener Werte, gibt es keine spezifischen Informationen zur Browser-Kompatibilität._

## Siehe auch

- [&lt;ident&gt;](/de/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident)
