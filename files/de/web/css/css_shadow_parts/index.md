---
title: CSS-Shadow-Teile
slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Shadow-Parts**-Modul definiert das {{CSSXref("::part", "::part()")}} Pseudo-Element, das auf einem {{Glossary("Shadow_tree", "Shadow-Host")}} gesetzt werden kann. Mit diesem Pseudo-Element können Sie es ermöglichen, dass Shadow-Hosts das ausgewählte Element im Schatten-Baum für stilistische Zwecke auf der Außenseite der Seite freigeben.

Standardmäßig können Elemente in einem Schatten-Baum nur innerhalb ihrer jeweiligen Shadow-Roots gestylt werden. Das CSS-Shadow-Parts-Modul ermöglicht es, ein [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut auf {{HTMLElement("template")}} Nachkommen hinzuzufügen, die das benutzerdefinierte Element ausmachen und den Shadow-Tree-Knoten über das `::part()` Pseudo-Element für externe Stile freigeben.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)

### Definitionen

- {{Glossary("Shadow_tree", "Schatten-Baum")}}

## Leitfäden

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)
  - : Alphabetische Liste von Pseudo-Elementen, die von allen CSS-Spezifikationen und WebVTT definiert werden

- [Web-Komponenten](/de/docs/Web/API/Web_components)
  - : Überblick über die verschiedenen APIs, die es ermöglichen, wiederverwendbare benutzerdefinierte Elemente oder Web-Komponenten zu erstellen.

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

- [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Vorlagen: Stil außerhalb des aktuellen Bereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
