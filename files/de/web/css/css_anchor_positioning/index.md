---
title: CSS-Ankerpositionierung
slug: Web/CSS/CSS_anchor_positioning
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS-Ankerpositionierungsmodul** definiert Funktionen, die es Ihnen ermöglichen, Elemente miteinander zu verbinden. Bestimmte Elemente werden als **Ankerelemente** definiert; **ankerpositionierte Elemente** können dann in ihrer Größe und Position relativ zu diesen Ankerelementen, an die sie gebunden sind, eingestellt werden.

Zusätzlich bietet die Spezifikation ausschließlich CSS-basierte Mechanismen, um:

- Eine Reihe alternativer Positionen für ein ankeriertes Element anzugeben; wenn die Standardanzeigeposition dazu führt, dass es über seinen umgebenden Block hinausragt und/oder außerhalb des Bildschirms angezeigt wird, versucht der Browser, das ankerierte Element in den alternativen Positionen anzuzeigen.
- Bedingungen festzulegen, unter denen ankerpositionierte Elemente ausgeblendet werden sollten, wenn es unangemessen ist, sie an Ankerelemente zu binden.

## Referenz

### Eigenschaften

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try-order")}}
- {{cssxref("position-try")}} Kurzform
- {{cssxref("position-visibility")}}

Das CSS-Ankerpositionierungsmodul führt auch die Eigenschaft `anchor-scope` ein. Derzeit unterstützen keine Browser dieses Feature.

### @-Regeln und Deskriptoren

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

- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
  - : Ein einführender Leitfaden zu grundlegenden Konzepten der Ankerpositionierung, einschließlich der Zuordnung, Positionierung und Größenanpassung von Elementen relativ zu ihrem Anker.

- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
  - : Ein Leitfaden zu den Mechanismen, die die CSS-Ankerpositionierung bietet, um zu verhindern, dass ankerpositionierte Elemente ihre umliegenden Elemente oder das Ansichtsfenster überlaufen, einschließlich der Position-Try-Fallback-Optionen und des bedingten Ausblendens von Elementen.

## Verwandte Konzepte

- [Modul für CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values):
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
  - {{Glossary("Inset_properties", "Glossarbegriff für Einfassungs-Eigenschaften")}}
- [Modul für CSS-positioniertes Layout](/de/docs/Web/CSS/Guides/Positioned_layout):
  - {{cssxref("top")}}
  - {{cssxref("left")}}
  - {{cssxref("bottom")}}
  - {{cssxref("right")}}
- [Modul für CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model):
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
- [Modul für CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment):
  - {{cssxref("align-items")}}
  - {{cssxref("align-self")}}
  - {{cssxref("justify-items")}}
  - {{cssxref("justify-self")}}
  - {{cssxref("place-items")}}
  - {{cssxref("place-self")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Modul für CSS-Scroll-Ankerung](/de/docs/Web/CSS/Guides/Scroll_anchoring)
- [Lernen: CSS-Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)
- [Modul für CSS-logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- [Lernen: Größenanpassung in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Sizing)
