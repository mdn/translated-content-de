---
title: CSS box sizing
short-title: Box sizing
slug: Web/CSS/Guides/Box_sizing
l10n:
  sourceCommit: 04c41175b160dc00b1a1b8e4e13b2183d89fdf1a
---

Das **CSS box sizing**-Modul ermöglicht es Ihnen, zu bestimmen, wie Elemente ihren Inhalt aufnehmen oder in einen bestimmten Layoutkontext passen. Es definiert Größen-, Mindest- und Höchstgrößen-Eigenschaften und erweitert die CSS-Größeneigenschaften um Schlüsselwörter, die inhaltsbasierte {{Glossary("intrinsic_size", "intrinsische Größen")}} und kontextbasierte {{Glossary("extrinsic_size", "extrinsische Größen")}} darstellen.

Elemente können entweder extrinsisch oder intrinsisch dimensioniert sein. Das [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) definiert seitenbezogene Eigenschaften, um die Größe eines Elements explizit oder "extrinsisch" festzulegen, einschließlich der Eigenschaften `width`, `height`, `padding` und `margin` (zusammen mit den `border`-Eigenschaften, die im [CSS Backgrounds und Borders](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)-Modul definiert sind). Dieses CSS box sizing-Modul erweitert das CSS-Boxmodell-Modul, um ein Element intrinsisch dimensionieren zu können - die Größe des Elements auf Basis der Größe seines Inhalts festzulegen.

Die in diesem Modul eingeführten Größenwerte erlauben es Elementen mit [Größen-Containment](/de/docs/Web/CSS/Guides/Containment/Using#size_containment), explizite intrinsische Größen anzunehmen, als ob die Breite und Höhe ihres Flussinhalts mit der angegebenen expliziten intrinsischen Größe übereinstimmen würde, anstatt so dimensioniert zu werden, als ob sie leer wären.

Dieses Modul führte auch die Möglichkeit ein, ein Seitenverhältnis für das Box eines Elements zu definieren, was bedeutet, dass der Browser die Abmessungen eines Elements automatisch anpassen kann, um ein bestimmtes Seitenverhältnis beizubehalten, solange eine der Dimensionen automatisch dimensioniert wird.

Das [Modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) hat die im Boxmodell und den Box-sizing-Modulen verfügbaren Eigenschaften erweitert, um schreibmodus-relative Äquivalente der entsprechenden physikalischen Boxmodell- und intrinsischen Boxgrößeneigenschaften einzuschließen.

## Referenz

### Eigenschaften

- {{cssxref("aspect-ratio")}}
- {{cssxref("box-sizing")}}
- {{cssxref("contain-intrinsic-block-size")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("contain-intrinsic-inline-size")}}
- {{cssxref("contain-intrinsic-size")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("frame-sizing")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}
- {{cssxref("width")}}

Das CSS box sizing-Modul führt auch die Eigenschaft `min-intrinsic-sizing` ein. Derzeit unterstützt kein Browser diese Funktion.

### Datentypen und Werte

- {{cssxref("ratio")}} Datentyp
- {{cssxref("min-content")}} Wert
- {{cssxref("max-content")}} Wert
- {{cssxref("fit-content")}} Wert

### Funktionen

- [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function)

### Glossarbegriffe

- {{Glossary("Intrinsic_size", "Intrinsic size")}}
- {{Glossary("Extrinsic_size", "Extrinsic size")}}

## Leitfäden

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
  - : Lernen Sie die `aspect-ratio`-Eigenschaft kennen, diskutieren Sie über Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige gängige Anwendungsfälle von Seitenverhältnissen.

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - : Erklärt eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell definiert, wie CSS Elemente darstellt, einschließlich ihres Inhalts, ihrer Polsterung, ihrer Ränder und ihrer Ränder.

- [Beherrschen des Margen-Kollapses](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - : Manchmal werden zwei benachbarte Margen zu einer zusammengefasst. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht und wie Sie dies kontrollieren können.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - : Erklärt das visuelle Formatierungsmodell.

- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Erklärt intrinsisches Sizing als Vorläufer des Verstehens, wie die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse mit {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}} gesteuert werden kann.

## Verwandte Konzepte

- [CSS logische Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
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
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul
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
- [CSS Hintergründe und Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
  - {{cssxref("border")}} Kurzform
  - {{cssxref("border-width")}} Kurzform
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{CSSxRef("overflow")}} Kurzform
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}
- [CSS Gitternetz-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("repeat")}}
  - {{CSSxRef("minmax")}} Funktion
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Anzeige](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS Flex-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Gitternetz-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS Positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul
