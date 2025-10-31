---
title: CSS-Positionierungs-Layout
slug: Web/CSS/CSS_positioned_layout
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das Modul **CSS-Positionierungs-Layout** definiert die auf Koordinaten basierenden Positionierungs- und Offset-Schemata in CSS und die Eigenschaften, die verwendet werden, um Elemente auf einer Webseite zu positionieren und zu stapeln. Das Modul ist vor allem dafür bekannt, die grundlegenden Positionierungsmethoden zu definieren, einschließlich relativer Positionierung, Sticky-Positionierung, absoluter Positionierung und fester Positionierung. Es legt außerdem fest, wie positionierte Elemente gezeichnet und geschichtet werden, und klärt das Stapelverhalten und die visuelle Reihenfolge.

Das Positionierungsmodul definiert die physischen, logischen und Kurzform {{Glossary("inset_properties", "Einfügeigenschaften")}}. Die logischen Eigenschaften ermöglichen die Entwicklung unter Berücksichtigung von Internationalisierung und Responsivität.

Wie alle CSS-Module beeinflusst dieses Modul andere Module und wird von ihnen beeinflusst. Es beschreibt, wie die Positionierung mit anderen Layout-Modulen wie [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) interagiert. Andere Module, wie zum Beispiel [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), bauen auf diesem Modul auf, um die Positionierung von Elementen relativ zu anderen Elementen und Ebenen zu ermöglichen.

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

- {{Glossary("Flow_relative_values#block_direction", "Block-Richtung")}}
- [Enthalten block](/de/docs/Web/CSS/CSS_display/Containing_block)
- {{Glossary("Flow_relative_values", "Fluss-relative Werte")}}
- {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}}
- {{Glossary("Inset_properties", "Einfügeigenschaften")}}
- [Positionierungskontext](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#positioning_contexts)
- [Relative Position](/de/docs/Web/CSS/Reference/Properties/position#relative_positioning)
- {{Glossary("Stacking_context", "Staplerkontext")}}
- [Statische Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#static_positioning)
- {{Glossary("Top_layer", "Top-Schicht")}}

## Leitfäden

- [Z-Index verstehen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Präsentiert das Konzept des Stapelkontexts und erklärt, wie die Z-Ordnung funktioniert, mit mehreren Beispielen.
- [Stapeln ohne die Eigenschaft `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
  - : Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Schwebende Elemente stapeln](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
  - : Wie schwebende Elemente mit dem Stapeln gehandhabt werden.
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
  - : Wie `z-index` verwendet wird, um die Standard-Stapelung zu ändern.
- [Staplerkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
  - : CSS-Staplerkontext, die CSS-Funktionen, die neue Stapelkontexte erstellen, und verschachtelte Stapelkontexte.
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die verschiedenen Positionierungswerte und deren Anwendung.

## Verwandte Konzepte

- {{cssxref("float")}}
- {{cssxref("clear")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-behavior")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- {{htmlelement("dialog")}} Element

- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
  - {{cssxref("position-anchor")}}
  - {{cssxref("position-area")}}
  - {{cssxref("position-try-fallbacks")}}
  - {{cssxref("position-try-order")}}
  - {{cssxref("position-try")}} Kurzform
  - {{cssxref("position-visibility")}}

- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
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
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
  - {{Glossary("Snap_positions", "Snap-Positionen")}}
