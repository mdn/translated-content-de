---
title: CSS-Schatten-Teile
slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **CSS-Schatten-Teile**-Modul definiert das {{CSSXref("::part", "::part()")}} Pseudoelement, das auf einem {{Glossary("Shadow_tree", "Schattenhost")}} gesetzt werden kann. Mit diesem Pseudoelement können Sie Schattenhosts ermöglichen, das ausgewählte Element im Schattendom zum äußeren Stilzweck offenzulegen.

Standardmäßig können Elemente in einem Schattendom nur innerhalb ihrer jeweiligen Schattenwurzeln gestylt werden. Das CSS-Schatten-Teile-Modul ermöglicht das Hinzufügen eines [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attributs auf {{HTMLElement("template")}} Nachkommen, die das benutzerdefinierte Element bilden, um den Schattendom-Knoten über das `::part()` Pseudoelement für externes Styling freizugeben.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)

### Definitionen

- {{Glossary("Shadow_tree", "Schattendom")}}

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : Alphabetische Liste von Pseudoelementen, die von allen CSS-Spezifikationen und WebVTT definiert sind.

- [Webkomponenten](/de/docs/Web/API/Web_components)
  - : Überblick über die verschiedenen APIs, die das Erstellen wiederverwendbarer benutzerdefinierter Elemente oder Webkomponenten ermöglichen.

## Verwandte Konzepte

- HTML {{HTMLElement("template")}}-Element
- HTML {{HTMLElement("slot")}}-Element
- [`Element.part`](/de/docs/Web/API/Element/part)-Eigenschaft
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot)-Eigenschaft
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)-Methode
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle
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
- [Vorlagen: Stylen außerhalb des aktuellen Bereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
