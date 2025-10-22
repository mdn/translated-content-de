---
title: CSS Positioniertes Layout
slug: Web/CSS/CSS_positioned_layout
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSS positioniertes Layout**-Modul definiert die auf Koordinaten basierenden Positionierungs- und Versatzschemata, die in CSS verfügbar sind, sowie die Eigenschaften, die verwendet werden, um Elemente auf einer Webseite zu positionieren und zu stapeln. Das Modul ist am bekanntesten für die Definition der grundlegenden Positionierungsmethoden, einschließlich relativer Positionierung, sticky Positionierung, absoluter Positionierung und fester Positionierung. Es definiert auch, wie positionierte Elemente dargestellt und geschichtet werden, und klärt das Stapelverhalten und die visuelle Reihenfolge.

Das Positioniertes-Layou-Modul definiert die physischen, logischen und Kurzformen der {{Glossary("inset_properties", "Einsetz-Eigenschaften")}}. Die logischen Eigenschaften ermöglichen die Entwicklung unter Berücksichtigung von Internationalisierung und Responsivität.

Wie alle CSS-Module wirkt dieses Modul auf andere Module und wird von ihnen beeinflusst. Dieses Modul beschreibt, wie die Positionierung mit anderen Layoutmodulen wie dem [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und dem [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) interagiert. Andere Module, wie das [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), bauen auf diesem Modul auf, um die Positionierung von Elementen relativ zu anderen Elementen und Schichten zu ermöglichen.

## Referenz

### Eigenschaften

- {{cssxref("bottom")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-inline")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}
- {{cssxref("left")}}
- {{cssxref("overlay")}}
- {{cssxref("position")}}
- {{cssxref("right")}}
- {{cssxref("top")}}

### Selektoren

- {{cssxref("::backdrop")}}

### Glossarbegriffe und Definitionen

- {{Glossary("Flow_relative_values#block_direction", "Blockrichtung")}}
- [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- {{Glossary("Flow_relative_values", "Fluss-relative Werte")}}
- {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}}
- {{Glossary("Inset_properties", "Einsetz-Eigenschaften")}}
- [Positionierungskontext](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#positioning_contexts)
- [Relative Positionierung](/de/docs/Web/CSS/position#relative_positioning)
- {{Glossary("Stacking_context", "Stapelkontext")}}
- [Statische Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#static_positioning)
- {{Glossary("Top_layer", "Top-Schicht")}}

## Leitfäden

- [Verständnis von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Präsentiert das Konzept des Stapelkontexts und erklärt, wie das Z-Ordnen funktioniert, mit mehreren Beispielen.
- [Stapel ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
  - : Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Schwebende Elemente stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
  - : Wie schwebende Elemente mit Stapeln gehandhabt werden.
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
  - : Wie man `z-index` verwendet, um die Standardstapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
  - : CSS-Stapelkontext, die CSS-Funktionen, die neue Stapelkontexte erstellen, und verschachtelte Stapelkontexte.
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die verschiedenen Positionswerte und deren Verwendung.

## Verwandte Konzepte

- {{cssxref("float")}}
- {{cssxref("clear")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-behavior")}}
- [Popover-API](/de/docs/Web/API/Popover_API)
- {{htmlelement("dialog")}} Element

- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
  - {{cssxref("position-anchor")}}
  - {{cssxref("position-area")}}
  - {{cssxref("position-try-fallbacks")}}
  - {{cssxref("position-try-order")}}
  - {{cssxref("position-try")}} Kurzform
  - {{cssxref("position-visibility")}}

- [CSS Transformieren](/de/docs/Web/CSS/CSS_transforms) Modul
  - {{cssxref("transform")}}
  - {{cssxref("transform-origin")}}
  - {{cssxref("translate")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- Andere CSS `*-position` Eigenschaften:
  - {{cssxref("background-position")}}
  - {{cssxref("background-position")}}
  - {{cssxref("background-position")}}
  - {{cssxref("font-synthesis-position")}}
  - {{cssxref("font-variant-position")}}
  - {{cssxref("list-style-position")}}
  - {{cssxref("mask-position")}}
  - {{cssxref("object-position")}}
  - {{cssxref("offset-position")}}
  - {{cssxref("ruby-position")}}
  - {{cssxref("text-emphasis-position")}}
  - {{cssxref("text-underline-position")}}
- Positionsbezogene [Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
  - {{cssxref("baseline-position")}}
  - {{cssxref("content-position")}}
  - {{cssxref("overflow-position")}}
  - {{cssxref("self-position")}}
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
  - {{Glossary("Snap_positions", "Einrastpositionen")}}
