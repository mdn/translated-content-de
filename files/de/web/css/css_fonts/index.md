---
title: CSS-Schriftarten
slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Schriftarten**-Modul definiert schriftbezogene Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schriftart zu definieren, wie zum Beispiel ihre Familie, Größe und Gewicht sowie die Glyphenvarianten, die verwendet werden sollen, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schriftart ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichencodes auf Glyphen abbildet, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis eines Schriftschnitts darstellen. Eine Schriftfamilie ist eine Gruppe von Schriftarten, die gemeinsame Designstile und Schriftmerkmale teilen, wobei jedes Mitglied der Gruppe verschiedene Möglichkeiten bietet, die Glyphen anzuzeigen, variierend durch Strichgewicht, Neigung oder relative Breite, unter anderen Attributen. Eine Schriftart stellt typischerweise einen einzigen Stil eines Schriftschnitts dar, wie beispielsweise Helvetica, das fett und kursiv ist. Eine Schriftfamilie ist der komplette Satz von Stilen. Das Einbinden einer solchen Schriftart in ein Dokument oder Design erfolgt durch das Definieren einer separaten `@font-face`-Deklaration für jede Schriftressource.

Die Eigenschaften, At-Regeln und Deskriptoren des CSS-Schriftarten-Moduls ermöglichen das Herunterladen mehrerer Variationen einer Schriftart. Sie definieren auch die zu verwendende Schriftdatei für eine bestimmte Schrifteigenschaft sowie Fallback-Anweisungen für den Fall, dass eine Ressource nicht geladen werden kann. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess des Zuordnens eines gegebenen Satzes von CSS-Schrifteigenschaften zu einem einzigen Schriftschnitt.

Das CSS-Schriftarten-Modul unterstützt außerdem variable Schriftarten. Im Gegensatz zu regulären Schriftarten, bei denen jeder Stil als separate Schriftdatei implementiert wird, können variable Schriftarten alle Stile innerhalb einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face`-Deklaration können Sie eine variable Schriftart importieren, die alle Stile umfasst. Abhängig von der Schriftart kann dies eine Vielzahl von Schriftvarianten einschließen. Variable Schriftarten sind Teil der OpenType-Schriftartenspezifikation.

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
- {{cssxref("font-synthesis-position")}}
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

Die Spezifikation definiert auch die `font-width`-Eigenschaft, die bisher von keinem Browser unterstützt wird.

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

Die Spezifikation definiert auch die Deskriptoren `font-language-override`, `font-named-instance`, `font-width`, `font-size`, `subscript-position-override`, `subscript-size-override`, `superscript-position-override` und `superscript-size-override`, die bisher von keinem Browser unterstützt werden.

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

- [Lernen: Grundlegende Text- und Schriftartengestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
  - : Dieser Lernartikel für Anfänger behandelt die grundlegenden Prinzipien der Text- und Schriftartengestaltung. Er behandelt, wie man das Schriftgewicht, die Familie und den Stil mit Hilfe der {{cssxref("font")}}-Kurzform einstellt sowie Texte ausrichtet und Zeilen- und Zeichenabstand verwaltet.

- [Lernen: Web-Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)
  - : Dieser Lernartikel für Anfänger erklärt, wie man benutzerdefinierte Schriftarten auf Ihrer Webseite verwendet, um vielfältigere und individuellere Textgestaltungen zu ermöglichen.

- [OpenType-Schriftartenmerkmale](/de/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)
  - : Schriftmerkmale oder -varianten beziehen sich auf unterschiedliche Glyphen oder Zeichenstile innerhalb einer OpenType-Schriftart. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenkombinationen), Brüche, Zahlenstile und viele weitere. Diese werden alle als OpenType-Funktionen bezeichnet und sind über bestimmte Eigenschaften und eine Low-Level-Steuereigenschaft — {{cssxref("font-feature-settings")}} — im Web verfügbar. Dieser Artikel bietet alles, was Sie über die Verwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

- [Variable Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung variabler Schriftarten.

- [Verbesserung der Schriftartenleistung](/de/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - : Dieser Artikel, Teil des CSS-Leistungsleitfadens, diskutiert das Laden von Schriftarten, das Laden nur der erforderlichen Glyphen und das Definieren von Anzeigeverhalten für Schriftarten mit dem `font-display`-Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS-Eigenschaft
- {{cssxref("line-height")}} CSS-Eigenschaft
- {{cssxref("text-transform")}} CSS-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftartenladen](/de/docs/Web/CSS/CSS_font_loading) Modul
- [CSS-Schriftartenladen-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS-Text](/de/docs/Web/CSS/CSS_text) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
