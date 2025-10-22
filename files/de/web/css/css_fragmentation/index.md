---
title: CSS-Fragmentierung
slug: Web/CSS/CSS_fragmentation
l10n:
  sourceCommit: 016ecd8ccaed866c4d8d995fb18379c6e48f3b50
---

Das **CSS-Fragmentierungsmodul** definiert, wie Inhalte angezeigt werden, wenn sie unterbrochen (fragmentiert) und auf mehrere [Seiten](/de/docs/Web/CSS/CSS_paged_media), Regionen oder [Spalten](/de/docs/Web/CSS/CSS_multicol_layout) verteilt werden. Dieses Modul definiert Funktionen für die Paginierung, das Brechen von variablen Fragmentgrößen und -ausrichtungen, Witwen und Waisen.

Dieses Modul erklärt, wie Inhalte über Fragmentierungscontainer hinweg unterbrochen werden und wie solche Unterbrechungen vom Autor gesteuert werden können. Der generische Begriff für das Aufteilen von Inhalten über Container hinweg ist _Fragmentierung_. Fragmentierung tritt auf, wenn ein Inline-Block in mehrere Zeilen umbricht. Dies kann passieren, wenn Layout-Funktionen wie das [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet werden: Zum Beispiel, wenn ein Block in einem Spaltenlayout-Container mehr als eine Spalte überspannt oder beim Drucken einen Seitenumbruch überspannt. Jedes Stück der Darstellung des Elements wird als _Fragment_ bezeichnet.

Wenn Inhalte physisch gedruckt oder als Druckvorschau angezeigt werden, gibt es Seitenumbrüche. In diesen paginierten Medien, im Gegensatz zu kontinuierlichen Medien, können Dokumenteninhalte zwischen einer oder mehreren Seiten oder Fragmenten aufgeteilt werden. Um ungeschickte Umbrüche zu vermeiden, wie zum Beispiel mitten durch eine Textzeile oder mit einem einzelnen Wort auf einer eigenen Seite, können Browser Inhalte, die sonst über den Seitenumbruch fallen würden, verschieben. Dieser Prozess wird als _Paginierung_ bezeichnet.

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

- [Behandlung von Inhaltsumbrüchen im Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Einführung in die Fragmentierungsspezifikation und wie man steuert, wo Spalteninhalte unterbrochen werden.

## Verwandte Konzepte

- {{cssxref("overflow")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}, und {{cssxref("block-size")}} CSS-Eigenschaften
- {{cssxref("width")}}, {{cssxref("max-width")}}, und {{cssxref("inline-size")}} CSS-Eigenschaften
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)

[CSS-gestaltete Medien](/de/docs/Web/CSS/CSS_paged_media) Modul

- {{cssxref("page")}}
- {{cssxref("@page")}}

[CSS-Anzeige](/de/docs/Web/CSS/CSS_display) Modul

- [Hauptbox](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#the_principal_box) Begriff
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`horizontal-viewport-segments`](/de/docs/Web/CSS/@media/horizontal-viewport-segments) und [`vertical-viewport-segments`](/de/docs/Web/CSS/@media/vertical-viewport-segments) `@media` Deskriptoren
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
