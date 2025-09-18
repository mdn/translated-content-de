---
title: CSS-Fragmentierung
slug: Web/CSS/CSS_fragmentation
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

Das **CSS-Fragmentierungs**-Modul definiert, wie Inhalte angezeigt werden, wenn sie unterbrochen (fragmentiert) und über mehrere [Seiten](/de/docs/Web/CSS/CSS_paged_media), Regionen oder [Spalten](/de/docs/Web/CSS/CSS_multicol_layout) hinweg fließen. Dieses Modul definiert Funktionen für die Paginierung, das Brechen variabler Fragmentgrößen und -orientierungen sowie für Witwen und Waisen.

Dieses Modul erklärt, wie Inhalte über Fragmentierungscontainer hinweg gebrochen werden und wie solche Brüche vom Autor kontrolliert werden können. Der generische Begriff für das Brechen von Inhalten über Container hinweg ist _Fragmentierung_. Fragmentierung tritt auf, wenn ein Inline-Box in mehrere Zeilen umbricht. Dies kann passieren, wenn Layout-Funktionen wie das [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet werden: Zum Beispiel, wenn ein Block in einem Spaltenlayout-Container über mehr als eine Spalte oder beim Drucken über einen Seitenumbruch hinweg reicht. Jedes Stück der Darstellung des Elements wird als _Fragment_ bezeichnet.

Wenn Inhalte physisch gedruckt oder als Druckvorschau angezeigt werden, gibt es Seitenumbrüche. In diesen Paginierungsmedien, im Gegensatz zu kontinuierlichen Medien, kann der Dokumentinhalt zwischen einer oder mehreren Seiten oder Fragmenten aufgeteilt werden. Um ungeschickte Brüche, wie zum Beispiel innerhalb einer Textzeile oder mit einem einzelnen Wort auf einer eigenen Seite zu vermeiden, können Browser Inhalte verschieben, die sonst über den Seitenumbruch fallen würden. Dieser Prozess wird _Paginierung_ genannt.

## Referenz

### Eigenschaften

- {{cssxref("box-decoration-break")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("orphans")}}
- {{cssxref("widows")}}

### Glossarbegriffe und Definitionen

- {{Glossary("Fragmentainer", "Fragmentainer")}}

## Leitfäden

- [Umgang mit Inhaltsumbrüchen im Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Einführung in die Fragmentierungsspezifikation und wie gesteuert werden kann, wo Spalteninhalte gebrochen werden.

## Verwandte Konzepte

- {{cssxref("overflow")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}, und {{cssxref("block-size")}} CSS-Eigenschaften
- {{cssxref("width")}}, {{cssxref("max-width")}}, und {{cssxref("inline-size")}} CSS-Eigenschaften
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)

[CSS Paged Media](/de/docs/Web/CSS/CSS_paged_media) Modul

- {{cssxref("page")}}
- {{cssxref("@page")}}

[CSS Display](/de/docs/Web/CSS/CSS_display) Modul

- [Hauptbox](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#the_principal_box) Begriff
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`horizontal-viewport-segments`](/de/docs/Web/CSS/@media/horizontal-viewport-segments) und [`vertical-viewport-segments`](/de/docs/Web/CSS/@media/vertical-viewport-segments) `@media` Deskriptoren
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
