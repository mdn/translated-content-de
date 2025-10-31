---
title: CSS Anker-Positionierung
slug: Web/CSS/CSS_anchor_positioning
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **CSS Anker-Positionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Bestimmte Elemente werden als **Ankerelemente** definiert; **anker-positionierte Elemente** können dann in ihrer Größe und Position basierend auf der Größe und dem Ort der Ankerelemente, an die sie gebunden sind, eingestellt werden.

Darüber hinaus bietet die Spezifikation CSS-Mechanismen, um:

- Eine Reihe von alternativen Positionen für ein verankertes Element anzugeben; wenn die Standard-Renderposition dazu führt, dass es seinen enthaltenden Block überläuft und/oder außerhalb des Bildschirms dargestellt wird, versucht der Browser, das verankerte Element an den alternativen Positionen darzustellen.
- Bedingungen festzulegen, unter denen anker-positionierte Elemente verborgen werden sollen, in Situationen, in denen es nicht angemessen ist, sie an Ankerelemente zu binden.

## Referenz

### Eigenschaften

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- {{cssxref("position-try")}} Abkürzung
- {{cssxref("position-visibility")}}

Das CSS Anker-Positionierungsmodul führt auch die `anchor-scope`-Eigenschaft ein. Derzeit unterstützt kein Browser diese Funktion.

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
- [`<try-size>`](/de/docs/Web/CSS/Reference/Properties/position-try-order#try-size)
- [`<try-tactic>`](/de/docs/Web/CSS/Reference/Properties/position-try-fallbacks#try-tactic)

### HTML-Attribute

- [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) {{non-standard_inline}}

### Schnittstellen

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{non-standard_inline}}

## Leitfäden

- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
  - : Ein einführender Leitfaden zu grundlegenden Konzepten der Anker-Positionierung, einschließlich der Assoziierung, Positionierung und Größenanpassung von Elementen relativ zu ihrem Anker.

- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
  - : Ein Leitfaden zu den Mechanismen, die die CSS Anker-Positionierung bereitstellt, um zu verhindern, dass anker-positionierte Elemente ihre enthaltenen Elemente oder das Ansichtsfenster überlaufen, einschließlich Positions-Fallback-Optionen und bedingtem Ausblenden von Elementen.

## Verwandte Konzepte

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul:
  - {{cssxref("inset-block-start")}}
  - {{cssxref("inset-block-end")}}
  - {{cssxref("inset-inline-start")}}
  - {{cssxref("inset-inline-end")}}
  - {{cssxref("inset-block")}}
  - {{cssxref("inset-inline")}}
  - {{cssxref("inset")}} Abkürzung
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
- [CSS Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul:
  - {{cssxref("top")}}
  - {{cssxref("left")}}
  - {{cssxref("bottom")}}
  - {{cssxref("right")}}
- [CSS Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul:
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

- [CSS Scrollverankerung](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
- [Lernen: CSS Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
