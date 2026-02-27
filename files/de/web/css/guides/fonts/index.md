---
title: CSS-Schriften
short-title: Fonts
slug: Web/CSS/Guides/Fonts
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

Das **CSS-Schriftarten**-Modul definiert schriftbezogene Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schriftart zu definieren, wie zum Beispiel ihre Familie, Größe und Gewicht, sowie die Glyphenvarianten, die verwendet werden, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schriftart ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichen-Codes auf Glyphen abbildet, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis eines Schriftsatzes darstellen. Eine Schriftfamilie ist eine Gruppe von Schriften, die gemeinsame Designstile und Schriftsatzeigenschaften teilen, wobei jedes Mitglied der Gruppe unterschiedliche Möglichkeiten bietet, die Glyphen darzustellen, variierend durch Strichstärke, Neigung oder relative Breite, unter anderen Attributen. Eine Schriftart repräsentiert typischerweise einen einzelnen Stil eines Schriftsatzes, wie zum Beispiel Helvetica, das fett und kursiv ist. Eine Schriftfamilie ist die vollständige Sammlung von Stilen. Das Einbinden einer solchen Schriftart in ein Dokument oder Design erfolgt, indem für jede Schriftressource eine separate `@font-face`-Deklaration definiert wird.

Die Eigenschaften, At-Regeln und Deskriptoren des CSS-Schriftarten-Moduls ermöglichen das Herunterladen mehrerer Variationen einer Schriftart. Sie definieren auch die Schriftdatei, die für eine bestimmte Schrifteigenschaft verwendet werden soll, sowie Fallback-Anweisungen für den Fall, dass eine Ressource nicht geladen werden kann. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess des Abgleichs eines gegebenen Sets von CSS-Schrifteigenschaften mit einem einzelnen Schriftschnitt.

Das CSS-Schriftarten-Modul unterstützt auch variable Schriften. Im Gegensatz zu regulären Schriften, bei denen jeder Stil als separate Schriftdatei implementiert ist, können variable Schriften alle Stile in einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face`-Deklaration können Sie eine variable Schriftart importieren, die alle Stile enthält. Je nach Schriftart kann dies eine Vielzahl von Schriftvarianten umfassen. Variable Schriften sind Teil der OpenType-Schriftspezifikation.

## Referenz

### Eigenschaften

- {{cssxref("font")}} Kurzhand
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-palette")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-width")}} und seine veraltete Entsprechung {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}

- {{cssxref("font-synthesis")}} Kurzhand
- {{cssxref("font-synthesis-position")}}
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-weight")}}

- {{cssxref("font-variant")}} Kurzhand
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
    - {{cssxref("@font-face/font-width", "font-width")}} und seine veraltete Entsprechung {{cssxref("@font-face/font-stretch", "font-stretch")}}
    - {{cssxref("@font-face/font-style", "font-style")}}
    - {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
    - {{cssxref("@font-face/font-weight", "font-weight")}}
    - {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
    - {{cssxref("@font-face/size-adjust", "size-adjust")}}
    - {{cssxref("@font-face/src", "src")}}
    - {{cssxref("@font-face/unicode-range", "unicode-range")}}

Das CSS-Schriftarten-Modul definiert auch die Deskriptoren `font-language-override`, `font-named-instance`, `font-size`, `subscript-position-override`, `subscript-size-override`, `superscript-position-override` und `superscript-size-override`. Derzeit unterstützen keine Browser diese Funktionen.

- At-Regel: {{cssxref("@font-feature-values")}}

Das CSS-Schriftarten-Modul definiert auch den {{cssxref("@font-feature-values/font-display", "font-display")}} Deskriptor. Derzeit unterstützen keine Browser diese Funktion.

- At-Regel: {{cssxref("@font-palette-values")}}
  - : Deskriptoren:
    - {{cssxref("@font-palette-values/base-palette", "base-palette")}}
    - {{cssxref("@font-palette-values/font-family", "font-family")}}
    - {{cssxref("@font-palette-values/override-colors", "override-colors")}}

### Funktionen

Das CSS-Schriftarten-Modul definiert die `generic()` Funktion. Derzeit unterstützen keine Browser diese Funktion.

### Datentypen

`font-size` Typen:

- {{cssxref("absolute-size")}}
- {{cssxref("relative-size")}}

`font-family` Typ:

- {{cssxref("generic-family")}}

`font-feature-settings` Typ:

- [`<feature-tag-value>`](/de/docs/Web/CSS/Reference/Properties/font-feature-settings#values)

`font-format` Typ:

- [`<font-format>`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-format)

`font-stretch` Typ:

- [`<font-stretch-css3>`](/de/docs/Web/CSS/Reference/Properties/font-stretch#values)

`font-tech` Typen:

- [`<color-font-tech>`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`<font-features-tech>`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`<font-tech>`](/de/docs/Web/CSS/Reference/At-rules/@supports#font-tech)

`font-variant` Typen:

- [`<font-variant-css2>`](/de/docs/Web/CSS/Reference/Properties/font-variant)
- [`<east-asian-variant-values>`](/de/docs/Web/CSS/Reference/Properties/font-variant#values)
- [`<east-asian-width-values>`](/de/docs/Web/CSS/Reference/Properties/font-variant#values)

`font-variant-ligatures` Typen:

- [`<common-lig-values>`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures#values)
- [`<contextual-alt-values>`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures#values)
- [`<discretionary-lig-values>`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures#values)
- [`<historical-lig-values>`](/de/docs/Web/CSS/Reference/Properties/font-variant-ligatures#values)

`font-variant-numeric` Typen:

- [`<numeric-figure-values>`](/de/docs/Web/CSS/Reference/Properties/font-variant-numeric#values)
- [`<numeric-fraction-values>`](/de/docs/Web/CSS/Reference/Properties/font-variant-numeric#values)
- [`<numeric-spacing-values>`](/de/docs/Web/CSS/Reference/Properties/font-variant-numeric#values)

`font-weight` Typ:

- [`<font-weight-absolute>`](/de/docs/Web/CSS/Reference/Properties/font-weight#values)

### Schnittstellen

- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)
- [`CSSFontFeatureValuesRule`](/de/docs/Web/API/CSSFontFeatureValuesRule)
- [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)

## Leitfäden

- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
  - : Dieser Lernartikel für Anfänger behandelt die grundlegenden Grundlagen der Text- und Schriftgestaltung. Es wird erklärt, wie das Schriftgewicht, die Familie und der Stil mit dem {{cssxref("font")}} Kurzhand gesetzt werden und wie Text ausgerichtet und Zeilen- und Buchstabenzwischenräume verwaltet werden.

- [Lernen: Web-Schriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)
  - : Dieser Lernartikel für Anfänger erklärt, wie Sie benutzerdefinierte Schriften auf Ihrer Webseite verwenden können, um vielfältigere und benutzerdefinierte Textstile zu ermöglichen.

- [OpenType Schriftmerkmale](/de/docs/Web/CSS/Guides/Fonts/OpenType_fonts)
  - : Schriftmerkmale oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schrift enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen der Abstände zwischen bestimmten Buchstabenpaaren), Brüche, Zahlenstile und eine Vielzahl anderer Merkmale. Diese werden alle als OpenType-Merkmale bezeichnet und können im Web über spezifische Eigenschaften und eine Low-Level-Kontrolleigenschaft — {{cssxref("font-feature-settings")}} — verwendet werden. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

- [Web Open Font Format (WOFF)](/de/docs/Web/CSS/Guides/Fonts/WOFF)
  - : WOFF verwendet eine komprimierte Version der gleichen tabellenbasierten `sfnt`-Struktur, die von TrueType, OpenType und dem Open Font Format verwendet wird, fügt jedoch Metadaten und private Nutzdatustrukturen hinzu, einschließlich vordefinierter Felder, die es Schriftgießereien und Anbietern ermöglichen, Lizenzinformationen bereitzustellen, falls gewünscht.

- [Variable Schriften](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung von variablen Schriften.

- [Verbesserung der Schriftperformance](/de/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - : Dieser Artikel, Teil des CSS-Performance-Leitfadens, behandelt das Laden von Schriften, das Laden nur der benötigten Glyphen und das Definieren des Anzeigeverhaltens von Schriften mit dem `font-display`-Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS-Eigenschaft
- {{cssxref("line-height")}} CSS-Eigenschaft
- {{cssxref("text-transform")}} CSS-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftladen](/de/docs/Web/CSS/Guides/Font_loading) Modul
- [CSS-Schriftlade-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS-Text](/de/docs/Web/CSS/Guides/Text) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) Modul
