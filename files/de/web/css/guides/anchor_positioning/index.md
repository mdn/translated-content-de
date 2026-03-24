---
title: CSS-Verankerungspositionierung
short-title: Anchor positioning
slug: Web/CSS/Guides/Anchor_positioning
l10n:
  sourceCommit: 879a1aece3a1d4eb28c0024f0baac6aa1b96638e
---

Das **CSS-Verankerungspositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Bestimmte Elemente werden als **Verankerungselemente** definiert; **verankerungspositionierte Elemente** können dann in ihrer Größe und Position basierend auf der Größe und der Position der Verankerungselemente, an die sie gebunden sind, gesetzt werden.

Darüber hinaus bietet die Spezifikation reine CSS-Mechanismen um:

- Eine Reihe von alternativen Positionen für ein verankertes Element anzugeben; wenn die Standard-Rendering-Position dazu führt, dass es über seinen enthaltenden Block hinaus und/oder außerhalb des Bildschirms gerendert wird, versucht der Browser, das verankerte Element stattdessen in den alternativen Positionen zu rendern.
- Bedingungen zu deklarieren, unter denen verankerungspositionierte Elemente ausgeblendet werden sollten, in Situationen, in denen es nicht angebracht ist, sie an Verankerungselemente zu binden.

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

- [Verwendung der CSS-Verankerungspositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
  - : Ein Einführungsguide zu grundlegenden Konzepten der Verankerungspositionierung, einschließlich der Zuordnung, Positionierung und Größenanpassung von Elementen relativ zu ihrer Verankerung.

- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
  - : Ein Leitfaden zu den Mechanismen, die die CSS-Verankerungspositionierung bietet, um zu verhindern, dass verankerungspositionierte Elemente ihren enthaltenden Elementen oder dem Viewport überlaufen, einschließlich der Fälle, in denen die Möglichkeit besteht, Positionen zu versuchen und Elemente bei Bedarf auszublenden.

- [Verwendung verankerter Container-Abfragen](/de/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
  - : Erklärt, wie man verankerte Container-Abfragen verwendet, um bedingt Stile auf verankerungspositionierte Elemente anzuwenden, abhängig davon, welche Positionsversuche für sie aktiv sind.

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
- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul:
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

- [CSS Scroll-Ankerung](/de/docs/Web/CSS/Guides/Scroll_anchoring) Modul
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values) Modul
- [Lernen: Größenänderung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
