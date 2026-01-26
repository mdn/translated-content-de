---
title: CSS-Ankerpositionierung
short-title: Anchor positioning
slug: Web/CSS/Guides/Anchor_positioning
l10n:
  sourceCommit: 8300697ca75ca1e77175912110d4fe9ef48cb0bb
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Bestimmte Elemente werden als **Ankerelemente** definiert; **ankerpositionierte Elemente** können dann ihre Größe und Position basierend auf der Größe und Lage der Ankerelemente, mit denen sie verbunden sind, festlegen.

Darüber hinaus bietet die Spezifikation rein CSS-basierte Mechanismen, um:

- Eine Reihe von alternativen Positionen für ein verankertes Element anzugeben; wenn die Standardpositionierung dazu führt, dass es seinen enthaltenen Block überläuft und/oder außerhalb des Bildschirms dargestellt wird, wird der Browser versuchen, das verankerte Element in den alternativen Positionen darzustellen.
- Bedingungen festzulegen, unter denen ankerpositionierte Elemente ausgeblendet werden sollten, in Situationen, in denen es nicht angemessen ist, sie mit Ankerelementen zu verbinden.

## Referenz

### Eigenschaften

- {{cssxref("anchor-scope")}}
- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- {{cssxref("position-try")}} Kurzform
- {{cssxref("position-visibility")}}

### At-Regeln und Deskriptoren

- {{cssxref("@position-try")}}

### Funktionen

- [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)
- [`anchor-size()`](/de/docs/Web/CSS/Reference/Values/anchor-size)

### Datentypen und Werte

- [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)
- [`<anchor-side>`](/de/docs/Web/CSS/Reference/Values/anchor#anchor-side)
- [`<anchor-size>`](/de/docs/Web/CSS/Reference/Values/anchor-size#anchor-size)
- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)
- [`<try-size>`](/de/docs/Web/CSS/Reference/Properties/position-try-order#try-size)
- [`<try-tactic>`](/de/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)

### HTML-Attribute

- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}

### Schnittstellen

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{non-standard_inline}}

## Leitfäden

- [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
  - : Ein einführender Leitfaden zu grundlegenden Konzepten der Ankerpositionierung, einschließlich der Zuordnung, Positionierung und Größenanpassung von Elementen im Verhältnis zu ihrem Anker.

- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
  - : Ein Leitfaden zu den Mechanismen, die die CSS-Ankerpositionierung bietet, um zu verhindern, dass ankerpositionierte Elemente ihre enthaltenen Elemente oder den Viewport überlaufen, einschließlich Fallback-Optionen bei der Positionierung und bedingt ausblendbaren Elementen.

## Verwandte Konzepte

- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul:
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-inline-start")}}
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-block")}}
  - {{cssxref("inset-inline")}}
  - {{cssxref("inset")}} Kurzform
  - {{cssxref("inline-size")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("block-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
  - {{cssxref("margin-block")}}
  - {{cssxref("margin-block-end")}}
  - {{cssxref("margin-block-start")}}
  - {{cssxref("margin-inline")}}
  - {{cssxref("margin-inline-end")}}
  - {{cssxref("margin-inline-start")}}
  - {{Glossary("Inset_properties", "Inset-Eigenschaften")}} Glossarbegriff
- [CSS-positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout) Modul:
  - {{cssxref("top")}}
  - {{cssxref("left")}}
  - {{cssxref("bottom")}}
  - {{cssxref("right")}}
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul:
  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("min-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-width")}}
  - {{cssxref("max-height")}}
  - {{cssxref("margin")}}
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul:
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("justify-items")}}
  - {{cssxref("justify-self")}}
  - {{cssxref("place-items")}}
  - {{cssxref("place-self")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Scrollverankerung](/de/docs/Web/CSS/Guides/Scroll_anchoring) Modul
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
