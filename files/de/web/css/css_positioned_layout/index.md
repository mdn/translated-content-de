---
title: CSS Positioniertes Layout
slug: Web/CSS/CSS_positioned_layout
l10n:
  sourceCommit: c57ac08cf95dfeff23e5f0e1486b0986752fe4ec
---

Das **CSS positioniertes Layout**-Modul definiert die koordinatenbasierte Positionierung und Verschiebungsmethoden, die in CSS verfügbar sind, sowie die Eigenschaften, die verwendet werden, um Elemente auf einer Webseite zu positionieren und zu stapeln. Das Modul ist am besten bekannt für die Definition der grundlegenden Positionierungsmethoden, einschließlich relativer Positionierung, Sticky-Positionierung, absoluter Positionierung und fester Positionierung. Es definiert auch, wie positionierte Elemente gemalt und geschichtet werden, und klärt das Stapelverhalten und die visuelle Reihenfolge.

Das Modul für positioniertes Layout definiert die physischen, logischen und abgekürzten {{Glossary("inset_properties", "Inset-Eigenschaften")}}. Die logischen Eigenschaften ermöglichen es, die Entwicklung mit Internationalisierung und Reaktionsfähigkeit im Blick zu haben.

Wie alle CSS-Module beeinflusst dieses Modul andere Module und wird von ihnen beeinflusst. Dieses Modul beschreibt, wie die Positionierung mit anderen Layout-Modulen wie dem [CSS flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) und dem [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) interagiert. Andere Module, wie das [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), bauen auf diesem Modul auf, um die Positionierung von Elementen relativ zu anderen Elementen und Ebenen zu ermöglichen.

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
- {{Glossary("Inset_properties", "Inset-Eigenschaften")}}
- [Positionierungskontext](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#positioning_contexts)
- [Relative Position](/de/docs/Web/CSS/position#relative_positioning)
- {{Glossary("Stacking_context", "Stapellagen-Kontext")}}
- [Statische Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#static_positioning)
- {{Glossary("Top_layer", "Obere Ebene")}}

## Leitfaden

- [Verständnis von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
  - : Stellt das Konzept des Stapel-Kontexts vor und erklärt, wie z-Ordnung funktioniert, mit mehreren Beispielen.
- [Stapeln ohne die Eigenschaft `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
  - : Die Stapelregeln, die angewendet werden, wenn `z-index` nicht verwendet wird.
- [Stapeln von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
  - : Wie schwebende Elemente beim Stapeln behandelt werden.
- [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
  - : Wie Sie `z-index` verwenden, um die Standardreihenfolge zu ändern.
- [Stapellagen-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
  - : CSS Stapellagen-Kontext, die CSS-Funktionen, die neue Stapel-Kontexte erstellen, und geschachtelte Stapel-Kontexte.
- [Lernen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : Die verschiedenen Positionswerte und deren Verwendung.

## Verwandte Konzepte

- {{cssxref("float")}}
- {{cssxref("clear")}}
- {{cssxref("transition-property")}}
- {{cssxref("transition-behavior")}}
- [Popover-API](/de/docs/Web/API/Popover_API)
- {{htmlelement("dialog")}}-Element

- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
  - {{cssxref("position-anchor")}}
  - {{cssxref("position-area")}}
  - {{cssxref("position-try-fallbacks")}}
  - {{cssxref("position-try-order")}}
  - {{cssxref("position-try")}} Abkürzung
  - {{cssxref("position-visibility")}}

- [CSS Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
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
- Positionsbezogene [Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
  - {{cssxref("baseline-position")}}
  - {{cssxref("content-position")}}
  - {{cssxref("overflow-position")}}
  - {{cssxref("self-position")}}
- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul
  - {{Glossary("Snap_positions", "Snap-Positionen")}}
