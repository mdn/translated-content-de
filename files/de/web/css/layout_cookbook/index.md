---
title: CSS-Layout-Kochbuch
short-title: Layout cookbook
slug: Web/CSS/Layout_cookbook
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layout-Muster zusammenzustellen, die Sie möglicherweise in Ihren eigenen Websites implementieren müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen genutzt werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu bei CSS-Layout sind, könnten Sie sich zuerst unser [CSS-Layout-Lernmodul](/de/docs/Learn_web_development/Core/CSS_layout) ansehen, da es Ihnen die grundlegenden Kenntnisse vermittelt, die Sie benötigen, um die hier vorgestellten Rezepte zu nutzen.

## Die Rezepte

| Rezept                                                                            | Beschreibung                                                                                                                         | Layout-Methoden                                                                                                                                     |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Media objects](/de/docs/Web/CSS/Layout_cookbook/Media_objects)                   | Eine zweispaltige Box mit einem Bild auf der einen und beschreibendem Text auf der anderen Seite, z.B. ein Facebook-Post oder Tweet. | [CSS grid](/de/docs/Web/CSS/CSS_grid_layout), {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung                             |
| [Columns](/de/docs/Web/CSS/Layout_cookbook/Column_layouts)                        | Wann Sie das Mehrspalten-Layout, Flexbox oder Grid für Ihre Spalten wählen sollten.                                                  | [CSS grid](/de/docs/Web/CSS/CSS_grid_layout), [Multicol](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) |
| [Center an element](/de/docs/Web/CSS/Layout_cookbook/Center_an_element)           | Wie man ein Element horizontal und vertikal zentriert.                                                                               | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Sticky footers](/de/docs/Web/CSS/Layout_cookbook/Sticky_footers)                 | Erstellen eines Footers, der am unteren Rand des Containers oder Viewports sitzt, wenn der Inhalt kürzer ist.                        | [CSS grid](/de/docs/Web/CSS/CSS_grid_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                   |
| [Split navigation](/de/docs/Web/CSS/Layout_cookbook/Split_Navigation)             | Ein Navigationsmuster, bei dem einige Links visuell von den anderen getrennt sind.                                                   | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), {{cssxref("margin")}}                                                                          |
| [Breadcrumb navigation](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)   | Erstellen einer Liste von Links, die es dem Besucher ermöglichen, die Seitenhierarchie zurück nach oben zu navigieren.               | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                                                                 |
| [List group with badges](/de/docs/Web/CSS/Layout_cookbook/List_group_with_badges) | Eine Liste von Elementen mit einem Badge, um eine Anzahl anzuzeigen.                                                                 | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Pagination](/de/docs/Web/CSS/Layout_cookbook/Pagination)                         | Links zu Inhaltsseiten (wie Suchergebnisse).                                                                                         | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Card](/de/docs/Web/CSS/Layout_cookbook/Card)                                     | Eine Kartenkomponente, die in einem Raster von Karten angezeigt wird.                                                                | [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                     |
| [Grid wrapper](/de/docs/Web/CSS/Layout_cookbook/Grid_wrapper)                     | Zum Ausrichten von Grid-Inhalten innerhalb eines zentralen Wrappers, während es auch erlaubt, dass Elemente ausbrechen.              | [CSS grid](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                        |

## Beitrag eines Rezepts

Wie bei allen MDN-Inhalten würden wir uns freuen, wenn Sie ein Rezept im gleichen Format wie die oben gezeigten beitragen. Sehen Sie in dem [Leitfaden zum Hinzufügen von Layout-Kochbuch-Rezepten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe) nach einer Vorlage und Richtlinien zum Schreiben Ihres eigenen Beispiels.
