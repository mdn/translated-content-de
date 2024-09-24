---
title: CSS-Schriftarten
slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: a7d55b06a92d339bfdf109eef85c20a262ca9032
---

{{CSSRef}}

Das **CSS-Schriftarten**-Modul definiert schriftbezogene Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schriftart festzulegen, wie ihre Familie, Größe und Gewicht sowie die Glyphenvarianten, die verwendet werden sollen, wenn für ein einzelnes Zeichen mehrere verfügbar sind.

Eine Schriftart ist eine Ressourcen-Datei, die die visuelle Darstellung von Zeichen enthält und Zeichencodes in Glyphen umwandelt, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis eines Schriftbilds darstellen. Eine Schriftfamilie ist eine Gruppe von Schriftarten, die gemeinsame Designstile und Schrifteigenschaften teilen, wobei jedes Mitglied der Gruppe unterschiedliche Möglichkeiten bietet, die Glyphen darzustellen, die sich durch Strichstärke, Schräglage oder relative Breite und andere Attribute unterscheiden. Eine Schriftart stellt typischerweise einen einzigen Stil eines Schriftbilds dar, wie Helvetica, das fett und kursiv ist. Eine Schriftfamilie ist das komplette Set von Stilen. Die Einbindung einer solchen Schriftart in ein Dokument oder Design erfolgt durch die Definition einer separaten `@font-face`-Deklaration für jede Schriftressource.

Die Eigenschaften, At-Regeln und Deskriptoren des CSS-Schriftarten-Moduls ermöglichen das Herunterladen mehrerer Varianten einer Schriftart. Sie definieren auch die Schriftdatei, die für ein bestimmtes Schriftmerkmal verwendet werden soll, zusammen mit Fallback-Anweisungen für den Fall, dass eine Ressource nicht geladen werden kann. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess, bei dem ein gegebenes Set von CSS-Schrifteigenschaften einem einzelnen Schriftschnitt zugeordnet wird.

Das CSS-Schriftarten-Modul unterstützt auch variable Schriftarten. Anders als reguläre Schriftarten, bei denen jeder Stil als separate Schriftdatei implementiert ist, können variable Schriftarten alle Stile innerhalb einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face`-Deklaration können Sie eine variable Schriftart importieren, die alle Stile enthält. Abhängig von der Schriftart kann dies eine Vielzahl von Schriftvarianten umfassen. Variable Schriftarten sind Teil der OpenType-Schriftsysezifikation.

## Referenz

### Eigenschaften

- {{cssxref("font")}} shorthand
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

- {{cssxref("font-synthesis")}} shorthand
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-weight")}}

- {{cssxref("font-variant")}} shorthand
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

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

- At-Regel: {{cssxref("@font-feature-values")}}

  - : Deskriptor:
    - {{cssxref("@font-feature-values/font-display", "font-display")}}

- At-Regel: {{cssxref("@font-palette-values")}}
  - : Deskriptoren:
    - {{cssxref("@font-palette-values/base-palette", "base-palette")}}
    - {{cssxref("@font-palette-values/font-family", "font-family")}}
    - {{cssxref("@font-palette-values/override-colors", "override-colors")}}

### Datentypen

Typen für `font-size`:

- {{cssxref("absolute-size")}}
- {{cssxref("relative-size")}}

Typ für `font-family`:

- {{cssxref("generic-family")}}

Typ für `font-feature-settings`:

- [`<feature-tag-value>`](/de/docs/Web/CSS/font-feature-settings#values)

Typ für `font-format`:

- [`<font-format>`](/de/docs/Web/CSS/@supports#font-format)

Typ für `font-stretch`:

- [`<font-stretch-css3>`](/de/docs/Web/CSS/font-stretch#values)

Typen für `font-tech`:

- [`<color-font-tech>`](/de/docs/Web/CSS/@supports#font-tech)
- [`<font-features-tech>`](/de/docs/Web/CSS/@supports#font-tech)
- [`<font-tech>`](/de/docs/Web/CSS/@supports#font-tech)

Typen für `font-variant`:

- [`<font-variant-css2>`](/de/docs/Web/CSS/font-variant)
- [`<east-asian-variant-values>`](/de/docs/Web/CSS/font-variant#values)
- [`<east-asian-width-values>`](/de/docs/Web/CSS/font-variant#values)

Typen für `font-variant-ligatures`:

- [`<common-lig-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)
- [`<contextual-alt-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)
- [`<discretionary-lig-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)
- [`<historical-lig-values>`](/de/docs/Web/CSS/font-variant-ligatures#values)

Typen für `font-variant-numeric`:

- [`<numeric-figure-values>`](/de/docs/Web/CSS/font-variant-numeric#values)
- [`<numeric-fraction-values>`](/de/docs/Web/CSS/font-variant-numeric#values)
- [`<numeric-spacing-values>`](/de/docs/Web/CSS/font-variant-numeric#values)

Typ für `font-weight`:

- [`<font-weight-absolute>`](/de/docs/Web/CSS/font-weight#values)

### Schnittstellen

- {{domxref("CSSFontFaceRule")}}
- {{domxref("CSSFontFeatureValuesRule")}}
- {{domxref("CSSFontPaletteValuesRule")}}

## Leitfäden

- [Lernen: Grundlegende Text- und Schriftstilierung](/de/docs/Learn/CSS/Styling_text/Fundamentals)

  - : Dieser Artikel für Anfänger behandelt die grundlegenden Grundlagen der Text- und Schriftstilierung. Er erklärt, wie man das Schriftgewicht, die Familie und den Stil mit der {{cssxref("font")}}-Kurzschrift festlegt und wie man Text ausrichtet und Zeilen- und Buchstabenabstände verwaltet.

- [Lernen: Webfonts](/de/docs/Learn/CSS/Styling_text/Web_fonts)

  - : Dieser Artikel für Anfänger erklärt, wie man benutzerdefinierte Schriftarten auf Ihrer Webseite verwendet, um abwechslungsreichere und angepasste Textstile zuzulassen.

- [Kurzanleitung zu OpenType-Schriftmerkmalen](/de/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)

  - : Schriftmerkmale oder -varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schrift enthalten sind. Dazu gehören Dinge wie Ligaturen (spezielle Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen der Abstände zwischen bestimmten Buchstabenpaaren), Brüche, Ziffernstile und viele andere. Diese werden alle als OpenType-Funktionen bezeichnet und sind im Web über spezifische Eigenschaften und eine Low-Level-Kontrolleigenschaft — {{cssxref("font-feature-settings")}} — verfügbar. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

- [Leitfaden für variable Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)

  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung von variablen Schriftarten.

- [Verbesserung der Schriftleistung](/de/docs/Learn/Performance/CSS#improving_font_performance)

  - : Dieser Artikel, Teil des CSS-Leistungsleitfadens, behandelt das Schriftladen, das Laden nur der benötigten Glyphen und das Definieren des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS-Eigenschaft
- {{cssxref("line-height")}} CSS-Eigenschaft
- {{cssxref("text-transform")}} CSS-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftarten laden](/de/docs/Web/CSS/CSS_font_loading) Modul
- [CSS-Schriftarten-API laden](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS-Text](/de/docs/Web/CSS/CSS_text) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
