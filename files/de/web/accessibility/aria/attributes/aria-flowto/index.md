---
title: aria-flowto
slug: Web/Accessibility/ARIA/Attributes/aria-flowto
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale `aria-flowto`-Attribut identifiziert das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge des Inhalts. Dies ermöglicht es unterstützenden Technologien, die allgemeine Voreinstellung des Lesens in der Dokumentquellenreihenfolge nach Ermessen des Benutzers zu überschreiben.

## Beschreibung

Webseiten sollten sequentiell navigierbar sein. Aus diesem Grund wird Entwicklern davon abgeraten, das globale [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut zu verwenden, das die Tabulatorreihenfolge ändern kann, ebenso wie die CSS-{{CSSXRef('order')}}-Eigenschaft, die die visuelle Reihenfolge von der DOM-Reihenfolge abändern kann. In seltenen Fällen ist jedoch ein anderer Lesepfad als die Quellenreihenfolge erforderlich. Für solche Fälle kann das `aria-flowto`-Attribut die Inhalte für Nutzer von unterstützenden Technologien zugänglicher machen.

Das globale `aria-flowto`-Attribut ermöglicht es dem Autor, den Nutzern von unterstützenden Technologien anzugeben, welches Element oder welche Elemente möglicherweise als nächstes fokussiert werden sollten, indem es eine alternative Lesereihenfolge zur Quellenreihenfolge bereitstellt. Dies ermöglicht es unterstützenden Technologien, ein Dokument in einer anderen Reihenfolge als der standardmäßigen Dokumentquellenreihenfolge zu lesen.

Wenn `aria-flowto` einen einzelnen [id](/de/docs/Web/HTML/Global_attributes/id)-Verweis hat, ermöglicht es den unterstützenden Technologien auf Anfrage des Nutzers, zu dem Element zu wechseln, das über diese `id` angesteuert wird, anstatt das Dokument in der Reihenfolge des DOM zu lesen. Wenn der `aria-flowto` Wert eine durch Leerzeichen getrennte Liste von mehreren `id` Verweisen verwendet, kann die unterstützende Technologie dem Nutzer eine Liste von Pfadoptionen bereitstellen, wobei jeder `id` Verweis eine Option darstellt. Die Namen der Pfadoptionen werden durch den zugänglichen Namen jedes Ziel-Elements des `aria-flowto`-Attributs bestimmt.

> [!NOTE]
> Das Festlegen von `aria-flowto` hat keinen Einfluss auf die Tabulatorreihenfolge des Inhalts. Es bietet den Benutzern lediglich die Option, einem Inhaltsweg zu folgen, der nicht mit der DOM-Reihenfolge übereinstimmt, wenn sie Technik verwenden, die dieses Attribut unterstützt.

## Werte

- `id`
  - : Vorgeschlagenes nächstes Element in der Lesereihenfolge.
- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von ID-Werten, die auf die vorgeschlagenen Elemente verweisen, zu denen der Nutzer möglicherweise als nächstes in der alternativen Lesereihenfolge des Inhalts wechseln möchte.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Global_attributes/id) Attribut
- HTML [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut
- CSS {{CSSXRef('order')}} Eigenschaft
- [WCAG: source order](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Using aria-flowto](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto) - W3 Wiki
