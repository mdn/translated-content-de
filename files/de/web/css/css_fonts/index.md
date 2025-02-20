---
title: CSS-Schriften
slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: bd4804a5412fe458ba5580fef6345c668b69f237
---

{{CSSRef}}

Das **CSS-Schriften-Modul** definiert schriftenbezogene Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schrift zu definieren, wie z. B. ihre Familie, Größe und Gewicht, sowie die Glyphenvarianten zu verwenden, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schrift ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichencodes auf Glyphen abbildet, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis eines Schriftbildes darstellen. Eine Schriftfamilie ist eine Gruppe von Schriften, die gemeinsame Designstile und Schrifteigenschaften teilen, wobei jedes Mitglied der Gruppe unterschiedliche Möglichkeiten zur Anzeige der Glyphen bietet, die sich z. B. durch Strichstärke, Neigung oder relative Breite unterscheiden. Eine Schrift repräsentiert typischerweise einen einzelnen Stil eines Schriftbildes, wie zum Beispiel Helvetica, das fett und kursiv ist. Eine Schriftfamilie ist der vollständige Satz von Stilen. Das Einbinden einer solchen Schrift in ein Dokument oder Design erfolgt durch die Definition einer separaten `@font-face`-Deklaration für jede Schriftressource.

Die Eigenschaften, At-Regeln und Deskriptoren des CSS-Schriften-Moduls ermöglichen das Herunterladen von mehreren Variationen einer Schrift. Sie definieren auch die Schriftdatei, die für eine bestimmte Schrifteigenschaft verwendet werden soll, zusammen mit Fallback-Anweisungen für den Fall, dass eine Ressource nicht geladen werden kann. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess der Zuordnung einer gegebenen Menge an CSS-Schrifteigenschaften zu einem einzelnen Schriftbild.

Das CSS-Schriften-Modul unterstützt auch variable Schriften. Im Gegensatz zu regulären Schriften, bei denen jeder Stil als separate Schriftdatei implementiert ist, können variable Schriften alle Stile in einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face`-Deklaration können Sie eine variable Schrift importieren, die alle Stile umfasst. Abhängig von der Schrift kann dies eine Vielzahl von Schriftvarianten umfassen. Variable Schriften sind Teil der OpenType-Schriftenspezifikation.

## Referenz

### Eigenschaften

- {{cssxref("font")}} Kurzschreibweise
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-palette")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}

- {{cssxref("font-synthesis")}} Kurzschreibweise
- {{cssxref("font-synthesis-position")}}
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-weight")}}

- {{cssxref("font-variant")}} Kurzschreibweise
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

Die Spezifikation definiert auch die `font-width`-Eigenschaft, die noch von keinem Browser unterstützt wird.

### At-Regeln und Deskriptoren

- At-Regel: {{cssxref("@font-face")}}

  - : Deskriptoren:
    - {{cssxref("@font-face/ascent-override", "ascent-override")}}
    - {{cssxref("@font-face/descent-override", "descent-override")}}
    - {{cssxref("@font-face/font-display", "font-display")}}
    - {{cssxref("@font-face/font-family", "font-family")}}
    - {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
    - {{cssxref("@font-face/font-stretch", "font-stretch")}}
    - {{cssxref("@font-face/font-style", "font-style")}}
    - {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
    - {{cssxref("@font-face/font-weight", "font-weight")}}
    - {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
    - {{cssxref("@font-face/size-adjust", "size-adjust")}}
    - {{cssxref("@font-face/src", "src")}}
    - {{cssxref("@font-face/unicode-range", "unicode-range")}}

Die Spezifikation definiert auch die Deskriptoren `font-language-override`, `font-named-instance`, `font-width`, `font-size`, `subscript-position-override`, `subscript-size-override`, `superscript-position-override` und `superscript-size-override`, die von keinem Browser unterstützt werden.

- At-Regel: {{cssxref("@font-feature-values")}}

  - : Deskriptor:
    - {{cssxref("@font-feature-values/font-display", "font-display")}}

- At-Regel: {{cssxref("@font-palette-values")}}
  - : Deskriptoren:
    - {{cssxref("@font-palette-values/base-palette", "base-palette")}}
    - {{cssxref("@font-palette-values/font-family", "font-family")}}
    - {{cssxref("@font-palette-values/override-colors", "override-colors")}}

### Datentypen

`font-size`-Typen:

- {{cssxref("absolute-size")}}
- {{cssxref("relative-size")}}

`font-family`-Typ:

- {{cssxref("generic-family")}}

`font-feature-settings`-Typ:

- [`<feature-tag-value>`](/de/docs/Web/CSS/font-feature-settings#values)

`font-format`-Typ:

- [`<font-format>`](/de/docs/Web/CSS/@supports#font-format)

`font-stretch`-Typ:

- [`<font-stretch-css3>`](/de/docs/Web/CSS/font-stretch#values)

`font-tech`-Typen:

- [`<color-font-tech>`](/de/docs/Web/CSS/@supports#font-tech)
- [`<font-features-tech>`](/de/docs/Web/CSS/@supports#font-tech)
- [`<font-tech>`](/de/docs/Web/CSS/@supports#font-tech)

`font-variant`-Typen:

- [`<font-variant-css2>`](/de/docs/Web/CSS/font-variant)
- [`<east-asian-variant-values>`](/de/docs/Web/CSS/font-variant#values)
- [`<east-asian-width-values>`](/de/docs/Web/CSS/font-variant#values)

`font-variant-ligatures`-Typen:

- [`<common-lig-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)
- [`<contextual-alt-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)
- [`<discretionary-lig-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)
- [`<historical-lig-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)

`font-variant-numeric`-Typen:

- [`<numeric-figure-values>`](/de/docs/Web/CSS/font-variant-numeric#values)
- [`<numeric-fraction-values>`](/de/docs/Web/CSS/font-variant-numeric#values)
- [`<numeric-spacing-values>`](/de/docs/Web/CSS/font-variant-numeric#values)

`font-weight`-Typ:

- [`<font-weight-absolute>`](/de/docs/Web/CSS/font-weight#values)

### Schnittstellen

- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)
- [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)
- [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)

## Leitfäden

- [Lernen: Grundlegendes Text- und Schriftstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)

  - : Dieser Anfängerleitfaden behandelt die grundlegenden Grundlagen des Text- und Schriftstylings. Er behandelt, wie man das Schriftgewicht, die Familie und den Stil mit der {{cssxref("font")}}-Kurzschreibweise setzt und wie man Text ausrichtet und den Zeilen- und Buchstabenabstand verwaltet.

- [Lernen: Web-Schriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)

  - : Dieser Anfängerleitfaden erklärt, wie man benutzerdefinierte Schriften auf Ihrer Webseite verwendet, um variierteres und benutzerdefiniertes Textstyling zu ermöglichen.

- [Leitfaden zu OpenType-Schriftenmerkmalen](/de/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)

  - : Schriftmerkmale oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schrift enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Zahlenstile und viele andere. Dies sind alles OpenType-Merkmale, die durch spezifische Eigenschaften und eine Low-Level-Steuereigenschaft — {{cssxref("font-feature-settings")}} — im Web nutzbar sind. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

- [Leitfaden zu variablen Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)

  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung von variablen Schriften.

- [Verbesserung der Schriftperformance](/de/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)

  - : Dieser Artikel, Teil des CSS-Performance-Leitfadens, behandelt das Laden von Schriften, das Laden nur der erforderlichen Glyphen und das Definieren des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS-Eigenschaft
- {{cssxref("line-height")}} CSS-Eigenschaft
- {{cssxref("text-transform")}} CSS-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftlade-Modul](/de/docs/Web/CSS/CSS_font_loading)
- [CSS-Schriftlade-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS-Textmodul](/de/docs/Web/CSS/CSS_text)
- [CSS-Schreibmodi-Modul](/de/docs/Web/CSS/CSS_writing_modes)
