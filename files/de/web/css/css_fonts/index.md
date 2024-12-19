---
title: CSS-Schriften
slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das **CSS-Schriften**-Modul definiert Schrift-bezogene Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schriftart zu definieren, wie z.B. deren Familie, Größe und Dicke sowie die Glyphenvarianten, die verwendet werden sollen, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schriftart ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichencodes zu Glyphen zuordnet, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis eines Schriftsatzes darstellen. Eine Schriftfamilie ist eine Gruppe von Schriftarten, die gemeinsame Designstile und Schrifteigenschaften teilen, wobei jedes Mitglied der Gruppe unterschiedliche Möglichkeiten bietet, die Glyphen darzustellen, variiert nach Strichdicke, Neigung oder relativer Breite, neben anderen Attributen. Eine Schriftart stellt typischerweise einen einzigen Stil eines Schriftsatzes dar, wie Helvetica, das fett und kursiv ist. Eine Schriftfamilie ist die vollständige Menge von Stilen. Um eine solche Schriftart in ein Dokument oder Design einzubinden, wird je eine separate `@font-face`-Deklaration für jede Schriftressource definiert.

Die Eigenschaften, At-Regeln und Deskriptoren des CSS-Schriften-Moduls ermöglichen das Herunterladen mehrerer Variationen einer Schriftart. Sie definieren auch die zu verwendende Schriftdatei für ein bestimmtes Schriftmerkmal sowie Fallback-Anweisungen für den Fall, dass eine Ressource nicht geladen werden kann. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess, wie ein gegebener Satz von CSS-Schrift-Eigenschaften mit einer einzelnen Schriftart abgeglichen wird.

Das CSS-Schriften-Modul unterstützt auch variable Schriften. Anders als reguläre Schriften, bei denen jeder Stil als separate Schriftdatei implementiert ist, können variable Schriften alle Stile innerhalb einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face`-Deklaration können Sie eine variable Schriftart importieren, die alle Stile beinhaltet. Je nach Schriftart können dies eine Vielzahl von Schriftvarianten sein. Variable Schriften sind Teil der OpenType-Schriftenspezifikation.

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

  - : Dieser Einsteiger-Lernartikel behandelt die grundlegenden Prinzipien des Text- und Schriftstylings. Er erklärt, wie man die Schriftstärke, -familie und -stil mit der {{cssxref("font")}}-Kurzform festlegt und wie man Text ausrichtet und Zeilen- und Buchstabenabstand verwaltet.

- [Lernen: Web-Schriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)

  - : Dieser Einsteiger-Lernartikel erklärt, wie man benutzerdefinierte Schriften auf Ihrer Webseite verwendet, um variablere und benutzerdefinierte Textformatierungen zu ermöglichen.

- [OpenType-Schrift-Funktionen Leitfaden](/de/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)

  - : Schriftfunktionen oder -varianten beziehen sich auf unterschiedliche Glyphen oder Zeichenstile, die in einer OpenType-Schrift enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Zahlstile und viele andere. Diese werden alle als OpenType-Funktionen bezeichnet und sind im Web über spezifische Eigenschaften und eine Low-Level-Steuereigenschaft – {{cssxref("font-feature-settings")}} verfügbar. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schrift-Funktionen in CSS wissen müssen.

- [Variable Schriften Leitfaden](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)

  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung von variablen Schriften.

- [Verbesserung der Schrift-Leistung](/de/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)

  - : Dieser Artikel, Teil des CSS-Leistungsleitfadens, behandelt das Laden von Schriften, das Laden nur der erforderlichen Glyphen und das Definieren des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS-Eigenschaft
- {{cssxref("line-height")}} CSS-Eigenschaft
- {{cssxref("text-transform")}} CSS-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schrift-Laden](/de/docs/Web/CSS/CSS_font_loading) Modul
- [CSS-Schrift-Laden-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS-Text](/de/docs/Web/CSS/CSS_text) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
