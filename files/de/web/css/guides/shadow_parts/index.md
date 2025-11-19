---
title: CSS-Shadownteile
short-title: Shadow parts
slug: Web/CSS/Guides/Shadow_parts
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS Shadow Parts** Modul definiert das {{CSSXref("::part", "::part()")}} Pseudoelement, das auf einem {{Glossary("Shadow_tree", "Shadow-Host")}} gesetzt werden kann. Mithilfe dieses Pseudoelements können Sie Shadow-Hosts ermöglichen, das ausgewählte Element im Shadow-Baum für externe Seiten zu Styling-Zwecken freizugeben.

Standardmäßig können Elemente in einem Shadow-Baum nur innerhalb ihrer jeweiligen Shadow-Roots gestylt werden. Das CSS-Shadow-Parts-Modul ermöglicht das Hinzufügen eines [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attributs auf {{HTMLElement("template")}}-Nachfahren, die das benutzerdefinierte Element ausmachen und den Shadow-Baumknoten über das `::part()` Pseudoelement für externes Styling freigeben.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)

### Definitionen

- {{Glossary("Shadow_tree", "Shadow-Baum")}}

## Leitfäden

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste der Pseudo-Elemente, die in allen CSS-Spezifikationen und WebVTT definiert sind

- [Web-Komponenten](/de/docs/Web/API/Web_components)
  - : Übersicht über die verschiedenen APIs, die das Erstellen wiederverwendbarer benutzerdefinierter Elemente oder Web-Komponenten ermöglichen.

## Verwandte Konzepte

- HTML {{HTMLElement("template")}}-Element
- HTML {{HTMLElement("slot")}}-Element
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

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Templates: Styling außerhalb des aktuellen Bereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
