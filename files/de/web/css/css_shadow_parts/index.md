---
title: CSS-Shadow-Parts
slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Das **CSS-Shadow-Parts**-Modul definiert das {{CSSXref("::part", "::part()")}}-Pseudo-Element, das auf einem [Shadow-Host](/de/docs/Glossary/Shadow_tree) festgelegt werden kann. Mit diesem Pseudo-Element können Sie Shadow-Hosts ermöglichen, das ausgewählte Element im Shadow-Baum für die externe Seite zum Zwecke der Stilgebung zugänglich zu machen.

Standardmäßig können Elemente in einem Shadow-Baum nur innerhalb ihrer jeweiligen Shadow-Roots gestylt werden. Das CSS-Shadow-Parts-Modul ermöglicht die Einbeziehung eines [`part`](/de/docs/Web/HTML/Global_attributes#part)-Attributs für {{HTMLElement("template")}}-Nachkommen, die das benutzerdefinierte Element bilden, und den Shadow-Tree-Knoten über das `::part()`-Pseudo-Element für externes Styling zugänglich machen.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Global_attributes#part)
- [`exportparts`](/de/docs/Web/HTML/Global_attributes#exportparts)

### Definitionen

- {{glossary("Shadow tree")}}

## Leitfäden

- [CSS-Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudoelemente, die von allen CSS-Spezifikationen und WebVTT definiert sind

- [Web-Components](/de/docs/Web/API/Web_components)

  - : Überblick über die verschiedenen APIs, die das Erstellen wiederverwendbarer benutzerdefinierter Elemente oder Webkomponenten ermöglichen.

## Verwandte Konzepte

- HTML-{{HTMLElement("template")}}-Element
- HTML-{{HTMLElement("slot")}}-Element
- {{domxref("Element.part")}}-Eigenschaft
- {{domxref("Element.shadowRoot")}}-Eigenschaft
- {{domxref("Element.attachShadow()")}}-Methode
- {{domxref("ShadowRoot")}}-Schnittstelle
- [CSS-Skopierung](/de/docs/Web/CSS/CSS_scoping)-Modul
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul
- [Verwendung des Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Vorlagen: Stilgebung außerhalb des aktuellen Bereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
