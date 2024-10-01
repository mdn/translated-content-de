---
title: CSS Scoping
slug: Web/CSS/CSS_scoping
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **CSS scoping**-Modul definiert die Mechanismen zur CSS-Abgrenzung und -Kapselung, wobei der Fokus auf dem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) [Abgrenzungsmechanismus](https://css.oddbird.net/scope/) liegt.

CSS-Stile sind entweder global oder auf einen {{Glossary("shadow_tree", "shadow tree")}} beschränkt. Global abgegrenzte Stile gelten für alle Elemente im Knotentree, die mit dem Selektor übereinstimmen, einschließlich benutzerdefinierter Elemente in diesem Tree, jedoch nicht für die shadow trees, die jedes benutzerdefinierte Element zusammensetzen. Selektoren und ihre zugehörigen Stildefinitionen dringen nicht zwischen den Abgrenzungen durch.

Innerhalb des CSS eines shadow trees wählen Selektoren keine Elemente außerhalb des Bäume, weder im globalen Umfang noch in anderen shadow trees. Jedes benutzerdefinierte Element hat seinen eigenen shadow tree, der alle Komponenten enthält, die das benutzerdefinierte Element ausmachen (aber nicht das benutzerdefinierte Element selbst, oder den "Host").

Manchmal ist es nützlich, einen Host aus dem Kontext des shadow trees heraus zu stylen. Das CSS scoping-Modul macht dies möglich, indem es Selektoren definiert, die:

- einem shadow tree ermöglichen, seinen Host zu stylen.
- externes CSS ermöglichen, Elemente innerhalb eines Shadow DOM zu stylen (aber nur, wenn das zugehörige benutzerdefinierte Element so eingerichtet ist, dass es externe Stile akzeptiert).

## Referenz

### Selektoren

- {{CSSXref(":host")}}
- {{CSSXref(":host_function", ":host()")}}
- {{CSSXref(":host-context", ":host-context()")}}
- {{CSSXref("::slotted")}}

## Leitfäden

- [Webkomponenten](/de/docs/Web/API/Web_components)

  - : Eine Einführung in die verschiedenen Technologien, die zur Erstellung wiederverwendbarer Webkomponenten verwendet werden — benutzerdefinierte Elemente, deren Funktionalität vom Rest Ihres Codes gekapselt ist.

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)

  - : Grundlagen des Shadow DOM, einschließlich der Anbringung eines Shadow DOM an ein Element, der Ergänzung des Shadow DOM Trees und des Stylings.

- [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)

  - : Definition einer wiederverwendbaren HTML-Struktur unter Verwendung der {{htmlelement("template")}}- und {{htmlelement("slot")}}-Elemente und deren Verwendung innerhalb von Webkomponenten.

- [Verwendung benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)

  - : Einführung in die Custom Elements API, die JavaScript-API zur Erstellung benutzerdefinierter Elemente, die Funktionalität kapseln.

## Verwandte Konzepte

- CSS {{CSSXref(":defined")}} Pseudoklasse
- CSS {{CSSXref("::part")}} Pseudoelement

- HTML {{HTMLElement("template")}} Element
- HTML {{HTMLElement("slot")}} Element
- HTML [`slot`](/de/docs/Web/HTML/Global_attributes/slot) Attribut

- {{Glossary("Shadow_tree", "Shadow tree")}} Glossarbegriff
- {{Glossary("DOM", "DOM")}} Glossarbegriff
- [Komplexer Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Begriff
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
> Trotz des Namens wird die {{CSSXref(":scope")}} Pseudoklasse, die Elemente repräsentiert, die einen Referenzpunkt (oder Umfang) für die Übereinstimmung von Selektoren darstellen, im [Selectors](/de/docs/Web/CSS/CSS_selectors) Modul definiert. Sie ist ansonsten nicht mit dem CSS scoping-Modul verbunden, das sich auf Scoping in Bezug auf den Shadow DOM-Abgrenzungsmechanismus konzentriert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
- [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS Namensräume](/de/docs/Web/CSS/CSS_namespaces) Modul
- [CSS Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
- [Template, Slot und Shadow](https://web.dev/learn/html/template/) auf web.dev (2023)
- [Best Practices für benutzerdefinierte Elemente](https://web.dev/articles/custom-elements-best-practices) auf web.dev (2019)
