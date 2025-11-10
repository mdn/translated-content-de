---
title: CSS Layout-Kochbuch
short-title: Layout cookbook
slug: Web/CSS/How_to/Layout_cookbook
l10n:
  sourceCommit: 314a6c8f553fb2f6bd4b86c070d9cfaa3be4a135
---

Das CSS Layout-Kochbuch soll Rezepte für häufige Layoutmuster zusammenbringen, die Sie möglicherweise auf Ihren eigenen Websites implementieren müssen. Neben dem Bereitstellen von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und welche Entscheidungen Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu in CSS-Layout sind, sollten Sie sich zunächst unser [CSS-Layout-Lernmodul](/de/docs/Learn_web_development/Core/CSS_layout) ansehen, da es Ihnen die grundlegenden Kenntnisse vermittelt, die Sie benötigen, um die Rezepte hier zu nutzen.

## Die Rezepte

| Rezept                                  | Beschreibung                                                                                                                   | Layout-Methoden                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| [Media-Objekte][media-objects]          | Eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z. B. ein Social-Media-Post. | [CSS Grid][css-grid], {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung |
| [Spalten][columns]                      | Wann man mehrspaltiges Layout, Flexbox oder Grid für seine Spalten wählen sollte.                                              | [CSS Grid][css-grid], [Multicol][multicol], [Flexbox][flexbox]                                  |
| [Ein Element zentrieren][center]        | Wie man ein Element horizontal und vertikal zentriert.                                                                         | [Flexbox][flexbox], [Box-Alignment][box-alignment]                                              |
| [Klebende Fußzeilen][sticky-footers]    | Erstellung einer Fußzeile, die am unteren Rand des Containers oder des Viewports sitzt, wenn der Inhalt kürzer ist.            | [CSS Grid][css-grid], [Flexbox][flexbox]                                                        |
| [Geteilte Navigation][split-navigation] | Ein Navigationsmuster, bei dem einige Links optisch von den anderen getrennt sind.                                             | [Flexbox][flexbox], {{cssxref("margin")}}                                                       |
| [Breadcrumb-Navigation][breadcrumb]     | Eine Liste von Links erstellen, die es dem Besucher ermöglicht, durch die Seitenhierarchie nach oben zu navigieren.            | [Flexbox][flexbox]                                                                              |
| [Listengruppe mit Badges][list-badges]  | Eine Liste von Elementen mit einem Badge zur Anzeige einer Zählung.                                                            | [Flexbox][flexbox], [Box-Alignment][box-alignment]                                              |
| [Seitennummerierung][pagination]        | Links zu Seiten mit Inhalten (wie Suchergebnissen).                                                                            | [Flexbox][flexbox], [Box-Alignment][box-alignment]                                              |
| [Karte][card]                           | Eine Kartenkomponente, die in einem Grid von Karten angezeigt wird.                                                            | [Grid Layout][css-grid]                                                                         |
| [Grid-Wrapper][grid-wrapper]            | Zum Ausrichten von Grid-Inhalten innerhalb eines zentralen Wrappers, während es auch möglich ist, dass Elemente ausbrechen.    | [CSS Grid][css-grid]                                                                            |

[media-objects]: /de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects
[columns]: /de/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts
[center]: /de/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element
[sticky-footers]: /de/docs/Web/CSS/How_to/Layout_cookbook/Sticky_footers
[split-navigation]: /de/docs/Web/CSS/How_to/Layout_cookbook/Split_navigation
[breadcrumb]: /de/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation
[list-badges]: /de/docs/Web/CSS/How_to/Layout_cookbook/List_group_with_badges
[pagination]: /de/docs/Web/CSS/How_to/Layout_cookbook/Pagination
[card]: /de/docs/Web/CSS/How_to/Layout_cookbook/Card
[grid-wrapper]: /de/docs/Web/CSS/How_to/Layout_cookbook/Grid_wrapper
[css-grid]: /de/docs/Web/CSS/Guides/Grid_layout
[multicol]: /de/docs/Web/CSS/Guides/Multicol_layout
[flexbox]: /de/docs/Web/CSS/Guides/Flexible_box_layout
[box-alignment]: /de/docs/Web/CSS/Guides/Box_alignment

## Ein Rezept beitragen

Wie bei allen MDN-Inhalten freuen wir uns, wenn Sie ein Rezept im gleichen Format wie die oben gezeigten beitragen. Sehen Sie sich den [Leitfaden zum Hinzufügen von Layout-Kochbuch-Rezepten](/de/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe) an für eine Vorlage und Richtlinien zum Schreiben Ihres eigenen Beispiels.
