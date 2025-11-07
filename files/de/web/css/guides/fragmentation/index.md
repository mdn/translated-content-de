---
title: CSS-Fragmentierung
short-title: Fragmentation
slug: Web/CSS/Guides/Fragmentation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Fragmentierungsmodul** definiert, wie Inhalte angezeigt werden, wenn sie aufgebrochen (fragmentiert) und über mehrere [Seiten](/de/docs/Web/CSS/Guides/Paged_media), Regionen oder [Spalten](/de/docs/Web/CSS/Guides/Multicol_layout) fließen. Dieses Modul definiert Funktionen für Paginierung, variable Fragmentgrößen und -ausrichtungen, "Widows" und "Orphans".

Dieses Modul erklärt, wie Inhalte über Fragmentierungscontainer hinweg aufgebrochen werden und wie solche Aufbrüche vom Autor gesteuert werden können. Der generische Begriff für das Aufbrechen von Inhalten über Container hinweg ist _Fragmentierung_. Fragmentierung tritt auf, wenn ein Inline-Block auf mehrere Zeilen umgebrochen wird. Dies kann passieren, wenn Layout-Funktionen wie das [CSS-Multispalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) verwendet werden: Zum Beispiel, wenn ein Block mehrere Spalten innerhalb eines Spaltenlayouts abdeckt oder einen Seitenumbruch beim Drucken überspannt. Jedes Stück der Darstellung des Elements wird als _Fragment_ bezeichnet.

Wenn Inhalte physisch gedruckt oder als Druckvorschau angezeigt werden, gibt es Seitenumbrüche. In diesem paginierten Medium, im Gegensatz zu kontinuierlichen Medien, kann der Dokumentinhalt zwischen einer oder mehreren Seiten oder Fragmenten aufgeteilt werden. Um ungeschickte Umbrüche, wie zum Beispiel mitten durch eine Textzeile oder mit einem einzelnen Wort auf einer eigenen Seite zu vermeiden, können Browser Inhalte verschieben, die sonst über den Seitenumbruch fallen würden. Dieser Prozess wird als _Paginierung_ bezeichnet.

## Referenz

### Eigenschaften

- {{cssxref("box-decoration-break")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

### Glossarbegriffe

- {{Glossary("Fragmentainer", "Fragmentainer")}}

## Leitfäden

- [Umgang mit Inhaltsumbrüchen im Multispalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : Einführung in die Fragmentierungsspezifikation und wie man steuert, wo der Spalteninhalt aufbricht.

## Verwandte Konzepte

- {{cssxref("overflow")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}, und {{cssxref("block-size")}} CSS-Eigenschaften
- {{cssxref("width")}}, {{cssxref("max-width")}}, und {{cssxref("inline-size")}} CSS-Eigenschaften
- [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)

[CSS-seitige Medien](/de/docs/Web/CSS/Guides/Paged_media) Modul

- {{cssxref("page")}}
- {{cssxref("@page")}}

[CSS-Anzeige](/de/docs/Web/CSS/Guides/Display) Modul

- [Hauptbox](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#the_principal_box) Begriff
- [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`horizontal-viewport-segments`](/de/docs/Web/CSS/Reference/At-rules/@media/horizontal-viewport-segments) und [`vertical-viewport-segments`](/de/docs/Web/CSS/Reference/At-rules/@media/vertical-viewport-segments) `@media` Deskriptoren
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [CSS-Multispalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
