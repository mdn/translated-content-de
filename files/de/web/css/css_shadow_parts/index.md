---
title: CSS-Schatten-Parts
slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das **CSS-Schatten-Parts**-Modul definiert das {{CSSXref("::part", "::part()")}} Pseudo-Element, das auf einem {{Glossary("Shadow_tree", "Schatten-Host")}} festgelegt werden kann. Mit diesem Pseudo-Element können Sie Schatten-Hosts ermöglichen, das ausgewählte Element im Schattenbaum der Außenseite der Seite für Stylingzwecke zugänglich zu machen.

Standardmäßig können Elemente in einem Schattenbaum nur innerhalb ihrer jeweiligen Schattenwurzel gestylt werden. Das CSS-Schatten-Parts-Modul ermöglicht es, ein [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut auf Nachkommen von {{HTMLElement("template")}} einzuschließen, die das benutzerdefinierte Element bilden und den Schattenbaumnode über das `::part()` Pseudo-Element für externes Styling offenzulegen.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)

### Definitionen

- {{Glossary("Shadow_tree", "Schattenbaum")}}

## Leitfäden

- [CSS Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudo-Elemente, die von allen CSS-Spezifikationen und WebVTT definiert werden

- [Web-Komponenten](/de/docs/Web/API/Web_components)

  - : Übersicht über die verschiedenen APIs, die das Erstellen von wiederverwendbaren benutzerdefinierten Elementen oder Web-Komponenten ermöglichen.

## Verwandte Konzepte

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- [`Element.part`](/de/docs/Web/API/Element/part) Eigenschaft
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) Eigenschaft
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Verwendung von Schatten-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Templates: Styling außerhalb des aktuellen Bereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
