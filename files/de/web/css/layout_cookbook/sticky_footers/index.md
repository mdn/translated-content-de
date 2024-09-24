---
title: Sticky-Fußzeilen
slug: Web/CSS/Layout_cookbook/Sticky_footers
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Ein Sticky-Footer-Muster ist eines, bei dem die Fußzeile Ihrer Seite an den unteren Rand des Viewports "haftet", wenn der Inhalt kürzer ist als die Höhe des Viewports. In diesem Rezept werden wir uns ein paar Techniken ansehen, um eine solche zu erstellen.

![Eine klebrige Fußzeile, die an den unteren Rand eines Rahmens gedrückt wird](cookbook-footer.png)

## Anforderungen

Das Sticky-Footer-Muster muss folgende Anforderungen erfüllen:

- Die Fußzeile haftet an der Unterkante des Viewports, wenn der Inhalt kurz ist.
- Wenn der Seiteninhalt über den unteren Rand des Viewports hinausgeht, sitzt die Fußzeile wie gewohnt unter dem Inhalt.

## Das Rezept

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer.html", '100%', 720)}}

> [!CALLOUT]
> Um sich den Code anzusehen, können Sie [das vollständige Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/sticky-footer--download.html).

> [!NOTE]
> In diesem Beispiel und im folgenden verwenden wir einen Wrapper, der auf `min-height: 100%` gesetzt ist. Sie können dies auch für eine vollständige Seite erreichen, indem Sie eine {{cssxref("min-height")}} von `100vh` auf das {{htmlelement("body")}} setzen und es dann als Ihren Grid-Container verwenden.

## Getroffene Entscheidungen

Im obigen Beispiel erreichen wir die Sticky-Fußzeile mittels CSS-Grid-Layout. Der `.wrapper` hat eine Mindesthöhe von `100%`, was bedeutet, dass er so hoch ist wie der Container, in dem er sich befindet. Wir erstellen dann ein einspaltiges Grid-Layout mit drei Reihen, eine Reihe für jeden Teil unseres Layouts.

Die automatische Platzierung des Grids ordnet unsere Elemente in Quellreihenfolge ein, sodass der Header in die erste automatisch dimensionierte Spur gelangt, der Hauptinhalt in die `1fr`-Spur und die Fußzeile in die letzte automatisch dimensionierte Spur. Die `1fr`-Spur nimmt den gesamten verfügbaren Platz ein und wächst daher, um die Lücke zu füllen.

## Alternative Methode

Sie können auch Flexbox verwenden, um eine Sticky-Fußzeile zu erstellen.

{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer-flexbox.html", '100%', 720)}}

Das Flexbox-Beispiel beginnt auf die gleiche Weise, aber wir verwenden `display:flex` anstelle von `display:grid` auf dem `.wrapper`; wir setzen auch `flex-direction` auf `column`. Dann setzen wir unseren Hauptinhalt auf `flex-grow: 1` und die anderen beiden Elemente auf `flex-shrink: 0` — dies verhindert, dass sie kleiner werden, wenn Inhalt den Hauptbereich füllt.

## Ressourcen auf MDN

- CSS-Eigenschaften: {{cssxref("display")}}, {{cssxref("min-height")}}, {{cssxref("grid-template-rows")}}, {{cssxref("flex-direction")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}
- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Modul [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- Modul [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
