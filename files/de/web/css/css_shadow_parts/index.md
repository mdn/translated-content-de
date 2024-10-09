---
title: CSS shadow parts
slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

Das **CSS shadow parts** Modul definiert das {{CSSXref("::part", "::part()")}} Pseudoelement, das auf einem {{Glossary("Shadow_tree", "shadow host")}} gesetzt werden kann. Mit diesem Pseudoelement können Sie Shadow Hosts ermöglichen, das ausgewählte Element im Shadow-Baum für Styling-Zwecke auf der externen Seite freizulegen.

Standardmäßig können Elemente in einem Shadow-Baum nur innerhalb ihrer jeweiligen Shadow-Roots gestylt werden. Das CSS shadow parts Modul ermöglicht es, ein [`part`](/de/docs/Web/HTML/Global_attributes/part) Attribut auf Nachkommen des {{HTMLElement("template")}} hinzuzufügen, die das benutzerdefinierte Element bilden, um den Node des Shadow-Baums über das `::part()` Pseudoelement externem Styling zugänglich zu machen.

## Referenz

### Selektoren

- {{CSSXref("::part", "::part()")}}

### HTML-Attribute

- [`part`](/de/docs/Web/HTML/Global_attributes/part)
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)

### Definitionen

- {{Glossary("Shadow_tree", "Shadow-Baum")}}

## Leitfäden

- [CSS Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements)

  - : Alphabetische Liste der Pseudo-Elemente, die in allen CSS-Spezifikationen und WebVTT definiert sind.

- [Web Components](/de/docs/Web/API/Web_components)

  - : Übersicht über die verschiedenen APIs, die es ermöglichen, wiederverwendbare benutzerdefinierte Elemente oder Web-Komponenten zu erstellen.

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
- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [Templates: Styling außerhalb des aktuellen Bereichs](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) auf web.dev (2023)
