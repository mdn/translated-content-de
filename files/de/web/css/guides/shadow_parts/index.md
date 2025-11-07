---
title: CSS-Shadow-Parts
short-title: Shadow parts
slug: Web/CSS/Guides/Shadow_parts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Shadow-Parts** Modul definiert das {{CSSXref("::part", "::part()")}} Pseudoelement, das auf einem {{Glossary("Shadow_tree", "Shadow-Host")}} gesetzt werden kann. Mit diesem Pseudoelement können Sie Shadow-Hosts verwenden, um das ausgewählte Element im Shadow-Tree für die äußere Seite zu Styling-Zwecken zugänglich zu machen.

Standardmäßig können Elemente in einem Shadow-Tree nur innerhalb ihrer jeweiligen Shadow-Roots gestylt werden. Das CSS-Shadow-Parts Modul ermöglicht das Hinzufügen eines [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attributs zu {{HTMLElement("template")}} Nachfahren, die das benutzerdefinierte Element bilden und den Shadow-Tree-Knoten über das `::part()` Pseudoelement für externes Styling freigeben.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)

### Definitionen

- {{Glossary("Shadow_tree", "Shadow-Tree")}}

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste von Pseudoelementen, die durch alle CSS-Spezifikationen und WebVTT definiert sind.

- [Web-Komponenten](/de/docs/Web/API/Web_components)
  - : Überblick über die verschiedenen APIs, die das Erstellen wiederverwendbarer benutzerdefinierter Elemente oder Webkomponenten ermöglichen.

## Verwandte Konzepte

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- [`Element.part`](/de/docs/Web/API/Element/part) Eigenschaft
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) Eigenschaft
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Vorlagen: Styling außerhalb des aktuellen Bereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
