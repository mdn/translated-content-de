---
title: CSS-Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Ankerpositionierungs-Modul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Bestimmte Elemente werden als **Ankerelemente** definiert; **ankerpositionierte Elemente** können dann in Größe und Position basierend auf den Ankerelementen, an die sie gebunden sind, eingestellt werden.

Darüber hinaus bietet die Spezifikation CSS-only-Mechanismen, um:

- Eine Reihe von alternativen Positionen für ein verankertes Element anzugeben; wenn die Standard-Rendering-Position dazu führt, dass es seinen enthaltenen Block überläuft und/oder außerhalb des Bildschirms angezeigt wird, versucht der Browser, das verankerte Element in den alternativen Positionen anzuzeigen.
- Bedingungen zu deklarieren, unter welchen ankerpositionierte Elemente verborgen werden sollten, in Situationen, in denen es unpassend ist, sie an Ankerelemente zu binden.

## Referenz

### Eigenschaften

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- {{cssxref("position-try")}} Kurzform
- {{cssxref("position-visibility")}}

> [!NOTE]
> Das CSS-Ankerpositionierungs-Modul führt die `anchor-scope` Eigenschaft ein, die noch nicht implementiert wurde.

### At-Regeln und Deskriptoren

- {{cssxref("@position-try")}}

### Funktionen

- [`anchor()`](/de/docs/Web/CSS/anchor)
- [`anchor-size()`](/de/docs/Web/CSS/anchor-size)

### Datentypen und Werte

- [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center)
- [`<anchor-side>`](/de/docs/Web/CSS/anchor#anchor-side)
- [`<anchor-size>`](/de/docs/Web/CSS/anchor-size#anchor-size)
- [`<position-area>`](/de/docs/Web/CSS/position-area_value)
- [`<try-size>`](/de/docs/Web/CSS/position-try-order#try-size)
- [`<try-tactic>`](/de/docs/Web/CSS/position-try-fallbacks#try-tactic)

### HTML-Attribute

- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}

### Schnittstellen

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{non-standard_inline}}

## Leitfäden

- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
  - : Ein Einführungsguide zu den grundlegenden Konzepten der Ankerpositionierung, einschließlich der Zuordnung, Positionierung und Größenanpassung von Elementen relativ zu ihrem Anker.

- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
  - : Ein Leitfaden zu den Mechanismen, die die CSS-Ankerpositionierung bietet, um zu verhindern, dass ankerpositionierte Elemente ihre enthaltenen Elemente oder das Ansichtsfenster überlaufen, einschließlich Positions-Alternativoptionen und bedingtem Ausblenden von Elementen.

## Verwandte Konzepte

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul:
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
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul:
  - {{cssxref("top")}}
  - {{cssxref("left")}}
  - {{cssxref("bottom")}}
  - {{cssxref("right")}}
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul:
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
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul:
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("justify-items")}}
  - {{cssxref("justify-self")}}
  - {{cssxref("place-items")}}
  - {{cssxref("place-self")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Scroll-Anker](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Größe von Objekten in CSS festlegen](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
