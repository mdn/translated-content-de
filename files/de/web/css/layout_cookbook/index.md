---
title: CSS Layout Kochbuch
short-title: Layout Kochbuch
slug: Web/CSS/Layout_cookbook
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das CSS Layout Kochbuch zielt darauf ab, Rezepte für häufige Layoutmuster zu sammeln, die Sie möglicherweise in Ihren eigenen Websites implementieren müssen. Neben dem Bereitstellen von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu im Bereich CSS-Layout sind, sollten Sie sich zuerst unser [CSS-Layout-Lernmodul](/de/docs/Learn_web_development/Core/CSS_layout) ansehen, da es Ihnen die grundlegenden Kenntnisse vermittelt, die Sie benötigen, um die hier bereitgestellten Rezepte zu nutzen.

## Die Rezepte

| Rezept                                                                               | Beschreibung                                                                                                                         | Layout-Methoden                                                                                                                                     |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Medienobjekte](/de/docs/Web/CSS/Layout_cookbook/Media_objects)                      | Eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z.B. ein Facebook-Post oder Tweet. | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung                             |
| [Spalten](/de/docs/Web/CSS/Layout_cookbook/Column_layouts)                           | Wann Sie Multi-Column-Layout, Flexbox oder Grid für Ihre Spalten auswählen sollten.                                                  | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), [Multicol](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) |
| [Ein Element zentrieren](/de/docs/Web/CSS/Layout_cookbook/Center_an_element)         | Wie man ein Element horizontal und vertikal zentriert.                                                                               | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Sticky Footers](/de/docs/Web/CSS/Layout_cookbook/Sticky_footers)                    | Erstellung eines Footers, der am unteren Rand des Containers oder Viewports sitzt, wenn der Inhalt kürzer ist.                       | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                   |
| [Geteilte Navigation](/de/docs/Web/CSS/Layout_cookbook/Split_Navigation)             | Ein Navigationsmuster, bei dem einige Links visuell von den anderen getrennt sind.                                                   | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), {{cssxref("margin")}}                                                                          |
| [Breadcrumb Navigation](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)      | Erstellung einer Linkliste, die es dem Besucher ermöglicht, durch die Seitenhierarchie zurückzunavigieren.                           | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                                                                 |
| [Listen-Gruppen mit Badges](/de/docs/Web/CSS/Layout_cookbook/List_group_with_badges) | Eine Liste von Elementen mit einem Badge, um eine Anzahl anzuzeigen.                                                                 | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Paginierung](/de/docs/Web/CSS/Layout_cookbook/Pagination)                           | Links zu Seiten mit Inhalten (wie Suchergebnisse).                                                                                   | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Karte](/de/docs/Web/CSS/Layout_cookbook/Card)                                       | Ein Kartenkomponent, das in einem Raster aus Karten angezeigt wird.                                                                  | [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                     |
| [Grid Wrapper](/de/docs/Web/CSS/Layout_cookbook/Grid_wrapper)                        | Zum Ausrichten von Grid-Inhalten innerhalb eines zentralen Wrappers, während es den Elementen ermöglicht wird, auszubrechen.         | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                        |

## Ein Rezept beitragen

Wie bei allen MDN-Inhalten würden wir uns freuen, wenn Sie ein Rezept im gleichen Format wie die oben gezeigten beitragen. Sehen Sie sich den [Leitfaden zum Hinzufügen von Layout-Kochbuch-Rezepten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe) für ein Template und Richtlinien zum Schreiben Ihres eigenen Beispiels an.
