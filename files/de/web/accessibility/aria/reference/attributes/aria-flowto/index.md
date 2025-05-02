---
title: aria-flowto
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-flowto
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

Das globale `aria-flowto`-Attribut identifiziert das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge des Inhalts. Dies ermöglicht assistierenden Technologien, die allgemeine Standardeinstellung des Lesens in Dokumenten-Quellreihenfolge nach Ermessen des Benutzers zu überschreiben.

## Beschreibung

Webseiten sollten sequentiell navigierbar sein. Aus diesem Grund wird Entwicklern abgeraten, das globale [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut zu verwenden, das die Tabulatorreihenfolge ändern kann, sowie die CSS {{CSSXRef('order')}}-Eigenschaft, die die visuelle Reihenfolge von der DOM-Reihenfolge ändern kann. In seltenen Fällen ist jedoch ein vom Quellordner abweichender Lesepfad erforderlich. Für solche Fälle kann das `aria-flowto`-Attribut den Inhalt für Benutzer assistiver Technologien zugänglicher machen.

Das globale `aria-flowto`-Attribut ermöglicht es dem Autor, Benutzer assistiver Technologien darauf hinzuweisen, welches Element oder welche Elemente als nächstes fokussiert werden könnten, indem eine alternative Lesereihenfolge zur Quellreihenfolge bereitgestellt wird. Dies ermöglicht assistierenden Technologien, ein Dokument in einer anderen Reihenfolge als der Standard-Lesereihenfolge des Dokumentenquells zu lesen.

Wenn `aria-flowto` einen einzelnen [id](/de/docs/Web/HTML/Reference/Global_attributes/id)-Verweis hat, ermöglicht es assistiven Technologien, dem Benutzerwunsch zufolge, zu dem über diese `id` angezielten Element zu wechseln, anstatt das Dokument in der Reihenfolge des DOM zu lesen. Wenn der `aria-flowto`-Wert eine durch Leerzeichen getrennte Liste mehrerer `id`-Verweise verwendet, kann die assistive Technologie dem Benutzer eine Liste von Pfadoptionen anbieten, wobei jede referenzierte `id` eine Option darstellt. Die Namen der Pfadoptionen werden durch den zugänglichen Namen jedes Zielelements des `aria-flowto`-Attributs bestimmt.

> [!NOTE]
> Das Setzen von `aria-flowto` hat keine Auswirkungen auf die Tab-Reihenfolge des Inhalts. Es bietet den Benutzern nur die Option, einem Inhaltsweg zu folgen, der nicht der DOM-Reihenfolge entspricht, wenn sie Technologien verwenden, die dieses Attribut unterstützen.

## Werte

- `id`
  - : Die `id` des nächsten Elements in der alternativen Lesereihenfolge.
- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von Werten, die die `id`-Werte der Elemente referenzieren, zu denen der Benutzer als nächstes in der alternativen Lesereihenfolge des Inhalts wechseln möchte.

## Zugehörige Schnittstellen

- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
  - : Die Eigenschaft `ariaFlowToElements` ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Instanzen von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-flowto`-Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements)
  - : Die Eigenschaft `ariaFlowToElements` ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Instanzen von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-flowto`-Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [id](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut
- HTML [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut
- CSS {{CSSXRef('order')}}-Eigenschaft
- [WCAG: Quellreihenfolge](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Using aria-flowto](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto) - W3 Wiki
