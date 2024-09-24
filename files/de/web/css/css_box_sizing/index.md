---
title: CSS-Box-Größenbestimmung
slug: Web/CSS/CSS_box_sizing
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das **CSS-Box-Größenbestimmungsmodul** ermöglicht es Entwicklern, festzulegen, wie Elemente ihren Inhalt einpassen oder in einen bestimmten Layout-Kontext passen können. Es definiert Größen-, Mindestgrößen- und Maximalgrößen-Eigenschaften und erweitert außerdem die CSS-Größenbestimmungseigenschaften mit Keywords, die eine inhaltsbasierte {{glossary("intrinsic size")}} und eine kontextbasierte [extrinsische](/de/docs/Glossary/Intrinsic_Size#extrinsic_sizing) Größe darstellen.

Elemente können entweder extrinsisch oder intrinsisch dimensioniert werden. Das [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) definiert seitenbezogene Eigenschaften, um die Größe eines Elements ausdrücklich oder "extrinsisch" festzulegen, einschließlich der Eigenschaften `width`, `height`, `padding` und `margin` (sowie der im Modul [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) definierten `border`-Eigenschaften). Dieses CSS-Box-Größenbestimmungsmodul erweitert das CSS-Box-Modell-Modul, um ein Element intrinsisch zu dimensionieren — die Größe des Elements basierend auf der Größe seines Inhalts festzulegen.

Die in diesem Modul eingeführten Größenwerte ermöglichen es Elementen mit [Größen-Eindämmung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment), explizite intrinsische Größen anzunehmen, als ob die Breite und Höhe ihres in den Fluss einfließenden Inhalts der angegebenen expliziten intrinsischen Größe entsprechen, anstatt dimensioniert zu werden, als wären sie leer.

Dieses Modul führte auch die Möglichkeit ein, ein Seitenverhältnis für das Box eines Elements zu definieren, was bedeutet, dass der Browser die Abmessungen eines Elements automatisch anpassen kann, um ein angegebenes Seitenverhältnis beizubehalten, solange eine der Dimensionen automatisch dimensioniert ist.

Das [Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) erweiterte die im Box-Modell und den Box-Größenbestimmungsmodulen verfügbaren Eigenschaften, um schreibmodusbezogene Äquivalente der entsprechenden physischen Box-Modell- und intrinsischen Box-Größenbestimmungseigenschaften einzuschließen.

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

> [!NOTE]
> Das CSS-Box-Größenbestimmungsmodul führt die Eigenschaft `min-intrinsic-sizing` ein, die noch nicht implementiert wurde.

### Datentypen und Werte

- {{cssxref("ratio")}} Datentyp
- {{cssxref("min-content")}} Wert
- {{cssxref("max-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{cssxref("fit-content_function", "fit-content()")}} Funktion

> [!NOTE]
> Das CSS-Box-Größenbestimmungsmodul führt die Schlüsselwörter `stretch` und `contain` als Größenwerte ein, die noch nicht bei den Box-Größenbestimmungseigenschaften implementiert wurden.

### Funktionen

- [`fit-content()`](/de/docs/Web/CSS/fit-content_function)

### Glossarbegriffe

- {{glossary("intrinsic size")}}

## Anleitungen

- [Seitenverhältnisse verstehen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)

  - : Lernen Sie die Eigenschaft `aspect-ratio` kennen, diskutieren Sie über Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige häufige Anwendungsfälle für Seitenverhältnisse.

- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Erklärt eines der grundlegenden Konzepte von CSS: das Box-Modell. Dieses Modell definiert, wie CSS Elemente darstellt, einschließlich ihrer Inhalts-, Rand-, Rahmen- und Abstandsbereiche.

- [Beherrschung des Rand-Zusammenfallens](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Manchmal werden zwei aneinandergrenzende Ränder zu einem zusammengeführt. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht und wie es kontrolliert werden kann.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)

  - : Erklärt das visuelle Formatierungsmodell.

- [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Erklärt intrinsische Dimensionierung als Vorläufer zum Verständnis, wie die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse mit {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}} gesteuert werden kann.

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
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
  - {{cssxref("margin")}} Kurzschrift
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-trim")}}
  - {{cssxref("padding")}} Kurzschrift
  - {{cssxref("padding-bottom")}}
  - {{cssxref("padding-left")}}
  - {{cssxref("padding-right")}}
  - {{cssxref("padding-top")}}
- [CSS-Hintergründe und Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
  - {{cssxref("border")}} Kurzschrift
  - {{cssxref("border-width")}} Kurzschrift
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS-Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
  - {{CSSxRef("overflow")}} Kurzschrift
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}
- [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("repeat")}}
  - {{CSSxRef("minmax")}} Funktion
- [CSS-Flexibles-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Flex-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Positioniertes-Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
