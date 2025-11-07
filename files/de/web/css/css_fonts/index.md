---
title: CSS-Schriften
slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **CSS-Schriften**-Modul definiert eigenschaftsbezogene Schrifteigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schrift zu definieren, wie ihre Familie, Größe und Gewicht, sowie die Glyphenvarianten, die verwendet werden sollen, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schriftart ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichencodes auf Glyphen abbildet, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis einer Schriftdarstellung repräsentieren. Eine Schriftfamilie ist eine Gruppe von Schriften, die gemeinsame Designstile und Schrifteigenschaften teilen, wobei jedes Mitglied der Gruppe verschiedene Möglichkeiten bietet, die Glyphen anzuzeigen, sich durch Strichstärke, Neigung oder relative Breite unterscheidet, neben anderen Attributen. Eine Schriftart repräsentiert typischerweise einen einzelnen Stil einer Schriftart, wie Helvetica in Fett und Kursiv. Eine Schriftfamilie ist der gesamte Satz von Stilen. Das Einbinden einer solchen Schrift in ein Dokument oder Design erfolgt durch eine separate `@font-face`-Deklaration für jede Schriftressource.

Die Eigenschaften, At-Regeln und Deskriptoren des CSS-Schriften-Moduls ermöglichen das Herunterladen mehrerer Variationen einer Schrift. Sie definieren auch die zu verwendende Schriftdatei für eine bestimmte Schrifteigenschaft sowie Anweisungen zur Rückfalloption, falls das Laden einer Ressource fehlschlägt. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess, bei dem ein gegebenes Set von CSS-Schrifteigenschaften mit einer einzelnen Schriftzeichenfläche abgeglichen wird.

Das CSS-Schriften-Modul unterstützt auch variable Schriften. Im Gegensatz zu regulären Schriften, bei denen jeder Stil als separate Schriftdatei implementiert wird, können variable Schriften alle Stile in einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face`-Deklaration können Sie eine variable Schrift einbinden, die alle Stile enthält. Je nach Schrift kann dies eine Vielzahl von Schriftvarianten beinhalten. Variable Schriften sind Teil der OpenType-Schriftauszeichnung.

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

Das CSS-Schriften-Modul definiert auch die Deskriptoren `font-language-override`, `font-named-instance`, `font-width`, `font-size`, `subscript-position-override`, `subscript-size-override`, `superscript-position-override` und `superscript-size-override`. Derzeit unterstützen keine Browser diese Funktionen.

- At-Regel: {{cssxref("@font-feature-values")}}

Das CSS-Schriften-Modul definiert auch den Deskriptor {{cssxref("@font-feature-values/font-display", "font-display")}}. Derzeit unterstützen keine Browser diese Funktion.

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

- [Lernen: Grundlegende Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
  - : Dieser Anfängerartikel behandelt die grundlegenden Grundlagen der Text- und Schriftstilierung. Er behandelt, wie man das Schriftgewicht, die Familie und den Stil festlegt, indem man die {{cssxref("font")}} Kurzform verwendet, und wie man Text ausrichtet sowie den Zeilen-, und Buchstabenzwischenraum verwaltet.

- [Lernen: Webschriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)
  - : Dieser Anfängerartikel erklärt, wie man benutzerdefinierte Schriften auf Ihrer Webseite verwendet, um eine vielfältigere und angepasste Textstilierung zu ermöglichen.

- [OpenType-Schriftmerkmale](/de/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)
  - : Schriftmerkmale oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schrift enthalten sind. Dazu gehören z.B. Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaarungen), Brüche, Zahlenstile und viele andere. Dies sind alles OpenType-Eigenschaften, die über spezifische Eigenschaften und eine Low-Level-Kontrolleigenschaft – {{cssxref("font-feature-settings")}} – genutzt werden können. Dieser Artikel bietet alles Wissenswerte zur Verwendung von OpenType-Schriftmerkmalen in CSS.

- [Variable Schriftarten](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
  - : Dieser Artikel hilft Ihnen, den Einstieg in die Verwendung von variablen Schriftarten zu erleichtern.

- [Verbesserung der Schriftleistung](/de/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - : Dieser Artikel, Teil des CSS-Leistungs-Leitfadens, behandelt das Schriftarten-Laden, das Laden nur der erforderlichen Glyphen und das Definieren des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS-Eigenschaft
- {{cssxref("line-height")}} CSS-Eigenschaft
- {{cssxref("text-transform")}} CSS-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftarten Laden](/de/docs/Web/CSS/CSS_font_loading) Modul
- [CSS-Schriftarten Lade-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS-Text](/de/docs/Web/CSS/CSS_text) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
