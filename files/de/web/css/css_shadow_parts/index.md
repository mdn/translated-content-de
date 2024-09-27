---
title: CSS-Schattenteile
slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Das **CSS-Schattenteile**-Modul definiert das {{CSSXref("::part", "::part()")}} Pseudoelement, das auf einem [Schatten-Host](/de/docs/Glossary/Shadow_tree) gesetzt werden kann. Mit diesem Pseudoelement können Sie Schatten-Hosts dazu bringen, das ausgewählte Element im Schattendokumentbaum für stilistische Zwecke an die äußere Seite freizugeben.

Standardmäßig können Elemente in einem Schattendokumentbaum nur innerhalb ihrer jeweiligen Schattenwurzeln gestylt werden. Das CSS-Schattenteile-Modul ermöglicht es, ein [`part`](/de/docs/Web/HTML/Global_attributes#part) Attribut auf {{HTMLElement("template")}} Nachfahren hinzuzufügen, die das benutzerdefinierte Element bilden, und den Knoten des Schattendokumentbaums über das `::part()` Pseudoelement extern zu stylen.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Global_attributes#part)
- [`exportparts`](/de/docs/Web/HTML/Global_attributes#exportparts)

### Definitionen

- [Schattendokumentbaum](/de/docs/Glossary/Shadow_tree)

## Leitfäden

- [CSS Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudoelemente, die von allen CSS-Spezifikationen und WebVTT definiert werden.

- [Webkomponenten](/de/docs/Web/API/Web_components)

  - : Übersicht über die verschiedenen APIs, die es ermöglichen, wiederverwendbare benutzerdefinierte Elemente oder Webkomponenten zu erstellen.

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

- [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Templates: Styling außerhalb des aktuellen Bereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
