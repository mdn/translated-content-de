---
title: CSS-Werte und -Einheiten
slug: Web/CSS/CSS_Values_and_Units
l10n:
  sourceCommit: 464b47905d85e9bc9ce2387d3c20b36f2283af5f
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Eigenschafts-/Wertepaar. Der Wert kann je nach Eigenschaft verschiedene Formen annehmen, wie z.B. eine einzelne Ganzzahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Elemente; einige Werte haben Einheiten, andere nicht. Jede Eigenschaft akzeptiert auch die CSS-weit gültigen Werte. Das CSS Werte und Einheiten Modul definiert die Datentypen – Werte und Einheiten –, die CSS-Eigenschaften akzeptieren. Dieses Modul definiert auch die Syntax zur Definition von CSS-Werten oder die formelle Grammatik, die zur Definition der Menge der gültigen Werte für jede CSS-Eigenschaft und -Funktion verwendet wird.

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
- {{cssxref("if()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

Zusätzliche Funktionen, einschließlich `calc-mix()`, `crossorigin()`, `first-valid()`, `if()`, `integrity()`, `progress()`, `random()`, `random-item()`, `referrerpolicy()`, `src()`, `type()`, und `toggle()`, sind in den Spezifikationen definiert, aber noch nicht in Browsern implementiert.

### Datentypen

- [`<angle-percentage>`](/de/docs/Web/CSS/angle-percentage)
- [`<angle>`](/de/docs/Web/CSS/angle)
- [`<animation-timeline>`](/de/docs/Web/CSS/animation-timeline)
- [`<attr-name>`](/de/docs/Web/CSS/attr#attr-name)
- [`<attr-type>`](/de/docs/Web/CSS/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{Glossary("NaN", "NaN")}})
- [`<calc-size-basis>`](/de/docs/Web/CSS/calc-size#calc-size-basis)
- [`<calc-sum>`](/de/docs/Web/CSS/calc-sum)
- [`<custom-ident>`](/de/docs/Web/CSS/custom-ident)
- [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident)
- [`<dimension>`](/de/docs/Web/CSS/dimension)
- [`<easing-function>`](/de/docs/Web/CSS/easing-function)
- [`<first-valid()>`](/de/docs/Web/CSS)
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
- [`<url>`](/de/docs/Web/CSS/url_value)
- [`<url-modifier>`](/de/docs/Web/CSS/url_function#url-modifier)
- [`<view-timeline-name>`](/de/docs/Web/CSS/view-timeline-name)

#### Einheiten

- [`%` (Prozent)](/de/docs/Web/CSS/length#cap)
- [`cap`](/de/docs/Web/CSS/length#cap)
- [`ch`](/de/docs/Web/CSS/length#ch)
- [`cm`](/de/docs/Web/CSS/length#cm)
- [`deg`](/de/docs/Web/CSS/angle#deg)
- [`dpcm`](/de/docs/Web/CSS/resolution#dpcm)
- [`dpi`](/de/docs/Web/CSS/resolution#dpi)
- [`dppx`](/de/docs/Web/CSS/resolution#dppx)
- [`dvb`](/de/docs/Web/CSS/length#vb)
- [`dvh`](/de/docs/Web/CSS/length#vh)
- [`dvi`](/de/docs/Web/CSS/length#vi)
- [`dvmax`](/de/docs/Web/CSS/length#vmax)
- [`dvmin`](/de/docs/Web/CSS/length#vmin)
- [`dvw`](/de/docs/Web/CSS/length#vw)
- [`em`](/de/docs/Web/CSS/length#em)
- [`ex`](/de/docs/Web/CSS/length#ex)
- [`grad`](/de/docs/Web/CSS/angle#grad)
- [`Hz`](/de/docs/Web/CSS/frequency#hz)
- [`ic`](/de/docs/Web/CSS/length#ic)
- [`in`](/de/docs/Web/CSS/length#in)
- [`kHz`](/de/docs/Web/CSS/frequency#khz)
- [`lh`](/de/docs/Web/CSS/length#lh)
- [`lvb`](/de/docs/Web/CSS/length#vb)
- [`lvh`](/de/docs/Web/CSS/length#vh)
- [`lvi`](/de/docs/Web/CSS/length#vi)
- [`lvmax`](/de/docs/Web/CSS/length#vmax)
- [`lvmin`](/de/docs/Web/CSS/length#vmin)
- [`lvw`](/de/docs/Web/CSS/length#vw)
- [`mm`](/de/docs/Web/CSS/length#mm)
- [`ms`](/de/docs/Web/CSS/time#ms)
- [`pc`](/de/docs/Web/CSS/length#pc)
- [`pt`](/de/docs/Web/CSS/length#pt)
- [`px`](/de/docs/Web/CSS/length#px)
- [`Q`](/de/docs/Web/CSS/length#q)
- [`rad`](/de/docs/Web/CSS/angle#rad)
- [`rcap`](/de/docs/Web/CSS/length#rcap)
- [`rch`](/de/docs/Web/CSS/length#rch)
- [`rem`](/de/docs/Web/CSS/length#rem)
- [`rex`](/de/docs/Web/CSS/length#rex)
- [`ric`](/de/docs/Web/CSS/length#ric)
- [`rlh`](/de/docs/Web/CSS/length#rlh)
- [`s`](/de/docs/Web/CSS/time#s)
- [`svb`](/de/docs/Web/CSS/length#vb)
- [`svh`](/de/docs/Web/CSS/length#vh)
- [`svi`](/de/docs/Web/CSS/length#vi)
- [`svmax`](/de/docs/Web/CSS/length#vmax)
- [`svmin`](/de/docs/Web/CSS/length#vmin)
- [`svw`](/de/docs/Web/CSS/length#vw)
- [`turn`](/de/docs/Web/CSS/angle#turn)
- [`vb`](/de/docs/Web/CSS/length#vb)
- [`vh`](/de/docs/Web/CSS/length#vh)
- [`vi`](/de/docs/Web/CSS/length#vi)
- [`vmax`](/de/docs/Web/CSS/length#vmax)
- [`vmin`](/de/docs/Web/CSS/length#vmin)
- [`vw`](/de/docs/Web/CSS/length#vw)
- [`x`](/de/docs/Web/CSS/resolution#x)

[Flex-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#flex_units) (`fr`) und [Container-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) sind in den Modulen [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und [CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) definiert.

#### Einheiteneinteilungen

- [Absolute Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Winkeleinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Standard-Viewport-Einheiten](/de/docs/Web/CSS/length#default_viewport_units) (`vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Dynamische Viewport-Einheiten](/de/docs/Web/CSS/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Frequenzeinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Große Viewport-Prozent-Einheiten](/de/docs/Web/CSS/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Lokal schriftrelativ-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Physikalische Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Relative Längeneinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Auflösungseinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#resolution_units) (`dpcm`, `dpi`, `dppx`, `x`)
- [Root schriftrelativ-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Kleine Viewport-Prozent-Einheiten](/de/docs/Web/CSS/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Zeiteinheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#time_units) (`ms`, `s`)
- [Viewport-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Visuelle Winkeleinheit](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`px`)

### Schlüsselkonzepte

- {{Glossary("Advance_measure", "Advance measure")}}
- [Geklammerte Bereichsnotation](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#bracketed_range_notation_minmax)
- [Komponent-Wert-Kombinatoren](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#component_value_combinators)
- [CSS-weit gültige Schlüsselwörter](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords)
- {{Glossary("Device_pixel", "Gerätepixel")}}
- [Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
- {{Glossary("Identifier", "Identifier")}}
- {{Glossary("Interpolation", "Interpolation")}}
- {{Glossary("Keyword", "Schlüsselwort")}}
- [Mathematische Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions)
- [Numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)
- {{Glossary("Origin", "Origin")}}
- {{Glossary("Pixel", "Pixel")}}
- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- {{Glossary("URL", "URL")}}
- [Wert-Definition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)

## Leitfäden

- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
  - : Einführung in CSS-Datentypen, die typische Werte definieren, die von CSS-Eigenschaften und -Funktionen akzeptiert werden.

- [Numerische Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)
  - : Überblick über die numerischen Datentypen, einschließlich Ganzzahlen, Zahlen, Prozentsätze und Dimensionen sowie relative und absolute Dimensionen, Winkel und Zeiteinheiten.

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
  - : Überblick über die textuellen Datentypen, einschließlich vordefinierter Schlüsselwortwerte, globaler CSS-Schlüsselwortwerte und URLs.

- [CSS-Wert-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
  - : Überblick über die CSS-Anweisungen, die spezielle Datenverarbeitung oder Berechnungen aufrufen, um einen CSS-Wert für eine CSS-Eigenschaft zurückzugeben.

- [Verwendung von CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/Using_CSS_math_functions)
  - : Die CSS-Mathematikfunktionen, die es ermöglichen, einen Eigenschaftswert als mathematischen Ausdruck zu schreiben.

- [Wert-Definition-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
  - : Die formelle Grammatik zur Definition der Menge an gültigen Werten für CSS-Eigenschaften und -Funktionen.

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : Ein Blick auf einige der am häufigsten verwendeten Wertetypen, was sie sind und wie sie funktionieren.

## Verwandt

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
  - {{cssxref("&lt;flex&gt;")}}
  - [Flex-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#flex_units) (`fr`)

- [CSS-bedingte Regeln](/de/docs/Web/CSS/CSS_conditional_rules) Modul
  - [Container-Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

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
