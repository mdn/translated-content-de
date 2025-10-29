---
title: CSS-Layout-Kochbuch
short-title: Layout cookbook
slug: Web/CSS/How_to/Layout_cookbook
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Das CSS-Layout-Kochbuch zielt darauf ab, Rezepte für häufige Layout-Muster zusammenzuführen, die Sie möglicherweise in Ihren eigenen Webseiten umsetzen müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt in Ihren Projekten verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen genutzt werden können, und die Entscheidungen, die Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu in der CSS-Layout-Gestaltung sind, möchten Sie vielleicht zuerst einen Blick auf unser [CSS-Layout-Lernmodul](/de/docs/Learn_web_development/Core/CSS_layout) werfen, da dieses Ihnen das grundlegende Wissen vermittelt, das Sie benötigen, um die hier vorgestellten Rezepte zu nutzen.

## Die Rezepte

| Rezept                                | Beschreibung                                                                                              | Layout-Methoden                                                                        |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [Media objects][media-objects]        | Eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen Seite, z. B. ein Social-Media-Beitrag. | [CSS Grid][css-grid], {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung |
| [Spalten][columns]                    | Wann man ein Mehrspalten-Layout, Flexbox oder Grid für Ihre Spalten wählen sollte.                         | [CSS Grid][css-grid], [Multicol][multicol], [Flexbox][flexbox]                          |
| [Ein Element zentrieren][center]      | Wie man ein Element horizontal und vertikal zentriert.                                                    | [Flexbox][flexbox], [Box Alignment][box-alignment]                                      |
| [Klebrige Fußzeilen][sticky-footers]  | Erstellen einer Fußzeile, die am unteren Rand des Containers oder Viewports sitzt, wenn der Inhalt kürzer ist. | [CSS Grid][css-grid], [Flexbox][flexbox]                                                |
| [Geteilte Navigation][split-navigation]| Ein Navigationsmuster, bei dem einige Links optisch von den anderen getrennt sind.                         | [Flexbox][flexbox], {{cssxref("margin")}}                                                |
| [Breadcrumb-Navigation][breadcrumb]   | Erstellen einer Liste von Links, die dem Besucher ermöglichen, durch die Seitenhierarchie nach oben zu navigieren. | [Flexbox][flexbox]                                                                      |
| [Listengruppe mit Abzeichen][list-badges]| Eine Liste von Elementen mit einem Abzeichen, das eine Zählung anzeigt.                                    | [Flexbox][flexbox], [Box Alignment][box-alignment]                                      |
| [Seitennummerierung][pagination]      | Links zu Seiteninhalten (wie Suchergebnisse).                                                             | [Flexbox][flexbox], [Box Alignment][box-alignment]                                      |
| [Karte][card]                         | Eine Kartenkomponente, die in einem Raster von Karten angezeigt wird.                                      | [Grid-Layout][css-grid]                                                                 |
| [Grid-Wrapper][grid-wrapper]          | Zum Ausrichten von Gitterinhalten innerhalb eines zentralen Wrappers, während es den Elementen auch erlaubt, auszubrechen. | [CSS Grid][css-grid]                                                                   |

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
[css-grid]: /de/docs/Web/CSS/CSS_grid_layout
[multicol]: /de/docs/Web/CSS/CSS_multicol_layout
[flexbox]: /de/docs/Web/CSS/CSS_flexible_box_layout
[box-alignment]: /de/docs/Web/CSS/CSS_box_alignment

## Ein Rezept beitragen

Wie bei allen Inhalten auf MDN würden wir uns freuen, wenn Sie ein Rezept im gleichen Format wie die oben gezeigten einreichen. Siehe den [Leitfaden zum Hinzufügen von Layout-Kochbuch-Rezepten](/de/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe) für eine Vorlage und Richtlinien zum Schreiben Ihres eigenen Beispiels.
