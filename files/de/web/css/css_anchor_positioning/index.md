---
title: Positionierung von CSS-Ankerpunkten
slug: Web/CSS/CSS_anchor_positioning
l10n:
  sourceCommit: a7335ef81c49b0f7604ee64240711456d0f29e6b
---

{{CSSRef}}

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es ermöglichen, Elemente miteinander zu verknüpfen. Bestimmte Elemente werden als **Ankerelemente** definiert; **ankerpositionierte Elemente** können dann in Größe und Position basierend auf der Größe und Position der Ankerelemente, an die sie gebunden sind, festgelegt werden.

Darüber hinaus bietet die Spezifikation ausschließlich CSS-basierte Mechanismen, um:

- Eine Reihe alternativer Positionen für ein verankertes Element festzulegen; wenn die Standard-Rendering-Position dazu führt, dass es seinen umgebenden Block überläuft und/oder außerhalb des sichtbaren Bereichs dargestellt wird, versucht der Browser, das verankerte Element stattdessen in den alternativen Positionen darzustellen.
- Bedingungen festzulegen, unter denen ankerpositionierte Elemente ausgeblendet werden sollten, in Situationen, in denen es nicht angebracht ist, sie an Ankerelemente zu binden.

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
> Das CSS-Ankerpositionierungsmodul führt die `anchor-scope`-Eigenschaft ein, die noch nicht implementiert ist.

### @-Regeln und Deskriptoren

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

- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}

### Schnittstellen

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{non-standard_inline}}

## Leitfäden

- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)

  - : Ein einführender Leitfaden zu grundlegenden Konzepten der Ankerpositionierung, einschließlich Verknüpfung, Positionierung und Größenanpassung von Elementen in Bezug auf ihren Anker.

- [Umgang mit Überlauf: Rückfalloptionen und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)

  - : Ein Leitfaden zu den Mechanismen, die die CSS-Ankerpositionierung bietet, um zu verhindern, dass ankerpositionierte Elemente ihre umgebenden Elemente oder den Ansichtsbereich überlaufen, einschließlich Position-Try-Rückfalloptionen und bedingtem Ausblenden von Elementen.

## Verwandte Konzepte

- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul:
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
  - {{Glossary("Inset_properties", "Einfügen-Eigenschaften")}} Glossareintrag
- [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul:
  - {{cssxref("top")}}
  - {{cssxref("left")}}
  - {{cssxref("bottom")}}
  - {{cssxref("right")}}
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul:
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
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul:
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("justify-items")}}
  - {{cssxref("justify-self")}}
  - {{cssxref("place-items")}}
  - {{cssxref("place-self")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Scroll-Verankerung](/de/docs/Web/CSS/CSS_scroll_anchoring) Modul
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Lernen: Größenanpassung von Elementen in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
