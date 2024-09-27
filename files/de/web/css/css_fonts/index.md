---
title: CSS-Schriften
slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: a7d55b06a92d339bfdf109eef85c20a262ca9032
---

{{CSSRef}}

Das **CSS-Schriften** Modul definiert Schriftbezogene Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schrift zu definieren, wie deren Familie, Größe und Gewicht, sowie die Glyphenvarianten, die verwendet werden sollen, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schrift ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichencodes auf Glyphen abbildet, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis eines Schriftbildes darstellen. Eine Schriftfamilie ist eine Gruppe von Schriften, die gemeinsame Designstile und Schrifteigenschaften teilen, wobei jedes Mitglied der Gruppe verschiedene Möglichkeiten der Darstellung der Glyphen bietet, variierend in Strichstärke, Neigung oder relativer Breite, unter anderen Attributen. Eine Schrift stellt typischerweise einen einzelnen Stil eines Schriftbildes dar, wie z.B. Helvetica, das fett und kursiv ist. Eine Schriftfamilie ist der komplette Satz von Stilen. Die Einbindung einer solchen Schrift in ein Dokument oder Design erfolgt durch die Definition einer separaten `@font-face` Deklaration für jede Schriftressource.

Die Eigenschaften, At-Regeln und Deskriptoren des CSS-Schriften Moduls ermöglichen das Herunterladen mehrerer Variationen einer Schrift. Sie definieren auch die Schriftdatei, die für ein bestimmtes Schriftenmerkmal verwendet werden soll, sowie Rückfallanweisungen für den Fall, dass eine Ressource nicht geladen werden kann. Der CSS-Schriftselektionsmechanismus beschreibt den Prozess des Abgleichs eines gegebenen Satzes von CSS-Schrifteigenschaften mit einem einzigen Schriftschnitt.

Das CSS-Schriften Modul unterstützt auch variable Schriften. Im Gegensatz zu regulären Schriften, bei denen jeder Stil als separate Schriftdatei implementiert wird, können variable Schriften alle Stile innerhalb einer einzigen Datei enthalten. Mit einer einzigen `@font-face` Deklaration können Sie eine variable Schrift importieren, die alle Stile enthält. Abhängig von der Schrift können dies eine Vielzahl von Schriftvarianten sein. Variable Schriften sind Teil der OpenType-Schriftgestaltungsspezifikation.

## Referenz

### Eigenschaften

- {{cssxref("font")}} Kurzform
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

- {{cssxref("font-synthesis")}} Kurzform
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-weight")}}

- {{cssxref("font-variant")}} Kurzform
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

  - : Dieser Lernartikel für Anfänger behandelt die grundlegenden Grundlagen des Text- und Schriftstylings. Es wird behandelt, wie das Schriftgewicht, die Familie und der Stil mit der {{cssxref("font")}} Kurzform gesetzt werden und wie Text ausgerichtet sowie Zeilen- und Buchstabenabstand verwaltet werden.

- [Lernen: Webschriften](/de/docs/Learn/CSS/Styling_text/Web_fonts)

  - : Dieser Lernartikel für Anfänger erklärt, wie Sie benutzerdefinierte Schriften auf Ihrer Webseite verwenden, um variierteres und benutzerdefiniertes Textstyling zu ermöglichen.

- [OpenType-Schriftfunktionen Leitfaden](/de/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)

  - : Schriftfunktionen oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die innerhalb einer OpenType-Schrift enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Unterschneidung (Anpassungen des Abstands zwischen bestimmten Buchstabenkombinationen), Brüche, Zahlenstile und viele andere. Diese werden alle als OpenType-Funktionen bezeichnet und sind im Web über spezielle Eigenschaften und eine Low-Level-Steuerungseigenschaft — {{cssxref("font-feature-settings")}} — zugänglich. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftfunktionen in CSS wissen müssen.

- [Variable Schriften Leitfaden](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)

  - : Dieser Artikel wird Ihnen helfen, mit der Verwendung von variablen Schriften zu beginnen.

- [Schriftenleistung verbessern](/de/docs/Learn/Performance/CSS#improving_font_performance)

  - : Dieser Artikel, Teil des CSS-Leistungsleitfadens, behandelt das Laden von Schriften, das Laden nur der benötigten Glyphen und das Definieren des Schriftanzeigeverhaltens mit dem `font-display` Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS-Eigenschaft
- {{cssxref("line-height")}} CSS-Eigenschaft
- {{cssxref("text-transform")}} CSS-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftlade](/de/docs/Web/CSS/CSS_font_loading) Modul
- [CSS-Schriftlade-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS Text](/de/docs/Web/CSS/CSS_text) Modul
- [CSS Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
