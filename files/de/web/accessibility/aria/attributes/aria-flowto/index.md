---
title: aria-flowto
slug: Web/Accessibility/ARIA/Attributes/aria-flowto
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das globale `aria-flowto`-Attribut identifiziert das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge des Inhalts. Dadurch kann unterstützende Technologie es dem Benutzer ermöglichen, die allgemeine Standardreihenfolge des Lesens in der Dokumentquellenreihenfolge zu überschreiben.

## Beschreibung

Webseiten sollten sequentiell navigierbar sein. Aus diesem Grund wird Entwicklern davon abgeraten, das globale [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut zu verwenden, das die Tab-Reihenfolge ändern kann, und die CSS-Eigenschaft {{CSSXRef('order')}} zu verwenden, die die visuelle Reihenfolge von der DOM-Reihenfolge ändern kann. In seltenen Fällen ist jedoch ein anderer Lesepfad als die Quellreihenfolge erforderlich. Für solche Fälle kann das `aria-flowto`-Attribut den Inhalt für Benutzer von unterstützenden Technologien zugänglicher machen.

Das globale `aria-flowto`-Attribut ermöglicht es dem Autor, Benutzern von unterstützenden Technologien anzuzeigen, welches Element oder welche Elemente als Nächstes fokussiert werden könnten, indem eine alternative Lesereihenfolge zur Quellreihenfolge bereitgestellt wird. Dies ermöglicht es unterstützender Technologie, ein Dokument in einer anderen Reihenfolge als der Standard-Dokumentquellenlesereihenfolge zu lesen.

Wenn `aria-flowto` einen einzelnen [id](/de/docs/Web/HTML/Global_attributes/id)-Verweis hat, ermöglicht es unterstützenden Technologien, auf Wunsch des Benutzers zu dem Element zu gehen, das über diese `id` gezielt wird, anstatt das Dokument in der Reihenfolge des DOM zu lesen. Wenn der `aria-flowto`-Wert eine durch Leerzeichen getrennte Liste von mehreren `id`-Verweisen verwendet, kann die unterstützende Technologie dem Benutzer eine Liste von Pfadoptionen bereitstellen, wobei jede referenzierte `id` eine Wahlmöglichkeit darstellt. Die Pfadauswahl-Namen werden durch den zugänglichen Namen jedes Ziel-Elements des `aria-flowto`-Attributs bestimmt.

> [!NOTE]
> Die Einstellung von `aria-flowto` beeinflusst nicht die Tab-Reihenfolge des Inhalts. Es bietet den Benutzern nur die Möglichkeit, einem Inhaltsweg zu folgen, der nicht mit der DOM-Reihenfolge übereinstimmt, wenn sie Technik verwenden, die dieses Attribut unterstützt.

## Werte

- `id`
  - : Vorgeschlagenes nächstes Element in der Lesereihenfolge.
- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von ID-Werten, die auf die vorgeschlagenen Elemente verweisen, zu denen der Benutzer in der alternativen Lesereihenfolge des Inhalts als Nächstes gehen könnte.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Global_attributes/id)-Attribut
- HTML [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut
- CSS-Eigenschaft {{CSSXRef('order')}}
- [WCAG: Quellreihenfolge](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Using aria-flowto](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto) - W3 Wiki
