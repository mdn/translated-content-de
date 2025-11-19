---
title: CSS-Schriften
short-title: Fonts
slug: Web/CSS/Guides/Fonts
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Das **CSS-Fonts-Modul** definiert schriftbezogene Eigenschaften und wie Schriftressourcen geladen werden. Es ermöglicht Ihnen, den Stil einer Schrift zu definieren, wie zum Beispiel ihre Familie, Größe und Gewicht sowie die Glyphenvarianten, die verwendet werden sollen, wenn für ein einzelnes Zeichen mehrere verfügbar sind.

Eine Schrift ist eine Ressourcendatei, die die visuelle Darstellung von Zeichen enthält und Zeichencodes zu Glyphen zuweist, die Buchstaben, Zahlen, Satzzeichen und sogar Emojis einer Schriftart darstellen. Eine Schriftfamilie ist eine Gruppe von Schriften, die gemeinsame Designstile und Schriftsatzeigenschaften teilen, wobei jedes Mitglied der Gruppe verschiedene Darstellungen der Glyphen bietet, die je nach Strichstärke, Neigung oder relativer Breite variieren, unter anderem. Eine Schrift stellt typischerweise einen einzelnen Stil einer Schriftart dar, wie beispielsweise Helvetica in fett und kursiv. Eine Schriftfamilie ist die vollständige Menge an Stilen. Das Einbinden einer solchen Schrift in ein Dokument oder Design erfolgt durch die Definition einer separaten `@font-face`-Deklaration für jede Schriftressource.

Die Eigenschaften, At-Regeln und Deskriptoren des CSS-Fonts-Moduls ermöglichen das Herunterladen mehrerer Schriftvariationen. Sie definieren auch die zu verwendende Schriftdatei für ein bestimmtes Schriftsatzmerkmal zusammen mit Fallback-Anweisungen, falls eine Ressource nicht geladen werden kann. Der CSS-Schriftauswahlmechanismus beschreibt den Prozess des Zuordnens einer gegebenen Menge von CSS-Schrifteigenschaften zu einem einzelnen Schriftbild.

Das CSS-Fonts-Modul unterstützt auch variable Schriften. Im Gegensatz zu regulären Schriften, bei denen jeder Stil als separate Schriftdatei implementiert wird, können variable Schriften alle Stile innerhalb einer einzigen Datei enthalten. Durch die Verwendung einer einzigen `@font-face`-Deklaration können Sie eine variable Schrift importieren, die alle Stile enthält. Abhängig von der Schriftart kann dies eine Vielzahl von Schriftvarianten beinhalten. Variable Schriften sind Teil der OpenType-Schriftenspezifikation.

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

Das CSS-Fonts-Modul definiert auch die Deskriptoren `font-language-override`, `font-named-instance`, `font-width`, `font-size`, `subscript-position-override`, `subscript-size-override`, `superscript-position-override`, und `superscript-size-override`. Derzeit werden diese Funktionen von keinem Browser unterstützt.

- At-Regel: {{cssxref("@font-feature-values")}}

Das CSS-Fonts-Modul definiert auch den {{cssxref("@font-feature-values/font-display", "font-display")}} Deskriptor. Derzeit wird diese Funktion von keinem Browser unterstützt.

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

- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
  - : Dieser Anfängerkurs behandelt die grundlegenden Grundlagen der Text- und Schriftgestaltung. Er behandelt, wie man das Schriftgewicht, die Schriftfamilie und den Stil mit der {{cssxref("font")}}-Kurzform einstellt und wie man Text ausrichtet sowie Zeilen- und Buchstabenzwischenräume verwaltet.

- [Lernen: Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts)
  - : Dieser Anfängerkurs erklärt, wie benutzerdefinierte Schriften auf Ihrer Webseite verwendet werden können, um eine vielfältigere und benutzerdefinierte Textgestaltung zu ermöglichen.

- [OpenType-Schriftenmerkmale](/de/docs/Web/CSS/Guides/Fonts/OpenType_fonts)
  - : Schriftmerkmale oder -varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schrift enthalten sind. Dazu gehören Dinge wie Ligaturen (spezielle Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaarungen), Brüche, Ziffernstile und eine Reihe anderer. Diese werden alle als OpenType-Merkmale bezeichnet und können im Web über spezifische Eigenschaften und eine Kontrolleigenschaft auf niedriger Ebene — {{cssxref("font-feature-settings")}} — genutzt werden. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftenmerkmalen in CSS wissen müssen.

- [Web Open Font Format (WOFF)](/de/docs/Web/CSS/Guides/Fonts/WOFF)
  - : WOFF verwendet eine komprimierte Version der gleichen tabellenbasierten `sfnt`-Struktur, die von TrueType, OpenType und Open Font Format verwendet wird, fügt jedoch Metadaten und Datenstrukturen zur privaten Verwendung hinzu, einschließlich vordefinierter Felder, die es Schriftgiesereien und Anbietern ermöglichen, Lizenzinformationen bereitzustellen, falls gewünscht.

- [Variable Schriften](/de/docs/Web/CSS/Guides/Fonts/Variable_fonts)
  - : Dieser Artikel hilft Ihnen beim Einstieg in die Verwendung variabler Schriften.

- [Verbesserung der Schriftleistung](/de/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - : Dieser Artikel, Teil des CSS-Leitfadens zur Leistungsverbesserung, diskutiert das Schriftladen, das Laden nur der benötigten Glyphen und die Definition des Schriftanzeigeverhaltens mit dem `font-display`-Deskriptor.

## Verwandte Konzepte

- {{cssxref("letter-spacing")}} CSS Eigenschaft
- {{cssxref("line-height")}} CSS Eigenschaft
- {{cssxref("text-transform")}} CSS Eigenschaft

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [CSS-Schriftladen](/de/docs/Web/CSS/Guides/Font_loading) Modul
- [CSS-Schriftlade-API](/de/docs/Web/API/CSS_Font_Loading_API)
- [CSS-Text](/de/docs/Web/CSS/Guides/Text) Modul
- [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) Modul
