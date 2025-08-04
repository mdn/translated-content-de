---
title: CSS-Box-Größenbestimmung
slug: Web/CSS/CSS_box_sizing
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Das **CSS-Box-Größenbestimmungsmodul** ermöglicht es Entwicklern, festzulegen, wie Elemente ihren Inhalt ausfüllen oder in einen bestimmten Layoutkontext passen. Es definiert Größen, Mindestgrößen und Maximalgrößen-Eigenschaften und erweitert die CSS-Größen-Eigenschaften mit Schlüsselwörtern, die inhaltsbasierte {{Glossary("intrinsic_size", "intrinsische Größe")}} und kontextbasierte {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsische Größe")}} repräsentieren.

Elemente können entweder extrinsisch oder intrinsisch dimensioniert werden. Das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) definiert seitenbezogene Eigenschaften, um die Größe eines Elements explizit oder "extrinsisch" festzulegen, einschließlich `width`, `height`, `padding` und `margin`-Eigenschaften (zusammen mit den `border`-Eigenschaften, die im [CSS-Hintergrund- und Rand-](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul definiert sind). Dieses CSS-Box-Größenbestimmungsmodul erweitert das CSS-Box-Modul, um es einem Element zu ermöglichen, intrinsisch dimensioniert zu werden – die Größe des Elements basierend auf der Größe seines Inhalts festzulegen.

Die in diesem Modul eingeführten Größenwerte ermöglichen es Elementen mit [Größenbegrenzung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment), explizite intrinsische Größen anzunehmen, als ob die Breite und Höhe ihres im Fluss befindlichen Inhalts der angegebenen expliziten intrinsischen Größe entspricht, anstatt so dimensioniert zu werden, als wären sie leer.

Dieses Modul führte auch die Möglichkeit ein, ein Seitenverhältnis für die Box eines Elements zu definieren, was bedeutet, dass der Browser die Abmessungen eines Elements automatisch anpassen kann, um ein angegebenes Seitenverhältnis beizubehalten, solange eine der Abmessungen automatisch dimensioniert ist.

Das [Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) erweiterte die im Boxmodell und im Boxgrößenmodul verfügbaren Eigenschaften, um schreibmodus-relative Äquivalente der entsprechenden physischen Boxmodell- und intrinsischen Boxgrößen-Eigenschaften einzuschließen.

## Referenz

### Eigenschaften

- {{cssxref("aspect-ratio")}}
- {{cssxref("box-sizing")}}
- {{cssxref("contain-intrinsic-block-size")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("contain-intrinsic-inline-size")}}
- {{cssxref("contain-intrinsic-size")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}
- {{cssxref("width")}}

Das CSS-Box-Größenbestimmungsmodul führt auch die Eigenschaft `min-intrinsic-sizing` ein. Derzeit unterstützen keine Browser diese Funktion.

### Datentypen und Werte

- {{cssxref("ratio")}} Datentyp
- {{cssxref("min-content")}} Wert
- {{cssxref("max-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{cssxref("fit-content_function", "fit-content()")}} Funktion

### Funktionen

- [`fit-content()`](/de/docs/Web/CSS/fit-content_function)

### Glossarbegriffe

- {{Glossary("intrinsic_size", "intrinsische Größe")}}

## Leitfäden

- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
  - : Lernen Sie die `aspect-ratio`-Eigenschaft kennen, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige gängige Anwendungsfälle für Seitenverhältnisse.

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : Erklärt eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell definiert, wie CSS Elemente layoutet, einschließlich ihrer Inhalts-, Padding-, Rand- und Margenbereiche.

- [Beherrschung des Margen-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : Manchmal werden zwei angrenzende Margen zu einer zusammengeführt. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht, und wie es gesteuert werden kann.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - : Erklärt das visuelle Formatierungsmodell.

- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : Erklärt intrinsische Größenbestimmung als Vorstufe zum Verständnis, wie die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse mit {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}} gesteuert werden können.

## Verwandte Konzepte

- [CSS-logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-inline")}}
  - {{CSSxRef("padding-block")}}
  - {{CSSxRef("padding-inline")}}
  - {{CSSxRef("border-block")}}
  - {{CSSxRef("border-inline")}}
  - {{CSSxRef("contain-intrinsic-block-size")}}
  - {{CSSxRef("contain-intrinsic-inline-size")}}
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overscroll-behavior-block")}}
  - {{CSSxRef("overscroll-behavior-inline")}}
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
  - {{cssxref("margin")}} Kurzform
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-trim")}}
  - {{cssxref("padding")}} Kurzform
  - {{cssxref("padding-bottom")}}
  - {{cssxref("padding-left")}}
  - {{cssxref("padding-right")}}
  - {{cssxref("padding-top")}}
- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
  - {{cssxref("border")}} Kurzform
  - {{cssxref("border-width")}} Kurzform
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
  - {{CSSxRef("overflow")}} Kurzform
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("repeat")}}
  - {{CSSxRef("minmax")}} Funktion
- [CSS-flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Flex-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
