---
title: aria-flowto
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-flowto
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale `aria-flowto`-Attribut identifiziert das nächste Element (oder Elemente) in einer alternativen Lesereihenfolge des Inhalts. Dies ermöglicht unterstützenden Technologien, die allgemeine Standard-Lesereihenfolge im Quellcode nach Ermessen des Benutzers zu überschreiben.

## Beschreibung

Webseiten sollten sequentiell navigierbar sein. Aus diesem Grund wird Entwicklern davon abgeraten, das globale [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut zu verwenden, welches die Tabulatorreihenfolge ändern kann, sowie die CSS {{CSSXRef('order')}}-Eigenschaft, die die visuelle Reihenfolge aus der DOM-Reihenfolge verändern kann. In seltenen Fällen ist jedoch ein anderer Leseweg als die Quellreihenfolge erforderlich. Für solche Fälle kann das `aria-flowto`-Attribut den Inhalt für Nutzer von unterstützenden Technologien zugänglicher machen.

Das globale `aria-flowto`-Attribut ermöglicht es dem Autor, Nutzern von unterstützenden Technologien anzugeben, welches Element oder welche Elemente möglicherweise als Nächstes fokussiert werden sollten, und bietet somit eine alternative Lesereihenfolge zur Quellreihenfolge. Dies ermöglicht es unterstützender Technologie, ein Dokument in einer anderen als der standardmäßigen Dokumentquell-Lesereihenfolge zu lesen.

Wenn `aria-flowto` einen einzigen [id](/de/docs/Web/HTML/Global_attributes/id)-Verweis enthält, erlaubt es unterstützenden Technologien, auf Anforderung des Benutzers zu dem über diese `id` angezielten Element zu gehen, anstatt das Dokument in der Reihenfolge des DOM zu lesen. Wenn der `aria-flowto`-Wert eine durch Leerzeichen getrennte Liste mehrerer `id`-Verweise verwendet, kann unterstützende Technologie dem Benutzer eine Liste von Pfadoptionen bieten, wobei jede referenzierte `id` eine Wahlmöglichkeit darstellt. Die Pfadwahl-Namen werden durch den zugänglichen Namen jedes Ziel-Elements des `aria-flowto`-Attributs bestimmt.

> [!NOTE]
> Die Einstellung von `aria-flowto` beeinflusst nicht die Tabulatorreihenfolge des Inhalts. Es bietet lediglich die Option, einem Inhaltspfad zu folgen, der nicht der DOM-Reihenfolge entspricht, wenn unterstützende Technik dieses Attribut unterstützt.

## Werte

- `id`
  - : Vorgeschlagenes nächstes Element in der Lesereihenfolge.
- `id` Liste
  - : Durch Leerzeichen getrennte Liste von ID-Werten, die die vorgeschlagenen Elemente referenzieren, zu denen der Benutzer in der alternativen Lesereihenfolge des Inhalts als Nächstes gelangen könnte.

## Zugehörige Rollen

Verwendbar in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Global_attributes/id)-Attribut
- HTML [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut
- CSS {{CSSXRef('order')}}-Eigenschaft
- [WCAG: Quellreihenfolge](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Using aria-flowto](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto) - W3 Wiki
