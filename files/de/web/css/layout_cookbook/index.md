---
title: CSS Layout Kochbuch
slug: Web/CSS/Layout_cookbook
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das CSS Layout Kochbuch zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzustellen, die Sie möglicherweise auf Ihren eigenen Websites implementieren müssen. Neben dem Bereitstellen von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die unterschiedlichen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu im Bereich CSS-Layout sind, sollten Sie sich zunächst unser [CSS-Layout Lernmodul](/de/docs/Learn/CSS/CSS_layout) ansehen, da dies Ihnen das grundlegende Wissen vermittelt, das Sie benötigen, um die Rezepte hier zu nutzen.

## Die Rezepte

| Rezept                                                                         | Beschreibung                                                                                                                                | Layoutmethoden                                                                                                                                      |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Media-Objekte](/de/docs/Web/CSS/Layout_cookbook/Media_objects)                | Eine zweispaltige Box mit einem Bild auf der einen Seite und einem beschreibenden Text auf der anderen, z. B. ein Facebook-Post oder Tweet. | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung                             |
| [Spalten](/de/docs/Web/CSS/Layout_cookbook/Column_layouts)                     | Wann Sie ein Mehrspalten-Layout, Flexbox oder Grid für Ihre Spalten wählen sollten.                                                         | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), [Multicol](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) |
| [Ein Element zentrieren](/de/docs/Web/CSS/Layout_cookbook/Center_an_element)   | Wie Sie ein Element horizontal und vertikal zentrieren.                                                                                     | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Sticky Footer](/de/docs/Web/CSS/Layout_cookbook/Sticky_footers)               | Einen Footer erstellen, der am unteren Rand des Containers oder Viewports sitzt, wenn der Inhalt kürzer ist.                                | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                   |
| [Geteilte Navigation](/de/docs/Web/CSS/Layout_cookbook/Split_Navigation)       | Ein Navigationsmuster, bei dem einige Links visuell von den anderen getrennt sind.                                                          | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), {{cssxref("margin")}}                                                                          |
| [Brotkrümelnavigation](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation) | Eine Liste von Links erstellen, um dem Besucher zu ermöglichen, durch die Seitenhierarchie nach oben zu navigieren.                         | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                                                                 |
| [Liste mit Abzeichen](/de/docs/Web/CSS/Layout_cookbook/List_group_with_badges) | Eine Liste von Elementen mit einem Abzeichen zur Anzeige einer Anzahl.                                                                      | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Seitennummerierung](/de/docs/Web/CSS/Layout_cookbook/Pagination)              | Links zu Seiten mit Inhalten (wie Suchergebnisse).                                                                                          | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                            |
| [Karte](/de/docs/Web/CSS/Layout_cookbook/Card)                                 | Eine Kartenkomponente, die in einem Kartengitter angezeigt wird.                                                                            | [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                     |
| [Grid-Wrapper](/de/docs/Web/CSS/Layout_cookbook/Grid_wrapper)                  | Zum Ausrichten von Grid-Inhalten innerhalb eines zentralen Wrappers, der auch ermöglicht, dass Elemente ausbrechen.                         | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                        |

## Ein Rezept beitragen

Wie bei allem auf MDN würden wir uns freuen, wenn Sie ein Rezept im gleichen Format wie oben gezeigt beitragen. Sehen Sie sich die [Leitfaden zum Hinzufügen von Layout-Kochbuchrezepten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe) für eine Vorlage und Richtlinien zum Schreiben Ihres eigenen Beispiels an.
