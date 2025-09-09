---
title: CSS Fragmentierung
slug: Web/CSS/CSS_fragmentation
l10n:
  sourceCommit: 624d9809e328dd8fb7fd961b35c6156af2ca5e73
---

Das **CSS-Fragmentierung**-Modul definiert, wie Inhalt angezeigt wird, wenn er gebrochen (fragmentiert) und über mehrere [Seiten](/de/docs/Web/CSS/CSS_paged_media), Regionen oder [Spalten](/de/docs/Web/CSS/CSS_multicol_layout) fließt. Dieses Modul definiert Funktionen für Paginierung, variabel Fragmentgröße und -ausrichtung, Hurenkinder und Waisenkinder.

Dieses Modul erklärt, wie Inhalte über Fragmentierung-Container hinweg gebrochen werden und wie solche Brüche vom Autor kontrolliert werden können. Der allgemeine Begriff für das Brechen von Inhalten über Container hinweg ist _Fragmentierung_. Fragmentierung tritt auf, wenn ein Inline-Box auf mehrere Zeilen umbricht. Dies kann passieren, wenn Layout-Features wie das [CSS-Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout) verwendet werden: Zum Beispiel, wenn ein Block sich über mehr als eine Spalte innerhalb eines Spaltenlayout-Containers erstreckt oder einen Seitenumbruch beim Drucken überschreitet. Jedes Stück der Darstellung für das Element wird als _Fragment_ bezeichnet.

Wenn Inhalte physisch gedruckt oder als Druckvorschau angezeigt werden, gibt es Seitenumbrüche. In diesem paginierten Medium, im Gegensatz zu kontinuierlichen Medien, kann der Dokumentinhalt auf eine oder mehrere Seiten oder Fragmente aufgeteilt werden. Um unangenehme Brüche zu vermeiden, wie etwa mitten durch eine Textzeile oder mit einem einsamen Wort auf einer eigenen Seite, können Browser den Inhalt verschieben, der andernfalls über den Seitenumbruch hinweg fallen würde, in einem Prozess, der als _Paginierung_ bezeichnet wird.

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
  - : Einführung in die Fragmentierungsspezifikation und wie kontrolliert wird, wo Spalteninhalte gebrochen werden.

## Verwandte Konzepte

- {{cssxref("overflow")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}, und {{cssxref("block-size")}} CSS-Eigenschaften
- {{cssxref("width")}}, {{cssxref("max-width")}}, und {{cssxref("inline-size")}} CSS-Eigenschaften
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)

[CSS paged media](/de/docs/Web/CSS/CSS_paged_media) Modul

- {{cssxref("page")}}
- {{cssxref("@page")}}

[CSS display](/de/docs/Web/CSS/CSS_display) Modul

- [Hauptbox](/de/docs/Web/CSS/CSS_display/Visual_formatting_model#the_principal_box) Begriff
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`horizontal-viewport-segments`](/de/docs/Web/CSS/@media/horizontal-viewport-segments) und [`vertical-viewport-segments`](/de/docs/Web/CSS/@media/vertical-viewport-segments) `@media` Deskriptoren
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [CSS Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
