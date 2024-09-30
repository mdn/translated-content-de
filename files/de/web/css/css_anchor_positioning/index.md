---
title: CSS Verankerungspositionierung
slug: Web/CSS/CSS_anchor_positioning
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{CSSRef}}

Das **CSS Verankerungspositionierung**-Modul definiert Funktionen, die es ermöglichen, Elemente miteinander zu verbinden. Bestimmte Elemente werden als **Verankerungselemente** definiert; **verankerungspositionierte Elemente** können dann ihre Größe und Position basierend auf der Größe und dem Standort der Verankerungselemente, an die sie gebunden sind, festlegen.

Darüber hinaus bietet die Spezifikation ausschließlich CSS-Mechanismen, um:

- Einen Satz alternativer Positionen für ein verankertes Element anzugeben; wenn die Standard-Rendering-Position dazu führt, dass es seinen enthaltenden Block überläuft und/oder außerhalb des Bildschirms gerendert wird, wird der Browser versuchen, das verankerte Element stattdessen an den alternativen Positionen darzustellen.
- Bedingungen zu deklarieren, unter denen verankerungspositionierte Elemente verborgen werden sollen, in Situationen, in denen es nicht angemessen ist, sie an Verankerungselemente zu binden.

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
> Das CSS Verankerungspositionierung-Modul führt die `anchor-scope`-Eigenschaft ein, die noch nicht implementiert wurde.

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

- [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}

### Schnittstellen

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{non-standard_inline}}

## Leitfäden

- [Verwendung der CSS Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)

  - : Ein einführender Leitfaden zu grundlegenden Konzepten der Verankerungspositionierung, einschließlich der Zuordnung, Positionierung und Größenbestimmung von Elementen relativ zu ihrer Verankerung.

- [Umgang mit Überlauf: Versuchen Sie Fallbacks und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)

  - : Ein Leitfaden zu den Mechanismen, die die CSS Verankerungspositionierung bietet, um zu verhindern, dass verankerungspositionierte Elemente ihre enthaltenen Elemente oder das Ansichtsfenster überlaufen, einschließlich Fallback-Optionen und bedingtem Verbergen von Elementen.

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
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
  - [Einfüge-Eigenschaften](/de/docs/Glossary/Inset_properties) Glossarbegriff
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
  - {{cssxref("block-size")}}
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

- [Lernen: CSS Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
- [Größenbestimmung von Elementen in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
