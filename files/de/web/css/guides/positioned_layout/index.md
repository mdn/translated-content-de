---
title: CSS-Positionierungs-Layout
short-title: Positioned layout
slug: Web/CSS/Guides/Positioned_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Positionierungs-Layout**-Modul definiert die koordinatenbasierte Positionierungs- und Offset-Schemata, die in CSS verfügbar sind, sowie die Eigenschaften, die zur Positionierung und Stapelung von Elementen auf einer Webseite verwendet werden. Das Modul ist bekannt für die Definition der grundlegenden Positionierungsmethoden, einschließlich relativer Positionierung, "sticky" Positionierung, absoluter Positionierung und fester Positionierung. Es definiert auch, wie positionierte Elemente gemalt und geschichtet werden, um das Stapelverhalten und die visuelle Reihenfolge zu klären.

Das Positionierungs-Layout-Modul definiert die physischen, logischen und Kurzschreibweise-{{Glossary("inset_properties", "Inset-Eigenschaften")}}. Die logischen Eigenschaften ermöglichen die Entwicklung mit Internationalisierung und Reaktionsfähigkeit im Blick.

Wie alle CSS-Module beeinflusst und wird dieses Modul durch andere Module beeinflusst. Es beschreibt, wie die Positionierung mit anderen Layout-Modulen wie dem [CSS-Flexibler-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) und dem [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) interagiert. Andere Module, wie das [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning), bauen auf diesem Modul auf, um die Positionierung von Elementen relativ zu anderen Elementen und Schichten zu ermöglichen.

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
- [Umgebender Block](/de/docs/Web/CSS/Guides/Display/Containing_block)
- {{Glossary("Flow_relative_values", "Fluss-relative Werte")}}
- {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}}
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- [Positionierungskontext](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#positioning_contexts)
- [Relative Positionierung](/de/docs/Web/CSS/Reference/Properties/position#relative_positioning)
- {{Glossary("Stacking_context", "Stapelkontext")}}
- [Statische Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#static_positioning)
- {{Glossary("Top_layer", "Obere Schicht")}}

## Leitfäden

- [Verstehen von z-index](/de/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
  - : Behandelt den Begriff des Stapelkontexts und erklärt, wie die Z-Ordnung funktioniert, mit mehreren Beispielen.
- [Stapelung ohne die `z-index` Eigenschaft](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_without_z-index)
  - : Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapelung schwebender Elemente](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_floating_elements)
  - : Wie schwebende Elemente in der Stapelung gehandhabt werden.
- [Verwendung von `z-index`](/de/docs/Web/CSS/Guides/Positioned_layout/Using_z-index)
  - : Wie `z-index` verwendet wird, um die Standard-Stapelung zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
  - : CSS-Stapelkontext, die CSS-Funktionen, die neue Stapelkontexte erstellen, und geschachtelte Stapelkontexte.
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die verschiedenen Positionswerte und wie man sie verwendet.

## Verwandte Konzepte

- {{cssxref("float")}}
- {{cssxref("clear")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-behavior")}}
- [Popover-API](/de/docs/Web/API/Popover_API)
- {{htmlelement("dialog")}}-Element

- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
  - {{cssxref("position-anchor")}}
  - {{cssxref("position-area")}}
  - {{cssxref("position-try-fallbacks")}}
  - {{cssxref("position-try-order")}}
  - {{cssxref("position-try")}} Kurzschreibweise
  - {{cssxref("position-visibility")}}

- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) Modul
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
- Positionsbezogene [Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
  - {{cssxref("baseline-position")}}
  - {{cssxref("content-position")}}
  - {{cssxref("overflow-position")}}
  - {{cssxref("self-position")}}
- [CSS Scroll Snap](/de/docs/Web/CSS/Guides/Scroll_snap) Modul
  - {{Glossary("Snap_positions", "Snap-Positionen")}}
