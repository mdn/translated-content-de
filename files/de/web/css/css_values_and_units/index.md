---
title: CSS-Werte und Einheiten
slug: Web/CSS/CSS_Values_and_Units
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Eigenschafts-/Werte-Paar. Der Wert kann je nach Eigenschaft verschiedene Formen annehmen, wie z.B. ein einzelner Integer, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Elemente; einige Werte haben Einheiten, andere nicht. Jede Eigenschaft akzeptiert auch die CSS-weit gültigen Werte. Das Modul für CSS-Werte und -Einheiten definiert die Datentypen – Werte und Einheiten –, die CSS-Eigenschaften akzeptieren. Dieses Modul definiert auch die CSS-Wertdefinitionssyntax oder formale Grammatik, die verwendet wird, um die Menge der gültigen Werte für jede CSS-Eigenschaft und -Funktion festzulegen.

## Referenz

### Eigenschaften

- {{cssxref("interpolate-size")}}

### Funktionen

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url()")}}

Zusätzliche Funktionen, darunter `calc-mix()`, `crossorigin()`, `first-valid()`, `if()`, `integrity()`, `progress()`, `random()`, `random-item()`, `referrerpolicy()`, `sibling-count()`, `sibling-index()`, `src()`, `type()`, und `toggle()`, sind in den Spezifikationen definiert, aber noch nicht in Browsern implementiert.

### Datentypen

- [`<angle-percentage>`](/de/docs/Web/CSS/angle-percentage)
- [`<angle>`](/de/docs/Web/CSS/angle)
- [`<animation-timeline>`](/de/docs/Web/CSS/animation-timeline)
- [`<attr-name>`](/de/docs/Web/CSS/attr#attr-name)
- [`<attr-type>`](/de/docs/Web/CSS/attr#attr-type)
- [`<attr-unit>`](/de/docs/Web/CSS/attr#attr-unit)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{Glossary("NaN", "NaN")}})
- [`<calc-size-basis>`](/de/docs/Web/CSS/calc-size#calc-size-basis)
- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)
- [`<custom-ident>`](/de/docs/Web/CSS/custom-ident)
- [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)
- [`<dimension>`](/de/docs/Web/CSS/dimension)
- [`<easing-function>`](/de/docs/Web/CSS/easing-function)
- [`<first-valid()>`](/de/docs/Web/CSS/)
- [`<frequency>`](/de/docs/Web/CSS/frequency)
- [`<frequency-percentage>`](/de/docs/Web/CSS/frequency-percentage)
- [`<ident>`](/de/docs/Web/CSS/ident)
- [`<integer>`](/de/docs/Web/CSS/integer)
- [`<length-percentage>`](/de/docs/Web/CSS/length-percentage)
- [`<length>`](/de/docs/Web/CSS/length)
- [`<number>`](/de/docs/Web/CSS/number)
- [`<percentage>`](/de/docs/Web/CSS/percentage)
- [`<position>`](/de/docs/Web/CSS/position)
- [`<ratio>`](/de/docs/Web/CSS/ratio)
- [`<resolution>`](/de/docs/Web/CSS/resolution)
- [`<rounding-strategy>`](/de/docs/Web/CSS/round#rounding-strategy) (`down`, `up`, `to-zero`)
- [`<string>`](/de/docs/Web/CSS/string)
- [`<syntax>`](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [`<time-percentage>`](/de/docs/Web/CSS/time-percentage)
- [`<time>`](/de/docs/Web/CSS/time)
- [`<url>`](/de/docs/Web/CSS/url)
- [`<url-modifier>`](/de/docs/Web/CSS/url_function#url-modifier)
- [`<view-timeline-name>`](/de/docs/Web/CSS/view-timeline-name)

#### Einheiten

- [`%` (percentage)](/de/docs/Web/CSS/length#cap)
- [`cap`](/de/docs/Web/CSS/length#cap)
- [`ch`](/de/docs/Web/CSS/length#ch)
- [`cm`](/de/docs/Web/CSS/length#cm)
- [`deg`](/de/docs/Web/CSS/length#deg)
- [`dpcm`](/de/docs/Web/CSS/length#dpcm)
- [`dpi`](/de/docs/Web/CSS/length#dpi)
- [`dppx`](/de/docs/Web/CSS/length#dppx)
- [`dvb`](/de/docs/Web/CSS/length#dvb)
- [`dvh`](/de/docs/Web/CSS/length#dvh)
- [`dvi`](/de/docs/Web/CSS/length#dvi)
- [`dvmax`](/de/docs/Web/CSS/length#dvmax)
- [`dvmin`](/de/docs/Web/CSS/length#dvmin)
- [`dvw`](/de/docs/Web/CSS/length#dvw)
- [`em`](/de/docs/Web/CSS/length#em)
- [`ex`](/de/docs/Web/CSS/length#ex)
- [`grad`](/de/docs/Web/CSS/length#grad)
- [`Hz`](/de/docs/Web/CSS/length#Hz)
- [`ic`](/de/docs/Web/CSS/length#ic)
- [`in`](/de/docs/Web/CSS/length#in)
- [`kHz`](/de/docs/Web/CSS/length#kHz)
- [`left`](/de/docs/Web/CSS/length#left)
- [`lh`](/de/docs/Web/CSS/length#lh)
- [`lvb`](/de/docs/Web/CSS/length#lvb)
- [`lvh`](/de/docs/Web/CSS/length#lvh)
- [`lvi`](/de/docs/Web/CSS/length#lvi)
- [`lvmax`](/de/docs/Web/CSS/length#lvmax)
- [`lvmin`](/de/docs/Web/CSS/length#lvmin)
- [`lvw`](/de/docs/Web/CSS/length#lvw)
- [`mm`](/de/docs/Web/CSS/length#mm)
- [`ms`](/de/docs/Web/CSS/length#ms)
- [`pc`](/de/docs/Web/CSS/length#pc)
- [`pi`](/de/docs/Web/CSS/length#pi)
- [`pt`](/de/docs/Web/CSS/length#pt)
- [`px`](/de/docs/Web/CSS/length#px)
- [`Q`](/de/docs/Web/CSS/length#Q)
- [`rad`](/de/docs/Web/CSS/length#rad)
- [`rcap`](/de/docs/Web/CSS/length#rcap)
- [`rch`](/de/docs/Web/CSS/length#rch)
- [`rem`](/de/docs/Web/CSS/length#rem)
- [`rex`](/de/docs/Web/CSS/length#rex)
- [`ric`](/de/docs/Web/CSS/length#ric)
- [`rlh`](/de/docs/Web/CSS/length#rlh)
- [`s`](/de/docs/Web/CSS/length#s)
- [`size`](/de/docs/Web/CSS/length#size)
- [`svb`](/de/docs/Web/CSS/length#svb)
- [`svh`](/de/docs/Web/CSS/length#svh)
- [`svi`](/de/docs/Web/CSS/length#svi)
- [`svmax`](/de/docs/Web/CSS/length#svmax)
- [`svmin`](/de/docs/Web/CSS/length#svmin)
- [`svw`](/de/docs/Web/CSS/length#svw)
- [`turn`](/de/docs/Web/CSS/length#turn)
- [`up`](/de/docs/Web/CSS/length#up)
- [`vb`](/de/docs/Web/CSS/length#vb)
- [`vh`](/de/docs/Web/CSS/length#vh)
- [`vi`](/de/docs/Web/CSS/length#vi)
- [`vmax`](/de/docs/Web/CSS/length#vmax)
- [`vmin`](/de/docs/Web/CSS/length#vmin)
- [`vw`](/de/docs/Web/CSS/length#vw)
- [`x`](/de/docs/Web/CSS/length#x)

[Flex-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#flex_units) (`fr`) und [Container-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#container_units) (`cqb`,`cqh`,`cqi`,`cqmax`,`cqmin`,`cqw`) sind im [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und in den [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modulen definiert.

#### Kategorisierungen der Einheiten

- [Absolute Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Winkel-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Standardeinheiten für das Ansichtsfenster](/de/docs/Web/CSS/length#default_viewport_units) (`vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Dynamische Ansichtsfenster-Einheiten](/de/docs/Web/CSS/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Frequenz-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Große Ansichtsfenster-Prozentuale Einheiten](/de/docs/Web/CSS/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Lokale schriftrelativen Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch` ,`em`, `ex`, `ic`, `lh`)
- [Physikalische Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Relative Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Auflösungs-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#resolution_units) (`dpcm`, `dpi`, `dppx`, `x`)
- [Root-Schriftrelativen Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Kleine Ansichtsfenster-Prozentuale Einheiten](/de/docs/Web/CSS/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Zeiteinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#time_units) (`ms`, `s`)
- [Ansichtsfenster-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Visuelle Winkel-Einheit](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`px`)

### Schlüsselkonzepte

- {{Glossary("advance_measure", "Vorschubmaß")}}
- [Geklammertes Bereichsnotation](/de/docs/Web/CSS/Value_definition_syntax#bracketed_range_notation_minmax)
- [Komponentenwert-Kombinatoren](/de/docs/Web/CSS/Value_definition_syntax#component_value_combinators)
- [CSS-weit gültige Schlüsselwörter](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords)
- {{Glossary("device_pixel", "Geräte-Pixel")}}
- [Funktionale Notation](/de/docs/Web/CSS/CSS_Functions)
- {{Glossary("identifier", "Bezeichner")}}
- {{Glossary("interpolation", "Interpolation")}}
- {{Glossary("keyword", "Schlüsselwort")}}
- [Mathematische Funktion](/de/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions)
- [Numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)
- {{Glossary("origin", "Ursprung")}}
- {{Glossary("pixel", "Pixel")}}
- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- {{Glossary("URL", "URL")}}
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)

## Leitfäden

- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)

  - : Einführung in CSS-Datentypen, die typische Werte definieren, die von CSS-Eigenschaften und -Funktionen akzeptiert werden.

- [Numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)

  - : Übersicht über die numerischen Datentypen, einschließlich Ganzzahlen, Zahlen, Prozentsätze und Dimensionen sowie relative und absolute Dimensionen, Winkel und Zeiteinheiten.

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)

  - : Übersicht über die textuellen Datentypen, einschließlich vordefinierter Schlüsselwortwerte, globaler CSS-Schlüsselwortwerte und URLs.

- [CSS-Wertefunktionen](/de/docs/Web/CSS/CSS_Functions)

  - : Übersicht über die CSS-Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen CSS-Wert für eine CSS-Eigenschaft zurückzugeben.

- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)

  - : Die formale Grammatik, die verwendet wird, um die Menge der gültigen Werte für CSS-Eigenschaften und -Funktionen festzulegen.

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)

  - : Ein Einblick in einige der am häufigsten verwendeten Werttypen, was sie sind und wie sie funktionieren.

## Verwandt

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul

  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul

  - {{cssxref("&lt;flex&gt;")}}
  - [Flex-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#flex_units) (`fr`)

- [CSS-Bedingungsregeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul

  - [Container-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#container_units) (`cqb`,`cqh`,`cqi`,`cqmax`,`cqmin`,`cqw`)

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul

  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/de/docs/Web/CSS/color_value/color-mix)

- [CSS-Bilder](/de/docs/Web/CSS/CSS_images) Modul

  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
