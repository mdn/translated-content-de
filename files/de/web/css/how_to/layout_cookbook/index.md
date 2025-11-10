---
title: CSS-Layout-Kochbuch
short-title: Layout cookbook
slug: Web/CSS/How_to/Layout_cookbook
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzustellen, die Sie möglicherweise auf Ihren eigenen Websites implementieren müssen. Neben der Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu im CSS-Layout sind, sollten Sie sich zunächst unser [CSS-Layout-Lernmodul](/de/docs/Learn_web_development/Core/CSS_layout) ansehen, da es Ihnen das grundlegende Wissen vermittelt, das Sie benötigen, um die hier vorgestellten Rezepte zu nutzen.

## Die Rezepte

| Rezept                                | Beschreibung                                                                                                | Layout-Methoden                                                                        |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [Media-Objekte][media-objects]        | Eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z. B. ein Social-Media-Post. | [CSS Grid][css-grid], {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung |
| [Spalten][columns]                    | Wann Sie ein Multi-Column-Layout, Flexbox oder Grid für Ihre Spalten wählen sollten.                        | [CSS Grid][css-grid], [Multicol][multicol], [Flexbox][flexbox]                         |
| [Ein Element zentrieren][center]      | Wie Sie ein Element horizontal und vertikal zentrieren.                                                     | [Flexbox][flexbox], [Box Alignment][box-alignment]                                     |
| [Sticky-Footer][sticky-footers]       | Erstellung eines Footers, der am unteren Rand des Containers oder Viewports sitzt, wenn der Inhalt kürzer ist. | [CSS Grid][css-grid], [Flexbox][flexbox]                                               |
| [Navigation aufteilen][split-navigation] | Ein Navigationsmuster, bei dem einige Links optisch von den anderen getrennt sind.                          | [Flexbox][flexbox], {{cssxref("margin")}}                                              |
| [Breadcrumb-Navigation][breadcrumb]   | Erstellung einer Liste von Links, die dem Besucher ermöglicht, sich durch die Seitenhierarchie nach oben zu navigieren. | [Flexbox][flexbox]                                                                     |
| [Liste mit Abzeichen][list-badges]    | Eine Liste von Elementen mit einem Abzeichen zur Anzeige einer Zählung.                                     | [Flexbox][flexbox], [Box Alignment][box-alignment]                                     |
| [Seitennummerierung][pagination]      | Links zu Seiten von Inhalten (wie z. B. Suchergebnisse).                                                    | [Flexbox][flexbox], [Box Alignment][box-alignment]                                     |
| [Karte][card]                         | Ein Kartenkomponent, der in einem Raster von Karten angezeigt wird.                                         | [Grid Layout][css-grid]                                                                |
| [Grid-Wrapper][grid-wrapper]          | Zum Ausrichten von Grid-Inhalten innerhalb eines zentralen Wrappers, wobei gleichzeitig Elemente herausbrechen können. | [CSS Grid][css-grid]                                                                   |

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

Wie bei allen Inhalten auf MDN würden wir uns freuen, wenn Sie ein Rezept im gleichen Format wie die oben gezeigten beitragen. Sehen Sie sich den [Leitfaden zum Hinzufügen von Layout-Kochbuch-Rezepten](/de/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe) für eine Vorlage und Richtlinien zum Schreiben Ihres eigenen Beispiels an.
