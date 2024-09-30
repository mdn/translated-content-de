---
title: Spaltenlayouts
slug: Web/CSS/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Häufig benötigen Sie ein Layout mit mehreren Spalten, und CSS bietet verschiedene Möglichkeiten, dies zu erreichen. Ob Sie [Multi-column](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [Grid](/de/docs/Web/CSS/CSS_grid_layout) verwenden, hängt davon ab, was Sie erreichen möchten. In diesem Rezept erkunden wir diese Optionen.

![Drei verschiedene Layoutstile, die zwei Spalten im Container haben.](cookbook-multiple-columns.png)

## Anforderungen

Es gibt eine Reihe von Designmustern, die Sie mit Ihren Spalten erreichen möchten:

- [Ein kontinuierlicher Faden von Inhalten, der in spaltenförmigen Layouts aufgebrochen ist, ähnlich wie in einer Zeitung](#ein_kontinuierlicher_faden_von_inhalten_—_multi-column-layout).
- [Eine einzelne Reihe von Elementen, die als Spalten angeordnet sind, wobei alle Höhen gleich sind](#eine_einzelne_reihe_von_elementen_mit_gleicher_höhe_—_flexbox).
- [Mehrere Reihen von Spalten, die nach Reihe und Spalte ausgerichtet sind](#elemente_in_reihen_und_spalten_ausrichten_—_grid-layout).

## Die Rezepte

Sie müssen verschiedene Layout-Methoden auswählen, um Ihre Anforderungen zu erfüllen.

### Ein kontinuierlicher Faden von Inhalten — Multi-Column-Layout

Wenn Sie Spalten mit einem Multi-Column-Layout erstellen, bleibt Ihr Text als kontinuierlicher Strom erhalten, der jede Spalte nacheinander füllt. Die Spalten müssen alle die gleiche Größe haben, und Sie können eine einzelne Spalte oder den Inhalt einer einzelnen Spalte nicht gezielt ansprechen.

Sie können die Lücken zwischen den Spalten mit den Eigenschaften {{cssxref("column-gap")}} oder {{cssxref("gap")}} steuern und eine Regel zwischen den Spalten mit {{cssxref("column-rule")}} hinzufügen.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-multicol.html", '100%', 720)}}

In diesem Beispiel haben wir die Eigenschaft {{cssxref("column-width")}} verwendet, um eine Mindestbreite festzulegen, die die Spalten haben müssen, bevor der Browser eine zusätzliche Spalte hinzufügt. Die Kurzschrift-Eigenschaft {{cssxref("columns")}} kann verwendet werden, um die Eigenschaften `column-width` und {{cssxref("column-count")}} festzulegen, wobei eine von beiden die maximale Anzahl von Spalten definieren kann.

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-multicol--download.html)

Verwenden Sie Multi-Column, wenn:

- Sie Ihren Text in spaltenförmigen Layouts, ähnlich wie in einer Zeitung, darstellen möchten.
- Sie eine Reihe kleiner Elemente haben, die Sie auf Spalten aufteilen möchten.
- Sie keine einzelnen Spaltenboxen für das Styling ansprechen müssen.

### Eine einzelne Reihe von Elementen mit gleicher Höhe — Flexbox

Flexbox kann verwendet werden, um Inhalte in Spalten aufzuteilen, indem {{cssxref("display", "display: flex;")}} gesetzt wird, um ein Elternelement zu einem Flex-Container zu machen. Allein das Hinzufügen dieser einen Eigenschaft verwandelt alle Kinder (Kindelemente, Pseudo-Elemente und Textknoten) in Flex-Elemente entlang einer einzigen Linie. Das Festlegen der gleichen Kurzschrift-Eigenschaft {{cssxref("flex")}} mit einem einzigen numerischen Wert verteilt den gesamten verfügbaren Platz gleichmäßig, sodass alle Flex-Elemente in der Regel die gleiche Größe haben, solange keines ein nicht umbruchfähiges Inhaltselement hat, das das Element größer zwingt.

Ränder oder die `gap`-Eigenschaft können verwendet werden, um Lücken zwischen Elementen zu schaffen, aber derzeit gibt es keine CSS-Eigenschaft, die Regeln zwischen Flex-Elementen hinzufügt.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox--download.html)

Um ein Layout mit Flex-Elementen zu erstellen, die sich auf neue Zeilen umwickeln, setzen Sie die {{cssxref("flex-wrap")}}-Eigenschaft am Container auf `wrap`. Beachten Sie, dass jede Flex-Linie nur für diese Linie Platz verteilt. Elemente in einer Linie werden nicht unbedingt mit Elementen in anderen Linien ausgerichtet, wie Sie im folgenden Beispiel sehen werden. Dies ist der Grund, warum Flexbox als eindimensional beschrieben wird. Es ist dafür ausgelegt, das Layout als Reihe oder Spalte zu steuern, aber nicht beides gleichzeitig.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox-wrapping.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox-wrapping--download.html)

Verwenden Sie Flexbox:

- Für einzelne Reihen oder Spalten von Elementen.
- Wenn Sie eine Ausrichtung auf der Querachse vornehmen möchten, nachdem Sie Ihre Elemente angeordnet haben.
- Wenn Sie zufrieden damit sind, dass gewrapte Elemente nur den Platz in ihrer Linie teilen und nicht mit Elementen in anderen Linien ausgerichtet werden.

### Elemente in Reihen und Spalten ausrichten — Grid-Layout

Wenn Sie ein zweidimensionales Raster möchten, bei dem die Elemente sowohl in Reihen _als auch_ in Spalten ausgerichtet sind, sollten Sie das CSS-Grid-Layout wählen. Ähnlich wie Flexbox an den direkten Kindern des Flex-Containers arbeitet, funktioniert das Grid-Layout an den direkten Kindern des Grid-Containers. Setzen Sie einfach {{cssxref("display", "display: grid;")}} auf den Container. Eigenschaften, die an diesem Container festgelegt sind — wie {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} — bestimmen, wie die Elemente entlang der Reihen und Spalten verteilt werden.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-grid.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-grid--download.html)

Verwenden Sie Grid:

- Für mehrere Reihen oder Spalten von Elementen.
- Wenn Sie die Elemente auf den Block- und Inline-Achsen ausrichten möchten.
- Wenn Sie möchten, dass sich Elemente in Reihen und Spalten ausrichten.

## Ressourcen auf MDN

- [Leitfaden zum Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout)
- [Leitfaden zu Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Leitfaden zum CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
