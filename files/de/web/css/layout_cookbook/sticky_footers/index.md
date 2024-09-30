---
title: Sticky footers
slug: Web/CSS/Layout_cookbook/Sticky_footers
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Ein "Sticky Footer"-Muster ist eines, bei dem der Footer Ihrer Seite am unteren Rand des Ansichtsfensters "haftet", wenn der Inhalt kürzer als die Ansichtsfensterhöhe ist. In diesem Rezept werden wir uns einige Techniken zur Erstellung eines solchen Musters ansehen.

![Ein Sticky Footer, der an den unteren Rand einer Box gedrückt wird](cookbook-footer.png)

## Anforderungen

Das "Sticky Footer"-Muster muss die folgenden Anforderungen erfüllen:

- Footer bleibt unten im Ansichtsfenster, wenn der Inhalt kurz ist.
- Wenn der Seiteninhalt über den unteren Rand des Ansichtsfensters hinausgeht, wird der Footer unter dem Inhalt wie gewohnt angezeigt.

## Das Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer.html", '100%', 720)}}

> [!CALLOUT]
> Um sich den Code anzusehen, können Sie [das vollständige Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/sticky-footer--download.html).

> [!NOTE]
> In diesem Beispiel und dem folgenden verwenden wir einen Wrapper, der auf `min-height: 100%` gesetzt ist. Sie können dies auch für eine ganze Seite erreichen, indem Sie eine {{cssxref("min-height")}} von `100vh` auf das {{htmlelement("body")}} setzen und es dann als Ihren Grid-Container verwenden.

## Getroffene Entscheidungen

Im obigen Beispiel erreichen wir den Sticky Footer mit dem CSS Grid Layout. Der `.wrapper` hat eine Mindesthöhe von `100%`, was bedeutet, dass er so hoch ist wie der Container, in dem er sich befindet. Dann erstellen wir ein einspaltiges Grid-Layout mit drei Zeilen, eine Zeile für jeden Teil unseres Layouts.

Grid-Auto-Placement platziert unsere Elemente in der Reihenfolge der Quelle, sodass der Header in die erste automatisch dimensionierte Spur geht, der Hauptinhalt in die `1fr` Spur und der Footer in die letzte automatisch dimensionierte Spur. Die `1fr` Spur nimmt den gesamten verfügbaren Platz ein und wächst somit, um die Lücke zu füllen.

## Alternative Methode

Sie können auch Flexbox verwenden, um einen Sticky Footer zu erstellen.

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer-flexbox.html", '100%', 720)}}

Das Flexbox-Beispiel beginnt auf dieselbe Weise, wir verwenden jedoch `display:flex` anstelle von `display:grid` auf dem `.wrapper`; wir setzen auch `flex-direction` auf `column`. Dann setzen wir unseren Hauptinhalt auf `flex-grow: 1` und die beiden anderen Elemente auf `flex-shrink: 0` — dies verhindert, dass sie kleiner werden, wenn der Inhalt den Hauptbereich füllt.

## Ressourcen auf MDN

- CSS-Eigenschaften: {{cssxref("display")}}, {{cssxref("min-height")}}, {{cssxref("grid-template-rows")}}, {{cssxref("flex-direction")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}
- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [Grundlegende Konzepte des Flexbox-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
