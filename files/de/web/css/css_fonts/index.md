---
title: CSS fonts
slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: a7d55b06a92d339bfdf109eef85c20a262ca9032
---

{{CSSRef}}

Das **CSS fonts** Modul definiert schriftbezogene Eigenschaften und wie Schriftartenressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schriftart zu definieren, wie ihre Familie, Größe und Gewicht sowie die zu verwendenden Glyphenvarianten, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schriftart ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält, indem sie Zeichencodes Glyphen zuordnet, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis einer Schriftart darstellen. Eine Schriftfamilie ist eine Gruppe von Schriftarten, die gemeinsame Designstile und Schriftsatzeigenschaften teilen, wobei jedes Mitglied der Gruppe verschiedene Möglichkeiten bietet, die Glyphen darzustellen, die sich durch Strichstärke, Neigung oder relative Breite, unter anderem, unterscheiden. Eine Schriftart repräsentiert typischerweise einen einzelnen Stil einer Schriftart, wie z.B. Helvetica, das fett und kursiv ist. Eine Schriftfamilie ist die vollständige Palette von Stilen. Der Einschluss einer solchen Schriftart in ein Dokument oder Design erfolgt durch die Definition einer separaten `@font-face` Deklaration für jede Schriftressource.

Die Eigenschaften, @-Regeln und Deskriptoren des CSS fonts Moduls ermöglichen das Herunterladen mehrerer Variationen einer Schriftart. Sie definieren auch die Schriftartdatei für eine bestimmte Schriftsatzeigenschaft zusammen mit Fallback-Anweisungen für den Fall, dass eine Ressource nicht geladen werden kann. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess des Abgleichens einer gegebenen Menge von CSS-Schriftarteigenschaften mit einem einzelnen Schriftschnitt.

Das CSS fonts Modul unterstützt auch variable Schriftarten. Im Gegensatz zu regulären Schriftarten, bei denen jeder Stil als separate Schriftdatei implementiert ist, können variable Schriftarten alle Stile in einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face` Deklaration können Sie eine variable Schriftart importieren, die alle Stile umfasst. Abhängig von der Schriftart kann dies eine Vielzahl von Schriftvarianten umfassen. Variable Schriftarten sind Teil der OpenType-Schriftartspezifikation.

## Referenz

### Eigenschaften

- {{cssxref("font")}} Abkürzung
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

- {{cssxref("font-synthesis")}} Abkürzung
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-weight")}}

- {{cssxref("font-variant")}} Abkürzung
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

### At-Rules und Deskriptoren

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

- At-Regel: {{cssxref("@font-feature-values")}}

  - : Deskriptor:
    - {{cssxref("@font-feature-values/font-display", "font-display")}}

- At-Regel: {{cssxref("@font-palette-values")}}
  - : Deskriptoren:
    - {{cssxref("@font-palette-values/base-palette", "base-palette")}}
    - {{cssxref("@font-palette-values/font-family", "font-family")}}
    - {{cssxref("@font-palette-values/override-colors", "override-colors")}}

### Datentypen

`font-size` Typen:

- {{cssxref("absolute-size")}}
- {{cssxref("relative-size")}}

`font-family` Typ:

- {{cssxref("generic-family")}}

`font-feature-settings` Typ:

- [`<feature-tag-value>`](/de/docs/Web/CSS/font-feature-settings#values)

`font-format` Typ:

- [`<font-format>`](/de/docs/Web/CSS/@supports#font-format)

`font-stretch` Typ:

- [`<font-stretch-css3>`](/de/docs/Web/CSS/font-stretch#values)

`font-tech` Typen:

- [`<color-font-tech>`](/de/docs/Web/CSS/@supports#font-tech)
- [`<font-features-tech>`](/de/docs/Web/CSS/@supports#font-tech)
- [`<font-tech>`](/de/docs/Web/CSS/@supports#font-tech)

`font-variant` Typen:

- [`<font-variant-css2>`](/de/docs/Web/CSS/font-variant)
- [`<east-asian-variant-values>`](/de/docs/Web/CSS/font-variant#values)
- [`<east-asian-width-values>`](/de/docs/Web/CSS/font-variant#values)

`font-variant-ligatures` Typen:

- [`<common-lig-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)
- [`<contextual-alt-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)
- [`<discretionary-lig-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)
- [`<historical-lig-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)

`font-variant-numeric` Typen:

- [`<numeric-figure-values>`](/de/docs/Web/CSS/font-variant-numeric#values)
- [`<numeric-fraction-values>`](/de/docs/Web/CSS/font-variant-numeric#values)
- [`<numeric-spacing-values>`](/de/docs/Web/CSS/font-variant-numeric#values)

`font-weight` Typ:

- [`<font-weight-absolute>`](/de/docs/Web/CSS/font-weight#values)

### Schnittstellen

- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)
- [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)
- [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)

## Leitfäden

- [Lernen: Grundlegendes Text- und Schriftstyling](/de/docs/Learn/CSS/Styling_text/Fundamentals)

  - : Dieser Lernartikel für Anfänger behandelt die grundlegenden Grundlagen des Text- und Schriftstylings. Er zeigt, wie Sie das Schriftgewicht, die Familie und den Stil mit der {{cssxref("font")}} Abkürzung setzen und wie Sie Text ausrichten und Zeilen- und Buchstabenabstände verwalten.

- [Lernen: Web-Schriftarten](/de/docs/Learn/CSS/Styling_text/Web_fonts)

  - : Dieser Lernartikel für Anfänger erklärt, wie Sie benutzerdefinierte Schriftarten auf Ihrer Webseite verwenden können, um ein vielfältigeres und individuelles Textstyling zu ermöglichen.

- [OpenType-Schriftarten-Leitfaden](/de/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)

  - : Schriftartenmerkmale oder -varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen am Abstand zwischen bestimmten Buchstabenpaaren), Brüche, Zahlenstile und viele andere. Diese werden alle als OpenType-Features bezeichnet und stehen über spezifische Eigenschaften und eine niedrigstufige Steuerungseigenschaft — {{cssxref("font-feature-settings")}} — zur Verwendung im Web zur Verfügung. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftarten in CSS wissen müssen.

- [Variable-Schriftarten-Leitfaden](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)

  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung von variablen Schriftarten.

- [Verbesserung der Schriftleistung](/de/docs/Learn/Performance/CSS#improving_font_performance)

  - : Dieser Artikel, Teil des CSS-Performance-Leitfadens, behandelt das Laden von Schriftarten, das Laden nur der benötigten Glyphen und das Definieren des Schriftdarstellungsverhaltens mit dem `font-display` Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS Eigenschaft
- {{cssxref("line-height")}} CSS Eigenschaft
- {{cssxref("text-transform")}} CSS Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftarten-Laden](/de/docs/Web/CSS/CSS_font_loading) Modul
- [CSS-Schrift-Laden-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS-Text](/de/docs/Web/CSS/CSS_text) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
