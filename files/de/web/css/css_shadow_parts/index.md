---
title: CSS shadow parts
slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{CSSRef}}

Das **CSS shadow parts**-Modul definiert das {{CSSXref("::part", "::part()")}} Pseudo-Element, das auf einem {{Glossary("Shadow_tree", "Shadow-Host")}} gesetzt werden kann. Mit diesem Pseudo-Element können Sie Shadow-Hosts ermöglichen, das ausgewählte Element im Shadow-Baum für Styling-Zwecke auf der externen Seite freizulegen.

Standardmäßig können Elemente in einem Shadow-Baum nur innerhalb ihrer jeweiligen Shadow-Roots gestylt werden. Das CSS shadow parts-Modul ermöglicht es, ein [`part`](/de/docs/Web/HTML/Global_attributes#part) Attribut auf Nachkommen des {{HTMLElement("template")}} hinzuzufügen, die das benutzerdefinierte Element bilden. Dadurch wird der Knoten des Shadow-Baums für externes Styling über das `::part()` Pseudo-Element zugänglich gemacht.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Global_attributes#part)
- [`exportparts`](/de/docs/Web/HTML/Global_attributes#exportparts)

### Definitionen

- {{Glossary("Shadow_tree", "Shadow-Baum")}}

## Leitfäden

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudo-Elemente, die durch alle CSS-Spezifikationen und WebVTT definiert sind

- [Web-Komponenten](/de/docs/Web/API/Web_components)

  - : Übersicht über die verschiedenen APIs, die die Erstellung wiederverwendbarer benutzerdefinierter Elemente oder Web-Komponenten ermöglichen.

## Verwandte Konzepte

- HTML {{HTMLElement("template")}}-Element
- HTML {{HTMLElement("slot")}}-Element
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

- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Vorlagen: Styling außerhalb des aktuellen Bereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
