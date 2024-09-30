---
title: aria-flowto
slug: Web/Accessibility/ARIA/Attributes/aria-flowto
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale `aria-flowto`-Attribut identifiziert das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge von Inhalten. Dies ermöglicht es unterstützender Technologie, die allgemeine Standardeinstellung des Lesens in der Dokumentquellreihenfolge nach Ermessen des Benutzers zu überschreiben.

## Beschreibung

Webseiten sollten sequentiell navigierbar sein. Aus diesem Grund wird Entwicklern davon abgeraten, das globale [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut zu verwenden, das die Tabulatorreihenfolge ändern kann, und die CSS-Eigenschaft {{CSSXRef('order')}}, die die visuelle Reihenfolge von der DOM-Reihenfolge ändern kann. In seltenen Fällen ist jedoch ein anderer Leseweg als die Quellreihenfolge erforderlich. Für solche Fälle kann das `aria-flowto`-Attribut den Inhalt für Benutzer unterstützender Technologien zugänglicher machen.

Das globale `aria-flowto`-Attribut ermöglicht es dem Autor, den Benutzern unterstützender Technologien anzuzeigen, welches Element oder welche Elemente möglicherweise als Nächstes fokussiert werden sollten, indem es eine alternative Lesereihenfolge zur Quellreihenfolge bereitstellt. Dadurch kann unterstützende Technologie ein Dokument in einer anderen Reihenfolge als der Standard-Lesereihenfolge der Dokumentquelle lesen.

Wenn `aria-flowto` einen einzelnen [id](/de/docs/Web/HTML/Global_attributes/id)-Verweis hat, können unterstützende Technologien auf Anforderung des Benutzers zu dem über diese `id` angesprochenen Element springen, anstatt das Dokument in der Reihenfolge des DOM zu lesen. Wenn der `aria-flowto`-Wert eine durch Leerzeichen getrennte Liste mehrerer `id`-Verweise verwendet, kann die unterstützende Technologie dem Benutzer eine Liste von Pfadoptionen bereitstellen, wobei jede `id`-Referenz eine Wahlmöglichkeit darstellt. Die Namen der Pfadoptionen werden durch den zugänglichen Namen jedes Zielelements des `aria-flowto`-Attributs bestimmt.

> [!NOTE]
> Das Festlegen von `aria-flowto` hat keinen Einfluss auf die Tabulatorreihenfolge des Inhalts. Es bietet den Benutzern lediglich die Option, einem Inhaltsweg zu folgen, der nicht mit der DOM-Reihenfolge übereinstimmt, wenn sie Technologien verwenden, die dieses Attribut unterstützen.

## Werte

- `id`
  - : Vorgeschlagenes nächstes Element in der Lesereihenfolge.
- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von ID-Werten, die die vorgeschlagenen Elemente referenzieren, zu denen der Benutzer in der alternativen Lesereihenfolge des Inhalts als nächstes gehen möchte.

## Zugeordnete Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Global_attributes/id)-Attribut
- HTML [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut
- CSS-Eigenschaft {{CSSXRef('order')}}
- [WCAG: Quellreihenfolge](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Using aria-flowto](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto) - W3 Wiki
