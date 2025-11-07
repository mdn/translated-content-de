---
title: CSS-Fonts
short-title: Fonts
slug: Web/CSS/Guides/Fonts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS Fonts**-Modul definiert Schrift-Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schriftart zu definieren, wie die Familie, Größe und Stärke, und die Glyphenvarianten zu wählen, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schrift ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichencodes auf Glyphen abbildet, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis eines Schriftstils darstellen. Eine Schriftfamilie ist eine Gruppe von Schriften, die gemeinsame Designstile und Schriftschnitte teilen, wobei jedes Mitglied der Gruppe unterschiedliche Möglichkeiten bietet, die Glyphen darzustellen, variierend durch Strichstärke, Neigung oder relative Breite, unter anderen Attributen. Eine Schrift stellt typischerweise einen einzelnen Stil eines Schriftsatzes dar, wie Helvetica, das fett und kursiv ist. Eine Schriftfamilie ist die vollständige Sammlung von Stilen. Das Einbinden einer solchen Schrift in ein Dokument oder Design erfolgt durch die Definition einer separaten `@font-face`-Deklaration für jede Schriftressource.

Die Eigenschaften, Regelanweisungen und Deskriptoren des CSS-Fonts-Moduls erlauben das Herunterladen mehrerer Varianten einer Schrift. Sie definieren auch die Schriftdatei, die für ein bestimmtes Schriftmerkmal verwendet wird, zusammen mit Rückfall-Anweisungen, falls das Laden einer Ressource fehlschlägt. Der CSS-Schriftauswahl-Mechanismus beschreibt den Prozess, wie ein gegebenes Set von CSS-Schrifteigenschaften mit einem einzelnen Schriftschnitt abgeglichen wird.

Das CSS-Fonts-Modul unterstützt auch variable Schriften. Im Gegensatz zu regulären Schriften, bei denen jeder Stil als separate Schriftdatei implementiert ist, können variable Schriften alle Stile in einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face`-Deklaration können Sie eine variable Schrift importieren, die alle Stile umfasst. Abhängig von der Schrift kann dies eine Vielzahl von Schriftvarianten umfassen. Variable Schriften sind ein Teil der OpenType-Schriftspezifikation.

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
- {{cssxref("font-synthesis-position")}}
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

Die Spezifikation definiert auch die `font-width`-Eigenschaft, die von keinem Browser unterstützt wird.

### Regelanweisungen und Deskriptoren

- Regelanweisung: {{cssxref("@font-face")}}
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

Das CSS-Fonts-Modul definiert auch die `font-language-override`, `font-named-instance`, `font-width`, `font-size`, `subscript-position-override`, `subscript-size-override`, `superscript-position-override` und `superscript-size-override` Deskriptoren. Derzeit unterstützen keine Browser diese Features.

- Regelanweisung: {{cssxref("@font-feature-values")}}

Das CSS-Fonts-Modul definiert auch den {{cssxref("@font-feature-values/font-display", "font-display")}} Deskriptor. Derzeit unterstützen keine Browser dieses Feature.

- Regelanweisung: {{cssxref("@font-palette-values")}}
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
  - : Dieser Lernartikel für Anfänger deckt die grundlegenden Grundlagen der Text- und Schriftgestaltung ab. Er behandelt, wie man das Schriftgewicht, die Familie und den Stil mit der {{cssxref("font")}}-Abkürzung einstellt und wie man Text ausrichtet sowie Zeilen- und Buchstabenabstände verwaltet.

- [Lernen: Web-Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)
  - : Dieser Lernartikel für Anfänger erklärt, wie Sie benutzerdefinierte Schriften auf Ihrer Webseite verwenden können, um vielfältigere und benutzerdefinierte Textgestaltungen zu ermöglichen.

- [OpenType-Schriftmerkmale](/de/docs/Web/CSS/Guides/Fonts/OpenType_fonts)
  - : Schriftmerkmale oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schrift enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen der Abstände zwischen bestimmten Buchstabenkombinationen), Brüche, Zahlenstile und viele andere. Diese werden alle als OpenType-Features bezeichnet und können im Web über spezifische Eigenschaften und eine niedrige Steuereigenschaft – {{cssxref("font-feature-settings")}} – genutzt werden. Dieser Artikel bietet Ihnen alles, was Sie über die Anwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

- [Variable Schriften](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung von variablen Schriften.

- [Verbesserung der Schriftperformance](/de/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - : Dieser Artikel, Teil des CSS-Performance-Leitfadens, behandelt das Laden von Schriften, das Laden nur der erforderlichen Glyphen und die Festlegung des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor.

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
