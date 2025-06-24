---
title: CSS Shadow-Parts
slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das Modul **CSS Shadow-Parts** definiert das {{CSSXref("::part", "::part()")}} Pseudo-Element, das auf einem {{Glossary("Shadow_tree", "Shadow-Host")}} gesetzt werden kann. Mit diesem Pseudo-Element können Sie es Shadow-Hosts ermöglichen, das ausgewählte Element im Shadow-Baum für Styling-Zwecke für die externe Seite zugänglich zu machen.

Standardmäßig können Elemente in einem Shadow-Baum nur innerhalb ihrer jeweiligen Shadow-Roots gestylt werden. Das CSS Shadow-Parts-Modul ermöglicht das Einschließen eines [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attributs auf {{HTMLElement("template")}} Nachkommen, die das benutzerdefinierte Element bilden und den Shadow-Baumknoten über das `::part()` Pseudo-Element externem Styling zugänglich machen.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML Attribute

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)

### Definitionen

- {{Glossary("Shadow_tree", "Shadow-Baum")}}

## Leitfäden

- [CSS Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste von Pseudo-Elementen, die von allen CSS-Spezifikationen und WebVTT definiert werden.

- [Webkomponenten](/de/docs/Web/API/Web_components)
  - : Überblick über die verschiedenen APIs, die das Erstellen wiederverwendbarer benutzerdefinierter Elemente oder Webkomponenten ermöglichen.

## Verwandte Konzepte

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- [`Element.part`](/de/docs/Web/API/Element/part) Eigenschaft
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) Eigenschaft
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Templates: Styling außerhalb des aktuellen Geltungsbereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
