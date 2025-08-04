---
title: CSS-Schriften
slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Das **CSS-Schriften**-Modul definiert schriftbezogene Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schrift zu definieren, wie z.B. ihre Familie, Größe und Gewicht, sowie die Glyphenvarianten, die verwendet werden sollen, wenn mehrere für ein einzelnes Zeichen verfügbar sind.

Eine Schrift ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichenkodierungen auf Glyphen abbildet, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis einer Schriftart repräsentieren. Eine Schriftfamilie ist eine Gruppe von Schriften, die gemeinsame Designstile und Schrifteigenschaften teilen, wobei jedes Mitglied der Gruppe unterschiedliche Möglichkeiten zur Anzeige der Glyphen bietet, variierend in Strichstärke, Neigung oder relativer Breite, unter anderen Attributen. Eine Schrift repräsentiert in der Regel einen einzelnen Stil einer Schriftart, wie Helvetica, das fett und kursiv ist. Eine Schriftfamilie ist das vollständige Set von Stilen. Das Einbinden einer solchen Schrift in ein Dokument oder Design erfolgt durch die Definition einer separaten `@font-face`-Deklaration für jede Schriftressource.

Die Eigenschaften, At-Regeln und Deskriptoren des CSS-Schriftenmoduls ermöglichen das Herunterladen mehrerer Variationen einer Schrift. Sie definieren auch die zu verwendende Schriftdatei für ein bestimmtes Schriftsmerkmal, zusammen mit Fallback-Anweisungen für den Fall, dass eine Ressource nicht geladen werden kann. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess des Abgleichs eines gegebenen Satzes von CSS-Schrifteigenschaften mit einem einzelnen Schriftstil.

Das CSS-Schriftenmodul unterstützt auch variable Schriften. Anders als reguläre Schriften, bei denen jeder Stil als separate Schriftdatei implementiert wird, können variable Schriften alle Stile innerhalb einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face`-Deklaration können Sie eine variable Schrift importieren, die alle Stile umfasst. Abhängig von der Schrift kann dies eine Vielzahl von Schriftvarianten beinhalten. Variable Schriften sind Teil der OpenType-Schriftenspezifikation.

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

Die Spezifikation definiert auch die `font-width` Eigenschaft, die von keinem Browser derzeit unterstützt wird.

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

Das CSS-Schriftenmodul definiert auch die Deskriptoren `font-language-override`, `font-named-instance`, `font-width`, `font-size`, `subscript-position-override`, `subscript-size-override`, `superscript-position-override` und `superscript-size-override`. Derzeit unterstützt kein Browser diese Features.

- At-Regel: {{cssxref("@font-feature-values")}}

Das CSS-Schriftenmodul definiert auch den Deskriptor {{cssxref("@font-feature-values/font-display", "font-display")}}. Derzeit unterstützt kein Browser dieses Feature.

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

- [Lernen: Grundlegende Text- und Schriftstile](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
  - : Dieser Anfängerleitfaden behandelt die grundlegenden Prinzipien der Text- und Schriftstile. Er behandelt, wie man die Schriftstärke, -familie und -stil durch Verwendung der {{cssxref("font")}} Kurzform setzt und wie man Text ausrichtet sowie den Linien- und Buchstabenabstand verwaltet.

- [Lernen: Web-Schriften](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)
  - : Dieser Anfängerleitfaden erklärt, wie man benutzerdefinierte Schriften auf Ihrer Webseite verwendet, um vielfältigere und benutzerdefinierte Textstile zu ermöglichen.

- [OpenType-Schriftfeatures](/de/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)
  - : Schriftfeatures oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile innerhalb einer OpenType-Schrift. Dazu gehören Dinge wie Ligaturen (spezielle Glyphen, die Zeichen kombinieren wie 'fi' oder 'ffl'), Kerning (Anpassungen des Abstands zwischen spezifischen Buchstabenpaaren), Brüche, Zahlenstile und viele weitere. Diese werden alle als OpenType-Features bezeichnet und sind im Web über spezifische Eigenschaften und eine low-level Kontroll-Eigenschaft — {{cssxref("font-feature-settings")}} — verfügbar. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftfeatures in CSS wissen müssen.

- [Variable Schriften](/de/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung von variablen Schriften.

- [Verbesserung der Schriftenleistung](/de/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - : Dieser Artikel, Teil des CSS-Leistungsleitfadens, behandelt das Laden von Schriften, das Laden nur der erforderlichen Glyphen und das Definieren des Schriftdarstellungsverhaltens mit dem `font-display` Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS-Eigenschaft
- {{cssxref("line-height")}} CSS-Eigenschaft
- {{cssxref("text-transform")}} CSS-Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Schriftlade](/de/docs/Web/CSS/CSS_font_loading) Modul
- [CSS Schriftlade-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS Text](/de/docs/Web/CSS/CSS_text) Modul
- [CSS Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul
