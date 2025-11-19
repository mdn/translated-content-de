---
title: CSS Layout-Kochbuch
short-title: Layout cookbook
slug: Web/CSS/How_to/Layout_cookbook
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

Das CSS Layout-Kochbuch zielt darauf ab, Rezepte für gängige Layoutmuster zusammenzubringen, die Sie möglicherweise auf Ihren eigenen Websites umsetzen müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu im Bereich CSS-Layout sind, möchten Sie vielleicht zuerst unser [CSS-Layout-Lernmodul](/de/docs/Learn_web_development/Core/CSS_layout) ansehen, da dies Ihnen die grundlegenden Kenntnisse vermittelt, die Sie benötigen, um die hier vorgestellten Rezepte nutzen zu können.

## Die Rezepte

| Rezept                                     | Beschreibung                                                                                                                      | Layout-Methoden                                                                                 |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [Media-Objekte][media-objects]             | Eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z. B. ein Social-Media-Beitrag. | [CSS Grid][css-grid], {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung |
| [Spalten][columns]                         | Wann man sich für ein mehrspaltiges Layout, Flexbox oder Grid für Ihre Spalten entscheiden sollte.                                | [CSS Grid][css-grid], [Multicol][multicol], [Flexbox][flexbox]                                  |
| [Ein Element zentrieren][center]           | Wie man ein Element horizontal und vertikal zentriert.                                                                            | [Flexbox][flexbox], [Box Alignment][box-alignment]                                              |
| [Klebende Fußzeilen][sticky-footers]       | Erstellen einer Fußzeile, die am unteren Rand des Containers oder Viewport sitzt, wenn der Inhalt kürzer ist.                     | [CSS Grid][css-grid], [Flexbox][flexbox]                                                        |
| [Geteilte Navigation][split-navigation]    | Ein Navigationsmuster, bei dem einige Links visuell von den anderen getrennt sind.                                                | [Flexbox][flexbox], {{cssxref("margin")}}                                                       |
| [Brotkrumennavigation][breadcrumb]         | Erstellen einer Liste von Links, die es dem Besucher ermöglicht, in der Seitenhierarchie zurück zu navigieren.                    | [Flexbox][flexbox]                                                                              |
| [Listen-Gruppe mit Abzeichen][list-badges] | Eine Liste von Elementen mit einem Abzeichen, um eine Zählung anzuzeigen.                                                         | [Flexbox][flexbox], [Box Alignment][box-alignment]                                              |
| [Paginierung][pagination]                  | Links zu Inhaltsseiten (wie z. B. Suchergebnisse).                                                                                | [Flexbox][flexbox], [Box Alignment][box-alignment]                                              |
| [Karte][card]                              | Eine Kartenkomponente, die in einem Raster von Karten angezeigt wird.                                                             | [Grid Layout][css-grid]                                                                         |
| [Grid Wrapper][grid-wrapper]               | Zum Ausrichten von Grid-Inhalten innerhalb eines zentralen Wrappers, der es Objekten auch ermöglicht auszubrechen.                | [CSS Grid][css-grid]                                                                            |

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

Wie bei allen Inhalten auf MDN würden wir uns freuen, wenn Sie ein Rezept im gleichen Format wie die oben gezeigten beisteuern. Sehen Sie sich die [Leitfaden zum Hinzufügen von Layout-Kochbuch-Rezepten](/de/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe) für eine Vorlage und Richtlinien zum Schreiben Ihres eigenen Beispiels an.
