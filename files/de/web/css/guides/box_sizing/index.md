---
title: CSS-Box-Sizing
short-title: Box sizing
slug: Web/CSS/Guides/Box_sizing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Box-Sizing**-Modul ermöglicht es, festzulegen, wie Elemente ihren Inhalt aufnehmen oder in einen bestimmten Layout-Kontext passen. Es definiert Größen-, Mindestgrößen- und Maximalgrößen-Eigenschaften und erweitert die CSS-Größeneigenschaften mit Schlüsselwörtern, die eine inhaltsbasierte {{Glossary("intrinsic_size", "intrinsische Größe")}} und eine kontextbasierte {{Glossary("extrinsic_size", "extrinsische Größe")}} darstellen.

Elemente können entweder extrinsisch oder intrinsisch dimensioniert werden. Das [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) definiert seitenbezogene Eigenschaften, um die Größe eines Elements explizit oder "extrinsisch" festzulegen, einschließlich der Eigenschaften `width`, `height`, `padding` und `margin` (neben den in dem Modul [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) definierten `border`-Eigenschaften). Dieses CSS-Box-Sizing-Modul erweitert das CSS-Boxmodell-Modul, um es einem Element zu ermöglichen, intrinsisch dimensioniert zu werden — die Größe eines Elements basierend auf der Größe seines Inhalts festzulegen.

Die in diesem Modul eingeführten Größenwerte ermöglichen es Elementen mit [Größeneindämmung](/de/docs/Web/CSS/Guides/Containment/Using#size_containment), explizite intrinsische Größen anzunehmen, so als ob die Breite und Höhe ihres Inhaltsflusses der angegebenen expliziten intrinsischen Größe entsprechen würden, anstatt dimensioniert zu werden, als ob sie leer wären.

Dieses Modul führte auch die Möglichkeit ein, ein Seitenverhältnis für die Box eines Elements zu definieren, was bedeutet, dass der Browser die Abmessungen eines Elements automatisch anpassen kann, um ein angegebenes Seitenverhältnis beizubehalten, solange eine der Abmessungen automatisch dimensioniert wird.

Das Modul [Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) erweiterte die im Boxmodell und den Box-Sizing-Modulen verfügbaren Eigenschaften um schreibmodus-relative Entsprechungen der entsprechenden physischen Boxmodell- und intrinsischen Box-Sizing-Eigenschaften.

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

Das CSS-Box-Sizing-Modul führt auch die Eigenschaft `min-intrinsic-sizing` ein. Derzeit wird dieses Merkmal von keinem Browser unterstützt.

### Datentypen und Werte

- {{cssxref("ratio")}} Datentyp
- {{cssxref("min-content")}} Wert
- {{cssxref("max-content")}} Wert
- {{cssxref("fit-content")}} Wert

### Funktionen

- [`fit-content()`](/de/docs/Web/CSS/Reference/Values/fit-content_function)

### Glossarbegriffe

- {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
- {{Glossary("Extrinsic_size", "Extrinsische Größe")}}

## Leitfäden

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
  - : Lernen Sie über die `aspect-ratio`-Eigenschaft, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige häufige Anwendungsfälle für Seitenverhältnisse.

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - : Erklärt eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell definiert, wie CSS Elemente layoutet, einschließlich ihrer Inhalts-, Innenabstands-, Rand- und Außenabstandsbereiche.

- [Beherrschung des Margin-Zusammenfalls](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - : Manchmal werden zwei angrenzende Ränder in einen zusammengelegt. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht, und wie man es kontrolliert.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - : Erklärt das visuelle Formatierungsmodell.

- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
  - : Erklärt die intrinsische Größenbestimmung als Vorläufer zum Verständnis, wie die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse mit {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}} gesteuert werden kann.

## Verwandte Konzepte

- [CSS-logische Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
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
- [CSS-Hintergründe und -Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
  - {{cssxref("border")}} Kurzform
  - {{cssxref("border-width")}} Kurzform
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS-Überlauf](/de/docs/Web/CSS/Guides/Overflow) Modul
  - {{CSSxRef("overflow")}} Kurzform
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("repeat")}}
  - {{CSSxRef("minmax")}} Funktion
- [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS-Flex-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [CSS-Positionierungs-Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul
- [CSS-Fragmentierung](/de/docs/Web/CSS/Guides/Fragmentation) Modul
