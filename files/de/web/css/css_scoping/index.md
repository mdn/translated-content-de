---
title: CSS-Scoping
slug: Web/CSS/CSS_scoping
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das **CSS-Scoping**-Modul definiert die CSS-Scoping- und Kapselungsmechanismen und konzentriert sich auf den [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) [Scoping-Mechanismus](https://css.oddbird.net/scope/).

CSS-Stile sind entweder global oder auf einen {{Glossary("shadow_tree", "Shadow-Baum")}} beschränkt. Global angewandte Stile gelten für alle Elemente im Knotensatz, die mit dem Selektor übereinstimmen, einschließlich benutzerdefinierter Elemente in diesem Baum, jedoch nicht für die Shadow-Bäume, die jedes benutzerdefinierte Element zusammensetzen. Selektoren und ihre zugehörigen Stildefinitionen überschreiten nicht die Grenzen von Scopes.

Innerhalb des CSS eines Shadow-Baums wählen Selektoren keine Elemente außerhalb des Baums aus, weder im globalen Scope noch in anderen Shadow-Bäumen. Jedes benutzerdefinierte Element hat seinen eigenen Shadow-Baum, der alle Komponenten enthält, die das benutzerdefinierte Element ausmachen (jedoch nicht das benutzerdefinierte Element oder den "Host" selbst).

Manchmal ist es nützlich, in der Lage zu sein, einen Host aus dem Kontext des Shadow-Baums zu stylen. Das CSS-Scoping-Modul macht dies möglich, indem es Selektoren definiert, die:

- Es einem Shadow-Baum ermöglichen, seinen Host zu stylen.
- Es externem CSS ermöglichen, Elemente innerhalb eines Shadow DOM zu stylen (aber nur, wenn das zugehörige benutzerdefinierte Element so eingerichtet ist, dass es externe Stile akzeptiert).

## Referenz

### Selektoren

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## Leitfäden

- [Webkomponenten](/de/docs/Web/API/Web_components)

  - : Eine Einführung in die verschiedenen Technologien, die zur Erstellung wiederverwendbarer Webkomponenten verwendet werden — benutzerdefinierte Elemente, deren Funktionalität vom Rest Ihres Codes isoliert ist.

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)

  - : Grundlagen des Shadow DOM, einschließlich der Anbindung eines Shadow DOM an ein Element, der Hinzufügung zum Shadow DOM-Baum und der Stilgebung.

- [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)

  - : Definition wiederverwendbarer HTML-Strukturen mithilfe der {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente und Verwendung dieser Strukturen in Webkomponenten.

- [Verwendung von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements)

  - : Einführung in die Custom Elements-API, die JavaScript-API, die zum Erstellen benutzerdefinierter Elemente verwendet wird, die Funktionalität kapseln.

## Verwandte Konzepte

- CSS {{CSSXref(":defined")}} Pseudoklasse
- CSS {{CSSXref("::part")}} Pseudoelement

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- HTML [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot) Attribut

- {{Glossary("Shadow_tree", "Shadow-Baum")}} Glossarbegriff
- {{Glossary("DOM", "DOM")}} Glossarbegriff
- [Verbundselektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Begriff
- [Selektorliste](/de/docs/Web/CSS/Selector_list) Begriff

- [Webkomponenten](/de/docs/Web/API/Web_components) Schnittstellen, Eigenschaften und Methoden
  - [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Schnittstelle
  - [`Element`](/de/docs/Web/API/Element) API
    - [`Element.slot`](/de/docs/Web/API/Element/slot) Eigenschaft
    - [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) Eigenschaft
    - [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) Methode
  - [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) Schnittstelle
  - [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) Schnittstelle
  - [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle

> [!NOTE]
> Trotz des Namens ist die {{CSSXref(":scope")}} Pseudoklasse, die Elemente darstellt, die einen Referenzpunkt (oder Scope) für Selektoren zum Abgleichen bieten, im [Selectors](/de/docs/Web/CSS/CSS_selectors) Modul definiert. Sie ist ansonsten nicht mit dem CSS-Scoping-Modul verwandt, das sich auf Scoping in Bezug auf den Shadow DOM-Scoping-Mechanismus konzentriert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-Namespaces](/de/docs/Web/CSS/CSS_namespaces) Modul
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [Template, Slot und Shadow](https://web.dev/learn/html/template/) auf web.dev (2023)
- [Best Practices für benutzerdefinierte Elemente](https://web.dev/articles/custom-elements-best-practices) auf web.dev (2019)
