---
title: CSS Layout-Kochbuch
slug: Web/CSS/Layout_cookbook
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das CSS Layout-Kochbuch soll Rezepte für gängige Layoutmuster zusammenführen, die Sie möglicherweise für Ihre eigenen Websites umsetzen müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen genutzt werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu im CSS-Layout sind, sollten Sie sich zuerst unser [CSS-Layout-Lernmodul](/de/docs/Learn/CSS/CSS_layout) ansehen, da dies Ihnen das grundlegende Wissen vermittelt, das Sie benötigen, um die hier angebotenen Rezepte zu nutzen.

## Die Rezepte

| Rezept                                                                               | Beschreibung                                                                                                  | Layout-Methoden                                                                                                                                            |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Media-Objekte](/de/docs/Web/CSS/Layout_cookbook/Media_objects)                   | Eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z. B. ein Facebook-Post oder Tweet. | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung                                           |
| [Spalten](/de/docs/Web/CSS/Layout_cookbook/Column_layouts)                        | Wann Sie ein Mehrspalten-Layout, Flexbox oder Grid für Ihre Spalten wählen sollten.                                   | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), [Multicol](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) |
| [Ein Element zentrieren](/de/docs/Web/CSS/Layout_cookbook/Center_an_element)      | Wie man ein Element horizontal und vertikal zentriert.                                                     | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                                |
| [Sticky-Footer](/de/docs/Web/CSS/Layout_cookbook/Sticky_footers)                  | Erstellung eines Fußbereichs, der am unteren Rand des Containers oder des Ansichtsfensters sitzt, wenn der Inhalt kürzer ist.    | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                       |
| [Geteilte Navigation](/de/docs/Web/CSS/Layout_cookbook/Split_Navigation)          | Ein Navigationsmuster, bei dem einige Links visuell von den anderen getrennt sind.                                | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), {{cssxref("margin")}}                                                                                 |
| [Breadcrumb-Navigation](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)   | Erstellung einer Liste von Links, die dem Besucher ermöglichen, hierarchisch auf der Seite nach oben zu navigieren.                | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                                                                        |
| [Listen-Gruppe mit Abzeichen](/de/docs/Web/CSS/Layout_cookbook/List_group_with_badges) | Eine Liste von Elementen mit einem Abzeichen zur Anzeige einer Anzahl.                                                                                       | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                                |
| [Seitennummerierung](/de/docs/Web/CSS/Layout_cookbook/Pagination)                 | Links zu Inhaltsseiten (wie Suchergebnisse).                                                                  | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                                |
| [Karte](/de/docs/Web/CSS/Layout_cookbook/Card)                                    | Eine Kartenkomponente, die in einem Raster von Karten angezeigt wird.                                                       | [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                            |
| [Gitterhülle](/de/docs/Web/CSS/Layout_cookbook/Grid_wrapper)                      | Zum Ausrichten von Rasterinhalten innerhalb einer zentralen Hülle, wobei die Elemente ausbrechen können.                        | [CSS Grid](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                               |

## Ein Rezept beisteuern

Wie bei allen MDN-Inhalten würden wir uns freuen, wenn Sie ein Rezept im gleichen Format wie die oben gezeigten beitragen. Sehen Sie sich den [Leitfaden zum Hinzufügen von Layout-Kochbuch-Rezepten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe) für eine Vorlage und Richtlinien zum Schreiben Ihres eigenen Beispiels an.
