---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Web/CSS/Guides/Values_and_units
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

Jede CSS-Deklaration besteht aus einem Paar von Eigenschaft und Wert. Der Wert kann, abhängig von der Eigenschaft, verschiedene Formen annehmen, wie eine einzelne ganze Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination unterschiedlicher Elemente; einige Werte haben Einheiten, während andere keine haben. Jede Eigenschaft akzeptiert auch die CSS-weiten Werte. Das Modul CSS-Werte und -Einheiten definiert die Datentypen — Werte und Einheiten —, die CSS-Eigenschaften akzeptieren. Dieses Modul definiert auch die Syntax zur Definition von CSS-Wertdefinitionen, oder die formale Grammatik, die verwendet wird, um die Menge gültiger Werte für jede CSS-Eigenschaft und -Funktion zu definieren.

> [!NOTE]
> Diese Seite führt in ein CSS-Modul ein. Um eine vollständige Liste aller Werte, Typen und Funktionen zu finden, die durch CSS-Spezifikationen definiert sind, siehe die [Werte](/de/docs/Web/CSS/Reference/Values) Referenzseite.

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
- {{cssxref("progress()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

Das CSS-Werte und -Einheiten-Modul führt auch die Funktionen `calc-mix()`, `crossorigin()`, `first-valid()`, `integrity()`, `random()`, `random-item()`, `referrerpolicy()`, `src()`, `type()` und `toggle()` ein. Derzeit unterstützt kein Browser diese Funktionen.

### Datentypen

- [`<angle-percentage>`](/de/docs/Web/CSS/Reference/Values/angle-percentage)
- [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle)
- [`<animation-timeline>`](/de/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`<attr-name>`](/de/docs/Web/CSS/Reference/Values/attr#attr-name)
- [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{Glossary("NaN", "NaN")}})
- [`<calc-size-basis>`](/de/docs/Web/CSS/Reference/Values/calc-size#calc-size-basis)
- [`<calc-sum>`](/de/docs/Web/CSS/Reference/Values/calc-sum)
- [`<custom-ident>`](/de/docs/Web/CSS/Reference/Values/custom-ident)
- [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)
- [`<dimension>`](/de/docs/Web/CSS/Reference/Values/dimension)
- [`<easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function)
- [`<first-valid()>`](/de/docs/Web/CSS)
- [`<ident>`](/de/docs/Web/CSS/Reference/Values/ident)
- [`<integer>`](/de/docs/Web/CSS/Reference/Values/integer)
- [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage)
- [`<length>`](/de/docs/Web/CSS/Reference/Values/length)
- [`<number>`](/de/docs/Web/CSS/Reference/Values/number)
- [`<percentage>`](/de/docs/Web/CSS/Reference/Values/percentage)
- [`<position>`](/de/docs/Web/CSS/Reference/Properties/position)
- [`<ratio>`](/de/docs/Web/CSS/Reference/Values/ratio)
- [`<resolution>`](/de/docs/Web/CSS/Reference/Values/resolution)
- [`<rounding-strategy>`](/de/docs/Web/CSS/Reference/Values/round#rounding-strategy) (`down`, `up`, `to-zero`)
- [`<string>`](/de/docs/Web/CSS/Reference/Values/string)
- [`<syntax>`](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [`<time-percentage>`](/de/docs/Web/CSS/Reference/Values/time-percentage)
- [`<time>`](/de/docs/Web/CSS/Reference/Values/time)
- [`<url>`](/de/docs/Web/CSS/Reference/Values/url_value)
- [`<url-modifier>`](/de/docs/Web/CSS/Reference/Values/url_function#url-modifier)
- [`<view-timeline-name>`](/de/docs/Web/CSS/Reference/Properties/view-timeline-name)

Das CSS-Werte und -Einheiten-Modul führt auch die Datentypen [`<frequency>`](/de/docs/Web/CSS/Reference/Values/frequency) und [`<frequency-percentage>`](/de/docs/Web/CSS/Reference/Values/frequency-percentage) ein. Derzeit unterstützt kein Browser diese Funktionen.

#### Einheiten

- [`%` (percentage)](/de/docs/Web/CSS/Reference/Values/percentage)
- [`cap`](/de/docs/Web/CSS/Reference/Values/length#cap)
- [`ch`](/de/docs/Web/CSS/Reference/Values/length#ch)
- [`cm`](/de/docs/Web/CSS/Reference/Values/length#cm)
- [`deg`](/de/docs/Web/CSS/Reference/Values/angle#deg)
- [`dpcm`](/de/docs/Web/CSS/Reference/Values/resolution#dpcm)
- [`dpi`](/de/docs/Web/CSS/Reference/Values/resolution#dpi)
- [`dppx`](/de/docs/Web/CSS/Reference/Values/resolution#dppx)
- [`dvb`](/de/docs/Web/CSS/Reference/Values/length#vb)
- [`dvh`](/de/docs/Web/CSS/Reference/Values/length#vh)
- [`dvi`](/de/docs/Web/CSS/Reference/Values/length#vi)
- [`dvmax`](/de/docs/Web/CSS/Reference/Values/length#vmax)
- [`dvmin`](/de/docs/Web/CSS/Reference/Values/length#vmin)
- [`dvw`](/de/docs/Web/CSS/Reference/Values/length#vw)
- [`em`](/de/docs/Web/CSS/Reference/Values/length#em)
- [`ex`](/de/docs/Web/CSS/Reference/Values/length#ex)
- [`grad`](/de/docs/Web/CSS/Reference/Values/angle#grad)
- [`Hz`](/de/docs/Web/CSS/Reference/Values/frequency#hz)
- [`ic`](/de/docs/Web/CSS/Reference/Values/length#ic)
- [`in`](/de/docs/Web/CSS/Reference/Values/length#in)
- [`kHz`](/de/docs/Web/CSS/Reference/Values/frequency#khz)
- [`lh`](/de/docs/Web/CSS/Reference/Values/length#lh)
- [`lvb`](/de/docs/Web/CSS/Reference/Values/length#vb)
- [`lvh`](/de/docs/Web/CSS/Reference/Values/length#vh)
- [`lvi`](/de/docs/Web/CSS/Reference/Values/length#vi)
- [`lvmax`](/de/docs/Web/CSS/Reference/Values/length#vmax)
- [`lvmin`](/de/docs/Web/CSS/Reference/Values/length#vmin)
- [`lvw`](/de/docs/Web/CSS/Reference/Values/length#vw)
- [`mm`](/de/docs/Web/CSS/Reference/Values/length#mm)
- [`ms`](/de/docs/Web/CSS/Reference/Values/time#ms)
- [`pc`](/de/docs/Web/CSS/Reference/Values/length#pc)
- [`pt`](/de/docs/Web/CSS/Reference/Values/length#pt)
- [`px`](/de/docs/Web/CSS/Reference/Values/length#px)
- [`Q`](/de/docs/Web/CSS/Reference/Values/length#q)
- [`rad`](/de/docs/Web/CSS/Reference/Values/angle#rad)
- [`rcap`](/de/docs/Web/CSS/Reference/Values/length#rcap)
- [`rch`](/de/docs/Web/CSS/Reference/Values/length#rch)
- [`rem`](/de/docs/Web/CSS/Reference/Values/length#rem)
- [`rex`](/de/docs/Web/CSS/Reference/Values/length#rex)
- [`ric`](/de/docs/Web/CSS/Reference/Values/length#ric)
- [`rlh`](/de/docs/Web/CSS/Reference/Values/length#rlh)
- [`s`](/de/docs/Web/CSS/Reference/Values/time#s)
- [`svb`](/de/docs/Web/CSS/Reference/Values/length#vb)
- [`svh`](/de/docs/Web/CSS/Reference/Values/length#vh)
- [`svi`](/de/docs/Web/CSS/Reference/Values/length#vi)
- [`svmax`](/de/docs/Web/CSS/Reference/Values/length#vmax)
- [`svmin`](/de/docs/Web/CSS/Reference/Values/length#vmin)
- [`svw`](/de/docs/Web/CSS/Reference/Values/length#vw)
- [`turn`](/de/docs/Web/CSS/Reference/Values/angle#turn)
- [`vb`](/de/docs/Web/CSS/Reference/Values/length#vb)
- [`vh`](/de/docs/Web/CSS/Reference/Values/length#vh)
- [`vi`](/de/docs/Web/CSS/Reference/Values/length#vi)
- [`vmax`](/de/docs/Web/CSS/Reference/Values/length#vmax)
- [`vmin`](/de/docs/Web/CSS/Reference/Values/length#vmin)
- [`vw`](/de/docs/Web/CSS/Reference/Values/length#vw)
- [`x`](/de/docs/Web/CSS/Reference/Values/resolution#x)

[Flex-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#flex_units) (`fr`) und [Container-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) sind in den Modulen [CSS-Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout) und [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) definiert.

#### Einheitskategorien

- [Absolute Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Winkel-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Standard-Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#default_viewport_units) (`vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Dynamische Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Frequenzeinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Große Viewport-Prozentsatzeinheiten](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Lokale schriftverwandte Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Physikalische Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Relative Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Auflösungs-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#resolution_units) (`dpcm`, `dpi`, `dppx`, `x`)
- [Wurzel schriftverwandte Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Kleine Viewport-Prozentsatzeinheit](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Zeiteinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#time_units) (`ms`, `s`)
- [Viewport-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Visuelle Winkel-Einheit](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`)

### Schlüsselkonzepte

- {{Glossary("Advance_measure", "Erweiterungsmaß")}}
- [Geklammerte Bereichsnotation](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#bracketed_range_notation_minmax)
- [Komponentwert-Kombinatoren](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#component_value_combinators)
- [CSS-weite Schlüsselwörter](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords)
- {{Glossary("Device_pixel", "Gerätepixel")}}
- [Funktionale Notation](/de/docs/Web/CSS/Reference/Values/Functions)
- {{Glossary("Identifier", "Bezeichner")}}
- {{Glossary("Interpolation", "Interpolation")}}
- {{Glossary("Keyword", "Schlüsselwort")}}
- [Mathematische Funktion](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
- [Numerische Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- {{Glossary("Origin", "Herkunft")}}
- {{Glossary("Pixel", "Pixel")}}
- [Textuelle Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- {{Glossary("URL", "URL")}}
- [Syntax der Wertdefinition](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Leitfäden

- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
  - : Einführung in CSS-Datentypen, die typische Werte definieren, die von CSS-Eigenschaften und -Funktionen akzeptiert werden.

- [Numerische Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
  - : Übersicht über die numerischen Datentypen, einschließlich ganzer Zahlen, Zahlen, Prozentsätze und Dimensionen, zusammen mit relativen und absoluten Dimensionen, Winkeln und Zeiteinheiten.

- [Textuelle Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
  - : Übersicht über die textuellen Datentypen, einschließlich vordefinierter Schlüsselwortwerte, globaler CSS-Schlüsselwortwerte und URLs.

- [CSS-Wertfunktionen](/de/docs/Web/CSS/Reference/Values/Functions)
  - : Übersicht über die CSS-Anweisungen, die besondere Datenverarbeitungen oder Berechnungen aufrufen, um einen CSS-Wert für eine CSS-Eigenschaft zurückzugeben.

- [Verwendung von CSS-Mathematikfunktionen](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
  - : Die CSS-Mathematik-Funktionen, die es ermöglichen, dass ein Eigenschaftswert als mathematischer Ausdruck geschrieben wird.

- [Syntax der Wertdefinition](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : Die formale Grammatik, die verwendet wird, um die Menge gültiger Werte für CSS-Eigenschaften und -Funktionen zu definieren.

- [Verwendung von CSS-getypter Arithmetik](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
  - : Eine Erklärung des Verhaltens von CSS-getypter Arithmetik und Anwendungsfälle, die durch sie ermöglicht werden.

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : Ein Blick auf einige der häufigst genutzten Wertetypen, was sie sind und wie sie funktionieren.

## Verwandt

- [CSS-Kaskaden- und Vererbungsmodul](/de/docs/Web/CSS/Guides/Cascade)
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS-Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
  - {{cssxref("&lt;flex&gt;")}}
  - [Flex-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#flex_units) (`fr`)

- [CSS-Bedingungsregeln](/de/docs/Web/CSS/Guides/Conditional_rules) Modul
  - [Container-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix)

- [CSS-Bilder](/de/docs/Web/CSS/Guides/Images) Modul
  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
