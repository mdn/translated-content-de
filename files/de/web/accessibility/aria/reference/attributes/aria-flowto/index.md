---
title: "ARIA: aria-flowto-Attribut"
short-title: aria-flowto
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-flowto
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-flowto`-Attribut identifiziert das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge von Inhalten. Dadurch kann unterstützende Technologie die allgemeine voreingestellte Lesereihenfolge im Dokument nach eigenem Ermessen überschreiben.

## Beschreibung

Webseiten sollten in einer sequentiellen Reihenfolge navigierbar sein. Aus diesem Grund wird Entwicklern davon abgeraten, das globale [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut zu verwenden, das die Tab-Reihenfolge ändern kann, sowie die CSS {{CSSXRef('order')}}-Eigenschaft, die die visuelle Reihenfolge von der DOM-Reihenfolge ändern kann. In seltenen Fällen ist jedoch ein anderer Lesepfad als die Quellreihenfolge erforderlich. Für solche Fälle kann das `aria-flowto`-Attribut die Inhalte für Benutzer unterstützender Technologien zugänglicher machen.

Das globale `aria-flowto`-Attribut ermöglicht es dem Autor, Nutzern von unterstützenden Technologien anzugeben, welches Element oder welche Elemente als nächstes fokussiert werden könnten, und stellt somit eine alternative Lesereihenfolge zur Quellreihenfolge bereit. Dies ermöglicht unterstützender Technologie, ein Dokument in einer anderen Reihenfolge als der voreingestellten Quellreihenfolge zu lesen.

Wenn `aria-flowto` einen einzelnen [id](/de/docs/Web/HTML/Reference/Global_attributes/id)-Verweis hat, ermöglicht es unterstützenden Technologien, auf Anforderung des Nutzers zu dem Ziel-Element via dieser `id` zu springen, anstatt das Dokument in der DOM-Reihenfolge zu lesen. Wenn der `aria-flowto`-Wert eine durch Leerzeichen getrennte Liste mehrerer `id`-Verweise verwendet, kann unterstützende Technologie dem Benutzer eine Liste von Pfadoptionen anbieten, wobei jeder `id`-Verweis eine Option ist. Die Namen der Pfadoptionen werden durch den zugänglichen Namen jedes Zielelements des `aria-flowto`-Attributs bestimmt.

> [!NOTE]
> Das Setzen von `aria-flowto` hat keinen Einfluss auf die Tab-Reihenfolge des Inhalts. Es bietet Nutzern lediglich die Möglichkeit, einen Inhaltsweg zu folgen, der nicht der DOM-Reihenfolge entspricht, wenn sie Technologie verwenden, die dieses Attribut unterstützt.

## Werte

- `id`
  - : Die `id` des nächsten Elements in der alternativen Lesereihenfolge.
- `id`-Liste
  - : Durch Leerzeichen getrennte Liste von Werten, die auf die `id`-Werte von Elementen verweisen, zu denen der Nutzer als nächstes in der alternativen Lesereihenfolge des Inhalts wechseln möchte.

## Zugehörige Schnittstellen

- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
  - : Die `ariaFlowToElements`-Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Instanzen von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Verweise im `aria-flowto`-Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaFlowToElements`](/de/docs/Web/API/ElementInternals/ariaFlowToElements)
  - : Die `ariaFlowToElements`-Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Instanzen von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Verweise im `aria-flowto`-Attribut widerspiegeln ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

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
