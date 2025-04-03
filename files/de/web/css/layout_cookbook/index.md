---
title: CSS Layout-Kochbuch
slug: Web/CSS/Layout_cookbook
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Das CSS Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise in Ihren eigenen Websites implementieren müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte nutzen können, zeigen diese Rezepte die verschiedenen Möglichkeiten, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu im Bereich CSS-Layout sind, möchten Sie sich vielleicht zuerst unser [CSS-Layout-Lernmodul](/de/docs/Learn_web_development/Core/CSS_layout) ansehen, da es Ihnen die grundlegenden Kenntnisse vermittelt, die Sie benötigen, um die Rezepte hier zu nutzen.

## Die Rezepte

| Rezept                                                                              | Beschreibung                                                                                                                         | Layout-Methoden                                                                                                                                     |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Media-Objekte](/de/docs/Web/CSS/Layout_cookbook/Media_objects)                     | Eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z.B. ein Facebook-Post oder Tweet. | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung                             |
| [Spalten](/de/docs/Web/CSS/Layout_cookbook/Column_layouts)                          | Wann man ein mehrspaltiges Layout, Flexbox oder Grid für Ihre Spalten wählen sollte.                                                 | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), [Multicol](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) |
| [Ein Element zentrieren](/de/docs/Web/CSS/Layout_cookbook/Center_an_element)        | Wie man ein Element horizontal und vertikal zentriert.                                                                               | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Sticky Fußzeilen](/de/docs/Web/CSS/Layout_cookbook/Sticky_footers)                 | Eine Fußzeile erstellen, die am unteren Ende des Containers oder Ansichtsfensters sitzt, wenn der Inhalt kürzer ist.                 | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                   |
| [Geteilte Navigation](/de/docs/Web/CSS/Layout_cookbook/Split_Navigation)            | Ein Navigationsmuster, bei dem einige Links optisch von den anderen getrennt sind.                                                   | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), {{cssxref("margin")}}                                                                          |
| [Breadcrumb-Navigation](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)     | Eine Liste von Links erstellen, um dem Besucher zu erlauben, in der Seitenhierarchie nach oben zu navigieren.                        | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                                                                 |
| [Listen-Gruppe mit Badges](/de/docs/Web/CSS/Layout_cookbook/List_group_with_badges) | Eine Liste von Elementen mit einem Badge zur Anzeige einer Zählung.                                                                  | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Paginierung](/de/docs/Web/CSS/Layout_cookbook/Pagination)                          | Links zu Inhaltsseiten (wie Suchergebnisse).                                                                                         | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Karte](/de/docs/Web/CSS/Layout_cookbook/Card)                                      | Eine Kartenkomponente, die in einem Raster aus Karten angezeigt wird.                                                                | [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                     |
| [Grid-Wrapper](/de/docs/Web/CSS/Layout_cookbook/Grid_wrapper)                       | Zum Ausrichten von Grid-Inhalten innerhalb eines zentralen Wrappers, während gleichzeitig Elemente ausbrechen können.                | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                        |

## Ein Rezept beisteuern

Wie bei allen Inhalten von MDN würden wir es begrüßen, wenn Sie ein Rezept im gleichen Format wie die oben gezeigten beitragen. Sehen Sie sich den [Leitfaden zum Hinzufügen von Layout-Kochbuch-Rezepten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe) an, um eine Vorlage und Richtlinien zum Schreiben Ihres eigenen Beispiels zu erhalten.
