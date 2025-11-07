---
title: CSS-Fragmentierung
slug: Web/CSS/CSS_fragmentation
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **CSS-Fragmentierung**-Modul definiert, wie Inhalte angezeigt werden, wenn sie gebrochen (fragmentiert) sind und über mehrere [Seiten](/de/docs/Web/CSS/Guides/Paged_media), Regionen oder [Spalten](/de/docs/Web/CSS/Guides/Multicol_layout) fließen. Dieses Modul definiert Funktionen für Paginierung, variable Fragmentgrößen und -ausrichtungen, Hurenkinder und Schusterjungen.

Dieses Modul erklärt, wie Inhalte über Fragmentierungscontainer hinweg gebrochen werden und wie solche Brüche vom Autor kontrolliert werden können. Der Oberbegriff für das Brechen von Inhalten über Container hinweg ist _Fragmentierung_. Fragmentierung tritt auf, wenn ein Inline-Element auf mehrere Zeilen umbrochen wird. Dies kann passieren, wenn Layout-Funktionen wie das [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) verwendet werden: Zum Beispiel, wenn ein Block mehr als eine Spalte innerhalb eines Spaltenlayout-Containers überspannt oder einen Seitenumbruch beim Drucken überbrückt. Jedes Stück der Darstellung für das Element wird als _Fragment_ bezeichnet.

Wenn Inhalte physisch gedruckt oder als Druckvorschau angezeigt werden, gibt es Seitenumbrüche. In diesem Druckmedium, im Gegensatz zu kontinuierlichen Medien, können Dokumentinhalte zwischen einer oder mehreren Seiten oder Fragmenten aufgeteilt werden. Um unglückliche Brüche zu vermeiden, wie zum Beispiel mitten durch eine Textzeile oder mit einem einzelnen Wort auf einer eigenen Seite, können Browser Inhalte verschieben, die ansonsten über den Seitenumbruch fallen würden, in einem Prozess, der als _Paginierung_ bezeichnet wird.

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

- [Behandlung von Inhaltsbrüchen im Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)
  - : Einführung in die Fragmentierungsspezifikation und wie Kontrolliert wird, wo Spalteninhalte brechen.

## Verwandte Konzepte

- {{cssxref("overflow")}}
- {{cssxref("height")}}, {{cssxref("max-height")}}, und {{cssxref("block-size")}} CSS-Eigenschaften
- {{cssxref("width")}}, {{cssxref("max-width")}}, und {{cssxref("inline-size")}} CSS-Eigenschaften
- [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)

[CSS paged media](/de/docs/Web/CSS/Guides/Paged_media) Modul

- {{cssxref("page")}}
- {{cssxref("@page")}}

[CSS display](/de/docs/Web/CSS/Guides/Display) Modul

- [Hauptbox](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model#the_principal_box) Begriff
- [Blockformatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) Leitfaden

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`horizontal-viewport-segments`](/de/docs/Web/CSS/Reference/At-rules/@media/horizontal-viewport-segments) und [`vertical-viewport-segments`](/de/docs/Web/CSS/Reference/At-rules/@media/vertical-viewport-segments) `@media` Deskriptoren
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul
