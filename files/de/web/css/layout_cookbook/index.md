---
title: CSS-Layout-Kochbuch
slug: Web/CSS/Layout_cookbook
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das CSS-Layout-Kochbuch soll Rezepte für gängige Layoutmuster zusammenbringen, die Sie möglicherweise in Ihren eigenen Websites implementieren müssen. Zusätzlich zur Bereitstellung von Code, den Sie als Ausgangspunkt für Ihre Projekte verwenden können, heben diese Rezepte die verschiedenen Möglichkeiten hervor, wie Layout-Spezifikationen verwendet werden können und welche Entscheidungen Sie als Entwickler treffen können.

> [!NOTE]
> Wenn Sie neu in CSS-Layouts sind, möchten Sie möglicherweise zuerst einen Blick auf unser [CSS-Layout-Lernmodul](/de/docs/Learn_web_development/Core/CSS_layout) werfen, da dies Ihnen die grundlegenden Kenntnisse vermittelt, die Sie benötigen, um die Rezepte hier zu nutzen.

## Die Rezepte

| Rezept                                                                                   | Beschreibung                                                                                                      | Layout-Methoden                                                                                                                                             |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Medienobjekte](/de/docs/Web/CSS/Layout_cookbook/Media_objects)                       | Eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z.B. ein Facebook-Post oder Tweet.                   | [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout), {{cssxref("float")}} Fallback, {{cssxref("fit-content")}} Größenanpassung                                  |
| [Spalten](/de/docs/Web/CSS/Layout_cookbook/Column_layouts)                            | Wann Sie ein mehrspaltiges Layout, Flexbox oder Grid für Ihre Spalten wählen sollten.                                                                 | [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout), [Multicol](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) |
| [Ein Element zentrieren](/de/docs/Web/CSS/Layout_cookbook/Center_an_element)           | Wie Sie ein Element horizontal und vertikal zentrieren.                                                                                                | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                               |
| [Sticky-Footer](/de/docs/Web/CSS/Layout_cookbook/Sticky_footers)                       | Ein Footer, der am unteren Rand des Containers oder Viewports sitzt, wenn der Inhalt kürzer ist.                                                       | [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                      |
| [Geteilte Navigation](/de/docs/Web/CSS/Layout_cookbook/Split_Navigation)               | Ein Navigationsmuster, bei dem einige Links optisch von den anderen getrennt sind.                                                                     | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), {{cssxref("margin")}}                                                                                |
| [Brotkrumen-Navigation](/de/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)        | Eine Liste von Links erstellen, damit der Besucher in der Seitenhierarchie zurück navigieren kann.                                                    | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)                                                                                                       |
| [Listengruppe mit Abzeichen](/de/docs/Web/CSS/Layout_cookbook/List_group_with_badges)  | Eine Liste von Elementen mit einem Abzeichen zur Anzeige einer Zahl.                                                                                   | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                               |
| [Seitennummerierung](/de/docs/Web/CSS/Layout_cookbook/Pagination)                      | Links zu Seiten mit Inhalten (z. B. Suchergebnisse).                                                                                                   | [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment)                                               |
| [Karte](/de/docs/Web/CSS/Layout_cookbook/Card)                                         | Eine Kartenkomponente, die in einem Kartenraster angezeigt wird.                                                                                      | [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                           |
| [Grid-Wrapper](/de/docs/Web/CSS/Layout_cookbook/Grid_wrapper)                          | Um Grid-Inhalte innerhalb eines zentralen Wrappers auszurichten und gleichzeitig Elementen das Ausbrechen zu ermöglichen.                             | [CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout)                                                                                                              |

## Ein Rezept beitragen

Wie bei allen MDN-Inhalten würden wir uns freuen, wenn Sie ein Rezept im gleichen Format wie die oben gezeigten Rezepte beitragen. Siehe den [Leitfaden zum Hinzufügen von Layout-Kochbuch-Rezepten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe) für eine Vorlage und Richtlinien zum Schreiben Ihres eigenen Beispiels.
