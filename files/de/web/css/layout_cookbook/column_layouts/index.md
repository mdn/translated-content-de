---
title: Spaltenlayouts
slug: Web/CSS/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Sie werden oft ein Layout erstellen müssen, das aus mehreren Spalten besteht, und CSS bietet verschiedene Möglichkeiten, dies zu erreichen. Ob Sie [Multi-column](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [Grid](/de/docs/Web/CSS/CSS_grid_layout) verwenden, hängt davon ab, was Sie erreichen möchten. In diesem Rezept erkunden wir diese Optionen.

![drei verschiedene Layoutstile, die zwei Spalten im Container haben.](cookbook-multiple-columns.png)

## Anforderungen

Es gibt eine Reihe von Designmustern, die Sie mit Ihren Spalten erreichen möchten:

- [Ein durchgehender Faden von Inhalten, der in Zeitungsstil-Spalten aufgeteilt ist](#ein_durchgehender_faden_von_inhalten_—_multi-column-layout).
- [Eine einzelne Reihe von Elementen, die als Spalten angeordnet sind, wobei alle Höhen gleich sind](#eine_einzelne_reihe_von_elementen_mit_gleicher_höhe_—_flexbox).
- [Mehrere Reihen von Spalten, die nach Reihen und Spalten ausgerichtet sind](#elemente_in_reihen_und_spalten_ausrichten_—_grid-layout).

## Die Rezepte

Sie müssen verschiedene Layoutmethoden wählen, um Ihre Anforderungen zu erfüllen.

### Ein durchgehender Faden von Inhalten — Multi-Column-Layout

Wenn Sie Spalten mit Multi-Column-Layout erstellen, bleibt Ihr Text ein durchgehender Strom, der jede Spalte der Reihe nach füllt. Alle Spalten müssen die gleiche Größe haben, und Sie können keine einzelne Spalte oder den Inhalt einer einzelnen Spalte gezielt ansprechen.

Sie können die Abstände zwischen den Spalten mit den Eigenschaften {{cssxref("column-gap")}} oder {{cssxref("gap")}} steuern und eine Linie zwischen den Spalten mit {{cssxref("column-rule")}} hinzufügen.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-multicol.html", '100%', 720)}}

In diesem Beispiel haben wir die Eigenschaft {{cssxref("column-width")}} verwendet, um eine Mindestbreite festzulegen, die die Spalten benötigen, bevor der Browser eine zusätzliche Spalte hinzufügt. Die Kurzschreibweise {{cssxref("columns")}} kann verwendet werden, um die Eigenschaften `column-width` und {{cssxref("column-count")}} festzulegen, von denen eine die maximale Anzahl an erlaubten Spalten definieren kann.

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-multicol--download.html)

Verwenden Sie Multicol, wenn:

- Sie möchten, dass Ihr Text in spaltenähnlichen Zeitungsformaten angezeigt wird.
- Sie eine Reihe kleiner Elemente haben, die Sie in Spalten unterteilen möchten.
- Sie keine individuellen Spaltenboxen zum Stylen ansprechen müssen.

### Eine einzelne Reihe von Elementen mit gleicher Höhe — Flexbox

Flexbox kann verwendet werden, um Inhalte in Spalten aufzuteilen, indem {{cssxref("display", "display: flex;")}} festgelegt wird, um ein Elternelement in einen Flex-Container zu verwandeln. Allein durch Hinzufügen dieser einen Eigenschaft werden alle Kinder (Kind-Elemente, Pseudo-Elemente und Textknoten) in Flex-Elemente entlang einer Zeile umgewandelt. Durch Festlegung der gleichen Kurzschreibweise {{cssxref("flex")}} mit einem einzigen numerischen Wert wird der gesamte verfügbare Raum gleichmäßig verteilt, wobei im Allgemeinen alle Flex-Elemente die gleiche Größe haben, solange keines nicht umbrechenden Inhalt hat, der das Element größer macht.

Abstände oder die `gap`-Eigenschaft können verwendet werden, um Lücken zwischen den Elementen zu schaffen, aber es gibt derzeit keine CSS-Eigenschaft, die Linien zwischen Flex-Elementen hinzufügt.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox--download.html)

Um ein Layout mit Flex-Elementen zu erstellen, die auf neue Zeilen umbrechen, setzen Sie die Eigenschaft {{cssxref("flex-wrap")}} im Container auf `wrap`. Beachten Sie, dass jede Flex-Linie nur den Raum für diese Linie verteilt. Elemente in einer Linie werden nicht unbedingt mit Elementen in anderen Linien ausgerichtet, wie Sie im Beispiel unten sehen werden. Deshalb wird Flexbox als eindimensional beschrieben. Es ist dafür ausgelegt, das Layout als Zeile oder Spalte zu steuern, aber nicht beides gleichzeitig.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox-wrapping.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox-wrapping--download.html)

Verwenden Sie Flexbox:

- Für einzelne Reihen oder Spalten von Elementen.
- Wenn Sie eine Ausrichtung auf der Querachse nach dem Anordnen Ihrer Elemente vornehmen möchten.
- Wenn es für Sie in Ordnung ist, dass umgebrochene Elemente den Raum nur entlang ihrer eigenen Linie teilen und nicht mit Elementen in anderen Linien ausgerichtet sind.

### Elemente in Reihen und Spalten ausrichten — Grid-Layout

Wenn Sie ein zweidimensionales Raster wünschen, bei dem Elemente in Reihen _und_ Spalten ausgerichtet sind, sollten Sie CSS Grid Layout wählen. Ähnlich wie Flexbox auf die direkten Kinder des Flex-Containers wirkt, funktioniert das Grid-Layout auf die direkten Kinder des Grid-Containers. Setzen Sie einfach {{cssxref("display", "display: grid;")}} auf den Container. Die an diesem Container festgelegten Eigenschaften — wie {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} — definieren, wie die Elemente entlang der Reihen und Spalten verteilt sind.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-grid.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-grid--download.html)

Verwenden Sie Grid:

- Für mehrere Reihen oder Spalten von Elementen.
- Wenn Sie in der Lage sein möchten, die Elemente auf den Block- und Inline-Achsen auszurichten.
- Wenn Sie möchten, dass Elemente in Reihen und Spalten ausgerichtet sind.

## Ressourcen auf MDN

- [Leitfaden zum Multi-Column-Layout](/de/docs/Web/CSS/CSS_multicol_layout)
- [Leitfaden zu Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Leitfaden zum CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)
