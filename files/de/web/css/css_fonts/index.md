---
title: CSS-Fonts
slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Fonts-Modul** definiert schriftbezogene Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schriftart zu definieren, wie z. B. ihre Familie, Größe und Gewicht, sowie die Glyphenvarianten, die verwendet werden sollen, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schriftart ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichencodes mit Glyphen abbildet, die Buchstaben, Zahlen, Interpunktionszeichen und sogar Emojis einer Schriftart darstellen. Eine Schriftfamilie ist eine Gruppe von Schriftarten, die gemeinsame Designstile und Schrifteigenschaften teilen, bei denen jedes Mitglied der Gruppe unterschiedliche Möglichkeiten zur Darstellung der Glyphen bietet und sich durch Strichstärke, Neigung oder relative Breite, unter anderem, unterscheiden kann. Eine Schriftart repräsentiert typischerweise einen einzelnen Stil einer Schriftart, wie z. B. Helvetica, die fett und kursiv ist. Eine Schriftfamilie ist der vollständige Satz an Stilen. Das Einbinden einer solchen Schriftart in ein Dokument oder Design erfolgt durch die Definition einer separaten `@font-face`-Deklaration für jede Schriftsignatur.

Die Eigenschaften, @-Regeln und Deskriptoren des CSS-Fonts-Moduls ermöglichen das Herunterladen mehrerer Variationen einer Schriftart. Sie definieren auch die Schriftdatei, die für eine bestimmte Schriftmerkmal verwendet werden soll, zusammen mit Fallback-Anweisungen für den Fall, dass eine Ressource nicht geladen werden kann. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess des Abgleichs eines gegebenen Satzes von CSS-Schrifteigenschaften mit einer einzelnen Schriftschnittdarstellung.

Das CSS-Fonts-Modul unterstützt auch variable Schriften. Im Gegensatz zu regulären Schriften, bei denen jeder Stil als separate Schriftdatei implementiert wird, können variable Schriften alle Stile in einer einzigen Datei enthalten. Mittels einer einzigen `@font-face`-Deklaration können Sie eine variable Schriftart importieren, die alle Stile umfasst. Abhängig von der Schriftart kann dies eine Vielzahl von Schriftvarianten umfassen. Variable Schriften sind Teil der OpenType-Schriftartenspezifikation.

## Referenz

### Eigenschaften

- {{cssxref("font")}} Shorthand
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

- {{cssxref("font-synthesis")}} Shorthand
- {{cssxref("font-synthesis-position")}}
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-weight")}}

- {{cssxref("font-variant")}} Shorthand
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

Die Spezifikation definiert auch die `font-width`-Eigenschaft, die von keinem Browser unterstützt wird.

### At-Rules und Deskriptoren

- At-Rule: {{cssxref("@font-face")}}
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

- At-Rule: {{cssxref("@font-feature-values")}}

  - : Deskriptor:
    - {{cssxref("@font-feature-values/font-display", "font-display")}}

- At-Rule: {{cssxref("@font-palette-values")}}
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

- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)

  - : Dieser Artikel für Anfänger behandelt die grundlegenden Grundlagen der Text- und Schriftgestaltung. Er zeigt, wie man das Schriftgewicht, die Familie und den Stil mithilfe des {{cssxref("font")}}-Shorthands einstellt und wie man Text ausrichtet sowie Zeilen- und Buchstabenabstände verwaltet.

- [Lernen: Webschriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)

  - : Dieser Artikel für Anfänger erklärt, wie Sie benutzerdefinierte Schriften auf Ihrer Webseite verwenden können, um eine variantenreichere und individuellere Textgestaltung zu ermöglichen.

- [OpenType-Schriftmerkmale](/de/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)

  - : Schriftmerkmale oder Varianten beziehen sich auf unterschiedliche Glyphen oder Zeichenstile, die innerhalb einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Zahlenstile und viele andere. Diese sind alle als OpenType-Merkmale bekannt und können über spezifische Eigenschaften und eine Low-Level-Kontrolleigenschaft — {{cssxref("font-feature-settings")}} — auf dem Web verwendet werden. Dieser Artikel liefert Ihnen alles, was Sie über die Verwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

- [Variable Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)

  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung von variablen Schriften.

- [Verbesserung der Schriftleistung](/de/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - : Dieser Artikel, Teil des CSS-Leitfadens zur Leistung, behandelt das Laden von Schriften, das Laden nur der benötigten Glyphen und das Definieren des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS-Eigenschaft
- {{cssxref("line-height")}} CSS-Eigenschaft
- {{cssxref("text-transform")}} CSS-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftarten-Loading](/de/docs/Web/CSS/CSS_font_loading) Modul
- [CSS-Schriftarten-Loading-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS-Text](/de/docs/Web/CSS/CSS_text) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
