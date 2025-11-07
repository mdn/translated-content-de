---
title: CSS-Positionierungs-Layout
slug: Web/CSS/CSS_positioned_layout
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS-Positionierungs-Layout**-Modul definiert die auf Koordinaten basierenden Positionierungs- und Verschiebungsschemata, die in CSS verfügbar sind, sowie die Eigenschaften, die zur Positionierung und Schichtung von Elementen auf einer Webseite verwendet werden. Das Modul ist hauptsächlich bekannt für die Definition der grundlegenden Positionierungsmethoden, einschließlich relativer Positionierung, Sticky-Positionierung, absoluter Positionierung und fester Positionierung. Es definiert auch, wie positionierte Elemente gemalt und geschichtet werden, und klärt das Stapelverhalten und die visuelle Reihenfolge.

Das Positionierungs-Layout-Modul definiert die physischen, logischen und abgekürzten {{Glossary("inset_properties", "Einsetz-Eigenschaften")}}. Die logischen Eigenschaften ermöglichen die Entwicklung mit Blick auf Internationalisierung und Reaktionsfähigkeit.

Wie alle CSS-Module beeinflusst dieses Modul andere Module und wird von ihnen beeinflusst. Dieses Modul beschreibt, wie die Positionierung mit anderen Layout-Modulen wie dem [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und dem [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) interagiert. Andere Module, wie z.B. die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning), bauen auf diesem Modul auf, um eine Positionierung von Elementen relativ zu anderen Elementen und Ebenen zu ermöglichen.

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
- [Umschließender Block](/de/docs/Web/CSS/CSS_display/Containing_block)
- {{Glossary("Flow_relative_values", "Fluss relative Werte")}}
- {{Glossary("Flow_relative_values#inline_direction", "Inline-Richtung")}}
- {{Glossary("Inset_properties", "Einsetz-Eigenschaften")}}
- [Positionierungskontext](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#positioning_contexts)
- [Relative Position](/de/docs/Web/CSS/Reference/Properties/position#relative_positioning)
- {{Glossary("Stacking_context", "Stapelkontext")}}
- [Statische Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#static_positioning)
- {{Glossary("Top_layer", "Oberste Schicht")}}

## Leitfäden

- [Z-Index verstehen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Stellt das Konzept des Stapelkontexts vor und erklärt die Funktionsweise des Z-Ordering anhand mehrerer Beispiele.
- [Stapeln ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
  - : Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
- [Stapeln von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
  - : Wie schwebende Elemente beim Stapeln behandelt werden.
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
  - : Wie man `z-index` verwendet, um das Standard-Stapeln zu ändern.
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
  - : CSS-Stapelkontext, die CSS-Funktionen, die neue Stapelkontexte erstellen, und verschachtelte Stapelkontexte.
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die verschiedenen Positionswerte und deren Verwendung.

## Verwandte Konzepte

- {{cssxref("float")}}
- {{cssxref("clear")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-behavior")}}
- [Popover API](/de/docs/Web/API/Popover_API)
- {{htmlelement("dialog")}}-Element

- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
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

- Andere CSS `*-position`-Eigenschaften:
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
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
  - {{Glossary("Snap_positions", "Schnapp-Positionen")}}
