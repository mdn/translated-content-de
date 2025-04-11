---
title: aria-flowto
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-flowto
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das globale `aria-flowto`-Attribut identifiziert das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge des Inhalts. Dadurch kann unterstützende Technologie die allgemeine Voreinstellung des Lesens in der Dokumentquelle nach Belieben des Nutzers überschreiben.

## Beschreibung

Webseiten sollten sequentiell navigierbar sein. Aus diesem Grund wird Entwicklern davon abgeraten, das globale [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut zu verwenden, das die Tabulatorreihenfolge ändern kann, sowie die CSS {{CSSXRef('order')}}-Eigenschaft, die die visuelle Reihenfolge von der DOM-Reihenfolge ändern kann. In seltenen Fällen ist jedoch ein anderer Leseweg als die Quellreihenfolge erforderlich. Für solche Fälle kann das `aria-flowto`-Attribut den Inhalt für Benutzer unterstützender Technologien zugänglicher machen.

Das globale `aria-flowto`-Attribut ermöglicht es dem Autor, Nutzern von unterstützenden Technologien anzuzeigen, welches Element oder welche Elemente als nächstes fokussiert werden könnten, und bietet somit eine alternative Lesereihenfolge zur Quellreihenfolge. Dies erlaubt es unterstützender Technologie, ein Dokument in einer anderen Reihenfolge als der voreingestellten Dokumentquellenlesereihenfolge zu lesen.

Wenn `aria-flowto` einen einzelnen [id](/de/docs/Web/HTML/Reference/Global_attributes/id)-Verweis hat, ermöglicht es unterstützender Technologie, auf Wunsch des Nutzers zu dem über diese `id` anvisierten Element zu gehen, anstatt das Dokument in der Reihenfolge des DOM zu lesen. Wenn der `aria-flowto`-Wert eine durch Leerzeichen getrennte Liste mehrerer `id`-Verweise verwendet, kann die unterstützende Technologie dem Nutzer eine Liste von Auswahlmöglichkeiten des Pfades zur Verfügung stellen, wobei jede referenzierte `id` eine Auswahlmöglichkeit darstellt. Die Namen der Pfadauswahl werden durch den zugänglichen Namen jedes Zielelements des `aria-flowto`-Attributs bestimmt.

> [!NOTE]
> Das Setzen von `aria-flowto` hat keinen Einfluss auf die Tabulatorreihenfolge des Inhalts. Es bietet den Nutzern lediglich die Möglichkeit, einen Inhaltsweg zu folgen, der nicht mit der DOM-Reihenfolge übereinstimmt, wenn sie Technologie verwenden, die dieses Attribut unterstützt.

## Werte

- `id`
  - : Vorgeschlagenes nächstes Element in der Lesereihenfolge.
- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von ID-Werten, die auf die vorgeschlagenen Elemente verweisen, zu denen der Nutzer als nächstes in der alternativen Lesereihenfolge des Inhalts gehen möchte.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut
- HTML [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut
- CSS {{CSSXRef('order')}}-Eigenschaft
- [WCAG: Quellreihenfolge](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verwendung von aria-flowto](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto) - W3 Wiki
