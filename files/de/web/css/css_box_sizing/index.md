---
title: CSS-Box-Sizing
slug: Web/CSS/CSS_box_sizing
l10n:
  sourceCommit: 6d55eec58e38583da60aa635d41393ad051d1c6d
---

{{CSSRef}}

Das **CSS-Box-Sizing**-Modul ermöglicht es Entwicklern, festzulegen, wie Elemente ihren Inhalt ausfüllen oder in einen bestimmten Layout-Kontext passen. Es definiert Größen-, Mindestgrößen- und Höchstgrößeneigenschaften und erweitert auch die CSS-Größeneigenschaften mit Schlüsselwörtern, die die inhaltsbasierte {{Glossary("intrinsic_size", "intrinsische Größe")}} und die kontextbasierte {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsische")}} Größe darstellen.

Elemente können entweder extrinsisch oder intrinsisch dimensioniert werden. Das [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) definiert seitenbezogene Eigenschaften, um die Größe eines Elements explizit oder "extrinsisch" festzulegen, einschließlich der Eigenschaften `width`, `height`, `padding` und `margin` (zusammen mit den `border`-Eigenschaften, die im Modul [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) definiert sind). Dieses CSS-Box-Sizing-Modul erweitert das CSS-Boxmodell-Modul, um ein Element intrinsisch zu dimensionieren – die Elementgröße basierend auf der Größe seines Inhalts festzulegen.

Die in diesem Modul eingeführten Größenwerte ermöglichen es Elementen mit [Größen-Beschränkung](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment), explizite intrinsische Größen anzunehmen, so als ob die Breite und Höhe ihres im Fluss befindlichen Inhalts der angegebenen expliziten intrinsischen Größe entsprechen, anstatt dimensioniert zu werden, als wären sie leer.

Dieses Modul führte auch die Möglichkeit ein, ein Seitenverhältnis für das Element-Box-Format zu definieren, was bedeutet, dass der Browser die Abmessungen eines Elements automatisch anpassen kann, um ein angegebenes Seitenverhältnis beizubehalten, solange eine der Abmessungen automatisch dimensioniert wird.

Das [Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) erweiterte die im Boxmodell und den Box-Sizing-Modulen verfügbaren Eigenschaften um Entsprechungen, die sich am Schreibmodus relativ orientieren und den entsprechenden physischen Boxmodell- und intrinsischen Box-Sizing-Eigenschaften entsprechen.

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
> Das CSS-Box-Sizing-Modul führt die `min-intrinsic-sizing`-Eigenschaft ein, die noch nicht implementiert wurde.

### Datentypen und Werte

- {{cssxref("ratio")}} Datentyp
- {{cssxref("min-content")}} Wert
- {{cssxref("max-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{cssxref("fit-content_function", "fit-content()")}} Funktion

> [!NOTE]
> Das CSS-Box-Sizing-Modul führt die Schlüsselwörter `stretch` und `contain` als Größenwerte ein, die noch nicht bei den Box-Sizing-Eigenschaften implementiert wurden.

### Funktionen

- [`fit-content()`](/de/docs/Web/CSS/fit-content_function)

### Glossarbegriffe

- {{Glossary("intrinsic_size", "intrinsische Größe")}}

## Leitfäden

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)

  - : Lernen Sie die `aspect-ratio`-Eigenschaft kennen, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige häufige Anwendungsfälle für Seitenverhältnisse.

- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Erklärt eines der grundlegenden Konzepte von CSS: das Box-Modell. Dieses Modell definiert, wie CSS Elemente anordnet, einschließlich ihres Inhalts, ihrer Polsterung, ihrer Rahmen- und Randbereiche.

- [Beherrschung des Zusammenfallens von Rändern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Manchmal werden zwei angrenzende Ränder zu einem zusammengefasst. Dieser Artikel beschreibt die Regeln, die regeln, wann und warum dies geschieht, und wie Sie es steuern können.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)

  - : Erklärt das visuelle Formatierungsmodell.

- [Verwalten der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Erklärt intrinsisches Sizing als Vorstufe zum Verständnis, wie Sie die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse mithilfe von {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}} steuern können.

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
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
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
- [CSS-Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Flex-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
