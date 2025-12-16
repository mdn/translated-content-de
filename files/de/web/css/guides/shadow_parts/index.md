---
title: CSS-Schattenteile
short-title: Shadow parts
slug: Web/CSS/Guides/Shadow_parts
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS shadow parts** Modul definiert das {{cssxref("::part()")}} Pseudo-Element, das auf einem {{Glossary("Shadow_tree", "Shadow-Host")}} gesetzt werden kann. Mit diesem Pseudo-Element können Sie Shadow-Hosts ermöglichen, das ausgewählte Element im Shadow-Baum für die externe Seite für Styling-Zwecke sichtbar zu machen.

Standardmäßig können Elemente in einem Shadow-Baum nur innerhalb ihrer jeweiligen Shadow-Roots gestylt werden. Das CSS shadow parts Modul ermöglicht es, ein [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut auf Nachfahren von {{HTMLElement("template")}} hinzuzufügen, die das benutzerdefinierte Element bilden, und den Shadow-Baum-Knoten über das `::part()` Pseudo-Element für externes Styling freizugeben.

## Referenz

### Selektoren

- {{cssxref("::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)

### Definitionen

- {{Glossary("Shadow_tree", "Shadow-Baum")}}

## Leitfäden

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste von Pseudo-Elementen, die von allen CSS-Spezifikationen und WebVTT definiert werden.

- [Webkomponenten](/de/docs/Web/API/Web_components)
  - : Übersicht über die verschiedenen APIs, die es ermöglichen, wiederverwendbare benutzerdefinierte Elemente oder Webkomponenten zu erstellen.

## Verwandte Konzepte

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- [`Element.part`](/de/docs/Web/API/Element/part) Eigenschaft
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) Eigenschaft
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}}
  - {{cssxref(":host()")}}
  - {{cssxref(":host-context()")}}
  - {{CSSXref("::slotted")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Templates: Styling außerhalb des aktuellen Scopes](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
