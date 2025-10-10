---
title: CSS positioniertes Layout
slug: Web/CSS/CSS_positioned_layout
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das **CSS positioniertes Layout**-Modul definiert die koordinatenbasierten Positionierungs- und Verschiebungsschemata, die in CSS verfügbar sind, sowie die Eigenschaften, die verwendet werden, um Elemente auf einer Webseite zu positionieren und zu stapeln. Das Modul ist besonders bekannt für die Definition der grundlegenden Positionierungsmethoden, einschließlich relativer Positionierung, klebender (sticky) Positionierung, absoluter Positionierung und fester (fixed) Positionierung. Es definiert außerdem, wie positionierte Elemente bemalt und geschichtet werden, klärt das Stapelverhalten und die visuelle Reihenfolge.

Das positionierte Layoutmodul definiert die physikalischen, logischen und abgekürzten {{Glossary("inset_properties", "Einfügeeigenschaften")}}. Die logischen Eigenschaften ermöglichen die Entwicklung unter Berücksichtigung von Internationalisierung und Reaktionsfähigkeit.

Wie alle CSS-Module beeinflusst dieses Modul andere Module und wird von diesen beeinflusst. Dieses Modul beschreibt, wie die Positionierung mit anderen Layoutmodulen interagiert, wie z.B. [CSS flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout). Andere Module, wie [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning), bauen auf diesem Modul auf, um das Positionieren von Elementen relativ zu anderen Elementen und Ebenen zu ermöglichen.

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

### Glossar und Begriffe

- {{Glossary("Flow_relative_values#block_direction", "Blockrichtung")}}
- [Enthaltender Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- {{Glossary("Flow_relative_values", "Flussrelative Werte")}}
- {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}}
- {{Glossary("Inset_properties", "Einfügeeigenschaften")}}
- [Positionierungskontext](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#positioning_contexts)
- [Relative Position](/de/docs/Web/CSS/position#relative_positioning)
- {{Glossary("Stacking_context", "Stapellungskontext")}}
- [Statische Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#static_positioning)
- {{Glossary("Top_layer", "Obere Ebene")}}

## Leitfäden

- [Verstehen von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Präsentiert das Konzept des Stapelungskontextes und erklärt, wie Z-Ordnungen funktionieren, mit mehreren Beispielen.
- [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
  - : Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Schwebende Elemente stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
  - : Wie schwebende Elemente im Stapeln gehandhabt werden.
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
  - : Wie `z-index` verwendet wird, um die Standardstapelung zu ändern.
- [Stapelungskontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
  - : CSS-Stapelungskontext, die CSS-Features, die neue Stapelungskontexte erstellen, und verschachtelte Stapelungskontexte.
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die verschiedenen Positionierungswerte und wie sie verwendet werden.

## Verwandte Konzepte

- {{cssxref("float")}}
- {{cssxref("clear")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-behavior")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- {{htmlelement("dialog")}} Element

- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
  - {{cssxref("position-anchor")}}
  - {{cssxref("position-area")}}
  - {{cssxref("position-try-fallbacks")}}
  - {{cssxref("position-try-order")}}
  - {{cssxref("position-try")}} Abkürzung
  - {{cssxref("position-visibility")}}

- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
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
  - {{Glossary("Snap_positions", "Schnapp-Positionen")}}
