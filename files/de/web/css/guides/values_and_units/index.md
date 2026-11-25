---
title: CSS-Werte und -Einheiten
short-title: Werte und Einheiten
slug: Web/CSS/Guides/Values_and_units
l10n:
  sourceCommit: f1e9b613e408f42cb24ceb4f7ef3fb561b8f427f
---

Jede CSS-Deklaration besteht aus einem Paar aus Eigenschaft und Wert. Je nach Eigenschaft kann der Wert unterschiedliche Formen annehmen, etwa eine einzelne Ganzzahl, ein Schlüsselwort, eine Funktion oder eine Kombination verschiedener Bestandteile. Manche Werte haben eine Einheit, andere nicht. Jede Eigenschaft akzeptiert außerdem die CSS-weiten Werte. Das Modul CSS-Werte und -Einheiten definiert die Datentypen – Werte und Einheiten –, die CSS-Eigenschaften akzeptieren. Es definiert auch die Syntax zur Definition von CSS-Werten, also die formale Grammatik, mit der die gültigen Werte für jede CSS-Eigenschaft und -Funktion festgelegt werden.

> [!NOTE]
> Diese Seite stellt ein CSS-Modul vor. Eine vollständige Liste aller durch CSS-Spezifikationen definierten Werte, Typen und Funktionen finden Sie auf der Referenzseite zu [Werten](/de/docs/Web/CSS/Reference/Values).

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
- {{cssxref("calc-mix()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("if()")}}
- {{cssxref("inherit()")}}
- {{cssxref("integrity()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("progress()")}}
- {{cssxref("random()")}}
- {{cssxref("random-item()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("type()")}}
- {{cssxref("url_function", "url()")}}

Das Modul CSS-Werte und -Einheiten führt außerdem die Funktionen `cycle()`, `first-valid()` und `src()` ein. Derzeit unterstützt kein Browser diese Funktionen.

### Datentypen

- {{cssxref("angle-percentage")}}
- {{cssxref("angle")}}
- [`<attr-name>`](/de/docs/Web/CSS/Reference/Values/attr#attr-name)
- [`<attr-type>`](/de/docs/Web/CSS/Reference/Values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{Glossary("NaN", "NaN")}})
- [`<calc-size-basis>`](/de/docs/Web/CSS/Reference/Values/calc-size#calc-size-basis)
- {{cssxref("calc-sum")}}
- {{cssxref("custom-ident")}}
- {{cssxref("dashed-ident")}}
- {{cssxref("dimension")}}
- {{cssxref("easing-function")}}
- {{cssxref("ident")}}
- {{cssxref("integer")}}
- {{cssxref("length-percentage")}}
- {{cssxref("length")}}
- {{cssxref("number")}}
- {{cssxref("percentage")}}
- {{cssxref("&lt;position&gt;")}}
- {{cssxref("ratio")}}
- {{cssxref("resolution")}}
- [`<rounding-strategy>`](/de/docs/Web/CSS/Reference/Values/round#rounding-strategy) (`down`, `up`, `to-zero`)
- {{cssxref("string")}}
- [`<syntax>`](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- {{cssxref("time-percentage")}}
- {{cssxref("time")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- [`<url-modifier>`](/de/docs/Web/CSS/Reference/Values/url_function#url-modifier)

Das Modul CSS-Werte und -Einheiten führt außerdem die Datentypen {{cssxref("frequency")}} und {{cssxref("frequency-percentage")}} ein. Derzeit unterstützt kein Browser diese Datentypen.

#### Einheiten

- [`%` (Prozentwert)](/de/docs/Web/CSS/Reference/Values/percentage)
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

[Flex-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#flex_units) (`fr`) und [Container-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) sind in den Modulen [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) beziehungsweise [Bedingte CSS-Regeln](/de/docs/Web/CSS/Guides/Conditional_rules) definiert.

#### Kategorien von Einheiten

- [Absolute Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Winkeleinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Standard-Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#default_viewport_units) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Dynamische Viewport-Einheiten](/de/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Frequenzeinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Einheiten für den großen Viewport](/de/docs/Web/CSS/Reference/Values/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Längeneinheiten relativ zur lokalen Schriftart](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Physische Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Relative Längeneinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Auflösungseinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#resolution_units) (`dpcm`, `dpi` , `dppx`, `x`)
- [Längeneinheiten relativ zur Schriftart des Wurzelelements](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Einheiten für den kleinen Viewport](/de/docs/Web/CSS/Reference/Values/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Zeiteinheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#time_units) (`ms`, `s`)
- [Viewport-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Einheit des Sehwinkels](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#absolute_length_units) (`px`)

### Grundlegende Konzepte

- {{Glossary("Advance_measure", "Zeichenbreite")}}
- [Bereichsnotation in eckigen Klammern](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#bracketed_range_notation_minmax)
- [Kombinatoren für Komponentenwerte](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#component_value_combinators)
- [CSS-weite Schlüsselwörter](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords)
- {{Glossary("Device_pixel", "Gerätepixel")}}
- [Funktionsnotation](/de/docs/Web/CSS/Reference/Values/Functions)
- {{Glossary("Identifier", "Bezeichner")}}
- {{Glossary("Interpolation", "Interpolation")}}
- {{Glossary("Keyword", "Schlüsselwort")}}
- [Mathematische Funktion](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
- [Numerische Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- {{Glossary("Origin", "Ursprung")}}
- {{Glossary("Pixel", "Pixel")}}
- [Textuelle Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- {{Glossary("URL", "URL")}}
- [Syntax zur Definition von Werten](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Leitfäden

- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
  - : Einführung in CSS-Datentypen, die typische Werte definieren, die CSS-Eigenschaften und -Funktionen akzeptieren.

- [Numerische Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
  - : Überblick über numerische Datentypen wie Ganzzahlen, Zahlen, Prozentwerte und Größenangaben sowie über relative und absolute Größenangaben, Winkel und Zeiteinheiten.

- [Textuelle Datentypen](/de/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
  - : Überblick über textuelle Datentypen, darunter vordefinierte Schlüsselwortwerte, globale CSS-Schlüsselwortwerte und URLs.

- [CSS-Wertfunktionen](/de/docs/Web/CSS/Reference/Values/Functions)
  - : Überblick über CSS-Ausdrücke, die eine spezielle Datenverarbeitung oder Berechnung auslösen und einen CSS-Wert für eine CSS-Eigenschaft zurückgeben.

- [CSS-Mathematikfunktionen verwenden](/de/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
  - : Die CSS-Mathematikfunktionen, mit denen sich ein Eigenschaftswert als mathematischer Ausdruck schreiben lässt.

- [Syntax zur Definition von Werten](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : Die formale Grammatik, mit der die gültigen Werte für CSS-Eigenschaften und -Funktionen definiert werden.

- [Typisierte Arithmetik in CSS verwenden](/de/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic)
  - : Eine Erklärung des Verhaltens typisierter Arithmetik in CSS und der dadurch ermöglichten Anwendungsfälle.

- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : Ein Blick auf einige der am häufigsten verwendeten Werttypen, ihre Bedeutung und ihre Funktionsweise.

- [Serialisierung von CSS-Werten](/de/docs/Web/API/CSS_Object_Model/CSS_value_serialization)
  - : Wie [CSSOM-APIs](/de/docs/Web/API/CSS_Object_Model) Farben und andere Werte in standardisierte Zeichenfolgendarstellungen serialisieren.

## Verwandte Themen

- Modul [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- Modul [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
  - {{cssxref("&lt;flex&gt;")}}
  - [Flex-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#flex_units) (`fr`)

- Modul [Bedingte CSS-Regeln](/de/docs/Web/CSS/Guides/Conditional_rules)
  - [Container-Einheiten](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- Modul [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/de/docs/Web/CSS/Reference/Values/color_value/color-mix)

- Modul [CSS-Bilder](/de/docs/Web/CSS/Guides/Images)
  - {{cssxref("image")}}
  - {{cssxref("gradient")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- Modul [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)
- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
