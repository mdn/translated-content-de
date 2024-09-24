---
title: Spaltenlayouts
slug: Web/CSS/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 70f49e78d0f6830748fcaa490d98b4ae3e2da161
---

{{CSSRef}}

Sie müssen häufig ein Layout erstellen, das aus mehreren Spalten besteht, und CSS bietet verschiedene Möglichkeiten, dies zu tun. Ob Sie das [Multi-Column](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [Grid](/de/docs/Web/CSS/CSS_grid_layout) Layout verwenden, hängt davon ab, was Sie erreichen möchten, und in diesem Leitfaden erkunden wir diese Optionen.

![drei verschiedene Layoutstile, die zwei Spalten im Container haben.](cookbook-multiple-columns.png)

## Anforderungen

Es gibt eine Reihe von Designmustern, die Sie mit Ihren Spalten erreichen möchten:

- [Ein fortlaufender Inhalt, der in zeitungsmäßige Spalten aufgeteilt ist](#ein_fortlaufender_inhalt_—_multi-column_layout).
- [Eine einzige Reihe von Elementen, die als Spalten angeordnet sind, mit gleicher Höhe](#eine_einzelne_reihe_von_elementen_mit_gleicher_höhe_—_flexbox).
- [Mehrere Zeilen von Spalten, die in Reihen und Spalten ausgerichtet sind](#elemente_in_reihen_und_spalten_ausrichten_—_grid_layout).

## Die Rezepte

Sie müssen verschiedene Layoutmethoden wählen, um Ihre Anforderungen zu erfüllen.

### Ein fortlaufender Inhalt — Multi-Column Layout

Wenn Sie Spalten mit dem Multi-Column Layout erstellen, bleibt Ihr Text als kontinuierlicher Fluss erhalten, der nacheinander jede Spalte füllt. Die Spalten müssen alle die gleiche Größe haben, und Sie können keine einzelne Spalte oder den Inhalt einer einzelnen Spalte direkt ansprechen.

Sie können die Abstände zwischen den Spalten mit den Eigenschaften {{cssxref("column-gap")}} oder {{cssxref("gap")}} steuern und eine Linie zwischen den Spalten mit {{cssxref("column-rule")}} hinzufügen.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-multicol.html", '100%', 720)}}

In diesem Beispiel haben wir die Eigenschaft {{cssxref("column-width")}} verwendet, um eine Mindestbreite festzulegen, die die Spalten erreichen müssen, bevor der Browser eine zusätzliche Spalte hinzufügt. Die Shorthand-Eigenschaft {{cssxref("columns")}} kann verwendet werden, um die Eigenschaften `column-width` und {{cssxref("column-count")}} festzulegen, von denen eine die maximale Anzahl der zulässigen Spalten definieren kann.

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-multicol--download.html)

Verwenden Sie Multi-Column, wenn:

- Ihr Text in zeitungsmäßigen Spalten angezeigt werden soll.
- Sie eine Reihe kleiner Elemente haben, die Sie in Spalten aufteilen möchten.
- Sie keine individuellen Spaltenboxen für Styling ansprechen müssen.

### Eine einzelne Reihe von Elementen mit gleicher Höhe — Flexbox

Mit Flexbox kann Inhalt in Spalten aufgeteilt werden, indem man {{cssxref("display", "display: flex;")}} setzt, um ein übergeordnetes Element zum Flex-Container zu machen. Allein durch Hinzufügen dieser einen Eigenschaft werden alle Kinder (Kind-Elemente, Pseudo-Elemente und Textknoten) in Flex-Items entlang einer einzelnen Linie verwandelt. Durch die Einstellung der selben {{cssxref("flex")}} Shorthand-Eigenschaft mit einem einzigen numerischen Wert wird der verfügbare Raum gleichmäßig verteilt, wodurch normalerweise alle Flex-Items die gleiche Größe haben, sofern keines nicht umgebrochenen Inhalt enthält, der das Element größer macht.

Abstände oder die `gap`-Eigenschaft können verwendet werden, um Lücken zwischen den Elementen zu schaffen, aber es gibt derzeit keine CSS-Eigenschaft, die Linien zwischen Flex-Items hinzufügt.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox--download.html)

Um ein Layout mit Flex-Items zu erstellen, die auf neue Zeilen umbrechen, setzen Sie die Eigenschaft {{cssxref("flex-wrap")}} auf dem Container auf `wrap`. Beachten Sie, dass jede Flex-Linie nur den Raum für diese Linie verteilt. Elemente in einer Linie werden nicht unbedingt mit Elementen in anderen Linien ausgerichtet, wie Sie im nachstehenden Beispiel sehen werden. Daher wird Flexbox als eindimensional beschrieben. Es ist dafür ausgelegt, Layouts als Reihe oder Spalte zu steuern, aber nicht beides gleichzeitig.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-flexbox-wrapping.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-flexbox-wrapping--download.html)

Verwenden Sie Flexbox:

- Für einzelne Reihen oder Spalten von Elementen.
- Wenn Sie eine Ausrichtung auf der Querachse nach Anordnung Ihrer Elemente vornehmen möchten.
- Wenn Sie damit zufrieden sind, dass umgebrochene Elemente den Raum nur entlang ihrer Linie teilen und sich nicht mit Elementen in anderen Linien ausrichten.

### Elemente in Reihen und Spalten ausrichten — Grid Layout

Wenn Sie ein zweidimensionales Raster wünschen, bei dem Elemente sowohl in Reihen _als auch_ in Spalten ausgerichtet sind, sollten Sie das CSS Grid Layout wählen. Ähnlich wie Flexbox auf die direkten Kinder des Flex-Containers wirkt, wirkt das Grid Layout auf die direkten Kinder des Grid-Containers. Setzen Sie einfach {{cssxref("display", "display: grid;")}} auf dem Container. Die auf diesem Container festgelegten Eigenschaften — wie {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} — definieren, wie die Elemente entlang von Reihen und Spalten verteilt sind.

{{EmbedGHLiveSample("css-examples/css-cookbook/columns-grid.html", '100%', 720)}}

> [!CALLOUT]
>
> [Beispiel herunterladen](https://github.com/mdn/css-examples/blob/main/css-cookbook/columns-grid--download.html)

Verwenden Sie Grid:

- Für mehrere Reihen oder Spalten von Elementen.
- Wenn Sie in der Lage sein möchten, die Elemente an den Block- und Inline-Achsen auszurichten.
- Wenn Sie möchten, dass sich Elemente in Reihen und Spalten ausrichten.

## Ressourcen auf MDN

- [Leitfaden zur Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout)
- [Leitfaden zu Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Leitfaden zum CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)
